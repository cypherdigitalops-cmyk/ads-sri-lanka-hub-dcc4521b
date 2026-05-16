import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/led-screen-rent-vs-projector-events-sri-lanka";
const TITLE = "LED Screen Rent vs Projector Hire for Events in Sri Lanka: Which Wins?";
const DESC =
  "Side-by-side comparison of LED screen rent vs projector hire for Sri Lankan events — brightness, ambient light, cost, setup time, reliability and the venues each option works in.";

export const Route = createFileRoute("/blog/led-screen-rent-vs-projector-events-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "led screen vs projector sri lanka, led screen rent vs projector hire, event projector sri lanka, led wall vs projector, led screen rent",
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
        kicker="Comparison"
        publishedISO="2025-02-26"
        category={{ label: "Event AV", href: "/event-management-sri-lanka" }}
        intro="The decision between LED screen rent and projector hire has shifted dramatically over the last three years in Sri Lanka — LED prices are down, projector limits haven't moved. Here's the practical comparison for 2025 events."
        blocks={[
          {
            type: "p",
            text: "Five years ago, projectors won most events on price. In 2025 the numbers and the practical experience favour LED screen rent for almost every Sri Lankan event scenario above breakout-room size. The exception (genuine cinema-dark conference halls under tight budgets) is shrinking fast.",
          },
          { type: "h2", text: "Side-by-side comparison" },
          {
            type: "table",
            head: ["Factor", "LED screen", "Projector"],
            rows: [
              ["Brightness in ambient light", "5,000–7,500 nits — works in daylight", "3,000–20,000 lumens — needs darkness"],
              ["Image size", "Modular — scales 2m to 20m+", "Limited by throw distance & lens"],
              ["Setup time", "3–6 hours (medium build)", "30–60 minutes"],
              ["Cost (4m × 2.5m equivalent)", "LKR 110,000 – 160,000/day", "LKR 35,000 – 75,000/day"],
              ["Reliability outdoors", "Excellent with IP65 panels", "Poor — humidity and ambient light kill image"],
              ["Failure mode", "Dead tile (replace in minutes)", "Bulb fails / fan blocks → total blackout"],
              ["Maintenance risk", "Low (modular spares)", "Bulb life is finite & expensive"],
              ["Visual impact", "High — luminous, alive", "Moderate — washes out easily"],
            ],
          },
          { type: "h2", text: "When projector hire still wins" },
          {
            type: "ul",
            items: [
              "Strict-budget AGMs in a properly darkened hotel ballroom with 100–250 attendees.",
              "Short single-session events (1–3 hours) where install/dismantle time matters more than impact.",
              "Cinema-style screenings where the throw geometry is already engineered into the room.",
              "Backup secondary display in a breakout room while the main hall runs LED.",
              "Map projection / projection-mapping art installations onto irregular surfaces.",
            ],
          },
          { type: "h2", text: "When LED screen rent is the only sensible choice" },
          {
            type: "ul",
            items: [
              "Anything outdoors — Galle Face, garden weddings, mall atriums, festival stages.",
              "Daytime events in glass-walled venues (Cinnamon Grand foyer, Hilton Residences atrium).",
              "Brand activations where the screen IS the photographic backdrop guests share.",
              "Concerts and large weddings (300+ guests) where projector image size hits a hard physical limit.",
              "Hybrid events with a live broadcast — LED contrast and colour reproduces correctly on camera; projectors don't.",
              "Long event days (8+ hours) where projector bulbs become a reliability risk.",
            ],
          },
          { type: "h2", text: "The cost gap is closing fast" },
          {
            type: "p",
            text: "A 4m × 2.5m projection setup (12kW projector + 2.5m drop-down screen + processor) in Sri Lanka now lands at LKR 35,000–75,000 per day. An LED equivalent at P3 indoor is LKR 110,000–160,000. The 2–3× premium has shrunk from the 5–6× gap of 2020, and on multi-day bookings LED suppliers will often match the per-day delta because the install labour is amortised across the run.",
          },
          {
            type: "callout",
            text: "Hidden projector costs that close the gap further: a backup bulb on standby (LKR 8,000–15,000), a dedicated technician (LKR 12,000), and the venue blackout drape installation if windows can't be properly covered.",
          },
          { type: "h2", text: "Verdict" },
          {
            type: "p",
            text: "For most Sri Lankan events — especially anything with ambient light or a large audience — LED screen rent outperforms projector hire on every practical metric. Budget-constrained AGMs in dark ballrooms remain the projector's last comfortable home, and even there the visual gap is impossible to miss the moment guests walk in.",
          },
          { type: "h2", text: "Quick decision matrix" },
          {
            type: "ol",
            items: [
              "Outdoor or daylight visible — LED, always.",
              "Audience above 300 or screen needs to be 5m+ wide — LED.",
              "Brand launch, activation or PR-worthy backdrop — LED.",
              "Hotel ballroom AGM, 100–250 guests, tight budget, full blackout possible — projector still works.",
              "Anything cinematic where you control the lighting end-to-end — projector is fine.",
            ],
          },
        ]}
        faqs={[
          {
            q: "Is a projector still cheaper than an LED screen in Sri Lanka?",
            a: "Per day, yes — typically 40–60% cheaper for an equivalent image area. But once you add backup bulbs, blackout drapes, and the limitation that projectors fail in any ambient light, the apparent saving disappears in many real event scenarios.",
          },
          {
            q: "Can a projector be used outdoors in Sri Lanka?",
            a: "Only after sunset and with no street/stage lighting hitting the screen — which means almost never at a real event. Daytime outdoor projection is a non-starter; this is the single biggest reason LED has replaced projectors at outdoor weddings and brand events.",
          },
          {
            q: "What size projector lumen rating do I need?",
            a: "Rule of thumb: dark room 3,000–5,000 lumens; semi-lit 6,000–10,000; large auditorium 12,000–20,000. For outdoor or any bright room, switch to LED — there's no projector bright enough to overcome direct ambient light.",
          },
          {
            q: "Can the same supplier provide both LED and projector?",
            a: "Most established Sri Lankan AV suppliers stock both. Asking for a comparison quote — same content, two display options — is a fair request and helps you see the real cost difference for your specific event.",
          },
        ]}
        related={[
          { href: "/blog/how-much-does-led-screen-rent-cost-sri-lanka", label: "How much does LED screen rent cost in Sri Lanka?" },
          { href: "/blog/corporate-event-av-checklist-sri-lanka", label: "Corporate event AV checklist for Sri Lanka" },
          { href: "/blog/outdoor-led-screen-rent-sri-lanka", label: "Outdoor LED screen rent — brightness, weather and setup" },
        ]}
      />
    </PageShell>
  ),
});
