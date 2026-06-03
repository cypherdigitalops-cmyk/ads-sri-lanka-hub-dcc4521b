import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "industry-advertising-sri-lanka")!;
const TITLE = "Advertising for Travel & Tourism Sri Lanka";
const DESC = "Promote tours, hotels and travel brands to inbound and local travellers. Multilingual Google, Meta, YouTube and PR campaigns built for tourism.";

export const Route = createFileRoute("/advertising-for-travel-tourism-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "advertising for travel and tourism sri lanka, industry advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/advertising-for-travel-tourism-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="advertising for travel and tourism sri lanka" /></PageShell>),
});
