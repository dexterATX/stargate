import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

// 2025 SEO Optimized Metadata for About Page
export const metadata: Metadata = {
  title: "About Us | Seminole's Trusted Cleaning Team",
  description:
    `Family-owned pressure washing company serving Pinellas County since ${siteConfig.foundingYear}. Licensed, insured, PWNA certified. ${siteConfig.rating.count}+ 5-star reviews. Meet the team behind Seminole's #1 rated exterior cleaning service.`,
  keywords: [
    "about Stargate Pressure Washing",
    "pressure washing company Seminole FL",
    "local pressure washing business",
    "family owned pressure washing",
    "licensed pressure washing Florida",
    "insured pressure washing company",
    "PWNA certified pressure washer",
    "pressure washing team Pinellas County",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Seminole's Trusted Cleaning Team",
    description: `Family-owned since ${siteConfig.foundingYear}. Licensed, insured, and ${siteConfig.rating.count}+ 5-star reviews. Learn why Pinellas County trusts us.`,
    url: `${siteConfig.url}/about`,
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Team - Professional Pressure Washing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Stargate Pressure Washing",
    description: `Family-owned pressure washing serving Pinellas County since ${siteConfig.foundingYear}.`,
  },
};

// JSON-LD About Page Schema
function AboutPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${siteConfig.name}`,
    description: siteConfig.extendedDescription,
    url: `${siteConfig.url}/about`,
    mainEntity: {
      "@id": `${siteConfig.url}/#localbusiness`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Breadcrumb for About Page
function AboutBreadcrumbJsonLd() {
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
        name: "About",
        item: `${siteConfig.url}/about`,
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AboutPageJsonLd />
      <AboutBreadcrumbJsonLd />
      {children}
    </>
  );
}
