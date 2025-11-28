"use client";

export function SectionDivider() {
  return (
    <div className="section-divider">
      <div className="gradient-divider">
        <div className="gradient-line" />
        <div className="gradient-glow" />
      </div>

      <style jsx global>{`
        .section-divider {
          position: relative;
          height: 60px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin: -20px 0;
          z-index: 5;
        }
        
        .gradient-divider {
          position: relative;
          width: 80%;
          max-width: 600px;
          height: 2px;
        }
        
        .gradient-line {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            #7c3aed 20%, 
            #3b82f6 50%, 
            #7c3aed 80%, 
            transparent 100%
          );
          border-radius: 2px;
        }
        
        .gradient-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 40px;
          background: radial-gradient(ellipse, rgba(124, 58, 237, 0.3) 0%, transparent 70%);
          animation: glowPulse 3s ease-in-out infinite;
        }
        
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        @media (max-width: 640px) {
          .section-divider {
            height: 40px;
            margin: -10px 0;
          }
          
          .gradient-divider {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
}
