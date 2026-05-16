import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "ttl-advertising-sri-lanka")!;
const TITLE = "What Is Through The Line Advertising Sri Lanka? Sri Lanka Guide";
const DESC = "A practical, no-fluff guide to through the line advertising sri lanka in Sri Lanka. Real tactics, indicative pricing and proven frameworks.";

export const Route = createFileRoute("/blog/through-the-line-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "through the line advertising sri lanka, ttl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/through-the-line-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="through the line advertising sri lanka" extraLinks={[{"href":"/ttl-advertising-sri-lanka","label":"TTL & Integrated Marketing"},{"href":"/atl-advertising-sri-lanka","label":"ATL Advertising"},{"href":"/btl-advertising-sri-lanka","label":"BTL Advertising"}]} /></PageShell>),
});
