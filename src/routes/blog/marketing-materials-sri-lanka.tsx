import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "branding-sri-lanka")!;
const TITLE = "How Marketing Materials Sri Lanka Works in Sri Lanka — Strategy, Ti...";
const DESC = "Compare options, budgets and timelines for marketing materials sri lanka. We break down each step so you can plan with confidence. WhatsApp or call 0771437...";

export const Route = createFileRoute("/blog/marketing-materials-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "marketing materials sri lanka, branding sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/marketing-materials-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="marketing materials sri lanka" /></PageShell>),
});
