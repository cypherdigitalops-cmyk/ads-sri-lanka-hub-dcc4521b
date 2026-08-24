import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SITE } from "@/data/site";

const TITLE = "AI Video Production Sri Lanka — Reels, Ads & Brand Films Fast";
const DESC =
  "AI-assisted video production in Sri Lanka — social reels, ad creatives and brand films produced faster and cheaper than traditional shoots. Get a free quote — call 0707310410 or WhatsApp.";

const SERVICES = [
  { icon: "📱", t: "Social Media Reels", d: "Short vertical videos (15–60s) for Facebook Reels, Instagram and TikTok — captioned, music-backed and scroll-stopping. Ideal for retail, food and beverage, fashion and salons that need a constant content flow." },
  { icon: "🎬", t: "Brand & Promotional Videos", d: "60–90 second brand films combining AI-generated visuals, professional voiceover and motion graphics for your website, ads and social channels. Best for launches, rebrands and market entries." },
  { icon: "🎯", t: "Facebook & Google Video Ads", d: "Conversion-focused ad creatives built around a strong three-second hook, correct aspect ratios and platform-specific delivery for Facebook Ads, Google Display and YouTube pre-roll." },
  { icon: "📦", t: "Product Showcase Videos", d: "Clean, dynamic demonstrations of your product in action with voiceover and branded graphics — proven to lift purchase intent for e-commerce, manufacturers and product brands." },
  { icon: "⭐", t: "Customer Testimonial Videos", d: "Polished testimonial edits with captions, music and branded lower-thirds. Video testimonials consistently outperform written reviews for service businesses, healthcare, education and real estate." },
  { icon: "🧑‍💼", t: "AI Avatar & Presenter Videos", d: "Professional on-screen presenter videos created with AI avatar technology — no camera, studio or hired talent. Available in Sinhala, Tamil or English with realistic lip-sync." },
  { icon: "📺", t: "AI-Enhanced TV Commercials", d: "Full TVC production for Sri Lankan television, using AI to accelerate post-production — concept, scriptwriting, colour grading and broadcast-ready delivery." },
];

const STEPS = [
  { n: "01", t: "Brief & Strategy", d: "A short call or WhatsApp exchange to define goal, audience, format, length and platform." },
  { n: "02", t: "AI-Assisted Script", d: "A tailored script produced in minutes, which you review and approve before anything is produced." },
  { n: "03", t: "Visuals & Voiceover", d: "AI tools generate imagery, motion graphics and narration; any AI avatars are built and rendered." },
  { n: "04", t: "Human Editing", d: "In-house editors review every cut, colour grade, tighten transitions and add captions." },
  { n: "05", t: "Delivery & Formats", d: "Exported in 9:16, 1:1 and 16:9 — typically within a few days of brief approval." },
];

