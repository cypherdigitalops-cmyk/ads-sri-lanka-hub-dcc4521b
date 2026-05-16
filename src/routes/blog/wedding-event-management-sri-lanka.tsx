import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { EVENT_MGMT_ANCHOR } from "@/lib/event-management-anchor";
import { SITE } from "@/data/site";

const SLUG = "blog/wedding-event-management-sri-lanka";
const TITLE = "Wedding Event Management in Sri Lanka: What Full-Service Planning Actually Covers";
const DESC =
  "From venue and stage to décor, catering, sound, LED and photography — what full-service wedding event management in Sri Lanka really delivers and where couples save vs over-spend.";

export const Route = createFileRoute("/blog/wedding-event-management-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "wedding event management sri lanka, wedding planner sri lanka, wedding coordinator sri lanka, full service wedding sri lanka, event management",
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
        kicker="Weddings"
        publishedISO="2025-04-02"
        category={{ label: "Wedding Planning", href: "/wedding-planners-sri-lanka" }}
        intro="A full-service Sri Lankan wedding now spans 6–9 vendor disciplines and 12–18 months of planning. Here's what professional management actually covers — and where couples over-pay when they try to coordinate it themselves."
        blocks={[
          {
            type: "p",
            text: "Professional event management makes the difference between a wedding that runs smoothly and one that doesn't — here's what to look for. The split between a planner (full creative + production lead) and a coordinator (day-of execution only) is the first decision every Sri Lankan couple should make.",
          },
          { type: "h2", text: "Planner vs coordinator — pick the right one" },
          {
            type: "ul",
            items: [
              "Full planner — owns concept, vendor selection, contracts, design, run-of-show, on-day execution. 10–15% of total budget.",
              "Partial planner — joins 3–4 months out, picks up vendor management from a half-built plan. 6–9% of budget.",
              "Day-of coordinator — runs the wedding day only, given a finished plan. LKR 75,000 – 175,000 flat fee.",
              "DIY couple + venue coordinator — viable for under-150-guest weddings; risky beyond that.",
            ],
          },
          { type: "h2", text: "The vendor stack" },
          {
            type: "table",
            head: ["Vendor", "Typical share of budget", "Lead time"],
            rows: [
              ["Venue + F&B", "35 – 45%", "8 – 14 months"],
              ["Photographer + videographer", "8 – 14%", "9 – 12 months"],
              ["Décor + flowers", "10 – 18%", "4 – 6 months"],
              ["Stage, sound, LED, lighting", "8 – 14%", "3 – 5 months"],
              ["Bridal attire + makeup", "8 – 15%", "6 – 9 months"],
              ["Music / DJ / band", "3 – 6%", "3 – 4 months"],
              ["Cake, favours, stationery", "2 – 5%", "2 – 3 months"],
              ["Coordinator / planner fee", "6 – 15%", "From the start"],
            ],
          },
          { type: "h2", text: "Colombo vs outstation weddings" },
          {
            type: "p",
            text: "Colombo weddings benefit from venue density, supplier competition and easy vendor logistics — but ballroom hire is the most expensive in the country. Outstation weddings (Kandy, Galle, Bentota, Anuradhapura) often deliver a stronger guest experience for similar or lower spend, with the caveat that you must add accommodation, transport and rented infrastructure (sometimes including generators) to your budget.",
          },
          { type: "h2", text: "Typical 2025 wedding budgets" },
          {
            type: "ul",
            items: [
              "Intimate (80–150 guests, single ceremony) — LKR 2.8M – 5M.",
              "Standard hotel reception (250–400 guests) — LKR 6M – 12M.",
              "Premium (500–700 guests, three functions over the weekend) — LKR 14M – 28M.",
              "Destination (Galle / Kandy with travel for 200+ guests) — LKR 18M – 40M+.",
            ],
          },
          { type: "h2", text: "Where couples regularly over-spend" },
          {
            type: "ol",
            items: [
              "Two photo/video teams when one full team covers everything cleanly.",
              "Over-engineered floral installations the décor team upsells without a brief.",
              "Premium liquor stocked at 1.5× actual consumption.",
              "Decorative LED that nobody briefed for content (becomes a static logo all night).",
              "Live band + DJ + entertainer when one DJ + one MC carries the dance set.",
            ],
          },
        ]}
        faqs={[
          {
            q: "When should we book our wedding planner in Sri Lanka?",
            a: "12–14 months out for peak season weddings (December–February). 9–10 months for shoulder season. Booking later than 6 months out limits your venue and creative choices and usually costs more in expedited fees.",
          },
          {
            q: "Is hiring a wedding planner worth the 10–15% of budget?",
            a: "For weddings above LKR 4M total budget — almost always yes. The planner negotiates better vendor rates than couples can independently, the savings typically cover 60–80% of the planner's fee, and the time/stress saving is substantial.",
          },
          {
            q: "Can the venue coordinator replace a wedding planner?",
            a: "No — the venue coordinator looks after the venue's interests (timing, F&B, breakdown). A planner looks after yours (vendor coordination, design, run-of-show, contingency). Different roles, both needed for any wedding above 200 guests.",
          },
          {
            q: "What's the biggest mistake Sri Lankan couples make with vendor selection?",
            a: "Choosing on Instagram aesthetic alone without checking event-day reliability. Always ask for two recent references from couples whose weddings were similar in scale to yours — not the headline brand-name weddings the vendor leads with.",
          },
        ]}
        related={[{"href":"/blog/event-management-cost-sri-lanka","label":"Event management cost in Sri Lanka — 2025 price guide"},{"href":"/blog/event-venues-sri-lanka-colombo","label":"Best event venues in Sri Lanka"},{"href":"/blog/event-planning-checklist-sri-lanka","label":"Ultimate event planning checklist"},{"href":"/wedding-planners-sri-lanka","label":"Wedding planners Sri Lanka — service page"},{"href":"/event-management-sri-lanka","label":"Event Management Sri Lanka"},{"href":"/led-screen-rental-sri-lanka","label":"LED Screen Rental"},{"href":"/wedding-decor-sri-lanka","label":"Wedding Decor"},{"href":"/event-photography-sri-lanka","label":"Event Photography"}]}
        primaryAnchor={EVENT_MGMT_ANCHOR}
      />
    </PageShell>
  ),
});
