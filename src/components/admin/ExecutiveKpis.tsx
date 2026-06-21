import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { getExecutiveMetrics, type RangeKey, type TrendMetric } from "@/lib/executive-metrics.functions";
import { Flame, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

const RANGES: { key: RangeKey; label: string }[] = [
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

function TrendBadge({ pct }: { pct: number | null }) {
  if (pct === null) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs" style={{ background: "#EEEDFE", color: "#3C3489" }}>
        <ArrowUpRight size={12} /> new
      </span>
    );
  }
  if (pct === 0) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs" style={{ background: "#E5E4DE", color: "#6b6b68" }}>
        <Minus size={12} /> 0%
      </span>
    );
  }
  const up = pct > 0;
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs"
      style={{ background: up ? "#D6EBB6" : "#FBD0D0", color: up ? "#3F6212" : "#B91C1C" }}
    >
      {up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
      {up ? "+" : ""}{pct}%
    </span>
  );
}

function KpiCard({
  icon,
  title,
  emoji,
  metric,
  scoreSuffix,
  trail,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  emoji: string;
  metric: TrendMetric | null;
  scoreSuffix?: string;
  trail?: { label: string; score: number }[];
  accent: string;
}) {
  return (
    <div style={CARD} className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm" style={{ color: "#6b6b68", fontWeight: 500 }}>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full" style={{ background: accent, color: "#1a1a1a" }}>
            {icon}
          </span>
          <span>{emoji} {title}</span>
        </div>
        {metric && <TrendBadge pct={metric.trendPct} />}
      </div>
      {metric ? (
        <>
          <div className="mt-4 text-xl" style={{ color: "#1a1a1a", fontWeight: 600, lineHeight: 1.2 }}>
            {metric.label}
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl" style={{ color: "#1a1a1a", fontWeight: 600 }}>
              {metric.score.toLocaleString()}{scoreSuffix ?? ""}
            </span>
            <span className="text-xs" style={{ color: "#6b6b68" }}>
              prev {metric.prevScore.toLocaleString()}{scoreSuffix ?? ""}
            </span>
          </div>
          {metric.detail && (
            <div className="mt-1 text-xs" style={{ color: "#6b6b68" }}>{metric.detail}</div>
          )}
        </>
      ) : (
        <div className="mt-6 text-sm" style={{ color: "#6b6b68" }}>No data yet for this range.</div>
      )}
      {trail && trail.length > 1 && (
        <div className="mt-4 border-t pt-3" style={{ borderColor: "#f0eee9" }}>
          <div className="mb-2 text-xs uppercase tracking-wide" style={{ color: "#9a9a95", fontWeight: 600, letterSpacing: 0.5 }}>
            Runners up
          </div>
          <ul className="space-y-1.5">
            {trail.slice(1, 4).map((r) => (
              <li key={r.label} className="flex items-center justify-between text-xs" style={{ color: "#3a3a37" }}>
                <span className="truncate pr-2">{r.label}</span>
                <span style={{ color: "#6b6b68" }}>{r.score.toLocaleString()}{scoreSuffix ?? ""}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function ExecutiveKpis() {
  const [range, setRange] = useState<RangeKey>("7d");
  const fetchMetrics = useServerFn(getExecutiveMetrics);
  const { data, isLoading } = useQuery({
    queryKey: ["executive_metrics", range],
    queryFn: async () => {
      try {
        return await fetchMetrics({ data: { range } });
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    retry: false,
  });

  return (
    <section className="mb-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base" style={{ color: "#1a1a1a", fontWeight: 600 }}>Executive insights</h2>
          <p className="text-xs" style={{ color: "#6b6b68" }}>
            Hot demand, revenue opportunity & traffic quality — trends vs previous period.
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <KpiCard
          icon={<Flame size={14} />}
          emoji="🔥"
          title="Hottest service"
          accent="#FDE4B5"
          metric={data?.hottestService ?? null}
          trail={data?.servicesTop}
        />
        <KpiCard
          icon={<DollarSign size={14} />}
          emoji="💰"
          title="Highest revenue opportunity"
          accent="#D6EBB6"
          metric={data?.revenueOpportunity ?? null}
          trail={data?.revenueTop}
        />
        <KpiCard
          icon={<TrendingUp size={14} />}
          emoji="📈"
          title="Best traffic source"
          accent="#CCE3F8"
          metric={data?.bestSource ?? null}
          scoreSuffix="%"
          trail={data?.sourcesTop.map((s) => ({ label: s.label, score: s.score }))}
        />
      </div>
      {isLoading && !data && (
        <p className="mt-3 text-xs" style={{ color: "#9a9a95" }}>Loading executive metrics…</p>
      )}
    </section>
  );
}