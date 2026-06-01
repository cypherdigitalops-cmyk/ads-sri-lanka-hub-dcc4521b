import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const CtaInput = z.object({
  cta: z.enum(["whatsapp", "call", "quote", "email"]),
  page_url: z.string().trim().max(500).optional().or(z.literal("")),
  referrer: z.string().trim().max(500).optional().or(z.literal("")),
  user_agent: z.string().trim().max(500).optional().or(z.literal("")),
  meta: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
});

export const logCtaClick = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => CtaInput.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("cta_clicks").insert({
      cta: data.cta,
      page_url: data.page_url || null,
      referrer: data.referrer || null,
      user_agent: data.user_agent || null,
      meta: data.meta ?? null,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const listCtaClicks = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    const { data: roleRows } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId);
    const isAdmin = (roleRows ?? []).some((r) => r.role === "admin");
    if (!isAdmin) throw new Error("Forbidden: admin only");

    const { data, error } = await supabaseAdmin
      .from("cta_clicks")
      .select("id,cta,page_url,referrer,created_at")
      .order("created_at", { ascending: false })
      .limit(5000);
    if (error) throw new Error(error.message);
    return { clicks: data ?? [] };
  });