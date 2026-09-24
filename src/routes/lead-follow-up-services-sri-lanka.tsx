import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SITE } from "@/data/site";

const TITLE = "Lead Follow-Up Services Sri Lanka | Sales & Lead Qualification";
const DESC =
  "Lead follow-up services in Sri Lanka. Contact your prospects, understand their requirements, collect customer feedback and identify opportunities for your sales team.";

const SERVICES = [
  { icon: "📞", t: "Sales Calling Services", d: "Outbound calling to contact a specific group of prospects or customers — lead follow-up, enquiry follow-up, appointment setting, event and promotional follow-up, customer re-engagement and outbound sales calling." },
  { icon: "✅", t: "Lead Qualification Services", d: "Understand which prospects require attention by organising them according to interest, requirement, timing, feedback and next action — so your sales team can prioritise." },
  { icon: "🔁", t: "Prospect Follow-Up Services", d: "Maintain communication with prospects who need more information, a quotation, a demo or more time — instead of losing them after the initial enquiry." },
  { icon: "💬", t: "Customer Feedback Calling", d: "A conversation reveals what advertising dashboards can't — why they enquired, what they're looking for, what stopped them, and what would make them consider you." },
  { icon: "📅", t: "Appointment Setting", d: "Book qualified prospects directly into your sales team's calendar where it fits the campaign objective." },
  { icon: "🗣️", t: "Multilingual Follow-Up", d: "Campaigns structured for Sinhala, Tamil or English, based on your target market and campaign requirements." },
];

const STEPS = [
  { n: "01", t: "Generate Your Leads", d: "Leads come from your advertising — Google Ads, Facebook & Instagram Ads, website enquiries, landing pages, email, SMS, WhatsApp, events, promotions or existing databases." },
  { n: "02", t: "Provide the Lead List", d: "You provide the prospects or enquiries to be contacted — name, telephone number, email, product/service interested in, lead source and other relevant details." },
  { n: "03", t: "Make the First Call", d: "The calling team contacts each prospect and starts the conversation — the purpose is to understand the person behind the enquiry." },
  { n: "04", t: "Understand the Requirement", d: "Campaign-specific questions uncover what the prospect is looking for, their timeframe, and whether they want more information or a salesperson's call." },
  { n: "05", t: "Qualify & Report", d: "Prospects are categorised — Interested, Potential Customer, Needs More Information, Follow Up Later, Not Interested, No Answer or Invalid Contact — and reported to your sales team." },
];

const QUALIFICATION = [
  { t: "Interested", d: "The prospect has expressed interest and may require sales follow-up." },
  { t: "Potential Customer", d: "The prospect has a relevant requirement and may be suitable for the product or service." },
  { t: "Needs More Information", d: "The prospect wants additional information before making a decision." },
  { t: "Follow Up Later", d: "The prospect may be interested but is not ready to proceed immediately." },
  { t: "Not Interested", d: "The prospect does not currently have an interest." },
  { t: "No Answer", d: "The prospect could not be reached." },
  { t: "Invalid Contact", d: "The contact information may need to be corrected or updated." },
];

const REPORT_ROWS = [
  ["Prospect A", "Answered", "Interested", "Product A", "Wants pricing", "Sales call"],
  ["Prospect B", "Answered", "Potential", "Service B", "Needs details", "Send information"],
  ["Prospect C", "Answered", "Later", "Product A", "Not ready now", "Follow up later"],
  ["Prospect D", "No Answer", "—", "—", "Could not reach", "Retry"],
  ["Prospect E", "Answered", "Not Interested", "—", "No current requirement", "No immediate follow-up"],
];

const INDUSTRIES = [
  ["Real Estate", "Follow up with property enquiries and identify buyers or investors who have an active requirement."],
  ["Education", "Contact student enquiries and understand course, institute or study requirements."],
  ["Hotels & Tourism", "Follow up with accommodation, travel, event and tourism enquiries."],
  ["Banking & Finance", "Contact prospects and understand their requirements before further sales or service discussions."],
  ["Insurance", "Follow up with enquiries and identify prospects requiring additional information."],
  ["Automotive", "Contact vehicle enquiries and understand purchase interest and requirements."],
  ["Healthcare & Wellness", "Follow up with service enquiries and identify potential customers requiring further assistance."],
  ["Retail & E-commerce", "Contact customers or prospects following campaigns, promotions and product enquiries."],
  ["B2B & Professional Services", "Follow up with business enquiries and identify companies requiring further discussion."],
  ["Training & Professional Services", "Contact people who have expressed interest in courses, programs or professional services."],
];

