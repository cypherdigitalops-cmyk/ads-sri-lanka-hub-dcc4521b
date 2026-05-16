import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "atl-advertising-sri-lanka")!;
const TITLE = "Above The Line Advertising Sri Lanka in 2026 — Trends & Tactics";
const DESC = "Avoid the most common above the line advertising sri lanka mistakes Sri Lankan brands make.";

export const Route = createFileRoute("/blog/above-the-line-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "above the line advertising sri lanka, atl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/above-the-line-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="above the line advertising sri lanka" extraLinks={[{"href":"/atl-advertising-sri-lanka","label":"ATL Advertising","anchor":"ATL advertising Sri Lanka"},{"href":"/tv-advertising-sri-lanka","label":"TV Advertising","anchor":"TV advertising Sri Lanka"},{"href":"/radio-advertising-sri-lanka","label":"Radio Advertising","anchor":"radio advertising Sri Lanka"},{"href":"/newspaper-advertising-sri-lanka","label":"Newspaper Advertising","anchor":"newspaper advertising Sri Lanka"},{"href":"/","label":"Advertising Sri Lanka (Home)","anchor":"advertising Sri Lanka"}]} /></PageShell>),
});
