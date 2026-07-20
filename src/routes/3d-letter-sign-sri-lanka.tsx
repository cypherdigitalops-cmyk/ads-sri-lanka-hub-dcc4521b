import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "3D Letter Sign Sri Lanka | Aluminium & Acrylic Letters";
const DESC = "3D fabricated letter signs in Sri Lanka. Aluminium, stainless steel & acrylic letters for shops, offices & buildings. Illuminated & non-illuminated. Call 0701772626.";

export const Route = createFileRoute("/3d-letter-sign-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "3d letter sign sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/3d-letter-sign-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="3d letter sign sri lanka" /></PageShell>),
});
