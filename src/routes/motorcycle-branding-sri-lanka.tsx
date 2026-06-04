import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Motorcycle Branding Sri Lanka | Motorbike Vinyl Graphics & Decals";
const DESC = "Motorcycle branding & vinyl graphics in Sri Lanka for delivery bikes & fleet motorbikes. Durable cast vinyl, fast turnaround. Call 0771437707.";

export const Route = createFileRoute("/motorcycle-branding-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "motorcycle branding sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/motorcycle-branding-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="motorcycle branding sri lanka" /></PageShell>),
});
