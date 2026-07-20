import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Event Management Kandy — Trusted Sri Lankan Event Team | advertisingsrilanka.lk";
const DESC = "Professional event management kandy services across Sri Lanka — planning, production, staging and on-ground delivery. Free quote — call 0701772626 or WhatsApp.";

export const Route = createFileRoute("/event-management-kandy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "event management kandy, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/event-management-kandy` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="event management kandy" /></PageShell>),
});
