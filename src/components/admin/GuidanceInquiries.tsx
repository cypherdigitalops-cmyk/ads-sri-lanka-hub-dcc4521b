import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Search, Trash2, Lightbulb } from "lucide-react";
import {
  listGuidanceInquiries,
  updateGuidanceInquiry,
  deleteGuidanceInquiry,
  GUIDANCE_STATUSES,
  type GuidanceStatus,
} from "@/lib/guidance-inquiries.functions";

type Row = {
  id: string;
  sells: string;
  customers: string | null;
  goals: unknown;
  budget: string | null;
  digital_presence: string | null;
  name: string;
  whatsapp: string;
  notes: string | null;
  source_page: string | null;
  status: string;
  admin_notes: string | null;
  created_at: string;
};

const STATUS_LABEL: Record<string, string> = {
  new: "New",
  advice_sent: "Advice Sent",
  in_discussion: "In Discussion",
  won: "Won",
  lost: "Lost",
};

const PRESENCE_LABEL: Record<string, string> = {
  yes: "Yes — already digital",
  some: "Some — page unused",
  no: "No — from scratch",
};

function goalList(goals: unknown): string[] {
  if (Array.isArray(goals)) return goals.map(String);
  if (typeof goals === "string") {
    try {
      const parsed = JSON.parse(goals);
      return Array.isArray(parsed) ? parsed.map(String) : [];
    } catch {
      return [];
    }
  }
  return [];
}

