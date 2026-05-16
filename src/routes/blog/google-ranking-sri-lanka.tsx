import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "seo-services-sri-lanka")!;
const TITLE = "Google Ranking Sri Lanka — Costs, Channels & ROI";
const DESC = "Learn how google ranking sri lanka delivers measurable ROI for Sri Lankan brands — channels, audience targeting, creative tips and reporting.";

export const Route = createFileRoute("/blog/google-ranking-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "google ranking sri lanka, seo services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/google-ranking-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="google ranking sri lanka" extraLinks={[{"href":"/seo-services-sri-lanka","label":"SEO Services"},{"href":"/local-seo-sri-lanka","label":"Local SEO"},{"href":"/technical-seo-sri-lanka","label":"Technical SEO"}]} /></PageShell>),
});
