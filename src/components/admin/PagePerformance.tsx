import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { getPagePerformance, type PageRange, type PageRow } from "@/lib/page-performance.functions";
import { Trophy, Flame, Inbox } from "lucide-react";

const RANGES: { key: PageRange; label: string }[] = [
  { key: "today", label: "Today" },
  { key: "7d", label: "Last 7 days" },
  { key: "30d", label: "Last 30 days" },
  { key: "all", label: "All time" },
];

const CARD: React.CSSProperties = {
  background: "#FFFFFF",
  border: "0.5px solid #e5e4de",
  borderRadius: 16,
  padding: 20,
};

function HighlightCard({
  icon,
  emoji,
  title,
  row,
  accent,
  metricLabel,
  metricValue,
}: {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  row: PageRow | null;
  accent: string;
  metricLabel: string;
  metricValue: number;
}) {
  return (
    <div style={CARD} className="flex flex-col">
      <div className="flex items-center gap-2 text-sm" style={{ color: "#6b6b68", fontWeight: 500 }}>
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full" style={{ background: accent, color: "#1a1a1a" }}>
          {icon}
        </span>
        <span>{emoji} {title}</span>
      </div>
      {row ? (
        <>
          <div className="mt-4 text-lg" style={{ color: "#1a1a1a", fontWeight: 600, lineHeight: 1.25 }}>
            {row.title}
          </div>
          <div className="mt-0.5 truncate text-xs" style={{ color: "#9a9a95" }}>{row.path}</div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl" style={{ color: "#1a1a1a", fontWeight: 600 }}>{metricValue.toLocaleString()}</span>
            <span className="text-xs" style={{ color: "#6b6b68" }}>{metricLabel}</span>
          </div>
          <div className="mt-2 text-xs" style={{ color: "#6b6b68" }}>
            {row.ctaTotal} CTA clicks · {row.inquiries} inquiries · score {row.score}
          </div>
        </>
      ) : (
        <div className="mt-6 text-sm" style={{ color: "#6b6b68" }}>No data yet for this range.</div>
      )}
    </div>
  );
}

export function PagePerformance() {
  const [range, setRange] = useState<PageRange>("7d");
  const fetchPerf = useServerFn(getPagePerformance);
  const { data, isLoading } = useQuery({
    queryKey: ["page_performance", range],
    queryFn: async () => {
      try {
        return await fetchPerf({ data: { range } });
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    retry: false,
  });

  const rows = data?.rows ?? [];

  return (
    <section className="mb-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base" style={{ color: "#1a1a1a", fontWeight: 600 }}>🏆 Page performance ranking</h2>
          <p className="text-xs" style={{ color: "#6b6b68" }}>
            Score = (CTA Clicks × 40%) + (Inquiries × 60%). Ranks every service & sub-page.
          </p>
        </div>
        <div className="inline-flex rounded-full p-0.5" style={{ background: "#EFEDE7" }}>
          {RANGES.map((r) => {
            const active = range === r.key;
            return (
              <button
                key={r.key}
                onClick={() => setRange(r.key)}
                className="rounded-full px-3 py-1.5 text-xs transition-colors"
                style={{
                  background: active ? "#FFFFFF" : "transparent",
                  color: active ? "#1a1a1a" : "#6b6b68",
                  fontWeight: 500,
                  boxShadow: active ? "0 1px 2px rgba(0,0,0,0.06)" : undefined,
                }}
              >
                {r.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <HighlightCard
          icon={<Trophy size={14} />}
          emoji="🏆"
          title="Highest performing page"
          accent="#FDE4B5"
          row={data?.best ?? null}
          metricLabel="performance score"
          metricValue={data?.best?.score ?? 0}
        />
        <HighlightCard
          icon={<Flame size={14} />}
          emoji="🔥"
          title="Most clicked page"
          accent="#FBD0D0"
          row={data?.mostClicked ?? null}
          metricLabel="CTA clicks"
          metricValue={data?.mostClicked?.ctaTotal ?? 0}
        />
        <HighlightCard
          icon={<Inbox size={14} />}
          emoji="📈"
          title="Most inquiries generated"
          accent="#D6EBB6"
          row={data?.mostInquiries ?? null}
          metricLabel="inquiries"
          metricValue={data?.mostInquiries?.inquiries ?? 0}
        />
      </div>

      <div style={CARD} className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#FAFAF7", color: "#6b6b68" }}>
                <th className="px-4 py-3 text-left" style={{ fontWeight: 600 }}>#</th>
                <th className="px-4 py-3 text-left" style={{ fontWeight: 600 }}>Page</th>
                <th className="px-3 py-3 text-right" style={{ fontWeight: 600 }}>Views</th>
                <th className="px-3 py-3 text-right" style={{ fontWeight: 600 }}>WA</th>
                <th className="px-3 py-3 text-right" style={{ fontWeight: 600 }}>Call</th>
                <th className="px-3 py-3 text-right" style={{ fontWeight: 600 }}>Email</th>
                <th className="px-3 py-3 text-right" style={{ fontWeight: 600 }}>Quote</th>
                <th className="px-3 py-3 text-right" style={{ fontWeight: 600 }}>Form</th>
                <th className="px-3 py-3 text-right" style={{ fontWeight: 600 }}>CTA Total</th>
                <th className="px-3 py-3 text-right" style={{ fontWeight: 600 }}>Inquiries</th>
                <th className="px-4 py-3 text-right" style={{ fontWeight: 600 }}>Score</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td colSpan={11} className="px-4 py-6 text-center text-sm" style={{ color: "#9a9a95" }}>
                    {isLoading ? "Loading page performance…" : "No page activity yet for this range."}
                  </td>
                </tr>
              )}
              {rows.map((r, idx) => {
                const medal = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `${idx + 1}`;
                return (
                  <tr key={r.path} style={{ borderTop: "1px solid #f0eee9" }}>
                    <td className="px-4 py-3 align-top" style={{ color: "#6b6b68" }}>{medal}</td>
                    <td className="px-4 py-3 align-top">
                      <div style={{ color: "#1a1a1a", fontWeight: 600 }}>{r.title}</div>
                      <div className="truncate text-xs" style={{ color: "#9a9a95", maxWidth: 340 }}>{r.path}</div>
                    </td>
                    <td className="px-3 py-3 text-right align-top" style={{ color: "#3a3a37" }}>{r.views.toLocaleString()}</td>
                    <td className="px-3 py-3 text-right align-top" style={{ color: "#3a3a37" }}>{r.whatsapp}</td>
                    <td className="px-3 py-3 text-right align-top" style={{ color: "#3a3a37" }}>{r.call}</td>
                    <td className="px-3 py-3 text-right align-top" style={{ color: "#3a3a37" }}>{r.email}</td>
                    <td className="px-3 py-3 text-right align-top" style={{ color: "#3a3a37" }}>{r.quote}</td>
                    <td className="px-3 py-3 text-right align-top" style={{ color: "#3a3a37" }}>{r.formClicks}</td>
                    <td className="px-3 py-3 text-right align-top" style={{ color: "#1a1a1a", fontWeight: 600 }}>{r.ctaTotal}</td>
                    <td className="px-3 py-3 text-right align-top" style={{ color: "#1a1a1a", fontWeight: 600 }}>{r.inquiries}</td>
                    <td className="px-4 py-3 text-right align-top" style={{ color: "#1a1a1a", fontWeight: 700 }}>{r.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}