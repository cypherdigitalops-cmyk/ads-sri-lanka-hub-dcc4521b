import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Employee Welcome Kits Sri Lanka | New Hire Onboarding Gifts";
const DESC = "Employee welcome kits in Sri Lanka — branded onboarding packs with notebooks, drinkware, apparel & tech accessories. Call 0701772626.";

export const Route = createFileRoute("/employee-welcome-kits-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "employee welcome kits sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/employee-welcome-kits-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="employee welcome kits sri lanka" /></PageShell>),
});
