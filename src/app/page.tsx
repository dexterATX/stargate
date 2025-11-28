








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

// Page-specific SEO metadata
export const metadata: Metadata = {
  title: `${siteConfig.name} | #1 Pressure Washing in Seminole & Pinellas County, FL`,
  description: `Professional pressure washing in Seminole, FL. ⭐ ${siteConfig.rating.count}+ 5-star reviews. Driveway cleaning, house washing, roof cleaning & more. Free estimates! Call ${siteConfig.phone}`,
  openGraph: {
    title: `${siteConfig.name} | #1 Rated Pressure Washing in Seminole, FL`,
    description: `Transform your property with professional pressure washing. ${siteConfig.rating.count}+ happy customers in Pinellas County. Free estimates, same-day service available!`,
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
