import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const titleSizes = {
    sm: 'text-sm tracking-[0.22em]',
    md: 'text-base tracking-[0.24em]',
    lg: 'text-xl tracking-[0.26em]'
  };

  const subSizes = {
    sm: 'text-[6.5px] tracking-[0.2em]',
    md: 'text-[7.5px] tracking-[0.22em]',
    lg: 'text-[9px] tracking-[0.24em]'
  };

  const taglineSizes = {
    sm: 'text-[8px]',
    md: 'text-[9px]',
    lg: 'text-[11px]'
  };

  return (
    <div className={`inline-flex flex-col items-center select-none group cursor-pointer ${className}`}>
      {/* Refined Luxury Serif X Monogram (matching wall emblem) */}
      <div className="relative mb-1 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          className={`${iconSizes[size]} drop-shadow-[0_2px_10px_rgba(201,154,61,0.35)] transition-transform duration-300 group-hover:scale-105`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Rich 3D Gold Gradient */}
            <linearGradient id="luxuryGoldFront" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2C6" />
              <stop offset="25%" stopColor="#E5C170" />
              <stop offset="60%" stopColor="#C99A3D" />
              <stop offset="90%" stopColor="#A87B24" />
              <stop offset="100%" stopColor="#785310" />
            </linearGradient>

            {/* Deep Emerald Accent with Gold Sheen */}
            <linearGradient id="emeraldBack" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E5C4E" />
              <stop offset="50%" stopColor="#0F382E" />
              <stop offset="100%" stopColor="#08221C" />
            </linearGradient>

            <linearGradient id="goldEdge" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DFB559" />
              <stop offset="100%" stopColor="#9C7221" />
            </linearGradient>
          </defs>

          {/* Stroke 1: Left-to-Right Emerald Serif Diagonal with Gold Rim */}
          <g filter="drop-shadow(0 1px 2px rgba(0,0,0,0.4))">
            {/* Left-to-Right Diagonal Bar with Classical Serif Brackets */}
            <path
              d="M18 16 H36 L34 22 L66 78 L64 84 H82 L80 78 L72 78 L38 22 L46 22 L44 16 Z"
              fill="url(#emeraldBack)"
              stroke="url(#goldEdge)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </g>

          {/* Stroke 2: Right-to-Left Luxury 3D Gold Serif Diagonal (Overlapping) */}
          <g filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))">
            {/* Top-Right to Bottom-Left Main Gold Arm */}
            <path
              d="M82 16 H64 L66 22 L54 44 L60 52 L72 30 L80 22 L82 16 Z"
              fill="url(#luxuryGoldFront)"
            />
            <path
              d="M48 54 L36 78 L28 78 L26 84 H18 L20 78 L38 42 L48 54 Z"
              fill="url(#luxuryGoldFront)"
            />
            {/* Full Front Cross Diagonal in Polished Gold */}
            <path
              d="M82 16 H62 L64 21 C60 21 57 23 54 28 L24 74 C21 78 19 79 16 79 L14 84 H38 L36 79 C32 79 30 78 33 73 L62 27 C65 22 68 21 72 21 L74 21 L82 16 Z"
              fill="url(#luxuryGoldFront)"
              stroke="#FFF5D6"
              strokeWidth="0.4"
            />
          </g>
        </svg>
      </div>

      {/* Brand Text Block */}
      <div className="text-center flex flex-col items-center">
        {/* ALIGNX Serif Wordmark */}
        <div 
          className={`font-serif uppercase font-semibold text-white leading-none ${titleSizes[size]}`}
          style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
        >
          <span>ALIGN</span>
          <span className="text-[#C99A3D]">X</span>
        </div>

        {/* Sub-label: — CONSULTING LIMITED — */}
        <div className="flex items-center justify-center gap-1.5 mt-1">
          <span className="w-2.5 sm:w-3 h-[0.5px] bg-[#C99A3D]"></span>
          <span className={`uppercase font-medium text-white/90 whitespace-nowrap ${subSizes[size]}`}>
            CONSULTING LIMITED
          </span>
          <span className="w-2.5 sm:w-3 h-[0.5px] bg-[#C99A3D]"></span>
        </div>

        {/* Tagline: Beyond Consulting. We Execute. */}
        <div 
          className={`mt-0.5 italic text-[#C99A3D] tracking-normal font-normal ${taglineSizes[size]}`}
          style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
        >
          Beyond Consulting. We Execute.
        </div>
      </div>
    </div>
  );
};
