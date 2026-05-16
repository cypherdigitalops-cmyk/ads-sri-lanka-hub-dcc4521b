import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "atl-advertising-sri-lanka")!;
const TITLE = "Television Commercials Sri Lanka — Pricing & Best Practices";
const DESC = "Wondering if television commercials sri lanka is right for your business? This guide explains pros, cons, costs and case studies. Free consultation available.";

export const Route = createFileRoute("/blog/television-commercials-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "television commercials sri lanka, atl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/television-commercials-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="television commercials sri lanka" extraLinks={[{"href":"/tv-advertising-sri-lanka","label":"TV Advertising","anchor":"TV advertising Sri Lanka"},{"href":"/atl-advertising-sri-lanka","label":"ATL Advertising","anchor":"ATL advertising Sri Lanka"},{"href":"/video-production-sri-lanka","label":"Video Production","anchor":"video production Sri Lanka"}]} /></PageShell>),
});
