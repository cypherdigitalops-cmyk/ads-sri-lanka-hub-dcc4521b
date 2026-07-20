import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "catalog-design-sri-lanka",
  h1: "Catalog Design in Sri Lanka",
  metaTitle: "Catalog Design Sri Lanka — Product Catalogue Design | Advertising Sri Lanka",
  metaDescription: "Professional product catalog design in Sri Lanka. Showcase your range and drive sales with a premium catalogue. From Rs 20,000. Call 0701772626.",
  intro: "A professionally designed product catalog is one of the most effective sales tools for businesses with a wide range of products. It gives customers a complete view of your offering and drives purchase decisions.",
  whatIs: "Catalog design involves creating a multi-page document that systematically presents your product range — with images, descriptions, specifications and pricing. Catalogs are used in B2B sales, retail showrooms, trade exhibitions and online.",
  whoNeeds: "Manufacturers, distributors, retailers, hardware suppliers, furniture companies, clothing brands, food suppliers and construction material businesses across Sri Lanka use catalogs to present their product range to trade buyers and consumers.",
  included: [
    "Multi-page layout (from 8 pages)",
    "Product photography integration",
    "Pricing and specification tables",
    "Index and contents page",
    "Print-ready PDF and digital PDF",
    "Sinhala, Tamil and English versions available",
  ],
  cost: "Catalog design in Sri Lanka starts from Rs 20,000 for a basic 8–12 page product catalog. Premium catalogs with custom photography and complex layouts range from Rs 50,000 to Rs 150,000.",
  faqs: [
    { q: "How many products can be included in a catalog?", a: "There is no limit — catalogs are designed to your exact product count and specifications." },
    { q: "Can the catalog be published online?", a: "Yes — you receive a print-ready PDF and a digital interactive PDF suitable for your website and email." },
  ],
};

export const Route = createFileRoute("/catalog-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});