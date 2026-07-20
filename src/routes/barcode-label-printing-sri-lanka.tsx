import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Barcode Label Printing Sri Lanka | EAN-13, QR & Serial Labels";
const DESC = "Barcode label printing in Sri Lanka. EAN-13, QR codes & serial labels for supermarkets, warehouses & exporters. GS1 compliant. Call 0701772626.";

export const Route = createFileRoute("/barcode-label-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "barcode label printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/barcode-label-printing-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="barcode label printing sri lanka" /></PageShell>),
});
