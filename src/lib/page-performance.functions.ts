import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type PageRange = "today" | "7d" | "30d" | "all";

export type PageRow = {
  path: string;
  title: string;
  views: number;
  ctaTotal: number;
  call: number;
  whatsapp: number;
  email: number;
  quote: number;
  formClicks: number; // other CTA types e.g. "inquiry", "apply_job"
  inquiries: number;
  score: number;
};

export type PagePerformance = {
  range: PageRange;
  rows: PageRow[];
  best: PageRow | null;
  mostClicked: PageRow | null;
  mostInquiries: PageRow | null;
};

function rangeStart(range: PageRange): string | null {
  const day = 24 * 60 * 60 * 1000;
  if (range === "today") {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString();
  }
  if (range === "7d") return new Date(Date.now() - 7 * day).toISOString();
  if (range === "30d") return new Date(Date.now() - 30 * day).toISOString();
  return null;
}

function toPath(url: string | null | undefined): string | null {
  if (!url) return null;
  let p = url;
  try {
    p = new URL(url).pathname;
  } catch {
    // already a path
  }
  if (!p) return null;
  if (p === "/") return "/";
  // strip trailing slash, query
  p = p.split("?")[0].split("#")[0].replace(/\/+$/, "");
  if (!p) return "/";
  if (p.startsWith("/admin") || p.startsWith("/login") || p.startsWith("/auth")) return null;
  return p.toLowerCase();
}

function titleize(path: string): string {
  if (path === "/") return "Home";
  const last = path.split("/").filter(Boolean).pop() ?? path;
  return last
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export const getPagePerformance = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { range: PageRange }) => {
    const allowed: PageRange[] = ["today", "7d", "30d", "all"];
    return { range: allowed.includes(input?.range) ? input.range : "7d" };
  })
  .handler(async ({ data, context }): Promise<PagePerformance> => {
    const { supabase, userId } = context;
    const { data: roleRows } = await supabase.from("user_roles").select("role").eq("user_id", userId);
    const isAdmin = (roleRows ?? []).some((r) => r.role === "admin");
    if (!isAdmin) throw new Error("Forbidden: admin only");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const since = rangeStart(data.range);

    const viewsQ = supabaseAdmin.from("page_views").select("page_path,created_at").limit(50000);
    const clicksQ = supabaseAdmin.from("cta_clicks").select("cta,page_url,created_at").limit(50000);
    const inqQ = supabaseAdmin.from("inquiries").select("page_url,created_at").limit(50000);
    if (since) {
      viewsQ.gte("created_at", since);
      clicksQ.gte("created_at", since);
      inqQ.gte("created_at", since);
    }
    const [viewsRes, clicksRes, inqRes] = await Promise.all([viewsQ, clicksQ, inqQ]);

    const rows = new Map<string, PageRow>();
    const ensure = (path: string): PageRow => {
      let r = rows.get(path);
      if (!r) {
        r = {
          path,
          title: titleize(path),
          views: 0,
          ctaTotal: 0,
          call: 0,
          whatsapp: 0,
          email: 0,
          quote: 0,
          formClicks: 0,
          inquiries: 0,
          score: 0,
        };
        rows.set(path, r);
      }
      return r;
    };

    for (const v of viewsRes.data ?? []) {
      const p = toPath(v.page_path);
      if (!p) continue;
      ensure(p).views += 1;
    }
    for (const c of clicksRes.data ?? []) {
      const p = toPath(c.page_url);
      if (!p) continue;
      const row = ensure(p);
      row.ctaTotal += 1;
      const cta = String(c.cta || "").toLowerCase();
      if (cta === "call") row.call += 1;
      else if (cta === "whatsapp") row.whatsapp += 1;
      else if (cta === "email") row.email += 1;
      else if (cta === "quote") row.quote += 1;
      else row.formClicks += 1;
    }
    for (const i of inqRes.data ?? []) {
      const p = toPath(i.page_url);
      if (!p) continue;
      ensure(p).inquiries += 1;
    }

    const all = Array.from(rows.values()).map((r) => {
      r.score = Math.round((r.ctaTotal * 0.4 + r.inquiries * 0.6) * 10) / 10;
      return r;
    });

    const ranked = [...all].filter((r) => r.ctaTotal > 0 || r.inquiries > 0).sort((a, b) => b.score - a.score);
    const best = ranked[0] ?? null;
    const mostClicked = [...all].sort((a, b) => b.ctaTotal - a.ctaTotal)[0] ?? null;
    const mostInquiries = [...all].sort((a, b) => b.inquiries - a.inquiries)[0] ?? null;

    return {
      range: data.range,
      rows: ranked.slice(0, 25),
      best,
      mostClicked: mostClicked && mostClicked.ctaTotal > 0 ? mostClicked : null,
      mostInquiries: mostInquiries && mostInquiries.inquiries > 0 ? mostInquiries : null,
    };
  });