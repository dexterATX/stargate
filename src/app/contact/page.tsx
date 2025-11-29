"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  ArrowRight,
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
            Quick response · Same-day estimates · No obligation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-main">
        <div className="contact-container">
          {/* Mobile Call CTA - Above form */}
          <a href={`tel:${siteConfig.phoneRaw}`} className="mobile-call-cta">
            <Phone size={20} />
            <span>Call Now: {siteConfig.phone}</span>
          </a>

          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-card">
              {isSubmitted ? (
                <div className="contact-success">
                  <div className="success-icon-wrap">
                    <CheckCircle size={32} />
                  </div>
                  <h3>Request Sent!</h3>
                  <p>We'll contact you within 24 hours.</p>
                  <button onClick={() => setIsSubmitted(false)} className="success-btn">
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-header">
                    <h2>Request a Quote</h2>
                    <p>Fill out the form below and we'll get back to you fast.</p>
                  </div>

                  {/* Name */}
                  <div className="form-field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      autoComplete="name"
                      autoCapitalize="words"
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 123-4567"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </div>

                  {/* Email */}
                  <div className="form-field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>

                  {/* Service */}
                  <div className="form-field">
                    <label htmlFor="service">Service Needed</label>
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

                  {/* Address - Optional */}
                  <div className="form-field">
                    <label htmlFor="address">
                      Property Address <span className="optional">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formState.address}
                      onChange={handleChange}
                      placeholder="123 Main St, Seminole, FL"
                      autoComplete="street-address"
                    />
                  </div>

                  {/* Message - Optional */}
                  <div className="form-field">
                    <label htmlFor="message">
                      Additional Details <span className="optional">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your project..."
                    />
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
                        <Send size={18} />
                        Get Free Quote
                      </>
                    )}
                  </button>

                  <p className="form-note">
                    <CheckCircle size={14} />
                    We typically respond within 2 hours during business hours
                  </p>
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
                    <span className="info-value">Mon-Sat: 7am-6pm</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="areas-card">
                <h4>Areas We Serve</h4>
                <div className="areas-list">
                  {siteConfig.serviceAreas.map((area) => (
                    <span key={area.name} className="area-tag">{area.name}</span>
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
          padding: 100px 20px 24px;
          text-align: center;
          background: linear-gradient(180deg, rgba(124, 58, 237, 0.08) 0%, transparent 100%);
        }

        .contact-hero-content {
          max-width: 500px;
          margin: 0 auto;
        }

        .contact-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .contact-subtitle {
          font-size: 14px;
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

        /* Mobile Call CTA */
        .mobile-call-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
        }

        .mobile-call-cta:active {
          transform: scale(0.98);
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
          border-radius: 20px;
          padding: 24px 20px;
        }

        .form-header {
          margin-bottom: 24px;
          text-align: center;
        }

        .form-header h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }

        .form-header p {
          font-size: 14px;
          color: #6b6b80;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-field label {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }

        .form-field label .optional {
          font-weight: 400;
          color: #6b6b80;
          font-size: 12px;
        }

        .form-field input,
        .form-field select,
        .form-field textarea {
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          font-size: 16px;
          color: #fff;
          transition: all 0.2s;
          -webkit-appearance: none;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: #4a4a5a;
        }

        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          outline: none;
          border-color: #7c3aed;
          background: rgba(124, 58, 237, 0.08);
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.15);
        }

        .form-field select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23a78bfa' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-size: 18px;
          padding-right: 44px;
        }

        .form-field select option {
          background: #1a1a2e;
          color: #fff;
          padding: 12px;
        }

        .form-field textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-error {
          padding: 14px 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 10px;
          font-size: 14px;
          color: #ef4444;
        }

        .form-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 18px 24px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border: none;
          border-radius: 14px;
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.35);
          margin-top: 8px;
        }

        .form-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 28px rgba(124, 58, 237, 0.45);
        }

        .form-submit:active:not(:disabled) {
          transform: scale(0.98);
        }

        .form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .form-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 13px;
          color: #6b6b80;
          text-align: center;
        }

        .form-note svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        /* Success State */
        .contact-success {
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon-wrap {
          width: 64px;
          height: 64px;
          margin: 0 auto 16px;
          background: rgba(34, 197, 94, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22c55e;
        }

        .contact-success h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .contact-success p {
          font-size: 15px;
          color: #6b6b80;
          margin-bottom: 24px;
        }

        .success-btn {
          padding: 14px 28px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s;
        }

        .success-btn:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        /* Contact Info - Hidden on mobile */
        .contact-info {
          display: none;
        }

        /* Tablet */
        @media (min-width: 640px) {
          .contact-title {
            font-size: 2.25rem;
          }

          .mobile-call-cta {
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }

          .contact-form-card {
            padding: 32px;
          }

          .form-header {
            text-align: left;
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

          .mobile-call-cta {
            display: none;
          }

          .contact-grid {
            grid-template-columns: 1.3fr 1fr;
            gap: 32px;
            align-items: start;
          }

          .contact-form-card {
            padding: 36px;
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .call-now-card {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 18px;
            background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.08) 100%);
            border: 1px solid rgba(124, 58, 237, 0.3);
            border-radius: 14px;
            text-decoration: none;
            transition: all 0.2s;
          }

          .call-now-card:hover {
            background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0.12) 100%);
            transform: translateY(-2px);
          }

          .call-now-icon {
            width: 48px;
            height: 48px;
            background: rgba(124, 58, 237, 0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .call-now-icon svg {
            width: 22px;
            height: 22px;
            color: #a78bfa;
          }

          .call-now-content {
            flex: 1;
          }

          .call-now-label {
            display: block;
            font-size: 12px;
            font-weight: 600;
            color: #a78bfa;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 2px;
          }

          .call-now-number {
            font-size: 20px;
            font-weight: 700;
            color: #fff;
          }

          .call-now-arrow {
            width: 20px;
            height: 20px;
            color: #6b6b80;
          }

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
            font-size: 14px;
            font-weight: 500;
            color: #b8b8c8;
            text-decoration: none;
          }

          a.info-value:hover {
            color: #a78bfa;
          }

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
        }
      `}</style>
    </main>
  );
}
