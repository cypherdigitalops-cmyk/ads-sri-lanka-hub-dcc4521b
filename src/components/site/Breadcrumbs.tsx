import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/data/site";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.to ? { item: `${SITE.url}${c.to.startsWith("/") ? c.to : `/${c.to}`}` } : {}),
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/80">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 ? <ChevronRight className="h-3.5 w-3.5 text-white/60" /> : null}
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} className="text-white/80 hover:text-white">{c.label}</Link>
            ) : (
              <span className="text-white">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}