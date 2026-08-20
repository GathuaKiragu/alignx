import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="hero" className="relative bg-[#00332A] overflow-hidden min-h-[520px] lg:min-h-[580px] flex items-stretch">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00261F] via-[#00332A] to-[#002E26] pointer-events-none" />

      {/* Grid wrapper for Left Content & Right Diagonal Office Visual */}
      <div className="relative w-full max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between z-10">
        
        {/* Left Side: Typography & CTAs */}
        <div className="w-full lg:w-[53%] py-10 sm:py-14 lg:py-16 xl:py-20 lg:pr-8 text-left z-20">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#C99A3D]"></span>
            <span className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C99A3D]">
              EXECUTION-LED TRANSFORMATION PARTNER
            </span>
          </div>

          {/* Main Editorial Serif Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-normal text-white leading-[1.12] tracking-tight mb-3">
            Beyond Consulting. <br />
            <span className="text-[#C99A3D] font-serif italic font-normal">We Execute.</span>
          </h1>

          {/* Decorative Diamond Line */}
          <div className="flex items-center gap-2 my-4 opacity-80">
            <div className="w-6 h-[0.5px] bg-[#C99A3D]"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C99A3D]"></div>
            <div className="w-10 h-[0.5px] bg-[#C99A3D]/60"></div>
          </div>

          {/* Subheading / Description */}
          <p className="text-white/80 text-xs sm:text-[13.5px] leading-relaxed max-w-lg font-normal mb-8 text-slate-200">
            AlignX Consulting Limited is an execution-led transformation partner that converts vision and strategy into measurable outcomes across projects, people, technology, and operations.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-0.5">
            {/* Primary Gold Button */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-sm bg-gradient-to-r from-[#DFB559] via-[#C99A3D] to-[#B38327] text-[#00261F] font-semibold text-xs sm:text-sm tracking-wide shadow-[0_4px_16px_rgba(201,154,61,0.25)] hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary Outlined Button */}
            <a
              href="#services"
              className="inline-flex items-center px-6 sm:px-7 py-2.5 sm:py-3 rounded-sm border border-[#C99A3D]/70 text-white hover:text-[#C99A3D] hover:border-[#C99A3D] hover:bg-white/5 font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right Side: Architectural Executive Visual with Slanted Angle */}
        <div className="w-full lg:w-[47%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 h-[360px] sm:h-[420px] lg:h-full overflow-hidden flex items-stretch">
          
          {/* Slanted Container on Desktop */}
          <div className="relative w-full h-full hero-diagonal-split overflow-hidden">
            
            {/* Rich Architectural Executive Headquarters Backdrop */}
            <div className="absolute inset-0 bg-[#001D17]">
              
              {/* Wood Paneling Texture & Lighting Layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-[#0d221d]/60 to-[#1b150f]/75" />

              {/* Architectural Interior SVG Scene */}
              <svg className="absolute inset-0 w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 600">
                <defs>
                  {/* Spotlights and Ambient Wall Glow */}
                  <radialGradient id="spotlightGlow" cx="68%" cy="28%" r="48%">
                    <stop offset="0%" stopColor="#FFE6A3" stopOpacity="0.55" />
                    <stop offset="35%" stopColor="#C99A3D" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#001812" stopOpacity="0" />
                  </radialGradient>

                  <linearGradient id="woodWall" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E1813" />
                    <stop offset="35%" stopColor="#30261E" />
                    <stop offset="70%" stopColor="#3E3126" />
                    <stop offset="100%" stopColor="#251C15" />
                  </linearGradient>

                  <linearGradient id="goldPlate" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF4D0" />
                    <stop offset="25%" stopColor="#E5C073" />
                    <stop offset="60%" stopColor="#C99A3D" />
                    <stop offset="100%" stopColor="#8C6517" />
                  </linearGradient>

                  <linearGradient id="soffitLight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFE08F" stopOpacity="0.8" />
                    <stop offset="10%" stopColor="#DFB559" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#DFB559" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Perspective Ceiling & Soffit */}
                <polygon points="0,0 800,0 800,80 0,50" fill="#09120F" />
                <polygon points="180,0 800,0 800,65 180,40" fill="url(#soffitLight)" opacity="0.4" />
                
                {/* Executive Feature Wall */}
                <rect x="300" y="35" width="500" height="565" fill="url(#woodWall)" />
                {/* Vertical slats on wood wall */}
                <line x1="360" y1="35" x2="360" y2="600" stroke="#15100B" strokeWidth="2" opacity="0.6" />
                <line x1="420" y1="35" x2="420" y2="600" stroke="#15100B" strokeWidth="2" opacity="0.6" />
                <line x1="480" y1="35" x2="480" y2="600" stroke="#15100B" strokeWidth="2" opacity="0.6" />
                <line x1="540" y1="35" x2="540" y2="600" stroke="#15100B" strokeWidth="2" opacity="0.6" />
                <line x1="600" y1="35" x2="600" y2="600" stroke="#15100B" strokeWidth="2" opacity="0.6" />
                <line x1="660" y1="35" x2="660" y2="600" stroke="#15100B" strokeWidth="2" opacity="0.6" />
                <line x1="720" y1="35" x2="720" y2="600" stroke="#15100B" strokeWidth="2" opacity="0.6" />

                {/* Soft warm spotlight behind feature wall */}
                <ellipse cx="600" cy="220" rx="220" ry="180" fill="url(#spotlightGlow)" />

                {/* Left glass windows / boardroom lounge in background */}
                <rect x="60" y="60" width="240" height="390" fill="#041F1A" opacity="0.8" />
                {/* Window mullions */}
                <line x1="160" y1="60" x2="160" y2="450" stroke="#00332A" strokeWidth="3" />
                <line x1="60" y1="220" x2="300" y2="220" stroke="#00332A" strokeWidth="3" />

                {/* Architectural Plant in Corner */}
                <path d="M210,380 Q190,320 170,280 Q200,310 210,380" fill="#0E3D31" opacity="0.85" />
                <path d="M215,380 Q230,300 250,260 Q235,310 215,380" fill="#154B3E" opacity="0.85" />
                <path d="M212,380 Q205,260 208,220 Q215,270 212,380" fill="#1E5C4E" opacity="0.9" />

                {/* Modern Emerald Velvet Armchairs */}
                <path d="M100,430 C100,390 130,380 170,380 C210,380 240,390 240,430 L230,500 L110,500 Z" fill="#052E25" stroke="#083E32" strokeWidth="2" />
                <ellipse cx="170" cy="440" rx="55" ry="18" fill="#0A3C31" />
                {/* Small brass round coffee table */}
                <ellipse cx="260" cy="470" rx="45" ry="14" fill="#3D2D14" stroke="#C99A3D" strokeWidth="1.5" />
                <line x1="260" y1="484" x2="260" y2="525" stroke="#C99A3D" strokeWidth="3" />
                
                {/* 3D Wall-Mounted Signage: AlignX Feature */}
                <g transform="translate(520, 160)">
                  {/* Shadow of Emblem */}
                  <polygon points="53,8 77,8 135,94 111,94" fill="#050505" opacity="0.6" />
                  <polygon points="135,8 111,8 97,29 110,48 123,28" fill="#050505" opacity="0.6" />
                  <polygon points="87,62 74,80 49,100 73,100 87,80" fill="#050505" opacity="0.6" />

                  {/* 3D Gold Emblem */}
                  <polygon points="50,5 74,5 132,91 108,91" fill="url(#goldPlate)" filter="drop-shadow(0px 8px 12px rgba(0,0,0,0.5))" />
                  <polygon points="132,5 108,5 94,26 107,45 120,25" fill="#FFE8A3" />
                  <polygon points="84,59 71,77 46,97 70,97 84,77" fill="url(#goldPlate)" />

                  {/* Wordmark ALIGNX */}
                  <text x="91" y="148" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="29" fontWeight="600" letterSpacing="7" filter="drop-shadow(0px 4px 8px rgba(0,0,0,0.6))">
                    ALIGN<tspan fill="#C99A3D">X</tspan>
                  </text>

                  {/* Subtitle */}
                  <line x1="15" y1="168" x2="45" y2="168" stroke="#C99A3D" strokeWidth="1.5" />
                  <text x="91" y="172" textAnchor="middle" fill="#E2C485" fontFamily="sans-serif" fontSize="10" fontWeight="500" letterSpacing="4">
                    CONSULTING LIMITED
                  </text>
                  <line x1="137" y1="168" x2="167" y2="168" stroke="#C99A3D" strokeWidth="1.5" />

                  {/* Tagline */}
                  <text x="91" y="196" textAnchor="middle" fill="#C99A3D" fontFamily="Georgia, serif" fontSize="13" fontStyle="italic" letterSpacing="1">
                    Beyond Consulting. We Execute.
                  </text>
                </g>

                {/* Floor glow & reflection */}
                <polygon points="0,510 800,510 800,600 0,600" fill="#07130F" />
                <ellipse cx="600" cy="540" rx="160" ry="30" fill="#C99A3D" opacity="0.08" />
              </svg>

              {/* Diagonal edge soft gold border line */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-[#DFB559] via-[#C99A3D]/60 to-transparent pointer-events-none transform -skew-x-[11deg] origin-top opacity-50" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
