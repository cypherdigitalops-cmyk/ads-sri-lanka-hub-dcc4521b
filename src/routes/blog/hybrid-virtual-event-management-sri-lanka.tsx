import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { EVENT_MGMT_ANCHOR } from "@/lib/event-management-anchor";
import { SITE } from "@/data/site";

const SLUG = "blog/hybrid-virtual-event-management-sri-lanka";
const TITLE = 'Hybrid & Virtual Event Management in Sri Lanka: Streaming, Tech & Audience Experience';
const DESC = 'Live streaming setup, platforms, internet failover, camera positions and virtual audience engagement — hybrid and virtual event management in Sri Lanka, done right.';

export const Route = createFileRoute("/blog/hybrid-virtual-event-management-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: 'hybrid event sri lanka, virtual event management sri lanka, livestream event, event management' },
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
        kicker='Hybrid Events'
        publishedISO='2025-05-13'
        category={{ label: 'Hybrid & Virtual' }}
        intro='Hybrid events live or die on the production gap between the in-room experience and the remote feed. Closing that gap is the whole job of a hybrid AV team.'
        blocks={[{"type": "p", "text": "Whether fully in-person or hybrid, the physical production side still requires professional event management Sri Lanka to keep both audiences engaged. Remote viewers leave within 8 minutes if the camera framing, audio mix or pacing is off."}, {"type": "h2", "text": "The hybrid AV stack"}, {"type": "ul", "items": ["Multi-camera switching (3 cameras minimum — wide, presenter, audience).", "Dedicated audio feed to the stream (NOT a room mic).", "Stream encoder + redundant internet (primary fibre + 4G/5G failover).", "Streaming platform (Zoom Webinar / YouTube Live / custom RTMP).", "Remote audience engagement layer — chat moderator, polls, Q&A funnel."]}, {"type": "h2", "text": "Internet failover — the non-negotiable"}, {"type": "p", "text": "Sri Lankan venues vary wildly in network reliability. A single fibre line is a single point of failure; serious hybrid setups bond two providers and a 4G/5G backup at the encoder level."}, {"type": "h2", "text": "What it costs"}, {"type": "table", "head": ["Setup", "All-in (LKR)"], "rows": [["2-cam basic livestream", "180,000 – 320,000"], ["3-cam pro livestream + redundancy", "450,000 – 850,000"], ["Multi-cam hybrid + remote engagement", "900,000 – 1.8M"]]}]}
        faqs={[{"q": "What's the biggest hybrid event failure mode?", "a": "Audio. Remote viewers tolerate poor video but leave instantly with poor audio. Invest in a dedicated audio feed to the stream — never share with room sound."}, {"q": "Can a regular AV team handle live streaming?", "a": "Most can run a basic single-camera stream; full hybrid production with multi-cam switching and remote engagement needs a dedicated streaming team."}]}
        related={[{"href": "/blog/stage-setup-av-production-sri-lanka", "label": "Stage setup & AV production"}, {"href": "/hybrid-event-sri-lanka", "label": "Hybrid event — service page"}, {"href": "/event-live-streaming-sri-lanka", "label": "Event live streaming — service page"}]}
        primaryAnchor={EVENT_MGMT_ANCHOR}
      />
    </PageShell>
  ),
});
