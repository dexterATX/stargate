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
    shortTitle: "House",
    description: "Soft wash your home's exterior to remove dirt, mold, and mildew safely.",
    icon: Home,
  },
  {
    id: "driveway-cleaning",
    title: "Driveway Cleaning",
    shortTitle: "Driveway",
    description: "Blast away oil stains, tire marks, and years of grime from concrete.",
    icon: Car,
  },
  {
    id: "roof-cleaning",
    title: "Roof Cleaning",
    shortTitle: "Roof",
    description: "Gentle soft wash to remove black streaks and extend your roof's life.",
    icon: Building2,
  },
  {
    id: "pool-deck",
    title: "Pool Deck Cleaning",
    shortTitle: "Pool Deck",
    description: "Make your pool area slip-free, clean, and ready for guests.",
    icon: Waves,
  },
  {
    id: "fence-cleaning",
    title: "Fence Cleaning",
    shortTitle: "Fence",
    description: "Restore wood, vinyl, or aluminum fencing to like-new condition.",
    icon: Fence,
  },
  {
    id: "commercial",
    title: "Commercial",
    shortTitle: "Commercial",
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

        {/* Mobile Grid - Compact 2-column layout */}
        <div className="services-grid-mobile">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link 
                key={service.id}
                href={`/services#${service.id}`} 
                className="service-card-mobile"
              >
                <div className="service-mobile-icon">
                  <Icon size={20} />
                </div>
                <span className="service-mobile-title">{service.shortTitle}</span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Grid - Full cards */}
        <div className="services-grid-desktop">
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
          margin-bottom: 28px;
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
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        
        .services-subtitle {
          font-size: 14px;
          color: #6b6b80;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.5;
        }

        /* Mobile Grid */
        .services-grid-mobile {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 28px;
        }

        .service-card-mobile {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 18px 10px 16px;
          background: linear-gradient(165deg, rgba(124, 58, 237, 0.12) 0%, rgba(20, 20, 30, 0.95) 100%);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }

        .service-card-mobile:active {
          transform: scale(0.96);
          background: rgba(124, 58, 237, 0.18);
          border-color: rgba(124, 58, 237, 0.4);
        }

        .service-mobile-icon {
          width: 46px;
          height: 46px;
          background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);
        }

        .service-mobile-icon svg {
          width: 22px;
          height: 22px;
          stroke-width: 2;
        }

        .service-mobile-title {
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          text-align: center;
          line-height: 1.3;
          letter-spacing: 0.01em;
        }

        /* Desktop Grid - Hidden on mobile */
        .services-grid-desktop {
          display: none;
        }
        
        .service-tilt-card {
          cursor: pointer;
        }
        
        .service-card {
          display: block;
          padding: 28px;
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
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.25) 0%, rgba(124, 58, 237, 0.1) 100%);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .service-icon {
          width: 26px;
          height: 26px;
          color: #a78bfa;
        }
        
        .service-title {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
        }
        
        .service-desc {
          font-size: 15px;
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
          padding: 12px 24px;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 10px;
          font-size: 13px;
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
        
        /* Tablet - Switch to desktop grid */
        @media (min-width: 640px) {
          .services-section {
            padding: 50px 0;
            margin-top: -40px;
          }

          .services-grid-mobile {
            display: none;
          }

          .services-grid-desktop {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 40px;
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
          
          .services-grid-desktop {
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
