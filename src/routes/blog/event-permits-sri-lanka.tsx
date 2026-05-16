import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { EVENT_MGMT_ANCHOR } from "@/lib/event-management-anchor";
import { SITE } from "@/data/site";

const SLUG = "blog/event-permits-sri-lanka";
const TITLE = 'Event Permits in Sri Lanka: CMC, Police, Fire Safety & What Takes Longest';
const DESC = 'CMC permits, police clearance, fire safety sign-off, noise ordinances and venue approvals — what every event organiser in Sri Lanka needs and how long each takes.';

export const Route = createFileRoute("/blog/event-permits-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: 'event permit sri lanka, cmc event permit, police clearance event, fire safety event sri lanka, event management' },
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
        kicker='Permits & Compliance'
        publishedISO='2025-05-06'
        category={{ label: 'Compliance' }}
        intro='Sri Lankan event permits are the unglamorous discipline that collapses events when it goes wrong. This guide covers what to apply for, when to apply, and who in your team should own it.'
        blocks={[{"type": "p", "text": "Permit management is one of the most overlooked parts of event management Sri Lanka — and the one that collapses events when it goes wrong. Public events without proper CMC or police clearance get shut down on the morning of, regardless of how much was spent on production."}, {"type": "h2", "text": "The five permit categories"}, {"type": "ul", "items": ["CMC permit (for events on Colombo Municipal Council land or impacting traffic).", "Police clearance (any event over 250 guests or any with VIP attendance).", "Fire safety sign-off (any indoor event over 300 guests, mandatory for some venues).", "Noise abatement (outdoor events with amplified sound after 10pm).", "Liquor license (events serving alcohol that aren't held at licensed venues)."]}, {"type": "h2", "text": "Typical lead times"}, {"type": "table", "head": ["Permit", "Apply by", "Typical processing"], "rows": [["CMC permit", "21 days out", "7–14 days"], ["Police clearance", "14 days out", "5–10 days"], ["Fire safety", "14 days out", "5–10 days"], ["Liquor license", "21 days out", "10–14 days"], ["Outdoor noise abatement", "10 days out", "3–7 days"]]}, {"type": "h2", "text": "Who applies for what"}, {"type": "p", "text": "Venue-held events: most five-star hotels and BMICH apply for fire safety and serve liquor under their own licenses. Outdoor / private-land events: the organiser applies for CMC, police and noise permits directly. A professional planner usually owns the permit submission process; confirm in writing before signing."}]}
        faqs={[{"q": "Do I need a CMC permit for a private indoor wedding?", "a": "No — venue-held weddings inside licensed hotels don't require separate CMC permits."}, {"q": "What happens if you run an event without permits?", "a": "Risk of shutdown by police or municipal officers, plus fines. For corporate events the reputational damage is the bigger cost."}]}
        related={[{"href":"/blog/event-planning-checklist-sri-lanka","label":"Event planning checklist — 12 weeks to event day"},{"href":"/blog/how-to-choose-event-management-company-sri-lanka","label":"How to choose an event management company"},{"href":"/event-management-sri-lanka","label":"Event Management Sri Lanka"},{"href":"/corporate-event-management-sri-lanka","label":"Corporate Event Management"}]}
        primaryAnchor={EVENT_MGMT_ANCHOR}
      />
    </PageShell>
  ),
});
