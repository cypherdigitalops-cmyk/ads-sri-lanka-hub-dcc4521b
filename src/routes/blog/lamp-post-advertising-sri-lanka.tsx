import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "outdoor-advertising-sri-lanka")!;
const TITLE = "Lamp Post Advertising Sri Lanka — Pricing & Best Practices";
const DESC = "Wondering if lamp post advertising sri lanka is right for your business? This guide explains pros, cons, costs and case studies. Free consultation available.";

export const Route = createFileRoute("/blog/lamp-post-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "lamp post advertising sri lanka, outdoor advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/lamp-post-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="lamp post advertising sri lanka" extraLinks={[{"href":"/outdoor-advertising-sri-lanka","label":"Outdoor Advertising"},{"href":"/btl-advertising-sri-lanka","label":"BTL Advertising"}]} /></PageShell>),
});
