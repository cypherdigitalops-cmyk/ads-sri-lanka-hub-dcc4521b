import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "printing-services-sri-lanka")!;
const TITLE = "Roll Up Banner Printing Sri Lanka — From Rs 4,500";
const DESC = "Roll up banner printing in Sri Lanka from Rs 4,500 with stand. 85×200cm standard, 24-hour express, islandwide delivery. Call 0771437707 for a free quote.";

export const Route = createFileRoute("/roll-up-banner-printing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "roll up banner printing sri lanka, printing services sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/roll-up-banner-printing-sri-lanka` }],
  }),
  component: () => (
    <PageShell>
      <ServicePageTemplate
        category={CAT}
        keyword="roll up banner printing sri lanka"
        extraLinks={[
          { href: "/x-banner-printing-sri-lanka", label: "X banner printing", anchor: "X banner" },
          { href: "/trade-show-banner-printing-sri-lanka", label: "Trade show banner printing", anchor: "trade show" },
          { href: "/exhibition-banner-printing-sri-lanka", label: "Exhibition banner printing", anchor: "exhibition" },
          { href: "/backdrop-printing-sri-lanka", label: "Backdrop printing", anchor: "backdrop" },
          { href: "/flyer-printing-sri-lanka", label: "Flyer printing Sri Lanka", anchor: "flyer" },
          { href: "/brochure-printing-sri-lanka", label: "Brochure printing", anchor: "brochure" },
          { href: "/blog/banner-design-sri-lanka", label: "Banner design Sri Lanka", anchor: "banner design" },
          { href: "/blog/business-branding-sri-lanka", label: "Business branding", anchor: "branding" },
          { href: "/blog/billboard-advertising-sri-lanka", label: "Billboard advertising", anchor: "billboard" },
          { href: "/product-launch-event-management-sri-lanka", label: "Product launch event management", anchor: "product launch" },
          { href: "/blog/corporate-event-management-sri-lanka-guide", label: "Corporate event management guide", anchor: "corporate events" },
          { href: "/exhibition-stall-branding-sri-lanka", label: "Exhibition stall branding", anchor: "trade fair" },
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
