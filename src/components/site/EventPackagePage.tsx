import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { EVENT_PACKAGE_PAGE_MAP, EVENT_PACKAGE_PUBLISHED, type EventPackagePage as PageData } from "@/data/cypher-events-package";
import { Markdown } from "./BriefBlogPost";
import { CTASection } from "./CTASection";
import { EventBudgetCalculator } from "./EventBudgetCalculator";

const AUTHOR = "Advertising Sri Lanka Editorial Team";
const CALCULATOR_TOKEN = "[[EVENT_BUDGET_CALCULATOR]]";

function pageFor(path: string): PageData {
  const page = EVENT_PACKAGE_PAGE_MAP[path];
  if (!page) throw new Error(`Unknown event package page: ${path}`);
  return page;
}

const plainText = (value: string) => value
  .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
  .replace(/\*\*/g, "")
  .replace(/\s+/g, " ")
  .trim();

export function eventPackageHead(path: string) {
  const page = pageFor(path);
  const url = `${SITE.url}${path}`;
  const breadcrumbs = page.kind === "blog"
    ? [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
        { "@type": "ListItem", position: 3, name: page.h1, item: url },
      ]
    : [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: page.h1, item: url },
      ];
  const primarySchema = page.kind === "blog"
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: page.h1,
        description: page.description,
        author: { "@type": "Organization", name: AUTHOR },
        publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
        datePublished: EVENT_PACKAGE_PUBLISHED,
        dateModified: EVENT_PACKAGE_PUBLISHED,
        mainEntityOfPage: url,
      }
    : {
        "@context": "https://schema.org",
        "@type": "Service",
        name: page.title,
        description: page.description,
        provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
        areaServed: { "@type": "Country", name: "Sri Lanka" },
        url,
      };

  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { name: "keywords", content: page.keyword },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: page.kind === "blog" ? "article" : "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      primarySchema,
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbs },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: plainText(faq.a) },
        })),
      },
    ].map((schema) => ({ type: "application/ld+json", children: JSON.stringify(schema) })),
  };
}

function PackageContent({ page }: { page: PageData }) {
  const markdownProps = page.path === "/event-budget-calculator-sri-lanka"
    ? { customBlocks: { [CALCULATOR_TOKEN]: <EventBudgetCalculator /> } }
    : {};

  return (
    <>
      <Markdown source={page.body} {...markdownProps} />
      <section aria-labelledby="event-package-faq-title" className="mt-12">
        <h2 id="event-package-faq-title" className="text-2xl font-bold text-foreground">Frequently asked questions</h2>
        <div className="mt-5 space-y-5">
          {page.faqs.map((faq) => (
            <Fragment key={faq.q}>
              <h3 className="text-lg font-bold text-foreground">{faq.q}</h3>
              <Markdown source={faq.a} />
            </Fragment>
          ))}
        </div>
      </section>
      <CTASection service={page.h1} />
    </>
  );
}

export function EventPackagePage({ path }: { path: string }) {
  const page = pageFor(path);

  if (page.kind === "blog") {
    return (
      <article className="mx-auto max-w-3xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link> <span>›</span>{" "}
          <Link to="/blog" className="hover:text-primary">Blog</Link> <span>›</span>{" "}
          <span className="text-foreground">{page.h1}</span>
        </nav>
        <h1 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl">{page.h1}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          By {AUTHOR} · Last updated <time dateTime={EVENT_PACKAGE_PUBLISHED}>27 November 2026</time>
        </p>
        <PackageContent page={page} />
      </article>
    );
  }

  return (
    <>
      <section className="bg-[image:var(--gradient-hero)] px-4 py-12 text-primary-foreground sm:py-16">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-primary-foreground/75">
            <Link to="/" className="hover:text-accent">Home</Link> <span>›</span> <span>{page.h1}</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">Event Management Services</p>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">{page.h1}</h1>
        </div>
      </section>
      <article className="mx-auto max-w-4xl px-4 py-10">
        <PackageContent page={page} />
      </article>
    </>
  );
}
