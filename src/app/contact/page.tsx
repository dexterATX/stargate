"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Zap,
  ArrowRight,
  User,
  MessageSquare,
  Wrench
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", phone: "", address: "", service: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="contact-page">
      {/* Compact Hero */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Get Your Free Quote</h1>
          <p className="contact-subtitle">
            Fill out the form or call us directly. Same-day estimates available.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-card">
              {isSubmitted ? (
                <div className="contact-success">
                  <CheckCircle className="success-icon" />
                  <h3>Request Sent!</h3>
                  <p>We'll contact you within 24 hours.</p>
                  <button onClick={() => setIsSubmitted(false)} className="success-btn">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-header">
                    <Zap className="form-header-icon" />
                    <div>
                      <h2>Request a Quote</h2>
                      <p>We'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-field">
                      <label htmlFor="name">
                        <User size={14} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone">
                        <Phone size={14} />
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email">
                        <Mail size={14} />
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="address">
                        <MapPin size={14} />
                        Property Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formState.address}
                        onChange={handleChange}
                        placeholder="123 Main St, Seminole, FL"
                      />
                    </div>

                    <div className="form-field full-width">
                      <label htmlFor="service">
                        <Wrench size={14} />
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service...</option>
                        {siteConfig.services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div className="form-field full-width">
                      <label htmlFor="message">
                        <MessageSquare size={14} />
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your property - size of driveway, type of surface, any specific concerns..."
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="form-error">
                      {error}
                    </div>
                  )}

                  <button type="submit" disabled={isSubmitting} className="form-submit">
                    {isSubmitting ? (
                      <>
                        <span className="spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Get Free Quote
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column - Contact Info */}
            <div className="contact-info">
              {/* Call Now - Prominent */}
              <a href={`tel:${siteConfig.phoneRaw}`} className="call-now-card">
                <div className="call-now-icon">
                  <Phone />
                </div>
                <div className="call-now-content">
                  <span className="call-now-label">Call Now - Free Estimate</span>
                  <span className="call-now-number">{siteConfig.phone}</span>
                </div>
                <ArrowRight className="call-now-arrow" />
              </a>

              {/* Info Cards */}
              <div className="info-grid">
                <div className="info-card">
                  <Mail className="info-icon" />
                  <div>
                    <span className="info-label">Email</span>
                    <a href={`mailto:${siteConfig.email}`} className="info-value">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="info-card">
                  <MapPin className="info-icon" />
                  <div>
                    <span className="info-label">Service Area</span>
                    <span className="info-value">{siteConfig.address.city}, FL & Pinellas County</span>
                  </div>
                </div>

                <div className="info-card">
                  <Clock className="info-icon" />
                  <div>
                    <span className="info-label">Hours</span>
                    <span className="info-value">Mon-Fri: 7am-6pm</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="areas-card">
                <h4>Areas We Serve</h4>
                <div className="areas-list">
                  {siteConfig.serviceAreas.map((area) => (
                    <span key={area} className="area-tag">{area}</span>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="trust-row">
                <div className="trust-badge">
                  <CheckCircle size={14} />
                  Licensed & Insured
                </div>
                <div className="trust-badge">
                  <CheckCircle size={14} />
                  500+ 5-Star Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .contact-page {
          min-height: 100vh;
          background: #030308;
        }

        .contact-hero {
          padding: 120px 20px 32px;
          text-align: center;
          background: linear-gradient(180deg, rgba(124, 58, 237, 0.08) 0%, transparent 100%);
        }

        .contact-hero-content {
          max-width: 500px;
          margin: 0 auto;
        }

        .contact-title {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .contact-subtitle {
          font-size: 15px;
          color: #6b6b80;
        }

        .contact-main {
          padding: 0 0 60px;
        }

        .contact-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        /* Form Card */
        .contact-form-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px;
        }

        .form-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .form-header-icon {
          width: 36px;
          height: 36px;
          padding: 8px;
          background: rgba(124, 58, 237, 0.15);
          border-radius: 10px;
          color: #a78bfa;
        }

        .form-header h2 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 2px;
        }

        .form-header p {
          font-size: 13px;
          color: #6b6b80;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 20px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-field label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #8b8b9e;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .form-field input,
        .form-field select,
        .form-field textarea {
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 14px;
          color: #fff;
          transition: all 0.2s;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: #4a4a5a;
        }

        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          outline: none;
          border-color: rgba(124, 58, 237, 0.5);
          background: rgba(124, 58, 237, 0.05);
        }

        .form-field select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b6b80' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 14px;
          padding-right: 36px;
        }

        .form-field select option {
          background: #1a1a2e;
          color: #fff;
        }

        .form-field textarea {
          resize: vertical;
          min-height: 80px;
        }

        .form-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px 24px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);
        }

        .form-submit:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(124, 58, 237, 0.4);
        }

        .form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .form-error {
          padding: 12px 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          font-size: 14px;
          color: #ef4444;
        }

        /* Success State */
        .contact-success {
          text-align: center;
          padding: 32px 16px;
        }

        .contact-success .success-icon {
          width: 48px;
          height: 48px;
          margin-bottom: 12px;
          color: #22c55e;
        }

        .contact-success h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 6px;
        }

        .contact-success p {
          font-size: 14px;
          color: #6b6b80;
          margin-bottom: 16px;
        }

        .success-btn {
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
        }

        /* Contact Info */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .call-now-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.08) 100%);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s;
        }

        .call-now-card:hover {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0.12) 100%);
          transform: translateY(-1px);
        }

        .call-now-icon {
          width: 44px;
          height: 44px;
          background: rgba(124, 58, 237, 0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .call-now-icon svg {
          width: 20px;
          height: 20px;
          color: #a78bfa;
        }

        .call-now-content {
          flex: 1;
        }

        .call-now-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          color: #a78bfa;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .call-now-number {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
        }

        .call-now-arrow {
          width: 18px;
          height: 18px;
          color: #6b6b80;
        }

        /* Info Grid */
        .info-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
        }

        .info-icon {
          width: 18px;
          height: 18px;
          color: #6b6b80;
          flex-shrink: 0;
        }

        .info-label {
          display: block;
          font-size: 11px;
          color: #4a4a5a;
          margin-bottom: 1px;
        }

        .info-value {
          font-size: 13px;
          font-weight: 500;
          color: #b8b8c8;
          text-decoration: none;
        }

        a.info-value:hover {
          color: #a78bfa;
        }

        /* Areas Card */
        .areas-card {
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
        }

        .areas-card h4 {
          font-size: 12px;
          font-weight: 600;
          color: #6b6b80;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 10px;
        }

        .areas-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .area-tag {
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 4px;
          font-size: 12px;
          color: #8b8b9e;
        }

        /* Trust Row */
        .trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          color: #22c55e;
        }

        /* Tablet */
        @media (min-width: 640px) {
          .contact-title {
            font-size: 2.25rem;
          }

          .form-grid {
            grid-template-columns: 1fr 1fr;
          }

          .form-field.full-width {
            grid-column: span 2;
          }

          .info-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Desktop */
        @media (min-width: 900px) {
          .contact-hero {
            padding: 130px 20px 40px;
          }

          .contact-title {
            font-size: 2.5rem;
          }

          .contact-grid {
            grid-template-columns: 1.3fr 1fr;
            gap: 32px;
            align-items: start;
          }

          .contact-form-card {
            padding: 28px;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
