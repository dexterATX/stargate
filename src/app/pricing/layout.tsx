import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

// 2025 SEO Optimized Metadata for Pricing Page
export const metadata: Metadata = {
  title: "Pressure Washing Prices | Cost Guide 2025",
  description:
    `Transparent pressure washing pricing in Seminole, FL. House washing from $199, driveways from $149, roof cleaning from $299. No hidden fees, free estimates. See our full price guide.`,
  keywords: [
    "pressure washing prices",
    "pressure washing cost",
    "how much does pressure washing cost",
    "pressure washing price list",
    "driveway cleaning cost",
    "house washing prices",
    "roof cleaning cost Florida",
    "pressure washing rates Seminole FL",
    "power washing prices near me",
    "soft wash cost",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pressure Washing Prices | Stargate",
    description: "Transparent pricing. House washing from $199, driveways from $149. No hidden fees. Get your free estimate today!",
    url: `${siteConfig.url}/pricing`,
    type: "website",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Stargate Pressure Washing Prices and Cost Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pressure Washing Prices | Stargate",
    description: "Transparent pricing. House washing from $199, driveways from $149. Free estimates!",
  },
};

// JSON-LD Pricing Page Schema with Price Offers
function PricingPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${siteConfig.name} Pricing`,
    description: "Transparent pressure washing pricing for all services",
    url: `${siteConfig.url}/pricing`,
    mainEntity: {
      "@type": "OfferCatalog",
      name: "Pressure Washing Service Prices",
      itemListElement: siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: service.title,
        description: service.description,
        price: service.price.startingAt,
        priceCurrency: "USD",
        priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        availability: "https://schema.org/InStock",
        seller: {
          "@id": `${siteConfig.url}/#localbusiness`,
        },
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.longDescription,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Breadcrumb for Pricing Page
function PricingBreadcrumbJsonLd() {
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
        name: "Pricing",
        item: `${siteConfig.url}/pricing`,
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

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PricingPageJsonLd />
      <PricingBreadcrumbJsonLd />
      {children}
    </>
  );
}
