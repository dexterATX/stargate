"use client";

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { LogoLoop } from "@/components/LogoLoop";

const testimonials = [
  {
    id: 1,
    name: "Michael R.",
    location: "Seminole, FL",
    rating: 5,
    text: "Stargate transformed my driveway! Years of oil stains and grime gone in just a few hours. Highly recommend their team.",
    service: "Driveway Cleaning",
  },
  {
    id: 2,
    name: "Sarah K.",
    location: "Largo, FL",
    rating: 5,
    text: "Professional, on-time, and my house looks brand new. The soft wash was gentle on my siding but tough on mold. Amazing results!",
    service: "House Washing",
  },
  {
    id: 3,
    name: "David L.",
    location: "Clearwater, FL",
    rating: 5,
    text: "Best pressure washing service in the area. Fair pricing, excellent communication, and the pool deck looks incredible.",
    service: "Pool Deck Cleaning",
  },
  {
    id: 4,
    name: "Jennifer M.",
    location: "St. Petersburg, FL",
    rating: 5,
    text: "They cleaned our commercial property and it looks brand new. Very thorough and professional. Will use again for sure!",
    service: "Commercial Cleaning",
  },
  {
    id: 5,
    name: "Robert T.",
    location: "Indian Rocks Beach, FL",
    rating: 5,
    text: "The roof soft wash removed years of algae buildup without any damage. Our roof looks 10 years younger. Excellent work!",
    service: "Roof Cleaning",
  },
];

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

const ReviewCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="review-card">
    <div className="review-stars">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="review-star" />
      ))}
    </div>
    
    <p className="review-text">"{testimonial.text}"</p>
    
    <div className="review-author">
      <div className="review-avatar">
        {testimonial.name.charAt(0)}
      </div>
      <div className="review-info">
        <span className="review-name">{testimonial.name}</span>
        <span className="review-location">{testimonial.location}</span>
      </div>
    </div>
  </div>
);

export function TestimonialsPreview() {
  const logoItems = testimonials.map((testimonial) => ({
    node: <ReviewCard testimonial={testimonial} />,
    ariaLabel: `Review by ${testimonial.name}`,
  }));

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Section header */}
        <div className="testimonials-header">
          <div className="testimonials-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="testimonials-star" />
            ))}
          </div>
          <span className="testimonials-badge">500+ 5-STAR REVIEWS</span>
          <h2 className="testimonials-title">
            What Our Customers Say
          </h2>
          <p className="testimonials-subtitle">
            Real reviews from homeowners across Pinellas County.
          </p>
        </div>

        {/* Looping testimonials */}
        <div className="testimonials-loop-wrapper">
          <LogoLoop
            logos={logoItems}
            speed={40}
            direction="left"
            pauseOnHover={false}
            gap={20}
            fadeOut={false}
            ariaLabel="Customer testimonials"
          />
        </div>

        {/* View all button */}
        <div className="testimonials-cta">
          <Link href="/testimonials" className="testimonials-view-all">
            Read All Reviews
            <ArrowRight className="testimonials-arrow" />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-section {
          position: relative;
          background: #030308;
          padding: 40px 0;
          overflow: hidden;
        }
        
        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .testimonials-header {
          text-align: center;
          margin-bottom: 32px;
          padding: 0 20px;
        }
        
        .testimonials-stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-bottom: 8px;
        }
        
        .testimonials-star {
          width: 20px;
          height: 20px;
          color: #fbbf24;
          fill: #fbbf24;
        }
        
        .testimonials-badge {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.25);
          border-radius: 50px;
          font-size: 11px;
          font-weight: 600;
          color: #fbbf24;
          letter-spacing: 0.5px;
          margin-bottom: 10px;
        }
        
        .testimonials-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }
        
        .testimonials-subtitle {
          font-size: 15px;
          color: #6b6b80;
          max-width: 400px;
          margin: 0 auto;
          line-height: 1.4;
        }
        
        .testimonials-loop-wrapper {
          margin-bottom: 48px;
        }

        /* Override LogoLoop default sizing - CRITICAL for custom nodes */
        .testimonials-loop-wrapper .logoloop {
          --logoloop-logoHeight: auto;
        }
        
        .testimonials-loop-wrapper .logoloop__item {
          font-size: 14px;
          line-height: 1.5;
        }
        
        .testimonials-loop-wrapper .logoloop__list {
          align-items: stretch;
        }
        
        .review-card {
          position: relative;
          width: 280px;
          padding: 18px 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          box-sizing: border-box;
        }
        
        .review-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 10px;
        }
        
        .review-star {
          width: 14px;
          height: 14px;
          color: #fbbf24;
          fill: #fbbf24;
        }
        
        .review-text {
          font-size: 14px;
          line-height: 1.5;
          color: #a0a0b0;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .review-author {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .review-avatar {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
        }
        
        .review-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .review-name {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }
        
        .review-location {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.45);
        }
        
        .testimonials-cta {
          text-align: center;
          padding: 0 20px;
        }
        
        .testimonials-view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .testimonials-view-all:hover {
          background: rgba(124, 58, 237, 0.25);
          border-color: rgba(124, 58, 237, 0.5);
          transform: translateY(-2px);
        }
        
        .testimonials-arrow {
          width: 16px;
          height: 16px;
        }
        
        /* Tablet */
        @media (min-width: 640px) {
          .testimonials-section {
            padding: 50px 0;
          }
          
          .testimonials-header {
            margin-bottom: 36px;
          }
          
          .testimonials-star {
            width: 24px;
            height: 24px;
          }
          
          .testimonials-badge {
            padding: 8px 16px;
            font-size: 12px;
          }
          
          .testimonials-title {
            font-size: 2rem;
          }
          
          .testimonials-subtitle {
            font-size: 17px;
          }
          
          .review-card {
            width: 300px;
            padding: 20px 22px;
          }
          
          .review-text {
            font-size: 14px;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .testimonials-title {
            font-size: 2.5rem;
          }
          
          .review-card {
            width: 320px;
          }
          
          .review-text {
            font-size: 15px;
          }
          
          .review-name {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
