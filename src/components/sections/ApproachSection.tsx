import React from 'react';
import { processStepsData, ProcessStepItem } from '../../data/websiteData';

const ProcessIcon: React.FC<{ type: ProcessStepItem['iconName'] }> = ({ type }) => {
  switch (type) {
    case 'discover':
      // Target / Bullseye with crosshair
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="6" />
          <circle cx="16" cy="16" r="1.5" fill="#C99A3D" />
          <line x1="16" y1="2" x2="16" y2="7" />
          <line x1="16" y1="25" x2="16" y2="30" />
          <line x1="2" y1="16" x2="7" y2="16" />
          <line x1="25" y1="16" x2="30" y2="16" />
        </svg>
      );

    case 'design':
      // Lightbulb with idea rays
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 15a5 5 0 1110 0c0 2-1 3.5-2 4.5v2.5h-6V19.5c-1-1-2-2.5-2-4.5z" />
          <line x1="13" y1="25" x2="19" y2="25" />
          <line x1="16" y1="3" x2="16" y2="6" />
          <line x1="6" y1="13" x2="3" y2="13" />
          <line x1="29" y1="13" x2="26" y2="13" />
          <line x1="8" y1="6" x2="6" y2="4" />
          <line x1="24" y1="6" x2="26" y2="4" />
        </svg>
      );

    case 'execute':
      // Cog / Gear
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="4" />
          <path d="M16 6v3M16 23v3M6 16h3M23 16h3M8.9 8.9l2.1 2.1M21 21l2.1 2.1M8.9 23.1l2.1-2.1M21 11l2.1-2.1" />
        </svg>
      );

    case 'measure':
      // Bar Chart with trend
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="26" x2="26" y2="26" />
          <rect x="8" y="16" width="3" height="10" />
          <rect x="14" y="11" width="3" height="15" />
          <rect x="20" y="6" width="3" height="20" />
        </svg>
      );

    case 'transform':
      // Rocket
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4c4 4 6 9 6 15l-3 3-3-2-3 2-3-3c0-6 2-11 6-15z" />
          <circle cx="16" cy="12" r="2" />
          <path d="M10 19l-3 4 2 2 3-1" />
          <path d="M22 19l3 4-2 2-3-1" />
          <line x1="16" y1="24" x2="16" y2="28" />
        </svg>
      );

    default:
      return null;
  }
};

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="bg-[#00332A] py-14 sm:py-18 lg:py-20 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002720] via-[#00332A] to-[#00261F] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C99A3D] block mb-3">
            OUR APPROACH
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight mb-4">
            A Proven Path from Strategy to Success.
          </h2>

          {/* Decorative Diamond Line */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-8 h-[0.5px] bg-[#C99A3D]/60"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C99A3D]"></div>
            <div className="w-8 h-[0.5px] bg-[#C99A3D]/60"></div>
          </div>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Dotted Line */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[1px] border-t border-dashed border-[#C99A3D]/50 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {processStepsData.map((item, idx) => (
              <div 
                key={item.step} 
                className="flex flex-col items-center text-center group"
              >
                {/* Circular Icon Container */}
                <div className="w-14 h-14 rounded-full bg-[#002720] border border-[#C99A3D] flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(201,154,61,0.15)] group-hover:border-[#DFB559] group-hover:scale-110 transition-all duration-300 relative">
                  <ProcessIcon type={item.iconName} />
                  {/* Subtle pulsing highlight */}
                  <div className="absolute inset-0 rounded-full bg-[#C99A3D]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Step Number */}
                <span className="text-xs font-mono font-medium text-[#C99A3D] mb-1 tracking-widest">
                  {item.step}
                </span>

                {/* Step Title */}
                <h3 className="font-serif text-lg font-medium text-white mb-2">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-white/75 text-xs leading-relaxed max-w-[200px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
