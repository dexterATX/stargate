import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact Us | Get a Free Pressure Washing Quote`,
  description: `Contact ${siteConfig.name} for a free pressure washing estimate in Seminole, FL and Pinellas County. Call ${siteConfig.phone} or fill out our form. Same-day estimates available!`,
  openGraph: {
    title: `Contact ${siteConfig.name} | Free Estimates`,
    description: `Get a free pressure washing quote in Seminole, FL. Call ${siteConfig.phone} for same-day estimates. Serving all of Pinellas County.`,
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

