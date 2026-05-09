import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Event Planners Sri Lanka — Trusted Sri Lankan Agency | advertisingsrilanka.lk";
const DESC = "Looking for event planners sri lanka? Our Sri Lankan team plans, executes and delivers seamless event planners sri lanka with full production support. Free quote — call 0771437707 or WhatsApp.";

export const Route = createFileRoute("/event-planners-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "event planners sri lanka, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/event-planners-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="event planners sri lanka" /></PageShell>),
});
