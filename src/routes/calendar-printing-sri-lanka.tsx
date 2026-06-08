import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Calendar Printing Sri Lanka | Wall, Desk & Custom Calendars 2026";
const DESC = "Calendar printing in Sri Lanka — wall, desk, spiral & corporate calendars from Rs 250. Full-colour, custom branding, bulk discounts. Call 0771437707.";

export const Route = createFileRoute("/calendar-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "calendar printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/calendar-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="calendar printing sri lanka" /></PageShell>),
});
