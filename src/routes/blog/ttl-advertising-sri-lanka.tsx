import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "ttl-advertising-sri-lanka")!;
const TITLE = "TTL Advertising Sri Lanka in 2026 — Trends & Tactics";
const DESC = "Avoid the most common ttl advertising sri lanka mistakes Sri Lankan brands make. This guide covers strategy, creative and execution from start to finish.";

export const Route = createFileRoute("/blog/ttl-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "ttl advertising sri lanka, ttl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/ttl-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="ttl advertising sri lanka" extraLinks={[{"href":"/ttl-advertising-sri-lanka","label":"TTL & Integrated Marketing"},{"href":"/brand-communication-sri-lanka","label":"Brand Communication"},{"href":"/","label":"Advertising Sri Lanka (Home)"}]} /></PageShell>),
});
