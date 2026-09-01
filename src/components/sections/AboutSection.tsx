import React from 'react';
import { ArrowRight } from 'lucide-react';
import { statsData, StatItem } from '../../data/websiteData';

const StatIcon: React.FC<{ type: StatItem['iconName'] }> = ({ type }) => {
  switch (type) {
    case 'network':
      // 3 People Group / Team network
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 stroke-current text-[#C99A3D] mb-3" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="10" r="4" />
          <path d="M12 24c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="8" cy="14" r="3" />
          <path d="M3 26c0-2.5 2-4.5 4.5-4.5 1.4 0 2.6.6 3.4 1.6" />
          <circle cx="28" cy="14" r="3" />
          <path d="M25.1 23.1c.8-1 2-1.6 3.4-1.6 2.5 0 4.5 2 4.5 4.5" />
        </svg>
      );

    case 'chart':
      // Rising Bar Chart with steps
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 stroke-current text-[#C99A3D] mb-3" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="18" width="5" height="12" rx="1" />
          <rect x="15" y="12" width="5" height="18" rx="1" />
          <rect x="23" y="6" width="5" height="24" rx="1" />
        </svg>
      );

    case 'globe':
      // Wireframe Globe / Latitude Longitude
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 stroke-current text-[#C99A3D] mb-3" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="12" />
          <ellipse cx="18" cy="18" rx="5" ry="12" />
          <line x1="6" y1="18" x2="30" y2="18" />
          <line x1="9" y1="11" x2="27" y2="11" />
          <line x1="9" y1="25" x2="27" y2="25" />
        </svg>
      );

    case 'trophy':
      // Trophy Cup
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 stroke-current text-[#C99A3D] mb-3" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 7h16v8c0 4.4-3.6 8-8 8s-8-3.6-8-8V7z" />
          <path d="M10 11H6a2 2 0 00-2 2v1a4 4 0 004 4h2" />
          <path d="M26 11h4a2 2 0 012 2v1a4 4 0 01-4 4h-2" />
          <line x1="18" y1="23" x2="18" y2="28" />
          <line x1="12" y1="28" x2="24" y2="28" />
        </svg>
      );

    default:
      return null;
  }
};

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="bg-[#F7F3EA] py-12 sm:py-16 lg:py-20 border-t border-[#EAE3D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C99A3D]">
                ABOUT ALIGNX
              </span>
              <span className="w-8 h-[1px] bg-[#C99A3D]"></span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1A2E28] leading-[1.18] tracking-tight">
              We Turn Vision into <br />
              <span className="text-[#C99A3D] font-serif">Real Outcomes.</span>
            </h2>

            {/* Narrative Body */}
            <p className="text-[#4A5D55] text-sm sm:text-[15px] leading-relaxed font-normal pt-1">
              At AlignX Consulting Limited, we go beyond advice. We partner with organisations to design, build, and execute strategies that create measurable impact. Our strength lies in seamless execution—delivered by experienced professionals, proven systems, and an unwavering commitment to excellence.
            </p>

            {/* Button */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#C99A3D] bg-transparent text-[#1A2E28] hover:bg-[#C99A3D] hover:text-[#00261F] font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#C99A3D] group-hover:text-[#00261F]" />
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Dark Green Statistics Panel */}
          <div className="lg:col-span-6">
            <div className="bg-[#002720] border border-[#C99A3D]/25 rounded-xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              
              {/* Subtle background ambient radial lighting */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A3D]/10 rounded-full blur-3xl pointer-events-none" />

              {/* 2x2 Grid with subtle quadrant dividers */}
              <div className="grid grid-cols-2 divide-x divide-y divide-[#C99A3D]/20 -m-8 sm:-m-10">
                {statsData.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="p-8 sm:p-10 flex flex-col items-center text-center justify-center relative group hover:bg-white/[0.02] transition-colors"
                  >
                    <StatIcon type={stat.iconName} />

                    {/* Stat Number */}
                    <div className="font-serif text-3xl sm:text-4xl font-normal text-white mb-2 tracking-tight">
                      {stat.value}
                    </div>

                    {/* Stat Label */}
                    <div className="text-white/75 text-xs sm:text-[13px] font-normal leading-tight whitespace-pre-line">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
