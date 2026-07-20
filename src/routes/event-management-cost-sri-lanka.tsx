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
    { "@type": "Question", name: "Do you give written quotes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Call 0701772626 or WhatsApp us for a free written quote tailored to your brief." } },
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

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">How event budgets are actually built</h2>
        <p className="mt-3">A useful planning rule for events in Sri Lanka: venue and food typically account for 40–55% of the total bill, technical production (stage, AV, lighting) 15–25%, decor and styling 10–18%, entertainment 5–12%, planning and management fees 8–12%, and a 5–8% contingency. If any single line is significantly outside that range you usually have either a heavily sponsored event or a brief that needs re-scoping.</p>
        <p className="mt-3">Per-pax pricing is the planner's shortcut. A reasonable benchmark for corporate events in Colombo in 2026: cocktail reception LKR 8,000–25,000 per head, plated dinner LKR 15,000–40,000 per head, gala dinner LKR 25,000–60,000+ per head, conference (full day with two meals) LKR 12,000–35,000 per head. Multiply by guest count to get an order-of-magnitude estimate before detailed quotes come in.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Venue selection — the single decision that drives the rest</h2>
        <p className="mt-3">Venue choice locks in 70% of the remaining cost structure. Five-star Colombo hotels deliver turnkey reliability with strong F&B and built-in AV, but minimum F&B spends are high and creative flexibility is limited. Pillarless ballrooms (Cinnamon Grand, Shangri-La, Kingsbury, Galle Face) command a premium for product launches and award nights where uninterrupted sightlines matter.</p>
        <p className="mt-3">Outdoor and destination venues (Mount Lavinia Hotel lawns, Waters Edge, BMICH lawns, Cinnamon Lakeside pool deck, Bentota and Galle resorts) unlock dramatic visuals but add rigging, generator, weather-contingency tenting and transport line items that often offset any rental saving. For weddings outside Colombo, budget an additional 12–25% for transport and accommodation logistics.</p>
        <p className="mt-3">Conference-purpose venues (BMICH, Waters Edge convention hall, Nelum Pokuna) usually win on price per square foot for 500+ pax conferences but require you to bring more of the production stack yourself.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Where production money actually goes</h2>
        <p className="mt-3">For a 300-pax corporate launch in Colombo with a basic stage, single LED wall, microphones and presentation playback, expect LKR 800,000–1,800,000 in technical production alone. The line items:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Stage and truss:</strong> LKR 150,000–400,000 depending on size and design complexity.</li>
          <li><strong>LED wall (P3 indoor, 16×9 ft):</strong> LKR 200,000–500,000 including operator and content controller.</li>
          <li><strong>Sound system and microphones:</strong> LKR 80,000–250,000 for full active line array, monitors, wireless lapel and hand-helds.</li>
          <li><strong>Stage and ambient lighting:</strong> LKR 120,000–350,000 depending on fixture count and programming complexity.</li>
          <li><strong>Video crew and recording:</strong> LKR 100,000–300,000 for multi-cam recording and live mixing.</li>
          <li><strong>Power backup (silent generator):</strong> LKR 50,000–120,000 for the night — non-negotiable for any outdoor event.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Hidden costs that derail budgets</h2>
        <p className="mt-3">Six line items first-time event planners in Sri Lanka routinely forget:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Police and Excise permits</strong> for alcohol service and amplified music after 10:00 PM.</li>
          <li><strong>Overtime charges</strong> for venue, F&B and production crew if your run-of-show overruns by more than 30 minutes.</li>
          <li><strong>Loading-bay and rigging fees</strong> at five-star hotels, often LKR 25,000–60,000 per event.</li>
          <li><strong>Service charge and government taxes</strong> on F&B — typically 10% + 18% VAT + 2.5% SSCL, so a LKR 5,000 per-head plate actually costs around LKR 6,500.</li>
          <li><strong>Talent and artist riders</strong> — hotel rooms, transport, technical specs, hospitality. Always ask for the rider in writing before signing.</li>
          <li><strong>Wet-weather contingency</strong> — tenting, walkway carpets, umbrellas, redirected layouts. Budget 5–8% of the event cost for outdoor venues during May–June and October–November.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Realistic planning timeline by event type</h2>
        <p className="mt-3">Plan backwards from these working benchmarks:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Corporate cocktail (100 pax):</strong> 3–4 weeks lead time for a confident result.</li>
          <li><strong>Product launch (200–300 pax with media):</strong> 6–10 weeks — most of it is creative, content production and PR alignment, not logistics.</li>
          <li><strong>Gala dinner / award night (300–500 pax):</strong> 10–14 weeks for full creative production, awards engraving, video reels and rehearsals.</li>
          <li><strong>Conference (500–1,000 pax, 1 day):</strong> 12–16 weeks — speaker confirmation and content production are the long poles.</li>
          <li><strong>Wedding (350 pax, mid-tier):</strong> 6–9 months for planning, vendor lock-in and tasting.</li>
          <li><strong>Luxury destination wedding:</strong> 9–14 months — resort buy-outs need to be locked early.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Get a tailored quote</h2>
        <p className="mt-3">Every brand has different audiences, seasons and goals. Call <a className="text-primary underline-offset-2 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or visit our <Link to="/get-quote" className="text-primary underline-offset-2 hover:underline">free quote form</Link> for a written estimate within 24 hours.</p>

        <p className="mt-6 text-sm">See the full <Link to="/advertising-rates" className="text-primary underline-offset-2 hover:underline">Sri Lanka advertising rates guide</Link> for every other channel.</p>
      </section>

      <CTASection />
    </PageShell>
  );
}
