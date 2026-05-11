export const SITE = {
  name: "Advertising Sri Lanka",
  domain: "advertisingsrilanka.lk",
  url: "https://advertisingsrilanka.lk",
  phone: "0771437707",
  phoneIntl: "+94771437707",
  whatsapp: "https://wa.me/94771437707",
  email: "info@advertisingsrilanka.lk",
  tagline: "Sri Lanka's #1 Advertising Solutions Hub",
};

export type ServicePage = { slug: string; keyword: string };
export type BlogPage = { slug: string; keyword: string };

export type Category = {
  slug: string;
  hubKeyword: string;
  title: string;
  short: string;
  intro: string;
  icon?: string;
  services: ServicePage[];
  blog: BlogPage[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "event-management-sri-lanka",
    hubKeyword: "event management sri lanka",
    title: "Event Management",
    short:
      "End-to-end event management — corporate events, weddings, exhibitions, conferences, brand activations and stage production.",
    intro:
      "Plan and execute unforgettable events anywhere in Sri Lanka. From corporate functions and conferences to weddings, exhibitions and brand activations — we manage venues, stage setup, LED screens, sound, lighting, hosts and on-ground logistics under one team.",
    icon: "PartyPopper",
    services: [
      { slug: "event-planners-sri-lanka", keyword: "event planners sri lanka" },
      { slug: "corporate-event-management-sri-lanka", keyword: "corporate event management sri lanka" },
      { slug: "wedding-planners-sri-lanka", keyword: "wedding planners sri lanka" },
      { slug: "exhibition-management-sri-lanka", keyword: "exhibition management sri lanka" },
      { slug: "conference-management-sri-lanka", keyword: "conference management sri lanka" },
      { slug: "event-marketing-sri-lanka", keyword: "event marketing sri lanka" },
      { slug: "brand-activation-sri-lanka", keyword: "brand activation sri lanka" },
      { slug: "stage-setup-sri-lanka", keyword: "stage setup sri lanka" },
      { slug: "led-screen-rental-sri-lanka", keyword: "led screen rental sri lanka" },
      { slug: "sound-system-rental-sri-lanka", keyword: "sound system rental sri lanka" },
      { slug: "projector-rental-sri-lanka", keyword: "projector rental sri lanka" },
      { slug: "stage-rental-sri-lanka", keyword: "stage rental sri lanka" },
      { slug: "table-chair-rental-sri-lanka", keyword: "table and chair rental sri lanka" },
      { slug: "generator-rental-sri-lanka", keyword: "generator rental sri lanka" },
      { slug: "tent-marquee-rental-sri-lanka", keyword: "tent and marquee rental sri lanka" },
      { slug: "photo-booth-rental-sri-lanka", keyword: "photo booth rental sri lanka" },
      { slug: "drone-rental-sri-lanka", keyword: "drone rental sri lanka" },
      { slug: "bouncy-castle-rental-sri-lanka", keyword: "bouncy castle rental sri lanka" },
    ],
    blog: [],
  },
  {
    slug: "atl-advertising-sri-lanka",
    hubKeyword: "atl advertising sri lanka",
    title: "ATL Advertising",
    short: "Above-the-line mass-media advertising across TV, radio, press and cinema.",
    intro:
      "Reach millions of Sri Lankan consumers through trusted mass-media channels. We plan, buy and execute high-impact ATL campaigns on television, radio, newspapers, magazines and cinema with measurable brand lift.",
    icon: "Tv",
    services: [
      { slug: "tv-advertising-sri-lanka", keyword: "tv advertising sri lanka" },
      { slug: "radio-advertising-sri-lanka", keyword: "radio advertising sri lanka" },
      { slug: "newspaper-advertising-sri-lanka", keyword: "newspaper advertising sri lanka" },
      { slug: "magazine-advertising-sri-lanka", keyword: "magazine advertising sri lanka" },
      { slug: "cinema-advertising-sri-lanka", keyword: "cinema advertising sri lanka" },
      { slug: "media-buying-sri-lanka", keyword: "media buying sri lanka" },
      { slug: "media-planning-sri-lanka", keyword: "media planning sri lanka" },
    ],
    blog: [
      { slug: "atl-advertising-sri-lanka", keyword: "atl advertising sri lanka" },
      { slug: "above-the-line-advertising-sri-lanka", keyword: "above the line advertising sri lanka" },
      { slug: "traditional-advertising-sri-lanka", keyword: "traditional advertising sri lanka" },
      { slug: "mass-media-advertising-sri-lanka", keyword: "mass media advertising sri lanka" },
      { slug: "television-commercials-sri-lanka", keyword: "television commercials sri lanka" },
      { slug: "print-media-advertising-sri-lanka", keyword: "print media advertising sri lanka" },
      { slug: "brand-awareness-campaigns-sri-lanka", keyword: "brand awareness campaigns sri lanka" },
      { slug: "national-advertising-campaigns-sri-lanka", keyword: "national advertising campaigns sri lanka" },
      { slug: "corporate-advertising-sri-lanka", keyword: "corporate advertising sri lanka" },
    ],
  },
  {
    slug: "btl-advertising-sri-lanka",
    hubKeyword: "btl advertising sri lanka",
    title: "BTL Advertising",
    short: "Below-the-line activations, field marketing and on-ground promotions.",
    intro:
      "Drive direct consumer engagement with high-impact BTL campaigns — brand activations, mall events, roadshows, sampling, retail branding and field marketing across all 25 districts of Sri Lanka.",
    icon: "Megaphone",
    services: [
      { slug: "brand-activation-sri-lanka", keyword: "brand activation sri lanka" },
      { slug: "event-marketing-sri-lanka", keyword: "event marketing sri lanka" },
      { slug: "mall-activation-sri-lanka", keyword: "mall activation sri lanka" },
      { slug: "roadshow-marketing-sri-lanka", keyword: "roadshow marketing sri lanka" },
      { slug: "shop-branding-sri-lanka", keyword: "shop branding sri lanka" },
      { slug: "exhibition-branding-sri-lanka", keyword: "exhibition branding sri lanka" },
      { slug: "field-marketing-sri-lanka", keyword: "field marketing sri lanka" },
      { slug: "point-of-sale-advertising-sri-lanka", keyword: "point of sale advertising sri lanka" },
      { slug: "retail-branding-sri-lanka", keyword: "retail branding sri lanka" },
      { slug: "loyalty-programs-sri-lanka", keyword: "loyalty programs sri lanka" },
    ],
    blog: [
      { slug: "btl-advertising-sri-lanka", keyword: "btl advertising sri lanka" },
      { slug: "below-the-line-advertising-sri-lanka", keyword: "below the line advertising sri lanka" },
      { slug: "activation-marketing-sri-lanka", keyword: "activation marketing sri lanka" },
      { slug: "event-promotion-sri-lanka", keyword: "event promotion sri lanka" },
      { slug: "sampling-campaigns-sri-lanka", keyword: "sampling campaigns sri lanka" },
      { slug: "product-promotion-sri-lanka", keyword: "product promotion sri lanka" },
      { slug: "trade-marketing-sri-lanka", keyword: "trade marketing sri lanka" },
      { slug: "pos-branding-sri-lanka", keyword: "POS branding sri lanka" },
      { slug: "in-store-branding-sri-lanka", keyword: "in store branding sri lanka" },
      { slug: "leaflet-distribution-sri-lanka", keyword: "leaflet distribution sri lanka" },
      { slug: "flyer-distribution-sri-lanka", keyword: "flyer distribution sri lanka" },
      { slug: "door-to-door-marketing-sri-lanka", keyword: "door to door marketing sri lanka" },
      { slug: "merchandising-sri-lanka", keyword: "merchandising sri lanka" },
      { slug: "stall-branding-sri-lanka", keyword: "stall branding sri lanka" },
      { slug: "consumer-promotions-sri-lanka", keyword: "consumer promotions sri lanka" },
      { slug: "ground-activation-sri-lanka", keyword: "ground activation sri lanka" },
    ],
  },
  {
    slug: "ttl-advertising-sri-lanka",
    hubKeyword: "ttl advertising sri lanka",
    title: "TTL & Integrated Marketing",
    short: "Through-the-line, 360° and omnichannel campaigns that connect every touchpoint.",
    intro:
      "Combine ATL reach with BTL precision through fully integrated 360° campaigns. We orchestrate consistent brand stories across TV, radio, digital, social, outdoor and on-ground — all measured under one strategy.",
    icon: "Layers",
    services: [
      { slug: "integrated-marketing-sri-lanka", keyword: "integrated marketing sri lanka" },
      { slug: "360-marketing-campaigns-sri-lanka", keyword: "360 marketing campaigns sri lanka" },
      { slug: "omnichannel-marketing-sri-lanka", keyword: "omnichannel marketing sri lanka" },
      { slug: "multi-channel-advertising-sri-lanka", keyword: "multi channel advertising sri lanka" },
      { slug: "full-service-advertising-sri-lanka", keyword: "full service advertising sri lanka" },
      { slug: "brand-communication-sri-lanka", keyword: "brand communication sri lanka" },
    ],
    blog: [
      { slug: "ttl-advertising-sri-lanka", keyword: "ttl advertising sri lanka" },
      { slug: "through-the-line-advertising-sri-lanka", keyword: "through the line advertising sri lanka" },
      { slug: "360-advertising-sri-lanka", keyword: "360 advertising sri lanka" },
      { slug: "integrated-advertising-sri-lanka", keyword: "integrated advertising sri lanka" },
      { slug: "cross-platform-marketing-sri-lanka", keyword: "cross platform marketing sri lanka" },
      { slug: "strategic-marketing-sri-lanka", keyword: "strategic marketing sri lanka" },
      { slug: "atl-btl-ttl-advertising-sri-lanka", keyword: "atl btl ttl advertising sri lanka" },
    ],
  },
  {
    slug: "digital-marketing-sri-lanka",
    hubKeyword: "digital marketing sri lanka",
    title: "Digital Marketing",
    short: "Performance-driven Google, Meta, TikTok and programmatic campaigns.",
    intro:
      "Generate leads, sales and growth with full-funnel digital marketing — Google Ads, Facebook, Instagram, TikTok, YouTube, LinkedIn, programmatic and remarketing — all tracked end-to-end with transparent reporting.",
    icon: "MousePointerClick",
    services: [
      { slug: "google-ads-sri-lanka", keyword: "google ads sri lanka" },
      { slug: "facebook-marketing-sri-lanka", keyword: "facebook marketing sri lanka" },
      { slug: "instagram-marketing-sri-lanka", keyword: "instagram marketing sri lanka" },
      { slug: "tiktok-marketing-sri-lanka", keyword: "tiktok marketing sri lanka" },
      { slug: "linkedin-marketing-sri-lanka", keyword: "linkedin marketing sri lanka" },
      { slug: "youtube-marketing-sri-lanka", keyword: "youtube marketing sri lanka" },
      { slug: "ppc-sri-lanka", keyword: "PPC sri lanka" },
      { slug: "display-advertising-sri-lanka", keyword: "display advertising sri lanka" },
      { slug: "remarketing-sri-lanka", keyword: "remarketing sri lanka" },
      { slug: "programmatic-advertising-sri-lanka", keyword: "programmatic advertising sri lanka" },
      { slug: "lead-generation-sri-lanka", keyword: "lead generation sri lanka" },
      { slug: "performance-marketing-sri-lanka", keyword: "performance marketing sri lanka" },
      { slug: "linkedin-ads-sri-lanka", keyword: "linkedin ads sri lanka" },
      { slug: "google-shopping-sri-lanka", keyword: "google shopping sri lanka" },
      { slug: "content-marketing-sri-lanka", keyword: "content marketing sri lanka" },
      { slug: "reputation-management-sri-lanka", keyword: "reputation management sri lanka" },
    ],
    blog: [
      { slug: "digital-marketing-sri-lanka", keyword: "digital marketing sri lanka" },
      { slug: "online-marketing-sri-lanka", keyword: "online marketing sri lanka" },
      { slug: "internet-marketing-sri-lanka", keyword: "internet marketing sri lanka" },
      { slug: "digital-advertising-sri-lanka", keyword: "digital advertising sri lanka" },
      { slug: "social-media-advertising-sri-lanka", keyword: "social media advertising sri lanka" },
      { slug: "facebook-advertising-sri-lanka", keyword: "facebook advertising sri lanka" },
      { slug: "instagram-advertising-sri-lanka", keyword: "instagram advertising sri lanka" },
      { slug: "tiktok-advertising-sri-lanka", keyword: "tiktok advertising sri lanka" },
      { slug: "google-advertising-sri-lanka", keyword: "google advertising sri lanka" },
      { slug: "search-engine-marketing-sri-lanka", keyword: "search engine marketing sri lanka" },
      { slug: "sem-sri-lanka", keyword: "SEM sri lanka" },
      { slug: "pay-per-click-sri-lanka", keyword: "pay per click sri lanka" },
      { slug: "retargeting-sri-lanka", keyword: "retargeting sri lanka" },
      { slug: "conversion-marketing-sri-lanka", keyword: "conversion marketing sri lanka" },
      { slug: "digital-campaign-management-sri-lanka", keyword: "digital campaign management sri lanka" },
    ],
  },
  {
    slug: "seo-services-sri-lanka",
    hubKeyword: "seo services sri lanka",
    title: "SEO Services",
    short: "Rank #1 on Google with proven on-page, off-page and technical SEO.",
    intro:
      "Win organic traffic that converts. Our SEO team delivers keyword research, technical audits, on-page optimisation, content strategy, link building and local SEO for Sri Lankan businesses targeting both local and global keywords.",
    icon: "Search",
    services: [
      { slug: "local-seo-sri-lanka", keyword: "local seo sri lanka" },
      { slug: "technical-seo-sri-lanka", keyword: "technical seo sri lanka" },
      { slug: "ecommerce-seo-sri-lanka", keyword: "ecommerce seo sri lanka" },
      { slug: "content-marketing-sri-lanka", keyword: "content marketing sri lanka" },
      { slug: "backlink-services-sri-lanka", keyword: "backlink services sri lanka" },
      { slug: "seo-company-sri-lanka", keyword: "seo company sri lanka" },
    ],
    blog: [
      { slug: "seo-sri-lanka", keyword: "seo sri lanka" },
      { slug: "seo-agency-sri-lanka", keyword: "seo agency sri lanka" },
      { slug: "search-engine-optimization-sri-lanka", keyword: "search engine optimization sri lanka" },
      { slug: "website-ranking-sri-lanka", keyword: "website ranking sri lanka" },
      { slug: "google-ranking-sri-lanka", keyword: "google ranking sri lanka" },
      { slug: "keyword-research-sri-lanka", keyword: "keyword research sri lanka" },
      { slug: "on-page-seo-sri-lanka", keyword: "on page seo sri lanka" },
      { slug: "off-page-seo-sri-lanka", keyword: "off page seo sri lanka" },
      { slug: "organic-traffic-sri-lanka", keyword: "organic traffic sri lanka" },
    ],
  },
  {
    slug: "social-media-marketing-sri-lanka",
    hubKeyword: "social media marketing sri lanka",
    title: "Social Media Marketing",
    short: "Grow followers, engagement and sales across every social platform.",
    intro:
      "From content creation to paid ads, we manage Facebook, Instagram, TikTok, LinkedIn and YouTube for Sri Lankan brands — building loyal communities and driving measurable business outcomes.",
    icon: "Share2",
    services: [
      { slug: "social-media-management-sri-lanka", keyword: "social media management sri lanka" },
      { slug: "facebook-ads-sri-lanka", keyword: "facebook ads sri lanka" },
      { slug: "instagram-ads-sri-lanka", keyword: "instagram ads sri lanka" },
      { slug: "tiktok-ads-sri-lanka", keyword: "tiktok ads sri lanka" },
      { slug: "linkedin-ads-sri-lanka", keyword: "linkedin ads sri lanka" },
      { slug: "youtube-ads-sri-lanka", keyword: "youtube ads sri lanka" },
      { slug: "influencer-marketing-sri-lanka", keyword: "influencer marketing sri lanka" },
      { slug: "social-media-agency-sri-lanka", keyword: "social media agency sri lanka" },
    ],
    blog: [
      { slug: "social-media-marketing-sri-lanka", keyword: "social media marketing sri lanka" },
      { slug: "social-media-campaigns-sri-lanka", keyword: "social media campaigns sri lanka" },
      { slug: "reels-marketing-sri-lanka", keyword: "reels marketing sri lanka" },
      { slug: "viral-marketing-sri-lanka", keyword: "viral marketing sri lanka" },
      { slug: "community-management-sri-lanka", keyword: "community management sri lanka" },
      { slug: "content-creation-sri-lanka", keyword: "content creation sri lanka" },
    ],
  },
  {
    slug: "email-sms-marketing-sri-lanka",
    hubKeyword: "email marketing sri lanka",
    title: "Email & SMS Marketing",
    short: "Bulk email, SMS and WhatsApp campaigns that deliver and convert.",
    intro:
      "Reach customers directly with permission-based email, SMS and WhatsApp marketing — automated journeys, segmentation, A/B testing and detailed reporting tailored for the Sri Lankan market.",
    icon: "Mail",
    services: [
      { slug: "bulk-email-sri-lanka", keyword: "bulk email sri lanka" },
      { slug: "email-automation-sri-lanka", keyword: "email automation sri lanka" },
      { slug: "b2b-email-marketing-sri-lanka", keyword: "b2b email marketing sri lanka" },
      { slug: "sms-marketing-sri-lanka", keyword: "sms marketing sri lanka" },
      { slug: "bulk-sms-sri-lanka", keyword: "bulk sms sri lanka" },
      { slug: "whatsapp-marketing-sri-lanka", keyword: "whatsapp marketing sri lanka" },
    ],
    blog: [
      { slug: "email-marketing-sri-lanka", keyword: "email marketing sri lanka" },
      { slug: "email-campaigns-sri-lanka", keyword: "email campaigns sri lanka" },
      { slug: "newsletter-marketing-sri-lanka", keyword: "newsletter marketing sri lanka" },
      { slug: "email-advertising-sri-lanka", keyword: "email advertising sri lanka" },
      { slug: "sms-advertising-sri-lanka", keyword: "sms advertising sri lanka" },
      { slug: "promotional-sms-sri-lanka", keyword: "promotional sms sri lanka" },
      { slug: "whatsapp-advertising-sri-lanka", keyword: "whatsapp advertising sri lanka" },
    ],
  },
  {
    slug: "outdoor-advertising-sri-lanka",
    hubKeyword: "outdoor advertising sri lanka",
    title: "Outdoor Advertising",
    short: "Billboards, LED screens, transit and OOH across Sri Lanka.",
    intro:
      "Dominate Sri Lanka's streets with high-impact outdoor advertising. We secure premium billboards, digital LEDs, transit, mobile and hoardings on Colombo's busiest routes and key cities islandwide.",
    icon: "Building2",
    services: [
      { slug: "billboard-advertising-sri-lanka", keyword: "billboard advertising sri lanka" },
      { slug: "digital-billboard-sri-lanka", keyword: "digital billboard sri lanka" },
      { slug: "led-screen-advertising-sri-lanka", keyword: "led screen advertising sri lanka" },
      { slug: "led-video-wall-sri-lanka", keyword: "led video wall sri lanka" },
      { slug: "transit-advertising-sri-lanka", keyword: "transit advertising sri lanka" },
      { slug: "mobile-billboard-sri-lanka", keyword: "mobile billboard sri lanka" },
      { slug: "hoarding-advertising-sri-lanka", keyword: "hoarding advertising sri lanka" },
    ],
    blog: [
      { slug: "outdoor-advertising-sri-lanka", keyword: "outdoor advertising sri lanka" },
      { slug: "led-display-advertising-sri-lanka", keyword: "led display advertising sri lanka" },
      { slug: "lamp-post-advertising-sri-lanka", keyword: "lamp post advertising sri lanka" },
      { slug: "bus-advertising-sri-lanka", keyword: "bus advertising sri lanka" },
      { slug: "train-advertising-sri-lanka", keyword: "train advertising sri lanka" },
      { slug: "taxi-advertising-sri-lanka", keyword: "taxi advertising sri lanka" },
      { slug: "sign-board-advertising-sri-lanka", keyword: "sign board advertising sri lanka" },
      { slug: "neon-signs-sri-lanka", keyword: "neon signs sri lanka" },
    ],
  },
  {
    slug: "branding-sri-lanka",
    hubKeyword: "branding sri lanka",
    title: "Branding & Creative",
    short: "Brand identity, logo, packaging and creative design that stands out.",
    intro:
      "Build a brand customers remember. Our creative team crafts identities, logos, packaging, brochures and corporate collateral that win hearts and shelf space across Sri Lanka.",
    icon: "Palette",
    services: [
      { slug: "brand-identity-sri-lanka", keyword: "brand identity sri lanka" },
      { slug: "corporate-branding-sri-lanka", keyword: "corporate branding sri lanka" },
      { slug: "logo-design-sri-lanka", keyword: "logo design sri lanka" },
      { slug: "graphic-design-sri-lanka", keyword: "graphic design sri lanka" },
      { slug: "creative-agency-sri-lanka", keyword: "creative agency sri lanka" },
      { slug: "packaging-design-sri-lanka", keyword: "packaging design sri lanka" },
      { slug: "company-profile-design-sri-lanka", keyword: "company profile design sri lanka" },
      { slug: "photography-sri-lanka", keyword: "commercial photography sri lanka" },
    ],
    blog: [
      { slug: "branding-sri-lanka", keyword: "branding sri lanka" },
      { slug: "business-branding-sri-lanka", keyword: "business branding sri lanka" },
      { slug: "creative-design-sri-lanka", keyword: "creative design sri lanka" },
      { slug: "brochure-design-sri-lanka", keyword: "brochure design sri lanka" },
      { slug: "flyer-design-sri-lanka", keyword: "flyer design sri lanka" },
      { slug: "banner-design-sri-lanka", keyword: "banner design sri lanka" },
      { slug: "marketing-materials-sri-lanka", keyword: "marketing materials sri lanka" },
    ],
  },
  {
    slug: "web-design-sri-lanka",
    hubKeyword: "web design sri lanka",
    title: "Web Design & Development",
    short: "Conversion-focused websites, e-commerce and landing pages.",
    intro:
      "Beautiful, fast, SEO-ready websites built to convert. From WordPress and e-commerce to bespoke landing pages and ongoing maintenance — engineered for the Sri Lankan audience and Google's Core Web Vitals.",
    icon: "Monitor",
    services: [
      { slug: "website-development-sri-lanka", keyword: "website development sri lanka" },
      { slug: "ecommerce-website-sri-lanka", keyword: "ecommerce website sri lanka" },
      { slug: "wordpress-development-sri-lanka", keyword: "wordpress development sri lanka" },
      { slug: "landing-page-design-sri-lanka", keyword: "landing page design sri lanka" },
      { slug: "ui-ux-design-sri-lanka", keyword: "ui ux design sri lanka" },
      { slug: "website-maintenance-sri-lanka", keyword: "website maintenance sri lanka" },
    ],
    blog: [
      { slug: "web-design-sri-lanka", keyword: "web design sri lanka" },
      { slug: "website-redesign-sri-lanka", keyword: "website redesign sri lanka" },
      { slug: "responsive-web-design-sri-lanka", keyword: "responsive web design sri lanka" },
      { slug: "website-banners-sri-lanka", keyword: "website banners sri lanka" },
      { slug: "web-banners-sri-lanka", keyword: "web banners sri lanka" },
    ],
  },
  {
    slug: "video-production-sri-lanka",
    hubKeyword: "video production sri lanka",
    title: "Video Production & Media",
    short: "TVCs, corporate films, animation and drone videography.",
    intro:
      "Tell your story with cinema-grade production. We produce TV commercials, corporate videos, motion graphics, 2D/3D animation and aerial drone shoots for brands across Sri Lanka.",
    icon: "Film",
    services: [
      { slug: "commercial-video-sri-lanka", keyword: "commercial video sri lanka" },
      { slug: "corporate-video-sri-lanka", keyword: "corporate video sri lanka" },
      { slug: "tv-commercials-sri-lanka", keyword: "tv commercials sri lanka" },
      { slug: "motion-graphics-sri-lanka", keyword: "motion graphics sri lanka" },
      { slug: "2d-animation-sri-lanka", keyword: "2d animation sri lanka" },
      { slug: "3d-animation-sri-lanka", keyword: "3d animation sri lanka" },
      { slug: "drone-videography-sri-lanka", keyword: "drone videography sri lanka" },
    ],
    blog: [
      { slug: "video-production-sri-lanka", keyword: "video production sri lanka" },
      { slug: "advertising-video-sri-lanka", keyword: "advertising video sri lanka" },
      { slug: "promotional-video-sri-lanka", keyword: "promotional video sri lanka" },
      { slug: "youtube-video-marketing-sri-lanka", keyword: "youtube video marketing sri lanka" },
    ],
  },
];

