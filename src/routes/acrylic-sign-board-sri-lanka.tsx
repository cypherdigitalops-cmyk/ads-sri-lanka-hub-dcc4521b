import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Acrylic Sign Board Sri Lanka | Indoor & Office Signs from Rs 3,500";
const DESC = "Acrylic sign boards in Sri Lanka — reception, office & shop signs with 3mm–10mm acrylic, LED backlit options. Custom shapes, 5-day delivery. Call 0771437707.";

export const Route = createFileRoute("/acrylic-sign-board-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "acrylic sign board sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/acrylic-sign-board-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="acrylic sign board sri lanka" /></PageShell>),
});
