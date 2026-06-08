import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Wristband Sri Lanka — Custom Event, Silicone & Tyvek Wristbands | Islandwide";
const DESC = "Custom wristband printing in Sri Lanka — Tyvek, silicone, fabric, PVC & vinyl wristbands for events, hospitals, schools & promotions. Any quantity. Islandwide delivery. Call 0771437707.";

export const Route = createFileRoute("/wristband-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "wristband sri lanka, silicone wristband sri lanka, tyvek wristband sri lanka, event wristband sri lanka, custom wristband printing sri lanka, corporate gifting sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/wristband-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="wristband sri lanka" /></PageShell>),
});