import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "poster-design-sri-lanka",
  h1: "Poster Design in Sri Lanka",
  metaTitle: "Poster Design Sri Lanka — Event Posters & Promotional Posters | Advertising Sri Lanka",
  metaDescription: "Professional poster design in Sri Lanka for events, promotions and campaigns. Print and digital formats. From Rs 5,000. Call 0771437707.",
  intro: "A poster has seconds to win attention. Strong typography, bold imagery and a clear message can pull people into an event, a sale or a campaign — both on a notice board and in a social feed.",
  whatIs: "Poster design involves creating a large-format visual communication piece — typically A1, A2 or A3 — used for public display. Posters are used at events, in retail stores, on notice boards, at bus stops and across social media as digital posters.",
  whoNeeds: "Event organisers, concert promoters, schools, universities, hospitals, shops, political campaigns and brands running awareness campaigns across Sri Lanka all use posters as a core visual communication tool.",
  included: [
    "Custom poster layout in your chosen size",
    "High-impact typography and imagery",
    "Print-ready files (A1, A2, A3 or custom)",
    "Digital version (1080x1080 or custom dimensions)",
    "Sinhala, Tamil and English versions available",
  ],
  cost: "Poster design in Sri Lanka starts from Rs 5,000 for a standard event poster. Large-format campaign posters with custom illustration or photography range from Rs 15,000 to Rs 45,000.",
  faqs: [
    { q: "What size should a poster be?", a: "A3 (297x420mm) is common for indoor display. A2 and A1 for larger spaces. Custom sizes are available for billboard and hoarding applications." },
    { q: "Can the same design be used for print and social media?", a: "Yes — we provide both print-ready and social-media-optimised versions with the same design." },
  ],
};

export const Route = createFileRoute("/poster-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});