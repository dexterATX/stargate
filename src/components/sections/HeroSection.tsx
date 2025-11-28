"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Zap, Phone } from "lucide-react";

// Dynamic imports to avoid SSR issues
const Lightning = dynamic(() => import("@/components/Lightning"), {
  ssr: false,
});

const SplitText = dynamic(() => import("@/components/SplitText"), {
  ssr: false,
});

export function HeroSection() {
  return (
    <section className="hero-section">
      {/* Lightning Background - Full Viewport */}
      <div className="hero-bg">
        <Lightning
          hue={270}
          xOffset={0}
          speed={0.7}
          intensity={1.3}
          size={1.2}
        />
      </div>

      {/* Blur Overlay for readability */}
      <div className="hero-blur-overlay" />
      
      {/* Dark Gradient Overlays */}
      <div className="hero-gradient-overlay" />
      <div className="hero-bottom-gradient" />

      {/* Content */}
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <Zap className="hero-badge-icon" />
          <span className="hero-badge-text">
            #1 PRESSURE WASHING IN SEMINOLE
          </span>
        </div>

        {/* Main Headline with SplitText */}
        <div className="hero-headline-wrap">
          <SplitText
            text="Seminole's #1 Rated Pressure Washing Service."
            className="hero-headline"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-20px"
            textAlign="center"
            tag="h1"
            onLetterAnimationComplete={() => {}}
          />
        </div>

        {/* Subheadline */}
        <div className="hero-subheadline-wrap">
          <SplitText
            text="We make your home look brand new. Fast, affordable, and 100% satisfaction guaranteed."
            className="hero-subtext"
            delay={25}
            duration={0.4}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="center"
            tag="p"
            onLetterAnimationComplete={() => {}}
          />
        </div>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <Link href="/contact" className="hero-btn-primary">
            <Zap className="hero-btn-icon" />
            <span>Get Free Estimate</span>
          </Link>
          
          <a 
            href="tel:+13528433425" 
            className="hero-btn-secondary"
            aria-label="Call Stargate Pressure Washing at (352) 843-3425"
          >
            <Phone className="hero-btn-icon" aria-hidden="true" />
            <span>(352) 843-3425</span>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="hero-trust">
          <div className="hero-trust-item">
            <div className="hero-trust-value">500+</div>
            <div className="hero-trust-label">5-Star Reviews</div>
          </div>
          <div className="hero-trust-item">
            <div className="hero-trust-value">Same Day</div>
            <div className="hero-trust-label">Estimates</div>
          </div>
          <div className="hero-trust-item">
            <div className="hero-trust-value">100%</div>
            <div className="hero-trust-label">Guaranteed</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-dot" />
        </div>
      </div>

      <style jsx global>{`
        .hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 580px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        
        .hero-blur-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          z-index: 1;
          pointer-events: none;
        }
        
        .hero-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, rgba(3, 3, 8, 0.5) 0%, rgba(3, 3, 8, 0.75) 50%, rgba(3, 3, 8, 0.95) 100%);
          z-index: 1;
          pointer-events: none;
        }
        
        .hero-bottom-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60%;
          background: linear-gradient(to top, rgba(3, 3, 8, 1) 0%, transparent 100%);
          z-index: 1;
          pointer-events: none;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          max-width: 1000px;
          width: 100%;
          margin-top: 0;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 50px;
          margin-bottom: 16px;
        }
        
        .hero-badge-icon {
          width: 14px;
          height: 14px;
          color: #a78bfa;
          flex-shrink: 0;
        }
        
        .hero-badge-text {
          font-size: 11px;
          font-weight: 600;
          color: #a78bfa;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        
        .hero-headline-wrap {
          margin-bottom: 12px;
        }
        
        .hero-headline {
          font-size: 1.75rem !important;
          font-weight: 700 !important;
          line-height: 1.2 !important;
          color: #ffffff !important;
          letter-spacing: -0.02em !important;
          padding-bottom: 8px !important;
          overflow: visible !important;
        }
        
        .hero-headline .split-parent,
        .hero-headline .split-word,
        .hero-headline .split-char {
          overflow: visible !important;
        }
        
        .hero-subheadline-wrap {
          margin-bottom: 24px;
        }
        
        .hero-subtext {
          font-size: 16px !important;
          line-height: 1.6 !important;
          color: #b8b8c8 !important;
          max-width: 500px !important;
          margin: 0 auto !important;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5) !important;
        }
        
        .hero-buttons {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 320px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero-btn-primary,
        .hero-btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 16px 24px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .hero-btn-primary {
          background: rgba(124, 58, 237, 0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(124, 58, 237, 0.4);
          box-shadow: 0 8px 32px rgba(124, 58, 237, 0.3);
          color: #fff;
        }
        
        .hero-btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
        }
        
        .hero-btn-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }
        
        .hero-btn-primary:hover {
          background: rgba(124, 58, 237, 0.4);
          border-color: rgba(124, 58, 237, 0.6);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.5);
          transform: translateY(-2px);
        }
        
        .hero-btn-primary:active {
          transform: translateY(0);
        }
        
        .hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }
        
        .hero-btn-secondary:active {
          transform: translateY(0);
        }
        
        .hero-trust {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        
        .hero-trust-item {
          text-align: center;
        }
        
        .hero-trust-value {
          font-size: 20px;
          font-weight: 700;
          color: #a78bfa;
          margin-bottom: 2px;
        }
        
        .hero-trust-label {
          font-size: 11px;
          color: #6b6b80;
        }
        
        .hero-scroll-indicator {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: none;
        }
        
        .hero-scroll-mouse {
          width: 24px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }
        
        .hero-scroll-dot {
          width: 4px;
          height: 8px;
          background-color: #7c3aed;
          border-radius: 2px;
          animation: scrollBounce 2s infinite;
        }
        
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.5; }
        }
        
        /* Tablet and up */
        @media (min-width: 640px) {
          .hero-content {
            padding: 0 32px;
            margin-top: -5vh;
          }
          
          .hero-badge {
            padding: 8px 16px;
            margin-bottom: 32px;
          }
          
          .hero-badge-text {
            font-size: 12px;
          }
          
          .hero-headline {
            font-size: 2.5rem !important;
          }
          
          .hero-subtext {
            font-size: 18px !important;
          }
          
          .hero-buttons {
            flex-direction: row;
            max-width: none;
            width: auto;
            gap: 16px;
          }
          
          .hero-btn-primary,
          .hero-btn-secondary {
            width: auto;
            padding: 18px 32px;
            font-size: 16px;
          }
          
          .hero-trust {
            gap: 40px;
            margin-top: 48px;
            padding-top: 32px;
          }
          
          .hero-trust-value {
            font-size: 28px;
          }
          
          .hero-trust-label {
            font-size: 13px;
          }
          
          .hero-scroll-indicator {
            display: block;
            bottom: 40px;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .hero-headline {
            font-size: 3.25rem !important;
          }
          
          .hero-subtext {
            font-size: 20px !important;
          }
          
          .hero-scroll-indicator {
            bottom: 60px;
          }
        }
      `}</style>
    </section>
  );
}