CATEGORIES.push({
  slug: "pr-communications-sri-lanka",
  hubKeyword: "pr and communications sri lanka",
  title: "PR & Communications",
  short:
    "Public relations, media coverage, press releases, influencer partnerships and market research for Sri Lankan brands.",
  intro:
    "Build credibility and reputation through earned media, press releases, journalist relations, market research and media planning. We help Sri Lankan brands tell their story to the right audience through the right channels.",
  icon: "Megaphone",
  services: [
    { slug: "pr-sri-lanka", keyword: "pr and public relations sri lanka" },
    { slug: "market-research-sri-lanka", keyword: "market research and media planning sri lanka" },
  ],
  blog: [],
});

export function titleCase(s: string) {
  const ACRONYMS = new Set([
    "atl", "btl", "ttl", "seo", "sem", "ppc", "pos", "tv", "ui", "ux",
    "2d", "3d", "b2b", "sms", "led", "crm", "kpi", "roi", "cms", "faq", "cta", "pr",
  ]);
  return s
    .split(" ")
    .map((w) => {
      const lo = w.toLowerCase();
      if (ACRONYMS.has(lo)) return w.toUpperCase();
      if (lo === "sri") return "Sri";
      if (lo === "lanka") return "Lanka";
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}

export function findCategoryBySubSlug(slug: string) {
  return CATEGORIES.find((c) => c.services.some((s) => s.slug === slug));
}
export function findCategoryByBlogSlug(slug: string) {
  return CATEGORIES.find((c) => c.blog.some((b) => b.slug === slug));
}