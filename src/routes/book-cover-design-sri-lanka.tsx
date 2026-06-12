import { createFileRoute } from "@tanstack/react-router";
import { DesignSubServicePage, designServiceHead, type DesignSubService } from "@/components/site/DesignSubServicePage";

const DATA: DesignSubService = {
  slug: "book-cover-design-sri-lanka",
  h1: "Book Cover Design in Sri Lanka",
  metaTitle: "Book Cover Design Sri Lanka — Professional Book Cover Designer | Advertising Sri Lanka",
  metaDescription: "Professional book cover design in Sri Lanka for authors and publishers. Print and digital covers. From Rs 10,000. Call 0771437707.",
  intro: "A book cover is the single most important marketing tool for any publication. Research consistently shows that readers judge books by their covers — a compelling design dramatically increases pick-up rates and sales.",
  whatIs: "Book cover design involves creating a front cover, spine and back cover for a printed book, or a front cover for an e-book. It communicates the book's genre, tone and content through imagery, typography and colour — attracting the right readers.",
  whoNeeds: "Authors, publishers, academic institutions, schools, religious organisations and businesses producing books, reports and publications in Sri Lanka need professional book cover design.",
  included: [
    "Front cover, spine and back cover design",
    "Author name and title treatment",
    "Back cover blurb and ISBN layout",
    "Print-ready files at 300dpi",
    "Digital cover for Amazon Kindle, websites and social media",
    "Sinhala, Tamil and English options",
  ],
  cost: "Book cover design in Sri Lanka starts from Rs 10,000 for a standard cover. Premium illustrated or photographic covers range from Rs 25,000 to Rs 75,000.",
  faqs: [
    { q: "What file format do I need for printing?", a: "Print-ready PDF at 300dpi with bleed and crop marks. We provide this as standard." },
    { q: "Can you design covers for self-published books on Amazon KDP?", a: "Yes — we design covers to Amazon KDP specifications for both paperback and Kindle formats." },
  ],
};

export const Route = createFileRoute("/book-cover-design-sri-lanka")({
  head: () => designServiceHead(DATA),
  component: () => <DesignSubServicePage data={DATA} />,
});