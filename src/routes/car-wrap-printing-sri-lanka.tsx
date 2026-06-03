import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Car Wrap Printing Sri Lanka | Full & Partial Wraps from Rs 60,000";
const DESC = "Professional car wrap printing in Sri Lanka. Full wraps Rs 60,000–150,000. Partial wraps from Rs 25,000. Cast vinyl, 3–5 year life. Colombo & islandwide. Call 0771437707.";

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
