"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const beforeAfterItems = [
  {
    id: 1,
    title: "Siding Cleaning",
    location: "Seminole, FL",
    beforeImage: "/images/sidingbefore.png",
    afterImage: "/images/sidingafter.png",
    beforeAlt: "Dirty house siding with mold and mildew before pressure washing in Seminole FL",
    afterAlt: "Clean house siding after professional pressure washing service in Seminole FL",
  },
  {
    id: 2,
    title: "House Washing",
    location: "Largo, FL",
    beforeImage: "/images/housebefore.png",
    afterImage: "/images/houseafter.png",
    beforeAlt: "House exterior with dirt buildup before soft wash cleaning in Largo FL",
    afterAlt: "Sparkling clean house exterior after soft wash service in Largo FL",
  },
  {
    id: 3,
    title: "Pool Deck Cleaning",
    location: "Clearwater, FL",
    beforeImage: "/images/poolBefore.png",
    afterImage: "/images/poolAfter.png",
    beforeAlt: "Stained pool deck with algae before pressure washing in Clearwater FL",
    afterAlt: "Restored pool deck after professional cleaning in Clearwater FL",
  },
];

export function BeforeAfterPreview() {
  return (
    <section className="before-after-section">
      <div className="before-after-container">
        {/* Section header */}
        <div className="before-after-header">
          <span className="before-after-badge">
            <Sparkles className="before-after-badge-icon" />
            REAL RESULTS
          </span>
          <h2 className="before-after-title">
            See the Transformation
          </h2>
          <p className="before-after-subtitle">
            Drag the slider to reveal before and after results from real customers.
          </p>
        </div>

        {/* Before/After grid */}
        <div className="before-after-grid">
          {beforeAfterItems.map((item) => (
            <div key={item.id} className="before-after-card">
              {/* Interactive slider */}
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                beforeAlt={item.beforeAlt}
                afterAlt={item.afterAlt}
              />
              
              {/* Card info */}
              <div className="before-after-info">
                <h3 className="before-after-card-title">{item.title}</h3>
                <p className="before-after-location">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View gallery button */}
        <div className="before-after-cta">
          <Link href="/gallery" className="before-after-view-all">
            View Full Gallery
            <ArrowRight className="before-after-arrow" />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .before-after-section {
          position: relative;
          background: linear-gradient(180deg, #030308 0%, #07070f 50%, #030308 100%);
          padding: 40px 0;
        }
        
        .before-after-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .before-after-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .before-after-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
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
        
        .before-after-badge-icon {
          width: 14px;
          height: 14px;
        }
        
        .before-after-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        
        .before-after-subtitle {
          font-size: 15px;
          color: #6b6b80;
          max-width: 450px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .before-after-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 40px;
        }
        
        .before-after-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;
          padding: 10px;
          transition: all 0.25s ease;
        }
        
        .before-after-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.04);
        }
        
        .before-after-info {
          padding: 14px 6px 6px;
        }
        
        .before-after-card-title {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 2px;
          letter-spacing: -0.01em;
        }
        
        .before-after-location {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 400;
        }
        
        .before-after-cta {
          text-align: center;
        }
        
        .before-after-view-all {
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
        
        .before-after-view-all:hover {
          background: rgba(124, 58, 237, 0.25);
          border-color: rgba(124, 58, 237, 0.5);
          transform: translateY(-2px);
        }
        
        .before-after-arrow {
          width: 16px;
          height: 16px;
        }
        
        /* Tablet */
        @media (min-width: 640px) {
          .before-after-section {
            padding: 50px 0;
          }
          
          .before-after-header {
            margin-bottom: 50px;
          }
          
          .before-after-badge {
            padding: 8px 16px;
            font-size: 12px;
          }
          
          .before-after-title {
            font-size: 2rem;
          }
          
          .before-after-subtitle {
            font-size: 17px;
          }
          
          .before-after-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          
          .before-after-card {
            padding: 12px;
            border-radius: 18px;
          }
          
          .before-after-info {
            padding: 16px 8px 8px;
          }
          
          .before-after-card-title {
            font-size: 16px;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .before-after-title {
            font-size: 2.5rem;
          }
          
          .before-after-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .before-after-card {
            padding: 14px;
            border-radius: 20px;
          }
          
          .before-after-info {
            padding: 18px 10px 10px;
          }
          
          .before-after-card-title {
            font-size: 17px;
          }
        }
      `}</style>
    </section>
  );
}
