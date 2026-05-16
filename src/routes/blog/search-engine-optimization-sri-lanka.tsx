import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "seo-services-sri-lanka")!;
const TITLE = "Search Engine Optimization Sri Lanka — Costs, Channels & ROI";
const DESC = "Learn how search engine optimization sri lanka delivers measurable ROI for Sri Lankan brands — channels, audience targeting, creative tips and reporting.";

export const Route = createFileRoute("/blog/search-engine-optimization-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "search engine optimization sri lanka, seo services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/search-engine-optimization-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="search engine optimization sri lanka" extraLinks={[{"href":"/seo-services-sri-lanka","label":"SEO Services","anchor":"SEO services Sri Lanka"},{"href":"/seo-company-sri-lanka","label":"SEO Company","anchor":"SEO company Sri Lanka"},{"href":"/","label":"Advertising Sri Lanka (Home)","anchor":"advertising Sri Lanka"}]} /></PageShell>),
});
