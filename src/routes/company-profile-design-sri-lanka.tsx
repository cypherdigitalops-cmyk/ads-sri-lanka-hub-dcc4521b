import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "company-profile-design-sri-lanka",
  h1: "Company Profile Design in Sri Lanka",
  metaTitle: "Company Profile Design Sri Lanka — Corporate Profile & Brochure | Advertising Sri Lanka",
  metaDescription: "Professional company profile design in Sri Lanka. Impress clients with a premium corporate profile. From Rs 25,000. Call 0771437707.",
  intro: "A well-designed company profile is one of the most powerful sales tools a Sri Lankan business can have. It tells your story, showcases your services and builds credibility with prospects, investors and partners.",
  whatIs: "Company profile design is the creation of a professionally designed document — printed or digital — that presents your business, its history, services, team, clients and achievements. It is used in sales meetings, tenders, exhibitions and investor presentations.",
  whoNeeds: "Every serious business in Sri Lanka needs a company profile — manufacturing companies, construction firms, IT companies, hotels, hospitals, schools, consultancies and NGOs all use company profiles to win clients and tenders.",
  included: [
    "Custom layout and design",
    "Up to 20 pages",
    "Professional typography and imagery",
    "Infographics and data visualisation",
    "Print-ready PDF and digital PDF versions",
    "Sinhala, Tamil and English versions available",
  ],
  cost: "Company profile design in Sri Lanka starts from Rs 25,000 for a basic 8–12 page profile. Premium multi-language profiles with custom photography and infographics range from Rs 60,000 to Rs 150,000.",
  faqs: [
    { q: "How long does a company profile design take?", a: "Typically 7–14 working days depending on the complexity and number of pages." },
    { q: "Do you write the content for the company profile?", a: "Yes — we offer copywriting and content development as part of premium packages." },
    { q: "Can the profile be used digitally and in print?", a: "Yes — you receive both a print-ready PDF and a digital interactive PDF version." },
  ],
};

export const Route = createFileRoute("/company-profile-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});
