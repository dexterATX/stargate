import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// 2025 SEO Optimized Dynamic Sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();
  
  // Main pages with priority weighting
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Individual service pages (critical for long-tail SEO)
  const servicePages: MetadataRoute.Sitemap = siteConfig.services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Service area pages (critical for local SEO)
  const areaPages: MetadataRoute.Sitemap = siteConfig.serviceAreas.map((area) => ({
    url: `${baseUrl}/service-areas/${area.name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "")}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: area.isPrimary ? 0.75 : 0.65,
  }));

  // FAQ page (important for AI Overview)
  const faqPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [...mainPages, ...servicePages, ...areaPages, ...faqPage];
}
