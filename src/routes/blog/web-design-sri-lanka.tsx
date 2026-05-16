import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "web-design-sri-lanka")!;
const TITLE = "What Is Web Design Sri Lanka? A Practical Sri Lankan Guide";
const DESC = "A practical, no-fluff guide to web design sri lanka in Sri Lanka. Real tactics, indicative pricing and proven frameworks. Talk to our specialists.";

export const Route = createFileRoute("/blog/web-design-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "web design sri lanka, web design sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/web-design-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="web design sri lanka" extraLinks={[{"href":"/web-design-sri-lanka","label":"Web Design"},{"href":"/seo-services-sri-lanka","label":"SEO Services"},{"href":"/branding-sri-lanka","label":"Branding & Creative"},{"href":"/","label":"Advertising Sri Lanka (Home)"}]} /></PageShell>),
});
