import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "outdoor-advertising-sri-lanka")!;
const TITLE = "Bus Advertising Sri Lanka: Complete Guide for Sri Lanka";
const DESC = "Everything Sri Lankan businesses should know about bus advertising sri lanka — strategy, channels, costs, common mistakes and how to pick the right partner.";

export const Route = createFileRoute("/blog/bus-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "bus advertising sri lanka, outdoor advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/bus-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="bus advertising sri lanka" /></PageShell>),
});
