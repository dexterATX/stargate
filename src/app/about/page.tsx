"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Shield,
  Award,
  Users,
  Heart,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
  Calendar,
  Target,
  Sparkles,
  Star,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "500+", label: "Happy Customers", icon: Users },
  { value: "4.9", label: "Star Rating", icon: Star },
  { value: "5+", label: "Years Experience", icon: Calendar },
  { value: "100%", label: "Satisfaction", icon: Target },
];

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "Professional-grade equipment and proven techniques on every job.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "We show up on time and treat your property with respect.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Safe for your family, pets, and landscaping.",
  },
  {
    icon: Award,
    title: "Guaranteed",
    description: "Not satisfied? We'll re-clean at no charge.",
  },
];

const timeline = [
  { year: "2020", title: "Founded", desc: "Started in Seminole with a commitment to quality" },
  { year: "2021", title: "Expanded", desc: "Added soft wash & roof cleaning services" },
  { year: "2022", title: "Commercial", desc: "Began serving businesses & HOAs" },
  { year: "2023", title: "Team Growth", desc: "Hired certified technicians" },
  { year: "2024", title: "500+ Served", desc: "Milestone of 500+ happy customers" },
];

const certifications = [
  "Licensed & Insured",
  "PWNA Certified",
  "Soft Wash Certified",
  "EPA Compliant",
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-animate"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );
    }

    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelectorAll(".stat-item"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="about-page">
      {/* Mobile Hero with CTA */}
      <section ref={heroRef} className="about-hero">
        <div className="hero-content">
          <span className="hero-animate hero-badge">
            <Sparkles size={14} />
            Our Story
          </span>
          <h1 className="hero-animate">
            Seminole&apos;s Trusted <span className="text-gradient">Pressure Washing</span> Team
          </h1>
          <p className="hero-animate hero-subtitle">
            Family-owned since 2020. Restoring pride in your property, one job at a time.
          </p>
          
          {/* Mobile CTA - prominent call button */}
          <div className="hero-animate mobile-cta">
            <a href={`tel:${siteConfig.phoneRaw}`} className="call-btn">
              <Phone size={20} />
              <div>
                <span className="call-label">Call Now</span>
                <span className="call-number">{siteConfig.phone}</span>
              </div>
            </a>
          </div>

          <div className="hero-animate hero-info">
            <span><MapPin size={14} /> Seminole, FL</span>
            <span><Calendar size={14} /> Est. {siteConfig.foundingYear}</span>
          </div>
        </div>
      </section>

      {/* Stats - Compact on mobile */}
      <section ref={statsRef} className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <stat.icon size={20} className="stat-icon" />
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Story - Mobile optimized */}
      <section className="story-section">
        <div className="story-card">
          <span className="section-label">Who We Are</span>
          <h2>More Than Just Cleaning</h2>
          <p>
            Stargate Pressure Washing was born from a simple belief: homeowners deserve honest, 
            high-quality exterior cleaning without the runaround.
          </p>
          <p>
            Every estimate is straightforward—no hidden fees. Every technician is trained and 
            treats your property with respect. And every job comes with our satisfaction guarantee.
          </p>
          <div className="story-image">
            <div
              className="image-placeholder"
              style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80)",
              }}
            />
            <div className="image-badge">
              <CheckCircle2 size={16} />
              Licensed & Insured
            </div>
          </div>
        </div>
      </section>

      {/* Values - Stacked list on mobile */}
      <section className="values-section">
        <div className="section-header">
          <span className="section-label">Our Values</span>
          <h2>What We Stand For</h2>
        </div>
        <div className="values-container">
          {values.map((value, i) => (
            <div key={i} className="value-row">
              <div className="value-icon">
                <value.icon size={20} />
              </div>
              <div className="value-content">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline - Horizontal scroll on mobile */}
      <section className="timeline-section">
        <div className="section-header">
          <span className="section-label">Our Journey</span>
          <h2>Since 2020</h2>
        </div>
        <div className="timeline-scroll">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-card">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications - Compact */}
      <section className="certs-section">
        <div className="certs-card">
          <div className="certs-header">
            <Shield size={24} className="certs-icon" />
            <div>
              <h3>Trained & Certified</h3>
              <p>Full liability insurance for your peace of mind</p>
            </div>
          </div>
          <div className="certs-list">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-item">
                <CheckCircle2 size={16} />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <h3>Ready to See the Difference?</h3>
          <p>Join 500+ satisfied customers in Pinellas County</p>
          <Link href="/contact" className="btn-primary">
            Get Free Estimate
            <ArrowRight size={18} />
          </Link>
          <a href={`tel:${siteConfig.phoneRaw}`} className="btn-secondary">
            <Phone size={18} />
            {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* Service Areas - Compact */}
      <section className="areas-section">
        <div className="areas-card">
          <div className="areas-header">
            <MapPin size={18} />
            <span>Serving Pinellas County</span>
          </div>
          <div className="areas-tags">
            {siteConfig.serviceAreas.filter(a => a.isPrimary).map((area) => (
              <span key={area.name} className="area-tag featured">{area.name}</span>
            ))}
            {siteConfig.serviceAreas.filter(a => !a.isPrimary).slice(0, 4).map((area) => (
              <span key={area.name} className="area-tag">{area.name}</span>
            ))}
            <span className="area-tag more">+{siteConfig.serviceAreas.length - 8} more</span>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .about-page {
          min-height: 100vh;
          background: #030308;
        }

        /* Hero */
        .about-hero {
          padding: 100px 20px 40px;
          text-align: center;
          background: linear-gradient(180deg, rgba(124, 58, 237, 0.08) 0%, transparent 100%);
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

        .about-hero h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .text-gradient {
          background: linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 15px;
          color: #9ca3af;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        /* Mobile CTA */
        .mobile-cta {
          margin-bottom: 20px;
        }

        .call-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 24px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
        }

        .call-btn svg {
          color: #fff;
        }

        .call-btn div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .call-label {
          font-size: 11px;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .call-number {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }

        .hero-info {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .hero-info span {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #6b7280;
        }

        .hero-info svg {
          color: #7c3aed;
        }

        /* Stats */
        .stats-section {
          padding: 24px 20px 32px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          text-align: center;
        }

        .stat-icon {
          color: #7c3aed;
          margin-bottom: 8px;
        }

        .stat-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 2px;
        }

        .stat-label {
          font-size: 10px;
          color: #6b7280;
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .section-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          color: #a78bfa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .section-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
        }

        /* Story */
        .story-section {
          padding: 32px 20px;
        }

        .story-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 24px 20px;
        }

        .story-card h2 {
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 16px;
        }

        .story-card > p {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .story-image {
          position: relative;
          margin-top: 20px;
        }

        .image-placeholder {
          width: 100%;
          height: 180px;
          background-size: cover;
          background-position: center;
          border-radius: 12px;
        }

        .image-badge {
          position: absolute;
          bottom: -12px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #fff;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);
        }

        /* Values - Stacked list */
        .values-section {
          padding: 40px 20px;
          background: rgba(124, 58, 237, 0.03);
          border-top: 1px solid rgba(124, 58, 237, 0.1);
          border-bottom: 1px solid rgba(124, 58, 237, 0.1);
        }

        .values-container {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          overflow: hidden;
        }

        .value-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .value-row:last-child {
          border-bottom: none;
        }

        .value-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%);
          border-radius: 10px;
          color: #a78bfa;
          flex-shrink: 0;
        }

        .value-content h3 {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .value-content p {
          font-size: 13px;
          color: #9ca3af;
          line-height: 1.4;
        }

        /* Timeline - Horizontal scroll */
        .timeline-section {
          padding: 40px 20px;
        }

        .timeline-scroll {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 16px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .timeline-scroll::-webkit-scrollbar {
          display: none;
        }

        .timeline-card {
          flex: 0 0 140px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
        }

        .timeline-year {
          display: inline-block;
          padding: 4px 10px;
          background: rgba(124, 58, 237, 0.2);
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          color: #a78bfa;
          margin-bottom: 10px;
        }

        .timeline-card h3 {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .timeline-card p {
          font-size: 12px;
          color: #6b7280;
          line-height: 1.4;
        }

        /* Certifications */
        .certs-section {
          padding: 32px 20px;
        }

        .certs-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 20px;
        }

        .certs-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .certs-icon {
          color: #22c55e;
        }

        .certs-header h3 {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 2px;
        }

        .certs-header p {
          font-size: 13px;
          color: #6b7280;
        }

        .certs-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #e5e7eb;
        }

        .cert-item svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 32px 20px;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.05) 100%);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
        }

        .cta-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }

        .cta-card > p {
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 20px;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.35);
          margin-bottom: 12px;
          width: 100%;
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          width: 100%;
        }

        /* Service Areas */
        .areas-section {
          padding: 0 20px 60px;
        }

        .areas-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 16px;
        }

        .areas-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: #a78bfa;
          font-size: 14px;
          font-weight: 600;
        }

        .areas-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .area-tag {
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          font-size: 12px;
          color: #9ca3af;
        }

        .area-tag.featured {
          background: rgba(124, 58, 237, 0.1);
          border-color: rgba(124, 58, 237, 0.3);
          color: #a78bfa;
        }

        .area-tag.more {
          background: transparent;
          border-style: dashed;
          color: #6b7280;
        }

        /* Desktop Responsive */
        @media (min-width: 640px) {
          .about-hero {
            padding: 140px 24px 60px;
          }

          .about-hero h1 {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 17px;
          }

          .mobile-cta {
            display: none;
          }

          .stats-grid {
            gap: 16px;
          }

          .stat-item {
            padding: 24px 16px;
          }

          .stat-value {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 13px;
          }

          .story-card {
            padding: 32px;
          }

          .image-placeholder {
            height: 280px;
          }

          .values-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .value-row {
            padding: 20px;
          }

          .value-row:nth-child(odd) {
            border-right: 1px solid rgba(255, 255, 255, 0.06);
          }

          .value-row:nth-child(1),
          .value-row:nth-child(2) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }

          .value-row:nth-child(3),
          .value-row:nth-child(4) {
            border-bottom: none;
          }

          .timeline-scroll {
            justify-content: center;
          }

          .timeline-card {
            flex: 0 0 180px;
          }

          .certs-card {
            padding: 28px;
          }

          .cta-card {
            padding: 40px;
          }

          .btn-primary,
          .btn-secondary {
            width: auto;
            display: inline-flex;
          }

          .btn-primary {
            margin-right: 12px;
            margin-bottom: 0;
          }
        }

        @media (min-width: 1024px) {
          .about-hero h1 {
            font-size: 3rem;
          }

          .stats-section {
            max-width: 900px;
            margin: 0 auto;
          }

          .story-section {
            max-width: 900px;
            margin: 0 auto;
          }

          .story-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
          }

          .story-card .section-label,
          .story-card h2,
          .story-card > p {
            grid-column: 1;
          }

          .story-image {
            grid-column: 2;
            grid-row: 1 / span 4;
            margin-top: 0;
          }

          .image-placeholder {
            height: 320px;
          }

          .values-section {
            padding: 60px 24px;
          }

          .values-container {
            max-width: 900px;
            margin: 0 auto;
            grid-template-columns: repeat(4, 1fr);
          }

          .value-row {
            flex-direction: column;
            text-align: center;
            padding: 24px 16px;
            border-right: 1px solid rgba(255, 255, 255, 0.06);
            border-bottom: none !important;
          }

          .value-row:last-child {
            border-right: none;
          }

          .value-icon {
            margin-bottom: 12px;
          }

          .timeline-section {
            max-width: 900px;
            margin: 0 auto;
          }

          .certs-section,
          .cta-section {
            max-width: 700px;
            margin: 0 auto;
          }

          .areas-section {
            max-width: 700px;
            margin: 0 auto;
          }
        }
      `}</style>
    </main>
  );
}
