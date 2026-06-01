import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/events-that-need-led-screen-rental-sri-lanka";
const TITLE = "7 Events in Sri Lanka That Need an LED Screen (And What Size to Rent)";
const DESC =
  "Planning an event in Sri Lanka? Here are 7 use cases — weddings, corporate AGMs, concerts, mall activations, prize-givings, product launches and religious events — with the right LED screen size, pixel pitch and price range for each.";

const PRIMARY_ANCHOR = {
  href: "/led-screen-rental-sri-lanka",
  regex: /(LED\s+screen\s+rent\s+in\s+Sri\s+Lanka)/i,
  fallbackText: "LED screen rent in Sri Lanka",
  ctaLabel: "Get a quote for LED screen rent in Sri Lanka",
  ctaHeadline: "Tell us your event — we'll recommend the right LED screen and quote in 24 hours",
  ctaService: "LED Screen Rental Sri Lanka",
};

export const Route = createFileRoute("/blog/events-that-need-led-screen-rental-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "led screen for events sri lanka, led screen hire sri lanka, led screen rent in sri lanka, led video wall hire, event led screen sri lanka",
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
        kicker="Event Planning"
        publishedISO="2025-03-04"
        category={{ label: "Event AV — Use Cases", href: "/event-management-sri-lanka" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Not every event needs an LED screen — but when it does, getting the size, pixel pitch and indoor/outdoor type wrong is the most common (and most expensive) mistake organisers make in Sri Lanka. Here are 7 events where a screen is non-negotiable, and exactly what to rent for each."
        blocks={[
          {
            type: "p",
            text: "We get the same call every week — 'I have an event next month, what size LED screen do I need?' The honest answer is: it depends on your venue, your audience, and what you're actually putting on the screen. Below is a practical guide to the 7 most common event types in Sri Lanka, with the build we'd recommend for each, the rough price band, and the gotchas that catch first-time organisers.",
          },

          { type: "h2", text: "1. Corporate conferences & AGMs" },
          {
            type: "p",
            text: "Indoor ballrooms at Cinnamon Grand, Galle Face Hotel, Shangri-La, BMICH and Waters Edge — 150 to 800 guests, laptop slides, presenter video, maybe a live camera feed of the stage.",
          },
          {
            type: "ul",
            items: [
              "Recommended build: 3m × 2m to 4m × 2.5m indoor P3 wall, side-stage or behind the lectern.",
              "Pixel pitch: P3 (sharp text and logos from 4–5m).",
              "Inputs: HDMI from laptop + camera input + confidence monitor for the presenter.",
              "Price band: LKR 90,000 – 180,000 per day including processor and technician.",
              "Watch for: ballrooms with chandeliers — measure ceiling clearance before booking a taller wall.",
            ],
          },

          { type: "h2", text: "2. Product launches" },
          {
            type: "p",
            text: "Branding moment, video reveal, hero product shot on a big backdrop. This is where the screen IS the set — it has to look premium.",
          },
          {
            type: "ul",
            items: [
              "Recommended build: 6m × 3.5m indoor P3 backdrop wall, often with side wings.",
              "Pixel pitch: P3 (P2.6 if the audience sits within 3m).",
              "Price band: LKR 220,000 – 400,000 per day including rigging, processor and operator.",
              "Watch for: panel uniformity — request a single batch of cabinets so no tile looks colour-shifted on camera.",
            ],
          },

          { type: "h2", text: "3. Weddings & receptions" },
          {
            type: "p",
            text: "Stage backdrop screen for the couple's photo montage, live ceremony feed for guests at the back, and a static branded slide between programmes.",
          },
          {
            type: "ul",
            items: [
              "Recommended build: 10ft × 6.5ft P2.8 indoor (the most-booked wedding size in Sri Lanka).",
              "For grand weddings: 20ft × 10ft P2.8 with two side pillar screens for guest views.",
              "Price band: LKR 65,000 – 140,000 per day for the standard build; LKR 180,000+ for the larger ballroom setup.",
              "Watch for: have your wedding video files at 1920×1080 or higher and 16:9 aspect — vertical phone clips will letterbox awkwardly.",
            ],
          },

          { type: "h2", text: "4. School & university prize-givings" },
          {
            type: "p",
            text: "Long ceremonies, hundreds of students filing on stage, parents at the back of a college hall who can't see faces. A mid-size screen with a live camera feed solves both problems.",
          },
          {
            type: "ul",
            items: [
              "Recommended build: 3m × 2m indoor P3 with a single roving camera input.",
              "Optional: livestream feed to YouTube for parents who couldn't attend.",
              "Price band: LKR 85,000 – 140,000 per day. Add LKR 25,000–60,000 for livestream.",
              "Watch for: school halls often have weak power — confirm the supplier brings a UPS or generator.",
            ],
          },

          { type: "h2", text: "5. Outdoor concerts, shows & rallies" },
          {
            type: "p",
            text: "Daylight load, monsoon risk, structural rigging — outdoor is a different sport. Don't let an indoor-only supplier talk you into a P3 wall under the sun.",
          },
          {
            type: "ul",
            items: [
              "Recommended build: 6m × 4m to 12m × 7m outdoor P6 (or P5 if audience is closer than 8m).",
              "Brightness: 5,000–7,000 nits minimum — anything less washes out in Sri Lankan afternoon sun.",
              "Structural rigging: ground-support truss or scaffolding, with wind-load calculations.",
              "Price band: LKR 350,000 – 1,200,000+ per day depending on size, rigging and generator.",
              "Watch for: monsoon weeks (May–June, October–November) — confirm IP65 cabinets and a rain plan.",
            ],
          },

          { type: "h2", text: "6. Brand activations at malls" },
          {
            type: "p",
            text: "Colombo City Centre, One Galle Face, Liberty Plaza — short footprint, indoor lighting, product demo on loop with a social-media wall.",
          },
          {
            type: "ul",
            items: [
              "Recommended build: 2m × 1.5m to 3m × 2m indoor P3 on a freestanding totem or wall-mount frame.",
              "Plus: a small touchscreen or QR-code overlay for shopper interaction.",
              "Price band: LKR 45,000 – 95,000 per day. Multi-week activations get 20–30% off.",
              "Watch for: most malls require permit + insurance — your AV supplier should handle this.",
            ],
          },

          { type: "h2", text: "7. Religious & community events" },
          {
            type: "p",
            text: "Perahera nights, temple festivals, large-scale almsgiving, political rallies — outdoor crowds in the thousands where most attendees stand 30+ metres from the stage.",
          },
          {
            type: "ul",
            items: [
              "Recommended build: 8m × 5m to 12m × 7m outdoor P6/P8 wall with delay screens at the back.",
              "Brightness: 6,000+ nits, even for night events (street lighting and floodlights compete with the screen).",
              "Audio sync: confirm the screen feed is synced to the FOH PA system or the audience sees lips before they hear words.",
              "Price band: LKR 400,000 – 900,000 per day plus generator and rigging.",
              "Watch for: site power — temple grounds rarely have 3-phase supply, budget for a 60–125kVA silent generator.",
            ],
          },

          { type: "h2", text: "Quick reference — size by audience" },
          {
            type: "table",
            head: ["Audience size", "Recommended screen", "Pitch", "Indoor / outdoor"],
            rows: [
              ["Up to 150", "2m × 1.5m", "P3", "Indoor"],
              ["150 – 400", "3m × 2m", "P3", "Indoor"],
              ["400 – 800", "4m × 2.5m", "P3", "Indoor"],
              ["800 – 1,500", "6m × 3.5m", "P3", "Indoor"],
              ["1,500 – 5,000", "8m × 5m", "P5/P6", "Outdoor"],
              ["5,000+", "12m × 7m + delay screens", "P6/P8", "Outdoor"],
            ],
          },

          {
            type: "callout",
            text: "Whichever event you're planning, the right screen is the one your furthest guest can read comfortably — not the biggest one your budget allows. A correctly-sized P3 indoor wall almost always beats an oversized P6 wall in the same hall.",
          },

          {
            type: "p",
            text: "Get a quote for your specific event on our LED screen rent in Sri Lanka page — we respond within 24 hours with a recommended build, all-in pricing, and availability for your date.",
          },
        ]}
        faqs={[
          {
            q: "How far in advance should I book an LED screen for an event in Sri Lanka?",
            a: "Weddings and corporate events: 4–8 weeks ahead. December and April are peak — book 8–12 weeks out. Last-minute bookings (under 7 days) are possible but you'll pay a 15–25% premium and inventory is limited.",
          },
          {
            q: "Can the same LED screen be used indoor and outdoor?",
            a: "Technically yes for short setups, but it's a bad idea. Indoor panels (800–1,500 nits) wash out completely in Sri Lankan daylight, and their cabinets are not weather-sealed. Always rent purpose-built outdoor panels (5,000+ nits, IP65) for any daytime outdoor event.",
          },
          {
            q: "Do I need to provide my own content for the screen?",
            a: "Yes — the supplier provides the screen, processor and technician. Content (slides, video, branded loops, live camera feed) is your responsibility, though most AV companies offer content design as an add-on for LKR 15,000–80,000.",
          },
          {
            q: "What screen size do I need for a 300-person wedding?",
            a: "A 10ft × 6.5ft (3m × 2m) P2.8 indoor wall is the standard build for 300-guest weddings in Sri Lanka. It's large enough for clear video viewing from the back of most ballrooms without overwhelming the stage decor.",
          },
          {
            q: "Is rigging included in the LED screen rental price?",
            a: "For indoor screens up to 4m × 2.5m, yes — ground-stacked installs are usually bundled. Larger walls and all outdoor builds need ground-support truss or hanging rigs, which add LKR 25,000–90,000 to the quote.",
          },
        ]}
        related={[
          { href: "/blog/led-screen-rental-cost-sri-lanka", label: "LED screen rental cost in Sri Lanka — 2025 price guide" },
          { href: "/blog/indoor-outdoor-led-screen-rental-sri-lanka", label: "Indoor vs outdoor LED screen rental — what's the difference?" },
          { href: "/blog/led-screen-rent-for-weddings-sri-lanka", label: "LED screen rent for weddings in Sri Lanka" },
          { href: "/blog/pixel-pitch-explained-led-screen-rent-sri-lanka", label: "Pixel pitch explained — pick the right LED screen" },
          { href: "/led-screen-rental-sri-lanka", label: "LED Screen Rental Sri Lanka" },
          { href: "/event-management-sri-lanka", label: "Event Management Sri Lanka" },
        ]}
      />
    </PageShell>
  ),
});