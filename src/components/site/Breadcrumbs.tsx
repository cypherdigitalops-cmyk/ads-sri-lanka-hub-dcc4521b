import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/80">
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