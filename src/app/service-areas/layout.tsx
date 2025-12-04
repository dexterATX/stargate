import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Service Areas | Pinellas County FL",
  description: `${siteConfig.name} serves ${siteConfig.serviceAreas.map(a => a.name).join(", ")} and all of Pinellas County, FL. Professional pressure washing with free estimates.`,
  keywords: siteConfig.serviceAreas.map(a => `pressure washing ${a.name} FL`).join(", "),
  alternates: {
    canonical: "/service-areas",
  },
};

// Service Area specific JSON-LD
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
    })),
    serviceArea: {
      "@type": "State",
      name: siteConfig.address.stateFullName,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServiceAreaJsonLd />
      {children}
    </>
  );
}

