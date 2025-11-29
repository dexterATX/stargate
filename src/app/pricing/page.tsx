"use client";

import { useEffect, useRef, useState } from "react";
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
  BadgePercent,
  Star,
  Zap,
  ChevronDown,
  Sparkles,
  Clock,
  CreditCard,
  Users,
} from "lucide-react";
import { gsap } from "gsap";
import { siteConfig } from "@/config/site";
import { SectionDivider } from "@/components/SectionDivider";

const pricingTiers = [
  {
    id: "house-washing",
    icon: Home,
    title: "House Washing",
    description: "Complete exterior soft wash",
    startingPrice: 199,
    unit: "home",
    features: ["All siding types", "Soft wash technique", "Mold & mildew removal", "Window frames included", "Walkway rinse"],
    popular: true,
    note: "Price varies by sq ft",
  },
  {
    id: "driveway",
    icon: Car,
    title: "Driveway",
    description: "Concrete & paver restoration",
    startingPrice: 149,
    unit: "driveway",
    features: ["Up to 600 sq ft", "Oil stain treatment", "Surface cleaning", "Edge detail work", "Sidewalk included"],
    popular: false,
    note: "$0.20/sq ft over 600",
  },
  {
    id: "roof",
    icon: Shield,
    title: "Roof Cleaning",
    description: "Low-pressure soft wash",
    startingPrice: 299,
    unit: "roof",
    features: ["Shingle safe process", "Black streak removal", "Algae treatment", "Gutter face cleaning", "2-year warranty"],
    popular: false,
    note: "Price by roof size",
  },
  {
    id: "pool-deck",
    icon: Waves,
    title: "Pool Deck",
    description: "Safe pool area cleaning",
    startingPrice: 179,
    unit: "deck",
    features: ["Up to 500 sq ft", "Non-slip treatment", "Algae removal", "Pool-safe products", "Coping cleaning"],
    popular: false,
    note: "$0.25/sq ft over 500",
  },
  {
    id: "fence-deck",
    icon: TreeDeciduous,
    title: "Fence & Deck",
    description: "Wood, vinyl & composite",
    startingPrice: 99,
    unit: "project",
    features: ["Per linear ft pricing", "All material types", "Stain prep available", "Oxidation removal", "Gate care"],
    popular: false,
    note: "Decks by sq ft",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial",
    description: "Businesses & properties",
    startingPrice: null,
    unit: "custom",
    features: ["Storefronts & lots", "Monthly contracts", "Multi-property deals", "After-hours service", "Volume discounts"],
    popular: false,
    note: "Free on-site estimate",
  },
];

const addOns = [
  { name: "Gutter Cleaning", price: "$75+" },
  { name: "Window Cleaning", price: "$5/win" },
  { name: "Patio Furniture", price: "$25" },
  { name: "Trash Can Sanitizing", price: "$15" },
  { name: "Rust Treatment", price: "$25+" },
  { name: "Sealing", price: "Quote" },
];

const faqs = [
  { q: "How do you calculate the final price?", a: "We measure your surfaces and provide an exact quote based on square footage, condition, and any special treatments needed. The prices shown are minimums for typical residential jobs." },
  { q: "Do you offer discounts?", a: "Yes! Bundle 2+ services for 10% off. Seniors (65+), veterans, and first responders get 15% off. Plus $25 referral credits." },
  { q: "Is there a minimum charge?", a: "We have a $99 minimum service charge. There's no trip charge within our Pinellas County service area." },
  { q: "When is payment due?", a: "Payment is due upon completion after you've inspected our work. We accept cash, check, and all major credit cards." },
  { q: "What if I'm not satisfied?", a: "We offer a 100% satisfaction guarantee. If you're not happy, we'll re-clean it at no extra charge." },
];

