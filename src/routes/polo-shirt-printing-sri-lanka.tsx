import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Polo Shirt Printing Sri Lanka | Corporate Uniforms from Rs 1,200";
const DESC = "Polo shirt printing in Sri Lanka from Rs 1,200. Embroidery, screen print & DTF for corporate uniforms & branded polo shirts. Minimum 12 pieces. Call 0701772626.";

export const Route = createFileRoute("/polo-shirt-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "polo shirt printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/polo-shirt-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="polo shirt printing sri lanka" /></PageShell>),
});
