import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Event Rentals Sri Lanka — Stage, Sound, LED, Tents & 17 Categories | Islandwide";
const DESC = "Event rentals Sri Lanka — LED screens, sound, stages, lighting, tents, generators, photo booths & 17 categories. Delivered, set up & operated islandwide. Call 0771437707.";

const RENTALS: { slug: string; title: string; icon: string; desc: string }[] = [
  { slug: "led-screen-rental-sri-lanka", title: "LED Screen Rental", icon: "🖥️", desc: "Indoor & outdoor LED video walls for stages, conferences and concerts." },
  { slug: "sound-system-rental-sri-lanka", title: "Sound System Rental", icon: "🔊", desc: "Line array, PA systems, mixers and microphones for any venue size." },
  { slug: "stage-rental-sri-lanka", title: "Stage Rental", icon: "🎤", desc: "Modular stages, trusses and risers for events of every scale." },
  { slug: "lighting-rental-sri-lanka", title: "Lighting Rental", icon: "💡", desc: "Stage lighting, moving heads, par cans and intelligent lighting rigs." },
  { slug: "projector-rental-sri-lanka", title: "Projector Rental", icon: "📽️", desc: "HD and 4K projectors with screens for conferences and screenings." },
  { slug: "photo-booth-rental-sri-lanka", title: "Photo Booth Rental", icon: "📸", desc: "Open and enclosed photo booths with instant prints and props." },
  { slug: "360-photo-booth-rental-sri-lanka", title: "360° Photo Booth Rental", icon: "🌀", desc: "Slow-motion 360 video booth — a guaranteed social media hit." },
  { slug: "selfie-mirror-rental-sri-lanka", title: "Selfie Mirror Rental", icon: "🪞", desc: "Interactive mirror booth with prints and digital sharing." },
  { slug: "tent-marquee-rental-sri-lanka", title: "Tent & Marquee Rental", icon: "⛺", desc: "Clear-span marquees, pagodas and pop-up tents for outdoor events." },
  { slug: "table-chair-rental-sri-lanka", title: "Table & Chair Rental", icon: "🪑", desc: "Banquet tables, tiffany chairs, cocktail tables and full set-ups." },
  { slug: "generator-rental-sri-lanka", title: "Generator Rental", icon: "⚡", desc: "Silent diesel generators from 5 kVA to 500 kVA islandwide." },
  { slug: "drone-rental-sri-lanka", title: "Drone Rental", icon: "🚁", desc: "Camera drones with licensed pilots for events and aerial coverage." },
  { slug: "bouncy-castle-rental-sri-lanka", title: "Bouncy Castle Rental", icon: "🏰", desc: "Safe inflatables for kids' parties, school events and family days." },
  { slug: "fog-machine-rental-sri-lanka", title: "Fog Machine Rental", icon: "🌫️", desc: "Low-fog and haze machines for stage atmosphere and entrances." },
  { slug: "cold-spark-machine-rental-sri-lanka", title: "Cold Spark Machine Rental", icon: "✨", desc: "Safe indoor sparklers for weddings, launches and grand entrances." },
  { slug: "neon-sign-rental-sri-lanka", title: "Neon Sign Rental", icon: "🔆", desc: "Custom and stock neon signs for backdrops, weddings and parties." },
  { slug: "flower-wall-rental-sri-lanka", title: "Flower Wall Rental", icon: "🌸", desc: "Photo-ready floral backdrops in multiple styles and colours." },
];

