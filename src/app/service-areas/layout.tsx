import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Service Areas | Pinellas County FL",
  description: `${siteConfig.name} serves ${siteConfig.serviceAreas.map(a => a.name).join(", ")} and all of Pinellas County, FL. Professional pressure washing with free estimates.`,
  keywords: siteConfig.serviceAreas.map(a => `pressure washing ${a.name} FL`).join(", "),
};

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

