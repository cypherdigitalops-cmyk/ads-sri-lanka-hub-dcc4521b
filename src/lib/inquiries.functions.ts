import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const InquiryInput = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(4).max(40),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  service: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  page_url: z.string().trim().max(500).optional().or(z.literal("")),
  referrer: z.string().trim().max(500).optional().or(z.literal("")),
  user_agent: z.string().trim().max(500).optional().or(z.literal("")),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InquiryInput.parse(input))
  .handler(async ({ data }) => {
    const row = {
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      company: data.company || null,
      service: data.service || null,
      message: data.message || null,
      page_url: data.page_url || null,
      referrer: data.referrer || null,
      user_agent: data.user_agent || null,
    };
    const { data: inserted, error } = await supabaseAdmin
      .from("inquiries")
      .insert(row)
      .select("id")
      .single();
    if (error) throw new Error(error.message);

    return { id: inserted.id };
  });

export const listInquiries = createServerFn({ method: "GET" })
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
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1000);
    if (error) throw new Error(error.message);
    return { inquiries: data ?? [] };
  });

const UpdateInput = z.object({
  id: z.string().uuid(),
  status: z.enum(["new", "contacted", "quoted", "won", "lost"]).optional(),
  admin_notes: z.string().max(4000).optional(),
});

export const updateInquiry = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => UpdateInput.parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { data: roleRows } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId);
    const isAdmin = (roleRows ?? []).some((r) => r.role === "admin");
    if (!isAdmin) throw new Error("Forbidden: admin only");

    const patch: { status?: "new" | "contacted" | "quoted" | "won" | "lost"; admin_notes?: string } = {};
    if (data.status) patch.status = data.status;
    if (typeof data.admin_notes === "string") patch.admin_notes = data.admin_notes;
    if (Object.keys(patch).length === 0) return { ok: true };

    const { error } = await supabaseAdmin
      .from("inquiries")
      .update(patch)
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteInquiry = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { data: roleRows } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId);
    const isAdmin = (roleRows ?? []).some((r) => r.role === "admin");
    if (!isAdmin) throw new Error("Forbidden: admin only");
    const { error } = await supabaseAdmin.from("inquiries").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// Bootstrap: grants admin role to the logged-in user if their email matches ADMIN_EMAIL secret.
export const claimAdminRole = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { claims, userId } = context;
    const adminEmail = (process.env.ADMIN_EMAIL || "infobuzzconnect@gmail.com").trim().toLowerCase();
    if (!adminEmail) {
      return { ok: false, reason: "ADMIN_EMAIL not configured" };
    }
    const email = String((claims as { email?: string }).email || "").toLowerCase();
    if (!email || email !== adminEmail) {
      return { ok: false, reason: "Email does not match admin" };
    }
    const { error } = await supabaseAdmin
      .from("user_roles")
      .upsert({ user_id: userId, role: "admin" }, { onConflict: "user_id,role" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });