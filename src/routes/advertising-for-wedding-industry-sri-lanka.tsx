import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "industry-advertising-sri-lanka")!;
const TITLE = "Advertising for Wedding Industry Sri Lanka";
const DESC = "Bookings for wedding planners, venues, photographers and bridal brands. Instagram, TikTok, Google and bridal-expo activations made for the Sri Lankan market.";

export const Route = createFileRoute("/advertising-for-wedding-industry-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "advertising for wedding industry sri lanka, industry advertising sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/advertising-for-wedding-industry-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="advertising for wedding industry sri lanka" /></PageShell>),
});
