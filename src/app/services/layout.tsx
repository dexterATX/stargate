import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

// 2025 SEO Optimized Metadata for Services Page
export const metadata: Metadata = {
  title: "Pressure Washing Services | Seminole FL",
  description:
    `Expert pressure washing services in Seminole, FL. House washing from $199, driveway cleaning from $149, roof soft wash from $299. ⭐ ${siteConfig.rating.count}+ 5-star reviews. Licensed & insured. Free estimates!`,
  keywords: [
    "pressure washing services Seminole FL",
    "house washing services Pinellas County",
    "driveway cleaning near me",
    "roof cleaning soft wash Florida",
    "pool deck pressure washing",
    "commercial pressure washing Tampa Bay",
    "soft wash house cleaning",
    "exterior cleaning services",
    "fence cleaning Seminole",
    "paver cleaning Largo FL",
    "concrete cleaning Clearwater",
    "pressure washing prices Florida",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Pressure Washing Services | Stargate",
    description:
      `Expert pressure washing in Seminole & Pinellas County. House washing, driveway cleaning, roof cleaning & more. ${siteConfig.rating.count}+ 5-star reviews. Free estimates!`,
    url: `${siteConfig.url}/services`,
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Stargate Pressure Washing Services - House Washing, Driveway Cleaning, Roof Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pressure Washing Services | Stargate",
    description: "House washing, driveway cleaning, roof cleaning & more. Free estimates!",
  },
};

// JSON-LD for Services List Page
function ServicesPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pressure Washing Services",
    description: "Professional pressure washing and soft wash services in Pinellas County, FL",
    url: `${siteConfig.url}/services`,
    numberOfItems: siteConfig.services.length,
    itemListElement: siteConfig.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${siteConfig.url}/services/${service.id}`,
        provider: {
          "@id": `${siteConfig.url}/#localbusiness`,
        },
        offers: {
          "@type": "Offer",
          price: service.price.startingAt,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        areaServed: siteConfig.serviceAreas.map(area => ({
          "@type": "City",
          name: `${area.name}, FL`,
        })),
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

// Breadcrumb for Services Page
function ServicesBreadcrumbJsonLd() {
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
        name: "Services",
        item: `${siteConfig.url}/services`,
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServicesPageJsonLd />
      <ServicesBreadcrumbJsonLd />
      {children}
    </>
  );
}
