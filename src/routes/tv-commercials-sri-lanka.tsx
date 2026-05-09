import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "video-production-sri-lanka")!;
const TITLE = "Top-Rated Tv Commercials Sri Lanka Agency in Sri Lanka | advertisin...";
const DESC = "Hire trusted specialists for tv commercials sri lanka in Sri Lanka. Goal-driven planning, on-brand creative and always-on optimisation. Free 15-min consult...";

export const Route = createFileRoute("/tv-commercials-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "tv commercials sri lanka, video production sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/tv-commercials-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="tv commercials sri lanka" /></PageShell>),
});
