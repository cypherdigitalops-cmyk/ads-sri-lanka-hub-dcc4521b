import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Embroidery Sri Lanka | Logo Embroidery on Uniforms, Caps & Bags";
const DESC = "Professional embroidery in Sri Lanka. Logo embroidery on corporate uniforms, polo shirts, caps & bags. Quality digitisation, fast turnaround. Call 0771437707.";

export const Route = createFileRoute("/embroidery-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "embroidery sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/embroidery-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="embroidery sri lanka" /></PageShell>),
});
