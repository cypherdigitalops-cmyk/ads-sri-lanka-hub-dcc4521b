import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const GUIDANCE_STATUSES = ["new", "advice_sent", "in_discussion", "won", "lost"] as const;
export type GuidanceStatus = (typeof GUIDANCE_STATUSES)[number];

const SubmitInput = z.object({
  sells: z.string().trim().min(2).max(300),
  customers: z.string().trim().max(300).optional().or(z.literal("")),
  goals: z.array(z.string().trim().max(80)).max(10).default([]),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  digital_presence: z.enum(["yes", "some", "no"]).optional(),
  name: z.string().trim().min(2).max(120),
  whatsapp: z.string().trim().min(6).max(40),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
  source_page: z.string().trim().max(300).optional().or(z.literal("")),
  referrer: z.string().trim().max(500).optional().or(z.literal("")),
  // Simple spam protection (no third-party captcha keys needed)
  hp: z.string().max(200).optional(),
  elapsed_ms: z.number().nonnegative().optional(),
});

export const submitGuidanceInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SubmitInput.parse(input))
  .handler(async ({ data }) => {
    // Spam heuristics: honeypot filled, or submitted impossibly fast.
    if ((data.hp && data.hp.trim().length > 0) || (data.elapsed_ms !== undefined && data.elapsed_ms < 2500)) {
      return { ok: true, id: null as string | null, spam: true };
    }

    let ip: string | null = null;
    let ua: string | null = null;
    try {
      const req = getRequest();
      ip =
        req.headers.get("cf-connecting-ip") ||
        (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
        null;
      ua = (req.headers.get("user-agent") || "").slice(0, 500) || null;
    } catch {
      /* ignore */
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: inserted, error } = await supabaseAdmin
      .from("guidance_inquiries")
      .insert({
        sells: data.sells,
        customers: data.customers || null,
        goals: data.goals ?? [],
        budget: data.budget || null,
        digital_presence: data.digital_presence || null,
        name: data.name,
        whatsapp: data.whatsapp,
        notes: data.notes || null,
        source_page: data.source_page || null,
        referrer: data.referrer || null,
        ip_address: ip,
        user_agent: ua,
      })
      .select("id")
      .single();

    if (error) throw new Error(error.message);
    return { ok: true, id: inserted.id as string, spam: false };
  });

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data: roleRows } = await context.supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", context.userId);
  const isAdmin = (roleRows ?? []).some((r: { role: string }) => r.role === "admin");
  if (!isAdmin) throw new Error("Forbidden: admin only");
}

export const listGuidanceInquiries = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context as never);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("guidance_inquiries")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1000);
    if (error) throw new Error(error.message);
    return { rows: data ?? [] };
  });

const UpdateInput = z.object({
  id: z.string().uuid(),
  status: z.enum(GUIDANCE_STATUSES).optional(),
  admin_notes: z.string().max(4000).optional(),
});

export const updateGuidanceInquiry = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => UpdateInput.parse(input))
  .handler(async ({ data, context }) => {
    await assertAdmin(context as never);
    const patch: { status?: GuidanceStatus; admin_notes?: string } = {};
    if (data.status) patch.status = data.status;
    if (typeof data.admin_notes === "string") patch.admin_notes = data.admin_notes;
    if (Object.keys(patch).length === 0) return { ok: true };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("guidance_inquiries").update(patch).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteGuidanceInquiry = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    await assertAdmin(context as never);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("guidance_inquiries").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });