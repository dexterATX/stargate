import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Professional Pressure Washing Services",
  description:
    "Expert pressure washing services in Seminole, FL. House washing, driveway cleaning, roof cleaning, pool decks, and more. Licensed & insured. Free estimates!",
  keywords: [
    "pressure washing services Seminole FL",
    "house washing services",
    "driveway cleaning near me",
    "roof cleaning Pinellas County",
    "pool deck pressure washing",
    "commercial pressure washing",
    "soft wash cleaning",
    "exterior cleaning services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Professional Pressure Washing Services | ${siteConfig.name}`,
    description:
      "Expert pressure washing services in Seminole, FL. House washing, driveway cleaning, roof cleaning, and more. Free estimates!",
    url: `${siteConfig.url}/services`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stargate Pressure Washing Services",
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

