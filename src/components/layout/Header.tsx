"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Zap, 
  Home, 
  Wrench, 
  Images, 
  Users, 
  DollarSign, 
  MessageSquare,
  Phone,
  Star,
  Shield
} from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/about", label: "About", icon: Users },
  { href: "/pricing", label: "Pricing", icon: DollarSign },
  { href: "/contact", label: "Contact", icon: MessageSquare },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="header">
      <nav className="header-nav">
        {/* Logo */}
        <Link href="/" className="header-logo">
          <div className="header-logo-icon">
            <Zap className="header-logo-zap" />
          </div>
          <span className="header-logo-text">
            Stargate<span className="header-logo-dot">.</span>
          </span>
        </Link>

        {/* Desktop Nav - Center */}
        <div className="header-desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="header-nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Link 
          href="/contact" 
          className="header-cta-btn"
          aria-label="Get a free pressure washing estimate"
        >
          Free Estimate
          <ChevronRight className="header-cta-icon" aria-hidden="true" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="header-mobile-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="mobile-menu-header">
              <Link href="/" className="mobile-menu-logo" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="header-logo-icon">
                  <Zap className="header-logo-zap" />
                </div>
                <span className="header-logo-text">
                  Stargate<span className="header-logo-dot">.</span>
                </span>
              </Link>
              <button
                className="mobile-close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mobile-menu-content">
              {/* Call CTA */}
              <motion.a
                href={`tel:${siteConfig.phoneRaw}`}
                className="mobile-call-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <div className="mobile-call-icon">
                  <Phone size={20} />
                </div>
                <div className="mobile-call-text">
                  <span className="mobile-call-label">Call Now</span>
                  <span className="mobile-call-number">{siteConfig.phone}</span>
                </div>
                <ChevronRight size={20} className="mobile-call-arrow" />
              </motion.a>

              {/* Navigation Links */}
              <div className="mobile-nav-list">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        className="mobile-nav-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon size={20} className="mobile-nav-icon" />
                        <span>{link.label}</span>
                        <ChevronRight size={18} className="mobile-nav-arrow" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <motion.div
                className="mobile-cta-wrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="mobile-cta-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Zap size={18} />
                  Get Free Estimate
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                className="mobile-trust"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="mobile-trust-item">
                  <Star size={14} />
                  <span>5-Star Rated</span>
                </div>
                <div className="mobile-trust-item">
                  <Shield size={14} />
                  <span>Fully Insured</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 12px;
        }
        
        .header-nav {
          max-width: 1100px;
          margin: 0 auto;
          padding: 12px 16px;
          background: linear-gradient(135deg, rgba(12, 12, 24, 0.95) 0%, rgba(7, 7, 15, 0.98) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 12px;
          border: 1px solid rgba(124, 58, 237, 0.15);
          box-shadow: 0 0 40px rgba(124, 58, 237, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .header-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        
        .header-logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .header-logo-zap {
          width: 18px;
          height: 18px;
          color: #fff;
        }
        
        .header-logo-text {
          font-size: 16px;
          font-weight: 700;
          color: #e8e8f0;
          letter-spacing: -0.5px;
        }
        
        .header-logo-dot {
          color: #7c3aed;
        }
        
        .header-desktop-nav {
          display: none;
        }
        
        .header-nav-link {
          padding: 10px 14px;
          font-size: 13px;
          font-weight: 500;
          color: #6b6b80;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        
        .header-nav-link:hover {
          color: #e8e8f0;
          background: rgba(124, 58, 237, 0.1);
        }
        
        .header-cta-btn {
          display: none;
        }
        
        .header-cta-icon {
          width: 14px;
          height: 14px;
        }
        
        .header-mobile-btn {
          display: flex;
          padding: 8px;
          color: #6b6b80;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: linear-gradient(180deg, #07070f 0%, #030308 100%);
          z-index: 100;
          display: flex;
          flex-direction: column;
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .mobile-menu-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        
        .mobile-close-btn {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b6b80;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .mobile-close-btn:active {
          background: rgba(255, 255, 255, 0.08);
        }
        
        .mobile-menu-content {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        /* Call Card */
        .mobile-call-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.08) 100%);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 14px;
          text-decoration: none;
          margin-bottom: 24px;
        }

        .mobile-call-card:active {
          transform: scale(0.98);
        }

        .mobile-call-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }

        .mobile-call-text {
          flex: 1;
        }

        .mobile-call-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #a78bfa;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .mobile-call-number {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
        }

        .mobile-call-arrow {
          color: #6b6b80;
        }

        /* Nav List */
        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 14px;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          transition: all 0.2s;
        }

        .mobile-nav-link:active {
          background: rgba(124, 58, 237, 0.1);
          border-color: rgba(124, 58, 237, 0.2);
        }

        .mobile-nav-icon {
          color: #a78bfa;
        }

        .mobile-nav-link span {
          flex: 1;
        }

        .mobile-nav-arrow {
          color: #3a3a4a;
        }
        
        /* CTA */
        .mobile-cta-wrap {
          margin-top: 24px;
        }
        
        .mobile-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 18px 28px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          color: #fff;
          font-weight: 700;
          font-size: 16px;
          border-radius: 14px;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(124, 58, 237, 0.4);
        }

        .mobile-cta-btn:active {
          transform: scale(0.98);
        }

        /* Trust */
        .mobile-trust {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: auto;
          padding-top: 24px;
        }

        .mobile-trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: #6b6b80;
        }

        .mobile-trust-item svg {
          color: #22c55e;
        }
        
        /* Tablet and up */
        @media (min-width: 768px) {
          .header {
            padding: 16px;
          }
          
          .header-nav {
            padding: 14px 24px;
            border-radius: 14px;
          }
          
          .header-logo {
            gap: 10px;
          }
          
          .header-logo-text {
            font-size: 18px;
          }
          
          .header-desktop-nav {
            display: flex;
            align-items: center;
            gap: 2px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 10px;
            padding: 4px;
            border: 1px solid rgba(255, 255, 255, 0.04);
          }
          
          .header-cta-btn {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 10px 20px;
            background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
            color: #fff;
            font-size: 13px;
            font-weight: 600;
            border-radius: 10px;
            text-decoration: none;
            box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
            transition: all 0.3s ease;
          }
          
          .header-cta-btn:hover {
            box-shadow: 0 0 40px rgba(124, 58, 237, 0.5);
            transform: translateY(-1px);
          }
          
          .header-mobile-btn {
            display: none;
          }
          
          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
