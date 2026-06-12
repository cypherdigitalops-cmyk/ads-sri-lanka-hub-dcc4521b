import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SITE } from "@/data/site";

const TITLE = "Graphic Design Sri Lanka — Logo, Branding, Print & Digital Design Services";
const DESC = "Professional graphic design services in Sri Lanka — logo design, branding, brochures, packaging, web design, social media design and more. Call 0771437707 for a free quote.";

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Graphic Design Sri Lanka",
  description:
    "Professional graphic design services in Sri Lanka including logo design, branding, brochures, packaging, web design and digital design.",
  provider: {
    "@type": "Organization",
    name: "Advertising Sri Lanka",
    url: SITE.url,
    telephone: SITE.phoneIntl,
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
};

export const Route = createFileRoute("/graphic-design-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "graphic design sri lanka, logo design sri lanka, branding sri lanka, packaging design sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/graphic-design-sri-lanka` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(JSONLD) },
    ],
  }),
  component: GraphicDesignHub,
});

type CardItem = { href: string; icon: string; title: string; desc: string };
type Group = { title: string; items: CardItem[] };

const GROUPS: Group[] = [
  {
    title: "🎨 Logo & Brand Identity",
    items: [
      { href: "/logo-design-sri-lanka", icon: "✏️", title: "Logo Design", desc: "Professional logos that represent your brand." },
      { href: "/brand-identity-design-sri-lanka", icon: "🎯", title: "Brand Identity Design", desc: "Complete visual identity — colours, fonts, logo and guidelines." },
      { href: "/brand-style-guide-sri-lanka", icon: "📘", title: "Brand Style Guide", desc: "A documented rulebook so your brand looks consistent everywhere." },
      { href: "/business-card-design-sri-lanka", icon: "💼", title: "Business Card Design", desc: "First impressions that last — premium business card design." },
      { href: "/stationery-design-sri-lanka", icon: "📋", title: "Stationery Design", desc: "Letterheads, envelopes, folders and branded office stationery." },
    ],
  },
  {
    title: "📄 Print & Graphics Design",
    items: [
      { href: "/company-profile-design-sri-lanka", icon: "🏢", title: "Company Profile Design", desc: "Professional company profiles that win clients and build credibility." },
      { href: "/brochure-design-sri-lanka", icon: "📰", title: "Brochure Design", desc: "Bi-fold, tri-fold and multi-page brochures for every industry." },
      { href: "/flyer-design-sri-lanka", icon: "📄", title: "Flyer Design", desc: "Eye-catching flyers for events, promotions and product launches." },
      { href: "/poster-design-sri-lanka", icon: "🖼️", title: "Poster Design", desc: "Large-format posters for events, retail and brand campaigns." },
      { href: "/catalog-design-sri-lanka", icon: "📚", title: "Catalog Design", desc: "Product catalogs that showcase your range and drive sales." },
      { href: "/menu-design-sri-lanka", icon: "🍽️", title: "Menu Design", desc: "Restaurant and café menus designed to increase orders." },
      { href: "/annual-report-design-sri-lanka", icon: "📊", title: "Annual Report Design", desc: "Corporate annual reports for listed companies, banks and NGOs." },
    ],
  },
  {
    title: "📦 Packaging & Cover Design",
    items: [
      { href: "/packaging-design-sri-lanka", icon: "📦", title: "Packaging Design", desc: "Product packaging that stands out on shelf." },
      { href: "/label-design-sri-lanka", icon: "🏷️", title: "Label Design", desc: "Product labels for bottles, jars, boxes and consumer goods." },
      { href: "/book-cover-design-sri-lanka", icon: "📖", title: "Book Cover Design", desc: "Compelling book covers that attract readers." },
      { href: "/interior-book-design-sri-lanka", icon: "📝", title: "Interior Book Design", desc: "Professional typesetting and layout for print-ready books." },
      { href: "/ebook-cover-design-sri-lanka", icon: "💻", title: "E-book Cover Design", desc: "Digital book covers optimised for online stores." },
      { href: "/magazine-cover-design-sri-lanka", icon: "📰", title: "Magazine Cover Design", desc: "Bold magazine covers and editorial layouts." },
    ],
  },
  {
    title: "💻 Web & App Design",
    items: [
      { href: "/website-design-sri-lanka", icon: "🌐", title: "Website Design", desc: "CMS websites built to convert visitors into customers." },
      { href: "/ecommerce-website-design-sri-lanka", icon: "🛒", title: "E-commerce Website Design", desc: "Online stores designed to sell — fast, mobile and conversion-ready." },
      { href: "/mobile-app-ui-design-sri-lanka", icon: "📱", title: "Mobile App UI Design", desc: "Intuitive mobile app interfaces for iOS and Android." },
      { href: "/ux-design-sri-lanka", icon: "🔍", title: "UX Design", desc: "User experience design that makes digital products easy to use." },
      { href: "/icon-design-sri-lanka", icon: "⭐", title: "Icon Design", desc: "Custom icon sets for apps, websites and brand systems." },
    ],
  },
  {
    title: "📣 Marketing & Digital Design",
    items: [
      { href: "/social-media-post-design-sri-lanka", icon: "📱", title: "Social Media Post Design", desc: "Scroll-stopping graphics for Facebook, Instagram and TikTok." },
      { href: "/thumbnail-design-sri-lanka", icon: "▶️", title: "Thumbnail Design", desc: "YouTube thumbnails that drive clicks and views." },
      { href: "/email-design-sri-lanka", icon: "✉️", title: "Email Design", desc: "Branded email templates and newsletters." },
      { href: "/web-banner-design-sri-lanka", icon: "🖥️", title: "Web Banner Design", desc: "Display ads and web banners for Google and digital advertising." },
      { href: "/signage-design-sri-lanka", icon: "🪧", title: "Signage Design", desc: "Indoor and outdoor signage for shops, offices and events." },
    ],
  },
];

const FAQS = [
  { q: "How much does graphic design cost in Sri Lanka?", a: "Costs vary by service. Logo design starts from Rs 15,000. Brochures from Rs 8,000. Company profiles from Rs 25,000. Packaging design from Rs 20,000. Call 0771437707 for a same-day quote." },
  { q: "How long does graphic design take?", a: "Simple designs like flyers and social media posts can be delivered within 24–48 hours. Logos take 5–10 working days. Company profiles or packaging take 1–3 weeks." },
  { q: "Do you design in Sinhala and Tamil?", a: "Yes — we design in Sinhala, Tamil and English, including proper Unicode typography for both scripts." },
  { q: "What files will I receive?", a: "You receive editable source files (AI or PSD), print-ready PDFs, and web formats (PNG, JPG, SVG). You own all files outright." },
];

function GraphicDesignHub() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-[#15224a] via-[#1e3a8a] to-[#2563eb] px-6 py-20 text-center text-white">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#93c5fd]">
          Graphic Design Services in Sri Lanka
        </div>
        <h1 className="mx-auto text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          Sri Lanka's Complete<br />
          <span className="text-[#60a5fa]">Graphic Design</span> Hub
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#bfdbfe]">
          From logo design and brand identity to packaging, brochures, web design and social media — every graphic design service your business needs, in one place.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`tel:${SITE.phone}`} className="rounded-md border-2 border-[#2563eb] bg-[#2563eb] px-7 py-3.5 text-sm font-bold text-white hover:opacity-90">
            📞 Call {SITE.phone}
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener" className="rounded-md border-2 border-white/50 bg-transparent px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10">
            💬 WhatsApp Us
          </a>
        </div>
      </section>

      <section className="bg-[#f0f7ff] px-6 py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            { n: "27+", l: "Design Services" },
            { n: "500+", l: "Businesses Served" },
            { n: "20+", l: "Years Experience" },
            { n: "24/7", l: "Free Guidance" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-extrabold text-[#15224a]">{s.n}</div>
              <div className="mt-1 text-xs text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">All Graphic Design Services in Sri Lanka</h2>
        <p className="mb-10 mt-3 text-base text-slate-500">Browse all 27 design services — each with a full guide on what it costs and how to get started.</p>

        {GROUPS.map((g) => (
          <div key={g.title} className="mb-12">
            <div className="mb-4 border-b-2 border-[#e0eaff] pb-2 text-xs font-bold uppercase tracking-[2px] text-[#2563eb]">
              {g.title}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it) => (
                <Link
                  key={it.href}
                  to={it.href as never}
                  className="block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#2563eb] hover:shadow-[0_4px_20px_rgba(37,99,235,0.12)]"
                >
                  <div className="mb-2 text-2xl">{it.icon}</div>
                  <div className="mb-1.5 text-[15px] font-bold text-[#15224a]">{it.title}</div>
                  <div className="text-[13px] leading-relaxed text-slate-500">{it.desc}</div>
                  <span className="mt-3 inline-block text-[13px] font-semibold text-[#2563eb]">Full guide →</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#15224a] px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-extrabold sm:text-3xl">How Graphic Design Works in Sri Lanka</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Brief Us", d: `Call ${SITE.phone} or WhatsApp with your project details.` },
              { n: "02", t: "Get a Quote", d: "We send a clear quote the same business day." },
              { n: "03", t: "Design & Review", d: "Our designers deliver concepts. You review and we refine." },
              { n: "04", t: "Final Files", d: "Receive print-ready and web-ready files in all formats." },
            ].map((s) => (
              <div key={s.n}>
                <div className="mb-2 text-4xl font-black text-[#60a5fa]">{s.n}</div>
                <div className="mb-1.5 text-base font-bold">{s.t}</div>
                <div className="text-sm leading-relaxed text-[#93c5fd]">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-extrabold text-[#15224a] sm:text-3xl">Frequently Asked Questions</h2>
        {FAQS.map((f) => (
          <div key={f.q} className="border-b border-slate-200 py-5">
            <div className="mb-2 text-base font-bold text-[#15224a]">{f.q}</div>
            <div className="text-[15px] leading-relaxed text-slate-600">{f.a}</div>
          </div>
        ))}
      </section>

      <section className="bg-[#2563eb] px-6 py-16 text-center text-white">
        <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">Get a Free Graphic Design Quote Today</h2>
        <p className="mb-7 text-base text-[#bfdbfe]">Call or WhatsApp us with your brief — free quote within the same business day.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={`tel:${SITE.phone}`} className="rounded-md bg-white px-7 py-3.5 text-sm font-bold text-[#2563eb] hover:opacity-90">
            📞 Call {SITE.phone}
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener" className="rounded-md bg-[#25d366] px-7 py-3.5 text-sm font-bold text-white hover:opacity-90">
            💬 WhatsApp Us
          </a>
        </div>
      </section>
    </PageShell>
  );
}
