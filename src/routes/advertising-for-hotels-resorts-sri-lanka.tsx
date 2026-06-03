import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "industry-advertising-sri-lanka")!;
const TITLE = "Advertising for Hotels & Resorts Sri Lanka — Fill Every Room";
const DESC = "Drive direct bookings for Sri Lankan hotels, villas and resorts. Google, Meta, OTA, influencer and outdoor campaigns built to lift occupancy and ADR.";

export const Route = createFileRoute("/advertising-for-hotels-resorts-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "advertising for hotels and resorts sri lanka, industry advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/advertising-for-hotels-resorts-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="advertising for hotels and resorts sri lanka" /></PageShell>),
});
