import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "atl-advertising-sri-lanka")!;
const TITLE = "What Is National Advertising Campaigns Sri Lanka? Sri Lanka Guide";
const DESC = "A practical, no-fluff guide to national advertising campaigns sri lanka in Sri Lanka. Real tactics, indicative pricing and proven frameworks.";

export const Route = createFileRoute("/blog/national-advertising-campaigns-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "national advertising campaigns sri lanka, atl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/national-advertising-campaigns-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="national advertising campaigns sri lanka" extraLinks={[{"href":"/atl-advertising-sri-lanka","label":"ATL Advertising","anchor":"ATL advertising Sri Lanka"},{"href":"/media-buying-sri-lanka","label":"Media Buying","anchor":"media buying Sri Lanka"},{"href":"/outdoor-advertising-sri-lanka","label":"Outdoor Advertising","anchor":"outdoor advertising Sri Lanka"},{"href":"/","label":"Advertising Sri Lanka (Home)","anchor":"advertising Sri Lanka"}]} /></PageShell>),
});
