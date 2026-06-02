import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/tv-advertising-sri-lanka";
const TITLE = "TV Advertising in Sri Lanka — Channels, Rates & How It Works";
const DESC = "A complete 2026 guide to TV advertising in Sri Lanka — channel audience profiles, prime time vs off-peak rates, TVC production costs and how to book a campaign.";

const PRIMARY_ANCHOR = {
  href: "/",
  regex: /(advertising\s+in\s+Sri\s+Lanka)/i,
  fallbackText: "advertising in Sri Lanka",
  ctaLabel: "Get free advice from our team",
  ctaHeadline: "Planning a campaign? Get free, no-obligation advice",
  ctaService: "Advertising in Sri Lanka",
};

export const Route = createFileRoute("/blog/tv-advertising-sri-lanka")({
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
        kicker="TV Advertising"
        publishedISO="2026-01-30"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="TV still delivers the biggest single-day reach of any medium in Sri Lanka. Here is exactly how to plan, produce and book a TV campaign in 2026."
        blocks={[
          { type: "h2", text: "Sri Lankan TV channel landscape" },
          { type: "table", head: ["Channel", "Language", "Core audience"], rows: [["Sirasa TV", "Sinhala", "Mass market, 25–55, all-island"], ["Derana", "Sinhala", "Urban + suburban, 20–45, premium-leaning"], ["Hiru TV", "Sinhala", "Mass market, 30–60, strong rural"], ["TV1 / MTV Sports", "English / Sinhala", "Urban affluent, 25–50"], ["Siyatha TV", "Sinhala", "Family, religious & teledrama viewers"], ["Shakthi TV / Vasantham", "Tamil", "Northern & Eastern Tamil-speaking households"], ["ITN / Rupavahini", "Sinhala / English", "Older / national broadcaster audience"]] },
          { type: "h2", text: "Day-parts and rates (2026)" },
          { type: "table", head: ["Day-part", "Time", "30s spot (LKR)"], rows: [["Prime time", "7pm – 10pm", "70,000 – 180,000"], ["Pre-prime", "5pm – 7pm", "35,000 – 80,000"], ["Daytime", "12pm – 5pm", "10,000 – 30,000"], ["Late night", "10pm – 12am", "20,000 – 60,000"], ["Off-peak", "12am – 12pm", "5,000 – 15,000"]] },
          { type: "h2", text: "TVC production costs" },
          { type: "ul", items: ["Basic single-location TVC: Rs 350,000 – 800,000", "Standard multi-location TVC: Rs 800,000 – 2,500,000", "Premium celebrity / VFX TVC: Rs 2,500,000 – 8,000,000+"] },
          { type: "h2", text: "How to book a TV campaign" }, { type: "ol", items: ["Decide channels by audience overlap (use TAM/AGB data if available)", "Set GRP target (how many times your audience sees the ad)", "Negotiate the deal — most channels discount 15–30% off rate card", "Produce TVC variants in Sinhala and Tamil where the audience needs it", "Submit final files 48 hours before first telecast", "Track GRPs and reach weekly, optimise spot placement"] },
        ]}
        faqs={[
          { q: "What is the minimum TV advertising budget in Sri Lanka?", a: "A meaningful 2-week burst on a single channel starts around Rs 500,000 of media spend, plus TVC production." },
          { q: "How are TV spots sold?", a: "By 10-second multiples within named programmes or day-parts. 30s is the most common spot length." },
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
