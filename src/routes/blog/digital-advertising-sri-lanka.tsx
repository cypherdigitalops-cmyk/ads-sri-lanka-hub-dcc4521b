import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "How Digital Advertising Sri Lanka Works in Sri Lanka";
const DESC = "Compare options, budgets and timelines for digital advertising sri lanka. We break down each step so you can plan with confidence.";

export const Route = createFileRoute("/blog/digital-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "digital advertising sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/digital-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="digital advertising sri lanka" extraLinks={[{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing"},{"href":"/google-ads-sri-lanka","label":"Google Ads"},{"href":"/facebook-marketing-sri-lanka","label":"Facebook Marketing"},{"href":"/display-advertising-sri-lanka","label":"Display Advertising"},{"href":"/","label":"Advertising Sri Lanka (Home)"}]} /></PageShell>),
});
