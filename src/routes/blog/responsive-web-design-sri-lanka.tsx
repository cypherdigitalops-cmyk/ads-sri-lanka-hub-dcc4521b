import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "web-design-sri-lanka")!;
const TITLE = "Responsive Web Design Sri Lanka in 2026 — Trends & Tactics";
const DESC = "Avoid the most common responsive web design sri lanka mistakes Sri Lankan brands make.";

export const Route = createFileRoute("/blog/responsive-web-design-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "responsive web design sri lanka, web design sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/responsive-web-design-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="responsive web design sri lanka" extraLinks={[{"href":"/web-design-sri-lanka","label":"Web Design"},{"href":"/seo-services-sri-lanka","label":"SEO Services"},{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing"}]} /></PageShell>),
});
