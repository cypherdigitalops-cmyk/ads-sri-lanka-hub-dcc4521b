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
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3 text-base font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:opacity-90"
          >
            <Phone className="h-5 w-5" /> Call {SITE.phone}
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-7 py-3 text-base font-semibold text-[var(--whatsapp-foreground)] transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
          <Link
            to="/get-quote"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
          >
            <Send className="h-5 w-5" /> Get Free Advertising Advice
          </Link>
        </div>
      </div>
    </section>
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