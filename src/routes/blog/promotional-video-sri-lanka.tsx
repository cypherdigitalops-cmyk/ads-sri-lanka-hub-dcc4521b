import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "video-production-sri-lanka")!;
const TITLE = "Beginner's Guide to Promotional Video Sri Lanka";
const DESC = "An expert overview of promotional video sri lanka in Sri Lanka — what works in 2026, what to avoid and how to measure results.";

export const Route = createFileRoute("/blog/promotional-video-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "promotional video sri lanka, video production sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/promotional-video-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="promotional video sri lanka" extraLinks={[{"href":"/video-production-sri-lanka","label":"Video Production"},{"href":"/digital-marketing-sri-lanka","label":"Digital Marketing"},{"href":"/social-media-marketing-sri-lanka","label":"Social Media Marketing"}]} /></PageShell>),
});
