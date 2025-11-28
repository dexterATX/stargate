"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Home,
  Car,
  Shield,
  Waves,
  TreeDeciduous,
  Building2,
  Check,
  ArrowRight,
  Phone,
  Clock,
  Award,
  Droplets,
  Sparkles,
  Leaf,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "house-washing",
    icon: Home,
    title: "House Washing",
    subtitle: "Soft Wash Technology",
    description:
      "Restore your home's beauty with our gentle soft wash technique. We safely remove dirt, mildew, algae, and pollutants without damaging your siding, paint, or landscaping.",
    benefits: [
      "Safe for all siding types",
      "Removes mold & mildew",
      "Extends paint life",
      "Improves curb appeal",
    ],
    price: "From $199",
    image: "/images/houseafter.png",
  },
  {
    id: "driveway-cleaning",
    icon: Car,
    title: "Driveway & Concrete Cleaning",
    subtitle: "High-Pressure Surface Cleaning",
    description:
      "Eliminate oil stains, tire marks, rust, and years of built-up grime from your driveway, sidewalks, and patios. Our surface cleaners ensure even, streak-free results.",
    benefits: [
      "Oil & rust stain removal",
      "Even, uniform cleaning",
      "Prevents slip hazards",
      "Boosts property value",
    ],
    price: "From $149",
    image: "/images/sidingafter.png",
  },
  {
    id: "roof-cleaning",
    icon: Shield,
    title: "Roof Cleaning",
    subtitle: "Low-Pressure Soft Wash",
    description:
      "Protect your roof investment with our specialized soft wash treatment. We safely eliminate black streaks, algae, and moss that can damage shingles and reduce your home's efficiency.",
    benefits: [
      "Extends roof lifespan",
      "Removes black streaks",
      "No high-pressure damage",
      "Insurance approved",
    ],
    price: "From $299",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "pool-deck",
    icon: Waves,
    title: "Pool Deck Cleaning",
    subtitle: "Non-Slip Surface Treatment",
    description:
      "Make your pool area safe and inviting again. We remove algae, calcium deposits, and slip hazards while protecting your deck's finish and surrounding landscape.",
    benefits: [
      "Reduces slip hazards",
      "Removes algae & mold",
      "Safe for pavers",
      "Pool-safe products",
    ],
    price: "From $179",
    image: "/images/poolAfter.png",
  },
  {
    id: "fence-cleaning",
    icon: TreeDeciduous,
    title: "Fence & Deck Cleaning",
    subtitle: "Wood, Vinyl & Composite",
    description:
      "Revitalize your outdoor living spaces. Our tailored approach handles wood, vinyl, and composite materials, removing weathering, green algae, and gray oxidation.",
    benefits: [
      "Restores natural color",
      "Prep for staining/sealing",
      "All material types",
      "Extends fence life",
    ],
    price: "From $99",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Services",
    subtitle: "Business & Property Management",
    description:
      "First impressions matter. We serve storefronts, restaurants, HOAs, property managers, and commercial buildings with flexible scheduling and competitive pricing.",
    benefits: [
      "Flexible scheduling",
      "Monthly contracts available",
      "Multi-property discounts",
      "Fully insured",
    ],
    price: "Custom Quote",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Free Estimate",
    description: "Call or fill out our form for a no-obligation quote within 24 hours.",
    icon: Phone,
  },
  {
    step: 2,
    title: "Schedule Service",
    description: "Pick a time that works for you. Same-week availability in most cases.",
    icon: Clock,
  },
  {
    step: 3,
    title: "Expert Cleaning",
    description: "Our trained technicians arrive on time with professional equipment.",
    icon: Droplets,
  },
  {
    step: 4,
    title: "100% Satisfaction",
    description: "We walk through the results with you. Not happy? We'll make it right.",
    icon: Award,
  },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-animate"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    }

    // Service cards animation
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll(".service-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
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
    <main className="services-page">
      {/* Hero */}
      <section ref={heroRef} className="services-hero">
        <div className="hero-content">
          <span className="hero-animate hero-badge">
            <Sparkles size={14} />
            Professional Cleaning Services
          </span>
          <h1 className="hero-animate">
            Pressure Washing Services in{" "}
            <span className="text-gradient">Pinellas County</span>
          </h1>
          <p className="hero-animate">
            From house washing to commercial properties, we deliver exceptional results
            with eco-friendly solutions and industry-leading equipment.
          </p>
          <div className="hero-animate hero-ctas">
            <Link href="/contact" className="btn-primary">
              Get Free Quote
              <ArrowRight size={18} />
            </Link>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-secondary">
              <Phone size={18} />
              {siteConfig.phone}
            </a>
          </div>
          <div className="hero-animate hero-trust">
            <div className="trust-item">
              <Check size={16} />
              Licensed & Insured
            </div>
            <div className="trust-item">
              <Check size={16} />
              5-Star Rated
            </div>
            <div className="trust-item">
              <Check size={16} />
              Same Week Service
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="services-grid">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2>What We Clean</h2>
          <p>Professional solutions for every surface around your property</p>
        </div>

        <div className="grid">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="service-card">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="card-overlay" />
                <span className="card-price">{service.price}</span>
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <service.icon size={24} />
                </div>
                <div className="card-header">
                  <h3>{service.title}</h3>
                  <span className="card-subtitle">{service.subtitle}</span>
                </div>
                <p className="card-description">{service.description}</p>
                <ul className="card-benefits">
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>
                      <Check size={14} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="card-cta">
                  Request Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2>Simple 4-Step Process</h2>
          <p>Getting your property cleaned has never been easier</p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.step} className="process-step">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">
                <step.icon size={24} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="why-content">
          <div className="why-text">
            <span className="section-label">Why Stargate?</span>
            <h2>The Difference Is in the Details</h2>
            <ul className="why-list">
              <li>
                <Leaf size={20} />
                <div>
                  <strong>Eco-Friendly Products</strong>
                  <span>Safe for your family, pets, and landscaping</span>
                </div>
              </li>
              <li>
                <Award size={20} />
                <div>
                  <strong>Trained Technicians</strong>
                  <span>Certified in soft wash and surface cleaning</span>
                </div>
              </li>
              <li>
                <Shield size={20} />
                <div>
                  <strong>Fully Insured</strong>
                  <span>$1M liability coverage for your peace of mind</span>
                </div>
              </li>
              <li>
                <Clock size={20} />
                <div>
                  <strong>On-Time Guarantee</strong>
                  <span>We show up when we say we will, every time</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="why-cta-box">
            <h3>Ready to Transform Your Property?</h3>
            <p>
              Get a free, no-obligation quote in minutes. Most estimates provided
              same-day.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Free Quote
              <ArrowRight size={18} />
            </Link>
            <span className="cta-note">No payment required until service is complete</span>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="areas-section">
        <div className="section-header">
          <span className="section-label">Service Areas</span>
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
        .services-page {
          min-height: 100vh;
          background: #030308;
        }

        /* Hero */
        .services-hero {
          padding: 140px 24px 80px;
          text-align: center;
          background: linear-gradient(
            180deg,
            rgba(124, 58, 237, 0.08) 0%,
            transparent 100%
          );
        }

        .hero-content {
          max-width: 800px;
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

        .services-hero h1 {
          font-size: 2.75rem;
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

        .services-hero p {
          font-size: 17px;
          color: #9ca3af;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-ctas {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
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
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .hero-trust {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #6b7280;
        }

        .trust-item svg {
          color: #22c55e;
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 48px;
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
          font-size: 2.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .section-header p {
          font-size: 16px;
          color: #6b7280;
          max-width: 500px;
          margin: 0 auto;
        }

        /* Services Grid */
        .services-grid {
          padding: 60px 24px 80px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s;
        }

        .service-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-4px);
        }

        .card-image {
          position: relative;
          height: 200px;
          background-size: cover;
          background-position: center;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(3, 3, 8, 0.8) 100%
          );
        }

        .card-price {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 6px 12px;
          background: rgba(124, 58, 237, 0.9);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
        }

        .card-content {
          padding: 24px;
        }

        .card-icon {
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

        .card-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .card-subtitle {
          font-size: 13px;
          color: #7c3aed;
          font-weight: 500;
        }

        .card-description {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.6;
          margin: 16px 0;
        }

        .card-benefits {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .card-benefits li {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #6b7280;
        }

        .card-benefits svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        .card-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: #a78bfa;
          text-decoration: none;
          transition: gap 0.2s;
        }

        .card-cta:hover {
          gap: 10px;
        }

        /* Process Section */
        .process-section {
          padding: 80px 24px;
          background: rgba(124, 58, 237, 0.03);
          border-top: 1px solid rgba(124, 58, 237, 0.1);
          border-bottom: 1px solid rgba(124, 58, 237, 0.1);
        }

        .process-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .process-step {
          text-align: center;
          padding: 32px 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          position: relative;
        }

        .step-number {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #7c3aed;
          border-radius: 50%;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
        }

        .step-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(124, 58, 237, 0.1);
          border-radius: 14px;
          color: #a78bfa;
          margin: 0 auto 16px;
        }

        .process-step h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }

        .process-step p {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.5;
        }

        /* Why Section */
        .why-section {
          padding: 80px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .why-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .why-text h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 24px;
        }

        .why-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .why-list li {
          display: flex;
          gap: 16px;
        }

        .why-list li svg {
          flex-shrink: 0;
          color: #7c3aed;
          margin-top: 2px;
        }

        .why-list strong {
          display: block;
          font-size: 15px;
          color: #fff;
          margin-bottom: 4px;
        }

        .why-list span {
          font-size: 14px;
          color: #6b7280;
        }

        .why-cta-box {
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.15) 0%,
            rgba(124, 58, 237, 0.05) 100%
          );
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 20px;
          padding: 40px 32px;
          text-align: center;
        }

        .why-cta-box h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }

        .why-cta-box > p {
          font-size: 15px;
          color: #9ca3af;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .cta-note {
          display: block;
          margin-top: 16px;
          font-size: 13px;
          color: #6b7280;
        }

        /* Service Areas */
        .areas-section {
          padding: 60px 24px 100px;
          max-width: 1000px;
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
          .services-hero h1 {
            font-size: 3.25rem;
          }

          .hero-ctas {
            flex-direction: row;
            justify-content: center;
          }

          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-hero h1 {
            font-size: 3.5rem;
          }

          .grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .process-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .why-content {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }

          .why-cta-box {
            position: sticky;
            top: 100px;
          }
        }
      `}</style>
    </main>
  );
}

