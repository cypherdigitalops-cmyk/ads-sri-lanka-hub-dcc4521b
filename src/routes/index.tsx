import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight, Award, BarChart3, Building2, CheckCircle2, Film, Layers, Mail,
 Megaphone, MessageCircle, Monitor, MousePointerClick, Palette, PartyPopper, Phone,
  Search, Share2, Sparkles, Star, Tv, Users, Globe, Clock, TrendingUp, Zap,
  AlertTriangle, Target, Wallet, Lightbulb, Printer, Image as ImageIcon, Sticker, Car, Umbrella, Music2, Mic2, FileText, Send, Rocket, Eye, Headphones, Award as AwardIcon,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTASection";
import { openQuoteModal } from "@/components/site/QuoteModal";
import { HomeExtraSections } from "@/components/site/HomeExtraSections";
import { CATEGORIES, SITE, titleCase } from "@/data/site";
import { HOME_LONGFORM, ORG_JSONLD, faqJsonLd } from "@/data/content-engine";
import heroImg from "@/assets/hero-advertising.jpg";

const TITLE = "Advertising Sri Lanka — Every Channel, Every Budget | Free Guidance";
const TITLE_OG = "Advertising Sri Lanka — Every Channel, Every Budget | Free Guidance";
const DESC = "Advertising in Sri Lanka — the complete guide to every channel. Compare ATL, BTL, digital, outdoor, SEO and social media advertising. Free guidance for Sri Lankan businesses. Call 0771437707.";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Tv, Megaphone, Layers, MousePointerClick, Search, Share2, Mail, Building2,
  Palette, Monitor, Film, PartyPopper,
};

// --- SEO-rich content from full guide ---
const CHANNEL_GUIDE: { icon: string; title: string; desc: string; tags: string[]; bestFor: string; budget: string; href: string }[] = [
  { icon: "📺", title: "ATL — TV, Radio & Press", desc: "Above-the-line mass media reaches millions simultaneously. TV on Siyatha, Derana and TV1; radio across FM; and print in Sunday Observer, Daily Mirror and Lankadeepa give your brand immediate national coverage. Best for fast, broad awareness — FMCG launches, financial products, and brands that need to be seen everywhere.", tags: ["FMCG", "Finance", "Retail chains"], bestFor: "National awareness", budget: "From Rs 150,000/month", href: "/atl-advertising-sri-lanka" },
  { icon: "🎯", title: "BTL — Activations & Field Marketing", desc: "Below-the-line meets your customer face-to-face — at supermarkets, malls, roadshows, exhibitions and community events. BTL drives trial, sampling and in-person conversion in ways no digital ad can replicate. Powerful for product launches, demos and trust-building.", tags: ["Product launches", "FMCG", "Events"], bestFor: "Trial & conversion", budget: "From Rs 80,000/activation", href: "/btl-advertising-sri-lanka" },
  { icon: "🔍", title: "Google Ads — Search & Display", desc: "Google Ads places your business at the top of Google when someone in Sri Lanka searches for exactly what you offer. The highest-intent advertising channel — the prospect is actively looking for your product. Display and YouTube reach audiences while they browse and watch.", tags: ["Services", "E-commerce", "B2B"], bestFor: "High-intent leads", budget: "From Rs 40,000/month", href: "/google-ads-sri-lanka" },
  { icon: "📱", title: "Social Media Advertising", desc: "Facebook and Instagram give precise targeting by age, location, language, interests and behaviour. TikTok is Sri Lanka's fastest-growing platform for under-35 audiences. LinkedIn is essential for B2B. Each platform requires a different creative approach.", tags: ["Retail", "Hospitality", "B2C"], bestFor: "Engagement & brand love", budget: "From Rs 30,000/month", href: "/social-media-marketing-sri-lanka" },
  { icon: "📈", title: "SEO — Search Engine Optimisation", desc: "SEO makes your site appear at the top of Google without paying per click. The lowest cost-per-lead channel over the long term, building compounding value — unlike ads that stop the moment you stop paying. Needs 3–6 months to compound, but the returns are transformative.", tags: ["All businesses", "Lowest CPL"], bestFor: "Long-term growth", budget: "From Rs 35,000/month", href: "/seo-services-sri-lanka" },
  { icon: "🏙️", title: "Outdoor & Billboard Advertising", desc: "Billboards on Galle Road, digital LED screens at Majestic City, transit ads on buses and three-wheelers, and lamp-post banners across provincial towns. OOH builds trust and visibility at scale, and works best when combined with a digital campaign running simultaneously.", tags: ["Local dominance", "Brand recall"], bestFor: "Visibility & trust", budget: "From Rs 60,000/month", href: "/outdoor-advertising-sri-lanka" },
  { icon: "🎬", title: "Video Production & TVCs", desc: "Video is the most effective format on every digital platform — Facebook, Instagram, TikTok and YouTube all prioritise video. A well-produced TVC establishes credibility in seconds. Quality video production in Sri Lanka is now accessible to businesses of all sizes.", tags: ["Brand building", "Product demos"], bestFor: "Storytelling & emotion", budget: "From Rs 100,000/production", href: "/video-production-sri-lanka" },
  { icon: "🖌️", title: "Branding & Creative Design", desc: "Your brand identity — logo, colours, typography, tone of voice, packaging — is the foundation every other channel builds on. Weak branding undermines even a generous media budget. In Sri Lanka, branding must also account for cultural colour associations and multilingual logo legibility.", tags: ["New businesses", "Rebrands"], bestFor: "Foundation & trust", budget: "From Rs 75,000/project", href: "/branding-sri-lanka" },
  { icon: "💻", title: "Web Design & Development", desc: "Your website is the home base every advertising channel points to. A slow, outdated or confusing site destroys the return on any media spend. A conversion-optimised website built for Sri Lankan audiences and mobile turns traffic into enquiries and sales.", tags: ["All channels", "E-commerce"], bestFor: "Conversion foundation", budget: "From Rs 80,000/project", href: "/web-design-sri-lanka" },
  { icon: "📧", title: "Email, SMS & WhatsApp Marketing", desc: "Direct messaging to your existing customer list delivers the highest ROI — typically Rs 30–50 in revenue per Rs 1 spent when lists are properly maintained. Bulk SMS achieves near-100% open rates. WhatsApp Business allows rich media and two-way conversation.", tags: ["Existing customers", "E-commerce"], bestFor: "Retention & ROI", budget: "From Rs 15,000/month", href: "/email-sms-marketing-sri-lanka" },
  { icon: "🎪", title: "Event Management", desc: "Corporate events, product launches, exhibitions, trade shows and experiential brand activations give Sri Lankan consumers a direct, memorable encounter with your brand. Generates earned media, social sharing and word-of-mouth no paid campaign can fully replicate.", tags: ["B2B", "Launches", "Corporate"], bestFor: "Brand experience", budget: "From Rs 200,000/event", href: "/event-management-sri-lanka" },
  { icon: "🔗", title: "TTL — Integrated 360° Campaigns", desc: "Through-the-line connects ATL, BTL and digital into a single, unified campaign — one brand message expressed consistently across every touchpoint. The approach used for major Sri Lankan brand launches and sustained brand-building programmes.", tags: ["National campaigns", "Enterprise"], bestFor: "Major launches", budget: "From Rs 500,000/month", href: "/ttl-advertising-sri-lanka" },
];

