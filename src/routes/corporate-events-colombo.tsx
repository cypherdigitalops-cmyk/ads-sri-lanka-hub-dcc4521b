import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Corporate Events Colombo — Trusted Sri Lankan Event Team | advertisingsrilanka.lk";
const DESC = "Professional corporate events colombo services across Sri Lanka — planning, production, staging and on-ground delivery. Free quote — call 0771437707 or WhatsApp.";

export const Route = createFileRoute("/corporate-events-colombo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "corporate events colombo, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/corporate-events-colombo` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="corporate events colombo" /></PageShell>),
});
