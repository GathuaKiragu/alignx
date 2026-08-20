import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenConsultation: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="bg-[#F7F3EA] py-10 sm:py-12 border-y border-[#EAE3D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Calendar Badge & Copy */}
        <div className="flex items-center gap-4 sm:gap-6 text-center md:text-left flex-col md:flex-row">
          {/* Circular Dark Green Icon Badge */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#00332A] flex items-center justify-center text-[#C99A3D] shadow-md shrink-0 border border-[#C99A3D]/30">
            <Calendar className="w-7 h-7 stroke-[1.5]" />
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-[26px] font-medium text-[#1A2E28] tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-[#596C65] text-xs sm:text-sm font-normal mt-0.5">
              Let’s build, execute, and achieve together.
            </p>
          </div>
        </div>

        {/* Right Side: Gold Action Button */}
        <div className="shrink-0">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-gold-gradient text-[#00261F] font-semibold text-xs sm:text-sm tracking-wide shadow-[0_4px_16px_rgba(201,154,61,0.3)] hover:shadow-[0_6px_22px_rgba(201,154,61,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