const DECISION_ROWS: [string, string, string, string, string][] = [
];

const DECISION_TABLE: { channel: string; href: string; bestFor: string; speed: string; budget: string; measure: string }[] = [
  { channel: "Google Search Ads", href: "/google-ads-sri-lanka", bestFor: "High-intent leads, service businesses", speed: "3–7 days", budget: "Rs 40,000", measure: "Excellent" },
  { channel: "Facebook / Instagram Ads", href: "/facebook-marketing-sri-lanka", bestFor: "B2C brands, retail, hospitality", speed: "1–3 days", budget: "Rs 30,000", measure: "Very good" },
  { channel: "TikTok Ads", href: "/tiktok-ads-sri-lanka", bestFor: "Under-35 audience, brand awareness", speed: "1–3 days", budget: "Rs 25,000", measure: "Good" },
  { channel: "SEO", href: "/seo-services-sri-lanka", bestFor: "All businesses — long-term growth", speed: "3–6 months", budget: "Rs 35,000", measure: "Very good" },
  { channel: "TV Advertising", href: "/tv-advertising-sri-lanka", bestFor: "National FMCG, banks, telcos", speed: "2–4 weeks", budget: "Rs 300,000", measure: "Limited" },
  { channel: "Radio Advertising", href: "/radio-advertising-sri-lanka", bestFor: "Regional, language-market targeting", speed: "1–2 weeks", budget: "Rs 80,000", measure: "Limited" },
  { channel: "Billboard / OOH", href: "/outdoor-advertising-sri-lanka", bestFor: "Local visibility, brand trust", speed: "2–3 weeks", budget: "Rs 60,000", measure: "Basic" },
  { channel: "Email / SMS / WhatsApp", href: "/email-sms-marketing-sri-lanka", bestFor: "Existing customers, highest ROI", speed: "Same day", budget: "Rs 15,000", measure: "Excellent" },
  { channel: "BTL Activations", href: "/btl-advertising-sri-lanka", bestFor: "Product trial, mall & event marketing", speed: "Same day", budget: "Rs 80,000", measure: "Moderate" },
  { channel: "YouTube Ads", href: "/youtube-ads-sri-lanka", bestFor: "Brand storytelling, video-led brands", speed: "2–5 days", budget: "Rs 40,000", measure: "Good" },
];

const BUDGET_TIERS = [
  { tier: "Starter", range: "Rs 30,000 – 80,000 / month", desc: "Perfect for small businesses, local services and new brand launches that need measurable results immediately.", items: [
    { label: "Google Search Ads (highest intent)", href: "/google-ads-sri-lanka" },
    { label: "Facebook / Instagram Ads", href: "/facebook-marketing-sri-lanka" },
    { label: "Google Business Profile (free)", href: "/seo-services-sri-lanka" },
    { label: "WhatsApp Business (free)", href: "/whatsapp-marketing-sri-lanka" },
    { label: "Basic SEO foundation", href: "/seo-services-sri-lanka" },
  ] },
  { tier: "Growth", range: "Rs 80,000 – 300,000 / month", desc: "For businesses ready to scale with multi-channel digital strategy and early offline presence.", items: [
    { label: "Google Ads (Search + Display)", href: "/google-ads-sri-lanka" },
    { label: "Facebook + Instagram + TikTok", href: "/social-media-marketing-sri-lanka" },
    { label: "SEO (ongoing, compounding)", href: "/seo-services-sri-lanka" },
    { label: "Email + SMS marketing", href: "/email-sms-marketing-sri-lanka" },
    { label: "Radio (regional, if relevant)", href: "/radio-advertising-sri-lanka" },
    { label: "1–2 OOH sites in key locations", href: "/outdoor-advertising-sri-lanka" },
  ] },
  { tier: "Scale", range: "Rs 300,000 – 1M / month", desc: "For established brands building national presence across digital and traditional simultaneously.", items: [
    { label: "Full digital stack (Google, Meta, TikTok)", href: "/digital-marketing-sri-lanka" },
    { label: "YouTube video campaigns", href: "/youtube-ads-sri-lanka" },
    { label: "Influencer marketing partnerships", href: "/influencer-marketing-sri-lanka" },
    { label: "OOH / Billboard networks", href: "/billboard-advertising-sri-lanka" },
    { label: "Radio on 2–3 stations", href: "/radio-advertising-sri-lanka" },
    { label: "BTL activations at key venues", href: "/btl-advertising-sri-lanka" },
    { label: "Advanced SEO + content marketing", href: "/seo-services-sri-lanka" },
  ] },
  { tier: "Enterprise", range: "Rs 1M+ / month", desc: "For large brands requiring integrated 360° campaigns across every touchpoint, islandwide.", items: [
    { label: "TV advertising (prime-time slots)", href: "/tv-advertising-sri-lanka" },
    { label: "Full ATL media plan", href: "/atl-advertising-sri-lanka" },
    { label: "National BTL activation programme", href: "/btl-advertising-sri-lanka" },
    { label: "Premium OOH + digital billboards", href: "/led-screen-rental-sri-lanka" },
    { label: "Programmatic display buying", href: "/digital-marketing-sri-lanka" },
    { label: "Full digital performance suite", href: "/digital-marketing-sri-lanka" },
    { label: "PR + earned media integration", href: "/pr-sri-lanka" },
    { label: "Event & experiential marketing", href: "/event-management-sri-lanka" },
  ] },
];

const MISTAKES = [
  { n: "01", t: "Boosting posts instead of running real campaigns", d: "Boosting a Facebook post is not the same as a structured campaign with proper targeting, objectives and creative testing. Properly structured campaigns with conversion objectives consistently outperform boosts by 5–10x." },
  { n: "02", t: "Running ads with no tracking or measurement", d: "If you have no Meta Pixel, no GA4 goals, and no UTM tags, you are flying blind. Every campaign must be set up with measurement before a single rupee is spent on media." },
  { n: "03", t: "Letting vendors own your ad accounts and data", d: "Some agencies set up ad accounts, hosting and domains under their own name. When you part ways, you lose your entire history and audience data. Always insist Google Ads, Facebook Business Manager, domain and hosting are in your business name." },
  { n: "04", t: "One English creative for a multilingual market", d: "Sri Lanka has three distinct language markets. A single English creative — even with Sinhala subtitles — performs significantly worse than a properly localised Sinhala or Tamil version with native voiceover and adapted messaging." },
  { n: "05", t: "Cutting the budget before it has time to work", d: "Most channels need 60–90 days of consistent spending. SEO needs 3–6 months. Even Google Ads needs 4–6 weeks for the algorithm to optimise. Cutting at week two is the single most costly mistake in Sri Lankan marketing." },
  { n: "06", t: "Choosing channels based on what competitors do", d: "Just because a competitor is on TV does not mean TV is right for you. Channel selection should always start from where your specific target customer spends their attention — then build from there." },
];

