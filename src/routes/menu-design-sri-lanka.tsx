import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "menu-design-sri-lanka",
  h1: "Menu Design in Sri Lanka",
  metaTitle: "Menu Design Sri Lanka — Restaurant & Café Menu Design | Advertising Sri Lanka",
  metaDescription: "Professional restaurant and café menu design in Sri Lanka. Print menus and digital menus. From Rs 8,000. Call 0701772626.",
  intro: "A well-designed menu does more than list dishes — it communicates your restaurant's personality, guides customer choices and directly increases average order value. Menu design is one of the highest-ROI investments a restaurant can make.",
  whatIs: "Menu design involves creating a printed or digital document that presents your food and beverage offerings in an organised, visually appealing way. Good menu design uses psychology, hierarchy and typography to guide customers towards high-margin items.",
  whoNeeds: "Restaurants, cafés, hotels, bars, catering companies, food courts and cloud kitchens across Sri Lanka benefit from professionally designed menus — both printed menus and digital menus displayed on screens or shared via QR code.",
  included: [
    "A4 or custom size menu design",
    "Appetisers, mains, desserts and drinks sections",
    "High-quality food photography integration",
    "Sinhala, Tamil and English versions",
    "Print-ready files and digital PDF",
    "QR code menu option for contactless ordering",
  ],
  cost: "Menu design in Sri Lanka starts from Rs 8,000 for a simple single-page menu. Full multi-page restaurant menus with photography range from Rs 20,000 to Rs 60,000.",
  faqs: [
    { q: "Should I use QR code menus or printed menus?", a: "Most Sri Lankan restaurants now use both — a printed menu for dine-in and a QR code menu for digital access. We design both from the same layout." },
    { q: "Can you design menus in Sinhala and Tamil?", a: "Yes — trilingual menus in Sinhala, Tamil and English are available." },
  ],
};

export const Route = createFileRoute("/menu-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});