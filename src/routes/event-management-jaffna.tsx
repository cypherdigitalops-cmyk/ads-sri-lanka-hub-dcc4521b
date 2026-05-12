import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Event Management Jaffna — Trusted Sri Lankan Event Team | advertisingsrilanka.lk";
const DESC = "Professional event management jaffna services across Sri Lanka — planning, production, staging and on-ground delivery. Free quote — call 0771437707 or WhatsApp.";

export const Route = createFileRoute("/event-management-jaffna")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "event management jaffna, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/event-management-jaffna` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="event management jaffna" /></PageShell>),
});
