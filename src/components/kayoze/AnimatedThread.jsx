import React, { useEffect, useRef } from 'react';

export default function AnimatedThread() {
  const pathRef = useRef(null);
  
  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes thread-flow {
          0% { 
            stroke-dashoffset: 2000; 
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
          100% { 
            stroke-dashoffset: 0; 
            opacity: 0.3;
          }
        }
        @keyframes glow-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 2px rgba(201, 169, 98, 0.5)) drop-shadow(0 0 5px rgba(201, 169, 98, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(201, 169, 98, 0.8)) drop-shadow(0 0 15px rgba(201, 169, 98, 0.5));
          }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-3deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .thread-path {
          animation: thread-flow 4s ease-in-out infinite, glow-pulse 2s ease-in-out infinite;
        }
        .thread-path-delayed-1 {
          animation: thread-flow 4s ease-in-out infinite 0.5s, glow-pulse 2s ease-in-out infinite 0.3s;
        }
        .thread-path-delayed-2 {
          animation: thread-flow 4s ease-in-out infinite 1s, glow-pulse 2s ease-in-out infinite 0.6s;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
      
      <svg 
        className="absolute w-full h-full opacity-70"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c9a962" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#d4b876" stopOpacity="1" />
            <stop offset="100%" stopColor="#c9a962" stopOpacity="0.9" />
          </linearGradient>
          
          <linearGradient id="brightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c9a962" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffd700" stopOpacity="1" />
            <stop offset="100%" stopColor="#c9a962" stopOpacity="0" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Scissors Symbol */}
          <symbol id="scissors" viewBox="0 0 24 24">
            <path d="M20 4L8 12L20 20" stroke="#c9a962" strokeWidth="2" fill="none"/>
            <circle cx="6" cy="6" r="2" fill="#c9a962"/>
            <circle cx="6" cy="18" r="2" fill="#c9a962"/>
          </symbol>

          {/* Thimble Symbol */}
          <symbol id="thimble" viewBox="0 0 24 24">
            <path d="M12 2C8 2 8 6 8 8C8 12 12 16 12 16C12 16 16 12 16 8C16 6 16 2 12 2Z" fill="#c9a962"/>
            <ellipse cx="12" cy="8" rx="4" ry="1" fill="#d4b876"/>
          </symbol>

          {/* Button Symbol */}
          <symbol id="button" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" fill="#c9a962" stroke="#d4b876" strokeWidth="1"/>
            <circle cx="12" cy="12" r="2" fill="#d4b876"/>
          </symbol>

          {/* Pin Symbol */}
          <symbol id="pin" viewBox="0 0 24 24">
            <path d="M12 2C8 2 8 6 8 8C8 12 12 16 12 16C12 16 16 12 16 8C16 6 16 2 12 2Z" fill="#c9a962"/>
            <line x1="12" y1="16" x2="12" y2="22" stroke="#c9a962" strokeWidth="2"/>
          </symbol>

          {/* Measuring Tape Symbol */}
          <symbol id="tape" viewBox="0 0 24 24">
            <rect x="4" y="8" width="16" height="4" fill="#c9a962" rx="1"/>
            <line x1="4" y1="10" x2="20" y2="10" stroke="#d4b876" strokeWidth="1"/>
            <line x1="8" y1="8" x2="8" y2="12" stroke="#d4b876" strokeWidth="0.5"/>
            <line x1="12" y1="8" x2="12" y2="12" stroke="#d4b876" strokeWidth="0.5"/>
            <line x1="16" y1="8" x2="16" y2="12" stroke="#d4b876" strokeWidth="0.5"/>
          </symbol>

          {/* Spool Symbol */}
          <symbol id="spool" viewBox="0 0 24 24">
            <rect x="8" y="4" width="8" height="16" fill="#c9a962" rx="1"/>
            <ellipse cx="12" cy="4" rx="6" ry="2" fill="#d4b876"/>
            <ellipse cx="12" cy="20" rx="6" ry="2" fill="#d4b876"/>
          </symbol>
        </defs>
        
        {/* Elegant curved thread paths with glow */}
        <path
          ref={pathRef}
          d="M-50 400 Q 200 100, 400 300 T 800 200 T 1250 400"
          fill="none"
          stroke="url(#threadGradient)"
          strokeWidth="3.5"
          className="thread-path"
          filter="url(#glow)"
        />
        <path
          d="M-50 500 Q 300 200, 500 400 T 900 300 T 1250 500"
          fill="none"
          stroke="url(#threadGradient)"
          strokeWidth="3"
          className="thread-path-delayed-1"
          filter="url(#glow)"
        />
        <path
          d="M-50 600 Q 250 350, 450 500 T 850 400 T 1250 600"
          fill="none"
          stroke="url(#threadGradient)"
          strokeWidth="2.5"
          className="thread-path-delayed-2"
          filter="url(#glow)"
        />
        
        {/* Moving bright spots along the threads */}
        <circle r="8" fill="#ffd700" filter="url(#glow)">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M-50 400 Q 200 100, 400 300 T 800 200 T 1250 400"
          />
          <animate attributeName="opacity" values="0;0.9;0.9;0" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <circle r="7" fill="#ffd700" filter="url(#glow)">
          <animateMotion
            dur="3.5s"
            repeatCount="indefinite"
            path="M-50 500 Q 300 200, 500 400 T 900 300 T 1250 500"
            begin="0.5s"
          />
          <animate attributeName="opacity" values="0;0.9;0.9;0" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        
        <circle r="7" fill="#ffd700" filter="url(#glow)">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M-50 600 Q 250 350, 450 500 T 850 400 T 1250 600"
            begin="1s"
          />
          <animate attributeName="opacity" values="0;0.9;0.9;0" dur="4s" repeatCount="indefinite" begin="1s" />
        </circle>

        {/* Floating sewing tools */}
        <use href="#scissors" x="150" y="150" width="40" height="40" className="animate-float-slow" opacity="0.6"/>
        <use href="#thimble" x="1000" y="200" width="30" height="30" className="animate-float-medium" opacity="0.5"/>
        <use href="#button" x="200" y="600" width="25" height="25" className="animate-float-fast" opacity="0.7"/>
        <use href="#pin" x="1100" y="500" width="28" height="28" className="animate-float-slow" opacity="0.6"/>
        <use href="#tape" x="800" y="650" width="35" height="35" className="animate-float-medium" opacity="0.5"/>
        <use href="#spool" x="400" y="700" width="32" height="32" className="animate-float-fast" opacity="0.6"/>
      </svg>
      
      {/* Floating needle with glow */}
      <div className="absolute top-1/4 right-1/4 animate-float-slow">
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-70" style={{filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))'}}>
          <line x1="10" y1="50" x2="50" y2="10" stroke="#ffd700" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="10" r="4" fill="#ffd700" />
          <circle cx="50" cy="10" r="6" fill="#ffd700" opacity="0.5">
            <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-1/3 left-1/4 animate-float-medium">
        <svg width="45" height="45" viewBox="0 0 24 24" opacity="0.6" style={{filter: 'drop-shadow(0 0 5px rgba(201, 169, 98, 0.6))'}}>
          <use href="#scissors"/>
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-1/3 animate-float-slow">
        <svg width="35" height="35" viewBox="0 0 24 24" opacity="0.5" style={{filter: 'drop-shadow(0 0 4px rgba(201, 169, 98, 0.5))'}}>
          <use href="#button"/>
        </svg>
      </div>

      <div className="absolute top-2/3 right-1/3 animate-float-fast">
        <svg width="40" height="40" viewBox="0 0 24 24" opacity="0.7" style={{filter: 'drop-shadow(0 0 6px rgba(201, 169, 98, 0.7))'}}>
          <use href="#thimble"/>
        </svg>
      </div>

      {/* Rotating spool */}
      <div className="absolute bottom-1/3 left-1/2 animate-spin-slow">
        <svg width="50" height="50" viewBox="0 0 24 24" opacity="0.6" style={{filter: 'drop-shadow(0 0 5px rgba(201, 169, 98, 0.6))'}}>
          <use href="#spool"/>
        </svg>
      </div>
    </div>
  );
}