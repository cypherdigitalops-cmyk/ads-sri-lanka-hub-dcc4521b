import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "event-management-sri-lanka")!;
const TITLE = "Generator Rental Sri Lanka | Silent 15–500 kVA Hire from LKR 9,500/day";
const DESC = "Silent diesel generator rental in Sri Lanka — 15 kVA to 500 kVA with operator, fuel and ATS. Same-day delivery in Colombo. Call 0771437707 or WhatsApp.";

export const Route = createFileRoute("/generator-rental-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "generator rental sri lanka, event management sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/generator-rental-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="generator rental sri lanka" /></PageShell>),
});
