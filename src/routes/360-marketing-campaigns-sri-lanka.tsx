import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "ttl-advertising-sri-lanka")!;
const TITLE = "Best 360 Marketing Campaigns Sri Lanka in Sri Lanka (2026) — Call 0...";
const DESC = "Affordable, ROI-focused 360 marketing campaigns sri lanka for Sri Lankan SMEs and enterprises. We design, run and report every campaign end-to-end. Talk to...";

export const Route = createFileRoute("/360-marketing-campaigns-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "360 marketing campaigns sri lanka, ttl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/360-marketing-campaigns-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="360 marketing campaigns sri lanka" /></PageShell>),
});
