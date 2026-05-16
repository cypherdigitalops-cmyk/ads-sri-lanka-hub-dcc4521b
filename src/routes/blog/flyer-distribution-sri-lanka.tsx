import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "Beginner's Guide to Flyer Distribution Sri Lanka";
const DESC = "An expert overview of flyer distribution sri lanka in Sri Lanka — what works in 2026, what to avoid and how to measure results.";

export const Route = createFileRoute("/blog/flyer-distribution-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "flyer distribution sri lanka, btl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/flyer-distribution-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="flyer distribution sri lanka" extraLinks={[{"href":"/btl-advertising-sri-lanka","label":"BTL Advertising","anchor":"BTL advertising Sri Lanka"},{"href":"/field-marketing-sri-lanka","label":"Field Marketing","anchor":"field marketing Sri Lanka"}]} /></PageShell>),
});
