import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "atl-advertising-sri-lanka")!;
const TITLE = "Magazine Advertising SRI LANKA — Best Magazine Advertising SRI LANKA Services | advertisingsrilanka.lk";
const DESC = "Looking for magazine advertising sri lanka? We deliver high-performance magazine advertising sri lanka campaigns for Sri Lankan businesses. Strategy, creative & media in one team. Call 0771437707.";

export const Route = createFileRoute("/magazine-advertising-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "magazine advertising sri lanka, atl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/magazine-advertising-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="magazine advertising sri lanka" /></PageShell>),
});
