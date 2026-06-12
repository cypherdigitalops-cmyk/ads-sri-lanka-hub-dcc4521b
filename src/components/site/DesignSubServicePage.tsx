import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SITE } from "@/data/site";

export type DesignFAQ = { q: string; a: string };

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
};

const RELATED = [
  { href: "/logo-design-sri-lanka", label: "Logo Design" },
  { href: "/brand-identity-design-sri-lanka", label: "Brand Identity" },
  { href: "/brochure-design-sri-lanka", label: "Brochure Design" },
  { href: "/packaging-design-sri-lanka", label: "Packaging Design" },
  { href: "/website-design-sri-lanka", label: "Website Design" },
  { href: "/social-media-post-design-sri-lanka", label: "Social Media Design" },
];

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