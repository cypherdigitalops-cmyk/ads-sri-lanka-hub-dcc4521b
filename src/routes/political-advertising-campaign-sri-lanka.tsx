import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CustomBlogArticle } from "@/components/site/CustomBlogArticle";
import { SITE } from "@/data/site";

const SLUG = "political-advertising-campaign-sri-lanka";
const TITLE = "Political Advertising Campaign Sri Lanka — Strategy, Creative & Media for Every Election";
const DESC = "End-to-end political advertising in Sri Lanka — voter research, messaging, posters, billboards, social media, SMS, WhatsApp, rally production, TV, radio and 24/7 media monitoring for Presidential, Parliamentary, Provincial and Local Government campaigns.";

const PRIMARY_ANCHOR = {
  href: "/contact",
  regex: /(political\s+advertising|political\s+campaign|election\s+campaign)/i,
  fallbackText: "political advertising in Sri Lanka",
  ctaLabel: `Call ${SITE.phone}`,
  ctaHeadline: "Running for election? Planning a campaign?",
  ctaService: "Political Advertising Campaign Sri Lanka",
};

export const Route = createFileRoute("/political-advertising-campaign-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "political advertising sri lanka, political advertising campaign sri lanka, election campaign sri lanka, political campaign posters sri lanka, political party advertising, parliamentary election advertising, presidential election campaign sri lanka, provincial council campaign, pradeshiya sabha campaign" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE.url}/${SLUG}` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/${SLUG}` }],
  }),
  component: () => (
    <PageShell>
      <CustomBlogArticle
        slug={SLUG}
        title={TITLE}
        description={DESC}
        kicker="Election Campaign Services"
        publishedISO="2025-06-01"
        category={{ label: "Political Advertising", href: "/industry-advertising-sri-lanka" }}
        primaryAnchor={PRIMARY_ANCHOR}
        intro="From local government to presidential campaigns — voter research, messaging, posters, social media, SMS blasts, rally production, TV, radio and real-time media monitoring. Islandwide coverage. Call 0771437707."
        blocks={[
          { type: "h2", text: "What is Political Advertising in Sri Lanka?" },
          { type: "p", text: "Political advertising in Sri Lanka is the full set of communication tools used by candidates, political parties and campaign teams to reach voters, build name recognition, deliver policy messages and mobilise support — from the first day of campaigning to election eve." },
          { type: "p", text: "Sri Lanka holds elections at multiple levels — Presidential, Parliamentary, Provincial Council, and Local Government (Municipal, Urban Council, Pradeshiya Sabha). Each level has a different voter profile, media landscape, budget requirement and legal framework. A campaign for a Pradeshiya Sabha seat in Kurunegala looks completely different from a national parliamentary campaign in Colombo District." },
          { type: "p", text: "What all campaigns share is the need to communicate effectively across three language communities — Sinhala, Tamil and English — through the right mix of channels for each constituency." },

          { type: "h2", text: "Types of Political Advertising Available in Sri Lanka" },
          { type: "h3", text: "Outdoor & Print" },
          { type: "ul", items: ["Poster campaigns (A1, A2, hoarding size)", "Billboard & hoarding advertising along main roads", "Cutout / standee displays at junctions and polling areas", "Vehicle branding — vans, buses, three-wheelers", "Lamp-post banners in target electorates", "Flex and vinyl printing islandwide"] },
          { type: "h3", text: "Digital" },
          { type: "ul", items: ["Facebook & Instagram ads — targeted by district, age, language", "YouTube pre-roll video ads", "TikTok campaigns targeting under-35 first-time voters", "Google Search ads for candidate name & party searches", "WhatsApp broadcast campaigns to voter lists", "Bulk SMS to mobile numbers by district"] },
          { type: "h3", text: "Broadcast" },
          { type: "ul", items: ["TV advertising — Siyatha, Derana, Hiru, TV1, Rupavahini", "Radio advertising — Shaa FM, Yes FM, TNL, Rangiri, SLBC regional", "TV debate and interview placement support", "Press release distribution to print and online media"] },
          { type: "h3", text: "On-Ground / BTL" },
          { type: "ul", items: ["Rally stage, LED screen and sound system production", "Campaign vehicle and caravan branding", "Door-to-door canvassing material (leaflets, branded gifts)", "Polling day logistics and signage", "Volunteer coordination material and kits"] },
          { type: "h3", text: "PR & Reputation" },
          { type: "ul", items: ["Media monitoring — 24/7 tracking of mentions across TV, radio, print and social", "Crisis communication and rapid response", "Journalist and editor relationship management", "Opposition monitoring and sentiment tracking"] },

          { type: "h2", text: "Political Advertising Channels Compared" },
          { type: "table",
            head: ["Channel", "Best For", "Speed", "Reach", "Cost (Est.)"],
            rows: [
              ["Facebook / Instagram Ads", "Targeted voter demographics", "1–3 days", "District-level precise", "Rs 50,000–300,000"],
              ["Bulk SMS", "Mobilising known supporters", "Same day", "Any district list", "Rs 20,000–100,000"],
              ["WhatsApp Broadcast", "Volunteer & supporter groups", "Same day", "Warm contacts only", "Rs 15,000+"],
              ["Posters & Outdoor", "Name recognition in electorate", "3–7 days", "Ward / electorate", "Rs 30,000–200,000"],
              ["Billboards & Hoardings", "High-visibility main roads", "1–2 weeks", "District highways", "Rs 60,000–250,000/month"],
              ["TV Advertising", "National / provincial awareness", "2–3 weeks", "Island-wide", "Rs 300,000+"],
              ["Radio Advertising", "Regional language markets", "1 week", "Province / district", "Rs 80,000+"],
              ["YouTube Ads", "Policy storytelling, under-45", "2–5 days", "Island-wide digital", "Rs 40,000+"],
              ["TikTok Ads", "First-time voters under 35", "1–3 days", "Under-35 urban", "Rs 25,000+"],
              ["Rally Production", "Mass mobilisation", "Event-based", "Constituency", "Rs 200,000+"],
            ],
          },

          { type: "h2", text: "How to Plan a Political Advertising Campaign in Sri Lanka" },
          { type: "h3", text: "Step 1 — Voter Research" },
          { type: "p", text: "Understand who is voting in your electorate. Age distribution, language, religious profile, economic concerns, main issues. This determines your message and your media mix." },
          { type: "h3", text: "Step 2 — Message Development" },
          { type: "p", text: "Define 3–5 core messages that resonate with your target voter. In Sri Lanka, effective political messaging addresses cost of living, employment, infrastructure, education, and community-specific concerns. Messages must be adapted for Sinhala, Tamil and English audiences separately — not just translated." },
          { type: "h3", text: "Step 3 — Channel Selection by Electorate" },
          { type: "ul", items: ["Urban Colombo electorate: digital-heavy (Facebook, YouTube, TikTok, Google) with premium OOH.", "Southern province: FM radio + Sinhala TV + outdoor posters + SMS.", "Northern province: Tamil-language radio, Tamil TV channels, Facebook in Tamil.", "Rural electorates: outdoor posters, three-wheeler branding, radio, community events."] },
          { type: "h3", text: "Step 4 — Creative Production" },
          { type: "p", text: "Consistent visual identity — colours, fonts, candidate photo — across all materials. Separate creative versions for Sinhala, Tamil and English. Outdoor must be readable at speed (large name, clear symbol). Digital creative must stop the scroll in under 2 seconds." },
          { type: "h3", text: "Step 5 — Campaign Timeline" },
          { type: "p", text: "Most effective political campaigns in Sri Lanka run in three phases: Awareness (name recognition) → Engagement (policy and personality) → Mobilisation (voting day action). Budget allocation typically follows 40% / 35% / 25% across these phases." },
          { type: "h3", text: "Step 6 — Compliance" },
          { type: "p", text: "All political advertising in Sri Lanka must comply with Elections Commission guidelines, the Bribery Act, and media regulations during official campaign periods. Broadcast advertising requires prior approval. Social media spending must be declared. Work with a team that understands these rules." },

          { type: "h2", text: "Political Advertising Budgets in Sri Lanka" },
          { type: "table",
            head: ["Election Level", "Typical Total Budget", "Focus"],
            rows: [
              ["Local Government (Pradeshiya Sabha / UC)", "Rs 150,000 – Rs 500,000", "Posters, SMS, WhatsApp, local radio, three-wheeler branding"],
              ["Provincial Council", "Rs 500,000 – Rs 2,000,000", "Outdoor, regional radio, Facebook/Instagram, SMS, rally support"],
              ["Parliamentary (District)", "Rs 2,000,000 – Rs 10,000,000+", "Full mix: TV, radio, digital, outdoor network, PR, events"],
              ["Presidential", "Rs 50,000,000+", "Fully integrated ATL + BTL + digital + PR + media monitoring"],
            ],
          },

          { type: "h2", text: "Common Mistakes in Sri Lankan Political Campaigns" },
          { type: "h3", text: "1. Posters without strategy" },
          { type: "p", text: "Printing thousands of posters without knowing which wards have swing voters is wasted spend. Poster placement should be data-driven." },
          { type: "h3", text: "2. One Sinhala message for a multilingual electorate" },
          { type: "p", text: "Any district with a Tamil or Muslim voter base needs properly localised Tamil and English materials — not translations." },
          { type: "h3", text: "3. No digital presence" },
          { type: "p", text: "Young first-time voters in Sri Lanka are almost entirely on Facebook, TikTok and YouTube. Campaigns with no digital are invisible to a growing portion of the electorate." },
          { type: "h3", text: "4. Starting too late" },
          { type: "p", text: "Name recognition takes time. Campaigns that launch visible advertising only in the final two weeks are building on nothing. Start outdoor and social 60–90 days before polling day." },
          { type: "h3", text: "5. No monitoring" },
          { type: "p", text: "Negative content about a candidate spreads fast on social media and WhatsApp groups. Without real-time monitoring, campaign teams cannot respond before damage is done." },
          { type: "h3", text: "6. Weak rally production" },
          { type: "p", text: "A poorly produced rally — bad sound, dim stage, thin crowd — can be photographed and used against the campaign. Professional stage, lighting and LED screen production is an investment, not a luxury." },

          { type: "callout", text: "Running for election? Call 0771437707 for a free, confidential strategy consultation. We work with candidates at all levels — local government to parliamentary." },
        ]}
        faqs={[
          { q: "Is political advertising regulated in Sri Lanka?", a: "Yes. The Elections Commission of Sri Lanka issues guidelines for each election covering permissible advertising periods, spending limits, prohibited conduct and broadcast rules. The Bribery Commission also monitors campaign spending. Always work with a team familiar with current election regulations before launching any paid advertising." },
          { q: "Can I advertise on Facebook and Google during a Sri Lankan election?", a: "Yes, but with restrictions. Facebook requires authorisation for political ads in some regions. Google has its own political advertising policies. Both platforms may require transparency disclosures. Platform rules change each election cycle — verify current requirements before launching." },
          { q: "How far in advance should I start advertising?", a: "For name recognition: ideally 90–120 days before polling. For message and policy communication: 60–90 days. For final mobilisation push: the last 2–3 weeks. Campaigns starting advertising in the final week are rarely effective." },
          { q: "Do I need separate Tamil advertising?", a: "For any electorate with a Tamil-speaking voter population, yes. Properly produced Tamil content — native voiceover, adapted messaging, Tamil-language social media — significantly outperforms Sinhala material with Tamil subtitles." },
          { q: "What's the single most effective channel for local elections?", a: "For Pradeshiya Sabha and Urban Council elections: a combination of targeted poster placement in key wards + bulk SMS to known voter numbers + active WhatsApp group management is typically the highest-ROI combination at that budget level." },
        ]}
        related={[
          { href: "/industry-advertising-sri-lanka", label: "Industry Advertising Sri Lanka" },
          { href: "/billboard-advertising-sri-lanka", label: "Billboard Advertising Sri Lanka" },
          { href: "/bulk-sms-sri-lanka", label: "Bulk SMS Sri Lanka" },
        ]}
      />
    </PageShell>
  ),
});
