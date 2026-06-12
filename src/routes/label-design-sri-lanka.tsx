import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "label-design-sri-lanka",
  h1: "Label Design in Sri Lanka",
  metaTitle: "Label Design Sri Lanka — Product Label Designer | Advertising Sri Lanka",
  metaDescription: "Professional product label design in Sri Lanka for bottles, jars, boxes and consumer goods. From Rs 8,000. Call 0771437707.",
  intro: "A product label is the face of your brand on the shelf. A professionally designed label builds trust, communicates key product information and differentiates your product from competitors at the crucial moment of purchase.",
  whatIs: "Label design involves creating the artwork for a self-adhesive or applied label on a product — bottles, jars, cans, pouches, tubes and boxes. It includes branding, product name, description, ingredients, nutritional information and regulatory compliance elements.",
  whoNeeds: "Food producers, beverage companies, cosmetics brands, pharmaceutical companies, cleaning product manufacturers, honey producers, spice brands and any consumer goods company in Sri Lanka needs professional label design.",
  included: [
    "Front and back label design",
    "Ingredient and nutritional panel layout",
    "Barcode integration",
    "Print-ready artwork for label printers",
    "3D product mockup",
    "Compliance with SLSI and Food Act requirements",
  ],
  cost: "Label design in Sri Lanka starts from Rs 8,000 for a simple product label. Premium label designs with gold foil effects or complex layouts range from Rs 20,000 to Rs 60,000.",
  faqs: [
    { q: "What information must a Sri Lankan food label include?", a: "Product name, ingredient list, net weight, manufacturer details, production and expiry date, and any required SLSI or food safety marks." },
    { q: "Can labels be designed for export products?", a: "Yes — we design labels compliant with international standards for export to the EU, Middle East, UK and other markets." },
  ],
};

export const Route = createFileRoute("/label-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});