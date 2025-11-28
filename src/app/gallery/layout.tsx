import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Project Gallery | Before & After Pressure Washing Photos",
  description: `See real before and after pressure washing results from ${siteConfig.name}. Browse our gallery of driveway cleaning, house washing, roof cleaning, and pool deck transformations in Seminole, FL and Pinellas County.`,
  openGraph: {
    title: `Project Gallery | ${siteConfig.name}`,
    description: "Real before & after photos from satisfied customers across Pinellas County. See the Stargate difference!",
  },
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

