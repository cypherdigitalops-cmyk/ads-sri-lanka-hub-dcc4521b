import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { logPageView } from "@/lib/page-views.functions";

/**
 * Logs one page view per pathname change. Mount once at the root.
 * No-ops during SSR and on duplicate fires within the same path.
 */
export function PageViewTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const log = useServerFn(logPageView);
  const lastRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!pathname) return;
    if (lastRef.current === pathname) return;
    lastRef.current = pathname;
    try {
      void log({
        data: {
          page_url: window.location.href.slice(0, 500),
          page_path: pathname.slice(0, 300),
          referrer: document.referrer.slice(0, 500),
          user_agent: navigator.userAgent.slice(0, 500),
        },
      }).catch(() => {});
    } catch {
      /* ignore */
    }
  }, [pathname, log]);

  return null;
}