import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { CATEGORIES, FOOTER_RENTALS, FOOTER_PRINTING, SITE } from "@/data/site";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[image:var(--gradient-hero)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-5">
        <div>
          <img src={logo} alt="Advertising Sri Lanka" className="h-12 w-auto md:h-14" />
          <p className="mt-3 text-sm text-primary-foreground/75">
            Sri Lanka's information hub for every advertising solution — ATL, BTL, digital, SEO, social media, outdoor, branding, web &amp; video. Search, learn, then call us with your question.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 hover:text-accent"><Phone className="h-4 w-4" /> {SITE.phone}</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-accent"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Colombo, Sri Lanka</div>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-3">Main services</div>
          <ul className="space-y-2">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link to={`/${c.slug}` as never} className="text-primary-foreground/85 hover:text-accent">
                  {c.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to={"/graphic-design-sri-lanka" as never} className="text-primary-foreground/85 hover:text-accent">
                Graphic Design
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-3">Event rentals</div>
          <ul className="space-y-2">
            {FOOTER_RENTALS.map((r) => (
              <li key={r.slug}>
                <Link to={`/${r.slug}` as never} className="text-primary-foreground/85 hover:text-accent">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="font-semibold mb-3 mt-6">Printing services</div>
          <ul className="space-y-2">
            {FOOTER_PRINTING.map((r) => (
              <li key={r.slug}>
                <Link to={`/${r.slug}` as never} className="text-primary-foreground/85 hover:text-accent">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-3">Blog guides</div>
          <ul className="space-y-2">
            {CATEGORIES.map((c) => {
              const b = c.blog[0];
              if (!b) return null;
              return (
                <li key={b.slug}>
                  <Link to={`/blog/${b.slug}` as never} className="text-primary-foreground/85 hover:text-accent">
                    {c.title} guide
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">All Services</Link></li>
            <li><Link to="/printing-services-sri-lanka" className="hover:text-accent font-semibold">Printing Services Sri Lanka</Link></li>
            <li><Link to="/digital-marketing-sri-lanka" className="hover:text-accent">Digital Marketing</Link></li>
            <li><Link to="/social-media-marketing-sri-lanka" className="hover:text-accent">Social Media Marketing</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link to="/seo-services-sri-lanka" className="hover:text-accent">SEO Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-accent">Case Studies</Link></li>
            <li><Link to="/advertising-packages" className="hover:text-accent">Packages</Link></li>
            <li><Link to="/advertising-rates" className="hover:text-accent">Cost Guide</Link></li>
            <li><Link to="/get-quote" className="hover:text-accent">Get a Quote</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-primary-foreground/70">
          © 2025 {SITE.domain} — Information hub. Call {SITE.phone} for free advertising guidance.
        </div>
      </div>
    </footer>
  );
}