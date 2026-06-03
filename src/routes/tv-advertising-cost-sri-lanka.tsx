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

export const Route = createFileRoute("/tv-advertising-cost-sri-lanka")({
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

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">How TV pricing actually works in Sri Lanka</h2>
        <p className="mt-3">Television in Sri Lanka is sold spot-by-spot inside daypart bands, not as bulk audience guarantees. The published rate card always assumes a 30-second commercial in a defined slot — 15-second ads usually cost 60–70% of the 30-second rate, 45-second ads cost about 150%, and 60-second ads roughly 180–200%. Length, not just position, drives the bill.</p>
        <p className="mt-3">Dayparts are the single biggest cost variable. Prime time runs roughly 7:00 PM to 10:00 PM when teledramas pull peak family viewership and rate cards may quote 2–4× the daytime number. Late prime (10:00 PM–midnight) drops sharply, daytime housewife belts (10:00 AM–4:00 PM) sit at the lower end, and early morning news bulletins sit in between because they attract a smaller but high-income audience.</p>
        <p className="mt-3">Inside prime time, the specific programme matters even more than the channel. Bumpers around the top-rated teledramas and 8:00 PM news command a premium because advertisers know exactly how many sets are switched on. Live sport — particularly cricket — is a category of its own, with break rates that can run 5–10× a regular prime spot during ICC tournaments.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">GRPs, reach and frequency — what to actually buy</h2>
        <p className="mt-3">Ask your TV plan to be measured in Gross Rating Points (GRPs), 1+ reach and average frequency, not just number of spots. A campaign of 60 spots that delivers 250 GRPs at 65% reach and 3.8 frequency is doing real work; the same 60 spots scattered across off-peak daytime might deliver only 90 GRPs and reach 28% of your target.</p>
        <p className="mt-3">For a national consumer launch in Sri Lanka, a useful planning benchmark is 300–450 GRPs in the launch month for awareness, dropping to 150–200 GRPs per month for sustenance. Anything under 100 GRPs in a month is essentially invisible at the national level — you will spend money without moving recall scores.</p>
        <p className="mt-3">Channel-mix discipline matters too. A campaign targeting rural and semi-urban audiences should lean heavily on the largest Sinhala channels and state broadcasters; an urban premium-product campaign should over-index on English-language and lifestyle channels even though raw GRP cost is higher.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">TVC production — where the money really goes</h2>
        <p className="mt-3">On-air spend is only part of the bill. A 30-second commercial in Sri Lanka can be produced for anywhere between LKR 350,000 and LKR 12M+ depending on scope. Here is roughly how a mid-tier LKR 1.5M production breaks down:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Concept and script:</strong> 5–8% of total — usually included in agency retainer.</li>
          <li><strong>Pre-production:</strong> 10–15% — casting, location recce, storyboard, costume, props.</li>
          <li><strong>Shoot day(s):</strong> 35–45% — crew (DOP, gaffer, sound, AD), camera and lighting hire, talent fees, location fees, F&B.</li>
          <li><strong>Post-production:</strong> 20–25% — offline edit, online finishing, colour grade, sound design, VO.</li>
          <li><strong>Music and licensing:</strong> 5–10% — original jingle or licensed stock track.</li>
          <li><strong>Contingency and overheads:</strong> 8–12% — always include this; weather and equipment failure happen.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Practical ways to cut TV cost without cutting impact</h2>
        <p className="mt-3">Six negotiation tactics consistently work with Sri Lankan TV sales houses:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Buy <strong>fixed-spot packages</strong> for prime drama bumpers — you pay a small premium but you guarantee position, which is often worth more than a rate discount.</li>
          <li>Combine <strong>RON (run-of-network) inventory</strong> with prime fixed spots — RON can drop your blended cost-per-GRP by 25–35%.</li>
          <li>Take <strong>bonus spots</strong> instead of rate cuts when the channel resists discounting headline prime — extra inventory in late-prime and daytime is essentially free reach.</li>
          <li>Commit to <strong>13-week or 26-week deals</strong> instead of monthly buying — annual volume commitments unlock the deepest discounts.</li>
          <li>Use <strong>15-second cutdowns</strong> for the second half of the campaign — you keep frequency up at 60–70% of the cost.</li>
          <li>Avoid <strong>festival weeks</strong> (Avurudu, Vesak, Christmas-New Year) for non-festive brands — rates spike 20–40% and inventory is tight.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Measurement — what to demand in your post-buy report</h2>
        <p className="mt-3">Insist on a post-campaign report within 10 working days of the last spot that includes scheduled vs delivered spot logs, achieved GRPs vs planned by daypart and channel, 1+ and 3+ reach against your target audience, and any spot drops with credit notes attached. Without this report you have no way to verify the inventory you actually paid for, and you cannot benchmark future buys.</p>
        <p className="mt-3">For brands serious about TV, an annual or semi-annual brand-tracking study (top-of-mind awareness, ad recall, message take-out) is the only honest way to measure whether all this money is moving the needle.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Get a tailored quote</h2>
        <p className="mt-3">Every brand has different audiences, seasons and goals. Call <a className="text-primary underline-offset-2 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or visit our <Link to="/get-quote" className="text-primary underline-offset-2 hover:underline">free quote form</Link> for a written estimate within 24 hours.</p>

        <p className="mt-6 text-sm">See the full <Link to="/advertising-rates" className="text-primary underline-offset-2 hover:underline">Sri Lanka advertising rates guide</Link> for every other channel.</p>
      </section>

      <CTASection />
    </PageShell>
  );
}
