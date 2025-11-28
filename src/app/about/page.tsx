"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Shield,
  Award,
  Users,
  Heart,
  Leaf,
  Clock,
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
  { value: "100%", label: "Satisfaction Rate", icon: Target },
];

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description:
      "We never cut corners. Every job gets our full attention with professional-grade equipment and proven techniques.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "Your property is treated like our own. We communicate clearly, show up on time, and leave your space spotless.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Our cleaning solutions are biodegradable and safe for your family, pets, and landscaping.",
  },
  {
    icon: Award,
    title: "Guaranteed Results",
    description:
      "Not satisfied? We'll re-clean the area at no charge. Your happiness is our reputation.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "Founded in Seminole",
    description:
      "Started with a truck, a pressure washer, and a commitment to do things right.",
  },
  {
    year: "2021",
    title: "Expanded Services",
    description:
      "Added soft wash capabilities and roof cleaning to serve more homeowners.",
  },
  {
    year: "2022",
    title: "Commercial Contracts",
    description:
      "Began serving local businesses, HOAs, and property management companies.",
  },
  {
    year: "2023",
    title: "Team Growth",
    description:
      "Hired additional certified technicians to meet growing demand across Pinellas.",
  },
  {
    year: "2024",
    title: "500+ Customers",
    description:
      "Reached a milestone of 500+ satisfied residential and commercial customers.",
  },
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
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-animate"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    }

    // Stats counter animation
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll(".stat-value");
      statItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
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
            Seminole&apos;s Trusted{" "}
            <span className="text-gradient">Pressure Washing</span> Team
          </h1>
          <p className="hero-animate">
            Family-owned and operated since 2020. We&apos;re not just cleaning
            surfaces—we&apos;re restoring pride in your property, one job at a time.
          </p>
          <div className="hero-animate hero-info">
            <span>
              <MapPin size={16} />
              Based in Seminole, FL
            </span>
            <span>
              <Calendar size={16} />
              Est. {siteConfig.foundingYear}
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <stat.icon size={24} className="stat-icon" />
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
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
            <p>
              From our first driveway cleaning in 2020 to serving hundreds of homes
              and businesses across Pinellas County, our mission hasn&apos;t changed:
              deliver results that make you proud to come home.
            </p>
          </div>
          <div className="story-image">
            <div
              className="image-placeholder"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80)",
              }}
            />
            <div className="image-badge">
              <CheckCircle2 size={20} />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="section-header">
          <span className="section-label">Our Values</span>
          <h2>What We Stand For</h2>
          <p>The principles that guide every job we take on</p>
        </div>
        <div className="values-grid">
          {values.map((value, i) => (
            <div key={i} className="value-card">
              <div className="value-icon">
                <value.icon size={24} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="section-header">
          <span className="section-label">Our Journey</span>
          <h2>Building Trust Since 2020</h2>
        </div>
        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">{item.year}</span>
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      {/* Service Areas */}
      <section className="areas-section">
        <div className="section-header">
          <span className="section-label">Where We Work</span>
          <h2>Proudly Serving Pinellas County</h2>
        </div>
        <div className="areas-grid">
          {siteConfig.serviceAreas.map((area) => (
            <span key={area} className="area-tag">
              {area}
            </span>
          ))}
        </div>
      </section>

      <style jsx global>{`
        .about-page {
          min-height: 100vh;
          background: #030308;
        }

        /* Hero */
        .about-hero {
          padding: 140px 24px 60px;
          text-align: center;
          background: linear-gradient(
            180deg,
            rgba(124, 58, 237, 0.08) 0%,
            transparent 100%
          );
        }

        .hero-content {
          max-width: 700px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: #a78bfa;
          margin-bottom: 24px;
        }

        .about-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
        }

        .text-gradient {
          background: linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-hero p {
          font-size: 17px;
          color: #9ca3af;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .hero-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .hero-info span {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #6b7280;
        }

        .hero-info svg {
          color: #7c3aed;
        }

        /* Stats */
        .stats-section {
          padding: 40px 24px 60px;
          max-width: 900px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          text-align: center;
        }

        .stat-icon {
          color: #7c3aed;
          margin-bottom: 12px;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 13px;
          color: #6b7280;
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          color: #a78bfa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .section-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }

        .section-header p {
          font-size: 15px;
          color: #6b7280;
        }

        /* Story */
        .story-section {
          padding: 60px 24px 80px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .story-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .story-text h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
        }

        .story-text p {
          font-size: 15px;
          color: #9ca3af;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .story-image {
          position: relative;
        }

        .image-placeholder {
          width: 100%;
          height: 300px;
          background-size: cover;
          background-position: center;
          border-radius: 16px;
        }

        .image-badge {
          position: absolute;
          bottom: -16px;
          left: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.4);
        }

        /* Values */
        .values-section {
          padding: 80px 24px;
          background: rgba(124, 58, 237, 0.03);
          border-top: 1px solid rgba(124, 58, 237, 0.1);
          border-bottom: 1px solid rgba(124, 58, 237, 0.1);
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
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

        .value-icon {
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

        /* Timeline */
        .timeline-section {
          padding: 80px 24px;
          max-width: 700px;
          margin: 0 auto;
        }

        .timeline {
          position: relative;
          padding-left: 32px;
        }

        .timeline::before {
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

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -32px;
          top: 0;
        }

        .timeline-year {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 14px;
          height: 14px;
          background: #7c3aed;
          border-radius: 50%;
          font-size: 0;
        }

        .timeline-content h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .timeline-content h3::before {
          content: attr(data-year);
        }

        .timeline-item .timeline-content::before {
          content: "";
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #7c3aed;
          margin-bottom: 4px;
        }

        .timeline-item:nth-child(1) .timeline-content::before {
          content: "2020";
        }
        .timeline-item:nth-child(2) .timeline-content::before {
          content: "2021";
        }
        .timeline-item:nth-child(3) .timeline-content::before {
          content: "2022";
        }
        .timeline-item:nth-child(4) .timeline-content::before {
          content: "2023";
        }
        .timeline-item:nth-child(5) .timeline-content::before {
          content: "2024";
        }

        .timeline-content p {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.5;
        }

        /* Certifications */
        .certs-section {
          padding: 80px 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .certs-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .certs-text h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 16px;
        }

        .certs-text > p {
          font-size: 15px;
          color: #9ca3af;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .certs-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .certs-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #e5e7eb;
        }

        .certs-list svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        .certs-cta {
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.15) 0%,
            rgba(124, 58, 237, 0.05) 100%
          );
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
        }

        .certs-cta h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .certs-cta > p {
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.35);
          margin-bottom: 12px;
          width: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(124, 58, 237, 0.5);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          transition: all 0.2s;
          width: 100%;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Service Areas */
        .areas-section {
          padding: 60px 24px 100px;
          max-width: 900px;
          margin: 0 auto;
        }

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

        /* Responsive */
        @media (min-width: 640px) {
          .about-hero h1 {
            font-size: 3rem;
          }

          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .certs-cta {
            padding: 40px 32px;
          }

          .btn-primary,
          .btn-secondary {
            width: auto;
          }
        }

        @media (min-width: 1024px) {
          .about-hero h1 {
            font-size: 3.25rem;
          }

          .story-content {
            grid-template-columns: 1fr 1fr;
            align-items: center;
          }

          .image-placeholder {
            height: 400px;
          }

          .values-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .certs-content {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }

          .certs-cta {
            position: sticky;
            top: 100px;
          }
        }
      `}</style>
    </main>
  );
}

