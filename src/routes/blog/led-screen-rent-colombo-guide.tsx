import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/led-screen-rent-colombo-guide";
const TITLE = "LED Screen Rent in Colombo: Sizes, Prices & What to Ask Before You Book";
const DESC =
  "Colombo-specific buyer's guide to LED screen rent — pixel pitch, indoor vs outdoor, pricing tiers and what major venues like BMICH, Shangri-La and Galle Face actually require.";

export const Route = createFileRoute("/blog/led-screen-rent-colombo-guide")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "led screen rent colombo, led screen rental colombo, led screen hire colombo, led video wall colombo, led screen rent sri lanka",
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
        kicker="Colombo Buyer's Guide"
        publishedISO="2025-02-04"
        category={{ label: "Event AV — Colombo", href: "/event-management-sri-lanka" }}
        intro="Whether you're running a corporate conference or a product launch, getting the right LED screen rent package starts with understanding what's available in Colombo — sizes, pixel pitch, venue rules and realistic 2025 prices."
        blocks={[
          {
            type: "p",
            text: "Whether you're running a corporate conference or a product launch, getting the right LED screen rent package starts with understanding what's actually stocked in Colombo and what each venue allows you to install. This guide covers the four decisions that drive 90% of your invoice: screen size, pixel pitch, indoor vs outdoor build, and venue logistics.",
          },
          { type: "h2", text: "What sizes are commonly available in Colombo?" },
          {
            type: "p",
            text: "Rental stock in Colombo is dominated by modular panels — typically 500mm × 500mm or 500mm × 1000mm cabinets — that lock together into almost any wall size. The common builds are 3m × 2m for breakout rooms, 4m × 2.5m for conference main stages, 6m × 3.5m for product launches and ballroom weddings, and 8m × 4.5m or larger for concerts and big activations at Sugathadasa or Galle Face.",
          },
          {
            type: "table",
            head: ["Build", "Use case", "Typical Colombo price (per day)"],
            rows: [
              ["3m × 2m P4 indoor", "Breakout, AGM, small product launch", "LKR 65,000 – 95,000"],
              ["4m × 2.5m P3 indoor", "Corporate conference main stage", "LKR 110,000 – 160,000"],
              ["6m × 3.5m P3 indoor", "Hotel ballroom wedding / launch", "LKR 180,000 – 260,000"],
              ["6m × 4m P5 outdoor", "Brand activation, mall atrium", "LKR 220,000 – 320,000"],
              ["8m × 4.5m+ P6/P8 outdoor", "Concert, festival, Galle Face", "LKR 380,000 – 650,000+"],
            ],
          },
          { type: "h2", text: "Indoor vs outdoor — and why it matters more in Colombo" },
          {
            type: "p",
            text: "Colombo daylight is brutal. Anything happening at Galle Face, Independence Square, Diyatha Uyana, Viharamahadevi Park or a hotel terrace before 6pm needs a 5,000–7,000 nit outdoor-rated panel. Indoor 1,000–1,500 nit screens look fine in a hotel ballroom with house lights down, but they wash out completely in daylight or under stage par lighting.",
          },
          {
            type: "callout",
            text: "If your venue switches between an indoor reception and an outdoor cocktail hour, get an outdoor-rated screen for both — it works indoors at reduced brightness, but indoor panels can't be pushed to handle direct sun.",
          },
          { type: "h2", text: "What pixel pitch should you book?" },
          {
            type: "p",
            text: "Pixel pitch is the distance between LED dots — smaller number, sharper picture, higher price. Rule of thumb: minimum viewing distance in metres roughly equals the pitch number. P3 looks crisp from 3 metres away, P5 from 5 metres, P8 from 8 metres. For Colombo ballrooms where guests are seated 4–10 metres from the stage, P3 or P4 is the sweet spot. For outdoor concerts with the front row 8+ metres back, P6 or P8 is fine and saves significant cost.",
          },
          { type: "h2", text: "What Colombo venues actually require" },
          {
            type: "ul",
            items: [
              "BMICH — load-in via the side ramp; rigging needs venue sign-off 5 working days before. Ground-stacked screens are easier to approve than truss-rigged walls.",
              "Shangri-La & Cinnamon Grand — ballroom load-in through the service lift only; cabinets must fit (check trolley dimensions). Most rental teams pre-stage in the loading bay.",
              "Galle Face Hotel lawn — outdoor-rated screen, weatherproof power distribution, generator (no in-house outdoor 3-phase), wind rating documentation for the truss.",
              "Waters Edge — outdoor lawn rigs need wind-load engineering certificates; the venue regularly turns away suppliers who turn up without them.",
              "Hilton Colombo Residences — ballroom ceiling height limits the screen + truss to roughly 4.5m total. Plan the wall height around that before quoting.",
            ],
          },
          { type: "h2", text: "What to ask before you sign anything" },
          {
            type: "ol",
            items: [
              "What pixel pitch and panel brand are you supplying? (Brand affects spares availability if a tile fails mid-event.)",
              "Is a dedicated technician included for the full event duration, or only for setup?",
              "Does the price include a processor with seamless input switching, or just the screen?",
              "Who supplies the backup power — you or the venue?",
              "What's the contingency if a cabinet fails during the show? On-site spares or a 60-minute drive back to the warehouse?",
              "Are content files in 16:9, or do you need a custom resolution for the wall ratio?",
            ],
          },
          { type: "h2", text: "How far in advance to book in Colombo" },
          {
            type: "p",
            text: "Peak wedding season (December–February) and conference season (March–April, September–November) see the best rental stock booked 4–8 weeks out. For premium outdoor builds tied to concerts or major brand launches, lock in 6 weeks ahead minimum — there are only a handful of suppliers in Sri Lanka who stock outdoor-rated walls above 30 square metres.",
          },
          {
            type: "callout",
            text: "Pricing in this guide reflects January 2025 Colombo market rates. Multi-day rates typically reduce 15–25% per additional day, and weekday installs are 10–15% cheaper than Friday–Sunday.",
          },
        ]}
        faqs={[
          {
            q: "What is the minimum LED screen size worth renting for a Colombo event?",
            a: "For most corporate or wedding setups, 3m × 2m is the practical minimum — anything smaller is better served by a 75–98 inch LED commercial TV at a fraction of the cost. Below that size, rental logistics outweigh the savings.",
          },
          {
            q: "Can I rent an LED screen in Colombo for a single half-day event?",
            a: "Yes, but most suppliers price as a full day. A half-day install does save you the second-day rental fee, however install/dismantle labour is the same — so the saving is typically 20–25%, not 50%.",
          },
          {
            q: "Do Colombo hotels charge extra to install an external LED screen?",
            a: "Many five-star hotels charge a service load-in fee (LKR 15,000–40,000) plus an AV co-ordination fee if their in-house AV team is bypassed. Always factor this into your total budget.",
          },
          {
            q: "What's the cheapest reliable LED option for a small Colombo conference?",
            a: "A P4 indoor wall around 3m × 2m from a mid-tier supplier, ground-stacked (no truss), single-day install. Expect LKR 70,000–90,000 all-in with a basic technician.",
          },
        ]}
        related={[{"href":"/blog/how-much-does-led-screen-rent-cost-sri-lanka","label":"How much does LED screen rent cost in Sri Lanka? 2025 breakdown"},{"href":"/blog/pixel-pitch-explained-led-screen-rent-sri-lanka","label":"Pixel pitch explained — choosing the right LED screen rent"},{"href":"/blog/led-screen-rent-vs-projector-events-sri-lanka","label":"LED screen rent vs projector hire — which wins?"},{"href":"/led-screen-rental-sri-lanka","label":"LED Screen Rental"},{"href":"/event-management-colombo","label":"Event Management Colombo"},{"href":"/stage-setup-sri-lanka","label":"Stage Setup"}]}
      />
    </PageShell>
  ),
});
