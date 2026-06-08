import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Letterhead Printing Sri Lanka | A4 Letterheads from Rs 8 Each";
const DESC = "Letterhead printing in Sri Lanka from Rs 8 per A4 sheet. 80gsm & 100gsm bond paper, full-colour or single-colour. Minimum 500 sheets. Call 0771437707.";

export const Route = createFileRoute("/letterhead-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "letterhead printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/letterhead-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="letterhead printing sri lanka" /></PageShell>),
});
