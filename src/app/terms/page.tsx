"use client";

import { siteConfig } from "@/config/site";

export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <h1>Terms of Service</h1>
        <p>Last updated: December 2024</p>
      </section>

      <section className="legal-content">
        <div className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the services provided by {siteConfig.name} ("{siteConfig.legalName}"), 
            you agree to be bound by these Terms of Service. If you do not agree to these terms, 
            please do not use our services.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Services</h2>
          <p>
            {siteConfig.name} provides professional pressure washing, soft washing, and exterior 
            cleaning services for residential and commercial properties in {siteConfig.address.city}, 
            {siteConfig.address.stateFullName} and surrounding areas in {siteConfig.serviceAreas[0]?.county} County.
          </p>
          <p>Our services include but are not limited to:</p>
          <ul>
            {siteConfig.services.map((service) => (
              <li key={service.id}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div className="legal-section">
          <h2>3. Estimates & Pricing</h2>
          <p>
            All estimates provided are based on the information available at the time of quote. 
            Final pricing may vary if conditions differ from the initial assessment. We provide 
            free, no-obligation estimates and will communicate any price changes before 
            beginning work.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Scheduling & Cancellation</h2>
          <p>
            We request at least 24 hours notice for cancellations or rescheduling. Same-day 
            cancellations may be subject to a cancellation fee. Weather-related cancellations 
            will be rescheduled at no additional charge.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Payment Terms</h2>
          <p>
            Payment is due upon completion of services unless otherwise agreed in writing. 
            We accept major credit cards, debit cards, checks, cash, and digital payments 
            including Venmo and Zelle.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Property Access & Preparation</h2>
          <p>
            Customers are responsible for ensuring our team has adequate access to the areas 
            requiring service. Please remove vehicles, outdoor furniture, and fragile items 
            from work areas prior to our arrival. Pets should be secured indoors or away 
            from the work area.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Satisfaction Guarantee</h2>
          <p>
            We stand behind our work with a 100% satisfaction guarantee. If you are not 
            completely satisfied with our service, contact us within 48 hours and we will 
            re-clean the affected area at no additional charge.
          </p>
        </div>

        <div className="legal-section">
          <h2>8. Limitations of Liability</h2>
          <p>
            While we take every precaution to protect your property, {siteConfig.name} is not 
            liable for damage to surfaces that are already weakened, deteriorated, or improperly 
            installed. We carry comprehensive liability insurance for your protection.
          </p>
        </div>

        <div className="legal-section">
          <h2>9. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us:
          </p>
          <ul>
            <li>Phone: {siteConfig.phone}</li>
            <li>Email: {siteConfig.email}</li>
            <li>Address: {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</li>
          </ul>
        </div>
      </section>

      <style jsx global>{`
        .legal-page {
          min-height: 100vh;
          background: #030308;
          padding-bottom: 80px;
        }

        .legal-hero {
          padding: 120px 20px 40px;
          text-align: center;
          background: linear-gradient(180deg, rgba(124, 58, 237, 0.06) 0%, transparent 100%);
        }

        .legal-hero h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .legal-hero p {
          font-size: 14px;
          color: #6b7280;
        }

        .legal-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .legal-section {
          margin-bottom: 32px;
        }

        .legal-section h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 12px;
        }

        .legal-section p {
          font-size: 15px;
          color: #9ca3af;
          line-height: 1.7;
          margin-bottom: 12px;
        }

        .legal-section ul {
          list-style: disc;
          padding-left: 24px;
          margin-top: 8px;
        }

        .legal-section li {
          font-size: 15px;
          color: #9ca3af;
          line-height: 1.7;
          margin-bottom: 4px;
        }

        @media (min-width: 640px) {
          .legal-hero {
            padding: 160px 24px 60px;
          }

          .legal-hero h1 {
            font-size: 2.5rem;
          }

          .legal-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </main>
  );
}

