import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "industry-advertising-sri-lanka")!;
const TITLE = "Political Advertising Campaign Sri Lanka — Win Elections";
const DESC = "End-to-end political advertising campaigns in Sri Lanka — voter research, messaging, posters, social media, SMS, rally support, TV, radio and 24/7 media monitoring islandwide.";

export const Route = createFileRoute("/political-advertising-campaign-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "political advertising campaign sri lanka, political campaign advertising, election campaign sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/political-advertising-campaign-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="political advertising campaign sri lanka" /></PageShell>),
});
