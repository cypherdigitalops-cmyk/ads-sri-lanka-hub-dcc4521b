import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "social-media-marketing-sri-lanka")!;
const TITLE = "Content Creation SRI LANKA: Complete Guide for Sri Lankan Businesses";
const DESC = "Read our complete guide on content creation sri lanka — strategies, channels, mistakes to avoid and how to choose the right partner. Call 0771437707 to talk to a specialist.";

export const Route = createFileRoute("/blog/content-creation-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "content creation sri lanka, social media marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/content-creation-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="content creation sri lanka" /></PageShell>),
});
