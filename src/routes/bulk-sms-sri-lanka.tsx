import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ServicePageTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "email-sms-marketing-sri-lanka")!;
const TITLE = "Best Bulk SMS Sri Lanka Agency in Sri Lanka — Call 0771437707";
const DESC = "Affordable, ROI-focused bulk sms sri lanka for Sri Lankan SMEs and enterprises. We design, run and report every campaign end-to-end. Talk to us on 0771437707.";

export const Route = createFileRoute("/bulk-sms-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "bulk sms sri lanka, email marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/bulk-sms-sri-lanka` }],
  }),
  component: () => (<PageShell><ServicePageTemplate category={CAT} keyword="bulk sms sri lanka" /></PageShell>),
});
