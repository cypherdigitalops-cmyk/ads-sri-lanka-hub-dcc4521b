import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";
import { CypherSocialBacklink } from "@/components/site/CypherSocialBacklink";

const CAT = CATEGORIES.find((x) => x.slug === "seo-services-sri-lanka")!;
const TITLE = "Content Marketing Sri Lanka | Services & Planning Guide";
const DESC = "Explore content marketing in Sri Lanka: service scope, budget factors, measurement and common mistakes. Get clear answers and guidance.";

export const Route = createFileRoute("/content-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "content marketing sri lanka, marketing planning sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/content-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="content marketing sri lanka" /><CypherSocialBacklink /></PageShell>),
});
