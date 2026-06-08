// Keyword-rich internal cross-links between articles updated today.
// Each modified page renders <TodayCrossLinks currentSlug={slug} /> and
// shows anchor links to all the OTHER modified articles, giving every
// page 10+ inbound contextual links with relevant keyword anchor text.

export type CrossLink = {
  slug: string;
  anchor: string; // keyword-rich anchor text
  context: string; // short surrounding sentence for natural placement
};

export const TODAY_MODIFIED: CrossLink[] = [
  {
    slug: "mug-printing-sri-lanka",
    anchor: "custom mug printing in Sri Lanka",
    context: "Pair your brand merchandise with",
  },
  {
    slug: "backdrop-printing-sri-lanka",
    anchor: "event backdrop printing in Sri Lanka",
    context: "For media walls and stage media, see our",
  },
  {
    slug: "pen-printing-sri-lanka",
    anchor: "custom pen printing in Sri Lanka",
    context: "Branded writing instruments —",
  },
  {
    slug: "annual-report-printing-sri-lanka",
    anchor: "annual report printing in Sri Lanka",
    context: "For AGM and investor documents, see",
  },
  {
    slug: "wristband-sri-lanka",
    anchor: "event wristband printing in Sri Lanka",
    context: "Crowd control & access — order",
  },
  {
    slug: "banner-printing-sri-lanka",
    anchor: "flex banner printing in Sri Lanka",
    context: "Large-format outdoor signage —",
  },
  {
    slug: "roll-up-banner-printing-sri-lanka",
    anchor: "roll up banner printing in Sri Lanka",
    context: "For portable event display, see",
  },
  {
    slug: "window-sticker-printing-sri-lanka",
    anchor: "window sticker printing in Sri Lanka",
    context: "Branded shopfront graphics —",
  },
  {
    slug: "led-screen-rental-sri-lanka",
    anchor: "LED screen rental in Sri Lanka",
    context: "Add live visuals with",
  },
  {
    slug: "led-sign-board-sri-lanka",
    anchor: "LED sign board in Sri Lanka",
    context: "Permanent illuminated signage —",
  },
  {
    slug: "embossed-printing-sri-lanka",
    anchor: "embossed printing in Sri Lanka",
    context: "Premium tactile finishes —",
  },
  {
    slug: "corporate-gifting-sri-lanka",
    anchor: "corporate gifting in Sri Lanka",
    context: "Complete branded gift programmes —",
  },
  {
    slug: "printing-services-sri-lanka",
    anchor: "printing services in Sri Lanka",
    context: "Explore our full range of",
  },
];

export function getCrossLinksExcluding(currentSlug: string): CrossLink[] {
  return TODAY_MODIFIED.filter((l) => l.slug !== currentSlug);
}