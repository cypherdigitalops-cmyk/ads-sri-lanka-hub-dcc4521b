import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "TV Advertising Cost in Sri Lanka — Channel-Wise Rate Card (2026)";
const DESC = "How much does TV advertising cost in Sri Lanka? Indicative rates for Sirasa, Hiru, Derana, MTV, Swarnavahini, ITN and Rupavahini — by daypart, with TVC production estimates.";
const SLUG = "tv-advertising-cost-sri-lanka";

const ROWS: { format: string; cost: string; notes: string }[] = [
  {
    "format": "Top channel prime time (Hiru / Sirasa / Derana, 7–10 pm)",
    "cost": "Rs 90,000 – 220,000 / 30s spot",
    "notes": "Top teledrama bumpers cost more."
  },
  {
    "format": "Top channel non-prime daytime",
    "cost": "Rs 25,000 – 70,000 / 30s spot",
    "notes": "Mornings and afternoons."
  },
  {
    "format": "MTV / Sirasa English channels",
    "cost": "Rs 15,000 – 60,000 / 30s spot",
    "notes": "Sports and English film breaks."
  },
  {
    "format": "ITN / Rupavahini prime time",
    "cost": "Rs 30,000 – 90,000 / 30s spot",
    "notes": "State channels, wide rural reach."
  },
  {
    "format": "Cricket / big-event live break",
    "cost": "Rs 250,000 – 1,500,000 / 30s spot",
    "notes": "World Cup, Asia Cup, IPL."
  },
  {
    "format": "TVC production (basic)",
    "cost": "Rs 350,000 – 900,000",
    "notes": "Single location, voiceover, no celebrity."
  },
  {
    "format": "TVC production (premium / celebrity)",
    "cost": "Rs 1.5M – 8M+",
    "notes": "Multi-location, name talent, jingle."
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

export const Route = createFileRoute(`/${SLUG}` as "/tv-advertising-cost-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: `tv advertising cost sri lanka, advertising cost sri lanka, advertising rates sri lanka` },
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
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">TV Advertising Cost in Sri Lanka</h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/85">{DESC}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
        <p>TV is still the king of mass reach in Sri Lanka. Rates depend on channel, daypart, programme and TVC length. These are indicative single-spot rates for a 30-second commercial.</p>

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
        <p className="mt-3">Channel, daypart, programme rating, ad length (15/20/30/45/60s), package deals, season and whether you negotiate bonus spots.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Get a tailored quote</h2>
        <p className="mt-3">Every brand has different audiences, seasons and goals. Call <a className="text-primary underline-offset-2 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or visit our <Link to="/get-quote" className="text-primary underline-offset-2 hover:underline">free quote form</Link> for a written estimate within 24 hours.</p>

        <p className="mt-6 text-sm">See the full <Link to="/advertising-rates" className="text-primary underline-offset-2 hover:underline">Sri Lanka advertising rates guide</Link> for every other channel.</p>
      </section>

      <CTASection />
    </PageShell>
  );
}
