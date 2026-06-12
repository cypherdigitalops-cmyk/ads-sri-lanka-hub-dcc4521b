import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SITE } from "@/data/site";

export type DesignFAQ = { q: string; a: string };
export type DesignLongFormSection = { h2: string; paragraphs: string[] };

export type DesignSubService = {
  slug: string;
  /** Human title used in breadcrumb + H1 + JSON-LD */
  h1: string;
  /** <title> tag */
  metaTitle: string;
  /** meta description */
  metaDescription: string;
  /** Short hero intro paragraph */
  intro: string;
  whatIs: string;
  whoNeeds: string;
  included: string[];
  cost?: string;
  faqs: DesignFAQ[];
  /** Optional long-form body (~1000 words) rendered between "Who Needs" and "What is Included". */
  longForm?: DesignLongFormSection[];
};

const RELATED = [
  { href: "/logo-design-sri-lanka", label: "Logo Design" },
  { href: "/brand-identity-design-sri-lanka", label: "Brand Identity" },
  { href: "/brochure-design-sri-lanka", label: "Brochure Design" },
  { href: "/packaging-design-sri-lanka", label: "Packaging Design" },
  { href: "/website-design-sri-lanka", label: "Website Design" },
  { href: "/social-media-post-design-sri-lanka", label: "Social Media Design" },
];

