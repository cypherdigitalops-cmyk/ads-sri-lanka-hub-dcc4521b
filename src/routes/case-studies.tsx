import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Case Studies — Advertising Campaigns in Sri Lanka";
const DESC = "Real campaign results from Sri Lankan brands across digital, ATL, BTL, outdoor and SEO. See how advertisingsrilanka.lk delivers measurable growth.";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/case-studies` }],
  }),
  component: Cases,
});

const CASES = [
  { t: "FMCG brand activation", r: "+38% trial rate", d: "Islandwide BTL roadshow & sampling across 12 cities." },
  { t: "E-commerce growth", r: "4.2x ROAS", d: "Google Ads + Meta + SEO programme over 6 months." },
  { t: "Hospitality launch", r: "1.1M reach", d: "Integrated TVC + outdoor + influencer campaign." },
  { t: "B2B lead generation", r: "+220 SQLs", d: "LinkedIn + email + SEO content engine." },
  { t: "Retail brand refresh", r: "+27% same-store sales", d: "Brand identity + in-store + digital." },
  { t: "Local SEO domination", r: "#1 for 80+ keywords", d: "Technical SEO + local citations + content." },
];

function Cases() {
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80"><Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Case Studies" }]} /></div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Case studies</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">A snapshot of recent work for Sri Lankan brands.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="text-sm font-semibold uppercase tracking-wider text-accent">Result</div>
              <div className="mt-1 text-2xl font-bold">{c.r}</div>
              <div className="mt-4 font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4"><CTASection /></div>
    </PageShell>
  );
}