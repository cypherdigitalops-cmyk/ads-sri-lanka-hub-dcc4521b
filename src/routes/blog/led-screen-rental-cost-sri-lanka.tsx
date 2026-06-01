import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/led-screen-rental-cost-sri-lanka";
const TITLE = "LED Screen Rental Sri Lanka — How Much Does It Cost in 2025?";
const DESC =
  "Real 2025 prices for LED screen rental in Sri Lanka. Small indoor from Rs 40,000/day, medium Rs 80,000–150,000, large outdoor Rs 200,000–500,000. What affects pricing, hidden costs, and how to get an accurate quote.";

const PRIMARY_ANCHOR = {
  href: "/led-screen-rental-sri-lanka",
  regex: /(LED\s+screen\s+rent\s+in\s+Sri\s+Lanka)/i,
  fallbackText: "LED screen rent in Sri Lanka",
  ctaLabel: "See LED screen rent packages in Sri Lanka",
  ctaHeadline: "Need a quote? See full LED screen rent in Sri Lanka pricing",
  ctaService: "LED Screen Rental Sri Lanka",
};

export const Route = createFileRoute("/blog/led-screen-rental-cost-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "led screen rental cost sri lanka, led screen rental price sri lanka, led wall hire cost, led screen rent in sri lanka, led video wall pricing",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE.url}/${SLUG}` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/${SLUG}` }],
  }),
  component: () => (
    <PageShell>
      <CustomBlogArticle
        slug={SLUG}
        title={TITLE}
        description={DESC}
        kicker="2025 Pricing Guide"
        publishedISO="2025-03-05"
        category={{ label: "Event AV — Pricing", href: "/event-management-sri-lanka" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="If you're planning an event in Sri Lanka in 2025 and you've started gathering quotes for an LED screen, you've probably noticed prices swing wildly — from Rs 40,000 to over Rs 500,000 per day. Here's exactly what drives that range, and how to get a quote you can trust."
        blocks={[
          {
            type: "p",
            text: "Price is the first question every organiser asks — and the most misunderstood. The same '4 metre LED screen' can cost Rs 80,000 from one supplier and Rs 180,000 from another, and both can be honest quotes for completely different builds. This guide breaks down the 2025 market rates, what's actually inside each tier, and the hidden line items that catch first-time renters off-guard.",
          },

          { type: "h2", text: "2025 price bands at a glance" },
          {
            type: "table",
            head: ["Tier", "Build", "Use case", "Per-day price (LKR)"],
            rows: [
              ["Small indoor", "2m × 1.5m, P3/P4", "Boardroom, breakout, retail launch", "40,000 – 65,000"],
              ["Medium indoor", "3m × 2m to 4m × 2.5m, P3", "Weddings, AGMs, prize-givings", "80,000 – 150,000"],
              ["Large indoor", "6m × 3.5m+ P3", "Product launches, conferences", "180,000 – 350,000"],
              ["Medium outdoor", "4m × 3m to 6m × 4m, P5/P6", "Roadshows, school events", "200,000 – 350,000"],
              ["Large outdoor", "8m × 5m to 12m × 7m+, P6/P8", "Concerts, rallies, festivals", "400,000 – 1,200,000+"],
            ],
          },

          { type: "h2", text: "What actually affects the price" },

          { type: "h3", text: "1. Pixel pitch (P2 vs P3 vs P6 vs P10)" },
          {
            type: "p",
            text: "Pitch is the distance between LEDs — smaller pitch means sharper image but much higher cost. A P2.6 indoor panel costs roughly 1.8× a P5 panel of the same area. For close indoor viewing (weddings, conferences) you want P2.6 to P3. For outdoor distance viewing (concerts, rallies) P5 to P10 is standard.",
          },

          { type: "h3", text: "2. Indoor vs outdoor" },
          {
            type: "p",
            text: "Outdoor panels need 5,000–7,000 nit brightness (vs 800–1,500 nits indoor), IP65 weather sealing, and heavier rigging. Hardware alone costs the supplier 1.5–2× more, and the install labour is heavier — both flow through into the quote.",
          },

          { type: "h3", text: "3. Total screen area" },
          {
            type: "p",
            text: "Rental is fundamentally priced per square metre per day. A 6m × 3.5m wall (21 sqm) costs roughly 3.5× a 3m × 2m wall (6 sqm) of the same pitch — not exactly linear, but close.",
          },

          { type: "h3", text: "4. Number of event days" },
          {
            type: "p",
            text: "Day one carries the full install + dismantle labour. Additional days are usually discounted 15–30%. A 3-day exhibition build doesn't cost 3× a one-day rate — expect roughly 2.0–2.3× total.",
          },

          { type: "h3", text: "5. Technician & operator fee" },
          {
            type: "p",
            text: "A dedicated technician for the full event day runs LKR 12,000–25,000. Most reputable suppliers bundle this in; cheap quotes often strip it out and add it back later.",
          },

          { type: "h3", text: "6. Transport & distance" },
          {
            type: "p",
            text: "Delivery and return inside Colombo: LKR 8,000–18,000. Outstation (Kandy, Galle, Jaffna, Trincomalee): LKR 25,000–75,000 plus crew accommodation if multi-day.",
          },

          { type: "h2", text: "Hidden costs people forget" },
          {
            type: "ul",
            items: [
              "Power / generator — outdoor events almost always need a 30–125kVA silent diesel generator: LKR 20,000–60,000 per day plus fuel.",
              "Content creation — slides, animations, video loops: LKR 15,000–80,000 depending on complexity. The technician operates the screen; they don't design your content.",
              "Rigging labour — ground-support truss, scaffolding or motor-rigged hangs: LKR 25,000–90,000 depending on screen height and venue.",
              "Video processor with seamless switching — for multi-source events (laptop + camera + playback): LKR 15,000–35,000 per day.",
              "Backup / spare cabinets — serious suppliers carry 5–10% spare tiles to site. Cheap quotes don't, and you wear the risk if a tile fails mid-event.",
              "Public liability insurance — established suppliers price this in. Cheap rentals shift it to your event policy.",
              "Wind-load engineering certificate for outdoor — LKR 15,000–35,000 if the venue or local authority requires it.",
            ],
          },

          { type: "h2", text: "How to get an accurate quote in one call" },
          {
            type: "p",
            text: "Suppliers can quote you in 10 minutes if you walk in with the right information. Have these ready before you call:",
          },
          {
            type: "ol",
            items: [
              "Event date(s) and load-in / load-out windows.",
              "Venue name (or location + indoor/outdoor + whether sunlight hits the screen).",
              "Required screen dimensions in metres — OR audience size and furthest viewing distance.",
              "Content type: slides only, video, live camera feed, or live game/score feed.",
              "Number of event days the screen needs to stay live.",
              "Whether you need the processor + operator or you're bringing your own AV team.",
              "Whether power is available on site or you need a generator quoted in.",
            ],
          },

          {
            type: "callout",
            text: "Always ask for the price split: panel rental, processor, technician, truss/rigging, transport, generator, insurance. Without it, comparing quotes is guesswork — and the cheapest line item is almost never the cheapest event.",
          },

          { type: "h2", text: "When the cheapest quote is the most expensive one" },
          {
            type: "p",
            text: "We've seen events where a Rs 60,000 wedding LED screen rental ended up costing the couple Rs 140,000 — once dead pixels were patched, the missing processor was hired in, and a separate technician was paid cash to babysit the screen. The Rs 110,000 turnkey quote from the next supplier would have been cheaper and stress-free. Cheap LED screen rental in Sri Lanka almost always strips out the parts you need most.",
          },

          {
            type: "p",
            text: "For a full list of what's included and how to book, see our LED screen rent in Sri Lanka service page — we publish all-in pricing, sizes, pixel pitches and 24-hour quote turnaround.",
          },
        ]}
        faqs={[
          {
            q: "What is the cheapest LED screen rental in Sri Lanka?",
            a: "A 2m × 1.5m P4 indoor wall from a Colombo supplier starts around LKR 40,000 per day plus delivery. It's typically used for small product launches, retail openings or boardroom presentations.",
          },
          {
            q: "How much does a wedding LED screen cost in Sri Lanka?",
            a: "The standard 10ft × 6.5ft (3m × 2m) P2.8 indoor wall used for most Sri Lankan weddings costs LKR 65,000–140,000 per day, all-in with processor, technician and delivery in Colombo.",
          },
          {
            q: "Why are outdoor LED screens more than double the price of indoor?",
            a: "Outdoor panels need 5,000–7,000 nit brightness, weatherproof IP65 cabinets, heavier rigging, wind-load engineering and a generator. The hardware costs the supplier 1.5–2× more and the labour is heavier — both flow into the rental rate.",
          },
          {
            q: "Is content creation included in the LED screen rental?",
            a: "No. The supplier provides the screen, processor and operator. Slides, video loops and animations are a separate creative line, typically LKR 15,000–80,000 depending on complexity.",
          },
          {
            q: "Can I negotiate the quoted rate?",
            a: "Yes — multi-day events, off-peak weekday dates (Sun–Wed), and bundled packages (screen + sound + lighting from one supplier) all create room to negotiate 10–20%. Single-day weekend rentals at peak times have almost no flex.",
          },
        ]}
        related={[
          { href: "/blog/indoor-outdoor-led-screen-rental-sri-lanka", label: "Indoor vs outdoor LED screen rental — what's the difference?" },
          { href: "/blog/events-that-need-led-screen-rental-sri-lanka", label: "7 events in Sri Lanka that need an LED screen" },
          { href: "/blog/how-much-does-led-screen-rent-cost-sri-lanka", label: "Full LED screen rent cost breakdown — Sri Lanka" },
          { href: "/blog/pixel-pitch-explained-led-screen-rent-sri-lanka", label: "Pixel pitch explained — pick the right LED screen" },
          { href: "/led-screen-rental-sri-lanka", label: "LED Screen Rental Sri Lanka" },
          { href: "/event-management-sri-lanka", label: "Event Management Sri Lanka" },
        ]}
      />
    </PageShell>
  ),
});