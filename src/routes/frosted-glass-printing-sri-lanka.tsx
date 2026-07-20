import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Frosted Glass Printing Sri Lanka | Privacy Film & Sandblast";
const DESC = "Frosted glass film & privacy screen installation in Sri Lanka. Sandblast-effect vinyl for offices, partitions & glass doors. Custom designs. Call 0701772626.";

export const Route = createFileRoute("/frosted-glass-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "frosted glass printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/frosted-glass-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="frosted glass printing sri lanka" /></PageShell>),
});
