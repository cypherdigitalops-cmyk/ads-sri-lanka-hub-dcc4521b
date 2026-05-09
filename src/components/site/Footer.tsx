import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CATEGORIES, SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[image:var(--gradient-hero)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold">advertisingsrilanka<span className="text-accent">.lk</span></div>
          <p className="mt-3 text-sm text-primary-foreground/75">{SITE.tagline}. ATL, BTL, digital, outdoor, branding, web and video — all under one roof.</p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 hover:text-accent"><Phone className="h-4 w-4" /> {SITE.phone}</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-accent"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-accent"><Mail className="h-4 w-4" /> {SITE.email}</a>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Colombo, Sri Lanka</div>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-6 text-sm">
          {CATEGORIES.slice(0, 8).map((c) => (
            <Link key={c.slug} to={`/${c.slug}` as never} className="hover:text-accent">{c.title}</Link>
          ))}
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">All Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-accent">Case Studies</Link></li>
            <li><Link to="/advertising-packages" className="hover:text-accent">Packages</Link></li>
            <li><Link to="/advertising-rates" className="hover:text-accent">Cost Guide</Link></li>
            <li><Link to="/get-quote" className="hover:text-accent">Get a Quote</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} {SITE.domain} — All rights reserved.
        </div>
      </div>
    </footer>
  );
}