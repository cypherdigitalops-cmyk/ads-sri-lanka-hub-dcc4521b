import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "atl-advertising-sri-lanka")!;
const TITLE = "Beginner's Guide to Print Media Advertising Sri Lanka";
const DESC = "An expert overview of print media advertising sri lanka in Sri Lanka — what works in 2026, what to avoid and how to measure results.";

export const Route = createFileRoute("/blog/print-media-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "print media advertising sri lanka, atl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/print-media-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="print media advertising sri lanka" extraLinks={[{"href":"/newspaper-advertising-sri-lanka","label":"Newspaper Advertising"},{"href":"/magazine-advertising-sri-lanka","label":"Magazine Advertising"},{"href":"/atl-advertising-sri-lanka","label":"ATL Advertising"}]} /></PageShell>),
});
