import { useEffect, useState } from "react";
import { MessageCircle, Sparkles, TrendingUp, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";

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
  "Hi! I'm planning an event and saw your page. I'd like to try your Social Media Marketing — can you share details?",
)}`;

/**
 * Promo popup for /event-planners-sri-lanka: promotes the social media
 * marketing desk (077 143 7707) and routes interest to the digital marketing hub.
 */
export function EventPlannersSmmPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("[SmmPopup] mounted, shouldShow:", shouldShow());
    if (!shouldShow()) return;
    const timer = window.setTimeout(() => {
      console.log("[SmmPopup] opening");
      setOpen(true);
    }, SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        markDismissed();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    markDismissed();
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="smm-popup-title"
    >
      <button type="button" aria-label="Close popup" onClick={close} className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      <div className="relative w-full max-w-md animate-in fade-in slide-in-from-bottom-6 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)]">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary px-5 py-4 text-primary-foreground">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <p className="text-xs font-semibold uppercase tracking-wider opacity-90">
                Special for event planners
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="rounded-full p-1 hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <h2 id="smm-popup-title" className="mt-1 text-lg font-bold leading-snug sm:text-xl">
            Your events look amazing — <br className="hidden sm:block" />
            shouldn't your social media too?
          </h2>
        </div>

        {/* Body */}
        <div className="grid gap-4 px-5 py-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            We turn event moments into <span className="font-semibold text-foreground">reels, posts & ads that bring new clients</span> —
            done-for-you social media marketing from the same team behind Sri Lanka's biggest event campaigns.
          </p>

          <ul className="grid gap-2 text-sm">
            <li className="flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Monthly content plan + posting — from <strong>LKR 15,000/month</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Event reels, before/after posts & client testimonials</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Free first post preview — see it before you pay anything</span>
            </li>
          </ul>

          <div className="grid gap-2 sm:grid-cols-2">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener"
              onClick={markDismissed}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-2.5 text-sm font-bold text-[var(--whatsapp-foreground)] shadow-md transition hover:opacity-95"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp {SITE.phoneDigital}
            </a>
            <Link
              to="/digital-marketing-sri-lanka"
              onClick={markDismissed}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition hover:opacity-95"
            >
              Try Social Media Marketing
            </Link>
          </div>

          <button
            type="button"
            onClick={close}
            className="mx-auto text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
          >
            No thanks, maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
