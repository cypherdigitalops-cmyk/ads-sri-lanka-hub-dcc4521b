import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "outdoor-advertising-sri-lanka")!;
const TITLE = "Neon Signs Sri Lanka: Complete Guide for Sri Lanka";
const DESC = "Everything Sri Lankan businesses should know about neon signs sri lanka — strategy, channels, costs, common mistakes and how to pick the right partner.";

export const Route = createFileRoute("/blog/neon-signs-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "neon signs sri lanka, outdoor advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/neon-signs-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="neon signs sri lanka" /></PageShell>),
});
