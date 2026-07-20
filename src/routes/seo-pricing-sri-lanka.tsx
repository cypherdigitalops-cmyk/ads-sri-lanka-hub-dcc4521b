import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/site";

const TITLE = "SEO Pricing in Sri Lanka — Monthly Packages & Project Costs (2026)";
const DESC = "Real SEO pricing in Sri Lanka — monthly retainers, one-off audits, local SEO and link-building packages. What you should pay and what to expect at each tier.";
const SLUG = "seo-pricing-sri-lanka";

const ROWS: { format: string; cost: string; notes: string }[] = [
  {
    "format": "Starter (local / 1 city)",
    "cost": "LKR 35,000 – 65,000 / month",
    "notes": "GMB, on-page, 2–4 blogs, light links."
  },
  {
    "format": "Growth (SME, multi-page site)",
    "cost": "LKR 75,000 – 150,000 / month",
    "notes": "Technical, 6–10 blogs, 4–8 links/month."
  },
  {
    "format": "Enterprise / e-commerce",
    "cost": "LKR 180,000 – 500,000+ / month",
    "notes": "Dedicated team, programmatic SEO, PR links."
  },
  {
    "format": "One-off technical SEO audit",
    "cost": "LKR 60,000 – 250,000",
    "notes": "Crawl, fixes brief, schema, Core Web Vitals."
  },
  {
    "format": "Local SEO setup (GMB + 20 citations)",
    "cost": "LKR 35,000 – 90,000",
    "notes": "One-time onboarding fee."
  },
  {
    "format": "Link building (per quality link)",
    "cost": "LKR 6,000 – 30,000",
    "notes": "DA 20–60, niche-relevant, no PBNs."
  },
  {
    "format": "Content writing (per 1,000 words, SEO-optimised)",
    "cost": "LKR 4,000 – 18,000",
    "notes": "English, Sinhala or Tamil."
  }
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Are these prices fixed?", acceptedAnswer: { "@type": "Answer", text: "No. These are indicative 2026 ranges from live Sri Lankan campaigns. Final quotes depend on volume, season, contract length and creative scope." } },
    { "@type": "Question", name: "Do you give written quotes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Call 0701772626 or WhatsApp us for a free written quote tailored to your brief." } },
    { "@type": "Question", name: "Do prices include taxes?", acceptedAnswer: { "@type": "Answer", text: "Ranges shown are net of VAT and other applicable government taxes." } },
  ],
};

export const Route = createFileRoute("/seo-pricing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: `seo pricing sri lanka, advertising cost sri lanka, advertising rates sri lanka` },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/${SLUG}` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/${SLUG}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) }],
  }),
  component: CostPage,
});

