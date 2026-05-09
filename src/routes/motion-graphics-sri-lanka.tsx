import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "video-production-sri-lanka")!;
const TITLE = "Best Motion Graphics Sri Lanka in Sri Lanka (2026) — Call 0771437707";
const DESC = "Affordable, ROI-focused motion graphics sri lanka for Sri Lankan SMEs and enterprises. We design, run and report every campaign end-to-end. Talk to us toda...";

export const Route = createFileRoute("/motion-graphics-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "motion graphics sri lanka, video production sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/motion-graphics-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="motion graphics sri lanka" /></PageShell>),
});
