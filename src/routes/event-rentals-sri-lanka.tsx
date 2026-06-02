import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "Event Rentals in Sri Lanka — Stage, Sound, LED, Photo Booth & More";
const DESC = "Rent everything you need for your event in Sri Lanka — LED screens, sound systems, stages, lighting, photo booths, tents, generators, drones and more. Get pricing and free guidance.";

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