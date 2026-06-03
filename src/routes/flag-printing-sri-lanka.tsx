import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Flag Printing Sri Lanka 2026 | Teardrop, Feather & Custom Flags from Rs 3,500";
const DESC = "Custom flag printing in Sri Lanka — teardrop, feather, rectangle, table & national flags from Rs 3,500. Dye sublimation on premium polyester, pole + base included, 3–5 day delivery islandwide. WhatsApp 0771437707.";

export const Route = createFileRoute("/flag-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "flag printing sri lanka, teardrop flag printing sri lanka, feather flag printing sri lanka, custom flag printing colombo, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/flag-printing-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate
        category={CAT}
        keyword="flag printing sri lanka"
        extraLinks={[
          { href: "/banner-printing-sri-lanka", label: "Banner printing Sri Lanka", anchor: "banner printing" },
          { href: "/roll-up-banner-printing-sri-lanka", label: "Roll up banner printing", anchor: "roll up banner" },
          { href: "/fabric-banner-printing-sri-lanka", label: "Fabric banner printing", anchor: "fabric banner" },
          { href: "/dye-sublimation-printing-sri-lanka", label: "Dye sublimation printing", anchor: "dye sublimation" },
          { href: "/backdrop-printing-sri-lanka", label: "Backdrop printing", anchor: "backdrop" },
          { href: "/event-backdrop-printing-sri-lanka", label: "Event backdrop printing", anchor: "event backdrop" },
          { href: "/exhibition-stall-branding-sri-lanka", label: "Exhibition stall branding", anchor: "stall branding" },
          { href: "/event-signage-printing-sri-lanka", label: "Event signage printing", anchor: "event signage" },
          { href: "/product-launch-event-management-sri-lanka", label: "Product launch event management", anchor: "product launch" },
          { href: "/vehicle-branding-sri-lanka", label: "Vehicle branding Sri Lanka", anchor: "vehicle branding" },
          { href: "/blog/business-branding-sri-lanka", label: "Business branding", anchor: "branding" },
          { href: "/blog/banner-design-sri-lanka", label: "Banner design Sri Lanka", anchor: "banner design" },
          { href: "/printing-services-sri-lanka", label: "Printing services Sri Lanka", anchor: "printing services" },
          { href: "/advertising-in-colombo", label: "Advertising in Colombo", anchor: "Colombo" },
          { href: "/advertising-in-kandy", label: "Advertising in Kandy", anchor: "Kandy" },
          { href: "/advertising-in-jaffna", label: "Advertising in Jaffna", anchor: "Jaffna" },
          { href: "/advertising-in-galle", label: "Advertising in Galle", anchor: "Galle" },
          { href: "/advertising-in-negombo", label: "Advertising in Negombo", anchor: "Negombo" },
        ]}
      />
    </PageShell>
  ),
});