const EXTRA_FAQS = [
  { q: "How much does advertising cost in Sri Lanka?", a: "Costs vary enormously by channel. Digital (Google, Facebook, Instagram) starts from Rs 30,000–50,000 per month. Billboards in Colombo range Rs 60,000–250,000 per site. Radio starts around Rs 80,000 per month. TV is the most expensive ATL medium, with production from Rs 300,000–500,000 plus airtime. See our Advertising Rates page for a detailed breakdown." },
  { q: "Do I need to run Sinhala and Tamil advertising separately?", a: "For any national campaign, yes — properly localised Sinhala and Tamil creative outperforms subtitled versions. Each language community responds significantly better to advertising that feels native. Facebook and Google allow language targeting; for TV and radio, plan separate productions." },
  { q: "What's the difference between ATL and BTL advertising in Sri Lanka?", a: "ATL (Above-the-Line) uses mass media — TV, radio, newspapers, magazines, cinema — to broadcast widely for awareness. BTL (Below-the-Line) is targeted, on-ground and interactive — mall activations, sampling, roadshows, retail POS, sponsorships — best for trial and conversion. TTL integrates both with digital." },
  { q: "How long does it take to see results from advertising in Sri Lanka?", a: "Google Search Ads: 3–7 days. Facebook/Instagram: hours to a week. TV/radio: 2–4 weeks for measurable brand-search lift. BTL: same day. SEO: 4–8 weeks for early movement, 3–6 months for meaningful traffic, 6–12 months for strong #1 positions. Email/SMS: immediate, if you have an opt-in list." },
  { q: "Is advertising in Sri Lanka regulated?", a: "Yes. TV/radio is regulated by TRCSL. Product claims by the Consumer Affairs Authority. Financial services by SEC and CBSL. Pharmaceuticals by NMRA. Tobacco and alcohol carry specific restrictions. OOH requires municipal permits. Personal data in digital marketing must comply with the Personal Data Protection Act 2022." },
  { q: "How do I measure whether my advertising is working?", a: "For digital: GA4, Meta Pixel and UTM tracking on every link. The three numbers that matter are Cost Per Lead (CPL), Return on Ad Spend (ROAS) and Customer Lifetime Value (CLV). For offline: track website search lift, use unique numbers/URLs per channel, and survey new customers. If your agency cannot report these monthly, that is a red flag." },
  { q: "What are the most effective advertising channels in Sri Lanka?", a: "Google Search Ads for high-intent leads, Facebook and Instagram for broad consumer reach, TikTok for under-35 audiences, TV (Siyatha, Derana, Hiru) for national mass awareness, and outdoor billboards for local visibility. Most effective campaigns combine 2–3 channels rather than concentrating all spend in one." },
  { q: "How do I advertise my business in Sri Lanka on a small budget?", a: "Start with three free foundations: claim your Google Business Profile, set up WhatsApp Business with a product catalogue, and create a Facebook Business Page. With Rs 30,000–80,000/month, add Google Search Ads for high-intent customers and Facebook/Instagram ads targeted to your customer profile by age, location and interest." },
  { q: "Do I need an advertising agency in Sri Lanka or can I do it myself?", a: "For Google Ads and Facebook Ads below Rs 100,000/month, a business owner with basic digital knowledge can self-manage. For multi-channel campaigns, TV buying, BTL activations or budgets above Rs 300,000/month, a specialist agency almost always delivers better results than self-management." },
  { q: "What is the best digital advertising platform in Sri Lanka?", a: "Google Search Ads for demand capture (people already looking for you), Facebook/Instagram for demand creation, TikTok for under-35 product discovery, LinkedIn for B2B, and YouTube for video brand building. The best platform depends on your objective and audience — not a single platform fits every business." },
  { q: "Is social media advertising effective in Sri Lanka?", a: "Yes. Sri Lanka has over 6.5 million Facebook users and approximately 4 million TikTok users, with some of South Asia's highest social engagement. The key is Sinhala or Tamil creative (not just English), mobile-optimised formats and continuous testing of creative variants." },
];

const HOME_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE.url,
  name: SITE.name,
  potentialAction: {
    "@type": "SearchAction",
    target: SITE.url + "/services?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Advertising Sri Lanka",
  url: SITE.url,
  image: SITE.url + "/og-home.jpg",
  description: "Sri Lanka's #1 advertising information hub — learn how every advertising channel works, compare options and get free guidance for your next campaign.",
  telephone: "+94771437707",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressRegion: "Western Province",
    addressCountry: "LK",
  },
  geo: { "@type": "GeoCoordinates", latitude: 6.9271, longitude: 79.8612 },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  openingHours: "Mo-Sa 09:00-19:00",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+94771437707",
    contactType: "customer service",
    availableLanguage: ["English", "Sinhala", "Tamil"],
  },
  sameAs: ["https://wa.me/94771437707"],
};

const ITEM_LIST_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Advertising Sri Lanka — All Services",
  description: "Complete list of advertising services available in Sri Lanka",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ATL Advertising Sri Lanka", url: SITE.url + "/atl-advertising-sri-lanka" },
    { "@type": "ListItem", position: 2, name: "Digital Marketing Sri Lanka", url: SITE.url + "/digital-marketing-sri-lanka" },
    { "@type": "ListItem", position: 3, name: "Outdoor Advertising Sri Lanka", url: SITE.url + "/outdoor-advertising-sri-lanka" },
    { "@type": "ListItem", position: 4, name: "SEO Services Sri Lanka", url: SITE.url + "/seo-services-sri-lanka" },
    { "@type": "ListItem", position: 5, name: "BTL Advertising Sri Lanka", url: SITE.url + "/btl-advertising-sri-lanka" },
    { "@type": "ListItem", position: 6, name: "Social Media Marketing Sri Lanka", url: SITE.url + "/social-media-marketing-sri-lanka" },
    { "@type": "ListItem", position: 7, name: "Event Management Sri Lanka", url: SITE.url + "/event-management-sri-lanka" },
    { "@type": "ListItem", position: 8, name: "LED Screen Rental Sri Lanka", url: SITE.url + "/led-screen-rental-sri-lanka" },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "advertising Sri Lanka, advertising agency Sri Lanka, advertising in Sri Lanka, ATL advertising Sri Lanka, BTL advertising Sri Lanka, digital marketing Sri Lanka, outdoor advertising Sri Lanka, billboard advertising Sri Lanka, TV advertising Sri Lanka, radio advertising Sri Lanka, social media marketing Sri Lanka, SEO Sri Lanka, Colombo advertising" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.url },
      { property: "og:image", content: SITE.url + "/og-home.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE_OG },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: SITE.url + "/" }],
  }),
  component: Index,
});

