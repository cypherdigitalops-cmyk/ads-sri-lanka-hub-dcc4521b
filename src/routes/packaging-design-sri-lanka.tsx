import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "packaging-design-sri-lanka",
  h1: "Packaging Design in Sri Lanka",
  metaTitle: "Packaging Design Sri Lanka — Product Packaging Designer | Advertising Sri Lanka",
  metaDescription: "Professional product packaging design in Sri Lanka. Stand out on shelf and build brand trust. From Rs 20,000. Call 0701772626.",
  intro: "Packaging is often the final touchpoint between your brand and the customer. Great packaging design wins the shelf battle, communicates quality and earns repeat purchases — bad packaging quietly loses sales.",
  whatIs: "Packaging design involves creating the visual design for your product's outer packaging — boxes, bags, pouches, wrappers, cartons and containers. It includes structural layout, branding, product information, ingredient lists and barcode placement.",
  whoNeeds: "Food and beverage companies, cosmetics brands, pharmaceutical companies, household product manufacturers, clothing brands and gift companies across Sri Lanka need professional packaging design to compete in retail.",
  included: [
    "3D packaging visualisation",
    "Dieline and print-ready artwork",
    "Logo and brand integration",
    "Ingredient, nutrition and regulatory information layout",
    "Barcode and QR code integration",
    "Sinhala, Tamil and English labelling",
  ],
  cost: "Packaging design in Sri Lanka starts from Rs 20,000 for a simple box or pouch design. Complex multi-variant packaging ranges from Rs 50,000 to Rs 200,000.",
  faqs: [
    { q: "Do you provide the structural design (dieline) as well?", a: "Yes — we provide the complete dieline and print-ready artwork for your chosen packaging format." },
    { q: "Does packaging design need to follow Sri Lankan regulations?", a: "Yes — food and pharmaceutical packaging must comply with Sri Lanka Standards Institution (SLSI) and Food Act requirements. We design in compliance with these regulations." },
  ],
  longForm: [
    {
      h2: "Why Packaging Design is the Highest-ROI Investment in FMCG",
      paragraphs: [
        "In Sri Lanka's crowded retail aisles — from Keells and Cargills to neighbourhood kades in every town — most purchase decisions are made in under three seconds. The consumer scans the shelf, eliminates options that look cheap or confusing, and reaches for the pack that feels right. Packaging design is the single biggest determinant of that decision, far ahead of price for most categories. A premium-looking spice packet outsells a generic one even at a Rs 50 price premium. A locally-made cosmetic that looks like it could sit on a Sephora shelf outsells imports.",
        "This is why packaging design consistently delivers the highest return on investment of any marketing spend in FMCG, personal care and gifting categories. A Rs 80,000 packaging redesign can lift unit sales by 20–40% within the first quarter — a result that no Facebook ad spend of the same size can match. For brands selling through supermarkets, pharmacies, gift shops or export markets, packaging is not a design project. It is the product itself.",
      ],
    },
    {
      h2: "Structural Design, Dielines and Material Choices",
      paragraphs: [
        "Packaging design has two layers: the structural dieline (the shape and engineering of the pack) and the graphic artwork (the visual surface). Many Sri Lankan brands try to skip the structural conversation and end up forcing their artwork onto whatever stock box the local printer happens to have. This is a missed opportunity. A custom dieline costs a fraction of the artwork budget but creates a shelf presence that competitors cannot easily copy.",
        "We design dielines in 3D mockups before committing to print, so you can see exactly how the pack folds, opens and stacks. We work across folding cartons, rigid boxes, pouches (stand-up and flat), labels for jars and bottles, shrink sleeves, paper bags, gift boxes and exhibition-ready display cartons. Material choices include coated and uncoated cartonboard, kraft, metallised film, recyclable mono-material laminates and FSC-certified options for export brands.",
      ],
    },
    {
      h2: "Regulatory Information for Food, Cosmetics and Pharma",
      paragraphs: [
        "Sri Lankan food packaging must comply with the Food Act and SLSI labelling regulations. This includes the manufacturer name and address, batch and expiry information, ingredient list in decreasing order of weight, allergen declarations, net weight, nutritional information for many categories, and the SLSI mark where applicable. Cosmetics fall under the NMRA cosmetic notification regulations, and pharmaceuticals have a stricter set of requirements again.",
        "We design every regulated pack with these requirements baked in, not bolted on afterwards. The compliance text is laid out with the same care as the brand storytelling on the front — typeset for legibility, sized to meet minimum requirements, and proofread against a regulatory checklist before files go to print. For export packs, we additionally lay out EU, GCC, India or US compliance information depending on your target market.",
      ],
    },
    {
      h2: "Premium Finishes and Sustainable Choices",
      paragraphs: [
        "Print finishes change the perceived value of packaging dramatically. Soft-touch matte lamination on a chocolate box, hot foil on a perfume carton, embossed brand monograms on a tea caddy, or spot UV highlights on a coffee pack — these techniques cost a few rupees per unit but can support a 20–50% price increase at retail. We design pack artwork with these finishes in mind, marking up exactly which areas receive foil, varnish or emboss treatment so the printer can produce them correctly.",
        "On the sustainability side, more Sri Lankan brands — especially those exporting to Europe or selling to younger urban consumers — are moving to recyclable, biodegradable or reduced-plastic packaging. We can design for FSC-certified paper boards, mono-material laminate pouches, water-based inks and minimum-plastic windows. Where relevant, we incorporate the recyclability mark and on-pack disposal guidance so consumers know how to dispose of the pack correctly.",
      ],
    },
    {
      h2: "Range Architecture for Multi-SKU Brands",
      paragraphs: [
        "Most FMCG brands do not launch a single SKU — they launch a range of three, five or fifteen variants that need to look like a family on shelf. Good packaging design solves this with a clear range architecture: shared layout grid, shared masterbrand zone, and a flexible variant zone (colour, illustration or photography) that differentiates each SKU. Done well, this lets shoppers find their preferred variant in seconds while reinforcing the masterbrand every time.",
        "We map out range architecture at the start of every multi-SKU project — defining what stays constant across the range and what flexes per variant. This makes future variant launches cheap and fast, because the template is already established. Adding a sixth flavour or a new size becomes a one-day artwork job rather than a fresh design project.",
      ],
    },
    {
      h2: "From Concept to Press — How We Work",
      paragraphs: [
        "A typical packaging project runs over three to five weeks. We start with a brand and category audit — what does your shelf look like today, who are you competing against, and where can you differentiate. Next, we develop two or three creative directions in flat artwork, then build the chosen direction into 3D pack visuals so you can see it as it will look on shelf. We refine through one or two rounds of feedback, then move to dieline-accurate print files with all compliance information, barcodes and finishes marked up.",
        "We work directly with leading offset and digital printers in Sri Lanka and can manage the production handover, colour proofing and first-batch sign-off on your behalf. For exporters, we also prepare print files in the formats and colour profiles requested by overseas printers in India, China and the GCC.",
      ],
    },
  ],
};

export const Route = createFileRoute("/packaging-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});