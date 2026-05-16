import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/how-much-does-led-screen-rent-cost-sri-lanka";
const TITLE = "How Much Does LED Screen Rent Cost in Sri Lanka? A 2025 Price Breakdown";
const DESC =
  "Real 2025 prices for LED screen rent in Sri Lanka — small to large builds, indoor vs outdoor, per-day vs multi-day rates, operator and delivery fees, and what drives the final invoice.";

export const Route = createFileRoute("/blog/how-much-does-led-screen-rent-cost-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "led screen rent cost sri lanka, led screen rental price sri lanka, led video wall hire price, led screen rent per day, led screen rent",
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
        kicker="Pricing Guide"
        publishedISO="2025-01-22"
        category={{ label: "Event AV — Pricing", href: "/event-management-sri-lanka" }}
        intro="LED screen rent is the most variable line on any event AV quote — size, pixel pitch, indoor vs outdoor, days, technicians and freight all swing the number. Here's exactly how each piece adds up in Sri Lanka right now."
        blocks={[
          {
            type: "p",
            text: "If you've collected three quotes for LED screen rent and they're 80% apart, you're not being scammed — you're just comparing different builds. Pricing in Sri Lanka depends on six independent factors and any quote that doesn't break them out hides where your money is actually going.",
          },
          { type: "h2", text: "Base screen rental — by size & pitch" },
          {
            type: "table",
            head: ["Build", "Indoor (per day)", "Outdoor (per day)"],
            rows: [
              ["2m × 1.5m P4", "LKR 35,000 – 55,000", "—"],
              ["3m × 2m P4", "LKR 60,000 – 90,000", "LKR 110,000 – 140,000 (P5)"],
              ["4m × 2.5m P3", "LKR 100,000 – 150,000", "LKR 160,000 – 220,000 (P5)"],
              ["6m × 3.5m P3", "LKR 170,000 – 240,000", "LKR 250,000 – 340,000 (P5)"],
              ["8m × 4.5m P3", "LKR 280,000 – 380,000", "LKR 400,000 – 580,000 (P6)"],
              ["10m × 6m+ P6/P8", "—", "LKR 600,000 – 1,200,000+"],
            ],
          },
          { type: "h2", text: "Add-ons that always sit on top" },
          {
            type: "ul",
            items: [
              "Dedicated technician for full event day — LKR 12,000 – 25,000 (often bundled, but worth asking).",
              "Video processor with seamless switching (laptop + camera + playback) — LKR 15,000 – 35,000 per day.",
              "Ground support truss / rigging — LKR 25,000 – 90,000 depending on wall height.",
              "Delivery & return inside Colombo — LKR 8,000 – 18,000. Outstation (Kandy, Galle, Jaffna) — LKR 25,000 – 75,000 plus accommodation.",
              "Backup generator with fuel — LKR 20,000 – 45,000 per day.",
              "Outdoor weatherproofing & wind-load engineering certificate — LKR 15,000 – 35,000.",
            ],
          },
          { type: "h2", text: "Per-day vs multi-day pricing" },
          {
            type: "p",
            text: "Day one always carries the full install + dismantle labour. Additional days are usually discounted 15–30%. A three-day exhibition build doesn't cost 3× a one-day rate — expect roughly 2.0–2.3× because the screen is parked, not torn down nightly.",
          },
          { type: "h2", text: "Why two quotes can be so far apart" },
          {
            type: "ol",
            items: [
              "Pitch — a P3 panel costs roughly 1.6× a P5 of the same area. Quotes that don't list pitch hide this.",
              "Brand & age — premium Absen, Unilumin, ROE panels rent at a premium over generic Chinese stock; some suppliers run mixed inventory.",
              "Inclusions — one quote may price screen-only, the other a turnkey package with processor + technician + truss.",
              "Backup philosophy — serious suppliers carry 5–10% spare cabinets to site; cheaper ones don't.",
              "Insurance — established suppliers carry public liability + equipment cover and price it in. Cheaper rentals shift risk to you.",
            ],
          },
          {
            type: "callout",
            text: "Always ask for the price split: panel rental, processor, technician, truss/rigging, transport, generator. Without it, comparing quotes is guesswork — and the cheapest line item is almost never the cheapest event.",
          },
          { type: "h2", text: "Where the money is well spent" },
          {
            type: "p",
            text: "For most corporate events, paying 15–20% more for a P3 indoor wall with a dedicated technician and a backup processor pays back the first time a presenter swaps laptops mid-keynote without you noticing. For most weddings and brand activations, the screen is the photographic backdrop — pixel pitch and panel uniformity (no dead tiles, no colour-shifted cabinets) are worth every rupee.",
          },
          { type: "h2", text: "How to get an accurate quote in one call" },
          {
            type: "ul",
            items: [
              "Event date, location (venue name helps), and load-in/load-out windows.",
              "Indoor or outdoor — and whether sunlight will hit the screen.",
              "Required screen dimensions (width × height in metres) or audience size + furthest viewing distance.",
              "Content type — slides only, video, live camera feed, or live game/score feed.",
              "Number of event days the screen needs to be live.",
              "Whether you need the processor + operator or you're bringing your own AV team.",
            ],
          },
          {
            type: "p",
            text: "For a full quote tailored to your event, check our LED screen rent service page where we cover every cost variable, recommend the right build for your venue, and connect you with vetted Sri Lankan suppliers in one call.",
          },
        ]}
        faqs={[
          {
            q: "What's the absolute cheapest LED screen rent in Sri Lanka right now?",
            a: "A 2m × 1.5m P4 indoor wall from a budget Colombo supplier starts around LKR 35,000 per day plus delivery — typically used for small product launches, retail openings or breakout rooms.",
          },
          {
            q: "Why is outdoor LED screen rent more than double the indoor price?",
            a: "Outdoor panels need 5,000–7,000 nit brightness, weatherproof cabinets, heavier rigging, wind-load engineering and almost always a generator. The hardware itself costs the supplier 1.5–2× more and the labour is heavier — both flow through into the rental rate.",
          },
          {
            q: "Should I expect a discount for booking off-peak weekdays?",
            a: "Yes — Sunday–Wednesday installs are typically 10–15% cheaper than Thursday–Saturday peak. December and April are the highest-demand months; book 6+ weeks ahead or accept premium pricing.",
          },
          {
            q: "Does the technician fee cover content design?",
            a: "No — the technician operates the screen, switches inputs and troubleshoots. Content design (slides, animations, video) is a separate creative line item, typically LKR 15,000–80,000 depending on complexity.",
          },
          {
            q: "Can I negotiate the quoted rate?",
            a: "Yes — multi-day events, off-peak dates, and bundled packages (screen + sound + lighting from one supplier) all create room to negotiate 10–20%. Single-day weekend rentals at peak times have almost no flex.",
          },
        ]}
        related={[
          { href: "/blog/led-screen-rent-colombo-guide", label: "LED screen rent in Colombo — sizes, prices and venue notes" },
          { href: "/blog/pixel-pitch-explained-led-screen-rent-sri-lanka", label: "Pixel pitch explained — pick the right LED screen" },
          { href: "/blog/outdoor-led-screen-rent-sri-lanka", label: "Outdoor LED screen rent — brightness, weather and setup" },
        ]}
      />
    </PageShell>
  ),
});
