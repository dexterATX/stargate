"use client";

import { siteConfig } from "@/config/site";

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <h1>Privacy Policy</h1>
        <p>Last updated: December 2024</p>
      </section>

      <section className="legal-content">
        <div className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            {siteConfig.name} ("{siteConfig.legalName}") respects your privacy and is committed 
            to protecting your personal information. This Privacy Policy explains how we collect, 
            use, and safeguard your information when you use our website or services.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, phone number, email address, and physical address</li>
            <li><strong>Service Information:</strong> Details about your property and service requests</li>
            <li><strong>Communication Records:</strong> Records of your communications with us</li>
            <li><strong>Website Usage:</strong> IP address, browser type, and pages visited</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our pressure washing services</li>
            <li>Communicate with you about appointments and services</li>
            <li>Send service reminders and promotional offers (with your consent)</li>
            <li>Process payments and maintain records</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website and user experience</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>4. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may 
            share information only in the following circumstances:
          </p>
          <ul>
            <li>With service providers who assist in our operations (payment processors, scheduling software)</li>
            <li>When required by law or to protect our rights</li>
            <li>With your explicit consent</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from 
            unauthorized access, alteration, or disclosure. However, no method of transmission 
            over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Cookies & Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance your 
            browsing experience. You can control cookie settings through your browser preferences.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for 
            the privacy practices or content of these external sites. We encourage you to 
            review their privacy policies.
          </p>
        </div>

        <div className="legal-section">
          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18 years of age. We do not 
            knowingly collect personal information from children.
          </p>
        </div>

        <div className="legal-section">
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new policy on this page with an updated revision date.
          </p>
        </div>

        <div className="legal-section">
          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us:
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

        .legal-section li strong {
          color: #e5e7eb;
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

