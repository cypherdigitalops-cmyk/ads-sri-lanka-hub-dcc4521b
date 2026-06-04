import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Pylon Sign Sri Lanka | Freestanding Totem & Pole Signs";
const DESC = "Pylon & totem sign fabrication in Sri Lanka. Freestanding pole signs for petrol stations, shopping centres & commercial parks. Custom sizes. Call 0771437707.";

export const Route = createFileRoute("/pylon-sign-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "pylon sign sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/pylon-sign-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="pylon sign sri lanka" /></PageShell>),
});
