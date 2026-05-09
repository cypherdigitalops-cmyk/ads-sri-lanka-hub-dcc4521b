import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 ? <ChevronRight className="h-3.5 w-3.5 opacity-60" /> : null}
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} className="hover:text-primary">{c.label}</Link>
            ) : (
              <span className="text-foreground/80">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}