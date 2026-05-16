import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "ttl-advertising-sri-lanka")!;
const TITLE = "How 360 Advertising Sri Lanka Works in Sri Lanka";
const DESC = "Compare options, budgets and timelines for 360 advertising sri lanka. We break down each step so you can plan with confidence. WhatsApp or call 0771437707.";

export const Route = createFileRoute("/blog/360-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "360 advertising sri lanka, ttl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/360-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="360 advertising sri lanka" extraLinks={[{"href":"/atl-advertising-sri-lanka","label":"ATL Advertising"},{"href":"/ttl-advertising-sri-lanka","label":"TTL & Integrated Marketing"},{"href":"/","label":"Advertising Sri Lanka (Home)"},{"href":"/360-marketing-campaigns-sri-lanka","label":"360 Marketing Campaigns"}]} /></PageShell>),
});
