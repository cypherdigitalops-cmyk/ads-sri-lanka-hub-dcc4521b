import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "video-production-sri-lanka")!;
const TITLE = "Drone Videography Sri Lanka — Strategy, Creative, Media";
const DESC = "Need drone videography sri lanka that actually converts? We blend local insight with proven media frameworks to deliver leads and sales.";

export const Route = createFileRoute("/drone-videography-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "drone videography sri lanka, video production sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/drone-videography-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="drone videography sri lanka" /></PageShell>),
});
