import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Acrylic Awards Sri Lanka | Custom Trophies & Plaques from Rs 1,500";
const DESC = "Acrylic awards in Sri Lanka — custom corporate trophies, recognition plaques & event awards from Rs 1,500. Laser engraving & UV printing. Call 0771437707.";

export const Route = createFileRoute("/acrylic-awards-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "acrylic awards sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/acrylic-awards-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="acrylic awards sri lanka" /></PageShell>),
});
