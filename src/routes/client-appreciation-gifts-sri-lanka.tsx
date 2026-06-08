import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "corporate-gifting-sri-lanka")!;
const TITLE = "Client Appreciation Gifts Sri Lanka | Premium Corporate Gifting";
const DESC = "Client appreciation gifts in Sri Lanka — premium gift hampers, branded executive sets & festive gifts with custom packaging. Call 0771437707.";

export const Route = createFileRoute("/client-appreciation-gifts-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "client appreciation gifts sri lanka, corporate gifting sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/client-appreciation-gifts-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="client appreciation gifts sri lanka" /></PageShell>),
});
