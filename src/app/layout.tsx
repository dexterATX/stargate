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

// Organization Schema (minimal - LocalBusiness covers most details)
function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
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
      "@type": "State",
      name: siteConfig.address.stateFullName,
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
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    paymentAccepted: ["Cash", "Credit Card", "Check"],
    currenciesAccepted: "USD",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// WebSite Schema (minimal)
function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#organization` },
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