const FAQS = [
  { q: "What is lead follow-up?", a: "Lead follow-up is the process of contacting prospects or enquiries after they have shown interest in a business, product or service." },
  { q: "What is lead qualification?", a: "Lead qualification is the process of understanding a prospect's requirement and determining whether they may be suitable for further sales follow-up." },
  { q: "Do I need to provide the leads?", a: "For this type of service, the business generally provides the prospect, enquiry or customer list that needs to be contacted." },
  { q: "Can lead follow-up be used for Facebook leads?", a: "Yes. Leads generated through Facebook and Instagram campaigns can be followed up through an outbound calling process." },
  { q: "Can Google Ads leads be followed up?", a: "Yes. Website enquiries and leads generated through Google Ads can be included in a lead follow-up campaign." },
  { q: "Do you provide customer feedback?", a: "Yes. A lead follow-up campaign can be structured to collect customer requirements, feedback, questions and other information relevant to the campaign." },
  { q: "Do you provide call recordings?", a: "The purpose of the service is to provide call outcomes, prospect information and customer feedback. Call recordings are not the core deliverable." },
  { q: "Is lead follow-up the same as telemarketing?", a: "Not necessarily. Telemarketing can involve promotional or sales calls to prospects, while lead follow-up generally focuses on contacting people who have already shown some form of interest or are already included in a prospect database." },
  { q: "Is lead follow-up the same as call center outsourcing?", a: "Lead follow-up can be one type of outsourced outbound calling service. Traditional call center outsourcing may cover a much broader range of inbound and outbound customer services." },
  { q: "Can the service include appointment setting?", a: "Yes. Appointment setting can be included where it is appropriate for the campaign and agreed in advance." },
  { q: "Can I use lead follow-up with my existing advertising campaign?", a: "Yes. Lead follow-up can be added after lead-generation activities such as Google Ads, Facebook Ads, landing pages, email, SMS, WhatsApp and other campaigns." },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Lead Follow-Up Services Sri Lanka",
      description: DESC,
      provider: { "@type": "Organization", name: "Advertising Sri Lanka", url: SITE.url, telephone: SITE.phoneIntl },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/lead-follow-up-services-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "lead follow-up services sri lanka, sales lead follow-up sri lanka, lead qualification services sri lanka, prospect follow-up services sri lanka, customer feedback calling sri lanka, sales calling services sri lanka, outbound calling services sri lanka, telemarketing services sri lanka, appointment setting services sri lanka, call center outsourcing sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/lead-follow-up-services-sri-lanka` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/lead-follow-up-services-sri-lanka` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSONLD) }],
  }),
  component: LeadFollowUpPage,
});

function Ctas({ dark }: { dark?: boolean }) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <a href={SITE.whatsapp} target="_blank" rel="noopener" className="rounded-md bg-[#25d366] px-7 py-3.5 text-sm font-bold text-white hover:opacity-90">
        💬 WhatsApp Us
      </a>
      <a
        href={`tel:${SITE.phone}`}
        className={
          dark
            ? "rounded-md bg-white px-7 py-3.5 text-sm font-bold text-[#2563eb] hover:opacity-90"
            : "rounded-md border-2 border-white/50 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10"
        }
      >
        📞 Call {SITE.phone}
      </a>
    </div>
  );
}

function LeadFollowUpPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#15224a] via-[#1e3a8a] to-[#2563eb] px-6 py-20 text-center text-white">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#93c5fd]">Sales &amp; Lead Follow-Up Services in Sri Lanka</div>
        <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          Turn Your Advertising Leads Into <span className="text-[#60a5fa]">Real Sales Opportunities</span>
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#bfdbfe]">
          Getting a lead is only the beginning. Your business invests in Facebook Ads, Google Ads, websites, promotions, email, SMS and WhatsApp marketing to generate enquiries — but what happens after someone becomes a lead? You provide your prospect list. A dedicated calling team contacts them, understands their requirements, collects customer feedback and identifies the people who need further sales follow-up.
        </p>
        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-xs font-semibold text-[#bfdbfe]">
          {["Advertising", "Lead Generation", "First Call", "Lead Qualification", "Customer Feedback", "Sales Follow-Up"].map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              {i > 0 && <span className="text-[#60a5fa]">→</span>}
              <span className="rounded-full border border-white/25 px-3 py-1">{s}</span>
            </span>
          ))}
        </div>
        <Ctas />
        <p className="mt-4 text-xs text-[#bfdbfe]">Free guidance · No obligation · Mon–Sat 9am–7pm</p>
      </section>

      {/* What are lead follow-up services */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">What Are Sales Lead Follow-Up Services?</h2>
        <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-slate-600">
          <p>Sales lead follow-up is the process of contacting people who have already shown interest in a product, service, promotion or business.</p>
          <div>
            <p className="font-semibold text-[#15224a]">A prospect may have:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Submitted a website enquiry</li>
              <li>Responded to a Facebook advertisement</li>
              <li>Requested information through Google</li>
              <li>Registered for an event</li>
              <li>Contacted a business through WhatsApp</li>
              <li>Responded to an SMS campaign</li>
              <li>Enquired about a product</li>
              <li>Previously contacted a company</li>
              <li>Been included in an existing prospect database</li>
            </ul>
          </div>
          <p>Instead of leaving these contacts untouched, a lead follow-up team makes the initial contact and gathers useful information.</p>
          <div>
            <p className="font-semibold text-[#15224a]">The objective is to help a business understand:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Who answered?</li>
              <li>Who is interested?</li>
              <li>What does the prospect need?</li>
              <li>What questions do they have?</li>
              <li>Who needs more information?</li>
              <li>Who should the sales team contact next?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-[#f0f7ff] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">Why Lead Follow-Up Matters</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-slate-600">
            <p>Businesses can spend significant amounts on generating leads, but a lead does not automatically become a customer.</p>
            <div>
              <p className="font-semibold text-[#15224a]">A person who submits an enquiry may be:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Ready to speak to a salesperson</li>
                <li>Comparing several options</li>
                <li>Looking for more information</li>
                <li>Interested but not ready to buy</li>
                <li>Interested in a different product</li>
                <li>Planning to purchase later</li>
                <li>No longer interested</li>
                <li>Unreachable</li>
              </ul>
            </div>
            <p>Without follow-up, your sales team may not know the difference. A structured follow-up process helps turn an unorganized lead database into useful sales information.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#15224a] px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-extrabold sm:text-3xl">How Sales Lead Follow-Up Works</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="mb-2 text-4xl font-black text-[#60a5fa]">{s.n}</div>
                <h3 className="mb-1.5 text-base font-bold">{s.t}</h3>
                <p className="text-sm leading-relaxed text-[#93c5fd]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification categories */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">Lead Qualification Categories</h2>
        <p className="mt-3 text-[15px] text-slate-600">Prospects can be categorised according to the agreed qualification criteria. Typical categories include:</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {QUALIFICATION.map((q) => (
            <div key={q.t} className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-[15px] font-bold text-[#15224a]">{q.t}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{q.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer feedback */}
      <section className="bg-[#f0f7ff] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">Customer Feedback Collection</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-slate-600">
            <p>Lead follow-up is not only about identifying interested prospects. The conversations can also provide valuable information about your customers and prospects.</p>
            <div>
              <p className="font-semibold text-[#15224a]">Depending on the campaign, customer feedback can include:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Product requirements</li>
                <li>Service requirements</li>
                <li>Questions</li>
                <li>Concerns</li>
                <li>Buying timeframe</li>
                <li>Preferred follow-up time</li>
                <li>Reasons for interest</li>
                <li>Reasons for not being interested</li>
                <li>Additional information requested</li>
                <li>General feedback about the offer</li>
              </ul>
            </div>
            <p>This information can be useful to both sales and marketing teams.</p>
          </div>
        </div>
      </section>

      {/* Report table */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">What Does the Sales Team Receive?</h2>
        <p className="mt-3 text-[15px] text-slate-600">After the calling campaign, the business can receive a structured lead follow-up report. For example:</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-[#15224a] text-white">
              <tr>
                {["Prospect", "Call Status", "Interest", "Requirement", "Feedback", "Next Step"].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {REPORT_ROWS.map((row) => (
                <tr key={row[0]} className="border-t border-slate-200">
                  {row.map((cell, i) => (
                    <td key={i} className="px-4 py-3 text-slate-600">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[15px] text-slate-600">This gives the sales team more context before making the next call.</p>
      </section>

      {/* Services */}
      <section className="bg-[#f0f7ff] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">Sales &amp; Lead Conversion Services in Sri Lanka</h2>
          <p className="mb-10 mt-3 max-w-3xl text-base text-slate-500">
            Lead follow-up • lead qualification • sales calling • prospect follow-up • customer feedback • appointment setting • outbound sales.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.t} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="mb-2 text-2xl">{s.icon}</div>
                <h3 className="mb-1.5 text-[15px] font-bold text-[#15224a]">{s.t}</h3>
                <p className="text-[13px] leading-relaxed text-slate-500">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow-up vs generation + funnel */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">Lead Follow-Up vs Lead Generation</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">These are two different stages of the marketing and sales process.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-bold text-[#15224a]">Lead Generation</h3>
            <p className="mt-1 text-[13px] text-slate-500">The objective is to find and attract potential customers.</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] text-slate-600">
              <li>Google Ads</li>
              <li>Facebook Ads</li>
              <li>SEO</li>
              <li>Social Media Marketing</li>
              <li>Email Marketing</li>
              <li>SMS Marketing</li>
              <li>WhatsApp Marketing</li>
              <li>Events</li>
              <li>Promotions</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#2563eb]/30 bg-[#f0f7ff] p-5">
            <h3 className="text-base font-bold text-[#15224a]">Lead Follow-Up</h3>
            <p className="mt-1 text-[13px] text-slate-500">The objective is to contact and understand the people who have already become prospects or leads.</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] text-slate-600">
              <li>Outbound calling</li>
              <li>Lead qualification</li>
              <li>Prospect follow-up</li>
              <li>Customer feedback</li>
              <li>Appointment setting</li>
              <li>Sales handover</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-sm rounded-xl border border-slate-200 bg-white p-5 text-center">
          <h3 className="mb-3 text-base font-bold text-[#15224a]">The Complete Funnel</h3>
          {["Advertising", "Lead Generation", "Lead Follow-Up", "Prospect Qualification", "Customer Feedback", "Sales Follow-Up", "Conversion"].map((s, i, arr) => (
            <div key={s}>
              <div className="rounded-md bg-[#f0f7ff] px-3 py-2 text-sm font-semibold text-[#15224a]">{s}</div>
              {i < arr.length - 1 && <div className="my-1 text-[#2563eb]">↓</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Why outsource */}
      <section className="bg-[#f0f7ff] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">Why Businesses Outsource Lead Follow-Up</h2>
          <div className="mt-6 space-y-6 text-[15px] leading-relaxed text-slate-600">
            <div>
              <h3 className="font-bold text-[#15224a]">Your sales team cannot call every lead</h3>
              <p className="mt-1">When campaigns generate a large number of enquiries, your internal sales team may not have enough time to contact everyone. An outsourced follow-up team can handle the initial calling process.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#15224a]">Reduce untouched leads</h3>
              <p className="mt-1">A lead sitting in a spreadsheet is not a sales conversation. Follow-up gives your prospects an opportunity to respond.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#15224a]">Give your sales team better information</h3>
              <p className="mt-1">Instead of asking your salespeople to call an unclassified database, provide them with information about the prospect's interest and requirement.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#15224a]">Understand your prospects</h3>
              <p className="mt-1">Customer conversations can reveal information that may not be visible in your advertising analytics.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#15224a]">Support your marketing investment</h3>
              <p className="mt-1">If you spend money generating leads, follow-up is an important part of what happens after the lead is generated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call center vs lead follow-up */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">Call Center Outsourcing vs Lead Follow-Up</h2>
        <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-slate-600">
          <p>The term call center outsourcing covers a broad range of services.</p>
          <div>
            <p className="font-semibold text-[#15224a]">It can include:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Customer service</li>
              <li>Inbound call handling</li>
              <li>Outbound calling</li>
              <li>Technical support</li>
              <li>Complaint handling</li>
              <li>Appointment management</li>
              <li>Sales calling</li>
              <li>Lead follow-up</li>
            </ul>
          </div>
          <p>Lead follow-up is a more specific sales-focused application of outbound calling. For businesses whose main requirement is to contact existing prospects, understand their requirements and provide information to the sales team, a specialized lead follow-up service may be more relevant than a traditional general-purpose call center. For a broader overview of inbound and outbound contact centre services, see this guide on{" "}
            <a
              href="https://cypherdigital.lk/lead-follow-up-services-sri-lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline-offset-4 hover:underline"
            >
              lead follow-up services Sri Lanka
            </a>
            .</p>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#f0f7ff] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">Industries That Use Lead Follow-Up</h2>
          <p className="mb-10 mt-3 text-base text-slate-500">Lead follow-up can be used across many industries.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map(([t, d]) => (
              <div key={t} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="mb-1.5 text-[15px] font-bold text-[#15224a]">{t}</h3>
                <p className="text-[13px] leading-relaxed text-slate-500">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multilingual + 360 campaign */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">Multilingual Lead Follow-Up in Sri Lanka</h2>
        <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-slate-600">
          <p>Sri Lanka has a multilingual customer market. Depending on your target audience, lead follow-up campaigns can be structured for <strong className="text-[#15224a]">Sinhala, Tamil and English</strong> — selected based on the target market and campaign requirements.</p>
        </div>
        <h2 className="mt-12 text-2xl font-extrabold text-[#15224a] sm:text-3xl">Lead Follow-Up as Part of a 360° Marketing Campaign</h2>
        <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-slate-600">
          <p>Advertising does not have to stop when someone clicks an advertisement or submits an enquiry. A more complete customer journey can connect multiple channels.</p>
          <div className="mx-auto max-w-xs rounded-xl border border-slate-200 bg-white p-4 text-center">
            {["Facebook Advertising", "Landing Page", "Lead Generated", "Lead Follow-Up Call", "Customer Requirement", "Prospect Qualification", "Sales Team", "Customer"].map((s, i, arr) => (
              <div key={s}>
                <div className="rounded-md bg-[#f0f7ff] px-3 py-1.5 text-[13px] font-semibold text-[#15224a]">{s}</div>
                {i < arr.length - 1 && <div className="my-0.5 text-[#2563eb]">↓</div>}
              </div>
            ))}
          </div>
          <p>
            AdvertisingSriLanka.lk already covers multiple advertising channels including{" "}
            <Link to="/digital-marketing-sri-lanka" className="font-semibold text-[#2563eb] underline hover:text-[#15224a]">digital marketing</Link>,{" "}
            <Link to="/seo-services-sri-lanka" className="font-semibold text-[#2563eb] underline hover:text-[#15224a]">SEO</Link>,{" "}
            <Link to="/social-media-marketing-sri-lanka" className="font-semibold text-[#2563eb] underline hover:text-[#15224a]">social media</Link>, email/SMS/WhatsApp, BTL, ATL and integrated marketing. Lead follow-up is the sales-support stage that connects{" "}
            <Link to="/lead-generation-sri-lanka" className="font-semibold text-[#2563eb] underline hover:text-[#15224a]">lead generation</Link>{" "}
            with the next customer conversation.
          </p>
        </div>
      </section>

      {/* Info to collect */}
      <section className="bg-[#f0f7ff] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">What Information Should You Collect During Lead Follow-Up?</h2>
          <p className="mt-3 text-[15px] text-slate-600">The exact questions should depend on your product, industry and campaign objective. However, a typical lead qualification campaign may collect:</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["Contact Information", "Name and contact details."],
              ["Lead Source", "Where the enquiry originated."],
              ["Product Interest", "Which product or service the prospect is interested in."],
              ["Requirement", "What the prospect actually needs."],
              ["Interest Level", "Interested, potential, information required, follow up later, not interested, etc."],
              ["Customer Feedback", "Questions, concerns or comments."],
              ["Next Action", "Salesperson to call, send quotation, send information, schedule appointment, follow up later or no further action."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-[15px] font-bold text-[#15224a]">{t}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">How Much Does Lead Follow-Up Cost?</h2>
        <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-slate-600">
          <p>Lead follow-up pricing can vary depending on:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Number of prospects</li>
            <li>Number of calls required</li>
            <li>Campaign duration</li>
            <li>Number of follow-up attempts</li>
            <li>Qualification questions</li>
            <li>Reporting requirements</li>
            <li>Language requirements</li>
            <li>Industry</li>
            <li>Campaign complexity</li>
          </ul>
          <p>Some businesses may require a one-time campaign, while others may need ongoing monthly lead follow-up. Request a quote based on your campaign requirements.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2563eb] px-6 py-16 text-center text-white">
        <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">Don't Let Your Leads Stop at the Enquiry</h2>
        <p className="mx-auto max-w-3xl text-base text-[#bfdbfe]">
          Your advertising campaign may generate the lead. But the next conversation can determine what happens after that. Contact. Understand. Qualify. Follow Up. Give your sales team better information about the people already interested in your business.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-base font-semibold text-white">
          Tell us about your business, your lead volume and your campaign requirements — we'll help you understand what type of sales follow-up service may be suitable.
        </p>
        <Ctas dark />
        <p className="mt-4 text-xs text-[#bfdbfe]">Free guidance · No obligation · Mon–Sat 9am–7pm</p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-extrabold text-[#15224a] sm:text-3xl">Frequently Asked Questions</h2>
        {FAQS.map((f) => (
          <div key={f.q} className="border-b border-slate-200 py-5">
            <h3 className="mb-2 text-base font-bold text-[#15224a]">{f.q}</h3>
            <p className="text-[15px] leading-relaxed text-slate-600">{f.a}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
