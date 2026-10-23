import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/site/Templates";
import { DigitalMarketingGuide } from "@/components/site/DigitalMarketingGuide";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";
const TITLE = "SEO Pricing Sri Lanka | Budget & Fee Guide";
const DESC = "Understand seo pricing in Sri Lanka: media spend, management fees, creative costs and qualified-lead measurement. Compare an itemised quote.";
export const Route = createFileRoute("/seo-pricing-sri-lanka")({
 head: () => ({ meta: [
  { title: TITLE }, { name: "description", content: DESC },
  { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
  { property: "og:type", content: "website" }, { property: "og:url", content: SITE.url + "/seo-pricing-sri-lanka" },
  { name: "twitter:card", content: "summary_large_image" },
 ], links: [{ rel: "canonical", href: SITE.url + "/seo-pricing-sri-lanka" }] }),
 component: () => <PageShell>
  <Hero kicker="Marketing budget guide" h1="SEO Pricing in Sri Lanka" intro={DESC} crumbs={[{ label: "Home", to: "/" }, { label: "Cost Guides", to: "/advertising-rates" }, { label: "SEO Pricing" }]} />
  <DigitalMarketingGuide path="seo-pricing-sri-lanka" />
  <div className="mx-auto max-w-7xl px-4"><CTASection service="SEO Pricing" headline="Request an itemised marketing quote" sub="Share your objective, customer area and available budget range." /></div>
 </PageShell>,
});
