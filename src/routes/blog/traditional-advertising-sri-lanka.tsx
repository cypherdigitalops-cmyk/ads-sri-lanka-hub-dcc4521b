import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "atl-advertising-sri-lanka")!;
const TITLE = "Traditional Advertising Sri Lanka — Costs, Channels & ROI";
const DESC = "Learn how traditional advertising sri lanka delivers measurable ROI for Sri Lankan brands — channels, audience targeting, creative tips and reporting.";

export const Route = createFileRoute("/blog/traditional-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "traditional advertising sri lanka, atl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/traditional-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="traditional advertising sri lanka" extraLinks={[{"href":"/atl-advertising-sri-lanka","label":"ATL Advertising"},{"href":"/outdoor-advertising-sri-lanka","label":"Outdoor Advertising"},{"href":"/","label":"Advertising Sri Lanka (Home)"}]} /></PageShell>),
});
