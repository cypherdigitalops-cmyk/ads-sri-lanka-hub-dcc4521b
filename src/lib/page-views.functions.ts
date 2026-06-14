import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const PageViewInput = z.object({
  page_url: z.string().trim().max(500).optional().or(z.literal("")),
  page_path: z.string().trim().max(300).optional().or(z.literal("")),
  referrer: z.string().trim().max(500).optional().or(z.literal("")),
  user_agent: z.string().trim().max(500).optional().or(z.literal("")),
});

export const logPageView = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => PageViewInput.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("page_views").insert({
      page_url: data.page_url || null,
      page_path: data.page_path || null,
      referrer: data.referrer || null,
      user_agent: data.user_agent || null,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

const StatsInput = z.object({
  page_path: z.string().trim().min(1).max(300),
  days: z.number().int().min(1).max(365).default(30),
});

export type HubStats = {
  isAdmin: boolean;
  page_path: string;
  days: number;
  views: number;
  whatsapp_clicks: number;
  cta_clicks_total: number;
  inquiries: number;
  conversion_rate: number; // (inquiries + whatsapp_clicks) / views
};

export const getHubStats = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => StatsInput.parse(input))
  .handler(async ({ context, data }): Promise<HubStats> => {
    const { supabase, userId } = context;
    const { data: roleRows } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId);
    const isAdmin = (roleRows ?? []).some((r) => r.role === "admin");
    if (!isAdmin) throw new Error("Forbidden: admin only");

    const sinceIso = new Date(Date.now() - data.days * 24 * 60 * 60 * 1000).toISOString();
    const path = data.page_path;
    // match either exact /slug or /slug?... — we store the path component as page_path
    const likePath = `${path}%`;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const [viewsRes, ctaRes, inqRes] = await Promise.all([
      supabaseAdmin
        .from("page_views")
        .select("id", { count: "exact", head: true })
        .eq("page_path", path)
        .gte("created_at", sinceIso),
      supabaseAdmin
        .from("cta_clicks")
        .select("cta", { count: "exact" })
        .like("page_url", `%${path}%`)
        .gte("created_at", sinceIso),
      supabaseAdmin
        .from("inquiries")
        .select("id", { count: "exact", head: true })
        .like("page_url", `%${path}%`)
        .gte("created_at", sinceIso),
    ]);

    void likePath; // (reserved for future LIKE matching)
    const views = viewsRes.count ?? 0;
    const ctaRows = (ctaRes.data ?? []) as Array<{ cta: string }>;
    const cta_clicks_total = ctaRes.count ?? ctaRows.length;
    const whatsapp_clicks = ctaRows.filter((r) => r.cta === "whatsapp").length;
    const inquiries = inqRes.count ?? 0;
    const numerator = inquiries + whatsapp_clicks;
    const conversion_rate = views > 0 ? numerator / views : 0;

    return {
      isAdmin,
      page_path: path,
      days: data.days,
      views,
      whatsapp_clicks,
      cta_clicks_total,
      inquiries,
      conversion_rate,
    };
  });