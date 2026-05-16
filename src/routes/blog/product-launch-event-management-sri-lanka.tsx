import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { EVENT_MGMT_ANCHOR } from "@/lib/event-management-anchor";
import { SITE } from "@/data/site";

const SLUG = "blog/product-launch-event-management-sri-lanka";
const TITLE = 'How to Plan a Product Launch Event in Sri Lanka That Gets Media Coverage';
const DESC = 'Concept, venue, press strategy, live streaming, photography brief and post-event amplification — how to plan a product launch in Sri Lanka that actually gets covered.';

export const Route = createFileRoute("/blog/product-launch-event-management-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: 'product launch sri lanka, brand launch event sri lanka, press event sri lanka, event management' },
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
        kicker='Product Launches'
        publishedISO='2025-04-15'
        category={{ label: 'Product Launches' }}
        intro="A Sri Lankan product launch lives or dies on press coverage and social amplification. Here's how to engineer both into the event design from day one."
        blocks={[{"type": "p", "text": "The production side — stage, sound, LED, live stream and photography — is where experienced event management Sri Lanka pays for itself on launch day. Press coverage depends on you delivering a polished moment cameras want to capture."}, {"type": "h2", "text": "The five elements of a launch that gets covered"}, {"type": "ol", "items": ["A genuine news hook (the product, not the party).", "A photographable moment — reveal, demo, or signature visual.", "A press zone with clean backdrop, lighting and product samples.", "A pre-briefed media kit available digitally before the event.", "Same-day social content released within 60 minutes of the reveal."]}, {"type": "h2", "text": "Venue, AV and the live-stream layer"}, {"type": "p", "text": "Premium hotel ballrooms (Shangri-La, Cinnamon Grand, Hilton) carry the visual prestige journalists associate with a credible brand. Stage with a 6m × 3.5m LED backdrop, line-array sound, intelligent lighting and a 4-camera live stream is the standard 2025 minimum for any launch you want covered on national TV or in trade press."}, {"type": "h2", "text": "Press invite strategy"}, {"type": "ul", "items": ["Personal calls to 5–8 priority journalists 3 weeks out.", "Formal invites with embargo timing 10 days out.", "Reminder + confirmed attendance list 48 hours out.", "Press zone with 1:1 access to the CEO/product lead for 15 minutes after the reveal."]}, {"type": "h2", "text": "Post-event amplification"}, {"type": "p", "text": "Same-day photo highlights to the press list. 72-hour video edit for social. Speaker quotes and key statistics packaged for trade press follow-up coverage in the following week."}]}
        faqs={[{"q": "How much should a product launch event cost in Sri Lanka?", "a": "Realistic range is LKR 3.5M – 8M for a 250–500 guest launch with live stream and press programme. Premium auto, telco and FMCG launches run LKR 10M+."}, {"q": "Do Sri Lankan journalists still attend brand launches in person?", "a": "Trade and business press do — consumer/lifestyle have shifted to digital coverage. Tailor your invite list to the channel mix you actually want."}]}
        related={[{"href":"/blog/stage-setup-av-production-sri-lanka","label":"Stage setup & AV production for events"},{"href":"/blog/how-much-does-led-screen-rent-cost-sri-lanka","label":"LED screen rent cost in Sri Lanka"},{"href":"/product-launch-sri-lanka","label":"Product launch — service page"},{"href":"/led-screen-rental-sri-lanka","label":"LED screen rental — service page"},{"href":"/event-management-sri-lanka","label":"Event Management Sri Lanka"},{"href":"/brand-activation-sri-lanka","label":"Brand Activation"},{"href":"/event-photography-sri-lanka","label":"Event Photography"}]}
        primaryAnchor={EVENT_MGMT_ANCHOR}
      />
    </PageShell>
  ),
});
