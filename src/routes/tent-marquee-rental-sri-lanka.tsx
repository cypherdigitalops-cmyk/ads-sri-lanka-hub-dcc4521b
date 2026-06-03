import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Tent & Marquee Rental Sri Lanka | Wedding & Event Tents from LKR 9,500/day";
const DESC = "Tent and marquee rental in Sri Lanka — clear-span, pagoda, stretch & crystal marquees with full install. Free site visit. Call 0771437707 or WhatsApp.";

export const Route = createFileRoute("/tent-marquee-rental-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "tent and marquee rental sri lanka, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/tent-marquee-rental-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="tent and marquee rental sri lanka" /></PageShell>),
});
