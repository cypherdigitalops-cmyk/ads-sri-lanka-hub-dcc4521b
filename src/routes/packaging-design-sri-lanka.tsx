import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "packaging-design-sri-lanka",
  h1: "Packaging Design in Sri Lanka",
  metaTitle: "Packaging Design Sri Lanka — Product Packaging Designer | Advertising Sri Lanka",
  metaDescription: "Professional product packaging design in Sri Lanka. Stand out on shelf and build brand trust. From Rs 20,000. Call 0771437707.",
  intro: "Packaging is often the final touchpoint between your brand and the customer. Great packaging design wins the shelf battle, communicates quality and earns repeat purchases — bad packaging quietly loses sales.",
  whatIs: "Packaging design involves creating the visual design for your product's outer packaging — boxes, bags, pouches, wrappers, cartons and containers. It includes structural layout, branding, product information, ingredient lists and barcode placement.",
  whoNeeds: "Food and beverage companies, cosmetics brands, pharmaceutical companies, household product manufacturers, clothing brands and gift companies across Sri Lanka need professional packaging design to compete in retail.",
  included: [
    "3D packaging visualisation",
    "Dieline and print-ready artwork",
    "Logo and brand integration",
    "Ingredient, nutrition and regulatory information layout",
    "Barcode and QR code integration",
    "Sinhala, Tamil and English labelling",
  ],
  cost: "Packaging design in Sri Lanka starts from Rs 20,000 for a simple box or pouch design. Complex multi-variant packaging ranges from Rs 50,000 to Rs 200,000.",
  faqs: [
    { q: "Do you provide the structural design (dieline) as well?", a: "Yes — we provide the complete dieline and print-ready artwork for your chosen packaging format." },
    { q: "Does packaging design need to follow Sri Lankan regulations?", a: "Yes — food and pharmaceutical packaging must comply with Sri Lanka Standards Institution (SLSI) and Food Act requirements. We design in compliance with these regulations." },
  ],
};

export const Route = createFileRoute("/packaging-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});