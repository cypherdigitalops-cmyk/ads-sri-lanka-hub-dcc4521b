import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "digital-marketing-sri-lanka")!;
const TITLE = "Tiktok Advertising Sri Lanka in 2026 — Trends & Tactics";
const DESC = "Avoid the most common tiktok advertising sri lanka mistakes Sri Lankan brands make. This guide covers strategy, creative and execution from start to finish.";

export const Route = createFileRoute("/blog/tiktok-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "tiktok advertising sri lanka, digital marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/tiktok-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="tiktok advertising sri lanka" extraLinks={[{"href":"/tiktok-marketing-sri-lanka","label":"Tiktok Marketing","anchor":"TikTok marketing Sri Lanka"},{"href":"/social-media-marketing-sri-lanka","label":"Social Media Marketing","anchor":"social media marketing Sri Lanka"},{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing","anchor":"digital marketing Sri Lanka"}]} /></PageShell>),
});