function CostPage() {
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-primary-foreground/80">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Cost Guides", to: "/advertising-rates" }, { label: TITLE }]} />
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">SEO Pricing in Sri Lanka</h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/85">{DESC}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 text-muted-foreground">
        <p>Sustainable SEO in Sri Lanka needs a 6–12 month commitment. These are realistic monthly retainer ranges by tier.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Indicative 2026 rate card</h2>
        <div className="mt-5 overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/40 text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Format / option</th>
                <th className="px-4 py-3 font-semibold">Typical cost</th>
                <th className="px-4 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.format} className="border-t border-border align-top">
                  <td className="px-4 py-3 font-medium text-foreground">{r.format}</td>
                  <td className="px-4 py-3 text-foreground/90">{r.cost}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">What SEO actually costs in Sri Lanka — and why the spread is so wide</h2>
        <p className="mt-3">SEO pricing in Sri Lanka ranges from LKR 25,000/month at the very bottom to LKR 500,000+/month for enterprise-scale work. The reason for the spread is simple: SEO is a labour-intensive engagement, and the deliverables under each price point are dramatically different. A LKR 35,000 retainer might cover 1 hour of consulting plus 2 short blogs; a LKR 200,000 retainer might cover a dedicated content writer, an off-page link builder, monthly technical audits, schema implementation, internal linking architecture and conversion-rate work on landing pages.</p>
        <p className="mt-3">Two indicators reliably predict whether an SEO offer is real or theatre. First, ask exactly how many hours per month a senior person will spend on your account — anything below 12–15 hours is unlikely to move competitive Sri Lankan rankings. Second, ask to see the last 3 client case studies with before/after screenshots from Google Search Console — agencies that cannot produce these are almost always running boilerplate retainers.</p>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Realistic retainer tiers and what each should deliver</h2>
        <p className="mt-3">Useful 2026 tiers for Sri Lankan SMEs and enterprises:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Local / single-city (LKR 35,000–65,000/month):</strong> Google Business Profile optimisation, on-page for 8–15 core service pages, 2–4 blog posts per month, light citation building, monthly ranking and traffic report.</li>
          <li><strong>Growth SME (LKR 75,000–150,000/month):</strong> technical audit fixes, schema markup, 6–10 blog posts per month, 4–8 quality backlinks per month, internal linking work, conversion-tracking setup, monthly strategy call.</li>
          <li><strong>Enterprise / e-commerce (LKR 180,000–500,000+/month):</strong> dedicated team (strategist + writer + outreach + developer), programmatic SEO for category and location pages, digital PR for high-DA links, multilingual (Sinhala/Tamil/English) content, Core Web Vitals engineering work, conversion-rate optimisation on top pages.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">One-off SEO projects and what they typically cost</h2>
        <p className="mt-3">Not every business needs an ongoing retainer. Common one-off engagements priced in Sri Lanka:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Technical SEO audit (LKR 60,000–250,000):</strong> full crawl, Core Web Vitals analysis, indexation report, prioritised fix list with developer-ready briefs. Most useful before a redesign or migration.</li>
          <li><strong>Keyword and competitor research project (LKR 45,000–120,000):</strong> validated keyword universe, search-intent mapping, content-gap analysis vs top 3 competitors, 6–12 month content roadmap.</li>
          <li><strong>Site migration SEO (LKR 150,000–500,000):</strong> redirect mapping, pre-launch QA, post-launch monitoring for 4–6 weeks. Skipping this is the single most common cause of catastrophic traffic loss in Sri Lankan rebrands.</li>
          <li><strong>Local SEO setup (LKR 35,000–90,000):</strong> Google Business Profile optimisation, 20–40 citations across SL business directories, review-generation workflow setup.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Realistic timeline — what to expect month by month</h2>
        <p className="mt-3">SEO is a 6–12 month engagement before compounding returns are obvious. A realistic timeline for a competitive Sri Lankan keyword set:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Month 1–2:</strong> audit, fixes, content plan, first batch of optimised pages live. Little visible traffic change.</li>
          <li><strong>Month 3–4:</strong> long-tail rankings begin moving; first measurable organic traffic lift (typically 15–30%).</li>
          <li><strong>Month 5–6:</strong> mid-tail commercial keywords reach page 1; organic leads/sales become measurable in CRM.</li>
          <li><strong>Month 7–12:</strong> head-term rankings move; traffic typically 2–4× the baseline for sustained engagements.</li>
          <li><strong>Month 12+:</strong> compounding effect — same effort yields disproportionately higher returns as domain authority and topical coverage build.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Red flags when buying SEO in Sri Lanka</h2>
        <p className="mt-3">Three offers to walk away from immediately, no matter how attractive the price:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>"Guaranteed #1 ranking" promises.</strong> Nobody can guarantee Google rankings. Any agency that does is either misleading you or using risky techniques that will eventually trigger a manual action.</li>
          <li><strong>Cheap mass link building (LKR 500–2,000 per link).</strong> These are almost always private blog networks or unrelated foreign directories. They can actively hurt rankings via Google's spam algorithms.</li>
          <li><strong>Monthly reports with only "keyword positions" and no traffic, conversion, or business-outcome data.</strong> Rankings without traffic and traffic without conversions are vanity. Insist on Search Console traffic, GA4 sessions, and conversion tracking in every report.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground sm:text-3xl">Get a tailored quote</h2>
        <p className="mt-3">Every brand has different audiences, seasons and goals. Call <a className="text-primary underline-offset-2 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a> or visit our <Link to="/get-quote" className="text-primary underline-offset-2 hover:underline">free quote form</Link> for a written estimate within 24 hours.</p>

        <p className="mt-6 text-sm">See the full <Link to="/advertising-rates" className="text-primary underline-offset-2 hover:underline">Sri Lanka advertising rates guide</Link> for every other channel.</p>
      </section>

      <CTASection />
    </PageShell>
  );
}
