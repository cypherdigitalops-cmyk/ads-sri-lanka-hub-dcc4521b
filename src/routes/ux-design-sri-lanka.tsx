import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "ux-design-sri-lanka",
  h1: "UX Design in Sri Lanka",
  metaTitle: "UX Design Sri Lanka — User Experience Design | Advertising Sri Lanka",
  metaDescription: "Professional UX design services in Sri Lanka. User research, wireframes and prototypes for websites and apps. From Rs 40,000. Call 0771437707.",
  intro: "User experience design is the discipline of making digital products easy, intuitive and enjoyable to use. In Sri Lanka's growing digital economy, businesses that invest in UX design see higher conversion rates, lower bounce rates and more loyal customers.",
  whatIs: "UX design (User Experience design) involves researching how users interact with a product, identifying pain points and designing solutions that make the experience better. It includes user research, information architecture, wireframes and interactive prototypes.",
  whoNeeds: "Any business building or improving a website, app or digital platform in Sri Lanka benefits from UX design — especially e-commerce businesses, financial services, healthcare apps and government digital services.",
  included: [
    "User research and persona development",
    "Customer journey mapping",
    "Information architecture",
    "Wireframes (low and high fidelity)",
    "Interactive prototype",
    "Usability testing",
    "Design specifications for developers",
  ],
  cost: "UX design services in Sri Lanka start from Rs 40,000 for a basic audit and wireframes. Full UX research and design projects range from Rs 100,000 to Rs 400,000.",
  faqs: [
    { q: "What is the difference between UX and UI design?", a: "UX (User Experience) focuses on how a product works and feels. UI (User Interface) focuses on how it looks. Both work together for the best results." },
    { q: "Do I need UX design for a small website?", a: "Even small websites benefit from basic UX principles — clear navigation, logical page structure and fast load times all improve conversion rates." },
  ],
};

export const Route = createFileRoute("/ux-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});