import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "magazine-cover-design-sri-lanka",
  h1: "Magazine Cover Design in Sri Lanka",
  metaTitle: "Magazine Cover Design Sri Lanka — Editorial Design | Advertising Sri Lanka",
  metaDescription: "Professional magazine cover and editorial layout design in Sri Lanka. Print and digital formats. From Rs 15,000. Call 0771437707.",
  intro: "A magazine cover is the most important single page in any publication. It must attract attention on a crowded shelf, communicate the issue's content and reinforce the magazine's brand identity — all in a single glance.",
  whatIs: "Magazine cover design involves creating the front cover and editorial layout for a publication — including masthead, cover lines, photography direction, typography and overall design style. Great magazine design is bold, distinctive and unmistakable.",
  whoNeeds: "Magazine publishers, corporate communications teams producing company magazines, schools and universities producing alumni magazines, and organisations publishing newsletters and journals in Sri Lanka need professional editorial design.",
  included: [
    "Front cover design",
    "Masthead and title treatment",
    "Cover lines and typography layout",
    "Inside page templates",
    "Print-ready files for offset printing",
    "Digital edition layout",
  ],
  cost: "Magazine cover design in Sri Lanka starts from Rs 15,000. Full magazine layout including interior pages ranges from Rs 50,000 to Rs 200,000 depending on page count.",
  faqs: [
    { q: "Do you design full magazine layouts or just covers?", a: "Both — we design covers only or complete magazine layouts from cover to cover." },
    { q: "Can you design a magazine in Sinhala?", a: "Yes — full Sinhala and Tamil magazine design and typesetting is available." },
  ],
};

export const Route = createFileRoute("/magazine-cover-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});