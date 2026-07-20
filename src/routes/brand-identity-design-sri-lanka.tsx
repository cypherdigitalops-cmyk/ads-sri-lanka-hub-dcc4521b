import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "brand-identity-design-sri-lanka",
  h1: "Brand Identity Design in Sri Lanka",
  metaTitle: "Brand Identity Design Sri Lanka — Complete Branding Package | Advertising Sri Lanka",
  metaDescription: "Complete brand identity design in Sri Lanka — logo, colours, typography, brand guidelines and stationery. Call 0701772626 for a free quote.",
  intro: "Brand identity is the full visual system that makes your business recognisable — not just a logo, but the complete set of design elements that communicate who you are, what you stand for, and why customers should trust you.",
  whatIs: "Brand identity design covers every visual touchpoint of your business: your logo, colour palette, typography, imagery style, tone of voice and design guidelines. When these elements work together consistently, they create a powerful, memorable brand.",
  whoNeeds: "Businesses launching a new brand, rebranding an existing company, or expanding into new markets need a strong brand identity. It is especially important for businesses that want to stand out in competitive Sri Lankan markets.",
  included: [
    "Logo design and variations",
    "Primary and secondary colour palette",
    "Typography selection and usage rules",
    "Brand style guide document",
    "Business card and stationery design",
    "Social media profile templates",
    "Brand usage dos and don'ts",
  ],
  cost: "Brand identity packages in Sri Lanka start from Rs 45,000 for a core identity (logo + colours + typography + guidelines). Full brand identity packages including stationery and digital assets range from Rs 80,000 to Rs 250,000.",
  faqs: [
    { q: "What is the difference between a logo and brand identity?", a: "A logo is a single mark. Brand identity is the complete visual system — logo, colours, fonts, imagery style, guidelines — that ensures your brand looks consistent everywhere." },
    { q: "How long does brand identity design take?", a: "A complete brand identity project typically takes 2–4 weeks from briefing to final delivery." },
  ],
  longForm: [
    {
      h2: "Why Brand Identity is the Foundation of Long-Term Growth",
      paragraphs: [
        "Almost every successful Sri Lankan business that has scaled past the founder-led stage shares one trait: a consistent, instantly recognisable brand identity. Dilmah, MAS, Brandix, Cargills, Singer, Munchee, Cinnamon Hotels — none of these brands rely on a single logo. They rely on a complete visual system that shows up the same way on a billboard in Colombo, a packet on a Nugegoda shelf, a uniform in a Maharagama factory and a sponsored Facebook video at midnight. That consistency is what turns a small business into an asset.",
        "For growing Sri Lankan companies, brand identity is the foundation that everything else is built on. Without it, every new flyer, every new shopfront and every new social media post is a fresh design problem to be solved from scratch. With it, your team can produce on-brand work in a fraction of the time, your marketing spend compounds instead of resetting, and your customers start recognising you across channels before they have consciously processed what they are looking at.",
      ],
    },
    {
      h2: "Logo, Wordmark, Monogram and Lockups",
      paragraphs: [
        "A complete identity system delivers more than one logo. You need a primary lockup that combines symbol and wordmark for general use, a horizontal version for narrow spaces like website headers, a stacked version for square spaces like social profile pictures, a monogram or icon-only version for app icons and favicons, and a reversed (white) version for use on dark backgrounds. We design and deliver all of these as a coordinated set, with clear rules for when to use each.",
        "We also work through the often-ignored details: minimum size at which the logo remains legible, clear space rules so the logo is not crowded by other elements, acceptable and unacceptable colour applications, and a one-page misuse guide that protects the brand from common errors. These rules become the reference for every internal team member, agency partner and printer who handles your brand.",
      ],
    },
    {
      h2: "Colour Systems Designed for Print and Digital",
      paragraphs: [
        "A brand colour palette that looks great on a designer's monitor often fails the moment it is printed or applied to a website. Bright neon greens shift on cheap newsprint; deep navy looks black on phone screens; pastel pinks turn muddy on uncoated stock. We design colour systems that work across all media — specifying CMYK values for offset printing, Pantone references for accurate spot colours, RGB and HEX for digital, and dedicated paper-stock variants where needed.",
        "We typically build a palette around two primary colours, three to four secondary colours and a tightly controlled set of neutrals. This gives your team enough flexibility for a wide range of communications while keeping the brand visually disciplined. The palette is documented in your style guide with usage ratios — for example, primary colour 60%, secondary 25%, accent 10%, neutrals 5% — so designers know how to apply it consistently.",
      ],
    },
    {
      h2: "Typography That Reflects the Brand Personality",
      paragraphs: [
        "Typography is one of the most under-used tools in Sri Lankan branding. Most brands default to Arial, Calibri or whatever came installed on the office laptop — and then wonder why their materials look generic. We select primary and secondary typefaces that reflect your brand personality: serif faces for heritage and trust (banks, schools, legal), modern sans-serif for technology and clarity (fintech, SaaS, healthcare), and distinctive display faces for premium consumer brands.",
        "Where Sinhala and Tamil are part of your communication, we pair Latin typefaces with carefully chosen Sinhala and Tamil counterparts that share visual weight and character. We licence fonts properly through Adobe Fonts, Google Fonts or direct foundry licences, so you can use them legally across all your communications without future legal risk.",
      ],
    },
    {
      h2: "Brand Guidelines — The Document That Holds it All Together",
      paragraphs: [
        "Every identity project we deliver includes a brand guidelines document — typically a 30–60 page PDF that documents the entire system. The guidelines cover the brand story and personality, logo usage rules, colour specifications, typography hierarchy, photography style, illustration style, iconography, layout principles, and templates for common applications like presentations, social media posts and email signatures.",
        "This document is the single most valuable asset of the project, because it is what allows your brand to scale beyond us. Once you have it, any internal designer, freelance illustrator or external agency can produce work that looks unmistakably yours — without you having to brief them from scratch each time. It is what separates a brand that depends on a designer from a brand that owns its own visual identity.",
      ],
    },
    {
      h2: "Applications, Rollout and Living the Brand",
      paragraphs: [
        "A new brand identity only delivers value when it is rolled out across every touchpoint. As part of every project we design the most-used applications: business cards, letterheads, email signatures, social media profile templates, presentation deck templates and either a website starter kit or full website redesign. For retail and FMCG clients we extend to packaging, shopfront signage and uniforms. For service businesses we focus on proposals, quotations and digital lead-generation assets.",
        "We also help you plan the rollout itself — what changes on day one, what is replaced as old stock runs out, and how to communicate the new identity to existing customers without confusing them. A well-managed rollout turns a brand refresh into a marketing event, generating PR coverage, social engagement and customer renewed interest. A badly managed one creates inconsistency for months. We make sure yours is the former.",
      ],
    },
  ],
};

export const Route = createFileRoute("/brand-identity-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});