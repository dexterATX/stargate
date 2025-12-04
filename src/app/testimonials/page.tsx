"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Star,
  Quote,
  Phone,
  ArrowRight,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import { SectionDivider } from "@/components/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-animate"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );
    }

    if (reviewsRef.current) {
      gsap.fromTo(
        reviewsRef.current.querySelectorAll(".review-card"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: reviewsRef.current,
            start: "top 85%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const getServiceTitle = (serviceId: string) => {
    const service = siteConfig.services.find((s) => s.id === serviceId);
    return service?.shortTitle || service?.title || serviceId;
  };

  return (
    <main className="testimonials-page">
      {/* Hero */}
      <section ref={heroRef} className="testimonials-hero">
        <div className="hero-content">
          <span className="hero-animate hero-badge">
            <Star size={14} />
            Customer Reviews
          </span>
          <h1 className="hero-animate">
            What Our <span className="text-gradient">Customers</span> Say
          </h1>
          <p className="hero-animate hero-subtitle">
            Don't just take our word for it. Here's what homeowners and businesses 
            across {siteConfig.serviceAreas[0]?.county} County are saying about our services.
          </p>
          
          {/* Rating Summary */}
          <div className="hero-animate rating-summary">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.floor(siteConfig.rating.value) ? "star-filled" : "star-empty"}
                />
              ))}
            </div>
            <span className="rating-value">{siteConfig.rating.value}</span>
            <span className="rating-count">Based on {siteConfig.rating.count}+ reviews</span>
          </div>

          <div className="hero-animate mobile-cta">
            <a href={`tel:${siteConfig.phoneRaw}`} className="call-btn">
              <Phone size={18} />
              <div>
                <span className="call-label">Call Now</span>
                <span className="call-number">{siteConfig.phone}</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Reviews Grid */}
      <section ref={reviewsRef} className="reviews-section">
        <div className="section-header">
          <span className="section-label">Real Reviews</span>
          <h2>Trusted by {siteConfig.rating.count}+ Happy Customers</h2>
        </div>
        
        <div className="reviews-grid">
          {siteConfig.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="reviewer-name">{review.author}</h3>
                    <span className="reviewer-location">
                      <MapPin size={12} />
                      {review.location}
                    </span>
                  </div>
                </div>
                <Quote className="quote-icon" />
              </div>
              
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? "star-filled" : "star-empty"}
                  />
                ))}
              </div>
              
              <p className="review-text">{review.text}</p>
              
              <div className="review-footer">
                <span className="review-service">{getServiceTitle(review.service)}</span>
                <span className="review-date">{formatDate(review.date)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Trust Signals */}
      <section className="trust-section">
        <div className="section-header">
          <span className="section-label">Why Trust Us</span>
          <h2>Our Guarantees</h2>
        </div>
        
        <div className="guarantees-grid">
          {siteConfig.trustSignals.guarantees.map((guarantee, index) => (
            <div key={index} className="guarantee-item">
              <CheckCircle2 className="guarantee-icon" />
              <span>{guarantee}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <Sparkles className="cta-icon" />
          <h2>Ready to Join Our Happy Customers?</h2>
          <p>
            Get your free estimate today and see why {siteConfig.rating.count}+ customers 
            trust {siteConfig.name} for their exterior cleaning needs.
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
          
          <div className="cta-links">
            <a 
              href={siteConfig.social.google} 
              target="_blank" 
              rel="noopener noreferrer"
              className="review-link"
            >
              See All Google Reviews →
            </a>
            <a 
              href={siteConfig.social.yelp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="review-link"
            >
              See All Yelp Reviews →
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .testimonials-page {
          min-height: 100vh;
          background: #030308;
        }

        /* Hero */
        .testimonials-hero {
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

        .testimonials-hero h1 {
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

        .rating-summary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .rating-stars {
          display: flex;
          gap: 2px;
        }

        .star-filled {
          color: #fbbf24;
          fill: #fbbf24;
        }

        .star-empty {
          color: #374151;
        }

        .rating-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
        }

        .rating-count {
          font-size: 12px;
          color: #6b7280;
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
        }

        /* Reviews Section */
        .reviews-section {
          padding: 24px 16px;
        }

        .reviews-grid {
          display: grid;
          gap: 16px;
        }

        .review-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 20px;
          transition: all 0.3s;
        }

        .review-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-2px);
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .reviewer-info {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .reviewer-avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }

        .reviewer-name {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 2px;
        }

        .reviewer-location {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: #6b7280;
        }

        .quote-icon {
          width: 24px;
          height: 24px;
          color: rgba(124, 58, 237, 0.3);
        }

        .review-rating {
          display: flex;
          gap: 2px;
          margin-bottom: 12px;
        }

        .review-text {
          font-size: 14px;
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .review-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .review-service {
          font-size: 11px;
          font-weight: 500;
          color: #a78bfa;
          background: rgba(124, 58, 237, 0.15);
          padding: 4px 10px;
          border-radius: 100px;
        }

        .review-date {
          font-size: 11px;
          color: #6b7280;
        }

        /* Trust Section */
        .trust-section {
          padding: 24px 16px;
        }

        .guarantees-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          font-size: 12px;
          color: #e5e7eb;
        }

        .guarantee-icon {
          width: 18px;
          height: 18px;
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
          margin-bottom: 20px;
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

        .cta-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .review-link {
          font-size: 13px;
          color: #a78bfa;
          text-decoration: none;
          transition: color 0.2s;
        }

        .review-link:hover {
          color: #c4b5fd;
        }

        /* Desktop Styles */
        @media (min-width: 640px) {
          .testimonials-hero {
            padding: 150px 24px 60px;
          }

          .hero-badge {
            padding: 8px 16px;
            font-size: 13px;
            margin-bottom: 20px;
          }

          .testimonials-hero h1 {
            font-size: 2.5rem;
            margin-bottom: 16px;
          }

          .hero-subtitle {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 24px;
          }

          .rating-summary {
            gap: 12px;
            margin-bottom: 28px;
          }

          .rating-stars {
            gap: 4px;
          }

          .rating-stars svg {
            width: 24px;
            height: 24px;
          }

          .rating-value {
            font-size: 1.5rem;
          }

          .rating-count {
            font-size: 14px;
          }

          .mobile-cta { display: none; }

          .section-header {
            margin-bottom: 40px;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .reviews-section {
            padding: 40px 24px;
            max-width: 1100px;
            margin: 0 auto;
          }

          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .review-card {
            padding: 28px;
          }

          .reviewer-avatar {
            width: 48px;
            height: 48px;
            font-size: 18px;
          }

          .reviewer-name {
            font-size: 15px;
          }

          .review-text {
            font-size: 15px;
          }

          .trust-section {
            padding: 40px 24px;
            max-width: 800px;
            margin: 0 auto;
          }

          .guarantees-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }

          .guarantee-item {
            flex-direction: column;
            text-align: center;
            padding: 20px 16px;
            font-size: 13px;
          }

          .guarantee-icon {
            width: 24px;
            height: 24px;
            margin-bottom: 8px;
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
            margin-bottom: 24px;
          }

          .btn-primary,
          .btn-secondary {
            padding: 14px 28px;
            font-size: 15px;
          }
        }

        @media (min-width: 1024px) {
          .testimonials-hero h1 {
            font-size: 3rem;
          }

          .reviews-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </main>
  );
}

