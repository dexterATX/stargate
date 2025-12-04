"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Navigation,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import { SectionDivider } from "@/components/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceAreasPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-animate"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );
    }

    if (areasRef.current) {
      gsap.fromTo(
        areasRef.current.querySelectorAll(".area-card"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: areasRef.current,
            start: "top 85%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const primaryAreas = siteConfig.serviceAreas.filter((area) => area.isPrimary);
  const secondaryAreas = siteConfig.serviceAreas.filter((area) => !area.isPrimary);

  return (
    <main className="service-areas-page">
      {/* Hero */}
      <section ref={heroRef} className="sa-hero">
        <div className="hero-content">
          <span className="hero-animate hero-badge">
            <MapPin size={14} />
            Service Areas
          </span>
          <h1 className="hero-animate">
            Proudly Serving <span className="text-gradient">Pinellas County</span>
          </h1>
          <p className="hero-animate hero-subtitle">
            Professional pressure washing services throughout {siteConfig.address.city} and 
            all of {siteConfig.serviceAreas[0]?.county} County, FL. 
            Serving a {siteConfig.geo.radius} radius from our home base.
          </p>
          
          <div className="hero-animate mobile-cta">
            <a href={`tel:${siteConfig.phoneRaw}`} className="call-btn">
              <Phone size={18} />
              <div>
                <span className="call-label">Call Now</span>
                <span className="call-number">{siteConfig.phone}</span>
              </div>
            </a>
          </div>

          <div className="hero-animate hero-info">
            <span><Navigation size={16} /> Based in {siteConfig.address.city}, FL</span>
            <span><CheckCircle2 size={16} /> Free Estimates</span>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Primary Areas */}
      <section ref={areasRef} className="areas-section">
        <div className="section-header">
          <span className="section-label">Primary Service Areas</span>
          <h2>Cities We Serve</h2>
          <p>Fast response times and priority scheduling in these areas</p>
        </div>
        
        <div className="areas-grid primary">
          {primaryAreas.map((area) => (
            <div key={area.name} className="area-card primary-card">
              <div className="area-header">
                <MapPin className="area-icon" />
                <div>
                  <h3>{area.name}</h3>
                  <span className="area-state">{area.state}</span>
                </div>
              </div>
              <p className="area-description">{area.description}</p>
              <div className="area-zips">
                <span className="zip-label">ZIP Codes:</span>
                <span className="zip-codes">{area.zip.join(", ")}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Secondary Areas */}
      <section className="areas-section secondary">
        <div className="section-header">
          <span className="section-label">Extended Coverage</span>
          <h2>Additional Areas</h2>
          <p>We also provide services to these surrounding communities</p>
        </div>
        
        <div className="areas-grid secondary">
          {secondaryAreas.map((area) => (
            <div key={area.name} className="area-card secondary-card">
              <div className="area-header">
                <MapPin className="area-icon" />
                <div>
                  <h3>{area.name}</h3>
                  <span className="area-state">{area.state}</span>
                </div>
              </div>
              <p className="area-description">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Services Available */}
      <section className="services-preview">
        <div className="section-header">
          <span className="section-label">Available Everywhere</span>
          <h2>Services We Offer</h2>
        </div>
        
        <div className="services-list">
          {siteConfig.services.map((service) => (
            <div key={service.id} className="service-item">
              <CheckCircle2 className="check-icon" />
              <span>{service.title}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <Sparkles className="cta-icon" />
          <h2>Not Sure If We Service Your Area?</h2>
          <p>
            Give us a call! We may be able to accommodate locations outside our 
            standard service area. Free estimates for all inquiries.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate
              <ArrowRight size={18} />
            </Link>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-secondary">
              <Phone size={18} />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .service-areas-page {
          min-height: 100vh;
          background: #030308;
        }

        /* Hero */
        .sa-hero {
          padding: 100px 16px 32px;
          text-align: center;
          background: linear-gradient(180deg, rgba(124, 58, 237, 0.06) 0%, transparent 100%);
        }

        .hero-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 500;
          color: #a78bfa;
          margin-bottom: 16px;
        }

        .sa-hero h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .text-gradient {
          background: linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .mobile-cta {
          margin-bottom: 16px;
        }

        .call-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);
        }

        .call-btn svg { color: #fff; }

        .call-btn div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .call-label {
          font-size: 10px;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .call-number {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
        }

        .hero-info {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-info span {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: #6b7280;
        }

        .hero-info svg { color: #7c3aed; }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 24px;
          padding: 0 16px;
        }

        .section-label {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          color: #a78bfa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 6px;
        }

        .section-header h2 {
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }

        .section-header p {
          font-size: 14px;
          color: #6b7280;
        }

        /* Areas Section */
        .areas-section {
          padding: 24px 16px;
        }

        .areas-grid {
          display: grid;
          gap: 12px;
        }

        .areas-grid.primary {
          grid-template-columns: 1fr;
        }

        .areas-grid.secondary {
          grid-template-columns: repeat(2, 1fr);
        }

        .area-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 16px;
          transition: all 0.3s;
        }

        .area-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-2px);
        }

        .primary-card {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0.02) 100%);
          border-color: rgba(124, 58, 237, 0.2);
        }

        .area-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .area-icon {
          width: 24px;
          height: 24px;
          color: #7c3aed;
          flex-shrink: 0;
        }

        .area-header h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          line-height: 1;
        }

        .area-state {
          font-size: 11px;
          color: #6b7280;
        }

        .area-description {
          font-size: 13px;
          color: #9ca3af;
          line-height: 1.4;
          margin-bottom: 10px;
        }

        .secondary-card .area-description {
          margin-bottom: 0;
          font-size: 12px;
        }

        .area-zips {
          font-size: 11px;
          color: #6b7280;
        }

        .zip-label {
          font-weight: 500;
          margin-right: 4px;
        }

        .zip-codes {
          color: #9ca3af;
        }

        /* Services Preview */
        .services-preview {
          padding: 24px 16px;
        }

        .services-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          font-size: 12px;
          color: #e5e7eb;
        }

        .check-icon {
          width: 16px;
          height: 16px;
          color: #22c55e;
          flex-shrink: 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 32px 16px 60px;
        }

        .cta-content {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.05) 100%);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
        }

        .cta-icon {
          width: 32px;
          height: 32px;
          color: #a78bfa;
          margin-bottom: 12px;
        }

        .cta-content h2 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .cta-content > p {
          font-size: 13px;
          color: #9ca3af;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.35);
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
        }

        /* Desktop Styles */
        @media (min-width: 640px) {
          .sa-hero {
            padding: 150px 24px 60px;
          }

          .hero-badge {
            padding: 8px 16px;
            font-size: 13px;
            margin-bottom: 20px;
          }

          .sa-hero h1 {
            font-size: 2.5rem;
            margin-bottom: 16px;
          }

          .hero-subtitle {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 28px;
          }

          .mobile-cta { display: none; }

          .hero-info {
            gap: 24px;
          }

          .hero-info span {
            font-size: 14px;
            gap: 8px;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .section-header h2 {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .section-header p {
            font-size: 15px;
          }

          .areas-section {
            padding: 40px 24px;
            max-width: 1000px;
            margin: 0 auto;
          }

          .areas-grid.primary {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .areas-grid.secondary {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }

          .area-card {
            padding: 24px;
            border-radius: 16px;
          }

          .area-header h3 {
            font-size: 1.15rem;
          }

          .area-description {
            font-size: 14px;
          }

          .services-preview {
            padding: 40px 24px;
            max-width: 800px;
            margin: 0 auto;
          }

          .services-list {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }

          .service-item {
            padding: 16px;
            font-size: 14px;
            border-radius: 10px;
          }

          .cta-section {
            padding: 60px 24px 100px;
            max-width: 700px;
            margin: 0 auto;
          }

          .cta-content {
            padding: 48px 40px;
            border-radius: 24px;
          }

          .cta-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 16px;
          }

          .cta-content h2 {
            font-size: 1.5rem;
            margin-bottom: 12px;
          }

          .cta-content > p {
            font-size: 15px;
            margin-bottom: 28px;
          }

          .cta-buttons {
            flex-direction: row;
            justify-content: center;
            gap: 16px;
          }

          .btn-primary,
          .btn-secondary {
            padding: 14px 28px;
            font-size: 15px;
          }
        }

        @media (min-width: 1024px) {
          .sa-hero h1 {
            font-size: 3rem;
          }

          .areas-grid.secondary {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </main>
  );
}

