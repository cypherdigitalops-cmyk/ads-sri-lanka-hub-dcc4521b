import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "brochure-design-sri-lanka",
  h1: "Brochure Design in Sri Lanka",
  metaTitle: "Brochure Design Sri Lanka — Professional Brochure Designer | Advertising Sri Lanka",
  metaDescription: "Professional brochure design in Sri Lanka — bi-fold, tri-fold and multi-page brochures for every industry. From Rs 8,000. Call 0771437707.",
  intro: "A professionally designed brochure is one of the most versatile marketing tools available to Sri Lankan businesses. It communicates your services, builds credibility and leaves a lasting impression with prospects.",
  whatIs: "Brochure design involves creating a folded or multi-page printed document that presents your business, products or services. Common formats include bi-fold (4 panels), tri-fold (6 panels), Z-fold and multi-page saddle-stitched booklets.",
  whoNeeds: "Hotels, schools, hospitals, real estate developers, tour operators, financial institutions and product companies across Sri Lanka use brochures as a core marketing material for exhibitions, sales visits and customer enquiries.",
  included: [
    "Bi-fold, tri-fold or custom fold options",
    "Both sides designed",
    "Professional imagery and typography",
    "Print-ready CMYK files",
    "Digital PDF version",
    "Multiple language versions available",
  ],
  cost: "Brochure design in Sri Lanka starts from Rs 8,000 for a simple tri-fold. Premium multi-page brochures with custom photography range from Rs 25,000 to Rs 75,000.",
  faqs: [
    { q: "What is the difference between a bi-fold and tri-fold brochure?", a: "A bi-fold has 4 panels (folded once). A tri-fold has 6 panels (folded twice). Tri-folds are the most common format for product and service brochures." },
    { q: "Do you provide printing as well as design?", a: "Yes — we offer end-to-end service from design to print delivery. Call 0771437707 for a combined quote." },
  ],
  longForm: [
    {
      h2: "Why Brochures Still Outperform Digital Ads for Some Sri Lankan Buyers",
      paragraphs: [
        "There are entire customer journeys in Sri Lanka where a printed brochure is still the decisive marketing asset — not a Facebook ad, not a Google search result, not even a website. A parent visiting an international school open day in Colombo, a couple comparing wedding venues at Galle Face Hotel, a procurement officer evaluating three industrial suppliers at an EDB exhibition — all of these decisions are heavily influenced by the brochure they take home and read at the dining table that evening. The brochure becomes the only piece of your brand that competes for attention against your competitors' brochures in the same pile.",
        "This is why brochure design in Sri Lanka is not a legacy expense. It is a high-conversion asset for any business whose buyers research carefully and shortlist offline. The brands that invest in genuinely well-designed brochures consistently report a higher close rate from exhibitions, school visits, hotel walk-ins and field sales meetings.",
      ],
    },
    {
      h2: "Choosing Between Bi-Fold, Tri-Fold, Z-Fold and Booklets",
      paragraphs: [
        "The fold format you choose shapes how your reader experiences the content. A bi-fold (one fold, four panels) is calm and editorial — perfect for premium hotels, private schools and architectural firms that want lots of white space and large photography. A tri-fold (two folds, six panels) is the workhorse format used by tour operators, clinics, training institutes and product companies — six clear panels let you present an overview, three services, pricing and contact details without crowding.",
        "Z-fold brochures unfold like an accordion and work well when you want the reader to see all content in a single sweeping motion — common for event programmes and exhibition handouts. Saddle-stitched booklets (8, 12, 16 or 20 pages) are for companies with deeper stories to tell — annual reports, school prospectuses, hotel catalogues and corporate profiles. We will recommend the format that matches your content volume and your budget during the brief.",
      ],
    },
    {
      h2: "Photography, Illustration and the Cost of Stock Imagery",
      paragraphs: [
        "The single biggest visual decision in any brochure is whether to use custom photography, licensed stock imagery, or custom illustration. Custom photography always wins on credibility — readers can tell the difference between a real photo of your hotel reception and a generic Shutterstock image of someone else's hotel reception. For premium brands, custom photography is not optional. We work with several reliable commercial photographers in Colombo, Kandy and Galle and can include their cost in the project quote.",
        "Licensed stock photography is acceptable for early-stage businesses and short-term campaign brochures where custom shoots are not feasible. We licence images from Adobe Stock, Unsplash+ and iStock — never free Google images, which create copyright risk. Custom illustration is a third path that works particularly well for fintech, edtech, healthcare and B2B service brands where good photography is hard to organise.",
      ],
    },
    {
      h2: "Sinhala, Tamil and Trilingual Brochure Design",
      paragraphs: [
        "Sri Lanka is a trilingual market and many brochures need to work in Sinhala, Tamil and English. We design brochures in all three languages using correctly licensed Sinhala and Tamil typefaces that render cleanly in both print and PDF. The most common formats we deliver are single-language brochures targeted at specific regions, dual-language brochures with English on one side and Sinhala or Tamil on the other, and fully trilingual booklets used for government, healthcare and financial communication.",
        "Trilingual layouts need more design attention than they sometimes get. Sinhala and Tamil generally need more line height than English, and the visual rhythm of the page changes when scripts are mixed. We adjust grid, leading and column widths per language rather than forcing one English layout to fit all three.",
      ],
    },
    {
      h2: "Print Specifications That Save You Money",
      paragraphs: [
        "Brochure design and brochure printing are tightly coupled — the wrong decisions at design stage can quietly double your print cost. We design every brochure with a specific print run, paper weight and finish in mind so the final invoice is predictable. For most Sri Lankan businesses, the sweet spot is 150gsm matte art paper for tri-folds and 250–300gsm covers with 130gsm interiors for booklets.",
        "We also size brochures to industry-standard parent sheets (SRA3, SRA2) so the printer does not waste paper trimming oversized layouts. These small decisions can reduce your print cost by 15–25% without affecting the final look. When you bundle design and printing through us, we handle all of this automatically and quote one combined price.",
      ],
    },
    {
      h2: "Our Brochure Design Process and Timeline",
      paragraphs: [
        "A typical brochure project runs over 10–14 working days from brief to print-ready files. The first 2–3 days are spent on the brief, content collection and visual moodboard. Days 4–7 cover the first design draft — full layout with your real content, real photography and a working type system. Days 8–11 are revisions, where we refine layout, photography choices and copy hierarchy based on your feedback. Days 12–14 cover final print preparation, proofing and PDF delivery.",
        "Rush projects — for example, a brochure needed for an exhibition next week — can be completed in 5–7 days at an additional charge. Either way, we will give you a firm timeline at the start so you can plan your launch, exhibition or sales push around it with confidence.",
      ],
    },
  ],
};

export const Route = createFileRoute("/brochure-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});