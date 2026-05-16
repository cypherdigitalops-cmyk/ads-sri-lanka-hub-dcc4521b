import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "seo-services-sri-lanka")!;
const TITLE = "SEO Agency Sri Lanka: Complete Guide for Sri Lanka";
const DESC = "Everything Sri Lankan businesses should know about seo agency sri lanka — strategy, channels, costs, common mistakes and how to pick the right partner.";

export const Route = createFileRoute("/blog/seo-agency-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "seo agency sri lanka, seo services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/seo-agency-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="seo agency sri lanka" extraLinks={[{"href":"/seo-company-sri-lanka","label":"SEO Company"},{"href":"/seo-services-sri-lanka","label":"SEO Services"},{"href":"/","label":"Advertising Sri Lanka (Home)"}]} /></PageShell>),
});
