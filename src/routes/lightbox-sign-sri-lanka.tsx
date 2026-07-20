import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Lightbox Sign Sri Lanka | Illuminated Signs from Rs 8,000";
const DESC = "Lightbox sign printing & fabrication in Sri Lanka from Rs 8,000. Backlit signs for shops, offices & events. Single & double-sided, custom sizes. Call 0701772626.";

export const Route = createFileRoute("/lightbox-sign-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "lightbox sign sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/lightbox-sign-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="lightbox sign sri lanka" /></PageShell>),
});
