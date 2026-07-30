import { Link, useLocation } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

/** Pages that should use the sharper digital framing (Section 11B). */
const DIGITAL_HINTS = ["digital", "seo", "google-ads", "social-media", "email", "whatsapp", "ppc", "ecommerce"];

export function isDigitalPage(pathname: string) {
  const p = pathname.toLowerCase();
  return DIGITAL_HINTS.some((h) => p.includes(h));
}

/** Pages where the guidance block should NOT appear. */
const HIDDEN_PREFIXES = ["/admin", "/free-marketing-guidance", "/get-quote", "/careers", "/auth"];

/**
 * Calm, recurring "free guidance" block shown at the bottom of guide pages.
 * Copy switches between the neutral hub framing and the digital growth-plan
 * framing depending on the page.
 */
export function FreeGuidanceSection() {
  const { pathname } = useLocation();
  if (HIDDEN_PREFIXES.some((p) => pathname.startsWith(p))) return null;
  const digital = isDigitalPage(pathname);

  return (
    <section className="border-t border-border bg-secondary/25">
      <div className="mx-auto max-w-4xl px-4 py-14 text-center">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          {digital ? "Get Your Free Digital Marketing Growth Plan" : "Not sure what your business needs?"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {digital
            ? "Tell us what you sell and your budget, and a specialist will send you a free plan showing which digital channels — social media, Google, ads, email — will grow your sales fastest. Already running ads or have a page? We'll include a free audit of what's working and what's costing you money."
            : "Tell us what you sell and your budget — a specialist will send you free, tailored guidance on what would work best. No jargon, no obligation."}
        </p>
        <Link
          to="/free-marketing-guidance"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-4 text-base font-bold text-accent-foreground shadow-lg transition hover:scale-[1.02]"
        >
          <Sparkles className="h-4 w-4" />
          {digital ? "Get My Free Growth Plan" : "Get My Free Marketing Guidance"}
        </Link>
        <p className="mt-3 text-xs text-muted-foreground">
          {digital
            ? "Free • No obligation • Personally reviewed within 24 hours"
            : "Free • No obligation • Reply within 24 hours"}
        </p>
      </div>
    </section>
  );
}