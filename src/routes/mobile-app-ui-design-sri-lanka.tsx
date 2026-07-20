import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "mobile-app-ui-design-sri-lanka",
  h1: "Mobile App UI Design in Sri Lanka",
  metaTitle: "Mobile App UI Design Sri Lanka — App Interface Design | Advertising Sri Lanka",
  metaDescription: "Professional mobile app UI design in Sri Lanka for iOS and Android. Intuitive interfaces that users love. From Rs 60,000. Call 0701772626.",
  intro: "A great mobile app starts with a great interface. Clean layouts, clear navigation and tappable, accessible controls are what make users open your app every day instead of uninstalling it after a week.",
  whatIs: "Mobile app UI design involves creating the complete visual interface for a mobile application — all screens, navigation, buttons, icons and interactions. It covers both iOS and Android design guidelines and produces pixel-perfect files ready for development.",
  whoNeeds: "Startups, established businesses, banks, hospitals, delivery services, e-commerce brands and any organisation developing a mobile app in Sri Lanka needs professional UI design before beginning development.",
  included: [
    "Complete screen designs for all app states",
    "iOS and Android design specifications",
    "Navigation and interaction design",
    "Icon and illustration design",
    "Clickable prototype for testing",
    "Developer-ready design files (Figma or Zeplin)",
  ],
  cost: "Mobile app UI design in Sri Lanka starts from Rs 60,000 for a basic 10–15 screen app. Complex multi-feature apps range from Rs 150,000 to Rs 500,000.",
  faqs: [
    { q: "Do you do UX research before UI design?", a: "Yes — we offer full UX research and wireframing as part of our design process before moving to visual UI design." },
    { q: "What design tools do you use?", a: "We use Figma as our primary tool, which allows easy handoff to developers and clickable prototypes for testing." },
  ],
};

export const Route = createFileRoute("/mobile-app-ui-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});