import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Awards & Trophies Sri Lanka | Crystal, Acrylic & Metal Trophies";
const DESC = "Awards & trophies in Sri Lanka — crystal, acrylic, metal & wooden trophies for sports, corporate & academic events. Custom engraving. Call 0701772626.";

export const Route = createFileRoute("/awards-trophies-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "awards and trophies sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/awards-trophies-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="awards and trophies sri lanka" /></PageShell>),
});
