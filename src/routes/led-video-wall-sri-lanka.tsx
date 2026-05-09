import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "outdoor-advertising-sri-lanka")!;
const TITLE = "Led Video Wall SRI LANKA — Best Led Video Wall SRI LANKA Services | advertisingsrilanka.lk";
const DESC = "Looking for led video wall sri lanka? We deliver high-performance led video wall sri lanka campaigns for Sri Lankan businesses. Strategy, creative & media in one team. Call 0771437707.";

export const Route = createFileRoute("/led-video-wall-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "led video wall sri lanka, outdoor advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/led-video-wall-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="led video wall sri lanka" /></PageShell>),
});
