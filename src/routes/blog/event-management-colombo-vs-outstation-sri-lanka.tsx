import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { EVENT_MGMT_ANCHOR } from "@/lib/event-management-anchor";
import { SITE } from "@/data/site";

const SLUG = "blog/event-management-colombo-vs-outstation-sri-lanka";
const TITLE = 'Colombo vs Outstation Events in Sri Lanka: What Changes and What to Plan For';
const DESC = 'Logistics, vendor availability, transport, accommodation and local permits — what changes when you take an event outside Colombo to Kandy, Galle, Jaffna or Negombo.';

export const Route = createFileRoute("/blog/event-management-colombo-vs-outstation-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: 'event management colombo, event management kandy, event management galle, outstation event sri lanka' },
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
        kicker='Locations'
        publishedISO='2025-05-20'
        category={{ label: 'Locations' }}
        intro='Outstation events deliver memorable guest experiences — and add logistics complexity that Colombo events never have to consider.'
        blocks={[{"type": "p", "text": "Whether you're in Colombo or Hambantota, event management Sri Lanka requires local knowledge that a Colombo-only agency won't have. Vendor density, road network, weather windows and even mobile coverage all change the moment you leave the Western Province."}, {"type": "h2", "text": "What changes outside Colombo"}, {"type": "ul", "items": ["Vendor density drops — many specialist suppliers (premium AV, top photographers) still ship from Colombo, adding 1–2 day logistics buffers.", "Accommodation for crew becomes a line item (5–15 rooms for a mid-size production).", "Generator power is more often needed — provincial venue power isn't always conference-grade.", "Local permit contacts are different — Colombo municipal vs Kandy/Galle/Jaffna municipal councils all have separate processes.", "Transport for guests — chartered coaches or hotel shuttles for any guest count over 80."]}, {"type": "h2", "text": "Sweet-spot outstation venues"}, {"type": "ul", "items": ["Kandy — Earl's Regency, Cinnamon Citadel, OZO Kandy.", "Galle — Jetwing Lighthouse, Amari Galle, Le Grand Galle.", "Negombo — Jetwing Sea, Heritance Negombo.", "Bentota / Beruwala — Cinnamon Bey, Centara Ceysands.", "Jaffna — Jetwing Jaffna for corporate; smaller venues for cultural events."]}]}
        faqs={[{"q": "Is event management cheaper outside Colombo?", "a": "Venue and F&B are often 15–30% cheaper. The savings are usually offset by transport, accommodation and Colombo-based supplier travel costs — net cost is comparable, but the guest experience often justifies the move."}, {"q": "Can I use a Colombo planner for a Galle wedding?", "a": "Yes — most premium planners service the whole island. Make sure the contract specifies travel and accommodation are included in their fee, not billed extra."}]}
        related={[{"href": "/blog/event-venues-sri-lanka-colombo", "label": "Best event venues in Sri Lanka"}, {"href": "/event-management-colombo", "label": "Event management Colombo"}, {"href": "/event-management-kandy", "label": "Event management Kandy"}, {"href": "/event-management-galle", "label": "Event management Galle"}]}
        primaryAnchor={EVENT_MGMT_ANCHOR}
      />
    </PageShell>
  ),
});
