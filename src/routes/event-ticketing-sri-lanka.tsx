import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Event Ticketing Sri Lanka — Trusted Sri Lankan Event Team | advertisingsrilanka.lk";
const DESC = "Professional event ticketing sri lanka services across Sri Lanka — planning, production, staging and on-ground delivery. Free quote — call 0771437707 or WhatsApp.";

export const Route = createFileRoute("/event-ticketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "event ticketing sri lanka, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/event-ticketing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="event ticketing sri lanka" /></PageShell>),
});
