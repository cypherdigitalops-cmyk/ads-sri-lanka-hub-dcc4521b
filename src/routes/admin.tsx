import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { listInquiries, updateInquiry, deleteInquiry, claimAdminRole } from "@/lib/inquiries.functions";
import { listCtaClicks } from "@/lib/cta-clicks.functions";
import { toast } from "sonner";
import { LogOut, Search, Trash2, Phone, MessageCircle, Mail, MousePointerClick } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    meta: [
      { title: "Inquiries | Admin" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

type Inquiry = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  company: string | null;
  service: string | null;
  message: string | null;
  page_url: string | null;
  referrer: string | null;
  status: "new" | "contacted" | "quoted" | "won" | "lost";
  admin_notes: string | null;
  created_at: string;
};

const STATUS_OPTIONS = ["new", "contacted", "quoted", "won", "lost"] as const;
const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-500/15 text-blue-600 border-blue-500/30",
  contacted: "bg-amber-500/15 text-amber-600 border-amber-500/30",
  quoted: "bg-purple-500/15 text-purple-600 border-purple-500/30",
  won: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
  lost: "bg-rose-500/15 text-rose-600 border-rose-500/30",
};

function AdminPage() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState<"checking" | "ready" | "unauth">("checking");
  const [userEmail, setUserEmail] = useState<string>("");
  const claim = useServerFn(claimAdminRole);

  useEffect(() => {
    let cancelled = false;
    async function check() {
      const { data, error } = await supabase.auth.getUser();
      if (cancelled) return;
      if (error || !data.user) {
        setAuthState("unauth");
        navigate({ to: "/login", replace: true });
        return;
      }
      setUserEmail(data.user.email ?? "");
      // Try to claim admin role (no-op if already admin or email doesn't match)
      try {
        await claim({});
      } catch {
        /* ignore */
      }
      setAuthState("ready");
    }
    check();
    return () => {
      cancelled = true;
    };
  }, [navigate, claim]);

  if (authState !== "ready") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    );
  }

  return <AdminDashboard userEmail={userEmail} />;
}

