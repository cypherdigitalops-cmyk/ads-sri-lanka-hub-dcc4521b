import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "atl-advertising-sri-lanka")!;
const TITLE = "Media Buying SRI LANKA — Best Media Buying SRI LANKA Services | advertisingsrilanka.lk";
const DESC = "Looking for media buying sri lanka? We deliver high-performance media buying sri lanka campaigns for Sri Lankan businesses. Strategy, creative & media in one team. Call 0771437707.";

export const Route = createFileRoute("/media-buying-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "media buying sri lanka, atl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/media-buying-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="media buying sri lanka" /></PageShell>),
});
