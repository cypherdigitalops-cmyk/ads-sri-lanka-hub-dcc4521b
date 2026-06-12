import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SITE } from "@/data/site";
import { Hero, Bullets, FAQ } from "@/components/site/Templates";
import { MidContentWhatsAppCTA, CTASection } from "@/components/site/CTASection";
import { ArrowRight, Printer } from "lucide-react";

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
      <Hero
        kicker="Graphic Design • Sri Lanka"
        h1={data.h1}
        intro={data.intro}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Graphic Design Sri Lanka", to: "/graphic-design-sri-lanka" },
          { label: data.h1 },
        ]}
      />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-2xl font-bold sm:text-3xl">What is {data.h1}?</h2>
        <p className="mt-4 text-muted-foreground">{data.whatIs}</p>
        <h2 className="mt-10 text-2xl font-bold sm:text-3xl">Who Needs {data.h1}?</h2>
        <p className="mt-4 text-muted-foreground">{data.whoNeeds}</p>
      </section>

      {data.longForm?.length ? (
        <section className="mx-auto max-w-3xl px-4 pb-8">
          <div className="space-y-10">
            {data.longForm.map((sec) => (
              <div key={sec.h2}>
                <h2 className="text-2xl font-bold sm:text-3xl">{sec.h2}</h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="mt-4 text-muted-foreground">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <Bullets title={`What's included in our ${data.h1} service`} items={data.included} />

      <MidContentWhatsAppCTA service={data.h1} />

      <FAQ items={data.faqs} />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-bold sm:text-3xl">Related Graphic Design Services</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {RELATED.map((r) => (
            <Link
              key={r.href}
              to={r.href as never}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary/40"
            >
              {r.label}
            </Link>
          ))}
          <Link
            to={"/graphic-design-sri-lanka" as never}
            className="inline-flex items-center gap-1 rounded-full bg-[image:var(--gradient-hero)] px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            All Design Services <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {PRINTING_LINKS[data.slug]?.length ? (
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-accent)] text-accent-foreground">
                <Printer className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Need it printed too?</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Once your {data.h1.toLowerCase()} is ready, we can print it in-house. Explore our most relevant{" "}
              <Link to={"/printing-services-sri-lanka" as never} className="font-semibold text-primary underline-offset-2 hover:underline">
                printing services in Sri Lanka
              </Link>
              :
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {PRINTING_LINKS[data.slug].map((p) => (
                <Link
                  key={p.href}
                  to={p.href as never}
                  className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-primary transition hover:border-primary/40"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <CTASection
        headline={`Get a Free Quote for ${data.h1}`}
        sub="Call or WhatsApp us — free quote the same business day. No obligation."
        service={data.h1}
      />
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