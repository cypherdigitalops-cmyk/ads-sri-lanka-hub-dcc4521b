import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "stationery-design-sri-lanka",
  h1: "Stationery Design in Sri Lanka",
  metaTitle: "Stationery Design Sri Lanka — Corporate Stationery & Letterhead Design | Advertising Sri Lanka",
  metaDescription: "Professional corporate stationery design in Sri Lanka — letterheads, envelopes, folders and branded office materials. Call 0771437707.",
  intro: "Branded stationery is a quiet but powerful brand signal. A consistent letterhead, envelope and compliment slip set communicates that your business is established, organised and serious about its identity.",
  whatIs: "Corporate stationery design covers all branded printed materials used in day-to-day business: letterheads, compliment slips, envelopes, notepads, presentation folders, invoice templates and with-compliments cards.",
  whoNeeds: "Companies of all sizes in Sri Lanka need branded stationery — from small businesses sending quotations and invoices, to large corporations producing annual reports and board presentations.",
  included: [
    "Letterhead design (A4)",
    "Compliment slip design",
    "Envelope design (DL and C4)",
    "Presentation folder design",
    "Notepad design",
    "Invoice and quotation template",
    "Print-ready files for all items",
  ],
  cost: "Corporate stationery design packages in Sri Lanka start from Rs 15,000 for a basic set (letterhead + envelope + compliment slip). Full stationery suites range from Rs 35,000 to Rs 80,000.",
  faqs: [
    { q: "What is included in a stationery design package?", a: "A standard package includes letterhead, envelope, compliment slip and business card. Additional items like folders and notepads can be added." },
    { q: "Can stationery be designed in Sinhala and English?", a: "Yes — bilingual and trilingual stationery in Sinhala, Tamil and English is a standard service." },
  ],
};

export const Route = createFileRoute("/stationery-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});