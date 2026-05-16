import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "ttl-advertising-sri-lanka")!;
const TITLE = "Integrated Advertising Sri Lanka: Complete Guide for Sri Lanka";
const DESC = "Everything Sri Lankan businesses should know about integrated advertising sri lanka — strategy, channels, costs, common mistakes and how to pick the right";

export const Route = createFileRoute("/blog/integrated-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "integrated advertising sri lanka, ttl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/integrated-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="integrated advertising sri lanka" extraLinks={[{"href":"/ttl-advertising-sri-lanka","label":"TTL & Integrated Marketing","anchor":"integrated advertising Sri Lanka"},{"href":"/integrated-marketing-sri-lanka","label":"Integrated Marketing","anchor":"integrated marketing Sri Lanka"},{"href":"/","label":"Advertising Sri Lanka (Home)","anchor":"advertising Sri Lanka"}]} /></PageShell>),
});
