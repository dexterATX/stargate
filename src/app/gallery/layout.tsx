import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

// 2025 SEO Optimized Metadata for Gallery Page
export const metadata: Metadata = {
  title: "Before & After Gallery | Pressure Washing Results",
  description:
    `See real before and after pressure washing results from ${siteConfig.name}. Browse our gallery of driveway cleaning, house washing, roof cleaning, and more transformations in Seminole & Pinellas County.`,
  keywords: [
    "pressure washing before after photos",
    "pressure washing results",
    "driveway cleaning before after",
    "house washing photos",
    "roof cleaning results",
    "pressure washing gallery",
    "power washing transformations",
    "exterior cleaning before after",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Before & After Gallery | Stargate Pressure Washing",
    description: "See real pressure washing transformations. Browse our gallery of driveway, house, and roof cleaning results.",
    url: `${siteConfig.url}/gallery`,
    type: "website",
    images: [
      {
        url: "/og-gallery.jpg",
        width: 1200,
        height: 630,
        alt: "Stargate Pressure Washing Before and After Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Before & After Gallery | Stargate",
    description: "See real pressure washing transformations in Seminole & Pinellas County.",
  },
};

// JSON-LD Image Gallery Schema
function GalleryPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${siteConfig.name} Before & After Gallery`,
    description: "Before and after photos showcasing our pressure washing results",
    url: `${siteConfig.url}/gallery`,
    author: {
      "@id": `${siteConfig.url}/#localbusiness`,
    },
    about: {
      "@type": "Service",
      name: "Pressure Washing Services",
      provider: {
        "@id": `${siteConfig.url}/#localbusiness`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Breadcrumb for Gallery Page
function GalleryBreadcrumbJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gallery",
        item: `${siteConfig.url}/gallery`,
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

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryPageJsonLd />
      <GalleryBreadcrumbJsonLd />
      {children}
    </>
  );
}
