import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Advertising in Trincomalee — Complete Guide to Channels, Rates & Agencies";
const DESC = "Plan a winning campaign in Trincomalee, Sri Lanka. We cover billboards, radio, newspapers, TV, digital, BTL and activations in Trincomalee — with local rates, top locations and free guidance.";
const CITY = "Trincomalee";
const SLUG = "advertising-in-trincomalee";

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE.url}/${SLUG}#business`,
  name: `Advertising Sri Lanka — ${CITY}`,
  url: `${SITE.url}/${SLUG}`,
  telephone: "+94701772626",
  image: `${SITE.url}/og-home.jpg`,
  priceRange: "$$",
  areaServed: { "@type": "City", name: CITY },
  address: {
    "@type": "PostalAddress",
    addressLocality: CITY,
    addressRegion: "Eastern Province",
    postalCode: "31000",
    addressCountry: "LK",
  },
  geo: { "@type": "GeoCoordinates", latitude: 8.5874, longitude: 81.2152 },
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: `Advertising in ${CITY}`, item: `${SITE.url}/${SLUG}` },
  ],
};

const FAQS = [
  { q: `How much does advertising cost in ${CITY}?`, a: `Costs in ${CITY} range from Rs 5,000 for a small flyer print run to Rs 300,000+/month for premium billboards. Digital campaigns start around Rs 20,000/month. We give free, no-obligation quotes for every channel.` },
  { q: `Which channel works best in ${CITY}?`, a: `It depends on your audience. Billboards and radio dominate for mass reach in ${CITY}; digital and social media win for targeted B2C; activations and BTL work well in town centres and high-footfall junctions.` },
  { q: `Can you book billboards in ${CITY}?`, a: `Yes. We have access to prime hoarding locations across ${CITY} and we handle permits, printing and installation end-to-end.` },
  { q: "Do you produce content in Sinhala and Tamil?", a: "Yes. All creative — scripts, copy, voice-overs and design — is produced natively in Sinhala, Tamil and English by local writers and directors." },
  { q: `How quickly can a campaign go live in ${CITY}?`, a: "Digital campaigns can launch in 24–48 hours. Billboards and TV need 7–14 days for production, permits and slot booking. Tell us your event date and we work backwards." },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const Route = createFileRoute("/advertising-in-trincomalee")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: `advertising in ${CITY.toLowerCase()}, ${CITY.toLowerCase()} advertising agency, billboards ${CITY.toLowerCase()}, advertising sri lanka` },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/${SLUG}` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/${SLUG}` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(LOCAL_BUSINESS_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(BREADCRUMB_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
    ],
  }),
  component: CityPage,
});

const SERVICES = [
  { slug: "outdoor-advertising-sri-lanka", label: "Outdoor & Billboards" },
  { slug: "digital-marketing-sri-lanka", label: "Digital Marketing" },
  { slug: "social-media-marketing-sri-lanka", label: "Social Media" },
  { slug: "seo-services-sri-lanka", label: "SEO Services" },
  { slug: "branding-sri-lanka", label: "Branding & Identity" },
  { slug: "event-management-sri-lanka", label: "Event Management" },
  { slug: "printing-services-sri-lanka", label: "Printing Services" },
  { slug: "video-production-sri-lanka", label: "Video Production" },
];

function CityPage() {
  const wa = "94701772626";
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: `Advertising in ${CITY}` }]} />
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Advertising in {CITY} — Complete Guide</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">{DESC}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground"><Phone className="h-4 w-4" /> Call {SITE.phone}</a>
            <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-muted-foreground">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Advertising landscape in {CITY}</h2>
        <p className="mt-4">{CITY} is a key regional advertising market in Sri Lanka's Eastern Province. Whether you're running a national brand campaign, a regional retail push or a hyper-local activation, our team covering {CITY} handles strategy, media buying, creative production and on-ground execution end-to-end.</p>
        <h3 className="mt-8 text-xl font-semibold text-foreground">Local media we work with</h3>
        <p className="mt-3">National press (Lake House, Wijeya, Upali), regional editions, Hiru, Sirasa, Derana, Shakthi TV/FM, Sun FM and active community pages targeting {CITY}.</p>
        <h3 className="mt-8 text-xl font-semibold text-foreground">Prime billboard &amp; OOH locations in {CITY}</h3>
        <p className="mt-3 flex items-start gap-2"><MapPin className="mt-1 h-4 w-4 flex-none text-accent" /> Main Street, Dockyard Road, Kandy Road, Nilaveli Road, Uppuveli, China Bay Road, Fort Frederick area, Anuradhapura Road, Kanniya Road, Orr’s Hill.</p>
        <h3 className="mt-8 text-xl font-semibold text-foreground">What we deliver in {CITY}</h3>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-accent" /> Billboards, hoardings, LED screens and transit advertising</li>
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-accent" /> Radio spots and newspaper placements in regional editions</li>
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-accent" /> Google Ads, Meta Ads, TikTok and YouTube targeted to {CITY} pin codes</li>
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-accent" /> BTL activations, town promotions, sampling and roadshows</li>
          <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-accent" /> Print, signage, brand identity and event production</li>
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold sm:text-3xl">Advertising services in {CITY}</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link key={s.slug} to={`/${s.slug}` as never} className="rounded-lg border border-border bg-card p-4 hover:border-primary/40">
              <div className="text-sm font-semibold">{s.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">Learn more →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-2xl font-bold sm:text-3xl">Frequently asked questions — Advertising in {CITY}</h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-lg border border-border bg-card p-5">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">{f.q}</summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
