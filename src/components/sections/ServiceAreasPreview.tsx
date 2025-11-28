"use client";

import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle, Navigation } from "lucide-react";

const serviceAreas = [
  { name: "Seminole", featured: true },
  { name: "Largo", featured: true },
  { name: "Clearwater", featured: true },
  { name: "St. Petersburg", featured: false },
  { name: "Indian Rocks Beach", featured: false },
  { name: "Belleair", featured: false },
  { name: "Dunedin", featured: false },
  { name: "Safety Harbor", featured: false },
  { name: "Palm Harbor", featured: false },
  { name: "Tarpon Springs", featured: false },
  { name: "Redington Beach", featured: false },
];

export function ServiceAreasPreview() {
  const featuredAreas = serviceAreas.filter(a => a.featured);
  const otherAreas = serviceAreas.filter(a => !a.featured);

  return (
    <section className="service-areas-section">
      <div className="service-areas-container">
        {/* Mobile Layout */}
        <div className="service-areas-mobile">
          {/* Header */}
          <div className="sa-mobile-header">
            <span className="sa-mobile-badge">
              <Navigation size={12} />
              SERVICE AREAS
            </span>
            <h2 className="sa-mobile-title">Proudly Serving Pinellas County</h2>
            <p className="sa-mobile-subtitle">
              Professional pressure washing from Seminole to Tarpon Springs
            </p>
          </div>

          {/* Areas Card */}
          <div className="sa-mobile-card">
            <div className="sa-mobile-card-header">
              <MapPin size={18} />
              <span>Our Coverage Area</span>
            </div>
            
            <div className="sa-mobile-areas">
              {featuredAreas.map((area) => (
                <span key={area.name} className="sa-mobile-tag featured">
                  <MapPin size={10} />
                  {area.name}
                </span>
              ))}
              {otherAreas.slice(0, 3).map((area) => (
                <span key={area.name} className="sa-mobile-tag">
                  {area.name}
                </span>
              ))}
              <span className="sa-mobile-more">+{otherAreas.length - 3} more</span>
            </div>

            <div className="sa-mobile-divider" />

            <div className="sa-mobile-perks">
              <div className="sa-mobile-perk">
                <CheckCircle size={16} />
                <span>Free estimates</span>
              </div>
              <div className="sa-mobile-perk">
                <CheckCircle size={16} />
                <span>No travel fees</span>
              </div>
              <div className="sa-mobile-perk">
                <CheckCircle size={16} />
                <span>Same-day available</span>
              </div>
            </div>
          </div>

          <Link href="/service-areas" className="sa-mobile-cta">
            View All Service Areas
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Desktop Layout */}
        <div className="service-areas-desktop">
          <div className="service-areas-content">
            {/* Left side - Info */}
            <div className="service-areas-info">
              <span className="service-areas-badge">
                <MapPin className="service-areas-badge-icon" />
                SERVICE AREAS
              </span>
              <h2 className="service-areas-title">
                Serving All of Pinellas County
              </h2>
              <p className="service-areas-subtitle">
                From Seminole to Tarpon Springs, we provide professional pressure washing services throughout the entire Pinellas County area.
              </p>
              
              <div className="service-areas-features">
                <div className="service-areas-feature">
                  <CheckCircle className="service-areas-check" />
                  <span>Free estimates for all locations</span>
                </div>
                <div className="service-areas-feature">
                  <CheckCircle className="service-areas-check" />
                  <span>Same-day service available</span>
                </div>
                <div className="service-areas-feature">
                  <CheckCircle className="service-areas-check" />
                  <span>No travel fees within service area</span>
                </div>
              </div>
              
              <Link href="/service-areas" className="service-areas-link">
                View All Service Areas
                <ArrowRight className="service-areas-arrow" />
              </Link>
            </div>
            
            {/* Right side - Cities grid */}
            <div className="service-areas-cities">
              <div className="cities-map-placeholder">
                <MapPin className="cities-map-icon" />
                <span>Pinellas County</span>
              </div>
              <div className="cities-grid">
                {serviceAreas.map((area) => (
                  <div 
                    key={area.name} 
                    className={`city-tag ${area.featured ? 'featured' : ''}`}
                  >
                    <MapPin className="city-tag-icon" />
                    {area.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .service-areas-section {
          position: relative;
          background: linear-gradient(180deg, #030308 0%, #0a0a14 50%, #030308 100%);
          padding: 40px 0;
        }
        
        .service-areas-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Mobile Layout */
        .service-areas-mobile {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sa-mobile-header {
          text-align: center;
        }

        .sa-mobile-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.25);
          border-radius: 50px;
          font-size: 10px;
          font-weight: 600;
          color: #60a5fa;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .sa-mobile-title {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .sa-mobile-subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.5;
        }

        .sa-mobile-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 100%);
          border: 1px solid rgba(59, 130, 246, 0.15);
          border-radius: 16px;
          padding: 20px;
        }

        .sa-mobile-card-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 16px;
        }

        .sa-mobile-areas {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }

        .sa-mobile-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
        }

        .sa-mobile-tag.featured {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.3);
          color: #60a5fa;
          font-weight: 500;
        }

        .sa-mobile-more {
          padding: 7px 12px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
        }

        .sa-mobile-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.06);
          margin: 16px 0;
        }

        .sa-mobile-perks {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .sa-mobile-perk {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
        }

        .sa-mobile-perk svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        .sa-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          transition: all 0.2s;
        }

        .sa-mobile-cta:hover {
          background: rgba(59, 130, 246, 0.25);
        }

        /* Desktop Layout - Hidden on mobile */
        .service-areas-desktop {
          display: none;
        }
        
        .service-areas-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        
        .service-areas-info {
          text-align: center;
        }
        
        .service-areas-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          color: #60a5fa;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        
        .service-areas-badge-icon {
          width: 14px;
          height: 14px;
        }
        
        .service-areas-title {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        
        .service-areas-subtitle {
          font-size: 17px;
          color: #6b6b80;
          max-width: 500px;
          margin: 0 auto 24px;
          line-height: 1.6;
        }
        
        .service-areas-features {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 24px;
          margin-bottom: 24px;
        }
        
        .service-areas-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #b8b8c8;
        }
        
        .service-areas-check {
          width: 18px;
          height: 18px;
          color: #22c55e;
          flex-shrink: 0;
        }
        
        .service-areas-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .service-areas-link:hover {
          background: rgba(59, 130, 246, 0.25);
          border-color: rgba(59, 130, 246, 0.5);
          transform: translateY(-2px);
        }
        
        .service-areas-arrow {
          width: 16px;
          height: 16px;
        }
        
        .service-areas-cities {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.06) 0%, rgba(59, 130, 246, 0.02) 100%);
          border: 1px solid rgba(59, 130, 246, 0.12);
          border-radius: 20px;
          padding: 32px;
        }
        
        .cities-map-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 60px 40px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%);
          border-radius: 12px;
          margin-bottom: 20px;
          font-size: 22px;
          font-weight: 600;
          color: #60a5fa;
        }
        
        .cities-map-icon {
          width: 36px;
          height: 36px;
        }
        
        .cities-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }
        
        .city-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          font-size: 14px;
          color: #8b8b9e;
          transition: all 0.2s ease;
        }
        
        .city-tag:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
          color: #60a5fa;
        }
        
        .city-tag.featured {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.3);
          color: #60a5fa;
        }
        
        .city-tag-icon {
          width: 12px;
          height: 12px;
        }
        
        /* Tablet - Show desktop layout */
        @media (min-width: 768px) {
          .service-areas-mobile {
            display: none;
          }

          .service-areas-desktop {
            display: block;
          }

          .service-areas-section {
            padding: 50px 0;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .service-areas-content {
            flex-direction: row;
            align-items: center;
            gap: 60px;
          }
          
          .service-areas-info {
            flex: 1;
            text-align: left;
          }
          
          .service-areas-subtitle {
            margin: 0 0 24px 0;
          }
          
          .service-areas-features {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .service-areas-title {
            font-size: 2.5rem;
          }
          
          .service-areas-cities {
            flex: 1.2;
          }
          
          .cities-grid {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
