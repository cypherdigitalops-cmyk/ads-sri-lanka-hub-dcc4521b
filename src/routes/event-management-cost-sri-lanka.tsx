import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Event Management Cost in Sri Lanka — Realistic Budgets (2026)";
const DESC = "Event management cost in Sri Lanka — corporate events, weddings, product launches, conferences and exhibitions. Per-head and turnkey ranges.";
const SLUG = "event-management-cost-sri-lanka";

const ROWS: { format: string; cost: string; notes: string }[] = [
  {
    "format": "Corporate cocktail (100 pax)",
    "cost": "LKR 750,000 – 2,500,000",
    "notes": "Venue, decor, AV, F&B, MC."
  },
  {
    "format": "Corporate gala dinner (300 pax)",
    "cost": "LKR 3M – 12M",
    "notes": "5-star hotel, entertainment, awards production."
  },
  {
    "format": "Product launch (200 pax, media)",
    "cost": "LKR 2.5M – 10M+",
    "notes": "Stage, LED wall, PR, press kits."
  },
  {
    "format": "Conference (1 day, 500 pax)",
    "cost": "LKR 4M – 18M",
    "notes": "Halls, AV, interpretation, lunch, branding."
  },
  {
    "format": "Exhibition stall (3×3m, turnkey)",
    "cost": "LKR 350,000 – 1,500,000",
    "notes": "Design, build, AV and 3-day staff."
  },
  {
    "format": "Wedding (350 pax, mid-tier)",
    "cost": "LKR 2.5M – 8M",
    "notes": "Planner, decor, photography, entertainment."
  },
  {
    "format": "Luxury destination wedding",
    "cost": "LKR 10M – 40M+",
    "notes": "Resort buy-out, multiple events."
  },
  {
    "format": "Brand activation / roadshow (per city per day)",
    "cost": "LKR 250,000 – 1,200,000",
    "notes": "Promoters, gazebo, sampling, vehicle."
  }
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Are these prices fixed?", acceptedAnswer: { "@type": "Answer", text: "No. These are indicative 2026 ranges from live Sri Lankan campaigns. Final quotes depend on volume, season, contract length and creative scope." } },
    { "@type": "Question", name: "Do you give written quotes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Call 0771437707 or WhatsApp us for a free written quote tailored to your brief." } },
    { "@type": "Question", name: "Do prices include taxes?", acceptedAnswer: { "@type": "Answer", text: "Ranges shown are net of VAT and other applicable government taxes." } },
  ],
};

export const Route = createFileRoute("/event-management-cost-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: `event management cost sri lanka, advertising cost sri lanka, advertising rates sri lanka` },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/${SLUG}` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/${SLUG}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) }],
  }),
  component: CostPage,
});

function CostPage() {
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Cost Guides", to: "/advertising-rates" }, { label: TITLE }]} />
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Event Management Cost in Sri Lanka</h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/85">{DESC}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
        <p>Event budgets in Sri Lanka are usually built per head plus production. Below are turnkey ranges including planning, decor, AV, F&B and on-ground crew.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Indicative 2026 rate card</h2>
        <div className="mt-5 overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/40 text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Format / option</th>
                <th className="px-4 py-3 font-semibold">Typical cost</th>
                <th className="px-4 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.format} className="border-t border-border align-top">
                  <td className="px-4 py-3 font-medium text-foreground">{r.format}</td>
                  <td className="px-4 py-3 text-foreground/90">{r.cost}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">What drives the cost</h2>
        <p className="mt-3">Guest count, venue tier (3-star vs 5-star), production complexity, F&B spec, entertainment talent and city.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Get a tailored quote</h2>
        <p className="mt-3">Every brand has different audiences, seasons and goals. Call <a className="text-primary underline-offset-2 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or visit our <Link to="/get-quote" className="text-primary underline-offset-2 hover:underline">free quote form</Link> for a written estimate within 24 hours.</p>

        <p className="mt-6 text-sm">See the full <Link to="/advertising-rates" className="text-primary underline-offset-2 hover:underline">Sri Lanka advertising rates guide</Link> for every other channel.</p>
      </section>

      <CTASection />
    </PageShell>
  );
}
