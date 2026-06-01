import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/indoor-outdoor-led-screen-rental-sri-lanka";
const TITLE = "Indoor vs Outdoor LED Screen Rental in Sri Lanka — What's the Difference?";
const DESC =
  "Indoor and outdoor LED screens look similar but are completely different products. Pixel pitch, brightness (nits), weight, IP weather rating and use cases — here's how to pick the right one for your Sri Lankan event.";

const PRIMARY_ANCHOR = {
  href: "/led-screen-rental-sri-lanka",
  regex: /(LED\s+screen\s+rent\s+in\s+Sri\s+Lanka)/i,
  fallbackText: "LED screen rent in Sri Lanka",
  ctaLabel: "Check availability for LED screen rent in Sri Lanka",
  ctaHeadline: "Indoor or outdoor — get a same-day quote for LED screen rent in Sri Lanka",
  ctaService: "LED Screen Rental Sri Lanka",
};

export const Route = createFileRoute("/blog/indoor-outdoor-led-screen-rental-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "outdoor led screen rental sri lanka, indoor led screen sri lanka, led screen rent in sri lanka, led video wall hire, ip65 led screen",
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
        kicker="Technical Guide"
        publishedISO="2025-03-06"
        category={{ label: "Event AV — Technical", href: "/event-management-sri-lanka" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="From the audience seat, every LED screen looks the same — bright, colourful, sharp. From a rental perspective, indoor and outdoor screens are completely different products built for completely different jobs. Picking the wrong one is the most common reason events go badly in Sri Lanka."
        blocks={[
          {
            type: "p",
            text: "If you've ever seen an event where the LED screen looked washed-out in afternoon sun, or a wedding screen where the video looked pixelated from the front row, you've seen what happens when an indoor panel is used outdoors (or vice versa). Here's the technical breakdown — in plain English — so you can brief your supplier with confidence.",
          },

          { type: "h2", text: "Indoor vs outdoor at a glance" },
          {
            type: "table",
            head: ["Spec", "Indoor LED screen", "Outdoor LED screen"],
            rows: [
              ["Typical pixel pitch", "P2.6 / P3 / P4", "P5 / P6 / P8 / P10"],
              ["Brightness", "800 – 1,500 nits", "5,000 – 7,500 nits"],
              ["Weather rating", "IP30 (dust only)", "IP65 (rain & dust)"],
              ["Cabinet weight", "~7–10 kg/panel", "~14–22 kg/panel"],
              ["Rigging", "Ground-stack or light truss", "Heavy truss + wind-load cert"],
              ["Power draw", "300–500 W/sqm", "700–1,200 W/sqm"],
              ["Typical rental (LKR/day)", "40k – 350k", "200k – 1.2M+"],
            ],
          },

          { type: "h2", text: "Pixel pitch — explained without the jargon" },
          {
            type: "p",
            text: "Pixel pitch is the distance (in millimetres) between the centres of two neighbouring LEDs. P3 = 3mm apart. The smaller the pitch, the sharper the image up close — and the more it costs. There's a simple rule of thumb for safe minimum viewing distance: distance in metres ≈ pixel pitch in millimetres. So a P3 screen looks sharp from 3m+, a P6 looks sharp from 6m+.",
          },
          {
            type: "ul",
            items: [
              "P2.6 / P3 — indoor, close viewing: weddings (couples and guests at the same table), boardrooms, conference screens behind a lectern.",
              "P4 — indoor, mid-distance: ballrooms with audience 4–8m away, exhibition booths.",
              "P5 / P6 — outdoor or large indoor venues: roadshows, school events, mid-size concerts.",
              "P8 / P10 — outdoor only, large viewing distance: stadium events, large rallies, religious festivals.",
            ],
          },

          { type: "h2", text: "Brightness (nits) — the deal-breaker for outdoor" },
          {
            type: "p",
            text: "Brightness is measured in nits (cd/m²). Indoor screens at 800–1,500 nits look great in a darkened ballroom or conference hall. Take that same screen outside at 2pm in Colombo and you'll see a faint, washed-out image — Sri Lankan daylight regularly exceeds 100,000 lux. Outdoor screens at 5,000–7,000 nits punch through that easily.",
          },
          {
            type: "p",
            text: "Indoor screen + outdoor venue = wasted money. Always confirm the nit rating on outdoor quotes — 5,000 nits is the minimum for daytime, 6,000+ is safer for direct sun.",
          },

          { type: "h2", text: "Weight, rigging and structural load" },
          {
            type: "p",
            text: "Outdoor cabinets are roughly twice the weight of indoor cabinets because they carry weather sealing, heavier heatsinks and reinforced frames. A 6m × 4m outdoor wall can weigh 800–1,200 kg — that needs proper ground-support truss, wind-load engineering and (often) a permit. Most reputable Sri Lankan AV suppliers won't fly an outdoor wall over 4m tall without a signed wind-load certificate, and you shouldn't ask them to.",
          },

          { type: "h2", text: "Weather protection — IP ratings matter for monsoon season" },
          {
            type: "p",
            text: "IP ratings tell you how protected the panel is against dust (first digit) and water (second digit). For Sri Lanka's monsoon months (May–June and October–November), insist on IP65 cabinets on outdoor jobs — dust-tight and protected against jetted water. IP54 or lower will fail in a sudden downpour. Indoor panels (typically IP30) should never be used outside, even on a clear day — humidity alone can damage them.",
          },

          { type: "h2", text: "Common Sri Lankan use cases" },

          { type: "h3", text: "Indoor — where it belongs" },
          {
            type: "ul",
            items: [
              "Hotel ballrooms (Cinnamon Grand, Galle Face Hotel, Shangri-La, Hilton, Marino Beach).",
              "BMICH, Waters Edge, Nelum Pokuna — conferences, AGMs, awards nights.",
              "Wedding receptions — almost universally indoor in Sri Lanka.",
              "Corporate halls, university auditoriums, school prize-givings.",
              "Indoor mall activations (Colombo City Centre, One Galle Face, Liberty Plaza).",
            ],
          },

          { type: "h3", text: "Outdoor — where it earns its premium" },
          {
            type: "ul",
            items: [
              "Concerts and music shows — Independence Square, Galle Face, Diyatha Uyana.",
              "Roadshows and brand activations on open ground.",
              "Temple festivals, perahera nights and religious gatherings.",
              "Political rallies and election-night events.",
              "Outdoor sports screenings (cricket matches, World Cup viewings).",
              "School sports meets and outdoor prize-givings.",
            ],
          },

          { type: "h2", text: "Which type fits which budget?" },
          {
            type: "table",
            head: ["Budget (LKR/day)", "Best fit", "Typical build"],
            rows: [
              ["Under 75,000", "Indoor only", "2m × 1.5m P3/P4"],
              ["75,000 – 200,000", "Indoor preferred", "3m × 2m to 4m × 2.5m P3"],
              ["200,000 – 400,000", "Either", "Large indoor P3 OR mid outdoor P5/P6"],
              ["400,000 – 800,000", "Outdoor practical", "8m × 5m outdoor P6 with rigging"],
              ["800,000+", "Outdoor flagship", "12m × 7m+ P6/P8 with delay screens"],
            ],
          },

          {
            type: "callout",
            text: "The cheapest mistake to avoid: don't let an indoor-only supplier convince you that 'P3 will be fine outdoors, we'll turn the brightness up.' Indoor panels physically cannot hit 5,000 nits, and they're not sealed against rain. Get a supplier who carries both inventories.",
          },

          {
            type: "p",
            text: "Ready to book? Check availability and pricing on our LED screen rent in Sri Lanka page — we list every indoor and outdoor build we carry, with current 2025 rates and 24-hour quote turnaround.",
          },
        ]}
        faqs={[
          {
            q: "Can I use an indoor LED screen outside on a cloudy day?",
            a: "Not recommended. Even on a cloudy day in Sri Lanka, ambient light easily exceeds what an 800–1,500 nit indoor panel can compete with — the image will look dim and washed out. And indoor cabinets aren't sealed against sudden rain, which can happen any time during monsoon months.",
          },
          {
            q: "What's the difference between P3 and P6 in real terms?",
            a: "P3 has LEDs 3mm apart — sharp from 3m. P6 has LEDs 6mm apart — sharp from 6m. From across a 1,000-person concert field, both look identical. From the front row of a wedding, P3 looks crisp and P6 looks pixelated. Pick pitch based on minimum viewing distance, not budget.",
          },
          {
            q: "Do outdoor LED screens really need a generator?",
            a: "Almost always, yes. A 6m × 4m outdoor wall draws 17–28 kW just for the panels, plus processor, lighting and audio on the same event. Most outdoor venues in Sri Lanka don't have that kind of clean 3-phase supply — a 60–125 kVA silent diesel generator is standard.",
          },
          {
            q: "Is an IP65 LED screen fully waterproof?",
            a: "IP65 means dust-tight and protected against water jets from any direction — it will survive heavy rain. It is not, however, submersible. In Sri Lankan monsoon downpours an IP65 wall is safe; it should still be powered down and covered if standing water reaches the cabinets.",
          },
          {
            q: "Which is more expensive to rent — indoor or outdoor?",
            a: "Outdoor is consistently 1.5–2.5× more expensive per square metre per day. The panel hardware costs more, the rigging is heavier, and a generator is almost always required. A 6m × 4m indoor P3 might run LKR 220,000/day, while the same-size outdoor P6 build runs LKR 380,000–500,000 all-in.",
          },
        ]}
        related={[
          { href: "/blog/led-screen-rental-cost-sri-lanka", label: "LED screen rental cost in Sri Lanka — 2025 price guide" },
          { href: "/blog/events-that-need-led-screen-rental-sri-lanka", label: "7 events in Sri Lanka that need an LED screen" },
          { href: "/blog/outdoor-led-screen-rent-sri-lanka", label: "Outdoor LED screen rent — brightness, weather and setup" },
          { href: "/blog/pixel-pitch-explained-led-screen-rent-sri-lanka", label: "Pixel pitch explained — pick the right LED screen" },
          { href: "/led-screen-rental-sri-lanka", label: "LED Screen Rental Sri Lanka" },
          { href: "/event-management-sri-lanka", label: "Event Management Sri Lanka" },
        ]}
      />
    </PageShell>
  ),
});