// Map each design sub-service slug to the printing services most likely to be
// purchased alongside it. Anchor text uses the exact printing keyword so the
// internal link reinforces the printing page's target keyword.
const PRINTING_LINKS: Record<string, { href: string; label: string }[]> = {
  "flyer-design-sri-lanka": [
    { href: "/flyer-printing-sri-lanka", label: "flyer printing Sri Lanka" },
    { href: "/digital-printing-sri-lanka", label: "digital printing Sri Lanka" },
    { href: "/offset-printing-sri-lanka", label: "offset printing Sri Lanka" },
  ],
  "poster-design-sri-lanka": [
    { href: "/poster-printing-sri-lanka", label: "poster printing Sri Lanka" },
    { href: "/large-format-printing-sri-lanka", label: "large format printing Sri Lanka" },
    { href: "/canvas-printing-sri-lanka", label: "canvas printing Sri Lanka" },
  ],
  "business-card-design-sri-lanka": [
    { href: "/business-card-printing-sri-lanka", label: "business card printing Sri Lanka" },
    { href: "/spot-uv-printing-sri-lanka", label: "spot UV printing Sri Lanka" },
    { href: "/embossed-printing-sri-lanka", label: "embossed printing Sri Lanka" },
  ],
  "brochure-design-sri-lanka": [
    { href: "/brochure-printing-sri-lanka", label: "brochure printing Sri Lanka" },
    { href: "/booklet-printing-sri-lanka", label: "booklet printing Sri Lanka" },
    { href: "/offset-printing-sri-lanka", label: "offset printing Sri Lanka" },
  ],
  "packaging-design-sri-lanka": [
    { href: "/box-printing-sri-lanka", label: "box printing Sri Lanka" },
    { href: "/gift-box-printing-sri-lanka", label: "gift box printing Sri Lanka" },
    { href: "/paper-bag-printing-sri-lanka", label: "paper bag printing Sri Lanka" },
    { href: "/shrink-sleeve-printing-sri-lanka", label: "shrink sleeve printing Sri Lanka" },
  ],
  "label-design-sri-lanka": [
    { href: "/label-printing-sri-lanka", label: "label printing Sri Lanka" },
    { href: "/roll-label-printing-sri-lanka", label: "roll label printing Sri Lanka" },
    { href: "/barcode-label-printing-sri-lanka", label: "barcode label printing Sri Lanka" },
    { href: "/security-label-printing-sri-lanka", label: "security label printing Sri Lanka" },
  ],
  "menu-design-sri-lanka": [
    { href: "/menu-printing-sri-lanka", label: "menu printing Sri Lanka" },
    { href: "/digital-printing-sri-lanka", label: "digital printing Sri Lanka" },
    { href: "/spot-uv-printing-sri-lanka", label: "spot UV printing Sri Lanka" },
  ],
  "magazine-cover-design-sri-lanka": [
    { href: "/booklet-printing-sri-lanka", label: "booklet printing Sri Lanka" },
    { href: "/offset-printing-sri-lanka", label: "offset printing Sri Lanka" },
    { href: "/catalogue-printing-sri-lanka", label: "catalogue printing Sri Lanka" },
  ],
  "catalog-design-sri-lanka": [
    { href: "/catalogue-printing-sri-lanka", label: "catalogue printing Sri Lanka" },
    { href: "/booklet-printing-sri-lanka", label: "booklet printing Sri Lanka" },
    { href: "/offset-printing-sri-lanka", label: "offset printing Sri Lanka" },
  ],
  "book-cover-design-sri-lanka": [
    { href: "/booklet-printing-sri-lanka", label: "booklet printing Sri Lanka" },
    { href: "/offset-printing-sri-lanka", label: "offset printing Sri Lanka" },
    { href: "/spot-uv-printing-sri-lanka", label: "spot UV printing Sri Lanka" },
  ],
  "interior-book-design-sri-lanka": [
    { href: "/booklet-printing-sri-lanka", label: "booklet printing Sri Lanka" },
    { href: "/offset-printing-sri-lanka", label: "offset printing Sri Lanka" },
  ],
  "company-profile-design-sri-lanka": [
    { href: "/booklet-printing-sri-lanka", label: "booklet printing Sri Lanka" },
    { href: "/presentation-folder-printing-sri-lanka", label: "presentation folder printing Sri Lanka" },
    { href: "/annual-report-printing-sri-lanka", label: "annual report printing Sri Lanka" },
  ],
  "stationery-design-sri-lanka": [
    { href: "/letterhead-printing-sri-lanka", label: "letterhead printing Sri Lanka" },
    { href: "/business-card-printing-sri-lanka", label: "business card printing Sri Lanka" },
    { href: "/invoice-book-printing-sri-lanka", label: "invoice book printing Sri Lanka" },
    { href: "/notebook-printing-sri-lanka", label: "notebook printing Sri Lanka" },
  ],
  "brand-identity-design-sri-lanka": [
    { href: "/business-card-printing-sri-lanka", label: "business card printing Sri Lanka" },
    { href: "/letterhead-printing-sri-lanka", label: "letterhead printing Sri Lanka" },
    { href: "/presentation-folder-printing-sri-lanka", label: "presentation folder printing Sri Lanka" },
  ],
  "brand-style-guide-sri-lanka": [
    { href: "/booklet-printing-sri-lanka", label: "booklet printing Sri Lanka" },
    { href: "/offset-printing-sri-lanka", label: "offset printing Sri Lanka" },
  ],
  "signage-design-sri-lanka": [
    { href: "/foam-board-printing-sri-lanka", label: "foam board printing Sri Lanka" },
    { href: "/forex-board-printing-sri-lanka", label: "forex board printing Sri Lanka" },
    { href: "/neon-sign-printing-sri-lanka", label: "neon sign printing Sri Lanka" },
    { href: "/event-signage-printing-sri-lanka", label: "event signage printing Sri Lanka" },
  ],
  "web-banner-design-sri-lanka": [
    { href: "/banner-printing-sri-lanka", label: "banner printing Sri Lanka" },
    { href: "/roll-up-banner-printing-sri-lanka", label: "roll-up banner printing Sri Lanka" },
    { href: "/x-banner-printing-sri-lanka", label: "X banner printing Sri Lanka" },
  ],
  "social-media-post-design-sri-lanka": [
    { href: "/poster-printing-sri-lanka", label: "poster printing Sri Lanka" },
    { href: "/flyer-printing-sri-lanka", label: "flyer printing Sri Lanka" },
  ],
  "thumbnail-design-sri-lanka": [
    { href: "/poster-printing-sri-lanka", label: "poster printing Sri Lanka" },
  ],
  "email-design-sri-lanka": [
    { href: "/flyer-printing-sri-lanka", label: "flyer printing Sri Lanka" },
    { href: "/brochure-printing-sri-lanka", label: "brochure printing Sri Lanka" },
  ],
  "icon-design-sri-lanka": [
    { href: "/sticker-printing-sri-lanka", label: "sticker printing Sri Lanka" },
  ],
  "website-design-sri-lanka": [
    { href: "/business-card-printing-sri-lanka", label: "business card printing Sri Lanka" },
    { href: "/brochure-printing-sri-lanka", label: "brochure printing Sri Lanka" },
  ],
  "ecommerce-website-design-sri-lanka": [
    { href: "/box-printing-sri-lanka", label: "box printing Sri Lanka" },
    { href: "/sticker-printing-sri-lanka", label: "sticker printing Sri Lanka" },
    { href: "/hang-tag-printing-sri-lanka", label: "hang tag printing Sri Lanka" },
  ],
  "ux-design-sri-lanka": [
    { href: "/printing-services-sri-lanka", label: "printing services Sri Lanka" },
  ],
  "mobile-app-ui-design-sri-lanka": [
    { href: "/sticker-printing-sri-lanka", label: "sticker printing Sri Lanka" },
  ],
};

