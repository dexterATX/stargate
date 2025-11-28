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
  Calculator,
  BadgePercent,
  Star,
  Zap,
  HelpCircle,
} from "lucide-react";
import { gsap } from "gsap";
import { siteConfig } from "@/config/site";

const pricingTiers = [
  {
    id: "house-washing",
    icon: Home,
    title: "House Washing",
    description: "Complete exterior soft wash",
    startingPrice: 199,
    unit: "home",
    features: [
      "All siding types",
      "Soft wash technique",
      "Mold & mildew removal",
      "Window frames included",
      "Walkway rinse",
    ],
    popular: true,
    note: "Price varies by square footage",
  },
  {
    id: "driveway",
    icon: Car,
    title: "Driveway Cleaning",
    description: "Concrete & paver restoration",
    startingPrice: 149,
    unit: "driveway",
    features: [
      "Up to 600 sq ft",
      "Oil stain treatment",
      "Surface cleaning",
      "Edge detail work",
      "Sidewalk included",
    ],
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
    features: [
      "Shingle safe process",
      "Black streak removal",
      "Algae & moss treatment",
      "Gutter face cleaning",
      "2-year warranty",
    ],
    popular: false,
    note: "Price by roof size & pitch",
  },
  {
    id: "pool-deck",
    icon: Waves,
    title: "Pool Deck",
    description: "Safe pool area cleaning",
    startingPrice: 179,
    unit: "deck",
    features: [
      "Up to 500 sq ft",
      "Non-slip treatment",
      "Algae removal",
      "Pool-safe products",
      "Coping cleaning",
    ],
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
    features: [
      "Per linear ft pricing",
      "All material types",
      "Stain prep available",
      "Oxidation removal",
      "Gate hardware care",
    ],
    popular: false,
    note: "Decks priced by sq ft",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial",
    description: "Businesses & properties",
    startingPrice: null,
    unit: "custom",
    features: [
      "Storefronts & lots",
      "Monthly contracts",
      "Multi-property deals",
      "After-hours service",
      "Volume discounts",
    ],
    popular: false,
    note: "Free on-site estimate",
  },
];

const addOns = [
  { name: "Gutter Cleaning (interior)", price: "$75+" },
  { name: "Window Cleaning (exterior)", price: "$5/window" },
  { name: "Patio Furniture Cleaning", price: "$25" },
  { name: "Trash Can Sanitizing", price: "$15/can" },
  { name: "Rust Stain Treatment", price: "$25+" },
  { name: "Sealing (concrete/pavers)", price: "Quote" },
];

