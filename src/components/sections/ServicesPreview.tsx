"use client";

import Link from "next/link";
import { 
  Home, 
  Car, 
  Building2, 
  Waves, 
  Fence, 
  Warehouse,
  ArrowRight 
} from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

const services = [
  {
    id: "house-washing",
    title: "House Washing",
    description: "Soft wash your home's exterior to remove dirt, mold, and mildew safely.",
    icon: Home,
  },
  {
    id: "driveway-cleaning",
    title: "Driveway Cleaning",
    description: "Blast away oil stains, tire marks, and years of grime from concrete.",
    icon: Car,
  },
  {
    id: "roof-cleaning",
    title: "Roof Cleaning",
    description: "Gentle soft wash to remove black streaks and extend your roof's life.",
    icon: Building2,
  },
  {
    id: "pool-deck",
    title: "Pool Deck Cleaning",
    description: "Make your pool area slip-free, clean, and ready for guests.",
    icon: Waves,
  },
  {
    id: "fence-cleaning",
    title: "Fence Cleaning",
    description: "Restore wood, vinyl, or aluminum fencing to like-new condition.",
    icon: Fence,
  },
  {
    id: "commercial",
    title: "Commercial",
    description: "Storefronts, parking lots, and buildings that impress customers.",
    icon: Warehouse,
  },
];

export function ServicesPreview() {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* Section header */}
        <div className="services-header">
          <span className="services-badge">OUR SERVICES</span>
          <h2 className="services-title">
            Professional Cleaning for Every Surface
          </h2>
          <p className="services-subtitle">
            From residential homes to commercial properties in Seminole and Pinellas County.
          </p>
        </div>

        {/* Services grid */}
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <TiltCard
                key={service.id}
                rotateAmplitude={8}
                scaleOnHover={1.02}
                className="service-tilt-card"
              >
                <Link href={`/services#${service.id}`} className="service-card">
                  <div className="service-icon-wrap">
                    <Icon className="service-icon" />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  <span className="service-link">
                    Learn more
                    <ArrowRight className="service-link-arrow" />
                  </span>
                </Link>
              </TiltCard>
            );
          })}
        </div>

        {/* View all services button */}
        <div className="services-cta">
          <Link href="/services" className="services-view-all">
            View All Services
            <ArrowRight className="services-view-arrow" />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .services-section {
          position: relative;
          z-index: 3;
          background: #030308;
          padding: 40px 0;
          margin-top: -80px;
        }
        
        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .services-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .services-badge {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 50px;
          font-size: 11px;
          font-weight: 600;
          color: #a78bfa;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        
        .services-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        
        .services-subtitle {
          font-size: 15px;
          color: #6b6b80;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 40px;
        }
        
        .service-tilt-card {
          cursor: pointer;
        }
        
        .service-card {
          display: block;
          padding: 24px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0.02) 100%);
          border: 1px solid rgba(124, 58, 237, 0.15);
          border-radius: 16px;
          text-decoration: none;
          height: 100%;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .service-card:hover {
          border-color: rgba(124, 58, 237, 0.35);
          box-shadow: 0 8px 40px rgba(124, 58, 237, 0.15);
        }
        
        .service-icon-wrap {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.25) 0%, rgba(124, 58, 237, 0.1) 100%);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        
        .service-icon {
          width: 24px;
          height: 24px;
          color: #a78bfa;
        }
        
        .service-title {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }
        
        .service-desc {
          font-size: 14px;
          color: #8b8b9e;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        
        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #a78bfa;
          transition: gap 0.2s ease;
        }
        
        .service-link-arrow {
          width: 14px;
          height: 14px;
        }
        
        .service-card:hover .service-link {
          gap: 10px;
        }
        
        .services-cta {
          text-align: center;
        }
        
        .services-view-all {
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
        
        .services-view-all:hover {
          background: rgba(124, 58, 237, 0.25);
          border-color: rgba(124, 58, 237, 0.5);
        }
        
        .services-view-arrow {
          width: 16px;
          height: 16px;
        }
        
        /* Tablet */
        @media (min-width: 640px) {
          .services-section {
            padding: 50px 0;
            margin-top: -40px;
          }
          
          .services-container {
            padding: 0 24px;
          }
          
          .services-header {
            margin-bottom: 50px;
          }
          
          .services-badge {
            padding: 8px 16px;
            font-size: 12px;
            margin-bottom: 20px;
          }
          
          .services-title {
            font-size: 2rem;
            margin-bottom: 16px;
          }
          
          .services-subtitle {
            font-size: 17px;
          }
          
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .service-card {
            padding: 28px;
          }
          
          .service-icon-wrap {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            margin-bottom: 20px;
          }
          
          .service-icon {
            width: 26px;
            height: 26px;
          }
          
          .service-title {
            font-size: 20px;
            margin-bottom: 10px;
          }
          
          .service-desc {
            font-size: 15px;
          }
          
          .services-view-all {
            padding: 16px 32px;
            font-size: 15px;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .services-title {
            font-size: 2.5rem;
          }
          
          .services-subtitle {
            font-size: 18px;
            max-width: 600px;
          }
          
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          
          .service-card {
            padding: 32px;
          }
          
          .service-icon-wrap {
            width: 60px;
            height: 60px;
            border-radius: 16px;
            margin-bottom: 24px;
          }
          
          .service-icon {
            width: 28px;
            height: 28px;
          }
          
          .service-title {
            font-size: 22px;
            margin-bottom: 12px;
          }
        }
      `}</style>
    </section>
  );
}
