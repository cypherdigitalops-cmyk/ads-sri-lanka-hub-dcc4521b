import { useEffect, useRef } from "react";
import { useServerFn } from "@tanstack/react-start";
import { logCtaClick } from "@/lib/cta-clicks.functions";

type Cta = "whatsapp" | "call" | "quote" | "email" | "apply_job";

let trackFn: ((cta: Cta, meta?: Record<string, string>) => void) | null = null;

/** Fire-and-forget CTA tracker. Safe to call from anywhere on the client. */
export function trackCta(cta: Cta, meta?: Record<string, string>) {
  if (typeof window === "undefined") return;
  trackFn?.(cta, meta);
}

/** Global click delegator + tracker registration. Mount once at the root. */
export function ClickTracker() {
  const log = useServerFn(logCtaClick);
  const lastRef = useRef<{ key: string; ts: number } | null>(null);

  useEffect(() => {
    const send = (cta: Cta, meta?: Record<string, string>) => {
      // de-dupe rapid duplicates (e.g. delegated + explicit call)
      const key = `${cta}|${window.location.pathname}|${meta?.target ?? ""}`;
      const now = Date.now();
      if (lastRef.current && lastRef.current.key === key && now - lastRef.current.ts < 1500) return;
      lastRef.current = { key, ts: now };
      try {
        void log({
          data: {
            cta,
            page_url: window.location.href,
            referrer: document.referrer,
            user_agent: navigator.userAgent.slice(0, 500),
            meta,
          },
        }).catch(() => {});
      } catch {
        /* ignore */
      }
    };
    trackFn = send;

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest("a") as HTMLAnchorElement | null;
      if (!el) return;
      const href = el.getAttribute("href") || "";
      if (!href) return;
      if (href.startsWith("tel:")) {
        send("call", { target: href.slice(4) });
      } else if (/^https?:\/\/(api\.)?wa\.me\//i.test(href) || /^https?:\/\/(web\.)?whatsapp\.com\//i.test(href)) {
        send("whatsapp", { target: href });
      } else if (href.startsWith("mailto:")) {
        send("email", { target: href.slice(7) });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      trackFn = null;
    };
  }, [log]);

  return null;
}