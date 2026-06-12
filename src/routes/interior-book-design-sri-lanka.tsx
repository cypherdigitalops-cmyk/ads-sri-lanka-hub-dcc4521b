import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "interior-book-design-sri-lanka",
  h1: "Interior Book Design in Sri Lanka",
  metaTitle: "Interior Book Design Sri Lanka — Book Layout & Typesetting | Advertising Sri Lanka",
  metaDescription: "Professional interior book design and typesetting in Sri Lanka. Print-ready layouts for any genre. From Rs 15,000. Call 0771437707.",
  intro: "The interior design of a book is as important as its cover. Professional typesetting and layout ensures your book is easy to read, looks polished and meets the standards expected by readers and printers.",
  whatIs: "Interior book design involves typesetting your manuscript into a professionally designed page layout — including chapter headings, body text, footnotes, images, tables, running headers and page numbers. The result is a print-ready file for offset or digital printing.",
  whoNeeds: "Authors, publishers, academic institutions, schools, businesses producing annual reports and organisations publishing books in Sri Lanka need professional interior book design and typesetting.",
  included: [
    "Full manuscript typesetting",
    "Chapter heading and section design",
    "Running headers and page numbers",
    "Image and table integration",
    "Print-ready PDF at 300dpi",
    "Sinhala, Tamil and English typesetting",
  ],
  cost: "Interior book design in Sri Lanka starts from Rs 15,000 for a simple 100-page book. Complex academic or illustrated books range from Rs 40,000 to Rs 150,000 depending on page count and complexity.",
  faqs: [
    { q: "What software do you use for book typesetting?", a: "We use Adobe InDesign, which is the industry standard for professional book layout and typesetting." },
    { q: "Can you typeset books in Sinhala Unicode?", a: "Yes — we specialise in Sinhala and Tamil Unicode typesetting for professional print-ready quality." },
  ],
};

export const Route = createFileRoute("/interior-book-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});