const faqs = [
  {
    q: "How do you calculate the final price?",
    a: "We measure your surfaces and provide an exact quote based on square footage, condition, and any special treatments needed. The prices shown are minimums for typical residential jobs.",
  },
  {
    q: "Do you offer discounts for multiple services?",
    a: "Yes! Bundle 2+ services and save 10%. We also offer 15% off for seniors (65+), veterans, and first responders. Ask about our referral program too.",
  },
  {
    q: "Is there a trip charge or minimum?",
    a: "We have a $99 minimum service charge. There's no trip charge within our Pinellas County service area.",
  },
  {
    q: "When is payment due?",
    a: "Payment is due upon completion after you've inspected our work. We accept cash, check, and all major credit cards.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "We offer a 100% satisfaction guarantee. If you're not happy with any area, we'll re-clean it at no extra charge.",
  },
];

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-animate"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
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
            Honest Prices.{" "}
            <span className="text-gradient">No Surprises.</span>
          </h1>
          <p className="hero-animate">
            See our competitive rates below. Every quote includes all labor, equipment,
            and eco-friendly cleaning solutions. No hidden fees, ever.
          </p>
          <div className="hero-animate hero-ctas">
            <Link href="/contact" className="btn-primary">
              <Calculator size={18} />
              Get Exact Quote
            </Link>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-secondary">
              <Phone size={18} />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pricing-grid">
        <div className="section-header">
          <span className="section-label">Service Pricing</span>
          <h2>Starting Rates</h2>
          <p>Prices based on typical residential properties in Pinellas County</p>
        </div>

        <div className="grid">
          {pricingTiers.map((tier) => (
            <article
              key={tier.id}
              className={`pricing-card ${tier.popular ? "popular" : ""}`}
            >
              {tier.popular && (
                <span className="popular-badge">
                  <Star size={12} /> Most Popular
                </span>
              )}
              <div className="card-icon">
                <tier.icon size={24} />
              </div>
              <h3>{tier.title}</h3>
              <p className="card-description">{tier.description}</p>
              <div className="card-price">
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
              <ul className="card-features">
                {tier.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={14} />
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="card-note">{tier.note}</span>
              <Link href="/contact" className="card-cta">
                Get Quote
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Add-Ons */}
      <section className="addons-section">
        <div className="section-header">
          <span className="section-label">Add-On Services</span>
          <h2>Enhance Your Clean</h2>
          <p>Popular extras to complete your property transformation</p>
        </div>
        <div className="addons-grid">
          {addOns.map((addon, i) => (
            <div key={i} className="addon-item">
              <span className="addon-name">{addon.name}</span>
              <span className="addon-price">{addon.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Discounts Banner */}
      <section className="discounts-section">
        <div className="discounts-content">
          <Zap size={32} className="discounts-icon" />
          <div className="discounts-text">
            <h3>Save More on Your Service</h3>
            <p>
              <strong>10% off</strong> when you bundle 2+ services •{" "}
              <strong>15% off</strong> for seniors, veterans & first responders •{" "}
              <strong>$25 credit</strong> for every referral
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Claim Discount
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="section-header">
          <span className="section-label">FAQs</span>
          <h2>Pricing Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${activeFaq === i ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                aria-expanded={activeFaq === i}
              >
                <HelpCircle size={18} />
                {faq.q}
                <span className="faq-toggle">{activeFaq === i ? "−" : "+"}</span>
              </button>
              {activeFaq === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Ready for Your Free Estimate?</h2>
          <p>
            Get an exact quote for your property in minutes. No obligation, no
            pressure—just honest pricing.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">
              Request Free Quote
              <ArrowRight size={18} />
            </Link>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-secondary">
              <Phone size={18} />
              Call Now
            </a>
          </div>
          <div className="cta-trust">
            <span>
              <Check size={14} /> No payment until complete
            </span>
            <span>
              <Check size={14} /> 100% satisfaction guarantee
            </span>
            <span>
              <Check size={14} /> Same-day quotes available
            </span>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .pricing-page {
          min-height: 100vh;
          background: #030308;
        }

        /* Hero */
        .pricing-hero {
          padding: 140px 24px 70px;
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

        .pricing-hero h1 {
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

        .pricing-hero p {
          font-size: 17px;
          color: #9ca3af;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .hero-ctas {
          display: flex;
          flex-direction: column;
          gap: 12px;
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
          border: none;
          cursor: pointer;
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

        /* Pricing Grid */
        .pricing-grid {
          padding: 50px 24px 80px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
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
          white-space: nowrap;
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

        .pricing-card h3 {
          font-size: 1.15rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .card-description {
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 16px;
        }

        .card-price {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .price-from {
          font-size: 12px;
          color: #6b7280;
          margin-right: 4px;
        }

        .price-amount {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
        }

        .price-unit {
          font-size: 14px;
          color: #6b7280;
        }

        .price-custom {
          font-size: 1.25rem;
          font-weight: 600;
          color: #a78bfa;
        }

        .card-features {
          list-style: none;
          padding: 0;
          margin: 0 0 16px;
        }

        .card-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #9ca3af;
          padding: 6px 0;
        }

        .card-features svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        .card-note {
          display: block;
          font-size: 12px;
          color: #6b7280;
          font-style: italic;
          margin-bottom: 16px;
        }

        .card-cta {
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

        .card-cta:hover {
          background: rgba(124, 58, 237, 0.25);
        }

        .pricing-card.popular .card-cta {
          background: #7c3aed;
          border-color: #7c3aed;
          color: #fff;
        }

        .pricing-card.popular .card-cta:hover {
          background: #6d28d9;
        }

        /* Add-Ons */
        .addons-section {
          padding: 60px 24px;
          max-width: 800px;
          margin: 0 auto;
        }

        .addons-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .addon-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
        }

        .addon-name {
          font-size: 14px;
          color: #e5e7eb;
        }

        .addon-price {
          font-size: 14px;
          font-weight: 600;
          color: #a78bfa;
        }

        /* Discounts */
        .discounts-section {
          padding: 0 24px 60px;
          max-width: 900px;
          margin: 0 auto;
        }

        .discounts-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          padding: 32px 24px;
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.15) 0%,
            rgba(124, 58, 237, 0.05) 100%
          );
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 16px;
        }

        .discounts-icon {
          color: #a78bfa;
        }

        .discounts-text h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }

        .discounts-text p {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.6;
        }

        .discounts-text strong {
          color: #fff;
        }

        /* FAQ */
        .faq-section {
          padding: 60px 24px;
          max-width: 700px;
          margin: 0 auto;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .faq-item.active {
          border-color: rgba(124, 58, 237, 0.3);
        }

        .faq-question {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 18px 20px;
          background: none;
          border: none;
          font-size: 14px;
          font-weight: 500;
          color: #e5e7eb;
          text-align: left;
          cursor: pointer;
        }

        .faq-question svg {
          flex-shrink: 0;
          color: #7c3aed;
        }

        .faq-toggle {
          margin-left: auto;
          font-size: 18px;
          color: #6b7280;
        }

        .faq-answer {
          padding: 0 20px 18px 50px;
        }

        .faq-answer p {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.6;
        }

        /* Final CTA */
        .final-cta {
          padding: 80px 24px 100px;
        }

        .final-cta .cta-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .final-cta h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }

        .final-cta > .cta-content > p {
          font-size: 16px;
          color: #9ca3af;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .cta-trust {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .cta-trust span {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #6b7280;
        }

        .cta-trust svg {
          color: #22c55e;
        }

        /* Responsive */
        @media (min-width: 640px) {
          .pricing-hero h1 {
            font-size: 3rem;
          }

          .hero-ctas {
            flex-direction: row;
            justify-content: center;
          }

          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .addons-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .discounts-content {
            flex-direction: row;
            text-align: left;
            padding: 28px 32px;
          }

          .cta-buttons {
            flex-direction: row;
            justify-content: center;
          }
        }

        @media (min-width: 1024px) {
          .pricing-hero h1 {
            font-size: 3.25rem;
          }

          .grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .addons-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </main>
  );
}

