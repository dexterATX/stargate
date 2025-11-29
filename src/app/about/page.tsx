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
import { SectionDivider } from "@/components/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "500+", label: "Happy Customers", shortLabel: "Customers", icon: Users },
  { value: "4.9", label: "Star Rating", shortLabel: "Rating", icon: Star },
  { value: "5+", label: "Years Experience", shortLabel: "Years", icon: Calendar },
  { value: "100%", label: "Satisfaction Rate", shortLabel: "Satisfaction", icon: Target },
];

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We never cut corners. Every job gets our full attention with professional-grade equipment and proven techniques.",
    shortDesc: "Professional-grade equipment on every job.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Your property is treated like our own. We communicate clearly, show up on time, and leave your space spotless.",
    shortDesc: "On time, respectful, thorough.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Our cleaning solutions are biodegradable and safe for your family, pets, and landscaping.",
    shortDesc: "Safe for family, pets & plants.",
  },
  {
    icon: Award,
    title: "Guaranteed Results",
    description: "Not satisfied? We'll re-clean the area at no charge. Your happiness is our reputation.",
    shortDesc: "Not satisfied? Free re-clean.",
  },
];

const timeline = [
  { year: "2020", title: "Founded in Seminole", shortTitle: "Founded", description: "Started with a truck, a pressure washer, and a commitment to do things right.", shortDesc: "Started in Seminole" },
  { year: "2021", title: "Expanded Services", shortTitle: "Expanded", description: "Added soft wash capabilities and roof cleaning to serve more homeowners.", shortDesc: "Added soft wash" },
  { year: "2022", title: "Commercial Contracts", shortTitle: "Commercial", description: "Began serving local businesses, HOAs, and property management companies.", shortDesc: "Serving businesses" },
  { year: "2023", title: "Team Growth", shortTitle: "Team Growth", description: "Hired additional certified technicians to meet growing demand across Pinellas.", shortDesc: "More technicians" },
  { year: "2024", title: "500+ Customers", shortTitle: "500+", description: "Reached a milestone of 500+ satisfied residential and commercial customers.", shortDesc: "Happy customers" },
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
          stagger: 0.08,
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
      {/* Hero */}
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
            Family-owned and operated since 2020. We&apos;re not just cleaning
            surfaces—we&apos;re restoring pride in your property, one job at a time.
          </p>
          
          {/* Mobile CTA */}
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
            <span><MapPin size={16} /> Based in Seminole, FL</span>
            <span><Calendar size={16} /> Est. {siteConfig.foundingYear}</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <stat.icon className="stat-icon" />
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-label-mobile">{stat.shortLabel}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Story */}
      <section className="story-section">
        <div className="story-content">
          <div className="story-text">
            <span className="section-label">Who We Are</span>
            <h2>More Than Just a Cleaning Company</h2>
            <p>
              Stargate Pressure Washing was born from a simple belief: homeowners
              deserve honest, high-quality exterior cleaning without the runaround.
              Too many companies show up late, use harsh chemicals, or disappear
              before the job is done right.
            </p>
            <p>
              We do things differently. Every estimate is straightforward—no hidden
              fees, no upselling. Every technician is trained, background-checked,
              and treats your property with respect. And every job comes with our
              satisfaction guarantee.
            </p>
            <p className="desktop-only">
              From our first driveway cleaning in 2020 to serving hundreds of homes
              and businesses across Pinellas County, our mission hasn&apos;t changed:
              deliver results that make you proud to come home.
            </p>
          </div>
          <div className="story-image">
            <div
              className="image-placeholder"
              style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80)",
              }}
            />
            <div className="image-badge">
              <CheckCircle2 size={20} />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Values */}
      <section className="values-section">
        <div className="section-header">
          <span className="section-label">Our Values</span>
          <h2>What We Stand For</h2>
          <p className="desktop-only">The principles that guide every job we take on</p>
        </div>
        
        {/* Mobile Values - Stacked list */}
        <div className="values-mobile">
          {values.map((value, i) => (
            <div key={i} className="value-row">
              <div className="value-icon">
                <value.icon size={18} />
              </div>
              <div className="value-content">
                <h3>{value.title}</h3>
                <p>{value.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Values - Cards */}
        <div className="values-desktop">
          {values.map((value, i) => (
            <div key={i} className="value-card">
              <div className="value-icon-lg">
                <value.icon size={24} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Timeline */}
      <section className="timeline-section">
        <div className="section-header">
          <span className="section-label">Our Journey</span>
          <h2>Building Trust Since 2020</h2>
        </div>
        
        {/* Mobile Timeline - Horizontal scroll */}
        <div className="timeline-mobile">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-card-mobile">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.shortTitle}</h3>
              <p>{item.shortDesc}</p>
            </div>
          ))}
        </div>

        {/* Desktop Timeline - Vertical */}
        <div className="timeline-desktop">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <span className="timeline-year-desktop">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Certifications */}
      <section className="certs-section">
        <div className="certs-content">
          <div className="certs-text">
            <span className="section-label">Credentials</span>
            <h2>Trained, Certified & Insured</h2>
            <p>
              We invest in ongoing training and carry full liability insurance so
              you can have peace of mind when we&apos;re on your property.
            </p>
            <ul className="certs-list">
              {certifications.map((cert, i) => (
                <li key={i}>
                  <CheckCircle2 size={18} />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div className="certs-cta">
            <h3>Ready to See the Difference?</h3>
            <p>
              Join 500+ satisfied customers across Pinellas County. Get your free
              estimate today.
            </p>
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

      <SectionDivider />

      {/* Service Areas */}
      <section className="areas-section">
        {/* Mobile - Compact bar */}
        <div className="areas-mobile">
          <MapPin size={16} />
          <span className="areas-label">Serving:</span>
          <span className="areas-text">
            {siteConfig.serviceAreas.filter(a => a.isPrimary).map(a => a.name).join(" · ")}
          </span>
        </div>

        {/* Desktop - Full section */}
        <div className="areas-desktop">
          <div className="section-header">
            <span className="section-label">Where We Work</span>
            <h2>Proudly Serving Pinellas County</h2>
          </div>
          <div className="areas-grid">
            {siteConfig.serviceAreas.map((area) => (
              <span key={area.name} className="area-tag">
                {area.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .about-page {
          min-height: 100vh;
          background: #030308;
        }

        .desktop-only { display: none; }

        /* ==================== MOBILE STYLES ==================== */
        
        /* Hero */
        .about-hero {
          padding: 90px 16px 28px;
          text-align: center;
          background: linear-gradient(180deg, rgba(124, 58, 237, 0.06) 0%, transparent 100%);
        }

        .hero-content {
          max-width: 500px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 500;
          color: #a78bfa;
          margin-bottom: 12px;
        }

        .about-hero h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
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
          line-height: 1.4;
          margin-bottom: 16px;
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
          gap: 14px;
        }

        .hero-info span {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: #6b7280;
        }

        .hero-info svg { color: #7c3aed; }

        /* Stats - Mobile */
        .stats-section {
          padding: 20px 16px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 12px 6px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          text-align: center;
        }

        .stat-icon {
          width: 18px;
          height: 18px;
          color: #7c3aed;
          margin-bottom: 6px;
        }

        .stat-value {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 2px;
        }

        .stat-label { display: none; }

        .stat-label-mobile {
          font-size: 9px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 16px;
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
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
        }

        .section-header p {
          font-size: 15px;
          color: #6b7280;
        }

        /* Story - Mobile */
        .story-section {
          padding: 20px 16px;
        }

        .story-content {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 20px 16px;
        }

        .story-text h2 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }

        .story-text p {
          font-size: 13px;
          color: #9ca3af;
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .story-image {
          position: relative;
          margin-top: 16px;
        }

        .image-placeholder {
          width: 100%;
          height: 140px;
          background-size: cover;
          background-position: center;
          border-radius: 10px;
        }

        .image-badge {
          position: absolute;
          bottom: -10px;
          left: 12px;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #fff;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);
        }

        .image-badge svg { width: 14px; height: 14px; }

        /* Values - Mobile */
        .values-section {
          padding: 20px 16px;
        }

        .values-mobile {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          overflow: hidden;
        }

        .values-desktop { display: none; }

        .value-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .value-row:last-child { border-bottom: none; }

        .value-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%);
          border-radius: 8px;
          color: #a78bfa;
          flex-shrink: 0;
        }

        .value-content h3 {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 2px;
        }

        .value-content p {
          font-size: 12px;
          color: #9ca3af;
          line-height: 1.3;
        }

        /* Timeline - Mobile */
        .timeline-section {
          padding: 20px 16px;
        }

        .timeline-mobile {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 8px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .timeline-mobile::-webkit-scrollbar { display: none; }

        .timeline-card-mobile {
          flex: 0 0 110px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
        }

        .timeline-year {
          display: inline-block;
          padding: 3px 8px;
          background: rgba(124, 58, 237, 0.2);
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          color: #a78bfa;
          margin-bottom: 8px;
        }

        .timeline-card-mobile h3 {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 2px;
        }

        .timeline-card-mobile p {
          font-size: 11px;
          color: #6b7280;
          line-height: 1.3;
        }

        .timeline-desktop { display: none; }

        /* Certifications - Mobile */
        .certs-section {
          padding: 20px 16px;
        }

        .certs-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .certs-text h2 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .certs-text > p {
          font-size: 13px;
          color: #9ca3af;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .certs-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .certs-list li {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #e5e7eb;
        }

        .certs-list svg {
          color: #22c55e;
          flex-shrink: 0;
          width: 14px;
          height: 14px;
        }

        .certs-cta {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.05) 100%);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 14px;
          padding: 24px 16px;
          text-align: center;
        }

        .certs-cta h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .certs-cta > p {
          font-size: 13px;
          color: #9ca3af;
          margin-bottom: 16px;
          line-height: 1.4;
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
          margin-bottom: 10px;
          width: 100%;
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
          width: 100%;
        }

        /* Service Areas - Mobile */
        .areas-section {
          padding: 16px 16px 40px;
        }

        .areas-mobile {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          flex-wrap: wrap;
        }

        .areas-mobile svg { color: #7c3aed; flex-shrink: 0; }

        .areas-label {
          font-size: 12px;
          font-weight: 600;
          color: #a78bfa;
        }

        .areas-text {
          font-size: 12px;
          color: #9ca3af;
        }

        .areas-desktop { display: none; }

        /* ==================== DESKTOP STYLES (640px+) ==================== */
        @media (min-width: 640px) {
          .desktop-only { display: block; }

          .about-hero {
            padding: 140px 24px 60px;
          }

          .hero-badge {
            padding: 8px 16px;
            font-size: 13px;
            margin-bottom: 24px;
          }

          .about-hero h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }

          .hero-subtitle {
            font-size: 17px;
            line-height: 1.7;
            margin-bottom: 24px;
          }

          .mobile-cta { display: none; }

          .hero-info {
            gap: 20px;
          }

          .hero-info span {
            font-size: 14px;
            gap: 8px;
          }

          /* Stats Desktop */
          .stats-section {
            padding: 40px 24px 60px;
            max-width: 900px;
            margin: 0 auto;
          }

          .stats-grid {
            gap: 16px;
          }

          .stat-item {
            padding: 24px 16px;
            border-radius: 14px;
          }

          .stat-icon {
            width: 24px;
            height: 24px;
            margin-bottom: 12px;
          }

          .stat-value {
            font-size: 2rem;
            margin-bottom: 4px;
          }

          .stat-label {
            display: block;
            font-size: 13px;
            color: #6b7280;
          }

          .stat-label-mobile { display: none; }

          /* Section Headers Desktop */
          .section-header {
            margin-bottom: 40px;
          }

          .section-label {
            font-size: 12px;
            margin-bottom: 12px;
          }

          .section-header h2 {
            font-size: 2rem;
            margin-bottom: 12px;
          }

          /* Story Desktop */
          .story-section {
            padding: 60px 24px 80px;
            max-width: 1100px;
            margin: 0 auto;
          }

          .story-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
            background: transparent;
            border: none;
            padding: 0;
          }

          .story-text h2 {
            font-size: 1.75rem;
            margin-bottom: 20px;
          }

          .story-text p {
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 16px;
          }

          .story-image {
            margin-top: 0;
          }

          .image-placeholder {
            height: 400px;
            border-radius: 16px;
          }

          .image-badge {
            bottom: -16px;
            left: 20px;
            padding: 12px 20px;
            border-radius: 10px;
            font-size: 14px;
            gap: 8px;
          }

          .image-badge svg { width: 20px; height: 20px; }

          /* Values Desktop */
          .values-section {
            padding: 80px 24px;
            background: rgba(124, 58, 237, 0.03);
            border-top: 1px solid rgba(124, 58, 237, 0.1);
            border-bottom: 1px solid rgba(124, 58, 237, 0.1);
          }

          .values-mobile { display: none; }

          .values-desktop {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            max-width: 1000px;
            margin: 0 auto;
          }

          .value-card {
            padding: 28px 24px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 14px;
            transition: all 0.3s;
          }

          .value-card:hover {
            border-color: rgba(124, 58, 237, 0.3);
            transform: translateY(-4px);
          }

          .value-icon-lg {
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(124, 58, 237, 0.15);
            border-radius: 12px;
            color: #a78bfa;
            margin-bottom: 16px;
          }

          .value-card h3 {
            font-size: 1.1rem;
            font-weight: 600;
            color: #fff;
            margin-bottom: 8px;
          }

          .value-card p {
            font-size: 14px;
            color: #9ca3af;
            line-height: 1.6;
          }

          /* Timeline Desktop */
          .timeline-section {
            padding: 80px 24px;
            max-width: 700px;
            margin: 0 auto;
          }

          .timeline-mobile { display: none; }

          .timeline-desktop {
            display: block;
            position: relative;
            padding-left: 32px;
          }

          .timeline-desktop::before {
            content: "";
            position: absolute;
            left: 6px;
            top: 8px;
            bottom: 8px;
            width: 2px;
            background: rgba(124, 58, 237, 0.3);
          }

          .timeline-item {
            position: relative;
            padding-bottom: 32px;
          }

          .timeline-item:last-child { padding-bottom: 0; }

          .timeline-marker {
            position: absolute;
            left: -32px;
            top: 0;
          }

          .timeline-dot {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 14px;
            height: 14px;
            background: #7c3aed;
            border-radius: 50%;
          }

          .timeline-year-desktop {
            display: block;
            font-size: 12px;
            font-weight: 600;
            color: #7c3aed;
            margin-bottom: 4px;
          }

          .timeline-content h3 {
            font-size: 1rem;
            font-weight: 600;
            color: #fff;
            margin-bottom: 4px;
          }

          .timeline-content p {
            font-size: 14px;
            color: #9ca3af;
            line-height: 1.5;
          }

          /* Certs Desktop */
          .certs-section {
            padding: 80px 24px;
            max-width: 1100px;
            margin: 0 auto;
          }

          .certs-content {
            flex-direction: row;
            gap: 40px;
          }

          .certs-text h2 {
            font-size: 1.75rem;
            margin-bottom: 16px;
          }

          .certs-text > p {
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 24px;
          }

          .certs-list {
            gap: 12px;
          }

          .certs-list li {
            font-size: 14px;
            gap: 10px;
          }

          .certs-list svg {
            width: 18px;
            height: 18px;
          }

          .certs-cta {
            flex-shrink: 0;
            width: 380px;
            padding: 40px 32px;
            border-radius: 20px;
          }

          .certs-cta h3 {
            font-size: 1.35rem;
            margin-bottom: 8px;
          }

          .certs-cta > p {
            font-size: 14px;
            margin-bottom: 24px;
            line-height: 1.5;
          }

          .btn-primary {
            padding: 14px 28px;
            font-size: 15px;
            margin-bottom: 12px;
          }

          .btn-secondary {
            padding: 14px 28px;
            font-size: 15px;
          }

          /* Areas Desktop */
          .areas-section {
            padding: 60px 24px 100px;
            max-width: 900px;
            margin: 0 auto;
          }

          .areas-mobile { display: none; }

          .areas-desktop { display: block; }

          .areas-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
          }

          .area-tag {
            padding: 10px 18px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 100px;
            font-size: 14px;
            color: #9ca3af;
            transition: all 0.2s;
          }

          .area-tag:hover {
            background: rgba(124, 58, 237, 0.1);
            border-color: rgba(124, 58, 237, 0.3);
            color: #a78bfa;
          }
        }

        /* ==================== LARGE DESKTOP (1024px+) ==================== */
        @media (min-width: 1024px) {
          .about-hero h1 {
            font-size: 3.25rem;
          }

          .values-desktop {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </main>
  );
}
