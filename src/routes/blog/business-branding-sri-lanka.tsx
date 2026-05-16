import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "branding-sri-lanka")!;
const TITLE = "How Business Branding Sri Lanka Works in Sri Lanka";
const DESC = "Compare options, budgets and timelines for business branding sri lanka. We break down each step so you can plan with confidence. WhatsApp or call 0771437707.";

export const Route = createFileRoute("/blog/business-branding-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "business branding sri lanka, branding sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/business-branding-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="business branding sri lanka" extraLinks={[{"href":"/branding-sri-lanka","label":"Branding & Creative"},{"href":"/web-design-sri-lanka","label":"Web Design"},{"href":"/","label":"Advertising Sri Lanka (Home)"}]} /></PageShell>),
});
