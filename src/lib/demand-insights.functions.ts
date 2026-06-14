import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type DemandRow = {
  page: string;
  views: number;
  whatsapp: number;
  call: number;
  quote: number;
  email: number;
  inquiries: number;
  score: number;
};

function shortPath(url: string | null): string {
  if (!url) return "(unknown)";
  try {
    const u = new URL(url);
    return u.pathname;
  } catch {
    return url;
  }
}

export const getDemandInsights = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{ rows: DemandRow[]; sinceIso: string }> => {
    const { supabase, userId } = context;
    const { data: roleRows } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId);
    const isAdmin = (roleRows ?? []).some((r) => r.role === "admin");
    if (!isAdmin) throw new Error("Forbidden: admin only");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const sinceIso = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

    const [viewsRes, clicksRes, inqRes] = await Promise.all([
      supabaseAdmin
        .from("page_views")
        .select("page_path")
        .gte("created_at", sinceIso)
        .limit(10000),
      supabaseAdmin
        .from("cta_clicks")
        .select("cta,page_url")
        .gte("created_at", sinceIso)
        .limit(10000),
      supabaseAdmin
        .from("inquiries")
        .select("page_url")
        .gte("created_at", sinceIso)
        .limit(10000),
    ]);

    const map = new Map<string, DemandRow>();
    const ensure = (k: string): DemandRow => {
      let cur = map.get(k);
      if (!cur) {
        cur = { page: k, views: 0, whatsapp: 0, call: 0, quote: 0, email: 0, inquiries: 0, score: 0 };
        map.set(k, cur);
      }
      return cur;
    };

    for (const v of viewsRes.data ?? []) {
      const k = (v.page_path || "(unknown)").trim() || "(unknown)";
      ensure(k).views += 1;
    }
    for (const c of clicksRes.data ?? []) {
      const k = shortPath(c.page_url);
      const row = ensure(k);
      if (c.cta === "whatsapp") row.whatsapp += 1;
      else if (c.cta === "call") row.call += 1;
      else if (c.cta === "quote") row.quote += 1;
      else if (c.cta === "email") row.email += 1;
    }
    for (const i of inqRes.data ?? []) {
      ensure(shortPath(i.page_url)).inquiries += 1;
    }

    // Weighted demand score: views matter, intent matters far more.
    // views x1, whatsapp x6, call x8, quote x5, email x4, inquiries x15
    for (const row of map.values()) {
      row.score =
        row.views * 1 +
        row.whatsapp * 6 +
        row.call * 8 +
        row.quote * 5 +
        row.email * 4 +
        row.inquiries * 15;
    }

    // Exclude admin/internal pages
    const rows = Array.from(map.values())
      .filter((r) => r.page && !r.page.startsWith("/admin") && r.page !== "(unknown)")
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    return { rows, sinceIso };
  });