function AdminDashboard({ userEmail }: { userEmail: string }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const list = useServerFn(listInquiries);
  const update = useServerFn(updateInquiry);
  const remove = useServerFn(deleteInquiry);
  const listClicks = useServerFn(listCtaClicks);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Inquiry | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["inquiries"],
    queryFn: () => list(),
  });

  const { data: clicksData } = useQuery({
    queryKey: ["cta_clicks"],
    queryFn: () => listClicks(),
  });

  const updateMutation = useMutation({
    mutationFn: (vars: { id: string; status?: Inquiry["status"]; admin_notes?: string }) =>
      update({ data: vars }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
      toast.success("Updated");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Update failed"),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => remove({ data: { id } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
      setSelected(null);
      toast.success("Deleted");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Delete failed"),
  });

  const inquiries = (data?.inquiries ?? []) as Inquiry[];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return inquiries.filter((i) => {
      if (statusFilter !== "all" && i.status !== statusFilter) return false;
      if (!q) return true;
      return [i.name, i.phone, i.email, i.company, i.service, i.message]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    });
  }, [inquiries, search, statusFilter]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: inquiries.length };
    for (const s of STATUS_OPTIONS) c[s] = 0;
    for (const i of inquiries) c[i.status] = (c[i.status] ?? 0) + 1;
    return c;
  }, [inquiries]);

  const topServices = useMemo(() => {
    const map = new Map<string, { total: number; won: number; lost: number; open: number }>();
    for (const i of inquiries) {
      const key = (i.service || "").trim();
      if (!key) continue;
      const cur = map.get(key) ?? { total: 0, won: 0, lost: 0, open: 0 };
      cur.total += 1;
      if (i.status === "won") cur.won += 1;
      else if (i.status === "lost") cur.lost += 1;
      else cur.open += 1;
      map.set(key, cur);
    }
    return Array.from(map.entries())
      .map(([service, s]) => ({
        service,
        ...s,
        winRate: s.won + s.lost > 0 ? Math.round((s.won / (s.won + s.lost)) * 100) : null,
      }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 8);
  }, [inquiries]);

  const maxServiceTotal = topServices[0]?.total ?? 0;

  type ClickRow = { id: string; cta: string; page_url: string | null; created_at: string };
  const clicks = (clicksData?.clicks ?? []) as ClickRow[];

  function shortPath(url: string | null): string {
    if (!url) return "(unknown)";
    try {
      const u = new URL(url);
      return u.pathname + (u.search || "");
    } catch {
      return url;
    }
  }

  const topPagesByInquiry = useMemo(() => {
    const map = new Map<string, number>();
    for (const i of inquiries) {
      const k = shortPath(i.page_url);
      map.set(k, (map.get(k) ?? 0) + 1);
    }
    return Array.from(map.entries())
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, [inquiries]);

  const topPagesByWhatsApp = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of clicks) {
      if (c.cta !== "whatsapp") continue;
      const k = shortPath(c.page_url);
      map.set(k, (map.get(k) ?? 0) + 1);
    }
    return Array.from(map.entries())
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, [clicks]);

  const topPagesByCall = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of clicks) {
      if (c.cta !== "call") continue;
      const k = shortPath(c.page_url);
      map.set(k, (map.get(k) ?? 0) + 1);
    }
    return Array.from(map.entries())
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, [clicks]);

  const ctaTotals = useMemo(() => {
    const t = { whatsapp: 0, call: 0, quote: 0, email: 0 } as Record<string, number>;
    for (const c of clicks) t[c.cta] = (t[c.cta] ?? 0) + 1;
    return t;
  }, [clicks]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate({ to: "/login", replace: true });
  }

  if (error) {
    const msg = error instanceof Error ? error.message : "Failed to load";
    const isForbidden = /forbidden/i.test(msg);
    return (
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="mt-4 text-sm text-rose-600">{msg}</p>
        {isForbidden && (
          <p className="mt-2 text-sm text-muted-foreground">
            You're signed in as <strong>{userEmail}</strong>, but this email isn't the configured admin.
            Ask your developer to set the <code>ADMIN_EMAIL</code> secret to your email and refresh.
          </p>
        )}
        <button
          onClick={handleLogout}
          className="mt-6 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-muted"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <Link to="/" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground">
              ← Back to site
            </Link>
            <h1 className="text-xl font-bold sm:text-2xl">Inquiries</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-muted-foreground sm:inline">{userEmail}</span>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold hover:bg-muted"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        {/* CTA totals */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <KpiCard label="WhatsApp clicks" value={ctaTotals.whatsapp} tone="emerald" />
          <KpiCard label="Call clicks" value={ctaTotals.call} tone="blue" />
          <KpiCard label="Quote opens" value={ctaTotals.quote} tone="amber" />
          <KpiCard label="Email clicks" value={ctaTotals.email} tone="violet" />
        </div>

        {/* Top pages — 3 columns */}
        <div className="mb-6 grid gap-4 lg:grid-cols-3">
          <TopPagesCard
            title="Top pages — Inquiries"
            subtitle="Pages that drove form submissions"
            rows={topPagesByInquiry}
            empty="No inquiries yet."
          />
          <TopPagesCard
            title="Top pages — WhatsApp clicks"
            subtitle="Pages where visitors tap WhatsApp"
            rows={topPagesByWhatsApp}
            empty="No WhatsApp clicks tracked yet."
          />
          <TopPagesCard
            title="Top pages — Call clicks"
            subtitle="Pages where visitors tap to call"
            rows={topPagesByCall}
            empty="No call clicks tracked yet."
          />
        </div>

        {/* Top services */}
        {topServices.length > 0 && (
          <div className="mb-6 overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div>
                <h2 className="text-sm font-bold">Top services by inquiries</h2>
                <p className="text-xs text-muted-foreground">
                  Where demand is concentrated and how it's converting
                </p>
              </div>
              <span className="text-xs text-muted-foreground">
                {topServices.length} of {new Set(inquiries.map(i => i.service).filter(Boolean)).size}
              </span>
            </div>
            <ul className="divide-y divide-border">
              {topServices.map((s) => {
                const pct = maxServiceTotal ? (s.total / maxServiceTotal) * 100 : 0;
                return (
                  <li key={s.service} className="px-4 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSearch(s.service)}
                        className="truncate text-left text-sm font-semibold hover:underline"
                        title="Filter by this service"
                      >
                        {s.service}
                      </button>
                      <div className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">{s.total}</span>
                        <span className="text-emerald-600">{s.won}W</span>
                        <span className="text-rose-600">{s.lost}L</span>
                        <span className="text-amber-600">{s.open} open</span>
                        <span className="w-12 text-right font-semibold text-foreground">
                          {s.winRate === null ? "—" : `${s.winRate}%`}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Filters */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setStatusFilter("all")}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
              statusFilter === "all" ? "border-foreground bg-foreground text-background" : "border-border bg-card"
            }`}
          >
            All ({counts.all ?? 0})
          </button>
          {STATUS_OPTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold capitalize ${
                statusFilter === s ? "border-foreground bg-foreground text-background" : "border-border bg-card"
              }`}
            >
              {s} ({counts[s] ?? 0})
            </button>
          ))}
          <div className="relative ml-auto w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, phone, service…"
              className="w-full rounded-full border border-border bg-card py-2 pl-9 pr-3 text-sm"
            />
          </div>
        </div>

        {isLoading ? (
          <p className="py-12 text-center text-sm text-muted-foreground">Loading inquiries…</p>
        ) : filtered.length === 0 ? (
          <p className="py-12 text-center text-sm text-muted-foreground">No inquiries match.</p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 text-left">When</th>
                    <th className="px-4 py-3 text-left">Name</th>
                    <th className="px-4 py-3 text-left">Contact</th>
                    <th className="px-4 py-3 text-left">Service</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filtered.map((i) => (
                    <tr key={i.id} className="hover:bg-muted/30">
                      <td className="whitespace-nowrap px-4 py-3 text-xs text-muted-foreground">
                        {new Date(i.created_at).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 font-semibold">
                        {i.name}
                        {i.company && (
                          <div className="text-xs font-normal text-muted-foreground">{i.company}</div>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col gap-1 text-xs">
                          <span>{i.phone}</span>
                          {i.email && <span className="text-muted-foreground">{i.email}</span>}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs">{i.service || "—"}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block rounded-full border px-2 py-0.5 text-xs font-semibold capitalize ${
                            STATUS_COLORS[i.status]
                          }`}
                        >
                          {i.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => setSelected(i)}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold hover:bg-muted"
                        >
                          Open
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {selected && (
        <InquiryDrawer
          inquiry={selected}
          onClose={() => setSelected(null)}
          onUpdate={(patch) => updateMutation.mutate({ id: selected.id, ...patch })}
          onDelete={() => {
            if (confirm("Delete this inquiry permanently?")) deleteMutation.mutate(selected.id);
          }}
        />
      )}
    </div>
  );
}

function InquiryDrawer({
  inquiry,
  onClose,
  onUpdate,
  onDelete,
}: {
  inquiry: Inquiry;
  onClose: () => void;
  onUpdate: (patch: { status?: Inquiry["status"]; admin_notes?: string }) => void;
  onDelete: () => void;
}) {
  const [notes, setNotes] = useState(inquiry.admin_notes ?? "");
  const waPhone = inquiry.phone.replace(/[^0-9]/g, "").replace(/^0/, "94");

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button className="absolute inset-0 bg-background/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative ml-auto flex h-full w-full max-w-md flex-col overflow-y-auto bg-card shadow-xl">
        <div className="border-b border-border p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold">{inquiry.name}</h2>
              <p className="text-xs text-muted-foreground">
                {new Date(inquiry.created_at).toLocaleString()}
              </p>
            </div>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              ✕
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={`tel:${inquiry.phone}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
            >
              <Phone className="h-3.5 w-3.5" /> Call
            </a>
            <a
              href={`https://wa.me/${waPhone}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
            {inquiry.email && (
              <a
                href={`mailto:${inquiry.email}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold"
              >
                <Mail className="h-3.5 w-3.5" /> Email
              </a>
            )}
          </div>
        </div>

        <div className="space-y-4 p-5 text-sm">
          <Field label="Phone">{inquiry.phone}</Field>
          {inquiry.email && <Field label="Email">{inquiry.email}</Field>}
          {inquiry.company && <Field label="Company">{inquiry.company}</Field>}
          {inquiry.service && <Field label="Service">{inquiry.service}</Field>}
          {inquiry.message && (
            <Field label="Message">
              <p className="whitespace-pre-wrap">{inquiry.message}</p>
            </Field>
          )}
          {inquiry.page_url && (
            <Field label="Submitted from">
              <a href={inquiry.page_url} target="_blank" rel="noreferrer" className="break-all text-primary underline">
                {inquiry.page_url}
              </a>
            </Field>
          )}

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Status
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {STATUS_OPTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => onUpdate({ status: s })}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize ${
                    inquiry.status === s
                      ? STATUS_COLORS[s]
                      : "border-border bg-background"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Internal notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              onBlur={() => {
                if (notes !== (inquiry.admin_notes ?? "")) onUpdate({ admin_notes: notes });
              }}
              rows={4}
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Quote sent, follow-up date, decision…"
            />
          </div>
        </div>

        <div className="mt-auto border-t border-border p-5">
          <button
            onClick={onDelete}
            className="inline-flex items-center gap-2 text-xs font-semibold text-rose-600 hover:underline"
          >
            <Trash2 className="h-3.5 w-3.5" /> Delete inquiry
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1">{children}</div>
    </div>
  );
}