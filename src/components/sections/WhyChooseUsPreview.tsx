"use client";

import { Shield, Clock, Award, Leaf, ThumbsUp, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Licensed, bonded & insured for complete peace of mind",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Fast response with same-day estimates available",
  },
  {
    icon: Award,
    title: "5-Star Rated",
    description: "Hundreds of happy customers across Pinellas",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Safe solutions for your family, pets & plants",
  },
  {
    icon: ThumbsUp,
    title: "100% Guaranteed",
    description: "Not satisfied? We'll make it right or refund you",
  },
  {
    icon: Zap,
    title: "Pro Equipment",
    description: "Commercial-grade gear for superior results",
  },
];

export function WhyChooseUsPreview() {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        {/* Section header */}
        <div className="why-choose-header">
          <span className="why-choose-badge">WHY STARGATE</span>
          <h2 className="why-choose-title">
            The Stargate Difference
          </h2>
        </div>

        {/* Mobile Layout - Stacked cards */}
        <div className="why-choose-mobile">
          <div className="why-stack">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="why-stack-item">
                  <div className="why-stack-icon">
                    <Icon size={20} />
                  </div>
                  <div className="why-stack-content">
                    <h3 className="why-stack-title">{feature.title}</h3>
                    <p className="why-stack-desc">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Layout - Full cards */}
        <div className="why-choose-desktop">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="why-choose-card">
                <div className="why-choose-icon-wrap">
                  <Icon className="why-choose-icon" />
                </div>
                <h3 className="why-choose-card-title">{feature.title}</h3>
                <p className="why-choose-card-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .why-choose-section {
          position: relative;
          background: #030308;
          padding: 40px 0;
        }
        
        .why-choose-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .why-choose-header {
          text-align: center;
          margin-bottom: 24px;
        }
        
        .why-choose-badge {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 50px;
          font-size: 11px;
          font-weight: 600;
          color: #a78bfa;
          letter-spacing: 0.5px;
          margin-bottom: 14px;
        }
        
        .why-choose-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
        }

        /* Mobile Layout - Stacked */
        .why-choose-mobile {
          display: block;
        }

        .why-stack {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;
        }

        .why-stack-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: background 0.2s;
        }

        .why-stack-item:last-child {
          border-bottom: none;
        }

        .why-stack-item:active {
          background: rgba(124, 58, 237, 0.08);
        }

        .why-stack-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
        }

        .why-stack-content {
          flex: 1;
          min-width: 0;
        }

        .why-stack-title {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 3px;
          letter-spacing: -0.01em;
        }

        .why-stack-desc {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.4;
        }

        /* Desktop Layout - Hidden on mobile */
        .why-choose-desktop {
          display: none;
        }
        
        .why-choose-card {
          text-align: center;
          padding: 32px 24px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        
        .why-choose-card:hover {
          border-color: rgba(124, 58, 237, 0.25);
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0.02) 100%);
        }
        
        .why-choose-icon-wrap {
          width: 60px;
          height: 60px;
          margin: 0 auto 18px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0.08) 100%);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .why-choose-icon {
          width: 28px;
          height: 28px;
          color: #a78bfa;
        }
        
        .why-choose-card-title {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
        }
        
        .why-choose-card-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #6b6b80;
        }
        
        /* Tablet - Switch to desktop layout */
        @media (min-width: 640px) {
          .why-choose-section {
            padding: 50px 0;
          }

          .why-choose-mobile {
            display: none;
          }

          .why-choose-desktop {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .why-choose-header {
            margin-bottom: 50px;
          }
          
          .why-choose-badge {
            padding: 8px 16px;
            font-size: 12px;
          }
          
          .why-choose-title {
            font-size: 2rem;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .why-choose-title {
            font-size: 2.5rem;
          }
          
          .why-choose-desktop {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          
          .why-choose-icon-wrap {
            width: 64px;
            height: 64px;
            border-radius: 16px;
          }
          
          .why-choose-icon {
            width: 30px;
            height: 30px;
          }
          
          .why-choose-card-title {
            font-size: 18px;
          }
          
          .why-choose-card-desc {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
