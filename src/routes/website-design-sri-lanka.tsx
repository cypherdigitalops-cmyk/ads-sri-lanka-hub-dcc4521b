import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "website-design-sri-lanka",
  h1: "Website Design in Sri Lanka",
  metaTitle: "Website Design Sri Lanka — CMS Website Design | Advertising Sri Lanka",
  metaDescription: "Professional website design in Sri Lanka. CMS websites built to convert visitors into customers. From Rs 45,000. Call 0701772626.",
  intro: "Your website is the home base every advertising channel points to. A slow, outdated or confusing website destroys the return on any media investment. A professionally designed website turns visitors into enquiries and sales.",
  whatIs: "Website design in Sri Lanka involves creating a visually appealing, mobile-responsive and conversion-optimised site built on a CMS like WordPress. It includes the full design of every page — home, about, services, contact and more.",
  whoNeeds: "Every business in Sri Lanka that wants to be found online needs a professional website — from small local businesses to large corporations. A website is essential for credibility, Google visibility and customer acquisition.",
  included: [
    "Custom design — not a template",
    "Mobile-responsive layout",
    "Up to 10 pages",
    "Contact form and WhatsApp integration",
    "Google Analytics setup",
    "Basic on-page SEO",
    "Page speed optimisation",
  ],
  cost: "Website design in Sri Lanka starts from Rs 45,000 for a basic 5-page site. Full corporate websites with custom functionality range from Rs 80,000 to Rs 300,000.",
  faqs: [
    { q: "How long does website design take?", a: "A standard 5–10 page website takes 3–6 weeks from briefing to launch." },
    { q: "Do you provide website hosting?", a: "Yes — we offer domain registration, hosting and ongoing website maintenance packages." },
    { q: "Will my website rank on Google?", a: "We build every website with on-page SEO best practices. For advanced SEO and ranking, we recommend our dedicated SEO services." },
  ],
};

export const Route = createFileRoute("/website-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});