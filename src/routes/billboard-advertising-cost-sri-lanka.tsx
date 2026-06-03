import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Billboard Advertising Cost in Sri Lanka — Full Price Guide (2026)";
const DESC = "Billboard advertising cost in Sri Lanka — hoardings, digital LEDs, gantries and unipoles. Indicative monthly rates for Colombo and outstation, plus production and permit fees.";
const SLUG = "billboard-advertising-cost-sri-lanka";

const ROWS: { format: string; cost: string; notes: string }[] = [
  {
    "format": "Static hoarding 20×10 ft, Colombo suburbs",
    "cost": "Rs 80,000 – 180,000 / month",
    "notes": "Includes site rental only; flex printing extra."
  },
  {
    "format": "Static hoarding 40×20 ft, Galle Road / Marine Drive",
    "cost": "Rs 250,000 – 600,000 / month",
    "notes": "Premium high-traffic locations."
  },
  {
    "format": "Gantry / unipole (highway)",
    "cost": "Rs 350,000 – 1,200,000 / month",
    "notes": "Expressway and outer-circular routes."
  },
  {
    "format": "Digital LED billboard 6-second slot share",
    "cost": "Rs 120,000 – 450,000 / month",
    "notes": "Shared rotation, typically 6 brands."
  },
  {
    "format": "Outstation hoarding (Kandy, Galle, Jaffna)",
    "cost": "Rs 40,000 – 150,000 / month",
    "notes": "Town-centre and entry-point sites."
  },
  {
    "format": "Flex printing & installation (per sq ft)",
    "cost": "Rs 75 – 180",
    "notes": "UV / weather-rated stock."
  },
  {
    "format": "Local council permit (per site)",
    "cost": "Rs 15,000 – 60,000",
    "notes": "One-off; required for most municipalities."
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

export const Route = createFileRoute("/billboard-advertising-cost-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: `billboard advertising cost sri lanka, advertising cost sri lanka, advertising rates sri lanka` },
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
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Billboard Advertising Cost in Sri Lanka</h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/85">{DESC}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
        <p>Billboards remain the most visible mass-reach medium in Sri Lanka. Costs vary widely by site, size, lit/unlit and city — this guide gives you realistic 2026 ranges so you can budget before requesting quotes.</p>

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

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">What actually drives a billboard quote</h2>
        <p className="mt-3">Two hoardings of the same physical size in Sri Lanka can quote three or four times apart in price, and the reason is almost never the vinyl — it is the audience standing under it. Outdoor pricing is built bottom-up from traffic count, vehicle mix, dwell time at signals, line of sight from 80–150 metres away, illumination, contract length and whether the site sits on a designated commercial corridor or a residential road.</p>
        <p className="mt-3">A 40×20 ft hoarding on Galle Road between Kollupitiya and Bambalapitiya sees more than 90,000 vehicles a day, with high white-collar share, and rate-cards reflect that. The same 40×20 ft hoarding on a suburban arterial in Maharagama or Kelaniya may quote at one-third of the rate because the audience composition shifts toward shorter-haul commuters and the brand-recall window is narrower. Always ask vendors for the most recent independent traffic study, not just a footfall claim.</p>
        <p className="mt-3">Lit vs unlit changes the price meaningfully because illuminated boards work 14–16 hours a day instead of 9–10. Expressway gantries on the Outer Circular or Southern Expressway carry a separate fee structure linked to the Road Development Authority, which is why those rates jump quickly above LKR 800,000 per month for a single-face structure.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Hidden line items most first-time buyers miss</h2>
        <p className="mt-3">The site-rental number is only the start of the conversation. Plan for these additional cost lines before approving any campaign so your finance team does not get a surprise invoice in week three:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Production:</strong> flex printing, eyelets and stitching usually run LKR 75–180 per sq ft for UV-rated weatherproof stock. A 40×20 ft face is therefore LKR 60,000–144,000 just for the print.</li>
          <li><strong>Installation and dismantling:</strong> rigger crew, scaffold or boom-lift hire and traffic-control permits typically add LKR 15,000–60,000 per site.</li>
          <li><strong>Local council permits:</strong> Colombo Municipal Council, Dehiwala-Mount Lavinia, Sri Jayewardenepura Kotte and most pradeshiya sabhas each charge their own annual or one-off fees ranging LKR 15,000–60,000 per site.</li>
          <li><strong>Re-postings:</strong> monsoon winds in May–June and October–November tear flex faces. Budget for at least one re-posting in a 6-month campaign.</li>
          <li><strong>Photo-reports:</strong> reputable vendors provide weekly geo-tagged photos at no extra charge — confirm this in writing, otherwise it is often quoted at LKR 2,000–5,000 per site per month.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Static vs digital LED — which one actually wins</h2>
        <p className="mt-3">Digital LED billboards in Sri Lanka almost always sell in shared rotation. A typical 6-second slot in an 8-brand loop means your ad plays roughly every 60 seconds, around 600 times a day on a 10-hour operating cycle. That sounds impressive but the effective dwell time per impression is brief, and the cost per thousand actual viewers is often higher than a well-located static hoarding when you do the maths.</p>
        <p className="mt-3">Static hoardings deliver constant unmissable presence for the cost of one printed face. They are the right choice for brand-equity campaigns, product launches and any message that benefits from being seen in the same place every single day for 30 or 90 days. Digital screens are stronger for time-sensitive offers, multi-creative testing, dayparting (different ads for morning vs evening commuters) and brands that want to refresh creative weekly without re-printing.</p>
        <p className="mt-3">A balanced outdoor plan in Colombo usually combines 4–6 anchor static hoardings on commuter routes with 1–2 digital LED slots in high-footfall destinations such as Liberty Plaza junction, Independence Square approach, or Battaramulla town centre.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">How to negotiate the rate-card down 20–40%</h2>
        <p className="mt-3">Published outdoor rates in Sri Lanka are starting points, not final prices. Volume, contract length and timing are the three levers that move quotes meaningfully:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Commit to 3 or 6 months</strong> up-front instead of monthly rolling. Most vendors will discount 15–25% for a 6-month commitment because their re-letting risk drops to zero.</li>
          <li><strong>Book in the low season</strong> — January, February and August are usually softer than April (Sinhala-Tamil New Year), November–December (festive) and back-to-school July.</li>
          <li><strong>Bundle multiple sites with one vendor</strong> instead of buying single boards from many vendors. A package of 8 hoardings under one contract typically lands 20–35% below the sum of individual rate-cards.</li>
          <li><strong>Ask for bonus weeks</strong> rather than rate cuts when the vendor resists. An extra 2 weeks free on a 12-week campaign is mathematically a ~14% discount.</li>
          <li><strong>Pay in advance for the full contract</strong> — vendors managing cash flow will trade another 3–7% for one-shot payment.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Typical timeline from brief to live</h2>
        <p className="mt-3">Plan 18–25 working days from approved brief to live billboard if you are starting from scratch. Site shortlist and physical recce takes 3–5 days, rate negotiation and contract takes another 3–4 days, council permits run 5–10 working days depending on the municipality, and creative production and printing needs 4–6 days for a 40×20 ft face. Installation itself is usually one overnight window per site so the public never sees the changeover.</p>
        <p className="mt-3">For festive or election windows, premium sites are often blocked 60–90 days in advance, so brief in early. Year-end campaigns starting on 1 December typically need to be locked by mid-October.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Get a tailored quote</h2>
        <p className="mt-3">Every brand has different audiences, seasons and goals. Call <a className="text-primary underline-offset-2 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or visit our <Link to="/get-quote" className="text-primary underline-offset-2 hover:underline">free quote form</Link> for a written estimate within 24 hours.</p>

        <p className="mt-6 text-sm">See the full <Link to="/advertising-rates" className="text-primary underline-offset-2 hover:underline">Sri Lanka advertising rates guide</Link> for every other channel.</p>
      </section>

      <CTASection />
    </PageShell>
  );
}
