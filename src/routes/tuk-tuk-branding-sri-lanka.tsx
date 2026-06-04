import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Tuk Tuk Branding Sri Lanka | Three-Wheeler Advertising & Wraps";
const DESC = "Tuk tuk branding & three-wheeler advertising in Sri Lanka. Printed vinyl graphics for fleet & individual three-wheelers. Islandwide. Call 0771437707.";

export const Route = createFileRoute("/tuk-tuk-branding-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "tuk tuk branding sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/tuk-tuk-branding-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="tuk tuk branding sri lanka" /></PageShell>),
});
