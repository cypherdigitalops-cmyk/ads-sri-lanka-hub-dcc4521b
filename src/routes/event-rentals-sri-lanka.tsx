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
          provider: { "@type": "Organization", name: SITE.name, telephone: SITE.phone, url: SITE.url },
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
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Event Rentals Sri Lanka — Everything Your Event Needs, Delivered & Set Up</h1>
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

      {/* Long-form rank content */}
      <RentalsRankContent />

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

function Th({ children }: { children: React.ReactNode }) {
  return <th className="border border-border bg-muted px-3 py-2 text-left text-sm font-semibold">{children}</th>;
}
function Td({ children }: { children: React.ReactNode }) {
  return <td className="border border-border px-3 py-2 align-top text-sm">{children}</td>;
}

function RentalsRankContent() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 prose prose-slate max-w-none dark:prose-invert">
      {/* Section 1 */}
      <h2>What Every Event Rental Includes — Delivery, Setup & Operation</h2>
      <p>
        Event equipment rental in Sri Lanka from us is not equipment-only hire. Every item in our catalogue comes as a
        complete service — delivery to your venue, professional installation and setup, operation by a trained technician
        for the full event duration, and removal after the event ends. You do not handle the equipment, you do not set it
        up, and you do not need to know how it works.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <Th>What Is Included</Th>
              <Th>LED Screen</Th>
              <Th>Sound</Th>
              <Th>Stage</Th>
              <Th>Lighting</Th>
              <Th>Generator</Th>
              <Th>Tent</Th>
              <Th>Photo Booth</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Delivery to venue", "✅", "✅", "✅", "✅", "✅", "✅", "✅"],
              ["Professional installation", "✅", "✅", "✅", "✅", "✅", "✅", "✅"],
              ["On-site technician", "✅", "✅", "N/A", "✅", "✅", "N/A", "✅"],
              ["Testing & rehearsal", "✅", "✅", "✅", "✅", "✅", "✅", "✅"],
              ["Pack-down & removal", "✅", "✅", "✅", "✅", "✅", "✅", "✅"],
              ["Backup on standby", "Spare panels", "Spare mics", "N/A", "Spare units", "Fuel supply", "N/A", "Spare printer"],
              ["Islandwide delivery", "✅", "✅", "✅", "✅", "✅", "✅", "✅"],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        <strong>What is not included:</strong> venue access charges and parking for our vehicles; generator fuel beyond the
        first tank for long events; CAASL drone permit fees (pass-through); structural engineering sign-off if the venue
        requires it for rigging (rare — flagged at quoting stage).
      </p>

      {/* Section 2 */}
      <h2>Complete Event Rental Catalogue — All 17 Categories Explained</h2>
      <p>What each category covers, the key spec to confirm when enquiring, and the events it's most used for in Sri Lanka.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <Th>Category</Th>
              <Th>What Is Supplied</Th>
              <Th>Key Spec to Confirm</Th>
              <Th>Common Events</Th>
              <Th>Lead Time</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ["LED Screen Rental", "Modular LED panels (P3 indoor / P6–P10 outdoor), processor, frame, power, cabling, operator", "Pixel pitch, screen size, input (HDMI/SDI)", "Conferences, launches, concerts, weddings, exhibitions", "7–21 days"],
              ["Sound System Rental", "Line-array PA, subs, mixer, monitors, wireless mics, engineer", "Venue capacity, indoor/outdoor, mic channels, band input", "Conferences to 10,000-pax concerts", "7–21 days"],
              ["Stage Rental", "Aluminium truss decking, frames, steps, railings, skirt, carpet", "W×D×H, load per sqm, roof needed?", "Concerts, corporate, awards, weddings, prize-givings", "7–14 days"],
              ["Lighting Rental", "LED pars, moving heads, gobos, follow spots, uplighters, haze, DMX desk, programmer", "Intelligent fixtures, follow spot, haze", "Concerts, galas, launches, weddings", "7–14 days"],
              ["Projector Rental", "HD/4K projector, screen, HDMI distribution, spare lamp", "Lumens (10,000+ for lit venues), screen size, throw distance", "Conferences, training, screenings", "3–7 days"],
              ["Photo Booth Rental", "Open-air booth, DSLR, ring light, touchscreen, instant prints, props, branded overlay, attendant", "Print layout, branded template, hours", "Weddings, corporate, birthdays, activations", "5–14 days"],
              ["360° Photo Booth", "Rotating arm camera, platform, slow-mo capture, sharing station, branded overlay, operator", "Platform size (1/2/4 people), sharing method", "Corporate parties, launches, weddings, activations", "7–14 days"],
              ["Selfie Mirror Rental", "Full-length interactive mirror, animated prompts, signature, instant print, GIF, branded UI", "Branded interface, print or digital, hashtag", "Weddings, galas, corporate, fashion", "5–14 days"],
              ["Tent & Marquee Rental", "Clear-span / pagoda tents, sidewalls, flooring, lining, lighting, AC/fans", "Footprint, guest count, flooring, AC, ground conditions", "Outdoor weddings, garden corporate, festivals", "7–21 days"],
              ["Table & Chair Rental", "Round/rectangular tables, cocktail tables, banquet/tiffany/ghost chairs, covers, sashes", "Quantity, chair style, cover colour, addresses", "Weddings, dinners, exhibitions, outdoor events", "3–10 days"],
              ["Generator Rental", "Silent diesel 5–500 kVA, AVR, DB, cables, first-tank fuel, operator", "Total load (kW), hours, placement, earthing", "All outdoor events, indoor with low venue power", "3–10 days"],
              ["Drone Rental", "Camera drone, licensed pilot, spare batteries, CAASL permit management, raw footage", "Venue GPS, CAASL lead time (14–28 days), footage format", "Weddings, outdoor concerts, sports, real estate", "14–28 days"],
              ["Bouncy Castle Rental", "Inflatable castle/slide, blower, safety mat, anchors, setup, supervision", "Age group, outdoor space, surface (grass/concrete)", "Kids' parties, sports days, family days", "3–7 days"],
              ["Fog Machine Rental", "Low-fog chiller or haze machine, fluid, operator", "Low fog vs haze, floor area", "Weddings, concerts, launches, stage", "3–7 days"],
              ["Cold Spark Machine", "2–4 cold-spark fountains, granulate fuel, operator, safety zone", "Number of units, positions, manual/DMX trigger", "Weddings, awards, reveals, concerts", "3–7 days"],
              ["Neon Sign Rental", "LED neon sign (stock or custom), hanging wire/stand, power supply", "Text/design, size, colour, stock vs custom", "Weddings, activations, pop-ups, backdrops", "3–14 days"],
              ["Flower Wall Rental", "Artificial or fresh flower wall, frame, delivery, setup, collection", "Size, style, fresh vs artificial", "Weddings, activations, birthdays, backdrops", "3–10 days"],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 3 */}
      <h2>Event Rental Packages by Event Type</h2>
      <p>Most events need several rental items working together. Use this as a planning checklist and starting point for your equipment brief.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr><Th>Event Type</Th><Th>Essential Rentals</Th><Th>Commonly Added</Th><Th>Typical Scale</Th></tr>
          </thead>
          <tbody>
            {[
              ["Corporate Conference", "Sound, LED/projector, stage, lighting", "Generator, photo booth, fog machine", "100–2,000 delegates"],
              ["Product Launch", "LED screen, sound, stage, lighting, cold spark", "360° booth, fog machine, drone", "50–500 guests"],
              ["Award Ceremony / Gala", "LED, sound, stage, intelligent lighting, follow spots", "Cold spark, selfie mirror, photo booth", "200–1,500 guests"],
              ["Wedding Reception (Hotel)", "Sound, stage, lighting, cold spark, fog machine", "Flower wall, mirror/photo booth, neon sign, LED slideshow", "100–800 guests"],
              ["Wedding Reception (Outdoor)", "Tent, sound, stage, lighting, generator, tables/chairs", "LED, cold spark, flower wall, booth, drone", "100–500 guests"],
              ["Outdoor Concert", "Stage, line-array sound, lighting, LED, generator", "Fog/haze, cold spark, drone, photo booth", "500–50,000 audience"],
              ["Brand Activation / Mall", "Portable sound, LED/projector, branded backdrop", "360° booth/mirror, neon sign, photo booth", "100–5,000 daily"],
              ["Exhibition Booth (BMICH)", "LED/projector, sound, lighting", "Photo booth, mirror, neon branding", "Per-booth setup"],
              ["Children's Party / Family Day", "Bouncy castle, sound (DJ/MC), basic lighting", "Photo booth, neon, fog effect", "50–500 guests"],
              ["School Prize-Giving", "Stage, sound, LED/projector, lighting", "Photo booth, drone", "200–3,000 attendees"],
              ["Outdoor Festival", "Stage, line-array sound, LED, generator, tent", "Intelligent lighting, fog, drone, cold spark", "500–50,000 attendees"],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 4 */}
      <h2>How to Book Event Rentals in Sri Lanka — Step by Step</h2>
      <ol>
        <li><strong>Determine your equipment needs.</strong> Use the event-type table above. Unsure on specs? Call 0771437707 or WhatsApp with event type, attendance and venue for free pre-booking guidance.</li>
        <li><strong>Confirm venue details.</strong> Name and address, ceiling height (rigging/LED), available power (kVA), loading access, event date/times, setup access and derig deadline.</li>
        <li><strong>Request a written quotation.</strong> Listing each item, spec, rental period and any surcharges (outstation, extra generator fuel, CAASL drone permit). Never book on a verbal quote.</li>
        <li><strong>Confirm with a deposit.</strong> LED, line-array sound and large generators are limited. Peak months (November, December, April) book out 4–8 weeks ahead.</li>
        <li><strong>Supply content 5 days before.</strong> Video files for LED, programme rundown and mic list for sound, lighting cues for DMX programming.</li>
        <li><strong>Setup and rehearsal.</strong> Full technical rehearsal — every cue, mic check, lighting state and playback — before the audience arrives.</li>
      </ol>

      <h3>How Far in Advance to Book — By Equipment Type</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead><tr><Th>Equipment</Th><Th>Off-Peak</Th><Th>Peak (Nov–Dec, Apr)</Th><Th>Why</Th></tr></thead>
          <tbody>
            {[
              ["LED screen (indoor)", "7 days", "4–6 weeks", "Limited P3 panel inventory"],
              ["Line-array sound", "7 days", "4–6 weeks", "Few suppliers of pro line arrays"],
              ["Stage (above 6×4m)", "10 days", "4–6 weeks", "Large stage logistics planning"],
              ["Silent generator (100+ kVA)", "7 days", "3–4 weeks", "Large silent gensets are scarce"],
              ["360° photo booth", "7 days", "3–4 weeks", "High demand, limited units"],
              ["Drone (CAASL permit)", "21 days", "30–35 days", "Permit processing time"],
              ["Large tent (10×20m+)", "14 days", "4–6 weeks", "Ground survey required"],
              ["Projector, booth, tables/chairs", "3–5 days", "2–3 weeks", "Widely available"],
              ["Cold spark / fog machines", "3–5 days", "1–2 weeks", "Widely available"],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 5 */}
      <h2>Event Rental Technical Reference — Quick Specs Guide</h2>
      <p>Most live-event failures come from under-specifying. Use this to size equipment correctly.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr><Th>Equipment</Th><Th>Under 200</Th><Th>200–500</Th><Th>500–2,000</Th><Th>2,000+</Th></tr>
          </thead>
          <tbody>
            {[
              ["Sound", "Column/compact PA + 2 mics", "Line array 4+4 + 2 subs + 4 mics", "Line array 8+8 + 4 subs + 8 mics", "Large line array + full monitoring"],
              ["LED Screen", "3×2m P3", "4×3m or 6×3m P3", "6×3m–8×4m P3 / P4 outdoor", "Multiple screens, P4–P10 outdoor"],
              ["Stage", "4×3m × 600mm", "6×4m × 900mm", "8×6m × 1,200mm", "10×8m+ with roof"],
              ["Generator", "20–40 kVA silent", "60–100 kVA silent", "150–250 kVA silent", "350–500 kVA (multiple)"],
              ["Lighting", "8 pars + 2 movers", "16 pars + 6 movers + haze", "Full intelligent + follow spots", "Full concert lighting"],
              ["Tent (outdoor)", "10×10m pagoda", "15×20m clear span", "20×40m clear span", "Multiple structures"],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 6 */}
      <h2>Event Rental Delivery Across Sri Lanka — Coverage & Lead Times</h2>
      <p>We deliver and operate event rental equipment across all 25 districts of Sri Lanka.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead><tr><Th>Region</Th><Th>Key Areas</Th><Th>Lead Time</Th><Th>Logistics Note</Th></tr></thead>
          <tbody>
            {[
              ["Greater Colombo", "Colombo 1–15, Dehiwala, Moratuwa, Kotte, Nugegoda", "Same/next day", "Onsite within hours for urgent bookings"],
              ["Gampaha District", "Negombo, Ja-Ela, Wattala, Ragama, Gampaha", "1 day", "—"],
              ["Kalutara District", "Panadura, Kalutara, Beruwala, Aluthgama", "1–2 days", "Beach venues may need 4WD access"],
              ["Kandy & Central", "Kandy, Peradeniya, Matale, Nuwara Eliya", "1–2 days", "Heavy-vehicle route restrictions possible"],
              ["Southern Province", "Galle, Matara, Hambantota, Unawatuna", "2 days", "Southern Expressway lane access to confirm"],
              ["North Western", "Kurunegala, Puttalam, Chilaw", "1–2 days", "—"],
              ["North Central", "Anuradhapura, Polonnaruwa, Dambulla", "2–3 days", "Plan fuel for large generators"],
              ["Northern Province", "Jaffna, Vavuniya, Mannar, Kilinochchi", "3–4 days", "Book 3+ weeks ahead"],
              ["Eastern Province", "Trincomalee, Batticaloa, Ampara", "3–4 days", "Beach site ground survey may apply"],
              ["Sabaragamuwa & Uva", "Ratnapura, Kegalle, Badulla, Ella, Bandarawela", "2–3 days", "Mountain terrain limits some stage vehicles"],
            ].map((row, i) => (
              <tr key={i}>{row.map((c, j) => (j === 0 ? <Td key={j}><strong>{c}</strong></Td> : <Td key={j}>{c}</Td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 7 FAQ */}
      <h2>Frequently Asked Questions — Event Rentals Sri Lanka</h2>
      {[
        { q: "What is included in event equipment rental in Sri Lanka?", a: "Delivery, professional installation, on-site technician for the full event, equipment testing & rehearsal, and pack-down. Backup spare components are on standby for LED screens, sound and generators." },
        { q: "How far in advance should I book event rentals?", a: "LED, line-array sound and large generators: 7 days off-peak, 4–6 weeks in November, December and April. Drones need 21+ days for CAASL permit. Large tents 14 days. Photo booths, tables and chairs 3–5 days." },
        { q: "Do you deliver event rentals islandwide?", a: "Yes — same/next day in Colombo and suburbs; 1–2 days Kandy/Galle/Negombo; 2–4 days Jaffna/Trincomalee/Anuradhapura and outstation. Remote heavy-equipment deliveries are coordinated with a site check." },
        { q: "What generator size do I need?", a: "Add the wattage of all equipment and add 30% headroom. Rough guide: under 200 pax 20–40 kVA; 200–500 pax 60–100 kVA; 500–2,000 pax 150–250 kVA; 2,000+ 350–500 kVA. Use silent generators indoors." },
        { q: "Indoor vs outdoor LED screen — what's the difference?", a: "Indoor uses P3 or finer at 800–2,000 nits — washed out in daylight. Outdoor uses P6–P10 at 5,000–10,000 nits and is readable in Sri Lankan sun. Always specify indoor or outdoor when enquiring." },
        { q: "Can I rent a drone for an event in Sri Lanka?", a: "Yes — licensed pilots, with CAASL permit handling included. Permit takes 14–28 days; book at least 3–4 weeks ahead. Venue GPS coordinates required for the application." },
        { q: "Are cold spark machines safe indoors?", a: "Yes — cold sparks run at low temperature, produce no smoke and don't trigger smoke detectors when used correctly. Used widely at Colombo hotel weddings, awards and launches with venue approval." },
        { q: "Can I rent a photo booth for a wedding?", a: "Yes — open-air, 360° and selfie-mirror booths with branded overlays, instant prints and an attendant. Book at least 2 weeks ahead; wedding-season weekends fill up quickly." },
      ].map((f, i) => (
        <div key={i}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
    </div>
  );
}