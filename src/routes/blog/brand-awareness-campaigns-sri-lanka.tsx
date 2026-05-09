import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "atl-advertising-sri-lanka")!;
const TITLE = "Brand Awareness Campaigns Sri Lanka in 2026: Trends, Tactics & Real...";
const DESC = "Avoid the most common brand awareness campaigns sri lanka mistakes Sri Lankan brands make. This guide covers strategy, creative and execution from start to...";

export const Route = createFileRoute("/blog/brand-awareness-campaigns-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "brand awareness campaigns sri lanka, atl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/brand-awareness-campaigns-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="brand awareness campaigns sri lanka" /></PageShell>),
});
