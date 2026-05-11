import { Link, useLocation } from "@tanstack/react-router";
import { MessageCircle, Phone, Send } from "lucide-react";
import { CATEGORIES, SITE, titleCase } from "@/data/site";

/**
 * Derive the human-readable service/category name from the current URL path
 * so floating CTAs can tell us exactly what the visitor is inquiring about.
 */
function useCurrentService(): string | undefined {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  if (!slug) return undefined;
  for (const cat of CATEGORIES) {
    if (cat.slug === slug) return titleCase(cat.hubKeyword);
    const svc = cat.services.find((s) => s.slug === slug);
    if (svc) return titleCase(svc.keyword);
  }
  return undefined;
}

function waLink(service?: string) {
  if (!service) return SITE.whatsapp;
  const msg = `Hi, I'm inquiring about ${service}. Please share more details.`;
  return `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export function CTASection({ headline, sub, service }: { headline?: string; sub?: string; service?: string }) {
  const waHref = service
    ? `${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I'm inquiring about ${service}. Please share more details.`)}`
    : SITE.whatsapp;
  const quoteHref = service ? `/get-quote?service=${encodeURIComponent(service)}` : "/get-quote";
  return (
    <section className="my-12 rounded-2xl bg-[image:var(--gradient-hero)] p-8 text-primary-foreground shadow-[var(--shadow-elegant)] sm:p-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          {headline ?? "Have a question? Get free advice — no obligation"}
        </h2>
        <p className="mt-3 text-primary-foreground/85">
          {sub ?? "Speak to advertising specialists for free guidance on the right channel for your business."}
        </p>
        {service ? (
          <p className="mt-3 inline-block rounded-full bg-primary-foreground/15 px-4 py-1 text-sm font-semibold text-primary-foreground">
            Inquiring about: {service}
          </p>
        ) : null}
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={waHref}
            target="_blank"
            rel="noopener"
            aria-label={service ? `Chat on WhatsApp about ${service}` : "Chat with us on WhatsApp"}
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-8 py-3.5 text-base font-bold text-[var(--whatsapp-foreground)] shadow-lg ring-2 ring-[var(--whatsapp)]/40 transition hover:scale-[1.03] hover:opacity-95"
          >
            <span className="absolute -inset-0.5 rounded-full bg-[var(--whatsapp)] opacity-50 blur-md transition group-hover:opacity-70" aria-hidden />
            <MessageCircle className="relative h-5 w-5" />
            <span className="relative">
              {service ? `WhatsApp about ${service}` : "Chat on WhatsApp — reply in 5 min"}
            </span>
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3 text-base font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:opacity-90"
          >
            <Phone className="h-5 w-5" /> Call {SITE.phone}
          </a>
          <Link
            to={quoteHref as never}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
          >
            <Send className="h-5 w-5" />
            {service ? `Get a quote for ${service}` : "Get Free Advertising Advice"}
          </Link>
        </div>
        <p className="mt-4 text-xs text-primary-foreground/70">
          Free consultation • No obligation • Mon–Sat 9am–7pm
        </p>
      </div>
    </section>
  );
}

/**
 * Floating WhatsApp button — visible on every page, every device.
 * Animated pulse ring draws the eye. Persistent label on desktop;
 * compact circle on mobile (lifts above the StickyCallBar).
 */
export function FloatingWhatsApp() {
  const service = useCurrentService();
  const label = service ? `WhatsApp about ${service}` : "Chat on WhatsApp";
  return (
    <a
      href={waLink(service)}
      target="_blank"
      rel="noopener"
      aria-label={service ? `Chat on WhatsApp about ${service}` : "Chat on WhatsApp — typically replies within 5 minutes"}
      className="group fixed right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-3 font-semibold text-[var(--whatsapp-foreground)] shadow-2xl transition hover:scale-105 sm:right-6 bottom-[70px] md:bottom-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[var(--whatsapp)] opacity-60" aria-hidden />
      <span className="absolute inset-0 -z-10 rounded-full bg-[var(--whatsapp)] opacity-90" aria-hidden />
      <MessageCircle className="relative h-6 w-6" />
      <span className="relative hidden whitespace-nowrap text-sm sm:inline">
        {label}
      </span>
      <span className="relative hidden text-[10px] font-medium opacity-90 lg:inline">
        · replies in 5 min
      </span>
    </a>
  );
}

export function StickyCallBar() {
  const service = useCurrentService();
  return (
    <>
      {/* Spacer so content is not hidden behind the fixed bar on mobile */}
      <div className="h-[54px] md:hidden" aria-hidden="true" />
      <div
        className="fixed bottom-0 left-0 right-0 z-40 flex h-[54px] md:hidden"
        style={{ background: "#15224A", borderTop: "1px solid rgba(255,255,255,0.12)" }}
      >
        <a
          href={`tel:${SITE.phone}`}
          className="flex flex-1 items-center justify-center gap-2 text-white"
          style={{ fontSize: 14, fontWeight: 500 }}
        >
          <Phone className="h-4 w-4" /> Call {SITE.phone}
        </a>
        <a
          href={waLink(service)}
          target="_blank"
          rel="noopener"
          className="flex flex-1 items-center justify-center gap-2 text-white"
          style={{ fontSize: 14, fontWeight: 500, borderLeft: "1px solid rgba(255,255,255,0.12)" }}
        >
          <MessageCircle className="h-4 w-4" /> {service ? `Ask about ${service}` : "WhatsApp Us"}
        </a>
      </div>
    </>
  );
}