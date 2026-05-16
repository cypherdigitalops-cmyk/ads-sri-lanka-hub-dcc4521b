import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "social-media-marketing-sri-lanka")!;
const TITLE = "Beginner's Guide to Social Media Marketing Sri Lanka";
const DESC = "An expert overview of social media marketing sri lanka in Sri Lanka — what works in 2026, what to avoid and how to measure results.";

export const Route = createFileRoute("/blog/social-media-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "social media marketing sri lanka, social media marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/social-media-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="social media marketing sri lanka" extraLinks={[{"href":"/social-media-marketing-sri-lanka","label":"Social Media Marketing"},{"href":"/facebook-marketing-sri-lanka","label":"Facebook Marketing"},{"href":"/instagram-marketing-sri-lanka","label":"Instagram Marketing"},{"href":"/tiktok-marketing-sri-lanka","label":"TikTok Marketing"},{"href":"/","label":"Advertising Sri Lanka (Home)"}]} /></PageShell>),
});
