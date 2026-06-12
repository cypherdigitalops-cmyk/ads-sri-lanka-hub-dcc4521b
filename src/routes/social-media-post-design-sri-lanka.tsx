import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "social-media-post-design-sri-lanka",
  h1: "Social Media Post Design in Sri Lanka",
  metaTitle: "Social Media Post Design Sri Lanka — Facebook, Instagram & TikTok Graphics | Advertising Sri Lanka",
  metaDescription: "Professional social media post design in Sri Lanka for Facebook, Instagram, TikTok and LinkedIn. From Rs 5,000/month. Call 0771437707.",
  intro: "Sri Lankan audiences scroll fast. Branded, well-designed social media posts stop the scroll, build recognition and turn casual followers into loyal customers — across Facebook, Instagram, TikTok and LinkedIn.",
  whatIs: "Social media post design involves creating visual graphics specifically sized and designed for each platform — square posts, portrait stories, horizontal banners and animated GIFs. Each graphic communicates a message clearly while maintaining brand consistency.",
  whoNeeds: "Every business in Sri Lanka with a social media presence benefits from professional post design — restaurants, retail shops, schools, clinics, banks, hotels, real estate companies and any brand active on Facebook or Instagram.",
  included: [
    "Platform-specific sizes (Facebook, Instagram, TikTok, LinkedIn)",
    "Branded templates for consistency",
    "Promotional, product and informational post designs",
    "Story and reel cover designs",
    "Sinhala, Tamil and English versions",
    "Editable Canva or Adobe templates",
  ],
  cost: "Social media post design in Sri Lanka starts from Rs 5,000 for a pack of 5 posts. Monthly retainer packages range from Rs 15,000 to Rs 60,000 depending on volume and platforms.",
  faqs: [
    { q: "How many posts do I need per month?", a: "Most Sri Lankan businesses post 3–5 times per week on Facebook and Instagram. We offer packages from 12 to 60 posts per month." },
    { q: "Do you create animated posts and reels covers?", a: "Yes — we design static posts, animated GIFs and video thumbnail covers for reels and TikTok." },
  ],
};

export const Route = createFileRoute("/social-media-post-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});