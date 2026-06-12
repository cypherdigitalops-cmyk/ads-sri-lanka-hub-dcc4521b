import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { listInquiries, updateInquiry, deleteInquiry, claimAdminRole } from "@/lib/inquiries.functions";
import { listCtaClicks } from "@/lib/cta-clicks.functions";
import { toast } from "sonner";
import { LogOut, Search, Trash2, Phone, MessageCircle, Mail, FileText, Trophy, Star, AlertTriangle, Ghost, type LucideIcon } from "lucide-react";

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
const STATUS_PILL: Record<string, { bg: string; fg: string }> = {
  new:       { bg: "#CCE3F8", fg: "#1D4ED8" },
  contacted: { bg: "#FDE4B5", fg: "#B45309" },
  quoted:    { bg: "#EEEDFE", fg: "#3C3489" },
  won:       { bg: "#D6EBB6", fg: "#3F6212" },
  lost:      { bg: "#FBD0D0", fg: "#B91C1C" },
};

const AVATAR_PALETTE: { bg: string; fg: string }[] = [
  { bg: "#CCE3F8", fg: "#1D4ED8" },
  { bg: "#D6EBB6", fg: "#3F6212" },
  { bg: "#FDE4B5", fg: "#B45309" },
  { bg: "#EEEDFE", fg: "#3C3489" },
  { bg: "#C7F0DF", fg: "#047857" },
];

const CARD_STYLE: React.CSSProperties = {
  background: "#FFFFFF",
  border: "0.5px solid #e5e4de",
  borderRadius: 14,
};

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0]!.toUpperCase();
  return (parts[0][0]! + parts[parts.length - 1][0]!).toUpperCase();
}