const FAQS = [
  { q: "What is AI video production?", a: "AI video production uses artificial-intelligence tools to handle or speed up parts of the video-making process — scriptwriting, voiceover, subtitles, motion graphics, background visuals and even AI on-screen presenters. In a professional workflow, AI output is then refined by human editors for quality and brand consistency, delivering results faster and more affordably than a traditional shoot." },
  { q: "How much does AI video production cost in Sri Lanka?", a: "Cost depends on the number of videos, their length and format complexity, language requirements, and any custom elements like AI avatars or on-site filming. Short social reels are the most affordable option, brand videos sit higher, and multi-video or enterprise packages are custom-quoted. Call 0707310410 for a free, project-specific estimate." },
  { q: "How long does AI video production take?", a: "Most AI-assisted videos are delivered within a few days of script approval — far faster than the two to four weeks a traditional production typically requires. Simple reels can turn around in 24–48 hours, while more complex brand films or multi-video packages take a little longer." },
  { q: "Can you produce videos in Sinhala and Tamil?", a: "Yes. AI voiceover and captioning make it straightforward to produce the same video in Sinhala, Tamil and English — one of the biggest advantages of AI video for the Sri Lankan market, since additional languages usually mean swapping the voiceover rather than re-shooting." },
  { q: "Is AI video lower quality than traditional video?", a: "Not when it's done properly. AI accelerates production, but the quality comes from human oversight — editors who apply colour grading, refine pacing and ensure the video is genuinely on-brand. The result is professional content at a fraction of traditional cost and time." },
  { q: "What is an AI avatar video?", a: "An AI avatar video features a realistic, computer-generated on-screen presenter that speaks your script with natural lip-sync — no camera, studio or hired talent required. It's ideal for education, healthcare, finance and e-learning, and for any business that needs professional presenter-style content, including multilingual versions." },
  { q: "Can AI videos be used as Facebook and Google ads?", a: "Yes. Video ad creatives can be produced in the correct aspect ratios, lengths and formats for Facebook Ads, Google Display, YouTube pre-roll and TikTok, and structured around a strong opening hook to maximise performance in paid campaigns." },
  { q: "How do I get started?", a: "The quickest way is to WhatsApp or call 0707310410. Tell us what kind of video you need and the platform it's for, and we'll recommend the right format and send you a transparent, fixed-price quote." },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI Video Production Sri Lanka",
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

export const Route = createFileRoute("/ai-video-production-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "ai video production sri lanka, ai video sri lanka, ai video ads sri lanka, ai reels sri lanka, ai avatar video sri lanka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/ai-video-production-sri-lanka` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSONLD) }],
  }),
  component: AiVideoPage,
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

function AiVideoPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-[#15224a] via-[#1e3a8a] to-[#2563eb] px-6 py-20 text-center text-white">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#93c5fd]">AI Video Production in Sri Lanka</div>
        <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          AI Video Production in Sri Lanka — <span className="text-[#60a5fa]">Faster, Smarter, More Affordable Video</span>
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#bfdbfe]">
          Produce professional video content in days, not weeks. Using the latest AI tools for scripting, voiceover, visuals and editing — combined with a real creative team — we help Sri Lankan brands create social reels, ad creatives, product videos and brand films at a fraction of traditional cost.
        </p>
        <Ctas />
        <p className="mt-4 text-xs text-[#bfdbfe]">Free quote in 5 minutes · No obligation · Mon–Sat 9am–7pm</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">What Is AI Video Production, and Why Does It Matter for Sri Lankan Businesses?</h2>
        <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-slate-600">
          <p>AI video production is a modern approach to creating video content in which artificial-intelligence tools handle or accelerate parts of the pipeline that traditionally required large crews, expensive equipment and long timelines. Scriptwriting, voiceover generation, subtitle creation, motion graphics, background visuals and even on-screen AI presenters can now be produced with software — then refined by human editors for polish and brand consistency. For businesses across Sri Lanka, this shift is significant: it brings broadcast-quality video within reach of the small and medium enterprises that make up the backbone of the local economy.</p>
          <p>For years, professional video in Sri Lanka carried a high barrier to entry. A single corporate film or television commercial could demand a multi-day shoot, a crew of a dozen or more, hired talent, location fees and weeks of post-production. That cost structure priced out most retailers, restaurants, clinics and startups — the very businesses that stood to gain the most from video on Facebook, Instagram, TikTok and YouTube. AI video production changes the economics. By automating repetitive and technically intensive steps, it compresses timelines from weeks into days and lowers costs dramatically, without forcing brands to compromise on the quality their audiences expect.</p>
          <p>The demand could not be clearer. Video is the highest-performing content format on every major platform Sri Lankan consumers use, and short-form vertical video in particular now dominates discovery on Facebook Reels, Instagram, TikTok and YouTube Shorts. Businesses that publish consistent, professional video content enjoy higher reach, stronger engagement and better ad performance than those relying on static images alone. AI video production makes that consistency achievable — allowing a brand to produce not one video a quarter, but a steady stream of reels, ads and explainers that keep it visible week after week.</p>
        </div>
      </section>

      <section className="bg-[#f0f7ff] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">AI Video Production Services in Sri Lanka</h2>
          <p className="mb-10 mt-3 max-w-3xl text-base text-slate-500">
            The label "AI video" covers a wide spectrum of formats, each suited to a different marketing objective. Understanding the options helps you brief a production partner accurately and choose the right format for your goal.
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

      <section className="bg-[#15224a] px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-center text-2xl font-extrabold sm:text-3xl">How AI Video Production Works — From Brief to Delivery</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-[#93c5fd]">
            A good AI video pipeline is not "press a button and receive a film." It pairs the speed of AI with human creative judgment at every checkpoint, so the final product feels intentional and on-brand rather than generic.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="mb-2 text-4xl font-black text-[#60a5fa]">{s.n}</div>
                <h3 className="mb-1.5 text-base font-bold">{s.t}</h3>
                <p className="text-sm leading-relaxed text-[#93c5fd]">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[#bfdbfe]">
            This blend matters. Left entirely to automation, AI video can look flat, off-brand or subtly "wrong." The human review stage is what ensures pacing, tone, brand colours and messaging all land correctly — giving you the speed and cost savings of AI without the tell-tale signs of a purely machine-made clip.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">What Affects the Cost of AI Video Production in Sri Lanka?</h2>
        <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-slate-600">
          <p>AI video is far more affordable than traditional production, but "AI" is not a single fixed price — the investment still depends on the scope of the work. Understanding the main cost drivers helps you budget realistically and brief for the outcome you want.</p>
          <p>The length and number of videos is the first factor: a single 30-second reel costs far less than a package of several videos or a full brand film. Format complexity matters too — a simple captioned reel is quicker to produce than an AI avatar presenter video, a multilingual explainer or a broadcast TVC that requires colour grading and licensing. Voiceover and language requirements add scope, particularly when a video must be delivered in Sinhala, Tamil and English. Revisions and custom elements — bespoke motion graphics, specific brand animations, licensed music, or on-site filming to supplement AI-generated footage — also influence the final figure.</p>
          <p>As a rough guide for the Sri Lankan market, short-form social content typically starts in the tens of thousands of rupees, brand and promotional videos sit meaningfully higher, and multi-video campaigns or enterprise packages with AI avatars and on-site filming are custom-quoted. Because pricing is genuinely project-specific, the fastest way to a real number is a short conversation about your goals. Contact us for a free, no-obligation quote tailored to exactly what your business needs.</p>
        </div>
      </section>

      <section className="bg-[#f0f7ff] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">AI Video vs Traditional Video Production — Which Should You Choose?</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-slate-600">
            <p>AI video production is not simply a cheaper substitute for traditional production; the two suit different jobs, and many strong campaigns combine both. The right choice depends on your timeline, budget and message.</p>
            <p>AI video excels where speed, volume and cost-efficiency matter most — a steady stream of social reels, rapid ad-creative testing, multilingual explainers, product showcases and presenter-style content that would be expensive to film conventionally. Turnaround is measured in days rather than weeks, scripting and revisions are usually built in, and content can be produced in Sinhala, Tamil and English by changing the voiceover rather than re-shooting.</p>
            <p>
              Traditional production still wins where genuine human emotion, real-world texture or physical performance is central — flagship brand films, celebrity and influencer campaigns, and hero TVCs where a real crew, real talent and a real location carry the story. For most Sri Lankan SMEs, the smartest strategy is a blend: AI video for the high-volume, always-on content that keeps a brand visible, alongside selective{" "}
              <Link to="/video-production-sri-lanka" className="font-semibold text-[#2563eb] underline hover:text-[#15224a]">
                video production in Sri Lanka
              </Link>{" "}
              for the occasional flagship piece.
            </p>
            <p>
              If you want a specialist team that produces the AI side end-to-end, see{" "}
              <a
                href="https://cypherdigital.lk/ai-video-production-sri-lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#2563eb] underline hover:text-[#15224a]"
              >
                AI Video Production Sri Lanka
              </a>{" "}
              — a dedicated AI-first studio delivering reels, ad creatives and brand films with fast turnaround and fixed rupee pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-extrabold text-[#15224a] sm:text-3xl">Why Choose an Experienced AI Video Partner in Sri Lanka?</h2>
        <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-slate-600">
          <p>The tools behind AI video are widely available, but tools alone don't produce results — strategy and craft do. When selecting a partner, look for a team that treats every video as a means to a business objective (awareness, leads or conversions) rather than a technical demo, and that reviews every AI-generated cut by hand before it reaches you. Local market understanding is equally important: content that performs in Colombo may need a different tone, language or format for Kandy, Galle or Jaffna, and a partner who knows those nuances will produce work that actually converts.</p>
          <p>Transparency rounds out the checklist. Choose a partner who offers clear, fixed pricing in rupees, includes scripting and a defined number of revisions, and keeps you informed from brief to delivery. That combination — strategy-first thinking, human quality control, local insight and honest pricing — is what turns fast, affordable AI video into a genuine marketing asset rather than disposable filler.</p>
        </div>
      </section>

      <section className="bg-[#2563eb] px-6 py-16 text-center text-white">
        <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">Ready to Produce Your First AI Video?</h2>
        <p className="mx-auto max-w-3xl text-base text-[#bfdbfe]">
          Whether you need a single scroll-stopping reel, a batch of ad creatives to test, or a full brand film, AI video production makes professional content faster and more affordable than ever for Sri Lankan businesses. Tell us your goal and budget and we'll recommend the right format and give you a transparent quote — no obligation.
        </p>
        <Ctas dark />
        <p className="mt-4 text-xs text-[#bfdbfe]">Free consultation · No obligation · Mon–Sat 9am–7pm</p>
      </section>

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
