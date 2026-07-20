import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "annual-report-design-sri-lanka",
  h1: "Annual Report Design in Sri Lanka",
  metaTitle: "Annual Report Design Sri Lanka — Corporate Annual Report Designer | Advertising Sri Lanka",
  metaDescription: "Professional annual report design in Sri Lanka for listed companies, NGOs, banks and corporates. Print-ready and digital formats. Call 0701772626 for a free quote.",
  intro: "Your annual report is the single most important document your organisation produces each year. It tells shareholders, regulators, donors and the public the story of your performance — and the way it looks shapes how that story is received.",
  whatIs: "Annual report design is the end-to-end creative work that turns your financial statements, chairman's message, sustainability data and operational highlights into a cohesive, beautifully designed publication. It covers concept, art direction, infographics, layout, typesetting of audited accounts and final print/digital delivery.",
  whoNeeds: "Listed companies on the Colombo Stock Exchange, licensed commercial banks, finance companies, insurers, plantation companies, NGOs, INGOs, government corporations and large private groups across Sri Lanka are required — or strongly expected — to publish a professional annual report each year.",
  included: [
    "Concept, theme and creative direction",
    "Cover design and chapter dividers",
    "Chairman's, CEO's and board messages layout",
    "Custom infographics for financial highlights",
    "Typesetting of audited financial statements",
    "Sustainability / GRI / integrated reporting sections",
    "Print-ready PDF for offset printing",
    "Interactive digital PDF and web-ready version",
    "Sinhala, Tamil and English versions available",
  ],
  cost: "Annual report design in Sri Lanka typically ranges from Rs 150,000 for a compact 60-page report to Rs 600,000+ for a premium integrated report for a listed conglomerate. Pricing depends on page count, infographic complexity and number of languages.",
  faqs: [
    { q: "How long does annual report design take?", a: "Typical timelines are 4–8 weeks from final content sign-off to print-ready files. We recommend starting design 2–3 months before your AGM." },
    { q: "Do you handle the printing as well?", a: "Yes — we offer end-to-end annual report printing in Sri Lanka with perfect binding, premium covers, spot UV and foil finishes." },
    { q: "Can you typeset the audited accounts?", a: "Yes — we typeset full audited financial statements, notes and schedules in your auditor's preferred format." },
    { q: "Do you design integrated and sustainability reports?", a: "Yes — we design integrated reports aligned to IIRC and sustainability reports aligned to GRI standards." },
  ],
};

export const Route = createFileRoute("/annual-report-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});