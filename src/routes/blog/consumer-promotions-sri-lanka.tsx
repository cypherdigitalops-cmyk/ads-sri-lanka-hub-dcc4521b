import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogArticleTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "The Sri Lankan Brand's Playbook to Consumer Promotions Sri Lanka";
const DESC = "From planning to launch — a complete walkthrough of consumer promotions sri lanka for Sri Lankan businesses.";

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
  component: () => (<PageShell><BlogArticleTemplate category={CAT} keyword="consumer promotions sri lanka" extraLinks={[{"href":"/btl-advertising-sri-lanka","label":"BTL Advertising","anchor":"BTL advertising Sri Lanka"},{"href":"/point-of-sale-advertising-sri-lanka","label":"Point Of Sale Advertising","anchor":"point of sale advertising Sri Lanka"},{"href":"/loyalty-programs-sri-lanka","label":"Loyalty Programs","anchor":"loyalty programs Sri Lanka"}]} /></PageShell>),
});
