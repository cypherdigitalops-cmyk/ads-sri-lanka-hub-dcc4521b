import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "atl-advertising-sri-lanka")!;
const TITLE = "What Is ATL Advertising Sri Lanka? A Practical Sri Lankan Guide";
const DESC = "A practical, no-fluff guide to atl advertising sri lanka in Sri Lanka. Real tactics, indicative pricing and proven frameworks. Talk to our specialists.";

export const Route = createFileRoute("/blog/atl-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "atl advertising sri lanka, atl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/atl-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="atl advertising sri lanka" extraLinks={[{"href":"/atl-advertising-sri-lanka","label":"ATL Advertising","anchor":"ATL advertising Sri Lanka"},{"href":"/tv-advertising-sri-lanka","label":"TV Advertising","anchor":"TV advertising Sri Lanka"},{"href":"/radio-advertising-sri-lanka","label":"Radio Advertising","anchor":"radio advertising Sri Lanka"},{"href":"/media-buying-sri-lanka","label":"Media Buying","anchor":"media buying Sri Lanka"},{"href":"/","label":"Advertising Sri Lanka (Home)","anchor":"advertising Sri Lanka"}]} /></PageShell>),
});
