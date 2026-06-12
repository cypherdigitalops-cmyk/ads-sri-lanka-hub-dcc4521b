import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "icon-design-sri-lanka",
  h1: "Icon Design in Sri Lanka",
  metaTitle: "Icon Design Sri Lanka — Custom Icon Set Design | Advertising Sri Lanka",
  metaDescription: "Professional custom icon design in Sri Lanka for apps, websites and brand systems. From Rs 15,000. Call 0771437707.",
  intro: "Custom icons give your app or website a distinctive, cohesive visual identity. Generic icon sets make your product look unfinished — custom icons signal quality and attention to detail that users notice and trust.",
  whatIs: "Icon design involves creating a set of custom vector icons that are visually consistent, recognisable at small sizes and aligned with your brand's visual style. Icons are used in apps, websites, infographics, presentations and printed materials.",
  whoNeeds: "App developers, web designers, businesses building custom software, marketing teams needing infographic icons and brands creating design systems in Sri Lanka all need professional icon design.",
  included: [
    "Custom icon set (10, 20 or 50+ icons)",
    "Consistent visual style across all icons",
    "Multiple sizes (16px to 512px)",
    "SVG and PNG formats",
    "Light and dark mode versions",
    "Fully editable source files",
  ],
  cost: "Icon design in Sri Lanka starts from Rs 15,000 for a set of 10 custom icons. Larger icon sets (50+ icons) range from Rs 40,000 to Rs 120,000.",
  faqs: [
    { q: "What file formats are icons delivered in?", a: "SVG (scalable vector), PNG at multiple sizes (16, 32, 64, 128, 256, 512px) and the original Illustrator or Figma source files." },
    { q: "Can icons match our existing brand style?", a: "Yes — we design all icons to match your existing brand colour palette, weight and visual style." },
  ],
};

export const Route = createFileRoute("/icon-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});