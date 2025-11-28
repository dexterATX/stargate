"use client";

import Link from "next/link";
import { Phone, Zap, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <div className="final-cta-content">
          {/* Background glow */}
          <div className="final-cta-glow" />
          
          {/* Content */}
          <div className="final-cta-inner">
            <span className="final-cta-badge">
              <Zap className="final-cta-badge-icon" />
              READY TO GET STARTED?
            </span>
            
            <h2 className="final-cta-title">
              Get Your Free Estimate Today
            </h2>
            
            <p className="final-cta-subtitle">
              Join 500+ happy homeowners in Seminole and Pinellas County. 
              Same-day estimates available — no obligation, no pressure.
            </p>
            
            <div className="final-cta-buttons">
              <Link href="/contact" className="final-cta-primary">
                <Zap className="final-cta-btn-icon" />
                Request Free Estimate
                <ArrowRight className="final-cta-arrow" />
              </Link>
              
              <a 
                href="tel:+13528433425" 
                className="final-cta-secondary"
                aria-label="Call us now at (352) 843-3425"
              >
                <Phone className="final-cta-btn-icon" aria-hidden="true" />
                (352) 843-3425
              </a>
            </div>
            
            <p className="final-cta-note">
              ✓ Free estimates &nbsp;&nbsp; ✓ No hidden fees &nbsp;&nbsp; ✓ 100% satisfaction guaranteed
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .final-cta-section {
          position: relative;
          background: linear-gradient(180deg, #030308 0%, #07070f 100%);
          padding: 40px 0 60px;
        }
        
        .final-cta-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .final-cta-content {
          position: relative;
          padding: 40px 24px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(59, 130, 246, 0.08) 100%);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 24px;
          overflow: hidden;
        }
        
        .final-cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        
        .final-cta-inner {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        
        .final-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(124, 58, 237, 0.2);
          border: 1px solid rgba(124, 58, 237, 0.35);
          border-radius: 50px;
          font-size: 11px;
          font-weight: 600;
          color: #a78bfa;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
        }
        
        .final-cta-badge-icon {
          width: 14px;
          height: 14px;
        }
        
        .final-cta-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        
        .final-cta-subtitle {
          font-size: 15px;
          color: #8b8b9e;
          max-width: 500px;
          margin: 0 auto 28px;
          line-height: 1.7;
        }
        
        .final-cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 320px;
          margin: 0 auto 24px;
        }
        
        .final-cta-primary,
        .final-cta-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .final-cta-primary {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          color: #fff;
          box-shadow: 0 8px 32px rgba(124, 58, 237, 0.35);
        }
        
        .final-cta-primary:hover {
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.5);
          transform: translateY(-2px);
        }
        
        .final-cta-secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
        }
        
        .final-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }
        
        .final-cta-btn-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }
        
        .final-cta-arrow {
          width: 16px;
          height: 16px;
        }
        
        .final-cta-note {
          font-size: 12px;
          color: #6b6b80;
          letter-spacing: 0.3px;
        }
        
        /* Tablet */
        @media (min-width: 640px) {
          .final-cta-section {
            padding: 50px 0 70px;
          }
          
          .final-cta-content {
            padding: 60px 48px;
            border-radius: 28px;
          }
          
          .final-cta-badge {
            padding: 8px 16px;
            font-size: 12px;
          }
          
          .final-cta-title {
            font-size: 2.25rem;
          }
          
          .final-cta-subtitle {
            font-size: 17px;
            margin-bottom: 32px;
          }
          
          .final-cta-buttons {
            flex-direction: row;
            max-width: 100%;
            justify-content: center;
            gap: 16px;
          }
          
          .final-cta-primary,
          .final-cta-secondary {
            padding: 18px 28px;
            font-size: 16px;
          }
          
          .final-cta-note {
            font-size: 13px;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .final-cta-content {
            padding: 80px 60px;
          }
          
          .final-cta-title {
            font-size: 2.75rem;
          }
          
          .final-cta-glow {
            width: 600px;
            height: 600px;
          }
        }
      `}</style>
    </section>
  );
}

