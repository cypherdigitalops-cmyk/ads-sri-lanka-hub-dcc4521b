import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type RangeKey = "today" | "7d" | "30d" | "all";

export type TrendMetric = {
  label: string;
  score: number;
  prevScore: number;
  trendPct: number | null; // null if previous was 0
  detail?: string;
};

export type ExecutiveMetrics = {
  range: RangeKey;
  sinceIso: string | null;
  prevSinceIso: string | null;
  hottestService: TrendMetric | null;
  revenueOpportunity: TrendMetric | null;
  bestSource: TrendMetric | null;
  servicesTop: { label: string; score: number }[];
  revenueTop: { label: string; score: number }[];
  sourcesTop: { label: string; score: number; visitors: number; inquiries: number }[];
};

function rangeWindow(range: RangeKey): { sinceMs: number | null; spanMs: number | null } {
  const day = 24 * 60 * 60 * 1000;
  if (range === "today") {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    return { sinceMs: start.getTime(), spanMs: day };
  }
  if (range === "7d") return { sinceMs: Date.now() - 7 * day, spanMs: 7 * day };
  if (range === "30d") return { sinceMs: Date.now() - 30 * day, spanMs: 30 * day };
  return { sinceMs: null, spanMs: null };
}

function shortPath(url: string | null | undefined): string {
  if (!url) return "";
  try {
    return new URL(url).pathname;
  } catch {
    return url;
  }
}

// Map a URL path to a service category label
function classifyService(path: string): string | null {
  const p = path.toLowerCase();
  if (!p || p === "/" || p.startsWith("/admin") || p.startsWith("/login") || p.startsWith("/auth")) return null;
  if (/\/blog(\/|$)/.test(p)) return null;
  if (/led-screen|led-sign|led-board/.test(p)) return "LED Screen Advertising";
  if (/billboard|outdoor-advertising|hoarding/.test(p)) return "Billboard & Outdoor";
  if (/facebook-ads|google-ads|digital-marketing|seo|social-media|youtube-ads|tiktok-ads/.test(p)) return "Digital Marketing";
  if (/vehicle|car-branding|bus-branding|trishaw|tuk/.test(p)) return "Vehicle Branding";
  if (/newspaper|magazine|press-ad/.test(p)) return "Newspaper & Press";
  if (/tv-ad|television|radio/.test(p)) return "TV & Radio";
  if (/event-management|event-rental|stage|tent|marquee|generator|wristband|backdrop/.test(p)) return "Event Management & Rentals";
  if (/printing|banner|flag|sticker|pen-printing|mug|gifting|annual-report|embossed/.test(p)) return "Printing Services";
  if (/graphic-design|design/.test(p)) return "Graphic Design";
  if (/atl-advertising/.test(p)) return "ATL Advertising";
  if (/btl-advertising/.test(p)) return "BTL Advertising";
  if (/full-service-advertising/.test(p)) return "Full Service Advertising";
  if (/real-estate|hotel|restaurant|construction/.test(p)) return "Industry Solutions";
  return "Other Services";
}

type Bucket =
  | "Google Organic"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "YouTube"
  | "TikTok"
  | "WhatsApp"
  | "Bing"
  | "AI Assistants"
  | "Direct"
  | "Email Campaigns"
  | "Referral";

function classifySource(referrer: string | null | undefined): Bucket {
  if (!referrer) return "Direct";
  let host = "";
  let search = "";
  try {
    const u = new URL(referrer);
    host = u.hostname.replace(/^www\./, "").toLowerCase();
    search = u.search.toLowerCase();
  } catch {
    return "Referral";
  }
  if (!host) return "Direct";
  if (/utm_medium=email|utm_source=newsletter|mailchimp|sendgrid|mailgun/.test(search)) return "Email Campaigns";
  if (/(^|\.)chatgpt\.com$|openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com|meta\.ai/.test(host)) return "AI Assistants";
  if (/google\./.test(host)) return "Google Organic";
  if (/bing\./.test(host)) return "Bing";
  if (/facebook\.|fb\.me|m\.facebook\./.test(host)) return "Facebook";
  if (/instagram\.|l\.instagram\./.test(host)) return "Instagram";
  if (/linkedin\.|lnkd\.in/.test(host)) return "LinkedIn";
  if (/youtube\.|youtu\.be/.test(host)) return "YouTube";
  if (/tiktok\./.test(host)) return "TikTok";
  if (/whatsapp\.|wa\.me/.test(host)) return "WhatsApp";
  if (/advertisingsrilanka\.lk|lovable\.app/.test(host)) return "Direct";
  return "Referral";
}

