import React, { useEffect, useRef } from 'react';

export default function AnimatedText() {
  const pathsRef = useRef([]);
  
  useEffect(() => {
    pathsRef.current.forEach((path) => {
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      }
    });
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <style>{`
        @keyframes draw-text {
          0% { 
            stroke-dashoffset: 1000; 
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% { 
            stroke-dashoffset: 0; 
            opacity: 0.7;
          }
        }
        @keyframes text-glow {
          0%, 100% {
            filter: drop-shadow(0 0 2px rgba(239, 68, 68, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.9));
          }
        }
        .text-path {
          animation: draw-text 3s ease-in-out infinite, text-glow 2s ease-in-out infinite;
        }
        .text-path-delayed-1 {
          animation: draw-text 3s ease-in-out infinite 0.3s, text-glow 2s ease-in-out infinite 0.3s;
        }
        .text-path-delayed-2 {
          animation: draw-text 3s ease-in-out infinite 0.6s, text-glow 2s ease-in-out infinite 0.6s;
        }
        .text-path-delayed-3 {
          animation: draw-text 3s ease-in-out infinite 0.9s, text-glow 2s ease-in-out infinite 0.9s;
        }
        .text-path-delayed-4 {
          animation: draw-text 3s ease-in-out infinite 1.2s, text-glow 2s ease-in-out infinite 1.2s;
        }
        .text-path-delayed-5 {
          animation: draw-text 3s ease-in-out infinite 1.5s, text-glow 2s ease-in-out infinite 1.5s;
        }
      `}</style>
      
      <svg 
        className="w-64 h-32 md:w-96 md:h-48 lg:w-[600px] lg:h-[120px]"
        viewBox="0 0 600 120"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#dc2626" stopOpacity="1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.9" />
          </linearGradient>
          
          <linearGradient id="brightRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
            <stop offset="50%" stopColor="#f87171" stopOpacity="1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>
          
          <filter id="redGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* K */}
        <path
          ref={el => pathsRef.current[0] = el}
          d="M20 100 L20 20 M20 60 L60 20 M20 60 L60 100"
          fill="none"
          stroke="url(#redGradient)"
          strokeWidth="3"
          className="text-path"
          filter="url(#redGlow)"
        />
        
        {/* A */}
        <path
          ref={el => pathsRef.current[1] = el}
          d="M80 100 L100 20 L120 100 M90 70 L110 70"
          fill="none"
          stroke="url(#redGradient)"
          strokeWidth="3"
          className="text-path-delayed-1"
          filter="url(#redGlow)"
        />
        
        {/* Y */}
        <path
          ref={el => pathsRef.current[2] = el}
          d="M140 20 L160 60 L180 20 M160 60 L160 100"
          fill="none"
          stroke="url(#redGradient)"
          strokeWidth="3"
          className="text-path-delayed-2"
          filter="url(#redGlow)"
        />
        
        {/* O */}
        <path
          ref={el => pathsRef.current[3] = el}
          d="M220 60 A40 40 0 1 0 220 60.1"
          fill="none"
          stroke="url(#redGradient)"
          strokeWidth="3"
          className="text-path-delayed-3"
          filter="url(#redGlow)"
        />
        
        {/* Z */}
        <path
          ref={el => pathsRef.current[4] = el}
          d="M300 20 L340 20 L300 100 L340 100"
          fill="none"
          stroke="url(#redGradient)"
          strokeWidth="3"
          className="text-path-delayed-4"
          filter="url(#redGlow)"
        />
        
        {/* E */}
        <path
          ref={el => pathsRef.current[5] = el}
          d="M380 20 L380 100 M380 20 L420 20 M380 60 L410 60 M380 100 L420 100"
          fill="none"
          stroke="url(#redGradient)"
          strokeWidth="3"
          className="text-path-delayed-5"
          filter="url(#redGlow)"
        />
        
        {/* Moving red dots along the letters */}
        <circle r="4" fill="#f87171" filter="url(#redGlow)">
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path="M20 100 L20 20 M20 60 L60 20 M20 60 L60 100"
          />
          <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle r="3" fill="#f87171" filter="url(#redGlow)">
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path="M80 100 L100 20 L120 100 M90 70 L110 70"
            begin="0.3s"
          />
          <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2s" repeatCount="indefinite" begin="0.3s" />
        </circle>
      </svg>
    </div>
  );
}
