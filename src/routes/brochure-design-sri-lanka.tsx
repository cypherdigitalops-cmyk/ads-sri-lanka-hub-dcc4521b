import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "brochure-design-sri-lanka",
  h1: "Brochure Design in Sri Lanka",
  metaTitle: "Brochure Design Sri Lanka — Professional Brochure Designer | Advertising Sri Lanka",
  metaDescription: "Professional brochure design in Sri Lanka — bi-fold, tri-fold and multi-page brochures for every industry. From Rs 8,000. Call 0771437707.",
  intro: "A professionally designed brochure is one of the most versatile marketing tools available to Sri Lankan businesses. It communicates your services, builds credibility and leaves a lasting impression with prospects.",
  whatIs: "Brochure design involves creating a folded or multi-page printed document that presents your business, products or services. Common formats include bi-fold (4 panels), tri-fold (6 panels), Z-fold and multi-page saddle-stitched booklets.",
  whoNeeds: "Hotels, schools, hospitals, real estate developers, tour operators, financial institutions and product companies across Sri Lanka use brochures as a core marketing material for exhibitions, sales visits and customer enquiries.",
  included: [
    "Bi-fold, tri-fold or custom fold options",
    "Both sides designed",
    "Professional imagery and typography",
    "Print-ready CMYK files",
    "Digital PDF version",
    "Multiple language versions available",
  ],
  cost: "Brochure design in Sri Lanka starts from Rs 8,000 for a simple tri-fold. Premium multi-page brochures with custom photography range from Rs 25,000 to Rs 75,000.",
  faqs: [
    { q: "What is the difference between a bi-fold and tri-fold brochure?", a: "A bi-fold has 4 panels (folded once). A tri-fold has 6 panels (folded twice). Tri-folds are the most common format for product and service brochures." },
    { q: "Do you provide printing as well as design?", a: "Yes — we offer end-to-end service from design to print delivery. Call 0771437707 for a combined quote." },
  ],
};

export const Route = createFileRoute("/brochure-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});