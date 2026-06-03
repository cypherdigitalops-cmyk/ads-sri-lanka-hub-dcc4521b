import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "industry-advertising-sri-lanka")!;
const TITLE = "Advertising for Political Campaigns Sri Lanka";
const DESC = "Strategic political campaign advertising — voter research, messaging, posters, social, SMS, rally support and 24/7 media monitoring islandwide.";

export const Route = createFileRoute("/advertising-for-political-campaigns-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "advertising for political campaigns sri lanka, industry advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/advertising-for-political-campaigns-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="advertising for political campaigns sri lanka" /></PageShell>),
});