function Index() {
  const [q, setQ] = useState("");
  const allServices = useMemo(
    () =>
      CATEGORIES.flatMap((c) =>
        c.services.map((s) => ({ ...s, category: c })),
      ),
    [],
  );
  const filtered = q
    ? allServices.filter((s) => s.keyword.toLowerCase().includes(q.toLowerCase())).slice(0, 8)
    : [];

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([...HOME_LONGFORM.faqs, ...EXTRA_FAQS])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_JSONLD) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] text-primary-foreground">
        <img
          src={heroImg}
          alt="Advertising in Sri Lanka — billboards, digital ads and social media campaigns over Colombo skyline"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Sri Lanka's #1 Advertising Information Hub
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Advertising in <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">Sri Lanka</span> — The Complete Guide for Sri Lankan Businesses
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
            Sri Lanka's #1 advertising information hub — learn how every advertising channel works, compare your options, and get free guidance for your next campaign.
          </p>

          {/* SEARCH */}
          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search any advertising service... e.g. Google Ads, billboard, TV"
                className="h-14 w-full rounded-full bg-background pl-14 pr-32 text-base text-foreground shadow-[var(--shadow-elegant)] outline-none ring-2 ring-transparent focus:ring-accent"
                aria-label="Search advertising services"
              />
              <Link
                to="/services"
                className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-accent-foreground sm:inline-flex"
              >
                Browse all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {filtered.length > 0 && (
              <div className="mt-2 overflow-hidden rounded-2xl border border-border bg-background text-foreground shadow-[var(--shadow-elegant)]">
                {filtered.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}` as never}
                    className="flex items-center justify-between border-b border-border px-5 py-3 last:border-0 hover:bg-muted"
                  >
                    <div>
                      <div className="text-sm font-semibold">{titleCase(s.keyword)}</div>
                      <div className="text-xs text-muted-foreground">{s.category.title}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-90"
            >
              <Phone className="h-5 w-5" /> Call {SITE.phone}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-7 py-3.5 text-base font-semibold text-[var(--whatsapp-foreground)] transition hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
            >
              Ask a Free Question <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* MOST REQUESTED SERVICES — directly below the hero */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-accent">⭐ Most Requested Services</div>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">The 4 services Sri Lankan businesses ask for most</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              Highest-value, fastest-turnaround inquiries on the site. Tap any card to get an instant free quote.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { slug: "printing-services-sri-lanka", title: "Printing Services", desc: "Banners, stickers, backdrops, sign boards & 35+ printing services.", icon: <Printer className="h-6 w-6" />, ring: "ring-accent" },
              { slug: "led-screen-rental-sri-lanka", title: "LED Screen Rental", desc: "Indoor & outdoor LED video walls for any event size.", icon: <Monitor className="h-6 w-6" />, ring: "ring-accent" },
              { slug: "event-management-sri-lanka", title: "Event Management", desc: "Corporate events, weddings, exhibitions — full production.", icon: <PartyPopper className="h-6 w-6" />, ring: "ring-primary/30" },
              { slug: "outdoor-advertising-sri-lanka", title: "Outdoor Advertising", desc: "Billboards, LED screens, transit & OOH across Sri Lanka.", icon: <Megaphone className="h-6 w-6" />, ring: "ring-primary/30" },
            ].map((s) => (
              <div key={s.slug} className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] ring-1 ${s.ring} transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]`}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground shadow-md">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => openQuoteModal(s.title)}
                    className="inline-flex items-center gap-1 rounded-full bg-[image:var(--gradient-accent)] px-4 py-2 text-xs font-bold text-accent-foreground shadow"
                  >
                    <Send className="h-3.5 w-3.5" /> Get Free Quote
                  </button>
                  <Link to={`/${s.slug}` as never} className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-xs font-semibold hover:border-primary hover:text-primary">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 text-xs font-semibold text-muted-foreground">
          <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-accent" /> Information hub — not just an agency</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Sinhala · Tamil · English</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Islandwide coverage</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Free advice &amp; guidance</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> 180+ services explained</span>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:gap-4 sm:p-6 md:grid-cols-4">
          {[
            { n: "180+", l: "Advertising services explained", i: Layers },
            { n: "25+", l: "Channels — ATL, BTL, Digital", i: Megaphone },
            { n: "3", l: "Languages — Sinhala, Tamil, English", i: Globe },
            { n: "24/7", l: "Free guidance — call or WhatsApp", i: Clock },
          ].map((s) => (
            <div key={s.l} className="group relative overflow-hidden rounded-2xl bg-[image:var(--gradient-hero)] p-5 text-primary-foreground sm:p-6">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/30 blur-2xl transition group-hover:bg-accent/50" />
              <s.i className="relative h-5 w-5 text-accent" />
              <div className="relative mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{s.n}</div>
              <div className="relative mt-1 text-xs text-primary-foreground/80 sm:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="text-sm font-semibold text-accent">Explore by category</div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Every type of advertising in Sri Lanka — explained</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Browse a category to learn how it works, where it fits and what to expect — or call {SITE.phone} for free guidance tailored to your business.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => {
            const Icon = ICONS[c.icon ?? "Megaphone"] ?? Megaphone;
            return (
              <Link
                key={c.slug}
                to={`/${c.slug}` as never}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-hero)] opacity-0 blur-2xl transition group-hover:opacity-30" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-card)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-lg font-semibold">{c.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.short}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.services.slice(0, 3).map((s) => (
                      <span key={s.slug} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                        {titleCase(s.keyword).replace(" Sri Lanka", "")}
                      </span>
                    ))}
                    {c.services.length > 3 && (
                      <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                        +{c.services.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn about {c.title} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHAT IS ADVERTISING IN SRI LANKA — long-form SEO */}
      <section className="bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <div className="text-sm font-semibold text-accent">Understanding the Landscape</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What is Advertising in Sri Lanka?</h2>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Advertising in Sri Lanka is the full set of tools businesses use to reach customers across the country — from a 30-second TV commercial on Siyatha or Derana, to a Google Search ad that appears when someone types "best hotel in Kandy," a billboard on Galle Road, a TikTok reel targeting Colombo youth, a bulk SMS to your customer list, or a live brand activation at One Galle Face Mall.</p>
              <p>The advertising ecosystem in Sri Lanka is divided into three broad families:</p>
              <ul className="ml-5 list-disc space-y-1.5">
                <li><strong className="text-foreground">ATL (Above-the-Line)</strong> — mass media: TV, radio, newspapers, magazines, cinema</li>
                <li><strong className="text-foreground">BTL (Below-the-Line)</strong> — on-ground activations, retail displays, events, roadshows, sampling</li>
                <li><strong className="text-foreground">Digital</strong> — Google Ads, Facebook, Instagram, TikTok, SEO, email, WhatsApp, YouTube, programmatic</li>
              </ul>
              <p>Most successful campaigns use a combination — the exact mix depends on your target audience, budget and business goals. A local bakery in Nugegoda and a national bank have completely different needs.</p>
              <h3 className="mt-6 text-xl font-bold text-foreground">What Makes Advertising in Sri Lanka Unique?</h3>
              <p>Three language markets — Sinhala (~75%), Tamil (~15%), and English (dominant among Colombo's urban professionals) — mean content must often be produced in multiple versions. Sri Lanka also has exceptionally high mobile penetration at over 140% and one of the highest social media usage rates in South Asia, making digital — particularly Facebook, Instagram, TikTok and YouTube — disproportionately powerful.</p>
              <p>At the same time, traditional media retains strong reach in regional and rural areas. Radio is highly influential in the North, East and upcountry. Sinhala newspapers maintain loyal readerships. TV commands prime-time attention across income segments that digital alone cannot yet reach.</p>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <h3 className="text-xl font-bold text-foreground">How the Sri Lankan Consumer Sees Advertising</h3>
              <p>Sri Lankan consumers are increasingly media-savvy. They skip pre-roll ads, use ad blockers, and trust peer recommendations far more than brand claims. Effectiveness today requires relevance, creativity and cultural authenticity — not just spend.</p>
              <p>The fastest-growing channels right now are TikTok (especially under-35), Google Search (high intent, measurable), YouTube pre-roll, WhatsApp marketing, and influencer partnerships with local creators.</p>
              <h3 className="mt-6 text-xl font-bold text-foreground">Who Uses This Guide?</h3>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>Business owners who want to understand their options before spending money</li>
                <li>Marketing managers who need to justify channel choices to leadership</li>
                <li>Entrepreneurs launching a new brand and building a first advertising plan from scratch</li>
              </ul>
              <p>Whether you run a small restaurant in Galle, a garment factory in Katunayake, a tech startup in Colombo or a regional chain of pharmacies, this guide gives you the same level of information that an experienced advertising professional would use to advise you — without the sales pitch.</p>
              <div className="mt-6 rounded-xl bg-[image:var(--gradient-hero)] p-6 text-primary-foreground">
                <p className="text-sm leading-relaxed">We cover <strong className="text-accent">every advertising channel available in Sri Lanka</strong> — how it works, what it costs, what results to expect, and how to avoid common mistakes. When you're ready to execute, call <strong className="text-accent">{SITE.phone}</strong> and we'll connect you with the right specialists for your brief.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHANNEL GUIDE — 12 detailed cards */}
      <section id="channels" className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="text-sm font-semibold text-accent">All Advertising Options</div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Every Type of Advertising Available in Sri Lanka</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Browse all 12 categories to understand how each works, who it suits and what results to expect.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CHANNEL_GUIDE.map((c) => (
            <Link key={c.title} to={c.href as never} className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <div className="text-3xl">{c.icon}</div>
              <div className="mt-3 text-lg font-semibold">{c.title}</div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">Best for: {c.bestFor}</span>
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>{c.budget}</span>
                <span className="font-semibold text-primary">Full guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* RENTALS HIGHLIGHT */}
      <section className="bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-accent">Event Equipment Rentals</div>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Rent everything you need for your event</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                LED screens, sound systems, stages, lighting, photo booths, tents, generators, drones and more — delivered, set up and operated islandwide.
              </p>
            </div>
            <Link
              to="/event-rentals-sri-lanka"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] hover:opacity-90"
            >
              Browse all rentals <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { slug: "led-screen-rental-sri-lanka", title: "LED Screen Rental", icon: "🖥️" },
              { slug: "sound-system-rental-sri-lanka", title: "Sound System Rental", icon: "🔊" },
              { slug: "stage-rental-sri-lanka", title: "Stage Rental", icon: "🎤" },
              { slug: "lighting-rental-sri-lanka", title: "Lighting Rental", icon: "💡" },
              { slug: "photo-booth-rental-sri-lanka", title: "Photo Booth Rental", icon: "📸" },
              { slug: "tent-marquee-rental-sri-lanka", title: "Tent & Marquee Rental", icon: "⛺" },
              { slug: "generator-rental-sri-lanka", title: "Generator Rental", icon: "⚡" },
              { slug: "drone-rental-sri-lanka", title: "Drone Rental", icon: "🚁" },
            ].map((r) => (
              <Link
                key={r.slug}
                to={`/${r.slug}` as never}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
              >
                <div className="text-2xl">{r.icon}</div>
                <div className="flex-1 text-sm font-semibold">{r.title}</div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DECISION TABLE */}
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <div className="text-sm font-semibold text-accent">Quick Comparison</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Which Advertising Channel Is Right for Your Business?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">Compare channels at a glance. For a personalised recommendation, call {SITE.phone}.</p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-xl border border-primary-foreground/10 bg-primary-foreground/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent/15 text-accent">
                  <th className="px-4 py-3 text-left font-semibold uppercase tracking-wider">Channel</th>
                  <th className="px-4 py-3 text-left font-semibold uppercase tracking-wider">Best For</th>
                  <th className="px-4 py-3 text-left font-semibold uppercase tracking-wider">Speed</th>
                  <th className="px-4 py-3 text-left font-semibold uppercase tracking-wider">Min. Budget</th>
                  <th className="px-4 py-3 text-left font-semibold uppercase tracking-wider">Measurability</th>
                </tr>
              </thead>
              <tbody>
                {DECISION_TABLE.map((row) => (
                  <tr key={row.channel} className="border-t border-primary-foreground/10 hover:bg-primary-foreground/5">
                    <td className="px-4 py-3 font-semibold">
                      <Link to={row.href as never} className="text-accent underline-offset-4 hover:underline">{row.channel}</Link>
                    </td>
                    <td className="px-4 py-3 text-primary-foreground/85">{row.bestFor}</td>
                    <td className="px-4 py-3 text-primary-foreground/85">{row.speed}</td>
                    <td className="px-4 py-3 text-primary-foreground/85">{row.budget}</td>
                    <td className="px-4 py-3 text-primary-foreground/85">{row.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BUDGET GUIDE */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="text-sm font-semibold text-accent">Budget Planning</div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">How to Plan Your Advertising Budget in Sri Lanka</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            What Sri Lankan businesses at different budget levels typically invest in, and why those combinations make sense. <Link to="/services" className="font-semibold text-primary hover:underline">Browse all 180+ advertising services</Link> or <Link to="/contact" className="font-semibold text-primary hover:underline">contact us</Link> for a tailored plan.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {BUDGET_TIERS.map((b) => (
            <div key={b.tier} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                <Wallet className="h-4 w-4" /> {b.tier}
              </div>
              <div className="mt-2 text-lg font-bold">{b.range}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {b.items.map((it) => (
                  <li key={it.label} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" />
                    <Link to={it.href as never} className="text-muted-foreground hover:text-primary hover:underline">{it.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <HomeExtraSections />

      {/* MISTAKES */}
      <section className="bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <div className="text-sm font-semibold text-accent">Avoid These Pitfalls</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">6 Reasons Advertising Budgets Get Wasted in Sri Lanka</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              These six mistakes account for the majority of failed campaigns — from poor <Link to="/facebook-marketing-sri-lanka" className="font-semibold text-primary hover:underline">Facebook campaign structure</Link> and missing <Link to="/digital-marketing-sri-lanka" className="font-semibold text-primary hover:underline">tracking</Link> to cutting <Link to="/seo-services-sri-lanka" className="font-semibold text-primary hover:underline">SEO</Link> before it compounds.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MISTAKES.map((m) => (
              <div key={m.n} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <span className="text-2xl font-black text-destructive/40">{m.n}</span>
                </div>
                <div className="mt-2 font-bold text-destructive">{m.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DECISION FRAMEWORK */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="text-sm font-semibold text-accent">Decision Framework</div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">How to Choose the Right Advertising Mix for Your Business</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">A four-question framework that helps any Sri Lankan business build a plan that avoids wasted spend from day one.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { i: Target, t: "Step 1: Define Your Customer Precisely", d: "Before spending a rupee, answer specifically: How old are your best customers? What language at home? Where — Colombo, provincial, rural? Income bracket? What do they do online and offline daily? The more precisely you answer, the more accurately you can pick channels." },
            { i: Users, t: "Step 2: Map Your Audience's Attention", d: "Where does your customer actually spend their attention? For Sri Lankans under 40 in urban areas — smartphone (3–5 hrs/day), primarily YouTube, TikTok, Facebook, Instagram. Regional and rural — FM radio during commute, evening TV. B2B — LinkedIn, Google Search, email and WhatsApp." },
            { i: Lightbulb, t: "Step 3: Match Goal to Channel Type", d: "Awareness → TV, radio, OOH, YouTube, TikTok, Facebook reach. Consideration → Google Display, Instagram, retargeting, content, SEO. Conversion / Leads → Google Search, Facebook Lead Ads, landing pages, WhatsApp. Retention → Email, SMS, WhatsApp, loyalty, remarketing." },
            { i: Wallet, t: "Step 4: Set a Realistic Budget", d: "Most failed campaigns are under-funded — Rs 20,000 of Google Ads, then 'Google doesn't work.' Industry averages: 3–5% of revenue for established businesses, 10–20% for new brands. Set as a percentage of target revenue, not a residual after other costs." },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground"><s.i className="h-6 w-6" /></div>
              <div className="mt-4 text-lg font-bold">{s.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
          <div className="text-lg font-bold">Most Effective Channel Combinations in Sri Lanka</div>
          <ul className="mt-4 grid gap-2 text-sm md:grid-cols-2">
            {[
              "Local service business (plumber, salon, clinic): Google Business Profile + Google Search Ads + Facebook/Instagram + WhatsApp",
              "E-commerce brand: Meta Ads + Google Shopping + SEO + Email automation + TikTok",
              "Restaurant or hospitality: Instagram + Google Business Profile + Facebook Ads + influencer partnerships",
              "B2B service or tech: LinkedIn + Google Search + SEO + email nurturing + webinars",
              "FMCG product launch: TV + radio + BTL activations + Facebook/Instagram + OOH",
              "Real estate: Google Search + Facebook Lead Ads + WhatsApp + OOH + property portals",
            ].map((it) => (
              <li key={it} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" /><span>{it}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* DIGITAL VS TRADITIONAL */}
      <section className="bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <div className="text-sm font-semibold text-accent">Deep Dive</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Digital Advertising vs Traditional Advertising in Sri Lanka</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Should you invest in digital or traditional? The honest answer is nuanced.</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <h3 className="text-xl font-bold text-foreground">The Case for Digital</h3>
              <p><Link to="/digital-marketing-sri-lanka" className="font-semibold text-primary hover:underline">Digital</Link> is measurable — you see exactly who clicked, visited, filled a form or called. It's precise — target by age, language, location, income, interest, behaviour. It's flexible — budgets shift in real time. And it's accessible — Rs 30,000/month runs professional campaigns competing directly with much larger brands.</p>
              <p>Sri Lanka's digital advertising market grows 20–25% per year. <Link to="/facebook-marketing-sri-lanka" className="font-semibold text-primary hover:underline">Facebook and Instagram</Link> remain dominant by reach; <Link to="/tiktok-ads-sri-lanka" className="font-semibold text-primary hover:underline">TikTok</Link> has grown explosively under 35; <Link to="/google-ads-sri-lanka" className="font-semibold text-primary hover:underline">Google Search</Link> captures the highest-intent queries; <Link to="/youtube-ads-sri-lanka" className="font-semibold text-primary hover:underline">YouTube</Link> reaches 85%+ of internet users.</p>
              <h3 className="mt-6 text-xl font-bold text-foreground">The Case for Traditional</h3>
              <p><Link to="/tv-advertising-sri-lanka" className="font-semibold text-primary hover:underline">TV</Link> — particularly prime-time Sinhala drama on Siyatha, Derana and Hiru TV — still reaches millions simultaneously in a high-attention environment. <Link to="/radio-advertising-sri-lanka" className="font-semibold text-primary hover:underline">Radio</Link> on Shaa FM, Yes FM, TNL and Rangiri reaches commuters and regional audiences during drive time. <Link to="/outdoor-advertising-sri-lanka" className="font-semibold text-primary hover:underline">OOH</Link> builds physical-world brand presence that signals permanence and investment.</p>
              <h3 className="mt-6 text-xl font-bold text-foreground">The Integrated Answer</h3>
              <p>The most effective advertising in Sri Lanka in 2024–2025 is <Link to="/ttl-advertising-sri-lanka" className="font-semibold text-primary hover:underline">integrated</Link>. <Link to="/tv-advertising-sri-lanka" className="font-semibold text-primary hover:underline">TV</Link> builds awareness. <Link to="/google-ads-sri-lanka" className="font-semibold text-primary hover:underline">Google</Link> captures the searches awareness generates. <Link to="/social-media-marketing-sri-lanka" className="font-semibold text-primary hover:underline">Social</Link> sustains the conversation. <Link to="/email-sms-marketing-sri-lanka" className="font-semibold text-primary hover:underline">Email and WhatsApp</Link> convert and retain. Brands that dominate are the ones that designed that journey intentionally.</p>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <h3 className="text-xl font-bold text-foreground">Sri Lanka Digital Landscape — Key Facts</h3>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>~8 million active social media users</li>
                <li>Facebook is the largest social platform by monthly active users</li>
                <li>TikTok is the fastest-growing platform among 16–35</li>
                <li>YouTube penetration exceeds 85% among active internet users</li>
                <li>Mobile accounts for 78%+ of all web traffic</li>
                <li>WhatsApp has near-universal smartphone penetration</li>
                <li>Google commands 95%+ of the Sri Lankan search market</li>
                <li>Average Sri Lankan spends 4.2 hours/day on smartphone</li>
              </ul>
              <h3 className="mt-6 text-xl font-bold text-foreground">When Traditional Wins</h3>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>Reaching audiences over 55 with limited digital engagement</li>
                <li>Building rapid trust for new brands in conservative categories</li>
                <li>Reaching regional, rural and upcountry efficiently</li>
                <li>Mass simultaneous awareness for FMCG launches</li>
                <li>Dominating a local market with high-visibility OOH</li>
              </ul>
              <h3 className="mt-6 text-xl font-bold text-foreground">When Digital Wins</h3>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>Targeting demographics, locations and behaviours precisely</li>
                <li>Generating measurable leads with full attribution</li>
                <li>Reaching under-45 urban audiences in Colombo and provincial cities</li>
                <li>Scaling up or down based on real-time performance data</li>
                <li>Building retargeting audiences over time</li>
                <li>Competing on a limited budget against larger brands</li>
              </ul>
              <p className="pt-2 text-sm">Studies consistently show campaigns running digital and traditional simultaneously produce 40–60% better results than either alone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section className="bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 pt-16">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-accent">🔥 Trending Now</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Trending Advertising Services in Sri Lanka</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              The most-requested services on advertisingsrilanka.lk this month. Tap to request pricing.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { slug: "banner-printing-sri-lanka", title: "Banner Printing", icon: <ImageIcon className="h-5 w-5" /> },
              { slug: "backdrop-printing-sri-lanka", title: "Backdrop Printing", icon: <FileText className="h-5 w-5" /> },
              { slug: "sticker-printing-sri-lanka", title: "Sticker Printing", icon: <Sticker className="h-5 w-5" /> },
              { slug: "vehicle-branding-sri-lanka", title: "Vehicle Branding", icon: <Car className="h-5 w-5" /> },
              { slug: "led-screen-rental-sri-lanka", title: "LED Screen Rental", icon: <Monitor className="h-5 w-5" /> },
              { slug: "tent-marquee-rental-sri-lanka", title: "Tent & Marquee Rental", icon: <Umbrella className="h-5 w-5" /> },
              { slug: "sound-system-rental-sri-lanka", title: "Sound System Rental", icon: <Headphones className="h-5 w-5" /> },
              { slug: "stage-rental-sri-lanka", title: "Stage Rental", icon: <Mic2 className="h-5 w-5" /> },
            ].map((s) => (
              <div key={s.slug} className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-primary/40">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground">
                    {s.icon}
                  </div>
                  <Link to={`/${s.slug}` as never} className="text-base font-bold hover:text-primary">
                    {s.title}
                  </Link>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => openQuoteModal(s.title)}
                    className="flex-1 rounded-full bg-[image:var(--gradient-accent)] px-3 py-1.5 text-xs font-bold text-accent-foreground shadow"
                  >
                    Request Pricing
                  </button>
                  <Link
                    to={`/${s.slug}` as never}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:border-primary hover:text-primary"
                    aria-label={`Learn more about ${s.title}`}
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-accent">Most requested</div>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Popular advertising services</h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-primary hover:underline">
              View all 180+ services →
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "google-ads-sri-lanka", "facebook-ads-sri-lanka", "tv-advertising-sri-lanka",
              "billboard-advertising-sri-lanka", "seo-services-sri-lanka", "tiktok-ads-sri-lanka",
              "instagram-ads-sri-lanka", "radio-advertising-sri-lanka", "youtube-ads-sri-lanka",
              "newspaper-advertising-sri-lanka", "logo-design-sri-lanka", "web-design-sri-lanka",
              "video-production-sri-lanka", "whatsapp-marketing-sri-lanka", "lead-generation-sri-lanka",
              "led-screen-advertising-sri-lanka", "led-screen-rental-sri-lanka", "brand-activation-sri-lanka", "influencer-marketing-sri-lanka",
            ].map((slug) => (
              <Link
                key={slug}
                to={`/${slug}` as never}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
              >
                {titleCase(slug.replace(/-/g, " ")).replace(" Sri Lanka", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT RENTALS — HIGH DEMAND */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-accent">High demand</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Event rentals in Sri Lanka</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              The most-requested rental categories for corporate events, brand activations, product launches and weddings — all delivered as a single AV and production package.
            </p>
          </div>
          <Link to="/event-management-sri-lanka" className="text-sm font-semibold text-primary hover:underline">
            View all event services →
          </Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/led-screen-rental-sri-lanka", title: "LED Screen Rental", desc: "Indoor & outdoor LED video walls — P3, P4 and high-brightness panels." },
            { href: "/sound-system-rental-sri-lanka", title: "Sound System Rental", desc: "Line-array, monitors, wireless mics and engineers for any room size." },
            { href: "/stage-rental-sri-lanka", title: "Stage Rental", desc: "Modular truss decks, skirting, steps and rigging for events of every scale." },
            { href: "/stage-setup-sri-lanka", title: "Stage Setup & AV Production", desc: "Turnkey stage, lighting, LED and crew under one show-caller." },
            { href: "/lighting-rental-sri-lanka", title: "Event Lighting Rental", desc: "Intelligent lighting, par cans, follow-spots and programmable rigs." },
            { href: "/generator-rental-sri-lanka", title: "Generator Rental", desc: "Silent diesel generators with distribution and fuel for zero downtime." },
            { href: "/tent-marquee-rental-sri-lanka", title: "Tent & Marquee Rental", desc: "Pagoda, frame and stretch tents for outdoor functions and roadshows." },
            { href: "/table-chair-rental-sri-lanka", title: "Table & Chair Rental", desc: "Banquet, cocktail, conference and VIP lounge furniture islandwide." },
            { href: "/photo-booth-rental-sri-lanka", title: "Photo Booth Rental", desc: "Branded photo booths with instant prints and social sharing." },
            { href: "/360-photo-booth-rental-sri-lanka", title: "360 Photo Booth Rental", desc: "Slow-motion 360° video booth — top-performing activation content." },
            { href: "/selfie-mirror-rental-sri-lanka", title: "Selfie Mirror Rental", desc: "Interactive mirror booth with custom branded overlays and prints." },
            { href: "/projector-rental-sri-lanka", title: "Projector Rental", desc: "HD and laser projectors with screens for conferences and screenings." },
            { href: "/drone-rental-sri-lanka", title: "Drone Rental", desc: "Licensed aerial drone capture for events, launches and venues." },
            { href: "/bouncy-castle-rental-sri-lanka", title: "Bouncy Castle Rental", desc: "Family-day favourites — safe, certified inflatables with attendants." },
            { href: "/flower-wall-rental-sri-lanka", title: "Flower Wall Rental", desc: "Premium floral backdrops for weddings, launches and red-carpet moments." },
            { href: "/neon-sign-rental-sri-lanka", title: "Neon Sign Rental", desc: "Custom and stock neon signs for photo backdrops and styled events." },
            { href: "/fog-machine-rental-sri-lanka", title: "Fog Machine Rental", desc: "Haze and low-fog effects for stage reveals and entrance moments." },
            { href: "/cold-spark-machine-rental-sri-lanka", title: "Cold Spark Machine Rental", desc: "Indoor-safe cold sparks for grand entries, first dances and reveals." },
          ].map((r) => (
            <Link
              key={r.href}
              to={r.href as never}
              className="group rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="font-semibold">{r.title}</div>
                <ArrowRight className="h-4 w-4 flex-none text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-semibold text-accent">Why advertisingsrilanka.lk</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">The easiest way to understand advertising in Sri Lanka</h2>
            <p className="mt-4 text-muted-foreground">
              We're an information hub — not an agency. Use this site to learn what's available, compare channels and decide what fits your business. When you're ready, we connect you with the right specialists.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Plain-English explanations of every advertising option",
                "Compare ATL, BTL, digital, outdoor & more in one place",
                "Free phone or WhatsApp guidance — no obligation",
                "Local context: Sinhala, Tamil & English markets",
                "Up-to-date guides for Sri Lankan businesses",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-accent-foreground">
                <Phone className="h-4 w-4" /> Ask {SITE.phone}
              </a>
              <Link to="/get-quote" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary">
                Send a Question <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { i: <Search className="h-5 w-5" />, t: "Discover", d: "Learn what advertising channels exist in Sri Lanka." },
              { i: <BarChart3 className="h-5 w-5" />, t: "Compare", d: "Understand strengths of each channel & approach." },
              { i: <Users className="h-5 w-5" />, t: "Local insight", d: "Sinhala, Tamil & English market context." },
              { i: <Award className="h-5 w-5" />, t: "Get help", d: "Free guidance — by phone, WhatsApp or email." },
            ].map((f) => (
              <div key={f.t} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground">{f.i}</div>
                <div className="font-semibold">{f.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="text-sm font-semibold text-accent">How it works</div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Find the right advertising in 3 simple steps</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            No jargon, no pressure. Learn, compare and get free guidance — all in one place.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { i: Search, t: "1. Explore", d: "Browse 180+ advertising services and 13 categories — TV, radio, billboards, Google Ads, social media, SEO, branding and more.", c: "from-primary to-primary-glow" },
            { i: TrendingUp, t: "2. Compare", d: "Read plain-English guides explaining how each channel works, what it costs, and where it fits your business.", c: "from-primary-glow to-accent" },
            { i: Zap, t: "3. Get help", d: "Call 0771437707 or WhatsApp us for free guidance. We connect you with the right Sri Lankan specialists.", c: "from-accent to-primary-glow" },
          ].map((s, i) => (
            <div key={s.t} className="relative">
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.c} text-primary-foreground shadow-[var(--shadow-card)]`}>
                  <s.i className="h-6 w-6" />
                </div>
                <div className="text-xl font-semibold">{s.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
              {i < 2 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-accent md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4">
        <CTASection
          headline="One call. Every advertising channel. One trusted partner."
          sub={`Call ${SITE.phone} now or send a quick brief — free strategy plan within 24 hours.`}
        />
      </div>

      {/* WHY BUSINESSES USE ADVERTISING SRI LANKA */}
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-accent">Why advertisingsrilanka.lk</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Why Businesses Use Advertising Sri Lanka</h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
              Five reasons Sri Lankan businesses make us their first stop for advertising decisions — before they speak to any agency or supplier.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { i: <FileText className="h-6 w-6" />, t: "Comprehensive Advertising Information", d: "180+ services explained in plain English — costs, timelines, what to expect, common mistakes. Same depth a senior advertising consultant would give you, free." },
              { i: <Layers className="h-6 w-6" />, t: "Multiple Advertising Categories", d: "ATL, BTL, Digital, Outdoor, Printing, LED, Events, Branding, Web, SEO, Social. Every category, every channel, every option — all in one place." },
              { i: <Rocket className="h-6 w-6" />, t: "Fast Quotation Requests", d: "Sticky quote button on every page. WhatsApp replies in 5 minutes. Most quotes go out the same business day — not days later." },
              { i: <Globe className="h-6 w-6" />, t: "Sri Lanka Focused Content", d: "Rates in LKR, vendors in Colombo/Kandy/Galle/Jaffna, Sinhala–Tamil–English market guidance. Not recycled global content — built for Sri Lankan brands." },
              { i: <AwardIcon className="h-6 w-6" />, t: "Expert Advertising Resources", d: "Decision frameworks, budget tiers, channel comparisons and mistake checklists used by Sri Lanka's most data-driven marketers." },
              { i: <Eye className="h-6 w-6" />, t: "Independent Information Hub", d: "We're an information hub — not an agency pushing one channel. You get unbiased guidance, then choose what fits your business and budget." },
            ].map((w) => (
              <div key={w.t} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur transition hover:bg-primary-foreground/10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground shadow-md">
                  {w.i}
                </div>
                <h3 className="mt-4 text-lg font-bold">{w.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{w.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3 text-sm font-bold text-accent-foreground shadow-lg transition hover:scale-[1.03]"
            >
              <Send className="h-4 w-4" /> Get Free Quote
            </button>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-7 py-3 text-sm font-bold text-[var(--whatsapp-foreground)] shadow-lg"
            >
              <MessageCircle className="h-4 w-4" /> Discuss Your Requirement
            </a>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-accent">
              <BarChart3 className="h-4 w-4" /> Latest insights
            </div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Advertising guides for Sri Lanka</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-primary hover:underline">
            See all guides →
          </Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to={"/blog/corporate-event-management-sri-lanka-guide" as never}
            className="group rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="text-xs font-semibold text-accent">Event Management</div>
            <div className="mt-2 font-semibold">Corporate Event Management Sri Lanka — Complete Guide</div>
            <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Read guide <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
            </div>
          </Link>
          {CATEGORIES.flatMap((c) => c.blog.slice(0, 1).map((b) => ({ c, b }))).map(({ c, b }) => (
            <Link
              key={b.slug}
              to={`/blog/${b.slug}` as never}
              className="group rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="text-xs font-semibold text-accent">{c.title}</div>
              <div className="mt-2 font-semibold">{titleCase(b.keyword)}</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Read guide <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 pb-4 pt-20">
          <div className="space-y-5">
            {HOME_LONGFORM.blocks.map((b, i) => {
              if (b.type === "h2") return <h2 key={i} className="mt-8 text-2xl font-bold sm:text-3xl">{b.text}</h2>;
              if (b.type === "p") return <p key={i} className="text-muted-foreground leading-relaxed">{b.text}</p>;
              if (b.type === "ul") return <ul key={i} className="ml-5 list-disc space-y-2 text-muted-foreground">{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
              if (b.type === "ol") return <ol key={i} className="ml-5 list-decimal space-y-2 text-muted-foreground">{b.items.map((it, j) => <li key={j}>{it}</li>)}</ol>;
              if (b.type === "table") return (
                <div key={i} className="overflow-x-auto rounded-lg border border-border bg-background">
                  <table className="w-full text-sm">
                    <thead className="bg-secondary/60"><tr>{b.head.map((h, j) => <th key={j} className="px-3 py-2 text-left font-semibold">{h}</th>)}</tr></thead>
                    <tbody>{b.rows.map((r, j) => (<tr key={j} className="border-t border-border">{r.map((c, k) => <td key={k} className="px-3 py-2 align-top text-muted-foreground">{c}</td>)}</tr>))}</tbody>
                  </table>
                </div>
              );
              return null;
            })}
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <div className="text-center">
            <div className="text-sm font-semibold text-accent">FAQ</div>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Common questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {[
              ...HOME_LONGFORM.faqs,
              ...EXTRA_FAQS,
            ].map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-background p-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold marker:hidden">
                  {f.q}
                  <span className="text-accent transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
