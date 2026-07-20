import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Hang Tag Printing Sri Lanka | Clothing Tags from Rs 8 Each";
const DESC = "Hang tag printing in Sri Lanka from Rs 8 per tag. Branded clothing tags, price tags & product labels for fashion & retail. Any size. Call 0701772626.";

export const Route = createFileRoute("/hang-tag-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "hang tag printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/hang-tag-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="hang tag printing sri lanka" /></PageShell>),
});
