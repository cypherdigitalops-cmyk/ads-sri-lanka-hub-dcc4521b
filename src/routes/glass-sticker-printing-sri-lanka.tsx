import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Glass Sticker Printing Sri Lanka | Frosted & Decorative Film";
const DESC = "Glass sticker & frosted film in Sri Lanka. Privacy screens, decorative glass film & branded glass panels for offices & retail. Custom designs. Call 0701772626.";

export const Route = createFileRoute("/glass-sticker-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "glass sticker printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/glass-sticker-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="glass sticker printing sri lanka" /></PageShell>),
});
