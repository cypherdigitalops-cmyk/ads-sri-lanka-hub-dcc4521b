import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getHubStats, type HubStats } from "@/lib/page-views.functions";
import { supabase } from "@/integrations/supabase/client";
import { BarChart3, MessageCircle, Mail, Eye } from "lucide-react";

/**
 * Admin-only floating badge showing conversion stats for the current hub page.
 * Silently renders nothing for non-admins (the server fn returns 401 / forbidden).
 */
export function HubConversionBadge({ slug }: { slug: string }) {
  const fetchStats = useServerFn(getHubStats);
  const path = `/${slug}`;
  const [hasSession, setHasSession] = useState(false);
  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active) setHasSession(!!data.session);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setHasSession(!!session);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);
  const { data, isError } = useQuery<HubStats>({
    queryKey: ["hub-stats", path],
    queryFn: () => fetchStats({ data: { page_path: path, days: 30 } }),
    retry: false,
    staleTime: 60_000,
    enabled: hasSession,
  });

  if (isError || !data) return null;

  const rate = (data.conversion_rate * 100).toFixed(1);

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-xs rounded-xl border border-border bg-card/95 p-3 shadow-2xl backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border pb-2">
        <BarChart3 className="h-4 w-4 text-primary" />
        <div className="text-xs font-bold uppercase tracking-wide text-foreground">
          Admin · last {data.days}d
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <Eye className="h-3 w-3" /> Views
        </span>
        <span className="text-right font-semibold text-foreground">{data.views}</span>

        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <MessageCircle className="h-3 w-3" /> WhatsApp
        </span>
        <span className="text-right font-semibold text-foreground">{data.whatsapp_clicks}</span>

        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <Mail className="h-3 w-3" /> Inquiries
        </span>
        <span className="text-right font-semibold text-foreground">{data.inquiries}</span>
      </div>
      <div className="mt-2 flex items-center justify-between rounded-md bg-primary/10 px-2 py-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">
          Conv. rate
        </span>
        <span className="text-sm font-extrabold text-primary">{rate}%</span>
      </div>
    </div>
  );
}