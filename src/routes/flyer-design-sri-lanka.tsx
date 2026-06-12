import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "flyer-design-sri-lanka",
  h1: "Flyer Design in Sri Lanka",
  metaTitle: "Flyer Design Sri Lanka — Professional Flyer & Leaflet Design | Advertising Sri Lanka",
  metaDescription: "Professional flyer and leaflet design in Sri Lanka from Rs 3,500. Event flyers, promotion flyers and product leaflets. Call 0771437707.",
  intro: "A well-designed flyer grabs attention in seconds. Whether promoting an event, a sale, a new product or a service, a professional flyer design ensures your message is clear, compelling and on-brand.",
  whatIs: "Flyer design is the creation of a single-page promotional document — typically A4, A5 or A6 — used to announce events, promotions, new products or services. Flyers are distributed by hand, posted on notice boards, sent digitally or used in direct mail.",
  whoNeeds: "Restaurants, schools, clinics, shops, event organisers, religious organisations and businesses running promotions across Sri Lanka use flyers as a fast, affordable and effective marketing tool.",
  included: [
    "Single-page design (A4, A5 or A6)",
    "Front and back design available",
    "Eye-catching layout and typography",
    "Print-ready CMYK files",
    "Digital version for WhatsApp and social media sharing",
  ],
  cost: "Flyer design in Sri Lanka starts from Rs 3,500 for a single-page design. Premium double-sided flyers with photography and illustration start from Rs 7,000.",
  faqs: [
    { q: "How quickly can a flyer be designed?", a: "Simple flyers can be delivered within 24 hours. Complex flyers with custom photography or illustration take 2–3 working days." },
    { q: "Can the flyer be shared on WhatsApp and social media?", a: "Yes — you receive both a print-ready PDF and a web-optimised JPEG or PNG for digital sharing." },
  ],
};

export const Route = createFileRoute("/flyer-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});