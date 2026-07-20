import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "web-banner-design-sri-lanka",
  h1: "Web Banner Design in Sri Lanka",
  metaTitle: "Web Banner Design Sri Lanka — Display Ad & Banner Design | Advertising Sri Lanka",
  metaDescription: "Professional web banner and display ad design in Sri Lanka. Google Display ads, website banners and digital advertising graphics. From Rs 5,000. Call 0701772626.",
  intro: "Web banners and display ads are the visual face of your digital advertising. A professionally designed banner communicates your offer clearly, reinforces your brand and drives clicks — in a fraction of a second of viewer attention.",
  whatIs: "Web banner design involves creating digital advertising graphics in standard IAB sizes for display advertising networks (Google Display Network), website banners and digital out-of-home screens. Each banner must communicate quickly and clearly.",
  whoNeeds: "Businesses running Google Display campaigns, e-commerce brands, hotels, real estate developers and any company advertising online in Sri Lanka needs professionally designed web banners and display ads.",
  included: [
    "All standard Google Display sizes (300x250, 728x90, 160x600, 320x50 and more)",
    "Animated HTML5 banners available",
    "Static JPEG and PNG formats",
    "Consistent design across all sizes",
    "Multiple message variants for A/B testing",
  ],
  cost: "Web banner design in Sri Lanka starts from Rs 5,000 for a set of standard sizes. Animated HTML5 banner sets range from Rs 15,000 to Rs 45,000.",
  faqs: [
    { q: "What are the most important banner sizes for Google Display?", a: "The top performers are 300x250 (medium rectangle), 728x90 (leaderboard) and 320x50 (mobile banner). We design all three as a standard set." },
    { q: "Can you design animated banners?", a: "Yes — we design HTML5 animated banners compatible with Google Display Network specifications." },
  ],
};

export const Route = createFileRoute("/web-banner-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});