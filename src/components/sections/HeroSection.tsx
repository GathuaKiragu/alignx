import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/hero.png';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="hero" className="relative bg-[#00332A] overflow-hidden min-h-[520px] lg:min-h-[580px] flex items-stretch">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00261F] via-[#00332A] to-[#002E26] pointer-events-none" />

      {/* Grid wrapper for Left Content & Right Diagonal Office Visual */}
      <div className="relative w-full max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-stretch z-10 lg:min-h-[580px]">
        
        {/* Left Side: Typography & CTAs */}
        <div className="w-full lg:w-1/2 py-10 sm:py-14 lg:py-16 xl:py-20 lg:pr-8 text-left z-20 flex flex-col justify-center">
          
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
        <div className="w-full lg:w-1/2 h-[360px] sm:h-[420px] lg:h-auto overflow-hidden flex items-stretch">
          <div className="relative w-full h-full hero-diagonal-split overflow-hidden">
            <img src={heroImage} alt="AlignX Consulting executive office" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00261F]/85 via-[#00261F]/25 to-transparent pointer-events-none" />
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-[#DFB559] via-[#C99A3D]/60 to-transparent pointer-events-none transform -skew-x-[11deg] origin-top opacity-50" />
          </div>
        </div>

      </div>
    </section>
  );
};
