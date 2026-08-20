import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  return (
    <div className={`inline-flex flex-col items-center select-none group cursor-pointer ${className}`}>
      {/* Stylized Gold X Symbol */}
      <div className="relative mb-1 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 90" 
          className={`${size === 'lg' ? 'w-12 h-11' : size === 'sm' ? 'w-8 h-7' : 'w-10 h-9'} drop-shadow-[0_2px_8px_rgba(201,154,61,0.3)] transition-transform duration-300 group-hover:scale-105`}
        >
          <defs>
            <linearGradient id="goldGradLogo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D78A" />
              <stop offset="35%" stopColor="#D8A94C" />
              <stop offset="70%" stopColor="#C99A3D" />
              <stop offset="100%" stopColor="#9C7221" />
            </linearGradient>
            <linearGradient id="goldGradAccent" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF2C6" />
              <stop offset="50%" stopColor="#DFB559" />
              <stop offset="100%" stopColor="#8A6318" />
            </linearGradient>
          </defs>
          
          {/* Stylized X Strokes */}
          {/* Main Diagonal Top-Left to Bottom-Right */}
          <polygon 
            points="12,5 34,5 88,85 66,85" 
            fill="url(#goldGradLogo)" 
          />
          {/* Cross Diagonal Top-Right to Bottom-Left with dynamic notch/cut */}
          <polygon 
            points="88,5 66,5 54,23 65,39 77,22" 
            fill="url(#goldGradAccent)" 
          />
          <polygon 
            points="46,51 35,67 12,85 34,85 46,67" 
            fill="url(#goldGradLogo)" 
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="text-center flex flex-col items-center">
        <div className="flex items-center tracking-[0.28em] font-medium text-lg text-white font-sans leading-none pl-1">
          <span>ALIGN</span>
          <span className="text-[#C99A3D] font-semibold">X</span>
        </div>

        {/* Sub-label: — CONSULTING LIMITED — */}
        <div className="flex items-center gap-1.5 mt-1">
          <div className="w-2.5 h-[0.5px] bg-[#C99A3D]/70"></div>
          <span className="text-[7px] uppercase tracking-[0.24em] font-medium text-white/80 whitespace-nowrap">
            CONSULTING LIMITED
          </span>
          <div className="w-2.5 h-[0.5px] bg-[#C99A3D]/70"></div>
        </div>

        {/* Tagline: Beyond Consulting. We Execute. */}
        <div className="mt-1 text-[8.5px] italic text-[#C99A3D] font-serif tracking-wide font-normal">
          Beyond Consulting. We Execute.
        </div>
      </div>
    </div>
  );
};
