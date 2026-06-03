import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Video Production Cost in Sri Lanka — TVC, Corporate & Social (2026)";
const DESC = "Video production cost in Sri Lanka — TV commercials, corporate films, social reels, drone, 2D/3D animation. Realistic 2026 budget ranges.";
const SLUG = "video-production-cost-sri-lanka";

const ROWS: { format: string; cost: string; notes: string }[] = [
  {
    "format": "Social media reel (single shoot day)",
    "cost": "LKR 65,000 – 250,000 / video",
    "notes": "Phone-first or DSLR, single talent."
  },
  {
    "format": "Corporate profile film (3–5 min)",
    "cost": "LKR 350,000 – 1,500,000",
    "notes": "Interviews, b-roll, drone, motion graphics."
  },
  {
    "format": "TV commercial — basic (30s)",
    "cost": "LKR 450,000 – 1,200,000",
    "notes": "Single location, voiceover, no celeb."
  },
  {
    "format": "TV commercial — premium (30s)",
    "cost": "LKR 2M – 12M+",
    "notes": "Director, name talent, jingle, multi-location."
  },
  {
    "format": "Drone shoot (half day)",
    "cost": "LKR 35,000 – 120,000",
    "notes": "CAA-cleared pilot, 4K."
  },
  {
    "format": "2D animation (per finished minute)",
    "cost": "LKR 80,000 – 350,000",
    "notes": "Script, storyboard, illustration, VO."
  },
  {
    "format": "3D animation / product CGI",
    "cost": "LKR 250,000 – 1,500,000 / minute",
    "notes": "Modelling, texturing, lighting, render."
  },
  {
    "format": "Edit-only (footage supplied)",
    "cost": "LKR 25,000 – 150,000 / video",
    "notes": "Colour, sound, motion graphics."
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

export const Route = createFileRoute(`/${SLUG}` as "/video-production-cost-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: `video production cost sri lanka, advertising cost sri lanka, advertising rates sri lanka` },
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
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Video Production Cost in Sri Lanka</h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/85">{DESC}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
        <p>Video production cost in Sri Lanka depends on crew size, talent, locations and post-production complexity. These are turnkey ranges.</p>

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
        <p className="mt-3">Crew size, shoot days, talent fees, equipment (cinema vs DSLR), VFX/CGI, music licensing and revision rounds.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Get a tailored quote</h2>
        <p className="mt-3">Every brand has different audiences, seasons and goals. Call <a className="text-primary underline-offset-2 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or visit our <Link to="/get-quote" className="text-primary underline-offset-2 hover:underline">free quote form</Link> for a written estimate within 24 hours.</p>

        <p className="mt-6 text-sm">See the full <Link to="/advertising-rates" className="text-primary underline-offset-2 hover:underline">Sri Lanka advertising rates guide</Link> for every other channel.</p>
      </section>

      <CTASection />
    </PageShell>
  );
}
