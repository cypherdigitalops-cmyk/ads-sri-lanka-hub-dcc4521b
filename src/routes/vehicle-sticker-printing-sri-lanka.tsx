import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Vehicle Sticker Printing Sri Lanka — Car, Van, Bus & Tuk-Tuk from LKR 850";
const DESC = "Vehicle sticker printing Sri Lanka: door decals from LKR 850, full bus wraps, school van markings, fleet branding. Cast vinyl, 5–7 yr life. WhatsApp 0771437707 — 30-min quote.";

export const Route = createFileRoute("/vehicle-sticker-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "vehicle sticker printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/vehicle-sticker-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="vehicle sticker printing sri lanka" /></PageShell>),
});
