import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "brand-identity-design-sri-lanka",
  h1: "Brand Identity Design in Sri Lanka",
  metaTitle: "Brand Identity Design Sri Lanka — Complete Branding Package | Advertising Sri Lanka",
  metaDescription: "Complete brand identity design in Sri Lanka — logo, colours, typography, brand guidelines and stationery. Call 0771437707 for a free quote.",
  intro: "Brand identity is the full visual system that makes your business recognisable — not just a logo, but the complete set of design elements that communicate who you are, what you stand for, and why customers should trust you.",
  whatIs: "Brand identity design covers every visual touchpoint of your business: your logo, colour palette, typography, imagery style, tone of voice and design guidelines. When these elements work together consistently, they create a powerful, memorable brand.",
  whoNeeds: "Businesses launching a new brand, rebranding an existing company, or expanding into new markets need a strong brand identity. It is especially important for businesses that want to stand out in competitive Sri Lankan markets.",
  included: [
    "Logo design and variations",
    "Primary and secondary colour palette",
    "Typography selection and usage rules",
    "Brand style guide document",
    "Business card and stationery design",
    "Social media profile templates",
    "Brand usage dos and don'ts",
  ],
  cost: "Brand identity packages in Sri Lanka start from Rs 45,000 for a core identity (logo + colours + typography + guidelines). Full brand identity packages including stationery and digital assets range from Rs 80,000 to Rs 250,000.",
  faqs: [
    { q: "What is the difference between a logo and brand identity?", a: "A logo is a single mark. Brand identity is the complete visual system — logo, colours, fonts, imagery style, guidelines — that ensures your brand looks consistent everywhere." },
    { q: "How long does brand identity design take?", a: "A complete brand identity project typically takes 2–4 weeks from briefing to final delivery." },
  ],
};

export const Route = createFileRoute("/brand-identity-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});