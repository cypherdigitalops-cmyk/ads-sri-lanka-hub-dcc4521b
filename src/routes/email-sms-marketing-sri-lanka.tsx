import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryHubTemplate } from "@/components/site/Templates";
import { CATEGORIES, SITE } from "@/data/site";

const CAT = CATEGORIES.find((x) => x.slug === "email-sms-marketing-sri-lanka")!;
const TITLE = "Email Marketing SRI LANKA — Email & SMS Marketing Services in Sri Lanka | advertisingsrilanka.lk";
const DESC = "Reach customers directly with permission-based email, SMS and WhatsApp marketing — automated journeys, segmentation, A/B testing and detailed reporting tai";

export const Route = createFileRoute("/email-sms-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "email marketing sri lanka, email & sms marketing sri lanka, advertising sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/email-sms-marketing-sri-lanka` }],
  }),
  component: () => (<PageShell><CategoryHubTemplate category={CAT} /></PageShell>),
});
