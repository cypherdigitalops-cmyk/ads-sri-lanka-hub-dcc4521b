import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, MessageCircle, Sparkles, TrendingUp, X, Youtube } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";

const LS_KEY = "asl_event_smm_popup_v1";
const SHOW_DELAY_MS = 6000;
const COOLDOWN_DAYS = 7;

function shouldShow(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem(LS_KEY);
    if (!raw) return true;
    const last = Number(raw);
    return !Number.isFinite(last) || Date.now() - last > COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return true;
  }
}

function markDismissed() {
  try {
    window.localStorage.setItem(LS_KEY, String(Date.now()));
  } catch {
    /* ignore */
  }
}

const WA_URL = `${SITE.whatsappDigital}?text=${encodeURIComponent(
  "Hi! I saw AdvertisingSriLanka.lk. I'm interested in Social Media Marketing for my business — can you share details?",
)}`;

/**
 * Site-wide public-page promo popup: promotes the social media
 * marketing desk (077 143 7707) and routes interest to the digital marketing hub.
 */
export function EventPlannersSmmPopup() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const privatePage = /^\/(admin|login)(\/|$)/.test(pathname);

  useEffect(() => {
    if (privatePage) {
      setOpen(false);
      return;
    }
    if (!shouldShow()) return;
    const timer = window.setTimeout(() => {
      if (shouldShow()) setOpen(true);
    }, SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [privatePage]);

  useEffect(() => {
    if (!open || privatePage) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        markDismissed();
      }
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, privatePage]);

  function close() {
    setOpen(false);
    markDismissed();
  }

  if (!open || privatePage) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="smm-popup-title"
    >
      <div aria-hidden="true" onClick={close} className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      <div className="relative max-h-[calc(100dvh-2rem)] w-full max-w-md animate-in fade-in slide-in-from-bottom-6 overflow-y-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)]">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-glow px-5 py-4 text-primary-foreground">
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent-foreground shadow-sm">
              <Sparkles className="h-4 w-4" />
              Social Media Marketing
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={close}
              aria-label="Close"
              className="h-7 w-7 rounded-full hover:bg-primary-foreground/20 hover:text-primary-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <h2 id="smm-popup-title" className="mt-2 text-lg font-bold leading-snug sm:text-xl">
            Your business deserves{" "}
            <span className="text-accent">social media marketing</span>
            <br className="hidden sm:block" /> that stands out
          </h2>
        </div>

        {/* Body */}
        <div className="grid gap-4 px-5 py-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Our{" "}
            <span className="rounded bg-accent/25 px-1.5 py-0.5 font-bold text-foreground">
              social media marketing
            </span>{" "}
            desk handles <span className="font-semibold text-foreground">reels, posts &amp; ads for your business</span>{" "}
            — tell us your goals and we'll show you the options.
          </p>

          <ul className="grid gap-2 text-sm">
            <li className="flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Monthly content planning and posting</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Business reels, product posts and customer stories</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Discuss a plan that fits your business and budget</span>
            </li>
          </ul>

          <div className="grid gap-2 sm:grid-cols-2">
            <Button asChild className="h-auto whitespace-normal rounded-full bg-[var(--whatsapp)] px-4 py-2.5 font-bold text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)] hover:opacity-95">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener"
              onClick={close}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp {SITE.phoneDigital}
            </a>
            </Button>
            <Button asChild className="h-auto whitespace-normal rounded-full bg-accent px-4 py-2.5 font-extrabold text-accent-foreground hover:bg-accent hover:opacity-95">
            <Link
              to="/digital-marketing-sri-lanka"
              onClick={close}
            >
              <Sparkles className="h-4 w-4" />
              Try Social Media Marketing
            </Link>
            </Button>
          </div>

          <Button
            type="button"
            variant="link"
            onClick={close}
            className="mx-auto text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
          >
            No thanks, maybe later
          </Button>
        </div>
      </div>
    </div>
  );
}
