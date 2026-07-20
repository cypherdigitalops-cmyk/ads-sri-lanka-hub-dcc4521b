import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "thumbnail-design-sri-lanka",
  h1: "Thumbnail Design in Sri Lanka",
  metaTitle: "Thumbnail Design Sri Lanka — YouTube Thumbnail Designer | Advertising Sri Lanka",
  metaDescription: "Professional YouTube and video thumbnail design in Sri Lanka. Thumbnails that drive clicks and views. From Rs 1,500 per thumbnail. Call 0701772626.",
  intro: "Your YouTube thumbnail is the single biggest factor in whether someone clicks your video. A bold, well-designed thumbnail can multiply views several times over — for the same content.",
  whatIs: "Thumbnail design involves creating a compelling still image that represents a video and entices viewers to click. Great thumbnails use bold text, strong facial expressions, contrasting colours and clear visual hierarchy to stand out in a crowded YouTube feed.",
  whoNeeds: "YouTubers, businesses with YouTube channels, educators, news channels, corporate video producers and any creator publishing video content in Sri Lanka benefits from professional thumbnail design.",
  included: [
    "Custom thumbnail design (1280x720px)",
    "Bold, readable text overlay",
    "Branded template for channel consistency",
    "High-contrast, click-worthy design",
    "JPEG and PNG formats",
    "Batch thumbnail packages available",
  ],
  cost: "Thumbnail design in Sri Lanka starts from Rs 1,500 per thumbnail. Monthly thumbnail packages (10–30 thumbnails) range from Rs 12,000 to Rs 35,000.",
  faqs: [
    { q: "What size should a YouTube thumbnail be?", a: "1280x720 pixels (16:9 ratio), under 2MB, in JPG or PNG format. We design to these exact specifications." },
    { q: "Can I get a branded template I can update myself?", a: "Yes — we design a branded thumbnail template in Canva or Photoshop that you or your team can update for each video." },
  ],
};

export const Route = createFileRoute("/thumbnail-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});