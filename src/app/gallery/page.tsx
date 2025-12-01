"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Masonry = dynamic(() => import("@/components/Masonry"), {
  ssr: false,
  loading: () => (
    <div className="gallery-loading">
      <div className="loading-spinner" />
    </div>
  ),
});

// Gallery items with varying heights for true masonry effect
const galleryItems = [
  // House washing
  { id: 1, img: "/images/gallery/vinyl-siding-house-washing-pinellas-county.jpg", height: 480 },
  { id: 2, img: "/images/gallery/house-exterior-soft-wash-st-petersburg.jpg", height: 520 },
  { id: 3, img: "/images/gallery/gray-house-exterior-pressure-washing.jpg", height: 460 },
  { id: 4, img: "/images/gallery/yellow-siding-house-washing-florida.jpg", height: 420 },
  { id: 5, img: "/images/gallery/vinyl-siding-soft-wash-results.jpg", height: 400 },
  { id: 6, img: "/images/gallery/house-porch-siding-cleaning-pinellas.jpg", height: 440 },
  // Pool decks
  { id: 7, img: "/images/gallery/pool-deck-concrete-cleaning-florida.jpg", height: 340 },
  { id: 8, img: "/images/gallery/backyard-pool-deck-cleaning-florida.jpg", height: 380 },
  // Decks & walkways
  { id: 9, img: "/images/gallery/composite-deck-stairs-cleaning-pinellas.jpg", height: 500 },
  { id: 10, img: "/images/gallery/composite-deck-cleaning-st-petersburg.jpg", height: 460 },
  { id: 11, img: "/images/gallery/wood-deck-stairs-pressure-washing.jpg", height: 480 },
  { id: 12, img: "/images/gallery/paver-walkway-pressure-washing-clearwater.jpg", height: 440 },
  // Before/after originals
  { id: 13, img: "/images/poolAfter.png", height: 400 },
  { id: 14, img: "/images/houseafter.png", height: 520 },
  { id: 15, img: "/images/sidingafter.png", height: 340 },
  { id: 16, img: "/images/poolBefore.png", height: 460 },
  { id: 17, img: "/images/housebefore.png", height: 380 },
  { id: 18, img: "/images/sidingbefore.png", height: 440 },
];

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      {/* Header */}
      <header className="gallery-header">
        <span className="gallery-label">Our Work</span>
        <h1>Project Gallery</h1>
        <p>Real transformations from customers across Pinellas County</p>
      </header>

      {/* Masonry Grid */}
      <section className="gallery-section">
        <Masonry
          items={galleryItems}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
        />
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <div className="cta-content">
          <h2>Want results like these?</h2>
          <Link href="/contact" className="cta-link">
            Get Your Free Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style jsx global>{`
        .gallery-page {
          min-height: 100vh;
          background: #030308;
          padding-bottom: 80px;
        }

        /* Header */
        .gallery-header {
          padding: 140px 24px 50px;
          text-align: center;
        }

        .gallery-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          color: #a78bfa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .gallery-header h1 {
          font-size: 2.75rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
        }

        .gallery-header p {
          font-size: 16px;
          color: #6b6b80;
          max-width: 400px;
          margin: 0 auto;
        }

        /* Gallery Section */
        .gallery-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 16px;
          min-height: 800px;
        }

        /* Loading */
        .gallery-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
        }

        .loading-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid rgba(124, 58, 237, 0.2);
          border-top-color: #7c3aed;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* CTA */
        .gallery-cta {
          max-width: 1200px;
          margin: 60px auto 0;
          padding: 0 20px;
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 40px 24px;
          background: rgba(124, 58, 237, 0.06);
          border: 1px solid rgba(124, 58, 237, 0.15);
          border-radius: 16px;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 1.35rem;
          font-weight: 600;
          color: #fff;
        }

        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);
        }

        .cta-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(124, 58, 237, 0.45);
        }

        /* Responsive */
        @media (min-width: 640px) {
          .gallery-header {
            padding: 150px 24px 60px;
          }

          .gallery-header h1 {
            font-size: 3.25rem;
          }

          .gallery-section {
            padding: 0 24px;
          }

          .cta-content {
            flex-direction: row;
            justify-content: space-between;
            padding: 32px 40px;
          }

          .cta-content h2 {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .gallery-header h1 {
            font-size: 3.5rem;
          }

          .gallery-section {
            padding: 0 32px;
          }

          .cta-content {
            padding: 40px 48px;
          }
        }
      `}</style>
    </main>
  );
}