export const Route = createFileRoute("/event-rentals-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "event rentals sri lanka, led screen rental, sound system rental, stage rental, photo booth rental, tent rental, generator rental" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/event-rentals-sri-lanka` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${SITE.url}/event-rentals-sri-lanka#page`,
          url: `${SITE.url}/event-rentals-sri-lanka`,
          name: TITLE,
          description: DESC,
          inLanguage: "en-LK",
          isPartOf: { "@id": `${SITE.url}/#website` },
          about: { "@type": "Thing", name: "Event Rentals in Sri Lanka" },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: RENTALS.length,
            itemListElement: RENTALS.map((r, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: r.title,
              url: `${SITE.url}/${r.slug}`,
              description: r.desc,
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: "Event Rentals", item: `${SITE.url}/event-rentals-sri-lanka` },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What is included in event equipment rental in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Every rental includes delivery, professional installation, an on-site technician for the full event, equipment testing & rehearsal, and pack-down after the event. Backup spare components are kept on standby for LED screens, sound systems and generators." } },
            { "@type": "Question", name: "How far in advance should I book event rentals in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "LED screens, line-array sound and large generators: 7 days off-peak, 4–6 weeks for November, December and April. Drones need 21+ days (CAASL permit). Large tents need 14 days. Photo booths, tables and chairs: 3–5 days." } },
            { "@type": "Question", name: "Do you deliver event rentals islandwide in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Yes — same/next day in Colombo and suburbs; 1–2 days for Kandy, Galle, Negombo; 2–4 days for Jaffna, Trincomalee, Anuradhapura and outstation. Site checks coordinated for remote heavy-equipment deliveries." } },
            { "@type": "Question", name: "What generator size do I need for my event?", acceptedAnswer: { "@type": "Answer", text: "Add the wattage of all equipment plus 30% headroom. Rough guide: under 200 pax 20–40 kVA, 200–500 pax 60–100 kVA, 500–2,000 pax 150–250 kVA, 2,000+ 350–500 kVA. Use silent generators indoors." } },
            { "@type": "Question", name: "What is the difference between an indoor and outdoor LED screen?", acceptedAnswer: { "@type": "Answer", text: "Indoor uses P3 or finer at 800–2,000 nits — washed out in daylight. Outdoor uses P6–P10 at 5,000–10,000 nits and is readable in Sri Lankan sun. Always specify indoor or outdoor when enquiring." } },
            { "@type": "Question", name: "Can I rent a drone for an event in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Yes — licensed pilots with CAASL permit handling. The CAASL permit takes 14–28 days, so book at least 3–4 weeks ahead. GPS coordinates of the venue are required for the application." } },
            { "@type": "Question", name: "Are cold spark machines safe for indoor use?", acceptedAnswer: { "@type": "Answer", text: "Yes — cold sparks operate at low temperature, produce no smoke and don't trigger smoke detectors when used correctly. Widely used at Colombo hotel weddings, award ceremonies and product launches with venue approval." } },
            { "@type": "Question", name: "Can I rent a photo booth for a wedding in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Yes — open-air, 360° and selfie-mirror booths are popular wedding options with branded overlays, instant prints and an attendant. Book at least 2 weeks in advance; wedding-season weekends fill quickly." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Event Rentals Sri Lanka",
          serviceType: "Event Equipment Rental",
          areaServed: { "@type": "Country", name: "Sri Lanka" },
          provider: { "@type": "Organization", name: SITE.brand, telephone: SITE.phone, url: SITE.url },
          description: DESC,
        }),
      },
    ],
  }),
  component: RentalsHubPage,
});

function RentalsHubPage() {
  const waPhone = SITE.phone.replace(/[^0-9]/g, "").replace(/^0/, "94");
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-wider opacity-80">Event Equipment Rentals</div>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Rent Everything You Need for Your Event in Sri Lanka</h1>
            <p className="mt-4 max-w-2xl text-lg opacity-90">
              LED screens, sound, stages, lighting, photo booths, tents, generators, drones and more — delivered, set up and operated islandwide. Get pricing and free guidance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] hover:opacity-90"
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
              <a
                href={`https://wa.me/${waPhone}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
              <Link
                to="/get-quote"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Get a free quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rentals grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <div className="text-sm font-semibold text-accent">All Rentals</div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Browse {RENTALS.length} event rental services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Pick a category to see what's available, how it's priced and what's included. All rentals come with delivery, setup, operation and pack-down.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RENTALS.map((r) => (
            <Link
              key={r.slug}
              to={`/${r.slug}` as never}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="text-3xl">{r.icon}</div>
              <div className="mt-3 text-lg font-semibold">{r.title}</div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View pricing <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}