function greetingFor(date: Date): string {
  const h = date.getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

function relativeTime(iso: string): string {
  const then = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - then.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const sameDay = then.toDateString() === now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = then.toDateString() === yesterday.toDateString();

  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin} min${diffMin === 1 ? "" : "s"} ago`;
  if (sameDay) {
    const t = then.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }).toLowerCase();
    return `today ${t}`;
  }
  if (isYesterday) return "yesterday";
  const days = Math.floor(diffMs / 86400000);
  if (days < 7) return `${days} days ago`;
  if (days < 14) return "last week";
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
}

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
      <div className="flex min-h-screen items-center justify-center" style={{ background: "#F5F5F3" }}>
        <p className="text-sm" style={{ color: "#6b6b68" }}>Loading…</p>
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
      <div className="mx-auto max-w-2xl px-6 py-16" style={{ color: "#1a1a1a" }}>
        <h1 className="text-2xl" style={{ fontWeight: 500 }}>Admin</h1>
        <p className="mt-4 text-sm" style={{ color: "#B91C1C" }}>{msg}</p>
        {isForbidden && (
          <p className="mt-2 text-sm" style={{ color: "#6b6b68" }}>
            You're signed in as <strong>{userEmail}</strong>, but this email isn't the configured admin.
            Ask your developer to set the <code>ADMIN_EMAIL</code> secret to your email and refresh.
          </p>
        )}
        <button
          onClick={handleLogout}
          className="mt-6 rounded-full px-4 py-2 text-sm"
          style={{ border: "0.5px solid #e5e4de", background: "#FFFFFF", fontWeight: 500 }}
        >
          Sign out
        </button>
      </div>
    );
  }

  const username = (userEmail.split("@")[0] || "there").replace(/[._-]+/g, " ");
  const today = new Date();
  const dateLabel = today.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  // Best performing page = combine inquiries + all CTA clicks per page
  const bestPage = (() => {
    const map = new Map<string, { inq: number; wa: number; call: number; quote: number; email: number; total: number }>();
    const bump = (k: string, kind: "inq" | "wa" | "call" | "quote" | "email") => {
      const cur = map.get(k) ?? { inq: 0, wa: 0, call: 0, quote: 0, email: 0, total: 0 };
      cur[kind] += 1;
      cur.total += 1;
      map.set(k, cur);
    };
    for (const i of inquiries) bump(shortPath(i.page_url), "inq");
    for (const c of clicks) {
      const k = shortPath(c.page_url);
      if (c.cta === "whatsapp") bump(k, "wa");
      else if (c.cta === "call") bump(k, "call");
      else if (c.cta === "quote") bump(k, "quote");
      else if (c.cta === "email") bump(k, "email");
    }
    const arr = Array.from(map.entries()).sort((a, b) => b[1].total - a[1].total);
    return arr[0] ?? null;
  })();

  return (
    <div className="min-h-screen" style={{ background: "#F5F5F3", color: "#1a1a1a", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <header style={{ background: "#FFFFFF", borderBottom: "0.5px solid #e5e4de" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <Link to="/" className="text-xs" style={{ color: "#6b6b68", fontWeight: 500 }}>
              ← Back to site
            </Link>
            <h1 className="text-xl sm:text-2xl" style={{ fontWeight: 500, color: "#1a1a1a" }}>Inquiries</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs sm:inline" style={{ color: "#6b6b68" }}>{userEmail}</span>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              style={{ border: "0.5px solid #e5e4de", background: "#FFFFFF", fontWeight: 500 }}
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        {/* Greeting bar */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 style={{ fontSize: 20, fontWeight: 500, color: "#1a1a1a" }}>
            {greetingFor(today)}, <span style={{ textTransform: "capitalize" }}>{username}</span> 👋
          </h2>
          <span
            style={{
              background: "#F5F5F3",
              border: "0.5px solid #e5e4de",
              borderRadius: 20,
              fontSize: 12,
              padding: "4px 12px",
              color: "#6b6b68",
            }}
          >
            {dateLabel}
          </span>
        </div>

        {/* Today's activity */}
        <TodayPanel inquiries={inquiries} clicks={clicks} shortPath={shortPath} />

        {/* CTA totals */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <KpiCard
            label="WhatsApp clicks"
            value={ctaTotals.whatsapp}
            icon={MessageCircle}
            iconBg="#C7F0DF"
            color="#047857"
            badgeLabel="Top CTA"
            badgeBg="#D6EBB6"
            badgeFg="#3F6212"
          />
          <KpiCard
            label="Call clicks"
            value={ctaTotals.call}
            icon={Phone}
            iconBg="#D6EBB6"
            color="#3F6212"
            badgeLabel="High intent"
            badgeBg="#D6EBB6"
            badgeFg="#3F6212"
          />
          <KpiCard
            label="Quote opens"
            value={ctaTotals.quote}
            icon={FileText}
            iconBg="#FDE4B5"
            color="#B45309"
            badgeLabel="Follow up"
            badgeBg="#FDE4B5"
            badgeFg="#B45309"
          />
          <KpiCard
            label="Email clicks"
            value={ctaTotals.email}
            icon={Mail}
            iconBg="#FBD0D0"
            color="#B91C1C"
            badgeLabel="Fix CTA"
            badgeBg="#FBD0D0"
            badgeFg="#B91C1C"
          />
        </div>

        {/* Best performing page */}
        {bestPage && (
          <div className="mb-6 p-5" style={CARD_STYLE}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center"
                  style={{ width: 32, height: 32, borderRadius: 9, background: "#FDE4B5" }}
                >
                  <Trophy size={16} color="#B45309" />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "#6b6b68" }}>Best performing page</div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: "#1a1a1a" }} className="break-all">
                    {bestPage[0]}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <StatPill label="Inquiries" value={bestPage[1].inq} bg="#CCE3F8" fg="#1D4ED8" />
                <StatPill label="WhatsApp" value={bestPage[1].wa} bg="#C7F0DF" fg="#047857" />
                <StatPill label="Calls" value={bestPage[1].call} bg="#D6EBB6" fg="#3F6212" />
                <StatPill label="Quotes" value={bestPage[1].quote} bg="#FDE4B5" fg="#B45309" />
                <StatPill label="Emails" value={bestPage[1].email} bg="#FBD0D0" fg="#B91C1C" />
              </div>
            </div>
          </div>
        )}

        {/* Top pages — 3 columns */}
        <div className="mb-6 grid gap-4 lg:grid-cols-3">
          <TopPagesCard
            title="Top pages — Inquiries"
            subtitle="Pages that drove form submissions"
            rows={topPagesByInquiry}
            empty="No inquiries yet."
            barColor="#2563EB"
          />
          <TopPagesCard
            title="Top pages — WhatsApp clicks"
            subtitle="Pages where visitors tap WhatsApp"
            rows={topPagesByWhatsApp}
            empty="No WhatsApp clicks tracked yet."
            barColor="#059669"
          />
          <TopPagesCard
            title="Top pages — Call clicks"
            subtitle="Pages where visitors tap to call"
            rows={topPagesByCall}
            empty="No call clicks tracked yet."
            barColor="#65A30D"
          />
        </div>

        <PagePerformanceMatrix inquiries={inquiries} clicks={clicks} shortPath={shortPath} />

        {/* Top services */}
        {topServices.length > 0 && (
          <div className="mb-6 overflow-hidden" style={CARD_STYLE}>
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "0.5px solid #e5e4de" }}>
              <div>
                <h2 className="text-sm" style={{ fontWeight: 500, color: "#1a1a1a" }}>Top services by inquiries</h2>
                <p className="text-xs" style={{ color: "#6b6b68" }}>
                  Where demand is concentrated and how it's converting
                </p>
              </div>
              <span className="text-xs" style={{ color: "#9e9d97" }}>
                {topServices.length} of {new Set(inquiries.map(i => i.service).filter(Boolean)).size}
              </span>
            </div>
            <ul>
              {topServices.map((s) => {
                const pct = maxServiceTotal ? (s.total / maxServiceTotal) * 100 : 0;
                return (
                  <li key={s.service} className="px-4 py-3" style={{ borderTop: "0.5px solid #e5e4de" }}>
                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSearch(s.service)}
                        className="truncate text-left text-sm hover:underline"
                        style={{ fontWeight: 500, color: "#1a1a1a" }}
                        title="Filter by this service"
                      >
                        {s.service}
                      </button>
                      <div className="flex shrink-0 items-center gap-3 text-xs" style={{ color: "#6b6b68" }}>
                        <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{s.total}</span>
                        <span style={{ color: "#3F6212" }}>{s.won}W</span>
                        <span style={{ color: "#B91C1C" }}>{s.lost}L</span>
                        <span style={{ color: "#B45309" }}>{s.open} open</span>
                        <span className="w-12 text-right" style={{ color: "#1a1a1a", fontWeight: 500 }}>
                          {s.winRate === null ? "—" : `${s.winRate}%`}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 overflow-hidden" style={{ height: 4, borderRadius: 2, background: "#e5e4de" }}>
                      <div
                        style={{ width: `${pct}%`, height: "100%", background: "#2563EB" }}
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
            className="rounded-full px-3 py-1.5 text-xs"
            style={{
              fontWeight: 500,
              border: "0.5px solid #e5e4de",
              background: statusFilter === "all" ? "#1a1a1a" : "#FFFFFF",
              color: statusFilter === "all" ? "#FFFFFF" : "#1a1a1a",
            }}
          >
            All ({counts.all ?? 0})
          </button>
          {STATUS_OPTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className="rounded-full px-3 py-1.5 text-xs capitalize"
              style={{
                fontWeight: 500,
                border: "0.5px solid #e5e4de",
                background: statusFilter === s ? "#1a1a1a" : "#FFFFFF",
                color: statusFilter === s ? "#FFFFFF" : "#1a1a1a",
              }}
            >
              {s} ({counts[s] ?? 0})
            </button>
          ))}
          <div className="relative ml-auto w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: "#9e9d97" }} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, phone, service…"
              className="w-full rounded-full py-2 pl-9 pr-3 text-sm"
              style={{ border: "0.5px solid #e5e4de", background: "#FFFFFF", color: "#1a1a1a" }}
            />
          </div>
        </div>

        {isLoading ? (
          <p className="py-12 text-center text-sm" style={{ color: "#6b6b68" }}>Loading inquiries…</p>
        ) : filtered.length === 0 ? (
          <p className="py-12 text-center text-sm" style={{ color: "#6b6b68" }}>No inquiries match.</p>
        ) : (
          <div className="overflow-hidden" style={CARD_STYLE}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead style={{ background: "#F5F5F3", color: "#6b6b68" }} className="text-xs">
                  <tr>
                    <th className="px-4 py-3 text-left" style={{ fontWeight: 500 }}>When</th>
                    <th className="px-4 py-3 text-left" style={{ fontWeight: 500 }}>Name</th>
                    <th className="px-4 py-3 text-left" style={{ fontWeight: 500 }}>Contact</th>
                    <th className="px-4 py-3 text-left" style={{ fontWeight: 500 }}>Service</th>
                    <th className="px-4 py-3 text-left" style={{ fontWeight: 500 }}>Status</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((i, idx) => {
                    const av = AVATAR_PALETTE[idx % AVATAR_PALETTE.length];
                    const pill = STATUS_PILL[i.status];
                    return (
                      <tr
                        key={i.id}
                        onClick={() => setSelected(i)}
                        className="cursor-pointer transition-colors"
                        style={{ borderTop: "0.5px solid #e5e4de" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#F0F0ED")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <td className="whitespace-nowrap px-4 py-3 text-xs" style={{ color: "#9e9d97" }}>
                          {relativeTime(i.created_at)}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2.5">
                            <div
                              className="flex shrink-0 items-center justify-center rounded-full"
                              style={{
                                width: 32,
                                height: 32,
                                background: av.bg,
                                color: av.fg,
                                fontSize: 12,
                                fontWeight: 500,
                              }}
                            >
                              {initials(i.name)}
                            </div>
                            <div>
                              <div style={{ color: "#1a1a1a", fontWeight: 500 }}>{i.name}</div>
                              {i.company && (
                                <div className="text-xs" style={{ color: "#6b6b68" }}>{i.company}</div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-col gap-1 text-xs">
                            <span style={{ color: "#1a1a1a" }}>{i.phone}</span>
                            {i.email && <span style={{ color: "#6b6b68" }}>{i.email}</span>}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-xs" style={{ color: "#1a1a1a" }}>{i.service || "—"}</td>
                        <td className="px-4 py-3">
                          <span
                            className="inline-block capitalize"
                            style={{
                              background: pill.bg,
                              color: pill.fg,
                              borderRadius: 20,
                              padding: "2px 10px",
                              fontSize: 11,
                              fontWeight: 500,
                            }}
                          >
                            {i.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                            className="rounded-full px-3 py-1 text-xs"
                            style={{ border: "0.5px solid #e5e4de", background: "#FFFFFF", fontWeight: 500, color: "#1a1a1a" }}
                          >
                            Open
                          </button>
                        </td>
                      </tr>
                    );
                  })}
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
              {STATUS_OPTIONS.map((s) => {
                const active = inquiry.status === s;
                const pill = STATUS_PILL[s];
                return (
                  <button
                    key={s}
                    onClick={() => onUpdate({ status: s })}
                    className="rounded-full px-3 py-1 text-xs capitalize"
                    style={{
                      fontWeight: 500,
                      border: "0.5px solid #e5e4de",
                      background: active ? pill.bg : "#FFFFFF",
                      color: active ? pill.fg : "#1a1a1a",
                    }}
                  >
                    {s}
                  </button>
                );
              })}
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

function KpiCard({
  label,
  value,
  icon: Icon,
  iconBg,
  color,
  badgeLabel,
  badgeBg,
  badgeFg,
}: {
  label: string;
  value: number;
  icon: LucideIcon;
  iconBg: string;
  color: string;
  badgeLabel: string;
  badgeBg: string;
  badgeFg: string;
}) {
  return (
    <div className="p-4" style={CARD_STYLE}>
      <div
        className="flex items-center justify-center"
        style={{ width: 32, height: 32, borderRadius: 9, background: iconBg }}
      >
        <Icon size={16} color={color} />
      </div>
      <div className="mt-3" style={{ fontSize: 24, fontWeight: 500, color }}>
        {value.toLocaleString()}
      </div>
      <div className="mt-1" style={{ fontSize: 12, color: "#6b6b68" }}>
        {label}
      </div>
      <span
        className="mt-2 inline-block"
        style={{
          background: badgeBg,
          color: badgeFg,
          borderRadius: 20,
          padding: "2px 10px",
          fontSize: 11,
          fontWeight: 500,
        }}
      >
        {badgeLabel}
      </span>
    </div>
  );
}

function StatPill({ label, value, bg, fg }: { label: string; value: number; bg: string; fg: string }) {
  return (
    <span
      style={{
        background: bg,
        color: fg,
        borderRadius: 20,
        padding: "4px 12px",
        fontSize: 12,
        fontWeight: 500,
      }}
    >
      {label} {value}
    </span>
  );
}

type TodayClickRow = { id: string; cta: string; page_url: string | null; created_at: string };
type TodayInquiryRow = {
  id: string;
  name: string;
  service: string | null;
  page_url: string | null;
  created_at: string;
};

function TodayPanel({
  inquiries,
  clicks,
  shortPath,
}: {
  inquiries: TodayInquiryRow[];
  clicks: TodayClickRow[];
  shortPath: (url: string | null) => string;
}) {
  const isToday = (iso: string) => {
    const d = new Date(iso);
    const now = new Date();
    return (
      d.getFullYear() === now.getFullYear() &&
      d.getMonth() === now.getMonth() &&
      d.getDate() === now.getDate()
    );
  };

  const todayInq = inquiries.filter((i) => isToday(i.created_at));
  const todayClicks = clicks.filter((c) => isToday(c.created_at));

  const counts = {
    whatsapp: todayClicks.filter((c) => c.cta === "whatsapp").length,
    call: todayClicks.filter((c) => c.cta === "call").length,
    quote: todayClicks.filter((c) => c.cta === "quote").length,
    email: todayClicks.filter((c) => c.cta === "email").length,
    inquiries: todayInq.length,
  };

  // Pages visitors are interested in today (any engagement: click or inquiry)
  const pageMap = new Map<
    string,
    { total: number; wa: number; call: number; quote: number; email: number; inq: number }
  >();
  const bump = (k: string, kind: "wa" | "call" | "quote" | "email" | "inq") => {
    const cur = pageMap.get(k) ?? { total: 0, wa: 0, call: 0, quote: 0, email: 0, inq: 0 };
    cur.total += 1;
    cur[kind] += 1;
    pageMap.set(k, cur);
  };
  for (const c of todayClicks) {
    const k = shortPath(c.page_url);
    if (c.cta === "whatsapp") bump(k, "wa");
    else if (c.cta === "call") bump(k, "call");
    else if (c.cta === "quote") bump(k, "quote");
    else if (c.cta === "email") bump(k, "email");
  }
  for (const i of todayInq) bump(shortPath(i.page_url), "inq");

  const topPages = Array.from(pageMap.entries())
    .map(([page, s]) => ({ page, ...s }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);

  const max = topPages[0]?.total ?? 0;

  const recentEvents = [
    ...todayInq.map((i) => ({
      kind: "inquiry" as const,
      ts: i.created_at,
      label: `${i.name} — ${i.service || "inquiry"}`,
      page: shortPath(i.page_url),
    })),
    ...todayClicks.map((c) => ({
      kind: c.cta as "whatsapp" | "call" | "quote" | "email",
      ts: c.created_at,
      label:
        c.cta === "whatsapp"
          ? "WhatsApp click"
          : c.cta === "call"
          ? "Call click"
          : c.cta === "quote"
          ? "Quote open"
          : "Email click",
      page: shortPath(c.page_url),
    })),
  ]
    .sort((a, b) => new Date(b.ts).getTime() - new Date(a.ts).getTime())
    .slice(0, 12);

  const eventStyle: Record<string, { bg: string; fg: string }> = {
    inquiry: { bg: "#CCE3F8", fg: "#1D4ED8" },
    whatsapp: { bg: "#C7F0DF", fg: "#047857" },
    call: { bg: "#D6EBB6", fg: "#3F6212" },
    quote: { bg: "#FDE4B5", fg: "#B45309" },
    email: { bg: "#FBD0D0", fg: "#B91C1C" },
  };

  const fmtTime = (iso: string) =>
    new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }).toLowerCase();

  const hasAny =
    counts.whatsapp + counts.call + counts.quote + counts.email + counts.inquiries > 0;

  return (
    <div className="mb-6 p-5" style={CARD_STYLE}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div style={{ fontSize: 12, color: "#6b6b68" }}>Customer behaviour</div>
          <div style={{ fontSize: 16, fontWeight: 500, color: "#1a1a1a" }}>Today so far</div>
        </div>
        <span
          style={{
            background: "#F5F5F3",
            border: "0.5px solid #e5e4de",
            borderRadius: 20,
            fontSize: 11,
            padding: "3px 10px",
            color: "#6b6b68",
          }}
        >
          Live
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        <TodayKpi label="Inquiries" value={counts.inquiries} bg="#CCE3F8" fg="#1D4ED8" />
        <TodayKpi label="WhatsApp" value={counts.whatsapp} bg="#C7F0DF" fg="#047857" />
        <TodayKpi label="Calls" value={counts.call} bg="#D6EBB6" fg="#3F6212" />
        <TodayKpi label="Quote opens" value={counts.quote} bg="#FDE4B5" fg="#B45309" />
        <TodayKpi label="Email" value={counts.email} bg="#FBD0D0" fg="#B91C1C" />
      </div>

      {!hasAny ? (
        <p className="mt-5 text-sm" style={{ color: "#6b6b68" }}>
          No activity yet today. As visitors click Call, WhatsApp, or submit quote requests, they'll show up here in real time.
        </p>
      ) : (
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {/* Pages they're interested in today */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a" }}>
                Pages they're interested in today
              </h3>
              <span style={{ fontSize: 11, color: "#6b6b68" }}>{topPages.length} pages</span>
            </div>
            {topPages.length === 0 ? (
              <p className="text-sm" style={{ color: "#6b6b68" }}>No page activity yet.</p>
            ) : (
              <ul className="space-y-2">
                {topPages.map((p) => {
                  const pct = max > 0 ? Math.round((p.total / max) * 100) : 0;
                  return (
                    <li key={p.page}>
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className="truncate"
                          style={{ fontSize: 13, color: "#1a1a1a", fontWeight: 500 }}
                          title={p.page}
                        >
                          {p.page}
                        </span>
                        <span style={{ fontSize: 12, color: "#6b6b68" }}>{p.total}</span>
                      </div>
                      <div
                        className="mt-1"
                        style={{ height: 6, borderRadius: 999, background: "#F5F5F3", overflow: "hidden" }}
                      >
                        <div
                          style={{
                            width: `${pct}%`,
                            height: "100%",
                            background: "#1D4ED8",
                            borderRadius: 999,
                          }}
                        />
                      </div>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {p.inq > 0 && <Mini label={`${p.inq} inquiry`} bg="#CCE3F8" fg="#1D4ED8" />}
                        {p.wa > 0 && <Mini label={`${p.wa} WhatsApp`} bg="#C7F0DF" fg="#047857" />}
                        {p.call > 0 && <Mini label={`${p.call} call`} bg="#D6EBB6" fg="#3F6212" />}
                        {p.quote > 0 && <Mini label={`${p.quote} quote`} bg="#FDE4B5" fg="#B45309" />}
                        {p.email > 0 && <Mini label={`${p.email} email`} bg="#FBD0D0" fg="#B91C1C" />}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Recent activity timeline */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a" }}>Recent activity</h3>
              <span style={{ fontSize: 11, color: "#6b6b68" }}>Newest first</span>
            </div>
            <ul className="space-y-2">
              {recentEvents.map((e, idx) => {
                const style = eventStyle[e.kind];
                return (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-2"
                    style={{ background: "#F5F5F3", borderRadius: 10 }}
                  >
                    <span
                      style={{
                        background: style.bg,
                        color: style.fg,
                        borderRadius: 20,
                        padding: "2px 8px",
                        fontSize: 11,
                        fontWeight: 500,
                        textTransform: "capitalize",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {e.kind}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div
                        className="truncate"
                        style={{ fontSize: 13, color: "#1a1a1a", fontWeight: 500 }}
                        title={e.label}
                      >
                        {e.label}
                      </div>
                      <div
                        className="truncate"
                        style={{ fontSize: 11, color: "#6b6b68" }}
                        title={e.page}
                      >
                        {e.page}
                      </div>
                    </div>
                    <span style={{ fontSize: 11, color: "#6b6b68", whiteSpace: "nowrap" }}>
                      {fmtTime(e.ts)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function TodayKpi({ label, value, bg, fg }: { label: string; value: number; bg: string; fg: string }) {
  return (
    <div
      className="p-3"
      style={{ background: bg, borderRadius: 12 }}
    >
      <div style={{ fontSize: 22, fontWeight: 600, color: fg, lineHeight: 1.1 }}>
        {value.toLocaleString()}
      </div>
      <div className="mt-1" style={{ fontSize: 11, color: fg, opacity: 0.85, fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
}

function Mini({ label, bg, fg }: { label: string; bg: string; fg: string }) {
  return (
    <span
      style={{
        background: bg,
        color: fg,
        borderRadius: 20,
        padding: "1px 7px",
        fontSize: 10,
        fontWeight: 500,
      }}
    >
      {label}
    </span>
  );
}

function TopPagesCard({
  title,
  subtitle,
  rows,
  empty,
  barColor,
}: {
  title: string;
  subtitle: string;
  rows: { page: string; count: number }[];
  empty: string;
  barColor: string;
}) {
  const total = rows.reduce((sum, r) => sum + r.count, 0);
  // light tint for pill background
  const pillBg = barColor + "22"; // 13% opacity hex suffix
  return (
    <div className="overflow-hidden" style={CARD_STYLE}>
      <div className="px-4 py-3" style={{ borderBottom: "0.5px solid #e5e4de" }}>
        <h2 className="text-sm" style={{ fontWeight: 500, color: "#1a1a1a" }}>{title}</h2>
        <p className="text-xs" style={{ color: "#6b6b68" }}>{subtitle}</p>
      </div>
      {rows.length === 0 ? (
        <p className="px-4 py-6 text-center text-xs" style={{ color: "#9e9d97" }}>{empty}</p>
      ) : (
        <ul>
          {rows.map((r) => {
            const pct = total ? (r.count / total) * 100 : 0;
            return (
              <li key={r.page} className="px-4 py-2.5" style={{ borderTop: "0.5px solid #e5e4de" }}>
                <div className="flex items-center justify-between gap-3">
                  <span className="truncate text-xs" title={r.page} style={{ color: "#9e9d97" }}>
                    {r.page}
                  </span>
                  <span
                    className="shrink-0"
                    style={{
                      background: pillBg,
                      color: barColor,
                      borderRadius: 20,
                      padding: "2px 10px",
                      fontSize: 11,
                      fontWeight: 500,
                    }}
                  >
                    {r.count}
                  </span>
                </div>
                <div className="mt-1.5 overflow-hidden" style={{ height: 4, borderRadius: 2, background: "#e5e4de" }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: barColor }} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

type MatrixInquiry = { page_url: string | null; service: string | null };
type MatrixClick = { cta: string; page_url: string | null };

function PagePerformanceMatrix({
  inquiries,
  clicks,
  shortPath,
}: {
  inquiries: MatrixInquiry[];
  clicks: MatrixClick[];
  shortPath: (url: string | null) => string;
}) {
  const rows = (() => {
    const map = new Map<
      string,
      { page: string; title: string; form: number; wa: number; call: number; quote: number; email: number; total: number }
    >();
    const bump = (
      page: string,
      title: string,
      kind: "form" | "wa" | "call" | "quote" | "email",
    ) => {
      const cur = map.get(page) ?? { page, title, form: 0, wa: 0, call: 0, quote: 0, email: 0, total: 0 };
      if (!cur.title && title) cur.title = title;
      cur[kind] += 1;
      cur.total += 1;
      map.set(page, cur);
    };
    for (const i of inquiries) {
      const k = shortPath(i.page_url);
      bump(k, i.service || "", "form");
    }
    for (const c of clicks) {
      const k = shortPath(c.page_url);
      const kind =
        c.cta === "whatsapp" ? "wa" :
        c.cta === "call" ? "call" :
        c.cta === "quote" ? "quote" :
        c.cta === "email" ? "email" : null;
      if (kind) bump(k, "", kind);
    }
    return Array.from(map.values())
      .sort((a, b) => b.total - a.total)
      .slice(0, 15);
  })();

  const stars = rows.filter((r) => r.form > 0);
  const opps = rows.filter((r) => r.form === 0 && r.total > 0);

  const kpis = {
    active: stars.length,
    whatsapp: rows.reduce((s, r) => s + r.wa, 0),
    needFix: opps.length,
    ghost: rows.filter((r) => r.total === 0).length,
  };

  function pageTitle(path: string): string {
    if (path === "/" || !path) return "Home";
    const seg = path.split("/").filter(Boolean).pop() || path;
    return seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function PageCellSignals({ r }: { r: typeof rows[number] }) {
    const items: { bg: string; fg: string; icon: LucideIcon; key: string }[] = [];
    if (r.form > 0) items.push({ key: "form", bg: "#CCE3F8", fg: "#1D4ED8", icon: FileText });
    if (r.wa > 0) items.push({ key: "wa", bg: "#C7F0DF", fg: "#047857", icon: MessageCircle });
    if (r.call > 0) items.push({ key: "call", bg: "#D6EBB6", fg: "#3F6212", icon: Phone });
    if (r.quote > 0) items.push({ key: "quote", bg: "#FDE4B5", fg: "#B45309", icon: FileText });
    if (r.email > 0) items.push({ key: "email", bg: "#FBD0D0", fg: "#B91C1C", icon: Mail });
    if (items.length === 0) return <span style={{ color: "#9e9d97" }}>—</span>;
    return (
      <div className="flex flex-wrap gap-1.5">
        {items.map((it) => (
          <span
            key={it.key}
            className="inline-flex items-center justify-center"
            style={{ width: 24, height: 24, borderRadius: 6, background: it.bg }}
          >
            <it.icon size={12} color={it.fg} />
          </span>
        ))}
      </div>
    );
  }

  function Num({ v, color }: { v: number; color: string }) {
    return (
      <span style={{ color: v > 0 ? color : "#9e9d97", fontWeight: v > 0 ? 500 : 400 }}>
        {v}
      </span>
    );
  }

  return (
    <section className="mb-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 style={{ fontSize: 18, fontWeight: 500, color: "#1a1a1a" }}>
          Top 15 pages — performance matrix
        </h2>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MatrixKpi label="Active pages" value={kpis.active} icon={Star} iconBg="#D6EBB6" color="#3F6212" badgeLabel="Generating leads" badgeBg="#D6EBB6" badgeFg="#3F6212" />
        <MatrixKpi label="WhatsApp taps" value={kpis.whatsapp} icon={MessageCircle} iconBg="#C7F0DF" color="#047857" badgeLabel="Top CTA" badgeBg="#C7F0DF" badgeFg="#047857" />
        <MatrixKpi label="Pages need fix" value={kpis.needFix} icon={AlertTriangle} iconBg="#FDE4B5" color="#B45309" badgeLabel="Missing CTAs" badgeBg="#FDE4B5" badgeFg="#B45309" />
        <MatrixKpi label="Ghost pages" value={kpis.ghost} icon={Ghost} iconBg="#FBD0D0" color="#B91C1C" badgeLabel="Zero engagement" badgeBg="#FBD0D0" badgeFg="#B91C1C" />
      </div>

      <div className="overflow-hidden" style={CARD_STYLE}>
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3" style={{ borderBottom: "0.5px solid #e5e4de" }}>
          <h3 className="text-sm" style={{ fontWeight: 500, color: "#1a1a1a" }}>Page performance matrix</h3>
          <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: "#6b6b68" }}>
            <LegendDot color="#1D4ED8" label="form" />
            <LegendDot color="#047857" label="WhatsApp" />
            <LegendDot color="#3F6212" label="call" />
            <LegendDot color="#B45309" label="quote" />
            <LegendDot color="#9e9d97" label="none" />
          </div>
        </div>

        {rows.length === 0 ? (
          <p className="px-4 py-8 text-center text-xs" style={{ color: "#9e9d97" }}>
            No page activity yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs" style={{ background: "#F5F5F3", color: "#6b6b68" }}>
                <tr>
                  <th className="px-3 py-2 text-left" style={{ fontWeight: 500, width: 36 }}>#</th>
                  <th className="px-3 py-2 text-left" style={{ fontWeight: 500 }}>Page</th>
                  <th className="px-3 py-2 text-left" style={{ fontWeight: 500 }}>Signals</th>
                  <th className="px-3 py-2 text-right" style={{ fontWeight: 500 }}>Form</th>
                  <th className="px-3 py-2 text-right" style={{ fontWeight: 500 }}>WA</th>
                  <th className="px-3 py-2 text-right" style={{ fontWeight: 500 }}>Call</th>
                  <th className="px-3 py-2 text-right" style={{ fontWeight: 500 }}>Quote</th>
                  <th className="px-3 py-2 text-right" style={{ fontWeight: 500 }}>Email</th>
                </tr>
              </thead>
              <tbody>
                {stars.length > 0 && (
                  <tr>
                    <td colSpan={8} className="px-3 py-2 text-xs uppercase tracking-wider" style={{ color: "#3F6212", background: "#FAFAF7", borderTop: "0.5px solid #e5e4de", letterSpacing: "0.04em" }}>
                      Star pages — generating real leads
                    </td>
                  </tr>
                )}
                {stars.map((r, idx) => (
                  <MatrixRow key={r.page} idx={idx + 1} r={r} title={pageTitle(r.page)} pageCell={<PageCellSignals r={r} />} Num={Num} />
                ))}
                {opps.length > 0 && (
                  <tr>
                    <td colSpan={8} className="px-3 py-2 text-xs uppercase tracking-wider" style={{ color: "#B45309", background: "#FAFAF7", borderTop: "0.5px solid #e5e4de", letterSpacing: "0.04em" }}>
                      Opportunity pages — traffic but missing form
                    </td>
                  </tr>
                )}
                {opps.map((r, idx) => (
                  <MatrixRow key={r.page} idx={stars.length + idx + 1} r={r} title={pageTitle(r.page)} pageCell={<PageCellSignals r={r} />} Num={Num} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

function MatrixRow({
  idx,
  r,
  title,
  pageCell,
  Num,
}: {
  idx: number;
  r: { page: string; form: number; wa: number; call: number; quote: number; email: number };
  title: string;
  pageCell: React.ReactNode;
  Num: (props: { v: number; color: string }) => React.ReactElement;
}) {
  return (
    <tr style={{ borderTop: "0.5px solid #e5e4de" }}>
      <td className="px-3 py-3 text-xs" style={{ color: "#9e9d97" }}>{idx}</td>
      <td className="px-3 py-3">
        <div style={{ color: "#1a1a1a", fontWeight: 500 }}>{title}</div>
        <div className="text-xs" style={{ color: "#9e9d97" }}>{r.page}</div>
      </td>
      <td className="px-3 py-3">{pageCell}</td>
      <td className="px-3 py-3 text-right"><Num v={r.form} color="#1D4ED8" /></td>
      <td className="px-3 py-3 text-right"><Num v={r.wa} color="#047857" /></td>
      <td className="px-3 py-3 text-right"><Num v={r.call} color="#3F6212" /></td>
      <td className="px-3 py-3 text-right"><Num v={r.quote} color="#B45309" /></td>
      <td className="px-3 py-3 text-right"><Num v={r.email} color="#B91C1C" /></td>
    </tr>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span style={{ width: 8, height: 8, borderRadius: 999, background: color, display: "inline-block" }} />
      {label}
    </span>
  );
}

function MatrixKpi({
  label, value, icon: Icon, iconBg, color, badgeLabel, badgeBg, badgeFg,
}: {
  label: string; value: number; icon: LucideIcon;
  iconBg: string; color: string; badgeLabel: string; badgeBg: string; badgeFg: string;
}) {
  return (
    <div className="p-4" style={CARD_STYLE}>
      <div className="flex items-center justify-center" style={{ width: 32, height: 32, borderRadius: 9, background: iconBg }}>
        <Icon size={16} color={color} />
      </div>
      <div className="mt-3" style={{ fontSize: 24, fontWeight: 500, color }}>{value.toLocaleString()}</div>
      <div className="mt-1" style={{ fontSize: 12, color: "#6b6b68" }}>{label}</div>
      <span className="mt-2 inline-block" style={{ background: badgeBg, color: badgeFg, borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 500 }}>
        {badgeLabel}
      </span>
    </div>
  );
}