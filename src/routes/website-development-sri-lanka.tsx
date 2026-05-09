import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "web-design-sri-lanka")!;
const TITLE = "Website Development Sri Lanka — Strategy, Creative, Media";
const DESC = "Need website development sri lanka that actually converts? We blend local insight with proven media frameworks to deliver leads and sales.";

export const Route = createFileRoute("/website-development-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "website development sri lanka, web design sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/website-development-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="website development sri lanka" /></PageShell>),
});