const trustBadges = [
  { icon: Clock, text: "Same-day quotes" },
  { icon: CreditCard, text: "Pay after service" },
  { icon: Users, text: "500+ customers" },
];

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-animate"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <main className="pricing-page">
      {/* Hero */}
      <section ref={heroRef} className="pricing-hero">
        <div className="hero-content">
          <span className="hero-animate hero-badge">
            <BadgePercent size={14} />
            Transparent Pricing
          </span>
          <h1 className="hero-animate">
            Honest Prices. <span className="text-gradient">No Surprises.</span>
          </h1>
          <p className="hero-animate hero-subtitle">
            Competitive rates with no hidden fees. Every quote includes labor, equipment, and eco-friendly solutions.
          </p>
          
          {/* Mobile CTA */}
          <div className="hero-animate mobile-cta">
            <a href={`tel:${siteConfig.phoneRaw}`} className="call-btn">
              <Phone size={18} />
              <div>
                <span className="call-label">Get Quote Now</span>
                <span className="call-number">{siteConfig.phone}</span>
              </div>
            </a>
          </div>

          {/* Desktop CTAs */}
          <div className="hero-animate desktop-ctas">
            <Link href="/contact" className="btn-primary">
              <Sparkles size={18} />
              Get Exact Quote
            </Link>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-secondary">
              <Phone size={18} />
              {siteConfig.phone}
            </a>
          </div>

          {/* Trust badges */}
          <div className="hero-animate trust-row">
            {trustBadges.map((badge, i) => (
              <div key={i} className="trust-badge">
                <badge.icon size={14} />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="section-header">
          <span className="section-label">Service Pricing</span>
          <h2>Starting Rates</h2>
          <p className="desktop-only">Prices for typical residential properties in Pinellas County</p>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="pricing-scroll">
          {pricingTiers.map((tier) => (
            <article key={tier.id} className={`pricing-card-mobile ${tier.popular ? "popular" : ""}`}>
              {tier.popular && <span className="popular-tag"><Star size={10} /> Popular</span>}
              <div className="card-header">
                <div className="card-icon">
                  <tier.icon size={20} />
                </div>
                <div>
                  <h3>{tier.title}</h3>
                  <p>{tier.description}</p>
                </div>
              </div>
              <div className="card-price">
                {tier.startingPrice ? (
                  <>
                    <span className="price-from">From</span>
                    <span className="price-amount">${tier.startingPrice}</span>
                  </>
                ) : (
                  <span className="price-custom">Custom</span>
                )}
              </div>
              <ul className="card-features">
                {tier.features.slice(0, 3).map((f, i) => (
                  <li key={i}><Check size={12} />{f}</li>
                ))}
              </ul>
              <Link href="/contact" className="card-cta">
                Get Quote <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="pricing-grid">
          {pricingTiers.map((tier) => (
            <article key={tier.id} className={`pricing-card ${tier.popular ? "popular" : ""}`}>
              {tier.popular && <span className="popular-badge"><Star size={12} /> Most Popular</span>}
              <div className="card-icon-lg">
                <tier.icon size={24} />
              </div>
              <h3>{tier.title}</h3>
              <p className="card-desc">{tier.description}</p>
              <div className="card-price-lg">
                {tier.startingPrice ? (
                  <>
                    <span className="price-from">From</span>
                    <span className="price-amount">${tier.startingPrice}</span>
                    <span className="price-unit">/{tier.unit}</span>
                  </>
                ) : (
                  <span className="price-custom">Custom Quote</span>
                )}
              </div>
              <ul className="card-features-lg">
                {tier.features.map((f, i) => (
                  <li key={i}><Check size={14} />{f}</li>
                ))}
              </ul>
              <span className="card-note">{tier.note}</span>
              <Link href="/contact" className="card-cta-lg">
                Get Quote <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Add-Ons */}
      <section className="addons-section">
        <div className="section-header">
          <span className="section-label">Extras</span>
          <h2>Add-On Services</h2>
        </div>
        <div className="addons-container">
          {addOns.map((addon, i) => (
            <div key={i} className="addon-item">
              <span className="addon-name">{addon.name}</span>
              <span className="addon-price">{addon.price}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Discounts */}
      <section className="discounts-section">
        <div className="discount-card">
          <Zap size={24} className="discount-icon" />
          <div className="discount-content">
            <h3>Save More</h3>
            <div className="discount-items">
              <span><strong>10% off</strong> bundle 2+ services</span>
              <span><strong>15% off</strong> seniors/veterans</span>
              <span><strong>$25</strong> referral credit</span>
            </div>
          </div>
          <Link href="/contact" className="discount-cta">
            Claim <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section className="faq-section">
        <div className="section-header">
          <span className="section-label">FAQs</span>
          <h2>Pricing Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${activeFaq === i ? "active" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <span>{faq.q}</span>
                <ChevronDown size={18} className={`faq-chevron ${activeFaq === i ? "rotated" : ""}`} />
              </button>
              <div className={`faq-answer ${activeFaq === i ? "open" : ""}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-card">
          <h2>Ready for Your Free Quote?</h2>
          <p>Get an exact price for your property in minutes</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">
              Request Free Quote
              <ArrowRight size={16} />
            </Link>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-secondary">
              <Phone size={16} />
              {siteConfig.phone}
            </a>
          </div>
          <div className="cta-guarantees">
            <span><Check size={14} /> No payment until complete</span>
            <span><Check size={14} /> 100% satisfaction guarantee</span>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .pricing-page {
          min-height: 100vh;
          background: #030308;
        }

        .desktop-only { display: none; }

        /* ==================== MOBILE ==================== */
        
        /* Hero */
        .pricing-hero {
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

        .pricing-hero h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 8px;
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
        .call-btn div { display: flex; flex-direction: column; align-items: flex-start; }
        .call-label { font-size: 10px; color: rgba(255,255,255,0.7); text-transform: uppercase; }
        .call-number { font-size: 14px; font-weight: 700; color: #fff; }

        .desktop-ctas { display: none; }

        .trust-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: #6b7280;
        }

        .trust-badge svg { color: #22c55e; }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 16px;
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
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
        }

        .section-header p {
          font-size: 14px;
          color: #6b7280;
          margin-top: 4px;
        }

        /* Pricing - Mobile Scroll */
        .pricing-section {
          padding: 20px 0;
        }

        .pricing-scroll {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 0 16px 16px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .pricing-scroll::-webkit-scrollbar { display: none; }

        .pricing-grid { display: none; }

        .pricing-card-mobile {
          flex: 0 0 200px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 16px;
          position: relative;
        }

        .pricing-card-mobile.popular {
          border-color: rgba(124, 58, 237, 0.4);
          background: rgba(124, 58, 237, 0.05);
        }

        .popular-tag {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          align-items: center;
          gap: 3px;
          padding: 3px 8px;
          background: #7c3aed;
          border-radius: 100px;
          font-size: 9px;
          font-weight: 600;
          color: #fff;
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
        }

        .card-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(124, 58, 237, 0.15);
          border-radius: 8px;
          color: #a78bfa;
          flex-shrink: 0;
        }

        .card-header h3 {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 2px;
        }

        .card-header p {
          font-size: 11px;
          color: #6b7280;
        }

        .card-price {
          margin-bottom: 12px;
        }

        .price-from {
          font-size: 10px;
          color: #6b7280;
          margin-right: 3px;
        }

        .price-amount {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
        }

        .price-custom {
          font-size: 1.1rem;
          font-weight: 600;
          color: #a78bfa;
        }

        .card-features {
          list-style: none;
          padding: 0;
          margin: 0 0 12px;
        }

        .card-features li {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #9ca3af;
          padding: 4px 0;
        }

        .card-features svg { color: #22c55e; flex-shrink: 0; }

        .card-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: 100%;
          padding: 10px;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #a78bfa;
          text-decoration: none;
        }

        .pricing-card-mobile.popular .card-cta {
          background: #7c3aed;
          border-color: #7c3aed;
          color: #fff;
        }

        /* Add-Ons */
        .addons-section {
          padding: 20px 16px;
        }

        .addons-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .addon-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
        }

        .addon-name {
          font-size: 12px;
          color: #e5e7eb;
        }

        .addon-price {
          font-size: 12px;
          font-weight: 600;
          color: #a78bfa;
        }

        /* Discounts */
        .discounts-section {
          padding: 20px 16px;
        }

        .discount-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 20px 16px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.05) 100%);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 14px;
          text-align: center;
        }

        .discount-icon { color: #a78bfa; }

        .discount-content h3 {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .discount-items {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }

        .discount-items span {
          font-size: 11px;
          color: #9ca3af;
          padding: 4px 10px;
          background: rgba(0,0,0,0.3);
          border-radius: 100px;
        }

        .discount-items strong { color: #fff; }

        .discount-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          background: #7c3aed;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
        }

        /* FAQ */
        .faq-section {
          padding: 20px 16px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          overflow: hidden;
        }

        .faq-item.active {
          border-color: rgba(124, 58, 237, 0.3);
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 14px 16px;
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 500;
          color: #e5e7eb;
          text-align: left;
          cursor: pointer;
        }

        .faq-chevron {
          color: #6b7280;
          transition: transform 0.2s;
          flex-shrink: 0;
        }

        .faq-chevron.rotated { transform: rotate(180deg); }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s;
        }

        .faq-answer.open {
          max-height: 200px;
        }

        .faq-answer p {
          padding: 0 16px 14px;
          font-size: 12px;
          color: #9ca3af;
          line-height: 1.5;
        }

        /* Final CTA */
        .final-cta {
          padding: 20px 16px 40px;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.05) 100%);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 14px;
          padding: 24px 16px;
          text-align: center;
        }

        .cta-card h2 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }

        .cta-card > p {
          font-size: 13px;
          color: #9ca3af;
          margin-bottom: 16px;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 16px;
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

        .cta-guarantees {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .cta-guarantees span {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: #6b7280;
        }

        .cta-guarantees svg { color: #22c55e; }

        /* ==================== DESKTOP (640px+) ==================== */
        @media (min-width: 640px) {
          .desktop-only { display: block; }

          .pricing-hero {
            padding: 140px 24px 60px;
          }

          .hero-badge {
            padding: 8px 16px;
            font-size: 13px;
            margin-bottom: 24px;
          }

          .pricing-hero h1 {
            font-size: 2.75rem;
            margin-bottom: 16px;
          }

          .hero-subtitle {
            font-size: 17px;
            line-height: 1.7;
            margin-bottom: 28px;
          }

          .mobile-cta { display: none; }

          .desktop-ctas {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 24px;
          }

          .trust-row {
            gap: 24px;
          }

          .trust-badge {
            font-size: 13px;
            gap: 6px;
          }

          /* Section Headers */
          .section-header {
            margin-bottom: 40px;
          }

          .section-label {
            font-size: 12px;
            margin-bottom: 12px;
          }

          .section-header h2 {
            font-size: 2rem;
            margin-bottom: 8px;
          }

          .section-header p {
            font-size: 15px;
          }

          /* Pricing Grid */
          .pricing-section {
            padding: 50px 24px 80px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .pricing-scroll { display: none; }

          .pricing-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .pricing-card {
            position: relative;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            padding: 28px 24px;
            transition: all 0.3s;
          }

          .pricing-card:hover {
            border-color: rgba(124, 58, 237, 0.3);
            transform: translateY(-4px);
          }

          .pricing-card.popular {
            border-color: rgba(124, 58, 237, 0.4);
            background: rgba(124, 58, 237, 0.05);
          }

          .popular-badge {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 4px 12px;
            background: #7c3aed;
            border-radius: 100px;
            font-size: 11px;
            font-weight: 600;
            color: #fff;
          }

          .card-icon-lg {
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

          .pricing-card h3 {
            font-size: 1.15rem;
            font-weight: 600;
            color: #fff;
            margin-bottom: 4px;
          }

          .card-desc {
            font-size: 13px;
            color: #6b7280;
            margin-bottom: 16px;
          }

          .card-price-lg {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }

          .card-price-lg .price-from {
            font-size: 12px;
            margin-right: 4px;
          }

          .card-price-lg .price-amount {
            font-size: 2rem;
          }

          .price-unit {
            font-size: 14px;
            color: #6b7280;
          }

          .card-price-lg .price-custom {
            font-size: 1.25rem;
          }

          .card-features-lg {
            list-style: none;
            padding: 0;
            margin: 0 0 16px;
          }

          .card-features-lg li {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: #9ca3af;
            padding: 6px 0;
          }

          .card-features-lg svg { color: #22c55e; }

          .card-note {
            display: block;
            font-size: 12px;
            color: #6b7280;
            font-style: italic;
            margin-bottom: 16px;
          }

          .card-cta-lg {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            width: 100%;
            padding: 12px;
            background: rgba(124, 58, 237, 0.15);
            border: 1px solid rgba(124, 58, 237, 0.3);
            border-radius: 10px;
            font-size: 14px;
            font-weight: 600;
            color: #a78bfa;
            text-decoration: none;
            transition: all 0.2s;
          }

          .card-cta-lg:hover {
            background: rgba(124, 58, 237, 0.25);
          }

          .pricing-card.popular .card-cta-lg {
            background: #7c3aed;
            border-color: #7c3aed;
            color: #fff;
          }

          /* Add-Ons */
          .addons-section {
            padding: 60px 24px;
            max-width: 900px;
            margin: 0 auto;
          }

          .addons-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }

          .addon-item {
            padding: 16px 20px;
            border-radius: 10px;
          }

          .addon-name { font-size: 14px; }
          .addon-price { font-size: 14px; }

          /* Discounts */
          .discounts-section {
            padding: 0 24px 60px;
            max-width: 900px;
            margin: 0 auto;
          }

          .discount-card {
            flex-direction: row;
            padding: 28px 32px;
            text-align: left;
            border-radius: 16px;
          }

          .discount-content {
            flex: 1;
          }

          .discount-content h3 {
            font-size: 1.25rem;
            margin-bottom: 8px;
          }

          .discount-items {
            justify-content: flex-start;
            gap: 10px;
          }

          .discount-items span {
            font-size: 13px;
            padding: 6px 14px;
          }

          .discount-cta {
            padding: 12px 24px;
            font-size: 14px;
          }

          /* FAQ */
          .faq-section {
            padding: 60px 24px;
            max-width: 700px;
            margin: 0 auto;
          }

          .faq-list { gap: 12px; }

          .faq-item { border-radius: 12px; }

          .faq-question {
            padding: 18px 20px;
            font-size: 14px;
          }

          .faq-answer p {
            padding: 0 20px 18px;
            font-size: 14px;
            line-height: 1.6;
          }

          /* Final CTA */
          .final-cta {
            padding: 60px 24px 100px;
          }

          .cta-card {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 32px;
            border-radius: 20px;
          }

          .cta-card h2 {
            font-size: 1.75rem;
            margin-bottom: 8px;
          }

          .cta-card > p {
            font-size: 16px;
            margin-bottom: 24px;
          }

          .cta-buttons {
            flex-direction: row;
            justify-content: center;
            gap: 12px;
            margin-bottom: 20px;
          }

          .btn-primary, .btn-secondary {
            padding: 14px 28px;
            font-size: 15px;
          }

          .cta-guarantees {
            gap: 20px;
          }

          .cta-guarantees span {
            font-size: 13px;
          }
        }

        @media (min-width: 1024px) {
          .pricing-hero h1 {
            font-size: 3.25rem;
          }

          .pricing-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </main>
  );
}
