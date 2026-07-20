import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "3D Printing Sri Lanka 2026 | FDM, SLA & Resin Prototyping from Rs 500";
const DESC = "Professional 3D printing in Sri Lanka — FDM, SLA resin & SLS prototyping, architectural models, custom parts & jigs from Rs 500. PLA, ABS, PETG, TPU, nylon & tough resin. Same-week delivery islandwide. WhatsApp 0701772626.";

export const Route = createFileRoute("/3d-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "3d printing sri lanka, 3d printing service colombo, sla resin printing sri lanka, fdm printing sri lanka, prototyping sri lanka, 3d printing price sri lanka, architectural model printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/3d-printing-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate
        category={CAT}
        keyword="3d printing sri lanka"
        extraLinks={[
          { href: "/3d-letter-sign-sri-lanka", label: "3D letter signs Sri Lanka", anchor: "3D letter signs" },
          { href: "/uv-printing-sri-lanka", label: "UV printing Sri Lanka", anchor: "UV printing" },
          { href: "/large-format-printing-sri-lanka", label: "Large format printing", anchor: "large format printing" },
          { href: "/acrylic-sign-board-sri-lanka", label: "Acrylic sign boards", anchor: "acrylic signage" },
          { href: "/acrylic-awards-sri-lanka", label: "Acrylic awards", anchor: "acrylic awards" },
          { href: "/corporate-gifting-sri-lanka", label: "Corporate gifting Sri Lanka", anchor: "corporate gifts" },
          { href: "/product-launch-event-management-sri-lanka", label: "Product launch events", anchor: "product launch" },
          { href: "/exhibition-stall-branding-sri-lanka", label: "Exhibition stall branding", anchor: "exhibition stalls" },
          { href: "/printing-services-sri-lanka", label: "Printing services Sri Lanka", anchor: "printing services" },
          { href: "/advertising-in-colombo", label: "Advertising in Colombo", anchor: "Colombo" },
          { href: "/advertising-in-kandy", label: "Advertising in Kandy", anchor: "Kandy" },
          { href: "/advertising-in-galle", label: "Advertising in Galle", anchor: "Galle" },
          { href: "/advertising-in-jaffna", label: "Advertising in Jaffna", anchor: "Jaffna" },
          { href: "/advertising-in-negombo", label: "Advertising in Negombo", anchor: "Negombo" },
        ]}
      />
    </PageShell>
  ),
});