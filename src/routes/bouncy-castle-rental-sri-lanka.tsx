import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Bouncy Castle Rental in Sri Lanka — Hire & Pricing | advertisingsrilanka.lk";
const DESC = "Reliable bouncy castle rental for events in Sri Lanka. Get pricing, packages and free guidance — call 0701772626 or WhatsApp.";

export const Route = createFileRoute("/bouncy-castle-rental-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "bouncy castle rental sri lanka, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/bouncy-castle-rental-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="bouncy castle rental sri lanka" /></PageShell>),
});
