import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { EVENT_MGMT_ANCHOR } from "@/lib/event-management-anchor";
import { SITE } from "@/data/site";

const SLUG = "blog/event-management-cost-sri-lanka";
const TITLE = "How Much Does Event Management Cost in Sri Lanka? A Realistic 2025 Price Guide";
const DESC =
  "Real 2025 event management costs in Sri Lanka — small, medium and large events broken down line by line: venue, AV, catering, decor, staffing and what drives the bill up.";

export const Route = createFileRoute("/blog/event-management-cost-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "event management cost sri lanka, event planning price sri lanka, event management fees, event budget sri lanka, event management",
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
        publishedISO="2025-01-30"
        category={{ label: "Event Pricing", href: "/event-management-sri-lanka" }}
        intro="Event management costs in Sri Lanka swing 4–6× depending on guest count, venue, format and creative ambition. Here's a realistic 2025 line-by-line breakdown by event size — so you know what to budget before requesting a quote."
        blocks={[
          {
            type: "p",
            text: "Before requesting quotes, understand what's included in event management Sri Lanka packages so you can compare fairly. Most planner proposals roll 20+ line items into 3–4 bundled categories — useful for the brief, useless for comparing one quote to another.",
          },
          { type: "h2", text: "The line items that make up every event budget" },
          {
            type: "ul",
            items: [
              "Venue hire & service fee (10–20% on F&B at hotels).",
              "Food & beverage — per head, plus corkage if you bring your own liquor.",
              "Décor & florals — biggest variable; same room can cost LKR 200K or LKR 2M.",
              "Stage, sound, lighting & LED (AV stack).",
              "Photography & videography.",
              "Entertainment — MC, DJ, band, dancers, special acts.",
              "Staffing — coordinators, ushers, valet, security, cleaners.",
              "Permits & insurance.",
              "Logistics — transport, accommodation, generators (outstation events).",
              "Event management fee — typically 8–15% of total spend.",
            ],
          },
          { type: "h2", text: "Realistic 2025 budgets by event scale" },
          {
            type: "table",
            head: ["Event scale", "Guests", "Format", "All-in budget (LKR)"],
            rows: [
              ["Small corporate / private", "60 – 120", "Boardroom AGM, half-day", "600,000 – 1.2M"],
              ["Mid-size corporate", "200 – 350", "Conference + lunch", "1.8M – 3.5M"],
              ["Large corporate gala", "400 – 700", "Awards / dealer dinner", "4M – 9M"],
              ["Standard hotel wedding", "300 – 450", "Single reception", "5M – 10M"],
              ["Premium destination wedding", "200 – 400", "2–3 days, Galle/Kandy", "12M – 30M+"],
              ["Product launch with press", "250 – 500", "Concept + livestream", "3.5M – 8M"],
              ["Outdoor brand activation", "500 – 1500", "Festival format", "5M – 18M"],
            ],
          },
          { type: "h2", text: "What pushes costs up the fastest" },
          {
            type: "ol",
            items: [
              "Outdoor venues — generators, weatherproofing, sometimes flooring and tents.",
              "Custom-built stage sets vs modular truss — 3–6× the cost.",
              "Premium photography/video team with multiple cameras and same-day edit.",
              "Curated F&B (live cooking stations, premium liquor, multi-course plated).",
              "Floral installations above LKR 500K — the décor team scales fast if not capped.",
              "Multi-day or multi-venue logistics requiring travel & accommodation.",
            ],
          },
          { type: "h2", text: "Red flags in proposals" },
          {
            type: "ul",
            items: [
              "No line-item breakdown — 'AV package' as a single number hides what's missing.",
              "Management fee buried in vendor markups instead of disclosed separately.",
              "No backup contingency line (generator, spare equipment, weather plan).",
              "Vague guest count thresholds (\"applies up to 300 — extras billed separately\") without a per-head rate.",
              "No insurance documentation — public liability is non-negotiable for any event 200+ guests.",
            ],
          },
          { type: "h2", text: "How to get three comparable quotes" },
          {
            type: "p",
            text: "Issue the same brief to all three vendors: event date, venue, guest count, format, must-have inclusions and budget ceiling. Require the same line-item structure in their response. Without this, every quote uses a different scope and you're guessing what's missing. A serious planner welcomes the structure — anyone who pushes back is signalling they don't want to be compared.",
          },
        ]}
        faqs={[
          {
            q: "What's the typical event manager's fee in Sri Lanka?",
            a: "8–15% of total event spend for full-service management. Flat fees (LKR 250K–800K) are common for smaller events under 200 guests. Day-of coordination only ranges LKR 75K–175K.",
          },
          {
            q: "Are AV and décor usually negotiable?",
            a: "Yes — both line items carry the most flexibility. Décor especially: a clear brief with a budget ceiling will pull the same vendor down 20–35% from their first quote without compromising visible quality.",
          },
          {
            q: "Should the event manager mark up vendor invoices?",
            a: "Disclosure is the standard. A planner who quotes vendor pass-through plus a stated management fee is operating transparently. Hidden markups (where vendor cost looks higher than market) is the most common Sri Lankan industry complaint.",
          },
          {
            q: "Can I pay event vendors directly to save the management fee?",
            a: "Possible but rarely worth it — the planner's vendor relationships usually deliver pricing 10–20% below what couples or HR teams negotiate on their own, plus they take operational risk. The fee typically pays for itself.",
          },
        ]}
        related={[
          { href: "/blog/how-to-choose-event-management-company-sri-lanka", label: "How to choose an event management company in Sri Lanka" },
          { href: "/blog/event-venues-sri-lanka-colombo", label: "Best event venues in Sri Lanka" },
          { href: "/blog/stage-setup-av-production-sri-lanka", label: "Stage setup & AV production — what a real package covers" },
          { href: "/blog/how-much-does-led-screen-rent-cost-sri-lanka", label: "LED screen rent cost in Sri Lanka — 2025 breakdown" },
        ]}
        primaryAnchor={EVENT_MGMT_ANCHOR}
      />
    </PageShell>
  ),
});
