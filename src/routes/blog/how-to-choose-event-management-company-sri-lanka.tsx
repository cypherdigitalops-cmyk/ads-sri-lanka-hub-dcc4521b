import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { EVENT_MGMT_ANCHOR } from "@/lib/event-management-anchor";
import { SITE } from "@/data/site";

const SLUG = "blog/how-to-choose-event-management-company-sri-lanka";
const TITLE = 'How to Choose an Event Management Company in Sri Lanka: 10 Questions to Ask';
const DESC = '10 questions to ask before signing with any event management company in Sri Lanka — equipment ownership, in-house creative, permit experience, references and contract red flags.';

export const Route = createFileRoute("/blog/how-to-choose-event-management-company-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: 'how to choose event management company sri lanka, best event planner sri lanka, event management' },
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
        kicker='Choosing a Partner'
        publishedISO='2025-05-27'
        category={{ label: 'Choosing a Partner' }}
        intro='The right event management partner saves you 10–25% in total event cost and prevents the dozen small disasters that derail in-house teams. Use this list before you sign.'
        blocks={[{"type": "p", "text": "Once you know what to look for, comparing event management Sri Lanka providers becomes straightforward — use this list as your checklist before signing anything. A serious planner will welcome every question; defensiveness on any of them is itself a signal."}, {"type": "h2", "text": "The 10 questions"}, {"type": "ol", "items": ["Do you own your core equipment (stage, AV, lighting) or rent it from sub-suppliers? Owned equipment means cost control and same-day spares.", "Is your creative team in-house or outsourced? In-house means faster iteration and clearer accountability.", "Walk me through three events of similar scale to mine in the last 12 months. Real references, not just brand-name highlights.", "Who in your team will be my single point of contact, and who covers if they're unavailable?", "How do you handle permits and compliance — do you submit on my behalf or just brief me?", "What does your contract say about scope changes, force majeure, and refunds for cancellation?", "How do you price vendor pass-through — at cost plus disclosed fee, or with markup?", "What's your contingency plan for power failure, weather, or supplier no-show?", "Do you carry public liability insurance? Can I see the policy?", "Can I speak to two clients whose events you delivered in the last six months?"]}, {"type": "h2", "text": "Red flags"}, {"type": "ul", "items": ["Refusal to share references.", "No written contract — verbal agreements only.", "Pricing presented as single bundled figure with no line items.", "No clear answer on who replaces the lead if they're unavailable on event day.", "Pressure to commit before site visit or full quote review."]}]}
        faqs={[{"q": "What's the most overlooked question when hiring a planner?", "a": "Equipment ownership. Companies that rent stage and AV from sub-suppliers carry an extra layer of cost and a coordination risk on event day."}, {"q": "Should the planner be present at the event or just send a coordinator?", "a": "For events above LKR 2M total spend, the named planner should be on-site. Smaller events can be safely handed to a senior coordinator."}]}
        related={[{"href":"/blog/event-management-cost-sri-lanka","label":"Event management cost in Sri Lanka — 2025 price guide"},{"href":"/blog/event-planning-checklist-sri-lanka","label":"Event planning checklist"},{"href":"/blog/corporate-event-management-sri-lanka-guide","label":"Corporate event management — complete planning guide"},{"href":"/event-management-sri-lanka","label":"Event Management Sri Lanka"},{"href":"/event-planners-sri-lanka","label":"Event Planners Sri Lanka"},{"href":"/","label":"Advertising Sri Lanka (Home)"}]}
        primaryAnchor={EVENT_MGMT_ANCHOR}
      />
    </PageShell>
  ),
});
