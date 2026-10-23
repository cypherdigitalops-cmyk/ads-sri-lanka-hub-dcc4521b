import { useLocation } from "@tanstack/react-router";
import { CATEGORIES, SITE } from "@/data/site";

export type SiteContact = {
  phone: string;
  phoneIntl: string;
  whatsapp: string;
};

/**
 * Categories whose on-page CTAs (call, WhatsApp, quote) go to the digital
 * marketing desk line instead of the main hub number.
 */
const DIGITAL_CATEGORIES = new Set([
  "digital-marketing-sri-lanka",
  "social-media-marketing-sri-lanka",
]);

/** Standalone pages that belong to the digital / social media family. */
const EXTRA_DIGITAL_SLUGS = new Set([
  "google-ads-cost-sri-lanka",
  "facebook-ads-cost-sri-lanka",
]);

const DIGITAL_SLUGS = new Set<string>(EXTRA_DIGITAL_SLUGS);
for (const cat of CATEGORIES) {
  if (!DIGITAL_CATEGORIES.has(cat.slug)) continue;
  DIGITAL_SLUGS.add(cat.slug);
  cat.services.forEach((s) => DIGITAL_SLUGS.add(s.slug));
  cat.blog.forEach((b) => DIGITAL_SLUGS.add(b.slug));
}

/** "/blog/google-ads-sri-lanka/" -> "google-ads-sri-lanka" */
export function slugFromPathname(pathname: string) {
  const clean = pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  return clean.startsWith("blog/") ? clean.slice("blog/".length) : clean;
}

export function isDigitalContactPath(pathname: string) {
  return DIGITAL_SLUGS.has(slugFromPathname(pathname));
}

export function contactForPath(pathname: string): SiteContact {
  return isDigitalContactPath(pathname)
    ? {
        phone: SITE.phoneDigital,
        phoneIntl: SITE.phoneDigitalIntl,
        whatsapp: SITE.whatsappDigital,
      }
    : { phone: SITE.phone, phoneIntl: SITE.phoneIntl, whatsapp: SITE.whatsapp };
}

/**
 * Contact details for the page the visitor is on: the digital marketing desk
 * line on digital / social media marketing pages, the main hub number elsewhere.
 */
export function useSiteContact(): SiteContact {
  const { pathname } = useLocation();
  return contactForPath(pathname);
}
