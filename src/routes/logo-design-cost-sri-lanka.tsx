import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Logo Design Cost in Sri Lanka — Freelance to Agency (2026)";
const DESC = "Logo design cost in Sri Lanka — freelance, studio and full brand identity. Realistic 2026 pricing with what is (and isn’t) included at each tier.";
const SLUG = "logo-design-cost-sri-lanka";

const ROWS: { format: string; cost: string; notes: string }[] = [
  {
    "format": "Freelance / template logo",
    "cost": "LKR 5,000 – 25,000",
    "notes": "Few concepts, basic files only."
  },
  {
    "format": "Mid-tier studio logo",
    "cost": "LKR 35,000 – 120,000",
    "notes": "3–5 concepts, 2 rounds revisions, vector files."
  },
  {
    "format": "Premium agency logo",
    "cost": "LKR 150,000 – 500,000",
    "notes": "Brand strategy, research, presentation deck."
  },
  {
    "format": "Logo + basic brand identity (mini guideline)",
    "cost": "LKR 80,000 – 250,000",
    "notes": "Colours, fonts, basic stationery."
  },
  {
    "format": "Full corporate identity package",
    "cost": "LKR 250,000 – 1,200,000",
    "notes": "Logo, full guideline, stationery, social kit, brand voice."
  },
  {
    "format": "Rebrand (existing company)",
    "cost": "LKR 400,000 – 3M+",
    "notes": "Audit, naming review, identity, rollout assets."
  },
  {
    "format": "Logo animation (sting)",
    "cost": "LKR 25,000 – 120,000",
    "notes": "For TVC end frame and social."
  }
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Are these prices fixed?", acceptedAnswer: { "@type": "Answer", text: "No. These are indicative 2026 ranges from live Sri Lankan campaigns. Final quotes depend on volume, season, contract length and creative scope." } },
    { "@type": "Question", name: "Do you give written quotes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Call 0701772626 or WhatsApp us for a free written quote tailored to your brief." } },
    { "@type": "Question", name: "Do prices include taxes?", acceptedAnswer: { "@type": "Answer", text: "Ranges shown are net of VAT and other applicable government taxes." } },
  ],
};

export const Route = createFileRoute("/logo-design-cost-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: `logo design cost sri lanka, advertising cost sri lanka, advertising rates sri lanka` },
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
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Logo Design Cost in Sri Lanka</h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/85">{DESC}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
        <p>A logo is usually quoted standalone or as part of a brand identity package. Here is what you actually pay in Sri Lanka in 2026.</p>

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

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Why logo prices in Sri Lanka span 50× from low to high</h2>
        <p className="mt-3">A logo design quote in Sri Lanka can be LKR 5,000 from a freelance student or LKR 500,000+ from a senior brand studio. The artwork at the centre might look superficially similar — what differs is the discovery, the strategic positioning, the number of explored directions, the iteration depth, the system around the mark, and the rights and files you walk away with.</p>
        <p className="mt-3">A cheap logo is usually a single template with your business name set in a stock font. A mid-tier logo is 2–3 original concepts with two rounds of revisions. A premium identity engagement is a research-led process producing not just a mark but a full brand system — logo, monogram, secondary marks, colour palette, typography system, brand voice, usage guidelines and a 30–80 page brand book.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Realistic price tiers and what each delivers</h2>
        <p className="mt-3">Working benchmarks for Sri Lankan logo and identity work in 2026:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Freelance / template (LKR 5,000–25,000):</strong> 1–3 concepts, basic file formats. Acceptable for a stop-gap or a micro-business that will rebrand within 2 years.</li>
          <li><strong>Junior designer / boutique studio (LKR 35,000–120,000):</strong> 2–3 original concepts, 2 rounds of revisions, full vector files, simple usage guideline (5–10 pages).</li>
          <li><strong>Senior studio with strategy (LKR 150,000–400,000):</strong> brief workshop, competitor and category audit, 3 strategic directions, 2 rounds, monogram, full colour system, type system, comprehensive brand guidelines (30–60 pages).</li>
          <li><strong>Full brand identity engagement (LKR 500,000–2,500,000+):</strong> brand strategy workshop, positioning, naming review, complete identity system, packaging or signage applications, motion logo, multi-asset launch pack, brand book (60–120 pages).</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">What separates a working logo from a decorative one</h2>
        <p className="mt-3">A logo earns its fee when it does the following four jobs in the real world. Test any concept against these before approving:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Legible at the smallest size you will ever use it.</strong> If it cannot be read at 16 px in a browser tab or on a WhatsApp Business avatar, the mark is too detailed.</li>
          <li><strong>Recognisable in single colour.</strong> Black on white and white on black both have to work — your logo will appear on invoices, embroidered on uniforms, and etched on signage where colour is not available.</li>
          <li><strong>Distinctive in your category.</strong> Place your mark next to 6 competitors. If a customer cannot pick yours out in 2 seconds, the concept needs more work.</li>
          <li><strong>Reproducible across every medium.</strong> Print (CMYK and spot colour), screen (RGB and dark mode), embroidery (limited thread counts), single-colour vinyl signage, and animated motion.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Files and rights — what to insist on receiving</h2>
        <p className="mt-3">When you pay for a logo, you should walk away with a clean delivery pack and clear ownership. Insist on every item below in writing in the contract:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Source files</strong> — Adobe Illustrator (.ai) and editable PDF, not just JPG and PNG.</li>
          <li><strong>All standard exports</strong> — SVG, EPS, PDF, PNG (transparent), JPG, plus favicon/app-icon sizes (16, 32, 192, 512 px).</li>
          <li><strong>Colour values</strong> — HEX, RGB, CMYK and Pantone references for every colour in the palette.</li>
          <li><strong>Typography list</strong> — primary, secondary and fallback fonts, plus licensing source and link.</li>
          <li><strong>Full copyright assignment</strong> to your company in writing. Without it the designer technically retains rights to the mark.</li>
          <li><strong>Brand guidelines document</strong> — clear-space rules, minimum size, incorrect-usage examples, colour palette, type system.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Process and timeline you should expect</h2>
        <p className="mt-3">A serious identity engagement in Sri Lanka follows roughly this 5–8 week timeline. Anything dramatically shorter is either a template job or skipping steps that protect you from picking the wrong direction:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Week 1:</strong> brief workshop, stakeholder interviews, competitor and category audit.</li>
          <li><strong>Week 2:</strong> strategic territory and moodboards — narrowing the visual world before any logo sketching.</li>
          <li><strong>Week 3–4:</strong> 2–3 logo directions presented with rationale, in-context mockups (business card, signage, app icon), and the reasoning for each.</li>
          <li><strong>Week 5:</strong> direction chosen, two rounds of refinement on the selected mark.</li>
          <li><strong>Week 6–7:</strong> full identity system build — colour, typography, secondary marks, brand book.</li>
          <li><strong>Week 8:</strong> final delivery — full file pack, brand guidelines PDF, source files, copyright transfer.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Get a tailored quote</h2>
        <p className="mt-3">Every brand has different audiences, seasons and goals. Call <a className="text-primary underline-offset-2 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or visit our <Link to="/get-quote" className="text-primary underline-offset-2 hover:underline">free quote form</Link> for a written estimate within 24 hours.</p>

        <p className="mt-6 text-sm">See the full <Link to="/advertising-rates" className="text-primary underline-offset-2 hover:underline">Sri Lanka advertising rates guide</Link> for every other channel.</p>
      </section>

      <CTASection />
    </PageShell>
  );
}
