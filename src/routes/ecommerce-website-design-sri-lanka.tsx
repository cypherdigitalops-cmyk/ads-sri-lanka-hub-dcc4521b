import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "ecommerce-website-design-sri-lanka",
  h1: "E-commerce Website Design in Sri Lanka",
  metaTitle: "E-commerce Website Design Sri Lanka — Online Store Design | Advertising Sri Lanka",
  metaDescription: "Professional e-commerce website design in Sri Lanka. Online stores built to sell — fast, mobile and conversion-ready. From Rs 80,000. Call 0771437707.",
  intro: "An e-commerce website is the engine of any online business in Sri Lanka. A professionally designed online store builds trust, simplifies the buying process and converts visitors into paying customers around the clock.",
  whatIs: "E-commerce website design involves building a fully functional online store where customers can browse products, add to cart, pay and receive order confirmations. In Sri Lanka, this includes integration with local payment gateways like PayHere, Genie and bank transfers.",
  whoNeeds: "Retailers, fashion brands, food companies, electronics sellers, gifting businesses and any product-based business in Sri Lanka wanting to sell online needs a professionally designed e-commerce website.",
  included: [
    "Custom e-commerce design",
    "Product listing and category pages",
    "Shopping cart and checkout",
    "Sri Lankan payment gateway integration (PayHere, iPay, bank transfer)",
    "Mobile-optimised for smartphone shoppers",
    "Order management system",
    "Inventory management",
  ],
  cost: "E-commerce website design in Sri Lanka starts from Rs 80,000 for a basic WooCommerce store. Full custom e-commerce platforms range from Rs 150,000 to Rs 500,000.",
  faqs: [
    { q: "Which payment gateways work in Sri Lanka?", a: "PayHere, iPay, Genie and direct bank transfer are the most commonly used. We integrate all major Sri Lankan payment gateways." },
    { q: "Can I manage the store myself after launch?", a: "Yes — we provide full training on managing your products, orders and customers through the CMS dashboard." },
  ],
};

export const Route = createFileRoute("/ecommerce-website-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});