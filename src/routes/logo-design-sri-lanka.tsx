import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "branding-sri-lanka")!;
const TITLE = "Affordable Logo Design Sri Lanka for Sri Lankan Brands";
const DESC = "Plan smarter logo design sri lanka with Sri Lanka's #1 advertising hub. Audience research, creative, channels and weekly reports — all in one team.";

export const Route = createFileRoute("/logo-design-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "logo design sri lanka, branding sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/logo-design-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="logo design sri lanka" /></PageShell>),
});
