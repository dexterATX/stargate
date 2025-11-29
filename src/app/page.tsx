








import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { BeforeAfterPreview } from "@/components/sections/BeforeAfterPreview";
import { TestimonialsPreview } from "@/components/sections/TestimonialsPreview";
import { ServiceAreasPreview } from "@/components/sections/ServiceAreasPreview";
import { WhyChooseUsPreview } from "@/components/sections/WhyChooseUsPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionDivider } from "@/components/SectionDivider";
import { siteConfig } from "@/config/site";

// 2025 SEO Optimized Homepage Metadata
export const metadata: Metadata = {
  title: `${siteConfig.name} | #1 Pressure Washing in Seminole & Pinellas County, FL`,
  description: `Professional pressure washing in Seminole, FL. ⭐ ${siteConfig.rating.count}+ 5-star reviews. House washing from $199, driveway cleaning from $149, roof soft wash from $299. Licensed & insured. Free estimates! Call ${siteConfig.phone}`,
  keywords: [
    "pressure washing Seminole FL",
    "pressure washing near me",
    "power washing Pinellas County",
    "house washing Seminole",
    "driveway cleaning Largo FL", 
    "roof cleaning Clearwater",
    "soft wash house cleaning",
    "commercial pressure washing Tampa Bay",
    "pool deck cleaning",
    "exterior cleaning services Pinellas",
  ],
  openGraph: {
    title: `${siteConfig.name} | #1 Rated Pressure Washing in Seminole, FL`,
    description: `Transform your property with professional pressure washing. ${siteConfig.rating.count}+ happy customers in Pinellas County. House washing, driveway cleaning, roof soft wash & more. Free estimates, same-day service!`,
    type: "website",
    url: siteConfig.url,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Professional Pressure Washing in Seminole, FL`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | #1 Pressure Washing Seminole FL`,
    description: `${siteConfig.rating.count}+ 5-star reviews. House washing, driveway cleaning, roof soft wash. Free estimates!`,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <main role="main" itemScope itemType="https://schema.org/WebPage">
      {/* Hero - Primary CTA area */}
      <HeroSection />
      
      {/* Services - What we offer */}
      <section id="services" aria-label="Our Services">
      <ServicesPreview />
      </section>
      
      <SectionDivider />
      
      {/* Social Proof - Before/After Results */}
      <section id="results" aria-label="Before and After Results">
      <BeforeAfterPreview />
      </section>
      
      <SectionDivider />
      
      {/* Social Proof - Customer Reviews */}
      <section id="reviews" aria-label="Customer Reviews">
      <TestimonialsPreview />
      </section>
      
      <SectionDivider />
      
      {/* Local SEO - Service Areas */}
      <section id="service-areas" aria-label="Service Areas">
      <ServiceAreasPreview />
      </section>
      
      <SectionDivider />
      
      {/* Trust Signals - Why Choose Us */}
      <section id="why-us" aria-label="Why Choose Us">
      <WhyChooseUsPreview />
      </section>
      
      <SectionDivider />
      
      {/* Final CTA - Conversion */}
      <section id="contact" aria-label="Get a Free Estimate">
      <FinalCTA />
      </section>
    </main>
  );
}
