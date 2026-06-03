import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "industry-advertising-sri-lanka")!;
const TITLE = "Advertising for Supermarkets & Retail Chains Sri Lanka";
const DESC = "Weekly promo flyers, in-store, radio, TV and digital campaigns for Sri Lankan supermarkets and retail chains. Integrated planning, one team.";

export const Route = createFileRoute("/advertising-for-supermarkets-retail-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "advertising for supermarkets and retail chains sri lanka, industry advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/advertising-for-supermarkets-retail-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="advertising for supermarkets and retail chains sri lanka" /></PageShell>),
});
