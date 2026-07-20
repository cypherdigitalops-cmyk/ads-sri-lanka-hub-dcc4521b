import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "signage-design-sri-lanka",
  h1: "Signage Design in Sri Lanka",
  metaTitle: "Signage Design Sri Lanka — Shop Signs, Office Signs & Event Signage | Advertising Sri Lanka",
  metaDescription: "Professional signage design in Sri Lanka for shops, offices, events and outdoor displays. From Rs 5,000. Call 0701772626.",
  intro: "Good signage works 24 hours a day, silently selling your brand to every person who passes by. From a single shopfront sign to a full wayfinding system, the design quality decides whether visitors stop, enter or walk past.",
  whatIs: "Signage design involves creating visual artwork for physical signs — shopfront signs, LED signboards, wayfinding signs, office directories, event banners, trade show displays and directional signs. Design must account for viewing distance, lighting conditions and fabrication methods.",
  whoNeeds: "Retail shops, restaurants, hotels, hospitals, schools, banks, offices, event venues and trade show exhibitors across Sri Lanka need professional signage design for both indoor and outdoor applications.",
  included: [
    "Shopfront and fascia sign design",
    "LED signboard artwork",
    "Wayfinding and directional signs",
    "Office interior signage",
    "Event and exhibition signage",
    "Print-ready files for fabricators",
    "Sinhala, Tamil and English options",
  ],
  cost: "Signage design in Sri Lanka starts from Rs 5,000 for a simple shopfront sign. Complex wayfinding systems and trade show displays range from Rs 25,000 to Rs 120,000.",
  faqs: [
    { q: "Do you work with signage fabricators in Sri Lanka?", a: "Yes — we provide print-ready files compatible with all major signage fabricators and LED signboard manufacturers in Sri Lanka." },
    { q: "Can you design LED signboard graphics?", a: "Yes — we design static and scrolling graphics for LED signboards in the appropriate pixel dimensions and file formats." },
  ],
};

export const Route = createFileRoute("/signage-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});