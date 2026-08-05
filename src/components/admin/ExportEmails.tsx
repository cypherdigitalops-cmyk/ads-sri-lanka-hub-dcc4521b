import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { Download, Mail } from "lucide-react";
import { toast } from "sonner";
import { listInquiries } from "@/lib/inquiries.functions";

type Row = {
  name: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
  service: string | null;
  page_url: string | null;
  created_at: string;
};

function csvCell(v: unknown) {
  const s = v === null || v === undefined ? "" : String(v);
  return `"${s.replace(/"/g, '""')}"`;
}

function download(name: string, content: string) {
  const blob = new Blob(["\uFEFF" + content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

export function ExportEmails() {
  const list = useServerFn(listInquiries);
  const [dedupe, setDedupe] = useState(true);
  const [days, setDays] = useState(0); // 0 = all time

  const { data, isLoading } = useQuery({
    queryKey: ["inquiries"],
    queryFn: () => list(),
    retry: 1,
  });

  const rows = useMemo(() => {
    const all = ((data as { inquiries?: Row[] } | undefined)?.inquiries ?? []) as Row[];
    const cutoff = days > 0 ? Date.now() - days * 86400000 : 0;
    const withEmail = all.filter(
      (r) =>
        !!r.email &&
        r.email.includes("@") &&
        (cutoff === 0 || new Date(r.created_at).getTime() >= cutoff),
    );
    if (!dedupe) return withEmail;
    const seen = new Set<string>();
    return withEmail.filter((r) => {
      const key = (r.email as string).trim().toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [data, dedupe, days]);

  const exportCsv = (emailsOnly: boolean) => {
    if (rows.length === 0) {
      toast.error("No email addresses to export");
      return;
    }
    const header = emailsOnly
      ? ["Email"]
      : ["Email", "Name", "Phone", "Company", "Service", "Page", "Date"];
    const body = rows.map((r) =>
      (emailsOnly
        ? [r.email]
        : [r.email, r.name, r.phone, r.company, r.service, r.page_url, new Date(r.created_at).toISOString()]
      )
        .map(csvCell)
        .join(","),
    );
    const stamp = new Date().toISOString().slice(0, 10);
    download(
      `${emailsOnly ? "emails" : "email-contacts"}-${stamp}.csv`,
      [header.map(csvCell).join(","), ...body].join("\n"),
    );
    toast.success(`Exported ${rows.length} email${rows.length === 1 ? "" : "s"}`);
  };

  return (
    <section className="mb-8 rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <Mail className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-bold text-foreground">Export Email Addresses</h3>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        {isLoading ? "Loading…" : `${rows.length} email address${rows.length === 1 ? "" : "es"} ready to export.`}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <select
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
        >
          <option value={0}>All time</option>
          <option value={7}>Last 7 days</option>
          <option value={30}>Last 30 days</option>
          <option value={90}>Last 90 days</option>
        </select>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input type="checkbox" checked={dedupe} onChange={(e) => setDedupe(e.target.checked)} />
          Remove duplicates
        </label>
        <button
          onClick={() => exportCsv(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          <Download className="h-4 w-4" /> Emails only (CSV)
        </button>
        <button
          onClick={() => exportCsv(false)}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground"
        >
          <Download className="h-4 w-4" /> Full contacts (CSV)
        </button>
      </div>
    </section>
  );
}
