import React from 'react';
import { ArrowRight, Compass, Target, CheckCircle2 } from 'lucide-react';
import { statsData, StatItem, valuesList } from '../../data/websiteData';

const StatIcon: React.FC<{ type: StatItem['iconName'] }> = ({ type }) => {
  switch (type) {
    case 'network':
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
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 stroke-current text-[#C99A3D] mb-3" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="18" width="5" height="12" rx="1" />
          <rect x="15" y="12" width="5" height="18" rx="1" />
          <rect x="23" y="6" width="5" height="24" rx="1" />
        </svg>
      );

    case 'globe':
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
    <section id="about" className="bg-[#F7F3EA] py-16 sm:py-20 lg:py-24 border-t border-[#EAE3D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        
        {/* Top Grid: Who We Are & 2x2 Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C99A3D]">
                WHO WE ARE
              </span>
              <span className="w-8 h-[1px] bg-[#C99A3D]"></span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1A2E28] leading-[1.18] tracking-tight">
              Strategy is Only Valuable <br />
              <span className="text-[#C99A3D] font-serif italic">When It Moves.</span>
            </h2>

            <p className="text-[#4A5D55] text-sm sm:text-[15px] leading-relaxed font-normal pt-1">
              AlignX Consulting Limited is an execution-focused consulting and transformation company helping organisations, entrepreneurs and investors convert ambitious ideas, strategies and operational challenges into practical, high-quality outcomes.
            </p>

            <p className="text-[#4A5D55] text-sm sm:text-[15px] leading-relaxed font-normal">
              We combine advisory thinking with hands-on implementation across projects, people, digital platforms, process improvement and managed operations. Our role is not simply to recommend what should happen — we help make it happen, with clear ownership, disciplined delivery and measurable outcomes.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#C99A3D] bg-transparent text-[#1A2E28] hover:bg-[#C99A3D] hover:text-[#00261F] font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#C99A3D]" />
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Dark Green Statistics Panel */}
          <div className="lg:col-span-6">
            <div className="bg-[#002720] border border-[#C99A3D]/25 rounded-xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C99A3D]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-2 divide-x divide-y divide-[#C99A3D]/20 -m-8 sm:-m-10">
                {statsData.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="p-8 sm:p-10 flex flex-col items-center text-center justify-center relative group hover:bg-white/[0.02] transition-colors"
                  >
                    <StatIcon type={stat.iconName} />
                    <div className="font-serif text-3xl sm:text-4xl font-normal text-white mb-2 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-white/75 text-xs sm:text-[13px] font-normal leading-tight whitespace-pre-line">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="bg-white/90 border border-[#EAE3D2] rounded-xl p-8 shadow-sm relative overflow-hidden group hover:border-[#C99A3D]/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#00332A] flex items-center justify-center text-[#C99A3D]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1A2E28] tracking-wide">
                Our Vision
              </h3>
            </div>
            <p className="text-[#4A5D55] text-sm leading-relaxed">
              To be a trusted African transformation partner known for turning ambitious visions and strategies into sustainable, high-quality results.
            </p>
          </div>

          <div className="bg-white/90 border border-[#EAE3D2] rounded-xl p-8 shadow-sm relative overflow-hidden group hover:border-[#C99A3D]/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#00332A] flex items-center justify-center text-[#C99A3D]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1A2E28] tracking-wide">
                Our Mission
              </h3>
            </div>
            <p className="text-[#4A5D55] text-sm leading-relaxed">
              To help clients execute better by combining strategy, project discipline, capable people, fit-for-purpose technology and practical operational support.
            </p>
          </div>
        </div>

        {/* Core Values Strip */}
        <div id="values" className="pt-6 border-t border-[#EAE3D2]">
          <div className="text-center mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C99A3D]">
              OUR GUIDING VALUES
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {valuesList.map((val) => (
              <div 
                key={val}
                className="px-5 py-2.5 rounded-full bg-[#00332A] text-white border border-[#C99A3D]/40 text-xs sm:text-[13px] font-medium tracking-widest flex items-center gap-2 shadow-sm"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A3D]" />
                <span>{val}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
