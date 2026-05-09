import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "The Sri Lankan Brand's Playbook to Consumer Promotions Sri Lanka";
const DESC = "From planning to launch — a complete walkthrough of consumer promotions sri lanka for Sri Lankan businesses. Tools, tips and partner-selection checklist in...";

export const Route = createFileRoute("/blog/consumer-promotions-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "consumer promotions sri lanka, btl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/consumer-promotions-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="consumer promotions sri lanka" /></PageShell>),
});
