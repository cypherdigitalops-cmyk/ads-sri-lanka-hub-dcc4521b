import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "ttl-advertising-sri-lanka")!;
const TITLE = "ATL BTL TTL Advertising Sri Lanka in 2026 — Trends & Tactics";
const DESC = "Avoid the most common atl btl ttl advertising sri lanka mistakes Sri Lankan brands make.";

export const Route = createFileRoute("/blog/atl-btl-ttl-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "atl btl ttl advertising sri lanka, ttl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/atl-btl-ttl-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="atl btl ttl advertising sri lanka" extraLinks={[{"href":"/atl-advertising-sri-lanka","label":"ATL Advertising"},{"href":"/btl-advertising-sri-lanka","label":"BTL Advertising"},{"href":"/ttl-advertising-sri-lanka","label":"TTL & Integrated Marketing"},{"href":"/","label":"Advertising Sri Lanka (Home)"}]} /></PageShell>),
});
