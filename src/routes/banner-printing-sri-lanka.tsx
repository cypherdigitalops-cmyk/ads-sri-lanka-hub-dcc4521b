import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Banner Printing Sri Lanka | Flex, Vinyl & Fabric from Rs 120/sqft";
const DESC = "Banner printing in Sri Lanka — flex, vinyl, fabric & mesh banners. From Rs 120/sqft. Any size, 2-day turnaround, hemming & eyelets included. Call 0771437707.";

export const Route = createFileRoute("/banner-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "banner printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/banner-printing-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate
        category={CAT}
        keyword="banner printing sri lanka"
        extraLinks={[
          { href: "/roll-up-banner-printing-sri-lanka", label: "Roll up banner printing", anchor: "roll up banner" },
          { href: "/x-banner-printing-sri-lanka", label: "X banner printing", anchor: "X banner" },
          { href: "/fabric-banner-printing-sri-lanka", label: "Fabric banner printing", anchor: "fabric banner" },
          { href: "/mesh-banner-printing-sri-lanka", label: "Mesh banner printing", anchor: "mesh banner" },
          { href: "/popup-banner-printing-sri-lanka", label: "Popup banner printing", anchor: "popup banner" },
          { href: "/vinyl-banner-printing-sri-lanka", label: "Vinyl banner printing", anchor: "vinyl banner" },
          { href: "/flex-banner-printing-sri-lanka", label: "Flex banner printing", anchor: "flex banner" },
          { href: "/trade-show-banner-printing-sri-lanka", label: "Trade show banner printing", anchor: "trade show" },
          { href: "/exhibition-banner-printing-sri-lanka", label: "Exhibition banner printing", anchor: "exhibition" },
          { href: "/backdrop-printing-sri-lanka", label: "Backdrop printing", anchor: "backdrop" },
          { href: "/event-backdrop-printing-sri-lanka", label: "Event backdrop printing", anchor: "event backdrop" },
          { href: "/stage-backdrop-printing-sri-lanka", label: "Stage backdrop printing", anchor: "stage backdrop" },
          { href: "/flyer-printing-sri-lanka", label: "Flyer printing Sri Lanka", anchor: "flyer" },
          { href: "/brochure-printing-sri-lanka", label: "Brochure printing", anchor: "brochure" },
          { href: "/blog/banner-design-sri-lanka", label: "Banner design Sri Lanka", anchor: "banner design" },
          { href: "/blog/billboard-advertising-sri-lanka", label: "Billboard advertising", anchor: "billboard" },
          { href: "/blog/business-branding-sri-lanka", label: "Business branding", anchor: "branding" },
          { href: "/printing-services-sri-lanka", label: "Printing services Sri Lanka", anchor: "printing services" },
          { href: "/exhibition-stall-branding-sri-lanka", label: "Exhibition stall branding", anchor: "stall branding" },
          { href: "/product-launch-event-management-sri-lanka", label: "Product launch event management", anchor: "product launch" },
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