export function GuidanceInquiries() {
  const fetchRows = useServerFn(listGuidanceInquiries);
  const update = useServerFn(updateGuidanceInquiry);
  const remove = useServerFn(deleteGuidanceInquiry);
  const qc = useQueryClient();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [budget, setBudget] = useState("all");
  const [presence, setPresence] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["guidance-inquiries"],
    queryFn: () => fetchRows({}),
  });

  const mUpdate = useMutation({
    mutationFn: (input: { id: string; status?: GuidanceStatus; admin_notes?: string }) => update({ data: input }),
    onSuccess: () => {
      toast.success("Lead updated");
      qc.invalidateQueries({ queryKey: ["guidance-inquiries"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const mDelete = useMutation({
    mutationFn: (id: string) => remove({ data: { id } }),
    onSuccess: () => {
      toast.success("Lead deleted");
      qc.invalidateQueries({ queryKey: ["guidance-inquiries"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const rows = (data?.rows ?? []) as Row[];

  const stats = useMemo(() => {
    const now = Date.now();
    const week = now - 7 * 86400000;
    const month = now - 30 * 86400000;
    return {
      newCount: rows.filter((r) => r.status === "new").length,
      week: rows.filter((r) => new Date(r.created_at).getTime() >= week).length,
      month: rows.filter((r) => new Date(r.created_at).getTime() >= month).length,
      audit: rows.filter((r) => r.digital_presence === "yes" || r.digital_presence === "some").length,
    };
  }, [rows]);

  const budgets = useMemo(
    () => Array.from(new Set(rows.map((r) => r.budget).filter(Boolean) as string[])),
    [rows],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((r) => {
      if (status !== "all" && r.status !== status) return false;
      if (budget !== "all" && r.budget !== budget) return false;
      if (presence !== "all" && r.digital_presence !== presence) return false;
      if (!q) return true;
      return [r.name, r.sells, r.customers, r.whatsapp, r.source_page, r.notes, goalList(r.goals).join(" ")]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    });
  }, [rows, search, status, budget, presence]);

  return (
    <section className="mb-8 rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-bold text-foreground">Free Guidance Inquiries</h3>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "New", value: stats.newCount },
          { label: "This week", value: stats.week },
          { label: "This month", value: stats.month },
          { label: "Audit leads", value: stats.audit },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="mt-1 text-2xl font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <div className="relative min-w-[200px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, product, page…"
            className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm"
          />
        </div>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm">
          <option value="all">All statuses</option>
          {GUIDANCE_STATUSES.map((s) => (
            <option key={s} value={s}>{STATUS_LABEL[s]}</option>
          ))}
        </select>
        <select value={budget} onChange={(e) => setBudget(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm">
          <option value="all">All budgets</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <select value={presence} onChange={(e) => setPresence(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm">
          <option value="all">All digital presence</option>
          <option value="yes">Yes — already digital</option>
          <option value="some">Some — page unused</option>
          <option value="no">No — from scratch</option>
        </select>
      </div>

      {isLoading ? <p className="mt-4 text-sm text-muted-foreground">Loading…</p> : null}
      {error ? <p className="mt-4 text-sm text-destructive">{(error as Error).message}</p> : null}

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Sells</th>
              <th className="px-3 py-2">Budget</th>
              <th className="px-3 py-2">Goal</th>
              <th className="px-3 py-2">Source page</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => {
              const goals = goalList(r.goals);
              const open = openId === r.id;
              return (
                <>
                  <tr key={r.id} className="border-t border-border align-top">
                    <td className="px-3 py-2 whitespace-nowrap text-muted-foreground">
                      {new Date(r.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-3 py-2 font-medium text-foreground">
                      <button className="underline-offset-2 hover:underline" onClick={() => setOpenId(open ? null : r.id)}>
                        {r.name}
                      </button>
                      <div className="text-xs text-muted-foreground">{r.whatsapp}</div>
                    </td>
                    <td className="px-3 py-2 text-foreground/90">{r.sells}</td>
                    <td className="px-3 py-2 text-muted-foreground">{r.budget ?? "—"}</td>
                    <td className="px-3 py-2 text-muted-foreground">{goals[0] ?? "—"}{goals.length > 1 ? ` +${goals.length - 1}` : ""}</td>
                    <td className="px-3 py-2 text-muted-foreground">{r.source_page ?? "—"}</td>
                    <td className="px-3 py-2">
                      <select
                        value={r.status}
                        onChange={(e) => mUpdate.mutate({ id: r.id, status: e.target.value as GuidanceStatus })}
                        className="rounded-lg border border-border bg-background px-2 py-1 text-xs"
                      >
                        {GUIDANCE_STATUSES.map((s) => (
                          <option key={s} value={s}>{STATUS_LABEL[s]}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-3 py-2">
                      <button
                        aria-label={`Delete lead from ${r.name}`}
                        onClick={() => mDelete.mutate(r.id)}
                        className="rounded p-1 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                  {open ? (
                    <tr key={`${r.id}-detail`} className="border-t border-border bg-secondary/20">
                      <td colSpan={8} className="px-3 py-4">
                        <div className="grid gap-3 sm:grid-cols-2">
                          <p><span className="font-semibold text-foreground">Customers:</span> {r.customers ?? "—"}</p>
                          <p><span className="font-semibold text-foreground">Digital presence:</span> {r.digital_presence ? PRESENCE_LABEL[r.digital_presence] : "—"}</p>
                          <p className="sm:col-span-2"><span className="font-semibold text-foreground">Goals:</span> {goals.length ? goals.join(", ") : "—"}</p>
                          <p className="sm:col-span-2"><span className="font-semibold text-foreground">Notes:</span> {r.notes ?? "—"}</p>
                        </div>
                        <textarea
                          defaultValue={r.admin_notes ?? ""}
                          placeholder="Internal notes…"
                          rows={2}
                          onBlur={(e) => {
                            if (e.target.value !== (r.admin_notes ?? "")) {
                              mUpdate.mutate({ id: r.id, admin_notes: e.target.value });
                            }
                          }}
                          className="mt-3 w-full rounded-lg border border-border bg-background p-3 text-sm"
                        />
                      </td>
                    </tr>
                  ) : null}
                </>
              );
            })}
            {!isLoading && filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-3 py-6 text-center text-sm text-muted-foreground">
                  No guidance inquiries yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}