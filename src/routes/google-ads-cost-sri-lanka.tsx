import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Google Ads Cost in Sri Lanka — CPC, Budgets & Agency Fees (2026)";
const DESC = "How much do Google Ads cost in Sri Lanka? Real CPC ranges for Search, Performance Max and YouTube, plus realistic monthly budgets and agency management fees.";
const SLUG = "google-ads-cost-sri-lanka";

const ROWS: { format: string; cost: string; notes: string }[] = [
  {
    "format": "Search CPC — low-competition (local services)",
    "cost": "LKR 25 – 90 / click",
    "notes": "Cleaning, repairs, local trades."
  },
  {
    "format": "Search CPC — mid-competition (e-commerce, education)",
    "cost": "LKR 90 – 300 / click",
    "notes": "Most SMEs sit here."
  },
  {
    "format": "Search CPC — high-competition (insurance, finance, real estate)",
    "cost": "LKR 300 – 1,200 / click",
    "notes": "Brand-name keywords cheapest."
  },
  {
    "format": "Performance Max — typical CPA",
    "cost": "LKR 600 – 4,500 / conversion",
    "notes": "E-commerce purchases or qualified leads."
  },
  {
    "format": "YouTube TrueView (CPV)",
    "cost": "LKR 3 – 12 / view",
    "notes": "Targeted view, skippable."
  },
  {
    "format": "Recommended starter monthly budget",
    "cost": "LKR 60,000 – 150,000",
    "notes": "Enough to gather data + optimise."
  },
  {
    "format": "Agency management fee",
    "cost": "LKR 35,000 – 150,000 / month or 15–25% of spend",
    "notes": "Includes setup, tracking, creative tweaks."
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

export const Route = createFileRoute("/google-ads-cost-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: `google ads cost sri lanka, advertising cost sri lanka, advertising rates sri lanka` },
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
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Google Ads Cost in Sri Lanka</h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/85">{DESC}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
        <p>Google Ads in Sri Lanka are billed in USD via your card. Cost-per-click varies by industry and competition. These are ranges we see in live accounts.</p>

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

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">What you are actually paying for in Google Ads</h2>
        <p className="mt-3">Google Ads in Sri Lanka is sold as an auction. The CPC you pay is set in real time by the competing bids in your keyword auction, multiplied by your Quality Score (a 1–10 measure of ad relevance, landing-page experience and expected click-through rate). A higher Quality Score reduces your CPC even when you bid the same amount as a competitor, which is why two advertisers chasing the same keyword can pay very different prices for the same click.</p>
        <p className="mt-3">This is also why "Google Ads cost in Sri Lanka" cannot be answered with a single number. A plumbing service in Wattala may pay LKR 40 per click and a leasing company in Colombo may pay LKR 900 for the same word, because the lifetime value of a leasing customer justifies a 22× higher bid.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Budget benchmarks by campaign type</h2>
        <p className="mt-3">A useful working set of monthly Google Ads budgets for Sri Lankan businesses in 2026:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Local service business (single city):</strong> LKR 35,000–80,000/month — enough for 400–1,200 clicks on focused commercial-intent keywords.</li>
          <li><strong>E-commerce store (national):</strong> LKR 80,000–300,000/month — Shopping and Performance Max usually outperform pure Search at this level.</li>
          <li><strong>B2B lead generation:</strong> LKR 100,000–400,000/month — small click volume but high CPC keywords (LKR 300–1,200); track to qualified meetings, not raw leads.</li>
          <li><strong>Education / courses:</strong> LKR 150,000–500,000/month — January, May and August enrolment peaks justify seasonal scaling.</li>
          <li><strong>Real estate / financial services:</strong> LKR 200,000–800,000/month — among the highest CPCs in the country; quality of landing page is decisive.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Campaign types — when to use which</h2>
        <p className="mt-3">Google has consolidated its inventory into a handful of campaign types. Each suits a different objective:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Search:</strong> the workhorse for commercial-intent keywords ("buy", "near me", "price", branded). Highest intent, highest CPC, highest conversion rate.</li>
          <li><strong>Performance Max (PMax):</strong> automated mix of Search, Shopping, Display, YouTube and Discover. Strong for e-commerce with a complete product feed; weaker for service businesses with limited assets.</li>
          <li><strong>Shopping:</strong> dedicated product-listing ads from Merchant Center. The default for any retailer with 20+ SKUs.</li>
          <li><strong>YouTube (Video):</strong> CPV-based awareness and consideration. Skippable in-stream is the cost-efficient default; bumpers are great for reach.</li>
          <li><strong>Display / Demand Gen:</strong> low CPC, high reach. Best used for remarketing to people who already visited your site, not as a primary acquisition channel.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Where most Sri Lankan accounts waste money</h2>
        <p className="mt-3">Auditing dozens of local accounts, the same five leaks appear again and again. Fix these and most accounts cut their cost per conversion by 30–50% without adding budget:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Broad-match keywords with no negative list.</strong> A single broad term like "marketing" can chew through LKR 150,000 in a month showing on completely irrelevant searches. Always run with a tightly maintained negative-keyword list.</li>
          <li><strong>One ad group with 50 keywords.</strong> Lower Quality Score, higher CPC. Use tightly themed ad groups of 5–15 closely related keywords each.</li>
          <li><strong>Sending all traffic to the homepage.</strong> A dedicated landing page typically lifts conversion rate 2–4×.</li>
          <li><strong>No conversion tracking.</strong> Without proper Google Ads or GA4 conversion events, you are optimising on clicks not customers.</li>
          <li><strong>Display Network left on by default in Search campaigns.</strong> This silently bleeds budget on low-intent placements. Turn it off and run Display as its own campaign if you need it.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Agency vs in-house — what each really costs</h2>
        <p className="mt-3">Specialist agency management of Google Ads in Sri Lanka typically costs LKR 35,000–150,000 per month, or 15–25% of media spend, with most accounts settling in the LKR 50,000–80,000 range for spend below LKR 500,000/month. The fee covers strategy, keyword and ad-copy work, Quality Score management, conversion tracking, weekly optimisation, monthly reporting and creative refreshes.</p>
        <p className="mt-3">In-house can work if you can hire a dedicated paid-media specialist (LKR 120,000–250,000/month salary) who has at least 2–3 years of hands-on Google Ads experience and is willing to study the platform continuously. Below that experience level, in-house almost always underperforms a competent agency on a like-for-like budget.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Get a tailored quote</h2>
        <p className="mt-3">Every brand has different audiences, seasons and goals. Call <a className="text-primary underline-offset-2 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or visit our <Link to="/get-quote" className="text-primary underline-offset-2 hover:underline">free quote form</Link> for a written estimate within 24 hours.</p>

        <p className="mt-6 text-sm">See the full <Link to="/advertising-rates" className="text-primary underline-offset-2 hover:underline">Sri Lanka advertising rates guide</Link> for every other channel.</p>
      </section>

      <CTASection />
    </PageShell>
  );
}
