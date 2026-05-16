import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "seo-services-sri-lanka")!;
const TITLE = "Beginner's Guide to Organic Traffic Sri Lanka";
const DESC = "An expert overview of organic traffic sri lanka in Sri Lanka — what works in 2026, what to avoid and how to measure results.";

export const Route = createFileRoute("/blog/organic-traffic-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "organic traffic sri lanka, seo services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/organic-traffic-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="organic traffic sri lanka" extraLinks={[{"href":"/seo-services-sri-lanka","label":"SEO Services","anchor":"SEO services Sri Lanka"},{"href":"/content-marketing-sri-lanka","label":"Content Marketing","anchor":"content marketing Sri Lanka"},{"href":"/local-seo-sri-lanka","label":"Local SEO","anchor":"local SEO Sri Lanka"}]} /></PageShell>),
});
