import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "seo-services-sri-lanka")!;
const TITLE = "On Page Seo Sri Lanka Explained — Costs, Channels & ROI in Sri Lanka";
const DESC = "Learn how on page seo sri lanka delivers measurable ROI for Sri Lankan brands — channels, audience targeting, creative tips and reporting. Free advice on 0...";

export const Route = createFileRoute("/blog/on-page-seo-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "on page seo sri lanka, seo services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/on-page-seo-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="on page seo sri lanka" /></PageShell>),
});
