import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Sparkles, TrendingUp, X, Youtube } from "lucide-react";
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

/** Simple TikTok glyph — not part of the icon set, so it is drawn inline. */
function TiktokGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.07-.01 2.12-.47 2.86-1.26.26-.28.49-.59.64-.96.16-.43.22-.9.23-1.35.04-4.09-.02-8.18.02-12.26z" />
    </svg>
  );
}

/** WhatsApp glyph — the icon set has no brand mark for it, so it is drawn inline. */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const PLATFORMS = [
  {
    name: "Facebook",
    label: "Facebook marketing in Sri Lanka",
    to: "/facebook-ads-sri-lanka",
    icon: <Facebook className="h-3.5 w-3.5" />,
  },
  {
    name: "Instagram",
    label: "Instagram marketing in Sri Lanka",
    to: "/instagram-ads-sri-lanka",
    icon: <Instagram className="h-3.5 w-3.5" />,
  },
  {
    name: "TikTok",
    label: "TikTok marketing in Sri Lanka",
    to: "/tiktok-ads-sri-lanka",
    icon: <TiktokGlyph className="h-3.5 w-3.5" />,
  },
  {
    name: "YouTube",
    label: "YouTube marketing in Sri Lanka",
    to: "/youtube-ads-sri-lanka",
    icon: <Youtube className="h-3.5 w-3.5" />,
  },
  {
    name: "LinkedIn",
    label: "LinkedIn marketing in Sri Lanka",
    to: "/linkedin-ads-sri-lanka",
    icon: <Linkedin className="h-3.5 w-3.5" />,
  },
] as const;

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
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground/70">
              We create &amp; run ads on
            </span>
            <div className="flex items-center gap-1.5">
              {PLATFORMS.map((p) => (
                <Link
                  key={p.name}
                  to={p.to}
                  onClick={close}
                  aria-label={p.label}
                  title={p.label}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {p.icon}
                </Link>
              ))}
            </div>
          </div>
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
