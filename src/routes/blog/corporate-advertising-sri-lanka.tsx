import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "atl-advertising-sri-lanka")!;
const TITLE = "Corporate Advertising Sri Lanka: Complete Guide for Sri Lanka";
const DESC = "Everything Sri Lankan businesses should know about corporate advertising sri lanka — strategy, channels, costs, common mistakes and how to pick the right";

export const Route = createFileRoute("/blog/corporate-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "corporate advertising sri lanka, atl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/corporate-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="corporate advertising sri lanka" extraLinks={[{"href":"/atl-advertising-sri-lanka","label":"ATL Advertising"},{"href":"/pr-communications-sri-lanka","label":"PR & Communications"},{"href":"/branding-sri-lanka","label":"Branding & Creative"}]} /></PageShell>),
});
