import type { PrimaryAnchor } from "@/components/site/CustomBlogArticle";

/**
 * Shared primary-anchor configuration for the Event Management content cluster.
 * Every cluster article links the first occurrence of "event management sri lanka"
 * or "event management" or "event planners sri lanka" to the pillar page.
 */
export const EVENT_MGMT_ANCHOR: PrimaryAnchor = {
  href: "/event-management-sri-lanka",
  regex:
    /(event\s+management\s+sri\s+lanka|event\s+planners\s+sri\s+lanka|event\s+management)/i,
  fallbackText: "event management Sri Lanka",
  ctaLabel: "See event management services",
  ctaHeadline:
    "Planning an event? Get a same-day quote from a full-service event management Sri Lanka team",
  ctaService: "Event Management Sri Lanka",
};
