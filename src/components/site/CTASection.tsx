import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Send } from "lucide-react";
import { SITE } from "@/data/site";

export function CTASection({ headline, sub }: { headline?: string; sub?: string }) {
  return (
    <section className="my-12 rounded-2xl bg-[image:var(--gradient-hero)] p-8 text-primary-foreground shadow-[var(--shadow-elegant)] sm:p-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          {headline ?? "Have a question? Get free advice — no obligation"}
        </h2>
        <p className="mt-3 text-primary-foreground/85">
          {sub ?? "Speak to advertising specialists for free guidance on the right channel for your business."}
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener"
            aria-label="Chat with us on WhatsApp"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-8 py-3.5 text-base font-bold text-[var(--whatsapp-foreground)] shadow-lg ring-2 ring-[var(--whatsapp)]/40 transition hover:scale-[1.03] hover:opacity-95"
          >
            <span className="absolute -inset-0.5 rounded-full bg-[var(--whatsapp)] opacity-50 blur-md transition group-hover:opacity-70" aria-hidden />
            <MessageCircle className="relative h-5 w-5" />
            <span className="relative">Chat on WhatsApp — reply in 5 min</span>
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3 text-base font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:opacity-90"
          >
            <Phone className="h-5 w-5" /> Call {SITE.phone}
          </a>
          <Link
            to="/get-quote"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
          >
            <Send className="h-5 w-5" /> Get Free Advertising Advice
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
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp — typically replies within 5 minutes"
      className="group fixed right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-3 font-semibold text-[var(--whatsapp-foreground)] shadow-2xl transition hover:scale-105 sm:right-6 bottom-[70px] md:bottom-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[var(--whatsapp)] opacity-60" aria-hidden />
      <span className="absolute inset-0 -z-10 rounded-full bg-[var(--whatsapp)] opacity-90" aria-hidden />
      <MessageCircle className="relative h-6 w-6" />
      <span className="relative hidden whitespace-nowrap text-sm sm:inline">
        Chat on WhatsApp
      </span>
      <span className="relative hidden text-[10px] font-medium opacity-90 lg:inline">
        · replies in 5 min
      </span>
    </a>
  );
}

export function StickyCallBar() {
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
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener"
          className="flex flex-1 items-center justify-center gap-2 text-white"
          style={{ fontSize: 14, fontWeight: 500, borderLeft: "1px solid rgba(255,255,255,0.12)" }}
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Us
        </a>
      </div>
    </>
  );
}