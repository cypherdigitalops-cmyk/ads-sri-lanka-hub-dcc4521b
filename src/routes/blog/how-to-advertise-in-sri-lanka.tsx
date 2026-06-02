import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "blog/how-to-advertise-in-sri-lanka";
const TITLE = "How to Advertise in Sri Lanka — Step-by-Step Guide for Businesses";
const DESC = "A practical, channel-agnostic guide to running your first or next advertising campaign in Sri Lanka — from defining audience to measuring ROI.";

const PRIMARY_ANCHOR = {
  href: "/",
  regex: /(advertising\s+in\s+Sri\s+Lanka)/i,
  fallbackText: "advertising in Sri Lanka",
  ctaLabel: "Get free advice from our team",
  ctaHeadline: "Planning a campaign? Get free, no-obligation advice",
  ctaService: "Advertising in Sri Lanka",
};

export const Route = createFileRoute("/blog/how-to-advertise-in-sri-lanka")({
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
        kicker="Beginner Guide"
        publishedISO="2026-01-15"
        category={{ label: "Advertising Insights", href: "/" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="If you have a product, a budget and a goal, here is the exact sequence to launch an advertising campaign in Sri Lanka that actually moves the needle."
        blocks={[
          { type: "p", text: "Advertising is not magic. It is a series of decisions made in the right order. Skip a step and you lose money; follow the order and a small budget can outperform a big lazy one." },
          { type: "h2", text: "Step 1 — Define your goal" }, { type: "p", text: "Sales? Leads? App installs? Brand awareness? Each goal demands a different channel mix and a different success metric. Pick ONE primary goal per campaign." },
          { type: "h2", text: "Step 2 — Set a realistic budget" }, { type: "p", text: "Allow at least Rs 100,000 for a serious 30-day test in any single channel. Anything less and you cannot draw meaningful conclusions from the data." },
          { type: "h2", text: "Step 3 — Profile your audience" }, { type: "p", text: "Age, language (Sinhala / Tamil / English), location, income, what they read and watch, and crucially — what problem they pay to solve. Without this, channel selection is guesswork." },
          { type: "h2", text: "Step 4 — Pick channels by audience, not by trend" },
          { type: "table", head: ["Audience", "Best channels"], rows: [["Urban 18–34", "Instagram, TikTok, YouTube, Google Ads"], ["Suburban 25–55", "Facebook, WhatsApp, Hiru/Sirasa FM, Lankadeepa"], ["Premium B2C", "Daily Mirror, LinkedIn, Google Search, premium billboards"], ["Rural mass market", "TV (Hiru / Sirasa), radio, leaflet distribution"]] },
          { type: "h2", text: "Step 5 — Create the message and the creative" }, { type: "p", text: "One clear promise + one clear call-to-action. Produce in the language your audience actually speaks. Never translate English-first creative into Sinhala — write it natively." },
          { type: "h2", text: "Step 6 — Launch, then learn weekly" }, { type: "p", text: "Run for at least 4 weeks. Review metrics every 7 days. Kill underperforming ads and double the budget on the winners." },
          { type: "h2", text: "ATL vs BTL vs digital — which to start with?" },
          { type: "ul", items: ["ATL (TV, radio, press, billboards): mass reach, brand-building, high cost", "BTL (sampling, activations, events): direct contact, trial generation, mid cost", "Digital (Google, Meta, TikTok, SEO): measurable, targeted, scalable, low entry cost"] },
        ]}
        faqs={[
          { q: "What is the minimum budget to advertise in Sri Lanka?", a: "You can start with as little as Rs 25,000/month on Meta or Google Ads. For meaningful brand-building add Rs 100,000+/month." },
          { q: "Do I need an agency to advertise in Sri Lanka?", a: "Not strictly. For small digital campaigns you can DIY. For TV, radio, billboards and integrated campaigns a media buyer pays for themselves." },
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