function trendPct(current: number, prev: number): number | null {
  if (prev <= 0) return current > 0 ? null : 0;
  return Math.round(((current - prev) / prev) * 1000) / 10;
}

export const getExecutiveMetrics = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { range: RangeKey }) => {
    const allowed: RangeKey[] = ["today", "7d", "30d", "all"];
    return { range: allowed.includes(input?.range) ? input.range : "7d" };
  })
  .handler(async ({ data, context }): Promise<ExecutiveMetrics> => {
    const { supabase, userId } = context;
    const { data: roleRows } = await supabase.from("user_roles").select("role").eq("user_id", userId);
    const isAdmin = (roleRows ?? []).some((r) => r.role === "admin");
    if (!isAdmin) throw new Error("Forbidden: admin only");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { sinceMs, spanMs } = rangeWindow(data.range);
    const sinceIso = sinceMs ? new Date(sinceMs).toISOString() : null;
    const prevSinceIso = sinceMs && spanMs ? new Date(sinceMs - spanMs).toISOString() : null;

    const viewsQ = supabaseAdmin.from("page_views").select("page_path,referrer,created_at").limit(50000);
    const clicksQ = supabaseAdmin.from("cta_clicks").select("cta,page_url,referrer,created_at").limit(50000);
    const inqQ = supabaseAdmin.from("inquiries").select("page_url,referrer,created_at").limit(50000);
    if (prevSinceIso) {
      viewsQ.gte("created_at", prevSinceIso);
      clicksQ.gte("created_at", prevSinceIso);
      inqQ.gte("created_at", prevSinceIso);
    }
    const [viewsRes, clicksRes, inqRes] = await Promise.all([viewsQ, clicksQ, inqQ]);

    const inWindow = (iso: string) => !sinceIso || iso >= sinceIso;
    const inPrev = (iso: string) => !!prevSinceIso && !!sinceIso && iso >= prevSinceIso && iso < sinceIso;

    // ---- Hottest Service ----
    type SvcAgg = { views: number; clicks: number; inq: number };
    const svc = { cur: new Map<string, SvcAgg>(), prev: new Map<string, SvcAgg>() };
    const ensureSvc = (m: Map<string, SvcAgg>, k: string) => {
      let v = m.get(k);
      if (!v) { v = { views: 0, clicks: 0, inq: 0 }; m.set(k, v); }
      return v;
    };
    for (const v of viewsRes.data ?? []) {
      const cat = classifyService(v.page_path || "");
      if (!cat) continue;
      if (inWindow(v.created_at)) ensureSvc(svc.cur, cat).views += 1;
      else if (inPrev(v.created_at)) ensureSvc(svc.prev, cat).views += 1;
    }
    for (const c of clicksRes.data ?? []) {
      const cat = classifyService(shortPath(c.page_url));
      if (!cat) continue;
      if (inWindow(c.created_at)) ensureSvc(svc.cur, cat).clicks += 1;
      else if (inPrev(c.created_at)) ensureSvc(svc.prev, cat).clicks += 1;
    }
    for (const i of inqRes.data ?? []) {
      const cat = classifyService(shortPath(i.page_url));
      if (!cat) continue;
      if (inWindow(i.created_at)) ensureSvc(svc.cur, cat).inq += 1;
      else if (inPrev(i.created_at)) ensureSvc(svc.prev, cat).inq += 1;
    }
    const hotScore = (a: SvcAgg) => a.views * 0.3 + a.clicks * 0.3 + a.inq * 0.4;
    const svcRows = Array.from(svc.cur.entries())
      .map(([k, a]) => ({ label: k, score: Math.round(hotScore(a) * 10) / 10, prev: hotScore(svc.prev.get(k) ?? { views: 0, clicks: 0, inq: 0 }) }))
      .sort((a, b) => b.score - a.score);
    const hot = svcRows[0];
    const hottestService: TrendMetric | null = hot
      ? { label: hot.label, score: hot.score, prevScore: Math.round(hot.prev * 10) / 10, trendPct: trendPct(hot.score, hot.prev) }
      : null;

    // ---- Revenue Opportunity ----
    type RevAgg = { call: number; wa: number; quote: number; inq: number };
    const rev = { cur: new Map<string, RevAgg>(), prev: new Map<string, RevAgg>() };
    const ensureRev = (m: Map<string, RevAgg>, k: string) => {
      let v = m.get(k);
      if (!v) { v = { call: 0, wa: 0, quote: 0, inq: 0 }; m.set(k, v); }
      return v;
    };
    for (const c of clicksRes.data ?? []) {
      const cat = classifyService(shortPath(c.page_url));
      if (!cat) continue;
      const bucket = inWindow(c.created_at) ? rev.cur : inPrev(c.created_at) ? rev.prev : null;
      if (!bucket) continue;
      const r = ensureRev(bucket, cat);
      if (c.cta === "call") r.call += 1;
      else if (c.cta === "whatsapp") r.wa += 1;
      else if (c.cta === "quote") r.quote += 1;
    }
    for (const i of inqRes.data ?? []) {
      const cat = classifyService(shortPath(i.page_url));
      if (!cat) continue;
      const bucket = inWindow(i.created_at) ? rev.cur : inPrev(i.created_at) ? rev.prev : null;
      if (!bucket) continue;
      ensureRev(bucket, cat).inq += 1;
    }
    const revScore = (a: RevAgg) => a.call * 10 + a.wa * 8 + a.inq * 15 + a.quote * 20;
    const revRows = Array.from(rev.cur.entries())
      .map(([k, a]) => ({ label: k, score: revScore(a), prev: revScore(rev.prev.get(k) ?? { call: 0, wa: 0, quote: 0, inq: 0 }) }))
      .sort((a, b) => b.score - a.score);
    const topRev = revRows[0];
    const revenueOpportunity: TrendMetric | null = topRev
      ? { label: topRev.label, score: topRev.score, prevScore: topRev.prev, trendPct: trendPct(topRev.score, topRev.prev) }
      : null;

    // ---- Best Traffic Source ----
    type SrcAgg = { visitors: number; inq: number };
    const src = { cur: new Map<Bucket, SrcAgg>(), prev: new Map<Bucket, SrcAgg>() };
    const ensureSrc = (m: Map<Bucket, SrcAgg>, k: Bucket) => {
      let v = m.get(k);
      if (!v) { v = { visitors: 0, inq: 0 }; m.set(k, v); }
      return v;
    };
    for (const v of viewsRes.data ?? []) {
      const b = classifySource(v.referrer);
      const bucket = inWindow(v.created_at) ? src.cur : inPrev(v.created_at) ? src.prev : null;
      if (bucket) ensureSrc(bucket, b).visitors += 1;
    }
    for (const i of inqRes.data ?? []) {
      const b = classifySource(i.referrer);
      const bucket = inWindow(i.created_at) ? src.cur : inPrev(i.created_at) ? src.prev : null;
      if (bucket) ensureSrc(bucket, b).inq += 1;
    }
    const srcRate = (a: SrcAgg) => (a.visitors > 0 ? (a.inq / a.visitors) * 100 : 0);
    const srcRows = Array.from(src.cur.entries())
      .map(([k, a]) => {
        const prevAgg = src.prev.get(k) ?? { visitors: 0, inq: 0 };
        return {
          label: k,
          visitors: a.visitors,
          inquiries: a.inq,
          score: Math.round(srcRate(a) * 100) / 100,
          prev: Math.round(srcRate(prevAgg) * 100) / 100,
        };
      })
      .filter((r) => r.visitors >= 3 || r.inquiries > 0)
      .sort((a, b) => b.score - a.score || b.inquiries - a.inquiries);
    const topSrc = srcRows[0];
    const bestSource: TrendMetric | null = topSrc
      ? {
          label: topSrc.label,
          score: topSrc.score,
          prevScore: topSrc.prev,
          trendPct: trendPct(topSrc.score, topSrc.prev),
          detail: `${topSrc.inquiries} inq / ${topSrc.visitors} visits`,
        }
      : null;

    return {
      range: data.range,
      sinceIso,
      prevSinceIso,
      hottestService,
      revenueOpportunity,
      bestSource,
      servicesTop: svcRows.slice(0, 5).map(({ label, score }) => ({ label, score })),
      revenueTop: revRows.slice(0, 5).map(({ label, score }) => ({ label, score })),
      sourcesTop: srcRows.slice(0, 6).map(({ label, score, visitors, inquiries }) => ({ label, score, visitors, inquiries })),
    };
  });