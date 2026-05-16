import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "seo-services-sri-lanka")!;
const TITLE = "SEO Sri Lanka — Pricing, Best Practices & How to Pick a Partner";
const DESC = "Wondering if seo sri lanka is right for your business? This guide explains pros, cons, costs and case studies. Free consultation available.";

export const Route = createFileRoute("/blog/seo-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "seo sri lanka, seo services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/seo-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="seo sri lanka" extraLinks={[{"href":"/seo-services-sri-lanka","label":"SEO Services","anchor":"SEO services Sri Lanka"},{"href":"/local-seo-sri-lanka","label":"Local SEO","anchor":"local SEO Sri Lanka"},{"href":"/technical-seo-sri-lanka","label":"Technical SEO","anchor":"technical SEO Sri Lanka"},{"href":"/ecommerce-seo-sri-lanka","label":"Ecommerce SEO","anchor":"ecommerce SEO Sri Lanka"},{"href":"/","label":"Advertising Sri Lanka (Home)","anchor":"advertising Sri Lanka"}]} /></PageShell>),
});
