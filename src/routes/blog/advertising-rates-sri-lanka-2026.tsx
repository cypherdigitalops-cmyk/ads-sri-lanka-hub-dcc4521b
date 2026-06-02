import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/advertising-rates-sri-lanka-2026";
const TITLE = "Advertising Rates in Sri Lanka 2026 — Complete Price Guide";
const DESC = "Real 2026 advertising rates in Sri Lanka for TV, radio, newspaper, billboard, digital, social, WhatsApp, SMS and events. Side-by-side LKR pricing tables for every channel.";

const PRIMARY_ANCHOR = {
  href: "/",
  regex: /(advertising\s+in\s+Sri\s+Lanka)/i,
  fallbackText: "advertising in Sri Lanka",
  ctaLabel: "Get free advice from our team",
  ctaHeadline: "Planning a campaign? Get free, no-obligation advice",
  ctaService: "Advertising in Sri Lanka",
};

export const Route = createFileRoute("/blog/advertising-rates-sri-lanka-2026")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE.url}/${SLUG}` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/${SLUG}` }],
  }),
  component: () => (
    <PageShell>
      <CustomBlogArticle
        slug={SLUG}
        title={TITLE}
        description={DESC}
        kicker="2026 Pricing Guide"
        publishedISO="2026-01-10"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="Before you commit a single rupee, here is what every major advertising channel actually costs in Sri Lanka in 2026 — written by media buyers who book this inventory every week."
        blocks={[
          { type: "p", text: "Advertising prices in Sri Lanka swing wildly between channels and even between vendors for the same channel. Below is the honest 2026 benchmark we use when we plan campaigns for our own clients." },
          { type: "h2", text: "TV advertising rates" },
          { type: "table", head: ["Channel", "Prime time (30s)", "Off-peak (30s)"], rows: [["Derana / Sirasa / Hiru", "Rs 70,000 – 180,000", "Rs 15,000 – 45,000"], ["TV1 / Shakthi / Vasantham", "Rs 25,000 – 80,000", "Rs 8,000 – 22,000"], ["ITN / Rupavahini", "Rs 30,000 – 90,000", "Rs 10,000 – 25,000"]] },
          { type: "h2", text: "Radio advertising rates" },
          { type: "table", head: ["Station", "Prime time (30s)", "Off-peak (30s)"], rows: [["Hiru FM / Sirasa FM", "Rs 8,000 – 18,000", "Rs 2,500 – 5,000"], ["Yes FM / Y FM", "Rs 4,500 – 10,000", "Rs 1,500 – 3,500"], ["Shakthi FM / Sooriyan", "Rs 3,500 – 8,000", "Rs 1,200 – 3,000"]] },
          { type: "h2", text: "Newspaper advertising rates" },
          { type: "table", head: ["Publication", "Quarter page colour", "Full page colour"], rows: [["Daily Mirror / Daily News", "Rs 85,000 – 140,000", "Rs 320,000 – 540,000"], ["Lankadeepa / Divaina", "Rs 90,000 – 150,000", "Rs 340,000 – 560,000"], ["Thinakkural / Virakesari", "Rs 45,000 – 80,000", "Rs 180,000 – 300,000"]] },
          { type: "h2", text: "Billboard & outdoor rates" },
          { type: "table", head: ["Location tier", "Size", "Per month (LKR)"], rows: [["Galle Road / Liberty / Town Hall", "20×10 ft", "180,000 – 350,000"], ["Suburban junction (Nugegoda, Maharagama)", "15×8 ft", "90,000 – 180,000"], ["Outstation main road", "12×6 ft", "35,000 – 90,000"]] },
          { type: "h2", text: "Digital & social advertising" },
          { type: "table", head: ["Channel", "Monthly ad spend (recommended)", "Management fee"], rows: [["Google Ads", "Rs 50,000+", "Rs 25,000 – 60,000"], ["Meta (Facebook + Instagram)", "Rs 30,000+", "Rs 20,000 – 50,000"], ["TikTok Ads", "Rs 40,000+", "Rs 20,000 – 45,000"], ["YouTube Ads", "Rs 40,000+", "Rs 25,000 – 55,000"]] },
          { type: "h2", text: "WhatsApp, SMS & email" },
          { type: "table", head: ["Channel", "Cost per message", "Setup"], rows: [["Bulk SMS", "Rs 0.50 – 1.20", "Rs 5,000 – 15,000"], ["WhatsApp Business API", "Rs 1.80 – 4.50 / utility", "Rs 25,000 – 60,000"], ["Email marketing", "Rs 0.10 – 0.40", "Rs 15,000 – 40,000"]] },
          { type: "h2", text: "Event advertising & activations" },
          { type: "ul", items: ["Mall activations: Rs 250,000 – 1,200,000 / 3-day weekend", "Roadshows: Rs 180,000 – 600,000 per city per day", "Sampling campaigns: Rs 80,000 – 400,000 per week (excluding product)", "Sponsorship integrations: Rs 500,000 – 5,000,000 depending on property"] },
          { type: "callout", text: "These are 2026 market benchmarks. Actual rates negotiated by experienced media buyers — including our team — are usually 15–35% lower than rate-card." },
        ]}
        faqs={[
          { q: "What is the cheapest way to advertise in Sri Lanka?", a: "WhatsApp marketing, bulk SMS and targeted Meta Ads are the lowest-cost channels — you can start meaningful campaigns from Rs 25,000/month." },
          { q: "Are rate cards negotiable?", a: "Yes. Almost every Sri Lankan media owner negotiates 10–30% off rate card, especially for multi-month commitments." },
          { q: "How are TV ads priced?", a: "By 10-second multiples within day-parts. Prime time = 7pm–10pm; off-peak = daytime and post-midnight." },
        ]}
        related={[
          { href: "/atl-advertising-sri-lanka", label: "ATL Advertising Sri Lanka" },
          { href: "/digital-marketing-sri-lanka", label: "Digital Marketing Sri Lanka" },
          { href: "/outdoor-advertising-sri-lanka", label: "Outdoor Advertising Sri Lanka" },
        ]}
      />
    </PageShell>
  ),
});
