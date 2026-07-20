import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Facebook & Instagram Ads Cost in Sri Lanka (2026)";
const DESC = "Facebook and Instagram ad costs in Sri Lanka — real CPM, CPC, CPL ranges plus realistic monthly budgets and agency management fees.";
const SLUG = "facebook-ads-cost-sri-lanka";

const ROWS: { format: string; cost: string; notes: string }[] = [
  {
    "format": "CPM (cost per 1,000 impressions)",
    "cost": "LKR 90 – 450",
    "notes": "Lower for awareness, higher for conversion."
  },
  {
    "format": "CPC (cost per click)",
    "cost": "LKR 6 – 35",
    "notes": "Cheaper than Google Search."
  },
  {
    "format": "CPL (lead form)",
    "cost": "LKR 80 – 600 / lead",
    "notes": "Quality varies — qualify before paying sales team."
  },
  {
    "format": "Engagement / video view",
    "cost": "LKR 0.50 – 3 / interaction",
    "notes": "Reels & in-feed video."
  },
  {
    "format": "Recommended starter monthly budget",
    "cost": "LKR 40,000 – 120,000",
    "notes": "Allows 2–3 ad sets + creative testing."
  },
  {
    "format": "Creative production (static + reels)",
    "cost": "LKR 25,000 – 150,000 / month",
    "notes": "In-house vs studio + paid talent."
  },
  {
    "format": "Agency management fee",
    "cost": "LKR 30,000 – 120,000 / month or 15–20% of spend",
    "notes": "Includes Pixel, retargeting, weekly reports."
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

export const Route = createFileRoute("/facebook-ads-cost-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: `facebook ads cost sri lanka, advertising cost sri lanka, advertising rates sri lanka` },
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
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Facebook & Instagram Ads Cost in Sri Lanka (2026)</h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/85">{DESC}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
        <p>Meta ads (Facebook + Instagram) are the cheapest paid channel in Sri Lanka by reach. These are ranges from live SME and enterprise accounts.</p>

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

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">How Meta pricing works in Sri Lanka</h2>
        <p className="mt-3">Meta (Facebook and Instagram) ads are auction-based, but the cost you pay is mostly driven by your creative quality and audience size rather than your bid. A 7-second vertical reel that holds attention can deliver clicks for one-third the cost of a static image targeting the same audience, even with the same budget and the same campaign objective.</p>
        <p className="mt-3">In Sri Lanka the cheapest auction objectives are reach, video views and engagement. The most expensive are conversions and lead-form submissions. The right answer depends on where you are in the funnel: spend cheap awareness money to seed audiences, then retarget those warm audiences with the more expensive conversion objective to actually drive sales.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Realistic CPM, CPC and CPL benchmarks</h2>
        <p className="mt-3">Useful 2026 benchmarks for Sri Lankan accounts run by competent media buyers (creative is the biggest variable, so treat these as midpoints):</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>CPM (cost per 1,000 impressions):</strong> LKR 90–450. Lower end for broad reach with strong video; upper end for narrow targeted Colombo SEC A audiences.</li>
          <li><strong>CPC (cost per link click):</strong> LKR 6–35. E-commerce and content offers typically sit at the lower end; B2B and high-consideration services at the higher end.</li>
          <li><strong>CPL (cost per lead via on-platform form):</strong> LKR 80–600. Quality varies enormously — always qualify before passing to sales.</li>
          <li><strong>Cost per WhatsApp conversation:</strong> LKR 120–500. Click-to-WhatsApp is consistently the cheapest meaningful lead source in the Sri Lankan market in 2025–26.</li>
          <li><strong>Cost per video ThruPlay (15s view):</strong> LKR 1.50–6 for reels and feed video; lower in stories.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Creative is the lever, not the budget</h2>
        <p className="mt-3">After running thousands of campaigns in this market the pattern is unmistakable: doubling your creative volume moves results far more than doubling your budget. A useful target is 4–6 fresh ad creatives per week per active ad set, rotating in new hooks as soon as creative fatigue shows in the frequency curve (typically after 4–7 days on a Colombo audience).</p>
        <p className="mt-3">Three creative formats consistently outperform in Sri Lanka:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>UGC-style vertical reels</strong> — phone-shot, casual, with on-screen subtitles in Sinhala or Tamil. Outperforms polished studio video by 2–4× on cost per result in our test data.</li>
          <li><strong>Carousels with a clear single offer per card</strong> — particularly effective for product catalogues and multi-tier service menus.</li>
          <li><strong>Customer-testimonial videos under 30 seconds</strong> — third-party voice consistently beats first-party brand voice for trust-led categories (services, education, healthcare).</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Targeting that still works after Advantage+</h2>
        <p className="mt-3">Apple ATT and Meta's shift to broader auto-targeting (Advantage+) have changed best practice in this market. Three approaches that still work reliably:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Broad targeting with sharp creative.</strong> Let Meta's machine learning find the audience using a creative that self-qualifies (e.g. "Sri Lankan business owners with 5–25 staff" stated explicitly in the hook).</li>
          <li><strong>Custom audiences from your CRM or pixel.</strong> Upload past customers, build lookalikes off the top 10% by revenue.</li>
          <li><strong>WhatsApp engagement custom audiences.</strong> People who already messaged you on WhatsApp are your warmest segment; remarket to them with new offers.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Agency fees and what they should include</h2>
        <p className="mt-3">Specialist Meta-ads management in Sri Lanka generally costs LKR 30,000–120,000 per month, or 15–20% of spend for accounts above LKR 500,000/month. At minimum, the fee should include account setup and Pixel/Conversions API installation, audience and creative strategy, weekly optimisation, 4+ fresh creatives per week (or co-ordination with your creative team), monthly reporting with cohort-based ROAS, and quarterly account audits.</p>
        <p className="mt-3">A common mistake is paying for "management" without a contractual minimum on creative volume. If your agency is recycling the same 3 ads for 4 weeks, your cost per result will rise no matter how well they manage the auction.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Get a tailored quote</h2>
        <p className="mt-3">Every brand has different audiences, seasons and goals. Call <a className="text-primary underline-offset-2 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or visit our <Link to="/get-quote" className="text-primary underline-offset-2 hover:underline">free quote form</Link> for a written estimate within 24 hours.</p>

        <p className="mt-6 text-sm">See the full <Link to="/advertising-rates" className="text-primary underline-offset-2 hover:underline">Sri Lanka advertising rates guide</Link> for every other channel.</p>
      </section>

      <CTASection />
    </PageShell>
  );
}
