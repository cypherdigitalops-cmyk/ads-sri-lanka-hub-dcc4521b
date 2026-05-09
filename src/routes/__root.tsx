import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SITE } from "@/data/site";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: "advertisingsrilanka.lk",
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/og-home.jpg`,
      },
      image: `${SITE.url}/og-home.jpg`,
      telephone: SITE.phoneIntl,
      email: SITE.email,
      priceRange: "$$",
      description:
        "Sri Lanka's #1 advertising hub — ATL, BTL, digital, SEO, social media, outdoor, branding, web and video production for businesses across Sri Lanka.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Colombo",
        addressLocality: "Colombo",
        addressRegion: "Western Province",
        postalCode: "00100",
        addressCountry: "LK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.9271,
        longitude: 79.8612,
      },
      areaServed: [
        { "@type": "Country", name: "Sri Lanka" },
        { "@type": "City", name: "Colombo" },
        { "@type": "City", name: "Kandy" },
        { "@type": "City", name: "Galle" },
        { "@type": "City", name: "Jaffna" },
        { "@type": "City", name: "Negombo" },
        { "@type": "City", name: "Kurunegala" },
        { "@type": "City", name: "Anuradhapura" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: SITE.phoneIntl,
          contactType: "customer service",
          areaServed: "LK",
          availableLanguage: ["en", "si", "ta"],
        },
        {
          "@type": "ContactPoint",
          telephone: SITE.phoneIntl,
          contactType: "sales",
          areaServed: "LK",
          availableLanguage: ["en", "si", "ta"],
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [SITE.whatsapp],
      knowsAbout: [
        "Advertising in Sri Lanka",
        "ATL Advertising",
        "BTL Advertising",
        "Digital Marketing",
        "SEO",
        "Social Media Marketing",
        "Outdoor Advertising",
        "Branding",
        "Event Management",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "en-LK",
      publisher: { "@id": `${SITE.url}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE.url}/services?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Advertising Sri Lanka — Information Hub for Advertising Solutions" },
      { name: "description", content: "Information hub for advertising in Sri Lanka. Compare TV, radio, press, billboards, Google Ads, SEO, social media, branding, web & video. Call 0771437707." },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "bingbot", content: "index, follow" },
      { name: "theme-color", content: "#15224a" },
      { name: "geo.region", content: "LK" },
      { name: "geo.country", content: "Sri Lanka" },
      { name: "geo.placename", content: "Colombo" },
      { name: "geo.position", content: "6.9271;79.8612" },
      { name: "ICBM", content: "6.9271, 79.8612" },
      { name: "language", content: "English" },
      { httpEquiv: "content-language", content: "en-LK" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_LK" },
      { property: "og:title", content: "Advertising Sri Lanka — Information Hub" },
      { property: "og:description", content: "Find every advertising solution in Sri Lanka in one place. Call 0771437707 for free guidance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Advertising Sri Lanka — Information Hub" },
      { name: "twitter:description", content: "Find every advertising solution in Sri Lanka. Call 0771437707." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: SITE.url },
      { rel: "alternate", hrefLang: "en-LK", href: SITE.url },
      { rel: "alternate", hrefLang: "x-default", href: SITE.url },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-LK">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
