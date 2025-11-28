"use client";

import { Shield, Clock, Award, Leaf, ThumbsUp, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Licensed, bonded, and insured for your complete peace of mind.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Fast response times with same-day estimates available.",
  },
  {
    icon: Award,
    title: "5-Star Rated",
    description: "Consistently rated 5 stars by hundreds of happy customers.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Safe, biodegradable cleaning solutions for your family and pets.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll make it right or your money back.",
  },
  {
    icon: Zap,
    title: "Pro Equipment",
    description: "Commercial-grade equipment for superior, lasting results.",
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
          <p className="why-choose-subtitle">
            What sets us apart from other pressure washing companies.
          </p>
        </div>

        {/* Features grid */}
        <div className="why-choose-grid">
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
          margin-bottom: 40px;
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
          margin-bottom: 16px;
        }
        
        .why-choose-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        
        .why-choose-subtitle {
          font-size: 15px;
          color: #6b6b80;
          max-width: 400px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .why-choose-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        
        .why-choose-card {
          text-align: center;
          padding: 28px 20px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        
        .why-choose-card:hover {
          border-color: rgba(124, 58, 237, 0.2);
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0.02) 100%);
        }
        
        .why-choose-icon-wrap {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .why-choose-icon {
          width: 26px;
          height: 26px;
          color: #a78bfa;
        }
        
        .why-choose-card-title {
          font-size: 17px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }
        
        .why-choose-card-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #6b6b80;
        }
        
        /* Tablet */
        @media (min-width: 640px) {
          .why-choose-section {
            padding: 50px 0;
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
          
          .why-choose-subtitle {
            font-size: 17px;
          }
          
          .why-choose-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .why-choose-card {
            padding: 32px 24px;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .why-choose-title {
            font-size: 2.5rem;
          }
          
          .why-choose-grid {
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

