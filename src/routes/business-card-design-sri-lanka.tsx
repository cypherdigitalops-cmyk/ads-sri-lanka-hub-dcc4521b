import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "business-card-design-sri-lanka",
  h1: "Business Card Design in Sri Lanka",
  metaTitle: "Business Card Design Sri Lanka — Professional Business Cards | Advertising Sri Lanka",
  metaDescription: "Professional business card design in Sri Lanka from Rs 3,000. Premium designs for executives, entrepreneurs and businesses. Call 0771437707.",
  intro: "A business card is often the first physical impression of your brand. A professionally designed business card signals credibility, attention to detail and professionalism — qualities that matter enormously in Sri Lankan business culture.",
  whatIs: "Business card design involves creating a compact, professionally printed card that communicates your name, title, contact details and brand. Great business cards are memorable, well-organised and print-ready.",
  whoNeeds: "Every professional in Sri Lanka benefits from a well-designed business card — executives, entrepreneurs, sales professionals, consultants, doctors, lawyers and anyone who attends meetings, networking events or conferences.",
  included: [
    "Front and back design",
    "Your logo, name, title and contact details",
    "QR code integration (optional)",
    "Print-ready files in CMYK",
    "Multiple design concepts",
    "Premium and standard size options",
  ],
  cost: "Business card design in Sri Lanka starts from Rs 3,000. Premium and luxury card designs (with foil, embossing or special finishes) range from Rs 8,000 to Rs 20,000.",
  faqs: [
    { q: "What information should a business card include?", a: "Name, job title, company name, phone number, email address and website. A logo and social media handle can also be included depending on your profession." },
    { q: "Do you provide printing as well?", a: "Yes — we offer both design and printing services. Call 0771437707 for a combined design and print quote." },
  ],
};

export const Route = createFileRoute("/business-card-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});