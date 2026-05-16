import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { EVENT_MGMT_ANCHOR } from "@/lib/event-management-anchor";
import { SITE } from "@/data/site";

const SLUG = "blog/event-venues-sri-lanka-colombo";
const TITLE = "Best Event Venues in Sri Lanka: Corporate, Wedding & Conference Spaces Ranked";
const DESC =
  "Capacity, AV capability, outdoor options and real-world pros/cons for the top event venues in Colombo, Kandy and Galle — BMICH, Shangri-La, Cinnamon Grand, Galle Face, Waters Edge and more.";

export const Route = createFileRoute("/blog/event-venues-sri-lanka-colombo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "event venues sri lanka, colombo wedding venues, bmich, shangri-la colombo, conference venues sri lanka, event management" },
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
        kicker="Venues"
        publishedISO="2025-02-08"
        category={{ label: "Event Venues", href: "/event-management-sri-lanka" }}
        intro="Venue choice locks in 30–45% of your event budget and 80% of the guest experience. Here are the top Sri Lankan event venues ranked by what they actually deliver — not just what their brochure shows."
        blocks={[
          { type: "p", text: "The right venue is only one part of the puzzle — full event management Sri Lanka covers production, logistics and on-day execution that no venue provides on its own. Pick the venue for capacity, location and vibe; treat in-house services as a baseline you'll likely supplement." },
          { type: "h2", text: "Top Colombo venues" },
          {
            type: "table",
            head: ["Venue", "Seated capacity", "Best for"],
            rows: [
              ["BMICH (main hall)", "1,500 – 2,500", "Large conferences, exhibitions"],
              ["Shangri-La Colombo", "350 – 800", "Premium weddings, corporate gala"],
              ["Cinnamon Grand", "300 – 700", "Conferences, weddings, awards nights"],
              ["Cinnamon Lakeside", "250 – 550", "Mid-size corporate"],
              ["The Kingsbury", "200 – 500", "Corporate dinners, weddings"],
              ["Galle Face Hotel", "150 – 400 + outdoor", "Heritage receptions, sundown events"],
              ["Waters Edge", "200 – 600 + outdoor", "Outdoor garden weddings, golf-view events"],
              ["Hilton Colombo Residences", "180 – 400", "Tech-friendly conferences, launches"],
              ["Mövenpick Colombo", "200 – 500", "Modern corporate, weddings"],
              ["Marino Beach Hotel", "200 – 450", "Beach-view receptions"],
            ],
          },
          { type: "h2", text: "Outside Colombo" },
          {
            type: "ul",
            items: [
              "Earl's Regency, Kandy — premium hill-country venue, 250–500 guests, corporate-grade AV.",
              "Cinnamon Citadel, Kandy — riverside, weddings up to 350.",
              "Jetwing Lighthouse, Galle — heritage architecture, beach-adjacent, 200–400.",
              "Cinnamon Bey, Beruwala — destination weddings, conferences up to 500.",
              "Heritance Negombo — outdoor weddings, beach access.",
              "Jetwing Yala / Tissamaharama — small destination corporate offsites.",
            ],
          },
          { type: "h2", text: "What to verify before signing" },
          {
            type: "ol",
            items: [
              "Load-in window — some ballrooms only release the room 4 hours before guest arrival.",
              "Rigging points — required for any LED wall or truss-mounted lighting above 4m.",
              "Sole-supplier rules — many five-stars restrict external caterers, AV or florists.",
              "Outside-liquor policy and corkage rate.",
              "Power capacity for AV — older venues cap at 3-phase 30A, insufficient for large LED + sound.",
              "Parking and valet capacity for your guest count.",
            ],
          },
        ]}
        faqs={[
          { q: "Is BMICH still relevant for premium corporate events?", a: "For capacity above 800, yes — no five-star ballroom in Sri Lanka matches it. For luxury feel below 800, hotel ballrooms beat it." },
          { q: "Can outdoor wedding venues handle 400+ guests?", a: "Yes — Waters Edge, Galle Face Hotel lawn and Cinnamon Bey beach all do, with proper tenting and contingency for rain." },
          { q: "How early do top Colombo venues book out?", a: "Peak wedding dates (December–February Saturdays) book 14–18 months ahead at premium hotels. Corporate AGM season (March–April) books 4–6 months out." },
        ]}
        related={[
          { href: "/blog/wedding-event-management-sri-lanka", label: "Wedding event management — what full-service covers" },
          { href: "/blog/corporate-event-management-sri-lanka-guide", label: "Corporate event management — complete planning guide" },
          { href: "/blog/event-management-cost-sri-lanka", label: "Event management cost in Sri Lanka — 2025 price guide" },
        ]}
        primaryAnchor={EVENT_MGMT_ANCHOR}
      />
    </PageShell>
  ),
});
