import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig, getServiceAreaNames } from "@/config/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// ============================================
// 2025 SEO METADATA CONFIGURATION
// ============================================
export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: `${siteConfig.name} | Professional Pressure Washing in Seminole, FL`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.founder.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  // Canonical URL & Alternates
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },

  // Open Graph (Facebook, LinkedIn, Discord)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | #1 Pressure Washing in Seminole & Pinellas County, FL`,
    description: `Professional pressure washing services in Pinellas County. ⭐ ${siteConfig.rating.count}+ 5-star reviews. Driveway cleaning, house washing, roof cleaning & more. Free estimates!`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Professional Pressure Washing Services in Seminole, FL`,
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: `${siteConfig.name} Logo`,
        type: "image/jpeg",
      },
    ],
    countryName: "United States",
  },

  // Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | #1 Rated Pressure Washing`,
    description: `Professional pressure washing in Seminole, FL. ${siteConfig.rating.count}+ 5-star reviews. Free estimates! Call ${siteConfig.phone}`,
    images: ["/og-image.jpg"],
    creator: "@stargatepw",
    site: "@stargatepw",
  },

  // Robots Directives (2025 Best Practices)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Site Verification (Add your codes when ready)
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // App Links & Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",

  // Additional Meta
  category: "Home Services",
  classification: "Pressure Washing Services",
  referrer: "origin-when-cross-origin",
  
  // Disable auto-detection (better UX)
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // App Links
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },

  // Other SEO
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Seminole, Florida",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    "ICBM": `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    "revisit-after": "7 days",
    "rating": "General",
    "distribution": "Global",
    "coverage": "Pinellas County, FL",
  },
};

// Viewport Configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7c3aed" },
    { media: "(prefers-color-scheme: dark)", color: "#030308" },
  ],
  colorScheme: "dark",
};

// ============================================
// JSON-LD STRUCTURED DATA (2025 Schema.org)
// ============================================

// Organization Schema (for brand entity)
function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.url}/og-image.jpg`,
    description: siteConfig.extendedDescription,
    foundingDate: siteConfig.foundingYear.toString(),
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.title,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneRaw,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English"],
        contactOption: ["TollFree"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneRaw,
        contactType: "sales",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    slogan: siteConfig.slogan,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// LocalBusiness Schema (critical for local SEO)
function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: siteConfig.foundingYear.toString(),
    priceRange: siteConfig.priceRange,
    image: [
      `${siteConfig.url}/og-image.jpg`,
      `${siteConfig.url}/logo.png`,
      `${siteConfig.url}/images/house-washing.jpg`,
    ],
    logo: `${siteConfig.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "State",
        name: siteConfig.address.stateFullName,
      },
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      geoRadius: siteConfig.geo.radiusMeters,
    },
    openingHoursSpecification: siteConfig.hours.openingHoursSpecification.map(spec => ({
      "@type": "OpeningHoursSpecification",
      ...spec,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: siteConfig.reviews.slice(0, 3).map(review => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.text,
      datePublished: review.date,
    })),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pressure Washing Services",
      itemListElement: siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${siteConfig.url}/services/${service.id}`,
          name: service.title,
          description: service.description,
          provider: {
            "@id": `${siteConfig.url}/#localbusiness`,
          },
          areaServed: {
            "@type": "State",
            name: siteConfig.address.stateFullName,
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: service.title,
          },
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: service.price.startingAt,
          priceCurrency: service.price.currency,
          minPrice: service.price.startingAt,
        },
        position: index + 1,
      })),
    },
    // Trust signals
    isAcceptingNewCustomers: true,
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Check", "Venmo", "Zelle"],
    currenciesAccepted: "USD",
    knowsLanguage: "English",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Service Schema (detailed services for rich results)
function ServiceJsonLd() {
  const services = siteConfig.services.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${service.id}`,
    name: service.title,
    description: service.longDescription,
    provider: {
      "@id": `${siteConfig.url}/#localbusiness`,
    },
    areaServed: siteConfig.serviceAreas.map(area => ({
      "@type": "City",
      name: `${area.name}, ${area.state}`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.features.map((feature, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
        position: idx + 1,
      })),
    },
    offers: {
      "@type": "Offer",
      price: service.price.startingAt,
      priceCurrency: service.price.currency,
      priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().split('T')[0],
    },
    serviceType: service.title,
    termsOfService: `${siteConfig.url}/terms`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
    },
  }));

  return (
    <>
      {services.map((service, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
    </>
  );
}

// FAQ Schema (critical for AI Overview & rich snippets)
function FAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: siteConfig.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// HowTo Schema (for process/how it works)
function HowToJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${siteConfig.url}/#howto`,
    name: "How to Get Professional Pressure Washing Service",
    description: "Follow these simple steps to get your property professionally cleaned by Stargate Pressure Washing.",
    totalTime: "PT24H",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "149-599",
    },
    step: siteConfig.process.map((step, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: step.title,
      text: step.description,
      url: `${siteConfig.url}/#step-${idx + 1}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// WebSite Schema (for sitelinks search box)
function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// WebPage Schema (generic page markup)
function WebPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: `${siteConfig.name} | Professional Pressure Washing in Seminole, FL`,
    description: siteConfig.description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#localbusiness`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/og-image.jpg`,
    },
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
    inLanguage: "en-US",
    breadcrumb: {
      "@id": `${siteConfig.url}/#breadcrumb`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// BreadcrumbList Schema
function BreadcrumbJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// GeoJSON for Service Areas (Local SEO boost)
function ServiceAreaJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/#servicearea`,
    name: "Pressure Washing Service Area",
    provider: {
      "@id": `${siteConfig.url}/#localbusiness`,
    },
    areaServed: siteConfig.serviceAreas.map(area => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${area.county} County, ${area.state}`,
      },
      geo: {
        "@type": "GeoCoordinates",
        postalCode: area.zip.join(", "),
      },
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      geoRadius: siteConfig.geo.radiusMeters, // 25 miles in meters (must be number, not string)
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* DNS Prefetch for Third-Party Resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Geo Meta Tags for Local SEO */}
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content={`${siteConfig.address.city}, ${siteConfig.address.stateFullName}`} />
        <meta name="geo.position" content={`${siteConfig.geo.latitude};${siteConfig.geo.longitude}`} />
        <meta name="ICBM" content={`${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`} />

        {/* Business Contact for Click-to-Call */}
        <meta name="contact" content={siteConfig.phone} />
        
        {/* Core Structured Data (global - on all pages) */}
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
        <BreadcrumbJsonLd />
        {/* Note: Page-specific schemas (FAQ, Service, HowTo, ServiceArea) moved to respective page layouts */}
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
