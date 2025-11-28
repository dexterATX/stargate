import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us - Your Local Pressure Washing Experts",
  description:
    "Meet Stargate Pressure Washing - Seminole's trusted pressure washing team since 2020. Family-owned, licensed, insured, and committed to exceptional results. Learn our story.",
  keywords: [
    "about Stargate Pressure Washing",
    "pressure washing company Seminole FL",
    "local pressure washing business",
    "family owned pressure washing",
    "licensed pressure washing Florida",
    "pressure washing team Pinellas County",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "Meet Seminole's trusted pressure washing team. Family-owned, licensed & insured since 2020.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Stargate Pressure Washing",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

