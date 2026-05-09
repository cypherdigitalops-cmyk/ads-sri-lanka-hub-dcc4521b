import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "btl-advertising-sri-lanka")!;
const TITLE = "Event Marketing SRI LANKA — Best Event Marketing SRI LANKA Services | advertisingsrilanka.lk";
const DESC = "Looking for event marketing sri lanka? We deliver high-performance event marketing sri lanka campaigns for Sri Lankan businesses. Strategy, creative & media in one team. Call 0771437707.";

export const Route = createFileRoute("/event-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "event marketing sri lanka, btl advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/event-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="event marketing sri lanka" /></PageShell>),
});
