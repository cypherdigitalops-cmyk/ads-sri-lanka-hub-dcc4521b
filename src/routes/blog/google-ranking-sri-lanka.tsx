import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "seo-services-sri-lanka")!;
const TITLE = "Google Ranking Sri Lanka | Practical Business Guide";
const DESC = "Explore google ranking in Sri Lanka: practical steps, budget factors, measurement and common mistakes. Get clear answers and guidance.";

export const Route = createFileRoute("/blog/google-ranking-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "google ranking sri lanka, marketing planning sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/google-ranking-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="google ranking sri lanka" extraLinks={[{"href":"/seo-services-sri-lanka","label":"SEO Services","anchor":"SEO services Sri Lanka"},{"href":"/local-seo-sri-lanka","label":"Local SEO","anchor":"local SEO Sri Lanka"},{"href":"/technical-seo-sri-lanka","label":"Technical SEO","anchor":"technical SEO Sri Lanka"}]} /></PageShell>),
});
