"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  beforeAlt = "Before pressure washing service",
  afterAlt = "After pressure washing service",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  // Handle click/tap to move slider
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div 
      ref={containerRef} 
      className="ba-slider-container"
      onClick={handleClick}
    >
      {/* Before image (full width, behind) */}
      <div className="ba-image ba-before">
        {beforeImage ? (
          <img src={beforeImage} alt={beforeAlt} draggable={false} loading="lazy" />
        ) : (
          <div className="ba-placeholder ba-placeholder-before">
            <span>{beforeLabel}</span>
          </div>
        )}
        <span className="ba-label ba-label-before">{beforeLabel}</span>
      </div>

      {/* After image (clipped based on slider position) */}
      <div 
        className="ba-image ba-after"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {afterImage ? (
          <img src={afterImage} alt={afterAlt} draggable={false} loading="lazy" />
        ) : (
          <div className="ba-placeholder ba-placeholder-after">
            <span>{afterLabel}</span>
          </div>
        )}
        <span className="ba-label ba-label-after">{afterLabel}</span>
      </div>

      {/* Slider handle */}
      <div 
        className="ba-slider-handle"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="ba-slider-line" />
        <div className="ba-slider-button">
          <svg viewBox="0 0 24 24" fill="none" className="ba-slider-arrows">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg viewBox="0 0 24 24" fill="none" className="ba-slider-arrows">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <style jsx global>{`
        .ba-slider-container {
          position: relative;
          width: 100%;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          cursor: ew-resize;
          user-select: none;
          -webkit-user-select: none;
        }
        
        .ba-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .ba-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
        
        .ba-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
        }
        
        .ba-placeholder-before {
          background: linear-gradient(135deg, #1a1a2e 0%, #16161a 100%);
          color: #4a4a5a;
        }
        
        .ba-placeholder-after {
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
          color: #a78bfa;
        }
        
        .ba-before {
          z-index: 1;
        }
        
        .ba-after {
          z-index: 2;
        }
        
        .ba-label {
          position: absolute;
          bottom: 12px;
          padding: 4px 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          border-radius: 4px;
          pointer-events: none;
        }
        
        .ba-label-before {
          right: 12px;
          background: rgba(0, 0, 0, 0.6);
          color: #888;
        }
        
        .ba-label-after {
          left: 12px;
          background: rgba(124, 58, 237, 0.8);
          color: #fff;
        }
        
        .ba-slider-handle {
          position: absolute;
          top: 0;
          height: 100%;
          z-index: 10;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: ew-resize;
        }
        
        .ba-slider-line {
          position: absolute;
          top: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #7c3aed 0%, #3b82f6 100%);
          box-shadow: 0 0 10px rgba(124, 58, 237, 0.5);
        }
        
        .ba-slider-button {
          position: relative;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.5);
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .ba-slider-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(124, 58, 237, 0.7);
        }
        
        .ba-slider-arrows {
          width: 14px;
          height: 14px;
          color: #fff;
        }
        
        /* Tablet */
        @media (min-width: 640px) {
          .ba-slider-container {
            height: 220px;
            border-radius: 14px;
          }
          
          .ba-placeholder {
            font-size: 16px;
          }
          
          .ba-label {
            font-size: 11px;
            padding: 5px 12px;
          }
          
          .ba-slider-button {
            width: 44px;
            height: 44px;
          }
          
          .ba-slider-arrows {
            width: 16px;
            height: 16px;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .ba-slider-container {
            height: 240px;
            border-radius: 16px;
          }
          
          .ba-slider-button {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </div>
  );
}

