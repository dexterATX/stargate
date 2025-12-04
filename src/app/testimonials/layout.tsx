import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials",
  description: `Read ${siteConfig.rating.count}+ reviews from satisfied customers. ${siteConfig.name} has a ${siteConfig.rating.value}-star rating for pressure washing services in Pinellas County, FL.`,
  keywords: `${siteConfig.name} reviews, pressure washing reviews Seminole FL, customer testimonials`,
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

