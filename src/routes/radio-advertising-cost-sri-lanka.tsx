import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Radio Advertising Cost in Sri Lanka — Station Rates (2026)";
const DESC = "Radio advertising rates in Sri Lanka — Hiru FM, Sirasa, Y FM, TNL, Kiss, Sun FM, Shakthi FM. Indicative spot rates by daypart and language.";
const SLUG = "radio-advertising-cost-sri-lanka";

const ROWS: { format: string; cost: string; notes: string }[] = [
  {
    "format": "Top Sinhala FM prime time (drive time)",
    "cost": "Rs 8,000 – 22,000 / 30s spot",
    "notes": "Hiru, Sirasa, Y FM 7–10am, 4–7pm."
  },
  {
    "format": "Top Sinhala FM off-peak",
    "cost": "Rs 3,000 – 7,000 / 30s spot",
    "notes": "Late night and weekends."
  },
  {
    "format": "English FM (TNL, Kiss, YES)",
    "cost": "Rs 5,000 – 15,000 / 30s spot",
    "notes": "Urban, English-speaking, premium SEC."
  },
  {
    "format": "Tamil FM (Shakthi, Sun FM)",
    "cost": "Rs 4,000 – 12,000 / 30s spot",
    "notes": "North & East and tea-estate reach."
  },
  {
    "format": "Sponsorship of show / weather / traffic",
    "cost": "Rs 80,000 – 400,000 / month",
    "notes": "Branded billboards in show."
  },
  {
    "format": "Radio jingle production",
    "cost": "Rs 35,000 – 250,000",
    "notes": "Voiceover only vs full sung jingle."
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

export const Route = createFileRoute("/radio-advertising-cost-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: `radio advertising cost sri lanka, advertising cost sri lanka, advertising rates sri lanka` },
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
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Radio Advertising Cost in Sri Lanka</h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/85">{DESC}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
        <p>Radio is the most cost-efficient channel for daily reach and frequency in Sri Lanka. Rates below are indicative for a 30-second spot.</p>

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

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Why radio is still one of the most efficient channels</h2>
        <p className="mt-3">Radio reaches roughly 70% of Sri Lankans every week, with particularly strong penetration in vehicles during drive-time, in three-wheelers across the day, in shops and salons, and inside households in semi-urban and rural Sri Lanka. Its great strength is frequency — a campaign with 8–12 spots a day for two weeks will build recall faster than almost any other medium for the same money.</p>
        <p className="mt-3">On a cost-per-thousand-listeners basis, radio in Sri Lanka is usually 4–8× cheaper than television for the same effective reach in a defined region, and 2–3× cheaper than out-of-home for the same frequency.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Language and station targeting — get this right first</h2>
        <p className="mt-3">Sri Lankan radio splits cleanly across Sinhala, Tamil and English networks, and listener profiles barely overlap. A national consumer brand usually buys across all three. A regional product or service can save 50–70% of the budget by buying language-targeted only.</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Sinhala-language FM</strong> drives mass reach in Western, North-Western, Central, Southern, Sabaragamuwa and Uva provinces. Drive-time and morning belt deliver the strongest cost-efficiency.</li>
          <li><strong>Tamil-language FM</strong> is essential for Northern, Eastern, and plantation-belt audiences. Often the only meaningful broadcast channel into estate communities and small towns in the North-East.</li>
          <li><strong>English-language FM</strong> is comparatively niche by listener count but indexes very high on professional audiences in Greater Colombo, Kandy and Galle — premium SEC, decision-makers, expats.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Dayparts and ad length — the practical pricing matrix</h2>
        <p className="mt-3">Most stations sell three dayparts: morning drive (06:30–10:00), afternoon drive (16:00–19:00) and off-peak (everything else). Drive-time can cost 2.5–3× off-peak for the same 30-second spot. Weekend daytime sits between the two.</p>
        <p className="mt-3">The 30-second spot is the default unit. Common variants:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>10-second tag</strong> — about 40% of the 30-second rate. Use for short calls to action after a longer ad.</li>
          <li><strong>20-second spot</strong> — about 70% of the 30-second rate. The sweet spot for most retail and service offers.</li>
          <li><strong>45-second spot</strong> — about 150% of the 30-second rate. Use only when there is genuine narrative justification.</li>
          <li><strong>60-second spot</strong> — about 180–200% of the 30-second rate. Almost always overkill unless you are doing radio drama or sponsorship.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Sponsorships, branded billboards and live reads</h2>
        <p className="mt-3">Beyond spot buying, radio offers high-value integration formats that often outperform plain spots:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Show sponsorship</strong> — your brand is woven into the show opener, closer and intermediate billboards (e.g. "weather brought to you by ..."). Typically LKR 80,000–400,000 per month and the perceived endorsement value is high.</li>
          <li><strong>Traffic and weather slots</strong> — short branded 8–10 second mentions inside hourly traffic or weather updates. Excellent frequency at a fraction of full-spot cost.</li>
          <li><strong>Live RJ reads</strong> — the RJ delivers the message in their own voice and personality. Carries 2–3× the recall of a produced ad of the same length, but you give up some message control.</li>
          <li><strong>Branded contests and giveaways</strong> — the listener pays you with attention while the prize cost replaces some of the media buy.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Producing the spot — practical guidance</h2>
        <p className="mt-3">A voiced 30-second radio ad in Sri Lanka can be produced for as little as LKR 35,000 (single voice, simple bed) or up to LKR 250,000 for a fully sung jingle with multiple voices and a mixed instrumental track. Three production tips that consistently lift response:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Open with the offer or hook in the first 3 seconds — listeners decide in the first sentence whether to keep listening.</li>
          <li>Mention the brand name at least three times in 30 seconds, and once in the first 5 seconds. Recall studies show brand-name mentions are the single biggest predictor of unaided recall.</li>
          <li>End with one clear action — a phone number, a website, or "visit our store today". Spots with two competing actions reduce response by 30–50%.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Get a tailored quote</h2>
        <p className="mt-3">Every brand has different audiences, seasons and goals. Call <a className="text-primary underline-offset-2 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or visit our <Link to="/get-quote" className="text-primary underline-offset-2 hover:underline">free quote form</Link> for a written estimate within 24 hours.</p>

        <p className="mt-6 text-sm">See the full <Link to="/advertising-rates" className="text-primary underline-offset-2 hover:underline">Sri Lanka advertising rates guide</Link> for every other channel.</p>
      </section>

      <CTASection />
    </PageShell>
  );
}
