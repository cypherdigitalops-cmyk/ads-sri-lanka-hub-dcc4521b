import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "LED Sign Board Sri Lanka | Illuminated Shop Signs & Lettering";
const DESC = "LED sign boards in Sri Lanka for shopfronts, offices & showrooms. Acrylic letters, lightbox & channel letter signs. From Rs 15,000. Islandwide. Call 0771437707.";

export const Route = createFileRoute("/led-sign-board-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "led sign board sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/led-sign-board-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="led sign board sri lanka" /></PageShell>),
});
