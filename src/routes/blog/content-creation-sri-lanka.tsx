import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";
import { CypherSocialBacklink } from "@/components/site/CypherSocialBacklink";

const CAT = CATEGORIES.find((x) => x.slug === "social-media-marketing-sri-lanka")!;
const TITLE = "Content Creation Sri Lanka | Practical Business Guide";
const DESC = "Explore content creation in Sri Lanka: practical steps, budget factors, measurement and common mistakes. Get clear answers and guidance.";

export const Route = createFileRoute("/blog/content-creation-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "content creation sri lanka, marketing planning sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/content-creation-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="content creation sri lanka" extraLinks={[{"href":"/social-media-marketing-sri-lanka","label":"Social Media Marketing","anchor":"social media marketing Sri Lanka"},{"href":"/video-production-sri-lanka","label":"Video Production","anchor":"video production Sri Lanka"},{"href":"/branding-sri-lanka","label":"Branding & Creative","anchor":"branding Sri Lanka"}]} /><CypherSocialBacklink /></PageShell>),
});
