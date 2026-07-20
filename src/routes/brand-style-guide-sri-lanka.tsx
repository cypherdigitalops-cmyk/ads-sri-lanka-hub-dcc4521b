import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "brand-style-guide-sri-lanka",
  h1: "Brand Style Guide Design in Sri Lanka",
  metaTitle: "Brand Style Guide Sri Lanka — Brand Guidelines Design | Advertising Sri Lanka",
  metaDescription: "Professional brand style guide design in Sri Lanka. Ensure your brand looks consistent across every channel. Call 0701772626 for a free quote.",
  intro: "A brand style guide is your brand's rulebook — the definitive document that tells everyone how your brand should look, sound and feel. Without one, your brand risks appearing inconsistent and unprofessional across different channels.",
  whatIs: "A brand style guide (also called brand guidelines or a brand manual) documents every visual and verbal rule for your brand. It covers logo usage, colour codes, typography, imagery rules, tone of voice and examples of correct and incorrect usage.",
  whoNeeds: "Any business with more than one person producing content — marketing teams, agencies, printers, designers — needs a brand style guide. It ensures your brand looks identical whether it appears on a billboard in Colombo or a social media post.",
  included: [
    "Logo usage rules and clear space",
    "Primary and secondary colour palette with Pantone, CMYK, RGB and HEX codes",
    "Typography hierarchy and font usage",
    "Imagery and photography guidelines",
    "Tone of voice and messaging guidelines",
    "Correct and incorrect usage examples",
    "Digital and print specifications",
  ],
  cost: "Brand style guide design in Sri Lanka starts from Rs 25,000 for a core guidelines document. Comprehensive brand manuals for large organisations range from Rs 60,000 to Rs 150,000.",
  faqs: [
    { q: "Why do I need a brand style guide?", a: "Without a style guide, different designers, printers and agencies will interpret your brand differently. A style guide ensures consistency across every channel and touchpoint." },
    { q: "What format is the style guide delivered in?", a: "You receive a professionally designed PDF brand manual plus editable source files." },
  ],
};

export const Route = createFileRoute("/brand-style-guide-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});