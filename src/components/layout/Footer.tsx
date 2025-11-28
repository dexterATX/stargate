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
          {/* Mobile Layout */}
          <div className="footer-mobile">
            {/* Logo + CTA */}
            <div className="footer-mobile-top">
              <Link href="/" className="footer-logo-compact">
                <span className="footer-logo-icon">S</span>
                <span className="footer-logo-name">Stargate</span>
              </Link>
              <a href={`tel:${siteConfig.phoneRaw}`} className="footer-mobile-cta">
                <Phone size={16} />
                Call Now
              </a>
            </div>

            {/* Quick Links - Single Row */}
            <div className="footer-mobile-links">
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>

            {/* Service Areas */}
            <div className="footer-mobile-areas">
              <span className="footer-areas-label">Serving:</span>
              <span className="footer-areas-text">
                {siteConfig.serviceAreas.slice(0, 5).join(" · ")} & more
              </span>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="footer-desktop">
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
                  Professional pressure washing for residential &amp; commercial properties in Pinellas County.
                </p>
                <a href={`tel:${siteConfig.phoneRaw}`} className="footer-phone">
                  <Phone size={18} />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>

              {/* Quick Links */}
              <div className="footer-col">
                <h4 className="footer-col-title">Quick Links</h4>
                <ul className="footer-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/gallery">Gallery</Link></li>
                  <li><Link href="/pricing">Pricing</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className="footer-col">
                <h4 className="footer-col-title">Our Services</h4>
                <ul className="footer-links">
                  <li><Link href="/services">House Washing</Link></li>
                  <li><Link href="/services">Driveway Cleaning</Link></li>
                  <li><Link href="/services">Roof Soft Wash</Link></li>
                  <li><Link href="/services">Pool Deck Cleaning</Link></li>
                  <li><Link href="/services">Commercial</Link></li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="footer-col">
                <h4 className="footer-col-title">Service Areas</h4>
                <div className="footer-areas-grid">
                  {siteConfig.serviceAreas.slice(0, 8).map((area) => (
                    <span key={area} className="footer-area-tag">{area}</span>
                  ))}
                  {siteConfig.serviceAreas.length > 8 && (
                    <span className="footer-area-more">+{siteConfig.serviceAreas.length - 8} more</span>
                  )}
                </div>
              </div>

              {/* Contact */}
              <div className="footer-col footer-contact-col">
                <h4 className="footer-col-title">Get In Touch</h4>
                <div className="footer-contact-info">
                  <a href={`mailto:${siteConfig.email}`} className="footer-contact-row">
                    <Mail size={14} />
                    <span>{siteConfig.email}</span>
                  </a>
                  <div className="footer-contact-row">
                    <MapPin size={14} />
                    <span>{siteConfig.address.city}, {siteConfig.address.state}</span>
                  </div>
                  <div className="footer-contact-row">
                    <Clock size={14} />
                    <span>Mon-Sat: {siteConfig.hours.weekdays}</span>
                  </div>
                </div>
                <a href="/contact" className="footer-cta">
                  Free Quote
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {currentYear} {siteConfig.name}
            </p>
            <div className="footer-legal">
              <Link href="/privacy">Privacy</Link>
              <span>·</span>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .footer {
          background: linear-gradient(180deg, #08080c 0%, #050508 100%);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Main Footer */
        .footer-main {
          padding: 32px 0 24px;
          border-top: 1px solid rgba(124, 58, 237, 0.15);
        }

        /* Mobile Layout */
        .footer-mobile {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-mobile-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-logo-compact {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .footer-logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);
        }

        .footer-logo-compact .footer-logo-name {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
        }

        .footer-mobile-cta {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
        }

        .footer-mobile-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 4px 16px;
          padding: 16px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-mobile-links a {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          padding: 4px 0;
        }

        .footer-mobile-areas {
          text-align: center;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.6;
        }

        .footer-areas-label {
          color: #a78bfa;
          font-weight: 600;
          margin-right: 6px;
        }

        /* Desktop Layout - Hidden on mobile */
        .footer-desktop {
          display: none;
        }

        /* Logo (desktop) */
        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 16px;
        }

        .footer-logo .footer-logo-icon {
          width: 44px;
          height: 44px;
          font-size: 20px;
          border-radius: 12px;
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .footer-logo-text .footer-logo-name {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .footer-logo-sub {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.03em;
        }

        .footer-desc {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 20px;
          max-width: 280px;
        }

        .footer-phone {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 10px;
          color: #a78bfa;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.2s;
        }

        .footer-phone:hover {
          background: rgba(124, 58, 237, 0.2);
          border-color: rgba(124, 58, 237, 0.4);
        }

        .footer-col-title {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #a78bfa;
        }

        .footer-areas-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .footer-area-tag {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.2s;
        }

        .footer-area-tag:hover {
          background: rgba(124, 58, 237, 0.1);
          border-color: rgba(124, 58, 237, 0.2);
          color: #a78bfa;
        }

        .footer-area-more {
          display: inline-block;
          padding: 6px 12px;
          font-size: 12px;
          color: #a78bfa;
          font-weight: 500;
        }

        .footer-contact-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .footer-contact-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s;
        }

        a.footer-contact-row:hover {
          color: #a78bfa;
        }

        .footer-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.25);
        }

        .footer-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(124, 58, 237, 0.4);
        }

        /* Bottom Bar */
        .footer-bottom {
          padding: 14px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-bottom-inner {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          font-size: 11px;
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.3);
        }

        .footer-legal {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.2);
        }

        .footer-legal a {
          color: rgba(255, 255, 255, 0.3);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-legal a:hover {
          color: rgba(255, 255, 255, 0.6);
        }

        /* Tablet - Show desktop layout */
        @media (min-width: 768px) {
          .footer-mobile {
            display: none;
          }

          .footer-desktop {
            display: block;
          }

          .footer-main {
            padding: 56px 0 40px;
          }

          .footer-container {
            padding: 0 32px;
          }

          .footer-bottom-inner {
            justify-content: space-between;
            font-size: 12px;
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .footer-main {
            padding: 64px 0 48px;
          }

          .footer-grid {
            display: grid;
            grid-template-columns: 1.4fr 0.7fr 0.9fr 1fr 1fr;
            gap: 40px;
            align-items: start;
          }
        }
      `}</style>
    </footer>
  );
}
