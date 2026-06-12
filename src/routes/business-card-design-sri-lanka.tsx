import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "business-card-design-sri-lanka",
  h1: "Business Card Design in Sri Lanka",
  metaTitle: "Business Card Design Sri Lanka — Professional Business Cards | Advertising Sri Lanka",
  metaDescription: "Professional business card design in Sri Lanka from Rs 3,000. Premium designs for executives, entrepreneurs and businesses. Call 0771437707.",
  intro: "A business card is often the first physical impression of your brand. A professionally designed business card signals credibility, attention to detail and professionalism — qualities that matter enormously in Sri Lankan business culture.",
  whatIs: "Business card design involves creating a compact, professionally printed card that communicates your name, title, contact details and brand. Great business cards are memorable, well-organised and print-ready.",
  whoNeeds: "Every professional in Sri Lanka benefits from a well-designed business card — executives, entrepreneurs, sales professionals, consultants, doctors, lawyers and anyone who attends meetings, networking events or conferences.",
  included: [
    "Front and back design",
    "Your logo, name, title and contact details",
    "QR code integration (optional)",
    "Print-ready files in CMYK",
    "Multiple design concepts",
    "Premium and standard size options",
  ],
  cost: "Business card design in Sri Lanka starts from Rs 3,000. Premium and luxury card designs (with foil, embossing or special finishes) range from Rs 8,000 to Rs 20,000.",
  faqs: [
    { q: "What information should a business card include?", a: "Name, job title, company name, phone number, email address and website. A logo and social media handle can also be included depending on your profession." },
    { q: "Do you provide printing as well?", a: "Yes — we offer both design and printing services. Call 0771437707 for a combined design and print quote." },
  ],
  longForm: [
    {
      h2: "Why Business Card Design Still Matters in Sri Lanka",
      paragraphs: [
        "Despite the rise of LinkedIn, WhatsApp business profiles and digital contact sharing, the printed business card remains a deeply respected ritual in Sri Lankan business culture. Whether you are meeting a client at the Cinnamon Grand, attending an EDB exhibition at the BMICH, or visiting a supplier in Pettah, the moment of exchanging cards still signals seriousness, preparation and respect. A flimsy, generic card quietly tells the other person that the rest of your operation is probably the same. A well-designed card does the opposite — it earns you a few extra seconds of attention before the conversation has even started.",
        "In a market like Colombo, where dozens of small consultancies, agencies and B2B suppliers compete for the same buyers, business card design is one of the cheapest and most effective ways to differentiate. For under Rs 10,000 in design and a few thousand more in printing, a professional can carry a credibility signal in their wallet for the next two years. Few other marketing assets have that kind of return on investment.",
      ],
    },
    {
      h2: "What Makes a Great Business Card Design",
      paragraphs: [
        "A great business card balances three things: brand identity, legibility and tactile quality. The brand side comes from your logo, colour palette and typography — the card should feel like a miniature extension of your wider visual identity, not a random standalone artefact. Legibility means the recipient can read your name, role and phone number in a second, in poor lighting, without squinting. The tactile side comes from paper weight, finish and edge treatment — a 350gsm matte laminated card with rounded corners feels noticeably more premium than a thin 250gsm glossy stock, even before the recipient registers the design.",
        "We design every business card with print production in mind from the first concept. That means correct CMYK colours, 3mm bleed, safe margins, vector logos and font outlines. The result is a file your printer can produce without back-and-forth — saving you days and avoiding the disappointing first-batch reprint that catches many Sri Lankan brands by surprise.",
      ],
    },
    {
      h2: "Standard, Square and Mini — Choosing the Right Size",
      paragraphs: [
        "The standard Sri Lankan business card size is 90mm × 55mm, which fits neatly into local cardholders and wallets. This size is the safe default for executives, sales professionals and corporate roles where conventionality matters. For creative industries — architects, photographers, designers, boutique studios — square cards (55mm × 55mm) or US-style cards (89mm × 51mm) signal that you do things a little differently. Mini cards (85mm × 25mm) work well for influencers, makeup artists and personal brands that share cards alongside product samples.",
        "We will help you pick the right size during the brief — based on your industry, target audience and how the card will be handed out. The size you choose affects layout, typography hierarchy and even printing cost, so it is worth deciding early rather than retrofitting later.",
      ],
    },
    {
      h2: "Premium Finishes That Justify a Higher Spend",
      paragraphs: [
        "If you operate at the top end of your market — luxury hotels, private banking, legal partnerships, design studios — a standard 4-colour business card may feel underwhelming next to your competitors. Premium finishes add a layer of tactile luxury that customers can feel before they read a word. Spot UV adds a glossy raised effect over your logo on an otherwise matte card. Embossing and debossing press your logo into the paper for a sculpted feel. Foil stamping in gold, silver, copper or rose gold adds genuine reflective metal to selected areas. Edge painting in your brand colour turns the side profile of the card into a thin coloured line — subtle but unmistakable.",
        "These finishes typically add 30–80% to your printing cost, but they roughly double the perceived value of the card. For senior partners and business owners who only hand out 100–200 cards a year to high-value contacts, this is almost always worth it.",
      ],
    },
    {
      h2: "QR Codes, NFC and the Digital Layer",
      paragraphs: [
        "Modern business cards in Sri Lanka increasingly bridge physical and digital. A simple QR code printed on the back can link to your full vCard, LinkedIn profile, WhatsApp number with a pre-filled message, or a portfolio page. For higher-end use cases, NFC-enabled business cards let the recipient tap their phone on your card and instantly save your contact — an experience that still surprises people in a positive way.",
        "We can design both. For most clients, a discreet QR code in one corner is the sweet spot — useful for those who want it, invisible to those who do not. We will generate the QR codes from your real contact data and test them on iOS and Android before sending print files.",
      ],
    },
    {
      h2: "Our Business Card Design Process",
      paragraphs: [
        "Step one is the brief — a short call or WhatsApp conversation about your brand, role, industry, audience and any cards you already love. Step two is concepts — we send two or three distinct design directions within 2–3 working days. Step three is refinement — we take your favourite direction and refine layout, typography and finishes based on your feedback. Step four is print preparation — we deliver final CMYK PDF files with bleed, plus a low-resolution preview JPEG for sharing on WhatsApp and LinkedIn. Step five, optionally, is printing — we can print directly through our partner press in Colombo and deliver to anywhere in Sri Lanka.",
        "Most projects complete within 5–7 working days from brief to delivered files. Rush projects with a 48-hour turnaround are possible for an additional charge.",
      ],
    },
  ],
};

export const Route = createFileRoute("/business-card-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});