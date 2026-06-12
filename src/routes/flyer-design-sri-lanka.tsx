import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "flyer-design-sri-lanka",
  h1: "Flyer Design in Sri Lanka",
  metaTitle: "Flyer Design Sri Lanka — Professional Flyer & Leaflet Design | Advertising Sri Lanka",
  metaDescription: "Professional flyer and leaflet design in Sri Lanka from Rs 3,500. Event flyers, promotion flyers and product leaflets. Call 0771437707.",
  intro: "A well-designed flyer grabs attention in seconds. Whether promoting an event, a sale, a new product or a service, a professional flyer design ensures your message is clear, compelling and on-brand.",
  whatIs: "Flyer design is the creation of a single-page promotional document — typically A4, A5 or A6 — used to announce events, promotions, new products or services. Flyers are distributed by hand, posted on notice boards, sent digitally or used in direct mail.",
  whoNeeds: "Restaurants, schools, clinics, shops, event organisers, religious organisations and businesses running promotions across Sri Lanka use flyers as a fast, affordable and effective marketing tool.",
  included: [
    "Single-page design (A4, A5 or A6)",
    "Front and back design available",
    "Eye-catching layout and typography",
    "Print-ready CMYK files",
    "Digital version for WhatsApp and social media sharing",
  ],
  cost: "Flyer design in Sri Lanka starts from Rs 3,500 for a single-page design. Premium double-sided flyers with photography and illustration start from Rs 7,000.",
  faqs: [
    { q: "How quickly can a flyer be designed?", a: "Simple flyers can be delivered within 24 hours. Complex flyers with custom photography or illustration take 2–3 working days." },
    { q: "Can the flyer be shared on WhatsApp and social media?", a: "Yes — you receive both a print-ready PDF and a web-optimised JPEG or PNG for digital sharing." },
  ],
  longForm: [
    {
      h2: "Why Flyer Design Still Drives Real Sales in Sri Lanka",
      paragraphs: [
        "In an era of Facebook ads and Google search, the humble flyer is still one of the highest-converting marketing assets a Sri Lankan business can produce. The reason is simple: a flyer is a physical object that people touch, look at and often keep — on a fridge door, a notice board, a clinic reception, a school bag. A scroll-past Instagram ad disappears in two seconds; a well-designed flyer stays in a household for days or weeks, waiting for the moment the recipient actually needs your service.",
        "For restaurants offering a new menu, tuition classes opening a new batch, clinics launching a vaccination drive, salons running a festive promotion or shops opening a new branch, flyers consistently outperform digital ads on cost-per-lead in the immediate catchment area. The trick is in the design — generic, text-heavy flyers from the corner press shop get binned, while a thoughtfully designed flyer earns attention long enough to convert.",
      ],
    },
    {
      h2: "A4, A5, A6 and DL — Choosing the Right Flyer Size",
      paragraphs: [
        "Flyer size is a strategic decision, not a default. A4 (210 × 297mm) is the largest standard size — ideal when you have detailed content to communicate, such as a school prospectus summary, a property listing or a multi-service menu. A5 (148 × 210mm) is the most popular flyer size in Sri Lanka — large enough to be visible, small enough to hand out in bulk, and affordable to print. A6 (105 × 148mm) is best for hand-to-hand distribution at events, weddings and outside stores — small enough that recipients are happy to accept and pocket.",
        "DL (99 × 210mm) is a long, narrow format that fits perfectly into hotel reception holders, restaurant menu stands and standard rack displays. We will recommend the right size during the brief based on how you plan to distribute the flyers, what content you need to fit, and what your printing budget looks like.",
      ],
    },
    {
      h2: "Single-Sided vs Double-Sided Flyer Design",
      paragraphs: [
        "Single-sided flyers are cheaper to print and work well when your message is simple — an event date, a single promotion, a contact number. Double-sided flyers cost only marginally more and dramatically improve information density. The front carries the headline message and hero visual; the back carries detail — full menu items, service lists, terms and conditions, location maps, multiple language versions.",
        "For most service businesses, double-sided is the better choice. A typical clinic flyer might use the front for \"Now Open in Maharagama\" with consultation hours and a hero photograph, and the back for the full list of specialities, doctor profiles, insurance partners and a location map. We design both sides as a unified piece so the back never feels like an afterthought.",
      ],
    },
    {
      h2: "Writing and Designing for the Scroll-Past Generation",
      paragraphs: [
        "The average Sri Lankan flyer recipient gives the flyer about three seconds before deciding whether to read further or throw it away. A successful flyer earns those three seconds by leading with one clear headline, one dominant visual and one obvious call to action — typically a phone number, WhatsApp link or QR code. Everything else is supporting detail that earns attention only after the first three seconds have been won.",
        "We design every flyer with this hierarchy enforced strictly. One hero message in large, bold type; one strong image; one accent colour for the call to action. Secondary detail is grouped into a clear block lower down. This is the opposite of the typical \"fit everything in\" flyer that fills every square centimetre with text and overwhelms the reader. Less always wins.",
      ],
    },
    {
      h2: "Digital Flyers for WhatsApp, Facebook and Email",
      paragraphs: [
        "Most of the flyers we design now have a second life on WhatsApp, Facebook and email. A school flyer printed for a parents' day is also forwarded by parents in their class WhatsApp groups; a restaurant promotion handed out at the door is also posted to the brand's Facebook page. We deliver every flyer as both a print-ready CMYK PDF and a screen-optimised JPEG or PNG in the correct dimensions for WhatsApp forwarding (1080 × 1920px portrait) and Facebook posting (1080 × 1080px square).",
        "Where the campaign is digital-first, we adapt the layout for vertical reading — moving the call to action higher up the design so it is visible on phone screens without scrolling. This dual delivery means you get maximum value from every flyer design, with no extra design cost for the digital versions.",
      ],
    },
    {
      h2: "Sinhala and Tamil Flyers for Local Markets",
      paragraphs: [
        "Flyer campaigns targeted at suburban and regional Sri Lanka almost always perform better in Sinhala or Tamil than in English. A clinic flyer in Sinhala outperforms its English equivalent by a wide margin in Galle, Kandy, Kurunegala and Anuradhapura; a tuition class flyer in Tamil dominates in Jaffna, Batticaloa and Trincomalee. We design flyers in all three languages with correctly licensed Sinhala and Tamil typefaces, properly typeset for legibility at flyer size.",
        "For brands targeting trilingual urban areas, we can produce parallel versions in all three languages so distributors can hand each recipient the version they prefer. The artwork stays consistent — same layout, same colours, same visuals — so the campaign feels unified even across three languages. This kind of culturally aware flyer design typically lifts response rates by 30–60% compared to English-only campaigns.",
      ],
    },
  ],
};

export const Route = createFileRoute("/flyer-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});