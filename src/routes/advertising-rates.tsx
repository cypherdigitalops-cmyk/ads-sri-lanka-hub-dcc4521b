import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Advertising Rates in Sri Lanka — Cost Guide for Every Channel | advertisingsrilanka.lk";
const DESC = "Complete cost guide for advertising in Sri Lanka — TV, radio, newspaper, billboard, Google Ads, social media, SEO, branding, web and video. Indicative rates for budget planning. Call 0701772626.";

export const Route = createFileRoute("/advertising-rates")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/advertising-rates` }],
  }),
  component: Rates,
});

type Row = { format: string; cost: string; notes: string };
type Section = {
  slug: string;
  title: string;
  rows: Row[];
  drivers: string;
};

const SECTIONS: Section[] = [
  {
    slug: "atl-advertising-sri-lanka",
    title: "ATL advertising rates in Sri Lanka",
    rows: [
      { format: "TV commercial — 30s, regional / off-peak", cost: "LKR 40,000 – 150,000 per spot", notes: "Secondary channels, daytime slots" },
      { format: "TV commercial — 30s, national prime time", cost: "LKR 200,000 – 500,000 per spot", notes: "Top-rated Sinhala / Tamil channels" },
      { format: "TV programme sponsorship", cost: "LKR 1,000,000 – 10,000,000+ per series", notes: "Tele-dramas, news, sports" },
      { format: "Radio spot — 30 seconds", cost: "LKR 5,000 – 25,000 per spot", notes: "Varies by station and time band" },
      { format: "Newspaper — quarter page colour", cost: "LKR 50,000 – 150,000 per insertion", notes: "National dailies, Sin/Tam/Eng" },
      { format: "Cinema — 30s pre-roll", cost: "LKR 25,000 – 60,000 per cinema / week", notes: "Multiplex and standalone screens" },
    ],
    drivers:
      "ATL costs are driven by audience size, time slot, language market and booking volume. Multi-spot and multi-channel buys typically attract negotiated rates. Production costs are separate from airtime and range from LKR 200,000 for studio-based work to LKR 2,000,000+ for full location productions.",
  },
  {
    slug: "btl-advertising-sri-lanka",
    title: "BTL advertising rates in Sri Lanka",
    rows: [
      { format: "Mall activation — 1 day", cost: "LKR 75,000 – 250,000 per location", notes: "Site fee + setup + promoters" },
      { format: "Roadshow — multi-city, per day", cost: "LKR 150,000 – 500,000 per day", notes: "Vehicle, crew, materials" },
      { format: "Product sampling — per promoter / day", cost: "LKR 3,500 – 7,000 per promoter", notes: "Plus product and supervisor" },
      { format: "Leaflet distribution — per 1,000", cost: "LKR 1,500 – 4,000 per 1,000", notes: "Door-to-door or hand-out" },
      { format: "Exhibition stand build", cost: "LKR 150,000 – 1,500,000 per event", notes: "Size, finish, branding depth" },
    ],
    drivers: "BTL costs depend on the number of locations, days, manpower required, materials produced and any site fees payable to malls, supermarkets or event organisers.",
  },
  {
    slug: "ttl-advertising-sri-lanka",
    title: "TTL & integrated marketing rates in Sri Lanka",
    rows: [
      { format: "Integrated launch campaign", cost: "LKR 2,000,000 – 25,000,000+ per campaign", notes: "TV + digital + outdoor + activation" },
      { format: "Multi-channel monthly retainer", cost: "LKR 250,000 – 1,500,000 / month", notes: "Coordinated planning and creative" },
    ],
    drivers: "Integrated campaigns are budgeted by total reach, channel mix and creative volume. Costs scale with the number of channels coordinated and the duration of activity.",
  },
  {
    slug: "digital-marketing-sri-lanka",
    title: "Digital marketing rates in Sri Lanka",
    rows: [
      { format: "Google Ads — managed", cost: "From LKR 15,000 / month + ad spend", notes: "Min ad spend LKR 20,000 – 100,000+" },
      { format: "Facebook & Instagram Ads — managed", cost: "From LKR 12,000 / month + ad spend", notes: "Min ad spend LKR 10,000+" },
      { format: "TikTok Ads — managed", cost: "From LKR 15,000 / month + ad spend", notes: "Creative-heavy" },
      { format: "YouTube Ads — managed", cost: "From LKR 20,000 / month + ad spend", notes: "Video creative required" },
      { format: "Performance marketing retainer", cost: "LKR 50,000 – 250,000 / month", notes: "Multi-platform, full funnel" },
    ],
    drivers: "Digital costs split into management fees and ad spend. Ad spend is fully consumed by the platform; management fees cover strategy, creative, campaign setup, optimisation and reporting.",
  },
  {
    slug: "seo-services-sri-lanka",
    title: "SEO services rates in Sri Lanka",
    rows: [
      { format: "Local SEO — small business", cost: "LKR 25,000 – 60,000 / month", notes: "Google Business + city-level keywords" },
      { format: "National SEO — competitive", cost: "LKR 75,000 – 200,000 / month", notes: "Content + technical + backlinks" },
      { format: "Ecommerce SEO", cost: "LKR 60,000 – 250,000 / month", notes: "Product / category optimisation" },
      { format: "Technical SEO audit (one-off)", cost: "LKR 40,000 – 150,000", notes: "Site-wide technical review" },
    ],
    drivers: "SEO costs are determined by competition for the target keywords, the technical scope of the site and the volume of content and backlink work required each month.",
  },
  {
    slug: "social-media-marketing-sri-lanka",
    title: "Social media marketing rates in Sri Lanka",
    rows: [
      { format: "Social media management — basic", cost: "LKR 25,000 – 50,000 / month", notes: "1 platform, 8–12 posts" },
      { format: "Social media management — full", cost: "LKR 60,000 – 200,000 / month", notes: "Multi-platform + reels + ads" },
      { format: "Influencer marketing — micro", cost: "LKR 15,000 – 75,000 per post", notes: "10k–100k followers" },
      { format: "Influencer marketing — macro", cost: "LKR 100,000 – 1,000,000+ per post", notes: "Celebrity / 500k+ followers" },
    ],
    drivers: "Social media costs depend on the number of platforms managed, posting frequency, video / reel volume and whether paid promotion and influencer partnerships are included.",
  },
  {
    slug: "email-sms-marketing-sri-lanka",
    title: "Email & SMS marketing rates in Sri Lanka",
    rows: [
      { format: "Bulk SMS — 10,000 messages", cost: "LKR 8,000 – 18,000 per blast", notes: "Sender ID + content approval" },
      { format: "WhatsApp business broadcast", cost: "LKR 1.5 – 4.5 per message", notes: "Template message fees" },
      { format: "Email marketing — managed", cost: "LKR 20,000 – 80,000 / month", notes: "Newsletter + automation" },
      { format: "Email automation setup", cost: "LKR 75,000 – 300,000 (one-off)", notes: "Welcome / abandon / win-back flows" },
    ],
    drivers: "SMS costs are per message and depend on the operator and sender ID setup. Email and WhatsApp costs depend on list size, sending frequency and the depth of automation.",
  },
  {
    slug: "outdoor-advertising-sri-lanka",
    title: "Outdoor advertising rates in Sri Lanka",
    rows: [
      { format: "Standard billboard — Colombo", cost: "LKR 80,000 – 300,000 / month", notes: "Location and size dependent" },
      { format: "Digital LED screen", cost: "LKR 150,000 – 500,000 / month", notes: "Per location, per loop share" },
      { format: "Bus / transit branding", cost: "LKR 25,000 – 90,000 per bus / month", notes: "Inter-province buses" },
      { format: "Tuk-tuk branding", cost: "LKR 4,500 – 8,000 per tuk / month", notes: "Min booking 50–100 units" },
      { format: "Lamp post banners", cost: "LKR 1,500 – 4,000 per banner / month", notes: "Per municipal route" },
    ],
    drivers: "Outdoor costs are driven by location footfall, billboard size, illumination and contract duration. Longer bookings (3+ months) usually attract lower monthly rates.",
  },
  {
    slug: "branding-sri-lanka",
    title: "Branding & creative rates in Sri Lanka",
    rows: [
      { format: "Logo design", cost: "LKR 15,000 – 80,000 (one-off)", notes: "Concepts + revisions" },
      { format: "Full brand identity", cost: "LKR 75,000 – 350,000 (one-off)", notes: "Logo + guidelines + collateral" },
      { format: "Packaging design — per SKU", cost: "LKR 25,000 – 120,000 per SKU", notes: "Print-ready artwork" },
      { format: "Corporate profile / brochure", cost: "LKR 35,000 – 150,000", notes: "8–24 page design" },
    ],
    drivers: "Creative costs depend on the scope of deliverables, the number of concepts presented and the rounds of revision included.",
  },
  {
    slug: "web-design-sri-lanka",
    title: "Web design & development rates in Sri Lanka",
    rows: [
      { format: "Brochure website — small business", cost: "LKR 60,000 – 200,000 (one-off)", notes: "5–10 pages, responsive" },
      { format: "Corporate website", cost: "LKR 200,000 – 800,000 (one-off)", notes: "Custom design + CMS" },
      { format: "Ecommerce website", cost: "LKR 300,000 – 2,000,000+ (one-off)", notes: "Catalogue + payments + shipping" },
      { format: "Landing page", cost: "LKR 35,000 – 150,000 (one-off)", notes: "Single-page, conversion focused" },
      { format: "Website maintenance", cost: "LKR 8,000 – 40,000 / month", notes: "Updates, backups, security" },
    ],
    drivers: "Website costs depend on the number of pages, custom design depth, integrations (payments, CRMs, multi-language) and ongoing support requirements.",
  },
  {
    slug: "video-production-sri-lanka",
    title: "Video production rates in Sri Lanka",
    rows: [
      { format: "TV commercial — studio based", cost: "LKR 200,000 – 600,000", notes: "30s, simple production" },
      { format: "TV commercial — full production", cost: "LKR 700,000 – 2,500,000+", notes: "Locations, talent, post" },
      { format: "Corporate film — 2–5 minutes", cost: "LKR 150,000 – 800,000", notes: "Interview + b-roll" },
      { format: "Social media video — per piece", cost: "LKR 25,000 – 150,000", notes: "Reels / TikTok format" },
      { format: "2D animation — per minute", cost: "LKR 75,000 – 250,000 / minute", notes: "Explainer style" },
      { format: "Drone videography — per day", cost: "LKR 60,000 – 200,000 / day", notes: "Operator + gear" },
    ],
    drivers: "Production costs depend on concept complexity, number of shooting days, locations, talent and the depth of post-production (editing, colour, sound, animation).",
  },
];

function Rates() {
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Advertising Rates" }]} />
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
            Advertising Rates in Sri Lanka — A Complete Cost Guide
          </h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/85">
            This page provides general cost reference ranges for every major advertising channel in Sri Lanka. All figures are indicative starting points for budget planning — actual rates depend on the specific media owner, booking volume, creative format and campaign duration. For a specific cost estimate for your campaign, call {SITE.phone} or send a free question.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 space-y-14">
        {SECTIONS.map((s) => (
          <div key={s.slug}>
            <h2 className="text-2xl font-bold sm:text-3xl">{s.title}</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary text-foreground">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Format</th>
                    <th className="px-5 py-3 font-semibold">Starting cost range</th>
                    <th className="px-5 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {s.rows.map((r) => (
                    <tr key={r.format} className="border-t border-border align-top">
                      <td className="px-5 py-3 font-medium">{r.format}</td>
                      <td className="px-5 py-3 text-foreground">{r.cost}</td>
                      <td className="px-5 py-3 text-muted-foreground">{r.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{s.drivers}</p>
            <Link
              to={`/${s.slug}` as never}
              className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
            >
              Learn more about {s.title.replace(" rates in Sri Lanka", "")} →
            </Link>
          </div>
        ))}

        <p className="rounded-xl border border-border bg-muted/40 p-5 text-sm italic text-muted-foreground">
          All rates on this page are indicative ranges for planning purposes only. Actual costs depend on the media owner, booking terms, creative specifications and campaign duration. For a free, no-obligation cost estimate for your specific campaign, call <a className="font-semibold text-primary not-italic" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or <Link to="/get-quote" className="font-semibold text-primary not-italic">send a free question</Link>.
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <CTASection
          headline="Have a question about advertising costs?"
          sub={`Call ${SITE.phone} for free, no-obligation guidance on the right channel and budget for your business.`}
        />
      </div>
    </PageShell>
  );
}