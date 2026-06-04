import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Ceiling Graphics Sri Lanka | Printed Ceiling Films & Displays";
const DESC = "Ceiling graphic printing & installation in Sri Lanka. Stretch ceiling systems, printed tiles & ceiling vinyl for retail, hospitality & offices. Call 0771437707.";

export const Route = createFileRoute("/ceiling-graphics-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "ceiling graphics sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/ceiling-graphics-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="ceiling graphics sri lanka" /></PageShell>),
});
