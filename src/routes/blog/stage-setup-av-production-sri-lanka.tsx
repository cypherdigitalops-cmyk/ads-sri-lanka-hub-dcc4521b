import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { EVENT_MGMT_ANCHOR } from "@/lib/event-management-anchor";
import { SITE } from "@/data/site";

const SLUG = "blog/stage-setup-av-production-sri-lanka";
const TITLE = 'Stage Setup & AV Production for Events in Sri Lanka: What a Professional Package Includes';
const DESC = 'Truss stages, line-array sound, intelligent lighting, LED video walls, generators and technical rehearsals — what a professional stage and AV package in Sri Lanka actually covers.';

export const Route = createFileRoute("/blog/stage-setup-av-production-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: 'stage setup sri lanka, av production sri lanka, event stage hire, led video wall sri lanka, event management' },
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
        kicker='Stage & AV'
        publishedISO='2025-04-29'
        category={{ label: 'Stage & AV' }}
        intro="Six independent technical disciplines combine into 'stage and AV' — and the cheapest quote always drops one or two of them. Here's what a real professional package includes."
        blocks={[{"type": "p", "text": "Stage and AV production is the technical backbone of any event management Sri Lanka project — getting it wrong is visible to every guest in the room. The right package balances stage build, sound, lighting, LED, power and crew so each discipline reinforces the others."}, {"type": "h2", "text": "The six disciplines"}, {"type": "ul", "items": ["Stage build — modular truss deck, anti-slip surface, edge skirt, steps.", "Sound — line-array mains, monitors, mic kit, mixing console, sound engineer.", "Lighting — key/fill rig, programmable LED par cans, follow-spots if needed, LD operator.", "LED video wall — panel pitch matched to viewing distance, processor, dedicated technician.", "Power & infrastructure — distribution, backup generator, UPS for critical kit.", "Show-call & content — run-of-show, intercom, content playback."]}, {"type": "h2", "text": "Why turnkey beats DIY vendor mixing"}, {"type": "p", "text": "Single-supplier packages internalise the signal flow between sound, lighting and LED — eliminating the most common cause of show-day failure. Multi-supplier setups work only when an experienced AV producer ties them together; without one, the day-of show-call becomes everyone's worst nightmare."}]}
        faqs={[{"q": "What size LED wall do I need for a 400-guest corporate event?", "a": "6m × 3.5m P3 is the sweet spot — visible from all seats, sharp enough for content from 4m+ viewing distance."}, {"q": "Is a dedicated sound engineer always necessary?", "a": "For more than 4 mics, any music playback, or any panel format — yes, always. Venue in-house generalists usually deliver inferior mixing."}]}
        related={[{"href":"/blog/how-much-does-led-screen-rent-cost-sri-lanka","label":"LED screen rent cost — 2025 breakdown"},{"href":"/blog/corporate-event-av-checklist-sri-lanka","label":"Corporate event AV checklist"},{"href":"/stage-setup-sri-lanka","label":"Stage setup — service page"},{"href":"/led-screen-rental-sri-lanka","label":"LED screen rental — service page"},{"href":"/sound-system-rental-sri-lanka","label":"Sound system rental — service page"},{"href":"/event-management-sri-lanka","label":"Event Management Sri Lanka"},{"href":"/generator-rental-sri-lanka","label":"Generator Rental"}]}
        primaryAnchor={EVENT_MGMT_ANCHOR}
      />
    </PageShell>
  ),
});
