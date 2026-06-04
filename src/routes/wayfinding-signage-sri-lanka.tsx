import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Wayfinding Signage Sri Lanka | Directional & Navigation Signs";
const DESC = "Wayfinding signage in Sri Lanka for hospitals, hotels & offices. Directional signs, room ID & navigation panels. Islandwide install. Call 0771437707.";

export const Route = createFileRoute("/wayfinding-signage-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "wayfinding signage sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/wayfinding-signage-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="wayfinding signage sri lanka" /></PageShell>),
});
