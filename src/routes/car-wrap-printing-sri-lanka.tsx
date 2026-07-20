import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Car Wrap Sri Lanka — Full Wraps from LKR 95,000 | 3M & Avery Cast Vinyl";
const DESC = "Professional car wrap Sri Lanka: full wraps from LKR 95,000, partial from LKR 35,000. 3M, Avery, Oracal cast vinyl, 5–7 yr life. Free 3D mockup on WhatsApp 0701772626.";

export const Route = createFileRoute("/car-wrap-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "car wrap printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/car-wrap-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="car wrap printing sri lanka" /></PageShell>),
});
