import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

// 2025 SEO Optimized Metadata for Contact Page
export const metadata: Metadata = {
  title: `Contact Us | Free Pressure Washing Estimate | ${siteConfig.name}`,
  description:
    `Get a free pressure washing estimate in Seminole & Pinellas County. Call ${siteConfig.phone} or fill out our form. Same-day response, no-obligation quotes. Licensed & insured.`,
  keywords: [
    "free pressure washing estimate",
    "pressure washing quote Seminole FL",
    "contact pressure washing company",
    "pressure washing phone number",
    "request pressure washing service",
    "schedule pressure washing",
    "pressure washing consultation",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Get a Free Estimate | ${siteConfig.name}`,
    description: `Contact us for a free pressure washing quote. Call ${siteConfig.phone} or submit our quick form. Same-day response guaranteed!`,
    url: `${siteConfig.url}/contact`,
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: `Contact ${siteConfig.name} - Free Estimates`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${siteConfig.name}`,
    description: `Get a free pressure washing estimate. Call ${siteConfig.phone} today!`,
  },
};

// JSON-LD Contact Page Schema
function ContactPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    description: "Get a free pressure washing estimate. Contact us by phone, email, or form.",
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneRaw,
        contactType: "customer service",
        availableLanguage: "English",
        areaServed: "US-FL",
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

// Breadcrumb for Contact Page
function ContactBreadcrumbJsonLd() {
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
        name: "Contact",
        item: `${siteConfig.url}/contact`,
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ContactPageJsonLd />
      <ContactBreadcrumbJsonLd />
      {children}
    </>
  );
}
