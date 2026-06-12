import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "email-design-sri-lanka",
  h1: "Email Design in Sri Lanka",
  metaTitle: "Email Design Sri Lanka — Email Template & Newsletter Design | Advertising Sri Lanka",
  metaDescription: "Professional email template and newsletter design in Sri Lanka. Branded emails that get opened and clicked. From Rs 8,000. Call 0771437707.",
  intro: "A professionally designed email template builds brand trust in every inbox. With email marketing delivering the highest ROI of any digital channel — typically Rs 30–50 in revenue per Rs 1 spent — email design is one of the best investments a Sri Lankan business can make.",
  whatIs: "Email design involves creating HTML email templates for newsletters, promotional emails, welcome sequences, order confirmations and transactional emails. Good email design is mobile-responsive, loads quickly and guides the reader towards a clear call to action.",
  whoNeeds: "Businesses with email lists, e-commerce stores, hotels, schools, banks, insurance companies and any organisation using email marketing in Sri Lanka needs professional email template design.",
  included: [
    "Custom branded email template",
    "Mobile-responsive HTML code",
    "Header, body and footer design",
    "CTA button design",
    "Compatible with Mailchimp, Sendinblue and major ESP platforms",
    "Plain text version included",
  ],
  cost: "Email template design in Sri Lanka starts from Rs 8,000 for a single reusable template. Newsletter series and automation sequence designs range from Rs 25,000 to Rs 80,000.",
  faqs: [
    { q: "Which email platforms do you design for?", a: "Mailchimp, Klaviyo, Sendinblue, ActiveCampaign, HubSpot and custom HTML for any ESP." },
    { q: "Will the email look good on mobile?", a: "Yes — every email template we design is fully mobile-responsive and tested across major email clients." },
  ],
};

export const Route = createFileRoute("/email-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});