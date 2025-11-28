"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand-col">
              <Link href="/" className="footer-logo">
                <span className="footer-logo-icon">S</span>
                <div className="footer-logo-text">
                  <span className="footer-logo-name">Stargate</span>
                  <span className="footer-logo-sub">Pressure Washing</span>
                </div>
              </Link>
              <p className="footer-desc">
                Professional pressure washing services for residential and commercial properties throughout Pinellas County.
              </p>
              <div className="footer-hours">
                <div className="footer-hours-header">
                  <Clock size={14} />
                  <span>Business Hours</span>
                </div>
                <div className="footer-hours-grid">
                  <span>Mon - Fri</span>
                  <span>{siteConfig.hours.weekdays}</span>
                  <span>Saturday</span>
                  <span>{siteConfig.hours.saturday}</span>
                  <span>Sunday</span>
                  <span>{siteConfig.hours.sunday}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-links">
                <li><Link href="/services#house-washing">House Washing</Link></li>
                <li><Link href="/services#driveway-cleaning">Driveway Cleaning</Link></li>
                <li><Link href="/services#roof-cleaning">Roof Cleaning</Link></li>
                <li><Link href="/services#pool-deck">Pool Deck Cleaning</Link></li>
                <li><Link href="/services#commercial">Commercial</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <a href={`tel:${siteConfig.phone}`} className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <Phone size={14} />
                    </div>
                    <div className="footer-contact-content">
                      <span className="footer-contact-label">Phone</span>
                      <span className="footer-contact-value">{siteConfig.phone}</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <Mail size={14} />
                    </div>
                    <div className="footer-contact-content">
                      <span className="footer-contact-label">Email</span>
                      <span className="footer-contact-value">{siteConfig.email}</span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <MapPin size={14} />
                    </div>
                    <div className="footer-contact-content">
                      <span className="footer-contact-label">Location</span>
                      <span className="footer-contact-value">{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</span>
                    </div>
                  </div>
                </li>
              </ul>
              <a href="/contact" className="footer-cta">
                Get Free Quote
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="footer-areas">
        <div className="footer-container">
          <div className="footer-areas-inner">
            <span className="footer-areas-label">Service Areas</span>
            <div className="footer-areas-list">
              {siteConfig.serviceAreas.map((area, i) => (
                <span key={area} className="footer-area-item">
                  {area}
                  {i < siteConfig.serviceAreas.length - 1 && <span className="footer-area-dot">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link href="/privacy">Privacy Policy</Link>
              <span className="footer-legal-dot">·</span>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .footer {
          background: #050508;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Main Footer */
        .footer-main {
          padding: 48px 0 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        /* Brand Column */
        .footer-brand-col {
          max-width: 280px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 16px;
        }

        .footer-logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
        }

        .footer-logo-name {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .footer-logo-sub {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.02em;
        }

        .footer-desc {
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.45);
          margin-bottom: 20px;
        }

        .footer-hours {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 14px 16px;
        }

        .footer-hours-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-hours-grid {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 4px 16px;
          font-size: 12px;
        }

        .footer-hours-grid span:nth-child(odd) {
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-hours-grid span:nth-child(even) {
          color: rgba(255, 255, 255, 0.7);
          text-align: right;
        }

        /* Columns */
        .footer-col-title {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #a78bfa;
        }

        /* Contact Items */
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 20px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        a.footer-contact-item:hover {
          opacity: 0.8;
        }

        .footer-contact-icon {
          width: 32px;
          height: 32px;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a78bfa;
          flex-shrink: 0;
        }

        .footer-contact-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .footer-contact-label {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-contact-value {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
        }

        .footer-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          transition: all 0.2s;
        }

        .footer-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);
        }

        /* Service Areas */
        .footer-areas {
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 16px 0;
        }

        .footer-areas-inner {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-areas-label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .footer-areas-list {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .footer-area-item {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-area-dot {
          margin: 0 6px;
          color: rgba(255, 255, 255, 0.25);
        }

        /* Bottom Bar */
        .footer-bottom {
          padding: 18px 0;
        }

        .footer-bottom-inner {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }

        .footer-copyright {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.35);
        }

        .footer-legal {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .footer-legal a {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.35);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-legal a:hover {
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-legal-dot {
          color: rgba(255, 255, 255, 0.2);
          margin: 0 6px;
        }

        /* Tablet */
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }

          .footer-brand-col {
            grid-column: span 2;
            max-width: 320px;
          }

          .footer-areas-inner {
            flex-direction: row;
            align-items: center;
            gap: 16px;
          }

          .footer-bottom-inner {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .footer-main {
            padding: 56px 0 48px;
          }

          .footer-grid {
            grid-template-columns: 1.3fr 0.8fr 0.8fr 1.1fr;
            gap: 48px;
          }

          .footer-brand-col {
            grid-column: span 1;
          }
        }
      `}</style>
    </footer>
  );
}
