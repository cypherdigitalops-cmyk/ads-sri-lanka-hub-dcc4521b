import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "@/data/site";
import { CATEGORIES } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-[image:var(--gradient-hero)] font-bold text-primary-foreground">
            A
          </span>
          <span className="text-base font-semibold tracking-tight">
            advertisingsrilanka<span className="text-accent">.lk</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          <Link to="/atl-advertising-sri-lanka" className="hover:text-primary">ATL</Link>
          <Link to="/btl-advertising-sri-lanka" className="hover:text-primary">BTL</Link>
          <Link to="/digital-marketing-sri-lanka" className="hover:text-primary">Digital</Link>
          <Link to="/seo-services-sri-lanka" className="hover:text-primary">SEO</Link>
          <Link to="/outdoor-advertising-sri-lanka" className="hover:text-primary">Outdoor</Link>
          <Link to="/branding-sri-lanka" className="hover:text-primary">Branding</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phone}`}
            className="hidden items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:opacity-90 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <button
            type="button"
            aria-label="Menu"
            className="rounded-md border border-border p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3 text-sm">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} to={`/${c.slug}`} onClick={() => setOpen(false)} className="rounded px-2 py-2 hover:bg-muted">
                {c.title}
              </Link>
            ))}
            <Link to="/get-quote" onClick={() => setOpen(false)} className="rounded px-2 py-2 font-semibold text-primary hover:bg-muted">
              Get a Free Quote
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="rounded px-2 py-2 hover:bg-muted">
              Contact
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-4 py-2 font-semibold text-accent-foreground sm:hidden"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}