export function DesignSubServicePage({ data }: { data: DesignSubService }) {
  return (
    <PageShell>
      <div className="bg-slate-50 px-6 py-3 text-[13px] text-slate-500">
        <Link to="/" className="text-[#2563eb]">Home</Link> ›{" "}
        <Link to={"/graphic-design-sri-lanka" as never} className="text-[#2563eb]">Graphic Design Sri Lanka</Link> › {data.h1}
      </div>

      <section className="bg-gradient-to-br from-[#15224a] via-[#1e3a8a] to-[#2563eb] px-6 py-16 text-center text-white">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#93c5fd]">
          Graphic Design Services — Sri Lanka
        </div>
        <h1 className="mx-auto text-3xl font-extrabold leading-tight sm:text-4xl md:text-[46px]">{data.h1}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-[#bfdbfe]">{data.intro}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={`tel:${SITE.phone}`} className="rounded-md border-2 border-[#2563eb] bg-[#2563eb] px-6 py-3 text-sm font-bold text-white">📞 Call {SITE.phone}</a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener" className="rounded-md bg-[#25d366] px-6 py-3 text-sm font-bold text-white">💬 WhatsApp Us</a>
          <Link to={"/get-quote" as never} className="rounded-md border-2 border-white/50 px-6 py-3 text-sm font-bold text-white">Get Free Quote</Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="mb-3 text-xl font-extrabold text-[#15224a] sm:text-2xl">What is {data.h1}?</h2>
        <p className="mb-6 text-base leading-loose text-slate-600">{data.whatIs}</p>
        <h2 className="mb-3 text-xl font-extrabold text-[#15224a] sm:text-2xl">Who Needs {data.h1}?</h2>
        <p className="mb-8 text-base leading-loose text-slate-600">{data.whoNeeds}</p>

        {data.longForm?.length ? (
          <div className="mb-8 space-y-6">
            {data.longForm.map((sec) => (
              <div key={sec.h2}>
                <h2 className="mb-3 text-xl font-extrabold text-[#15224a] sm:text-2xl">{sec.h2}</h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="mb-4 text-base leading-loose text-slate-600">{p}</p>
                ))}
              </div>
            ))}
          </div>
        ) : null}

        <div className="mb-6 rounded-xl border border-[#e0eaff] bg-[#f0f7ff] p-6">
          <h3 className="mb-3 text-lg font-bold text-[#15224a]">What is Included</h3>
          <ul className="list-disc space-y-1.5 pl-5 text-[15px] text-slate-700">
            {data.included.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-xl font-extrabold text-[#15224a] sm:text-2xl">Frequently Asked Questions</h2>
          {data.faqs.map((f) => (
            <div key={f.q} className="border-b border-slate-200 py-4">
              <div className="mb-1.5 text-base font-bold text-[#15224a]">{f.q}</div>
              <div className="text-[15px] leading-relaxed text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-4 text-xl font-extrabold text-[#15224a]">Related Graphic Design Services</h2>
        <div className="flex flex-wrap gap-2">
          {RELATED.map((r) => (
            <Link key={r.href} to={r.href as never} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-semibold text-[#2563eb] hover:border-[#2563eb]">
              {r.label}
            </Link>
          ))}
          <Link to={"/graphic-design-sri-lanka" as never} className="rounded-full bg-[#2563eb] px-4 py-2 text-[13px] font-semibold text-white">
            All Design Services →
          </Link>
        </div>
        {PRINTING_LINKS[data.slug]?.length ? (
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="mb-2 text-lg font-bold text-[#15224a]">Need it printed too?</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-slate-600">
              Once your {data.h1.toLowerCase()} is ready, we can print it in-house.
              Explore our most relevant{" "}
              <Link to={"/printing-services-sri-lanka" as never} className="font-semibold text-[#2563eb] underline">
                printing services in Sri Lanka
              </Link>
              :
            </p>
            <ul className="list-disc space-y-1.5 pl-5 text-[15px] text-slate-700">
              {PRINTING_LINKS[data.slug].map((p) => (
                <li key={p.href}>
                  <Link to={p.href as never} className="font-semibold text-[#2563eb] hover:underline">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section className="bg-[#2563eb] px-6 py-14 text-center text-white">
        <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">Get a Free Quote for {data.h1}</h2>
        <p className="mb-6 text-[15px] text-[#bfdbfe]">Call or WhatsApp us — free quote the same business day. No obligation.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={`tel:${SITE.phone}`} className="rounded-md bg-white px-6 py-3 text-sm font-bold text-[#2563eb]">📞 Call {SITE.phone}</a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener" className="rounded-md bg-[#25d366] px-6 py-3 text-sm font-bold text-white">💬 WhatsApp Us</a>
        </div>
      </section>
    </PageShell>
  );
}

export function designServiceHead(data: DesignSubService) {
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.h1,
    description: data.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Advertising Sri Lanka",
      url: SITE.url,
      telephone: SITE.phoneIntl,
    },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    serviceType: "Graphic Design",
  };
  return {
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDescription },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/${data.slug}` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/${data.slug}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonld) }],
  };
}