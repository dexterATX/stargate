"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
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
            {/* Close button */}
            <div className="mobile-menu-close">
              <button
                className="mobile-close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            <div className="mobile-menu-content">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="mobile-cta-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  href="/contact"
                  className="mobile-cta-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Zap className="mobile-cta-icon" />
                  Free Estimate
                </Link>
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
        
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: linear-gradient(180deg, #030308 0%, #07070f 100%);
          z-index: 40;
        }
        
        .mobile-menu-close {
          display: flex;
          justify-content: flex-end;
          padding: 20px;
        }
        
        .mobile-close-btn {
          padding: 8px;
          color: #6b6b80;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        .mobile-menu-content {
          padding: 0 24px;
          padding-top: 20px;
        }
        
        .mobile-nav-link {
          display: block;
          padding: 16px 0;
          font-size: 20px;
          font-weight: 500;
          color: #8b8b9e;
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: color 0.2s;
        }
        
        .mobile-nav-link:hover {
          color: #a78bfa;
        }
        
        .mobile-cta-wrap {
          margin-top: 32px;
        }
        
        .mobile-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 28px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          color: #fff;
          font-weight: 600;
          font-size: 15px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 0 30px rgba(124, 58, 237, 0.4);
        }
        
        .mobile-cta-icon {
          width: 18px;
          height: 18px;
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
