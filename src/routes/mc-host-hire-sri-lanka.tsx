import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Mc And Host Hire Sri Lanka — Trusted Sri Lankan Event Team | advertisingsrilanka.lk";
const DESC = "Professional mc and host hire sri lanka services across Sri Lanka — planning, production, staging and on-ground delivery. Free quote — call 0771437707 or WhatsApp.";

export const Route = createFileRoute("/mc-host-hire-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "mc and host hire sri lanka, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/mc-host-hire-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="mc and host hire sri lanka" /></PageShell>),
});
