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
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ClickTracker } from "@/components/site/ClickTracker";

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
      { title: "Advertising Sri Lanka | Sri Lanka Advertising Insight Hub" },
      { name: "description", content: "Advertising information hub for advertising in Sri Lanka with ATL, BTL, digital marketing, SEO, branding, outdoor advertising and media insights." },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "bingbot", content: "index, follow" },
      { name: "msvalidate.01", content: "REPLACE_WITH_BING_VERIFICATION_CODE" },
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
      { property: "og:title", content: "Advertising Sri Lanka | Sri Lanka Advertising Insight Hub" },
      { property: "og:description", content: "Advertising information hub for advertising in Sri Lanka with ATL, BTL, digital marketing, SEO, branding, outdoor advertising and media insights." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Advertising Sri Lanka | Sri Lanka Advertising Insight Hub" },
      { name: "twitter:description", content: "Advertising information hub for advertising in Sri Lanka with ATL, BTL, digital marketing, SEO, branding, outdoor advertising and media insights." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bbd9938c-b026-4c41-bba4-c4870c09d62e/id-preview-52c6737f--8df064ce-8f53-4ab1-9287-19dfd35da584.lovable.app-1778356070854.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bbd9938c-b026-4c41-bba4-c4870c09d62e/id-preview-52c6737f--8df064ce-8f53-4ab1-9287-19dfd35da584.lovable.app-1778356070854.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: SITE.url },
      { rel: "alternate", hrefLang: "en-LK", href: SITE.url },
      { rel: "alternate", hrefLang: "x-default", href: SITE.url },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "shortcut icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TKDQ7RSP8L" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-TKDQ7RSP8L');`,
          }}
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

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      queryClient.invalidateQueries();
    });
    return () => subscription.unsubscribe();
  }, [queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster richColors position="top-right" />
      <ClickTracker />
    </QueryClientProvider>
  );
}
