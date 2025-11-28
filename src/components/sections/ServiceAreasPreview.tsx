"use client";

import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";

const serviceAreas = [
  { name: "Seminole", featured: true },
  { name: "Largo", featured: true },
  { name: "Clearwater", featured: true },
  { name: "St. Petersburg", featured: false },
  { name: "Pinellas Park", featured: false },
  { name: "Indian Rocks Beach", featured: false },
  { name: "Belleair", featured: false },
  { name: "Dunedin", featured: false },
  { name: "Safety Harbor", featured: false },
  { name: "Palm Harbor", featured: false },
  { name: "Tarpon Springs", featured: false },
  { name: "Redington Beach", featured: false },
];

export function ServiceAreasPreview() {
  return (
    <section className="service-areas-section">
      <div className="service-areas-container">
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
          padding: 6px 14px;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50px;
          font-size: 11px;
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
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        
        .service-areas-subtitle {
          font-size: 15px;
          color: #6b6b80;
          max-width: 500px;
          margin: 0 auto 24px;
          line-height: 1.6;
        }
        
        .service-areas-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
          align-items: center;
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
          padding: 24px;
        }
        
        .cities-map-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 40px 20px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%);
          border-radius: 12px;
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: 600;
          color: #60a5fa;
        }
        
        .cities-map-icon {
          width: 28px;
          height: 28px;
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
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          font-size: 13px;
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
        
        /* Tablet */
        @media (min-width: 640px) {
          .service-areas-section {
            padding: 50px 0;
          }
          
          .service-areas-badge {
            padding: 8px 16px;
            font-size: 12px;
          }
          
          .service-areas-title {
            font-size: 2rem;
          }
          
          .service-areas-subtitle {
            font-size: 17px;
          }
          
          .service-areas-features {
            flex-direction: row;
            justify-content: center;
            gap: 24px;
          }
          
          .service-areas-cities {
            padding: 32px;
          }
          
          .cities-map-placeholder {
            padding: 60px 40px;
            font-size: 22px;
          }
          
          .cities-map-icon {
            width: 36px;
            height: 36px;
          }
          
          .city-tag {
            padding: 10px 16px;
            font-size: 14px;
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

