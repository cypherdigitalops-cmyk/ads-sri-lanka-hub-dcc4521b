import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SITE } from "@/data/site";

const TITLE = "Marketing for the Construction & Trades Industry in Sri Lanka";
const DESC =
  "A plain-English guide to marketing for construction and skilled-trade businesses in Sri Lanka — get listed, get found on Google, and reach customers who are ready to buy.";

const TRADES = [
  { href: "https://hub.findit.lk/pros/plumbers", label: "Plumbers in Sri Lanka" },
  { href: "https://hub.findit.lk/pros/electricians", label: "Electricians in Sri Lanka" },
  { href: "https://hub.findit.lk/pros/ac-repair", label: "AC repair & servicing" },
  { href: "https://hub.findit.lk/pros/carpenters", label: "Carpenters" },
  { href: "https://hub.findit.lk/pros/painters", label: "Painters" },
  { href: "https://hub.findit.lk/pros/masonry", label: "Masonry work" },
  { href: "https://hub.findit.lk/pros/pest-control", label: "Pest control" },
  { href: "https://hub.findit.lk/pros/cctv", label: "CCTV & security installers" },
  { href: "https://hub.findit.lk/pros/appliance-repair", label: "Appliance repair" },
  { href: "https://hub.findit.lk/pros/movers", label: "Movers & lorry hire" },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marketing for the Construction & Trades Industry in Sri Lanka: How to Win More Work",
  description: DESC,
  author: { "@type": "Organization", name: "Advertising Sri Lanka", url: SITE.url },
  publisher: { "@type": "Organization", name: "Advertising Sri Lanka", url: SITE.url },
  mainEntityOfPage: `${SITE.url}/blog/construction-trades-marketing-sri-lanka`,
};

