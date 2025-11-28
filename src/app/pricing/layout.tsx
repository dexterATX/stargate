import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing & Free Estimates",
  description:
    "Transparent pressure washing pricing in Seminole, FL. Get instant estimates for house washing, driveway cleaning, roof cleaning, and more. No hidden fees. Free quotes!",
  keywords: [
    "pressure washing prices Seminole FL",
    "house washing cost",
    "driveway cleaning prices",
    "roof cleaning cost Florida",
    "pressure washing estimate",
    "free pressure washing quote",
    "affordable pressure washing",
    "pressure washing rates Pinellas County",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: `Transparent Pricing & Free Estimates | ${siteConfig.name}`,
    description:
      "See our competitive pressure washing prices. House washing from $199, driveways from $149. No hidden fees. Get your free quote today!",
    url: `${siteConfig.url}/pricing`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stargate Pressure Washing Pricing",
      },
    ],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

