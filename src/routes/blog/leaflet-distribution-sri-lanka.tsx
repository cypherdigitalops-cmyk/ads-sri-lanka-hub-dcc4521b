import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "How Leaflet Distribution Sri Lanka Works in Sri Lanka — Strategy, T...";
const DESC = "Compare options, budgets and timelines for leaflet distribution sri lanka. We break down each step so you can plan with confidence. WhatsApp or call 077143...";

export const Route = createFileRoute("/blog/leaflet-distribution-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "leaflet distribution sri lanka, btl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/leaflet-distribution-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="leaflet distribution sri lanka" /></PageShell>),
});
