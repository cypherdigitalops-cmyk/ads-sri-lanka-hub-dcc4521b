import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "social-media-post-design-sri-lanka",
  h1: "Social Media Post Design in Sri Lanka",
  metaTitle: "Social Media Post Design Sri Lanka — Facebook, Instagram & TikTok Graphics | Advertising Sri Lanka",
  metaDescription: "Professional social media post design in Sri Lanka for Facebook, Instagram, TikTok and LinkedIn. From Rs 5,000/month. Call 0701772626.",
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
  longForm: [
    {
      h2: "Why Social Media Design Decides Whether Your Reach Converts",
      paragraphs: [
        "Sri Lankan social media feeds are some of the most visually competitive environments any small brand will ever try to compete in. A user scrolling Instagram in Colombo at 9pm passes a Cargills offer, a Daraz flash sale, a wedding photographer's reel, an iflix trailer, a Ministry of Health awareness graphic and an MAS recruitment ad — all within a single minute. Your post has roughly 1.5 seconds to make them stop. The single biggest variable in that 1.5 seconds is design quality, not budget or targeting.",
        "Brands with strong, consistent social media design see two to three times the engagement rate of brands posting generic stock-photo graphics with the same budget. Over six months of consistent posting, that gap becomes the difference between a page that quietly grows and one that quietly stagnates. This is why social media post design has shifted from a nice-to-have to a core marketing investment for Sri Lankan businesses serious about digital growth.",
      ],
    },
    {
      h2: "Designing for Each Platform's Native Format",
      paragraphs: [
        "Each social platform has its own native rules, and posts that ignore them are punished by both the algorithm and the audience. Facebook still rewards square 1:1 posts and 1.91:1 link cards, with strong text overlays for older audiences. Instagram has shifted heavily towards 4:5 portrait posts and 9:16 reels — anything square now looks dated and smaller in the feed. TikTok lives in full-screen 9:16 video with text overlays positioned away from the captions area. LinkedIn rewards 1:1 carousels and document posts for B2B reach.",
        "We design every post for the platform it will run on — not a single design exported into every aspect ratio with the logo placed on top of someone's face. For multi-platform campaigns, we adapt the core idea into each platform's format so it feels native everywhere. That alone usually doubles organic reach versus the typical \"one design, five exports\" approach.",
      ],
    },
    {
      h2: "Template Systems That Save You Time and Money",
      paragraphs: [
        "Most Sri Lankan brands do not need 60 custom designs every month. They need 5–10 strong templates that can be quickly customised with new copy, products and offers each week. We build social media template systems in Canva or Adobe Express that your in-house team can use day-to-day, while we handle the high-impact campaign creatives and seasonal launches.",
        "A typical template system includes a product post template, a promotion or discount template, a customer testimonial template, an event announcement template, a quote or tip template, a job vacancy template and a story template set. Once set up, your team can produce on-brand posts in minutes instead of hours, and your feed stays consistent even when you are publishing daily.",
      ],
    },
    {
      h2: "Sinhala, Tamil and English Content That Reaches Every Audience",
      paragraphs: [
        "Sri Lankan brands win more reach when they post in the language their audience actually thinks in. Posts in Sinhala typically outperform English posts in suburban and rural markets, while Tamil posts unlock the Northern, Eastern and Up-country audiences that pure-English brands quietly miss. We design social posts in all three languages with correctly licensed typefaces, properly kerned text and culturally appropriate visual cues.",
        "We also adapt visual style to language and audience — a Sinhala-language promotion for a hardware brand in Kurunegala looks and feels different from an English-language launch post for a Colombo fintech, even if both are technically \"product posts.\" Working with a team that understands the visual codes of each Sri Lankan audience saves you the trial-and-error phase that costs many brands six months of wasted ad spend.",
      ],
    },
    {
      h2: "Carousels, Reels Covers and Animated Posts",
      paragraphs: [
        "The highest-performing post formats on Instagram, Facebook and LinkedIn right now are carousels and reels. A well-designed 6–10 slide carousel gives your audience a reason to swipe — and every swipe signals strong engagement to the algorithm, expanding your organic reach. We design carousels with a clear narrative arc: hook on slide one, value through the middle, call to action on the last slide. The visual language stays consistent across slides while each one earns its own moment.",
        "Reels and TikTok performance is shaped heavily by the cover frame — the thumbnail viewers see on your profile grid. We design custom reels and TikTok covers that turn your video archive into a clean, branded portfolio rather than a random mosaic of screenshots. We also produce animated GIF posts and lightweight motion graphics that bring static feeds to life without the cost of full video production.",
      ],
    },
    {
      h2: "Monthly Retainers vs One-Off Campaign Packs",
      paragraphs: [
        "Most of our social media design clients work with us on a monthly retainer — typically 12 to 60 posts per month across the platforms they care about. The retainer model gives you predictable monthly cost, faster turnaround on each batch (because we already know your brand) and gradually compounding quality as we learn what works in your specific feed. Briefings happen once a month, usually via a 30-minute call, and we deliver in weekly or fortnightly batches.",
        "For brands not yet ready for a retainer, we offer one-off campaign packs — for example, a 10-post launch campaign, a Sinhala and Tamil New Year campaign, an Avurudu sale campaign or a year-end holiday push. These are quoted per project and delivered within 7–14 working days. Either way, you get the same design quality, the same Sri Lankan market sensitivity and the same focus on posts that actually drive business outcomes, not just likes.",
      ],
    },
  ],
};

export const Route = createFileRoute("/social-media-post-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});