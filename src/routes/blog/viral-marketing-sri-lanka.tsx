import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "social-media-marketing-sri-lanka")!;
const TITLE = "Viral Marketing Sri Lanka in 2026 — Trends & Tactics";
const DESC = "Avoid the most common viral marketing sri lanka mistakes Sri Lankan brands make. This guide covers strategy, creative and execution from start to finish.";

export const Route = createFileRoute("/blog/viral-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "viral marketing sri lanka, social media marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/viral-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="viral marketing sri lanka" extraLinks={[{"href":"/social-media-marketing-sri-lanka","label":"Social Media Marketing"},{"href":"/content-marketing-sri-lanka","label":"Content Marketing"},{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing"}]} /></PageShell>),
});