export const Route = createFileRoute("/blog/construction-trades-marketing-sri-lanka")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "construction marketing sri lanka, trades marketing sri lanka, marketing for plumbers sri lanka, electrician marketing sri lanka, home services marketing sri lanka",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/blog/construction-trades-marketing-sri-lanka` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSONLD) }],
  }),
  component: ConstructionTradesPage,
});

const ext = "font-semibold text-[#2563eb] underline underline-offset-2 hover:text-[#15224a]";

function ConstructionTradesPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-[#15224a] via-[#1e3a8a] to-[#2563eb] px-6 py-16 text-center text-white">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#93c5fd]">
          Construction & Trades Marketing
        </div>
        <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          Marketing for the Construction &amp; Trades Industry in Sri Lanka:{" "}
          <span className="text-[#60a5fa]">How to Win More Work</span>
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#bfdbfe]">
          Get listed, get found on Google, and reach customers at the exact moment they need a
          tradesperson.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener"
            className="rounded-md bg-[#25d366] px-7 py-3.5 text-sm font-bold text-white hover:opacity-90"
          >
            💬 WhatsApp Us
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="rounded-md border-2 border-white/50 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10"
          >
            📞 Call {SITE.phone}
          </a>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-5 text-[15px] leading-relaxed text-slate-600">
          <p>
            For years, Sri Lanka's construction and home-services trades ran almost entirely on word
            of mouth. A good plumber or electrician got recommended by one satisfied customer to the
            next, and that was enough to stay busy. It isn't anymore.
          </p>
          <p>
            Today, when a homeowner in Colombo, Kandy or Negombo needs a tradesperson, the first
            thing they do is pick up their phone and search. If your business doesn't show up where
            they're looking, the job goes to whoever does — even if you're the better craftsman.
            This guide explains, in plain terms, how construction and trade businesses in Sri Lanka
            can market themselves and get a steady flow of enquiries.
          </p>

          <h2 className="pt-6 text-2xl font-extrabold text-[#15224a]">
            Understand how customers find tradespeople now
          </h2>
          <p>The path a customer takes has changed. Instead of asking a neighbour, most people now:</p>
          <ol className="ml-5 list-decimal space-y-2">
            <li>Search on Google ("electrician near me," "AC repair Colombo")</li>
            <li>Look for someone with reviews and a real phone number</li>
            <li>Call or WhatsApp two or three options and go with whoever responds first</li>
          </ol>
          <p>
            That means your marketing has one core job:{" "}
            <strong className="text-[#15224a]">
              be visible and easy to contact at the exact moment someone needs you.
            </strong>{" "}
            Everything below serves that goal.
          </p>

          <h2 className="pt-6 text-2xl font-extrabold text-[#15224a]">
            Get listed where customers are already searching
          </h2>
          <p>
            The fastest, lowest-cost win for any trade business is getting listed on a verified
            local directory. When someone searches for a service in their town, these directory
            pages often rank on Google — so being listed puts you in front of high-intent customers
            without paying for ads.
          </p>
          <p>
            A good example is{" "}
            <a href="https://hub.findit.lk/pros" target="_blank" rel="noopener" className={ext}>
              Findit Pros
            </a>
            , a Sri Lankan home-services directory organised by trade and by town. Whatever your
            line of work, there's a category page where customers in your district are already
            looking:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            {TRADES.map((t) => (
              <li key={t.href}>
                <a href={t.href} target="_blank" rel="noopener" className={ext}>
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
          <p>
            Because listings are broken down to the town level, a customer searching for a plumber
            in Negombo or an electrician in Kandy is matched to pros in that exact area — no wasted
            enquiries. For most tradespeople, a verified profile with a real photo, NIC verification
            and a clear list of services is enough to start receiving calls. You can{" "}
            <a href="https://hub.findit.lk/pros/join" target="_blank" rel="noopener" className={ext}>
              list your own trade here
            </a>
            .
          </p>

          <h2 className="pt-6 text-2xl font-extrabold text-[#15224a]">
            Advertise on high-traffic trade pages
          </h2>
          <p>
            Getting listed is just one way to use a directory. Because category pages like the{" "}
            <a href="https://hub.findit.lk/pros/plumbers" target="_blank" rel="noopener" className={ext}>
              plumbers
            </a>{" "}
            or{" "}
            <a href="https://hub.findit.lk/pros/electricians" target="_blank" rel="noopener" className={ext}>
              electricians
            </a>{" "}
            listings attract a steady stream of people who are actively looking for that exact
            service, they're also a smart place to run{" "}
            <strong className="text-[#15224a]">banner and display advertising</strong> — a channel
            that's often overlooked in Sri Lanka.
          </p>
          <p>
            Think about who's reading those pages. Someone browsing the plumbers list is likely
            mid-renovation or dealing with a repair — the perfect audience for a hardware store, a
            bathroom-fittings supplier, or a water-pump brand. The painters page is ideal for a
            paint manufacturer; the CCTV page for a security-equipment seller. Unlike broad Facebook
            or Google Display ads, a banner on a trade directory page reaches people at the precise
            moment they're spending money on that category.
          </p>
          <p>This kind of placement works well for:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong className="text-[#15224a]">Suppliers and manufacturers</strong> who sell to
              both tradespeople and homeowners (tools, materials, fittings, paint, wiring, hardware)
            </li>
            <li>
              <strong className="text-[#15224a]">Larger trade companies</strong> wanting
              top-of-page visibility above individual listings
            </li>
            <li>
              <strong className="text-[#15224a]">Related local services</strong> targeting the same
              renovation-minded audience
            </li>
          </ul>
          <p>
            If you'd like to place a banner on these pages, you can{" "}
            <a href="https://www.findit.lk/agency" target="_blank" rel="noopener" className={ext}>
              advertise directly with Findit
            </a>
            . It's a low-cost, highly targeted alternative — or complement — to running mass-market{" "}
            <Link to="/digital-advertising-sri-lanka" className={ext}>
              digital advertising in Sri Lanka
            </Link>
            .
          </p>

          <h2 className="pt-6 text-2xl font-extrabold text-[#15224a]">
            Claim your Google Business Profile
          </h2>
          <p>
            Alongside directory listings, a free Google Business Profile is essential. It's what
            makes your business appear on Google Maps and in the local "3-pack" that shows up for
            searches like "carpenter near me." Add your service area, working hours, a phone number,
            and a few photos of completed jobs. Ask happy customers to leave a review — even five or
            six genuine reviews can push you above competitors who have none.
          </p>

          <h2 className="pt-6 text-2xl font-extrabold text-[#15224a]">Let your work do the selling</h2>
          <p>
            Trades are visual, and that's a huge advantage. A clean tiling job, a neat electrical
            panel, a freshly painted house — these sell far better than any slogan. Take
            before-and-after photos of every job and post them regularly on a Facebook Business Page
            and WhatsApp status. Over time this builds a portfolio that reassures new customers you
            can be trusted in their home.
          </p>

          <h2 className="pt-6 text-2xl font-extrabold text-[#15224a]">
            Use paid ads when you're ready to scale
          </h2>
          <p>Once your free foundations are in place, paid advertising can accelerate things:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong className="text-[#15224a]">Google Search Ads</strong> put you at the top when
              someone searches for your service — the highest-intent leads you can buy.
            </li>
            <li>
              <strong className="text-[#15224a]">Facebook &amp; Instagram Ads</strong> let you
              target homeowners by area and interest, which works well for higher-value work like
              full rewiring, renovations or waterproofing.
            </li>
          </ul>
          <p>
            You don't need a big budget. Even Rs 20,000–30,000 a month, spent on the right channel
            with proper targeting, can generate a reliable stream of enquiries for a small trade
            business.
          </p>

          <h2 className="pt-6 text-2xl font-extrabold text-[#15224a]">
            Make it effortless to contact you
          </h2>
          <p>
            Sri Lankan customers overwhelmingly prefer WhatsApp. Set up WhatsApp Business, add a
            catalogue of your services, and reply fast — the tradesperson who answers within minutes
            usually wins the job. Put a click-to-WhatsApp link everywhere: your directory profile,
            your Facebook page, your Google listing.
          </p>

          <h2 className="pt-6 text-2xl font-extrabold text-[#15224a]">The bottom line</h2>
          <p>
            Marketing for a construction or trades business in Sri Lanka isn't complicated, and it
            doesn't have to be expensive. Get listed on a{" "}
            <a href="https://hub.findit.lk/pros" target="_blank" rel="noopener" className={ext}>
              trusted local directory
            </a>
            , claim your Google Business Profile, show off your work, and make yourself easy to
            reach on WhatsApp. And if you're a supplier or larger firm, don't overlook{" "}
            <a href="https://www.findit.lk/agency" target="_blank" rel="noopener" className={ext}>
              banner advertising on trade category pages
            </a>{" "}
            — one of the most targeted, underused channels available. Do these things consistently
            and you'll spend far less time chasing work — and far more time doing it.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-[#2563eb]/20 bg-[#f0f7ff] p-6">
          <p className="text-[15px] leading-relaxed text-slate-600">
            Not sure which marketing channels fit your trade and budget? That's exactly what we help
            Sri Lankan businesses figure out — get in touch for free guidance.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-md bg-[#25d366] px-6 py-3 text-sm font-bold text-white hover:opacity-90"
            >
              💬 WhatsApp Us
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="rounded-md bg-[#15224a] px-6 py-3 text-sm font-bold text-white hover:opacity-90"
            >
              📞 Call {SITE.phone}
            </a>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
