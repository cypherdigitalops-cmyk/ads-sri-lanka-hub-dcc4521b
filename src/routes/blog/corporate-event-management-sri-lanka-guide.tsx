import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { EVENT_MGMT_ANCHOR } from "@/lib/event-management-anchor";
import { SITE } from "@/data/site";

const SLUG = "blog/corporate-event-management-sri-lanka-guide";
const TITLE = "Corporate Event Management in Sri Lanka: The Complete Planning Guide";
const DESC =
  "End-to-end corporate event management in Sri Lanka — AGMs, dealer conferences, awards nights, venue selection, run-of-show, AV requirements and realistic budgets for 2025.";

export const Route = createFileRoute("/blog/corporate-event-management-sri-lanka-guide")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "corporate event management sri lanka, agm sri lanka, dealer conference sri lanka, awards night sri lanka, event management sri lanka",
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
        kicker="Corporate Events"
        publishedISO="2025-03-25"
        category={{ label: "Corporate Event Management", href: "/corporate-event-management-sri-lanka" }}
        intro="From AGMs and dealer conferences to awards nights and product launches, corporate events in Sri Lanka run on six moving parts: venue, run-of-show, AV, catering, brand experience and contingency planning."
        blocks={[
          {
            type: "p",
            text: "Your success starts with choosing the right event management Sri Lanka partner who understands corporate protocol and can handle the full production stack — venue, AV, catering, decor, run-of-show and post-event reporting. The brief sounds simple; execution is where most in-house teams hit a wall.",
          },
          { type: "h2", text: "The five corporate event formats" },
          {
            type: "ul",
            items: [
              "AGM — chairman address, financial review, Q&A, networking lunch. Conservative tone, board-grade AV reliability.",
              "Dealer / channel partner conference — recognition, product updates, evening gala. Multi-day, regional attendance.",
              "Awards night — ceremony format with stage lighting, music, photographer, hosted dinner. Emotional brand moment.",
              "Product / brand launch — press-focused with media kits, demo zones, social amplification.",
              "Town hall / leadership offsite — workshop format with breakouts, hybrid streaming for remote teams.",
            ],
          },
          { type: "h2", text: "Venue selection in Sri Lanka" },
          {
            type: "p",
            text: "BMICH for capacity (1,500+ seated), Cinnamon Grand and Shangri-La for premium ballrooms (300–800 guests), Galle Face Hotel for heritage and outdoor sundown receptions, Waters Edge for blended indoor/outdoor with golf views, Hilton Colombo Residences for tech-friendly conferences. Outside Colombo, Earl's Regency in Kandy and Cinnamon Bey in Beruwala carry the same corporate-grade AV infrastructure.",
          },
          { type: "h2", text: "AV requirements that always under-quote" },
          {
            type: "ol",
            items: [
              "Confidence monitor for the keynote speaker — separate from the audience-facing screen.",
              "Dedicated wireless mic per panelist (never share lavaliers across speakers).",
              "Backup processor for any LED wall or projector switching.",
              "Recording feed for the marketing team (often forgotten until the day-of).",
              "Backup generator on standby for any event 250+ guests.",
            ],
          },
          { type: "h2", text: "Run-of-show — the document that prevents chaos" },
          {
            type: "p",
            text: "A run-of-show is a minute-by-minute timeline shared between the planner, AV team, lighting designer, MC and venue. Without it, you'll spend the day mediating between vendors who all think they're 'doing their part'. Build it 7–10 days before the event and rehearse it with the venue 24 hours out.",
          },
          { type: "h2", text: "Sri Lankan corporate culture — small details that matter" },
          {
            type: "ul",
            items: [
              "Lighting of the traditional oil lamp at the start of formal events — protocol matters; assign a coordinator.",
              "Seniority-based seating at head tables — coordinate with HR before printing place cards.",
              "Vegetarian, halal and alcohol-free options as default — not afterthoughts.",
              "Bilingual MCs (English + Sinhala or Tamil) for mixed-audience corporate events.",
              "Photo opportunities staged before guests start leaving — leadership rarely lingers past coffee.",
            ],
          },
          { type: "h2", text: "Typical budgets (2025)" },
          {
            type: "table",
            head: ["Event", "Guest count", "All-in budget"],
            rows: [
              ["Boardroom AGM", "80 – 150", "LKR 600,000 – 1,200,000"],
              ["Mid-tier conference + dinner", "200 – 400", "LKR 1.8M – 3.5M"],
              ["Dealer conference (2-day)", "300 – 500", "LKR 4M – 7.5M"],
              ["Awards night + gala", "400 – 800", "LKR 5M – 12M"],
              ["Multi-day product launch with press", "300 – 600", "LKR 6M – 15M"],
            ],
          },
        ]}
        faqs={[
          {
            q: "How far in advance should I book corporate event management in Sri Lanka?",
            a: "Minimum 6 weeks for events under 200 guests, 8–12 weeks for 200–500, and 14–16 weeks for any multi-day or 500+ event. Peak corporate seasons (March–April, September–November) book out fastest.",
          },
          {
            q: "Should AV be bundled with the venue or with the event manager?",
            a: "Bundling AV with the event manager almost always delivers better signal flow, fewer day-of disputes and integrated lighting cues. In-house venue AV is rarely as flexible for complex corporate formats.",
          },
          {
            q: "Do Sri Lankan corporate events still need printed agendas?",
            a: "Yes — board-level attendees expect them. A QR-coded digital companion is fine alongside, but never replace printed agendas at AGM-class events.",
          },
          {
            q: "Who handles media at a corporate launch?",
            a: "A dedicated PR/communications agency handles invites, press kits and follow-up coverage. The event manager handles their on-site experience — press zone, photo opportunity, refreshments. Confusing the two creates coverage gaps.",
          },
        ]}
        related={[
          { href: "/blog/event-management-cost-sri-lanka", label: "How much does event management cost in Sri Lanka? 2025 price guide" },
          { href: "/blog/event-venues-sri-lanka-colombo", label: "Best event venues in Sri Lanka — corporate, wedding, conference" },
          { href: "/blog/event-planning-checklist-sri-lanka", label: "The ultimate event planning checklist for Sri Lanka" },
          { href: "/corporate-event-management-sri-lanka", label: "Corporate event management — service page" },
        ]}
        primaryAnchor={EVENT_MGMT_ANCHOR}
      />
    </PageShell>
  ),
});
