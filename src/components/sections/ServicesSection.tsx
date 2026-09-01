import React from 'react';
import { servicesData, ServiceItem } from '../../data/websiteData';

// Custom precision SVG line icons matching screenshot exactly
const ServiceIcon: React.FC<{ type: ServiceItem['iconName'] }> = ({ type }) => {
  const strokeColor = "#C99A3D";

  switch (type) {
    case 'projects':
      // Skyscrapers / Project Towers
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Left building */}
          <rect x="7" y="16" width="10" height="26" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="12" y1="28" x2="12" y2="30" />
          <line x1="12" y1="35" x2="12" y2="37" />
          
          {/* Middle tall tower with steeple */}
          <polygon points="24,6 29,12 19,12" />
          <rect x="17" y="12" width="14" height="30" />
          <line x1="22" y1="18" x2="22" y2="20" />
          <line x1="26" y1="18" x2="26" y2="20" />
          <line x1="22" y1="25" x2="22" y2="27" />
          <line x1="26" y1="25" x2="26" y2="27" />
          <line x1="22" y1="32" x2="22" y2="34" />
          <line x1="26" y1="32" x2="26" y2="34" />
          
          {/* Right building */}
          <rect x="31" y="20" width="10" height="22" />
          <line x1="36" y1="25" x2="36" y2="27" />
          <line x1="36" y1="32" x2="36" y2="34" />
        </svg>
      );

    case 'hr':
      // 3 People Team
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Center primary leader */}
          <circle cx="24" cy="14" r="5" />
          <path d="M16 31c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          
          {/* Left person */}
          <circle cx="12" cy="18" r="4" />
          <path d="M6 34c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.4 2.1" />
          
          {/* Right person */}
          <circle cx="36" cy="18" r="4" />
          <path d="M31.6 30.1c1-1.3 2.6-2.1 4.4-2.1 3.3 0 6 2.7 6 6" />
        </svg>
      );

    case 'site':
      // Tower Crane & Construction Frame
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Crane mast */}
          <line x1="16" y1="10" x2="16" y2="40" />
          <line x1="16" y1="18" x2="20" y2="22" />
          <line x1="16" y1="26" x2="20" y2="30" />
          
          {/* Crane jib */}
          <line x1="8" y1="14" x2="42" y2="14" />
          {/* Counter-jib & weight */}
          <rect x="8" y="11" width="4" height="6" />
          {/* Jib tower tip */}
          <polygon points="16,8 20,14 12,14" />
          <line x1="16" y1="8" x2="36" y2="14" />
          <line x1="16" y1="8" x2="8" y2="14" />
          
          {/* Hoist cable and hook load */}
          <line x1="36" y1="14" x2="36" y2="26" />
          <rect x="32" y="26" width="8" height="6" strokeDasharray="1,1" />

          {/* Base building frame */}
          <rect x="22" y="24" width="16" height="16" />
          <line x1="22" y1="32" x2="38" y2="32" />
          <line x1="30" y1="24" x2="30" y2="40" />
        </svg>
      );

    case 'digitisation':
      // Screen with growth chart & code
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="32" height="24" rx="2" />
          <line x1="18" y1="34" x2="14" y2="40" />
          <line x1="30" y1="34" x2="34" y2="40" />
          <line x1="12" y1="40" x2="36" y2="40" />
          {/* Bar chart inside screen */}
          <line x1="14" y1="28" x2="14" y2="24" />
          <line x1="19" y1="28" x2="19" y2="20" />
          <line x1="24" y1="28" x2="24" y2="16" />
          <line x1="29" y1="28" x2="29" y2="18" />
          <line x1="34" y1="28" x2="34" y2="14" />
          {/* Trend line */}
          <polyline points="14,23 19,19 24,15 29,17 34,13" />
        </svg>
      );

    case 'automation':
      // Gear / Automation Process
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="7" />
          <circle cx="24" cy="24" r="3" />
          {/* Gear teeth */}
          <path d="M24 13v4M24 31v4M13 24h4M31 24h4M16.2 16.2l2.8 2.8M29 29l2.8 2.8M16.2 31.8l2.8-2.8M29 19l2.8-2.8" />
          {/* Circuit nodes */}
          <circle cx="9" cy="12" r="2" />
          <line x1="11" y1="13" x2="17" y2="18" />
          <circle cx="39" cy="36" r="2" />
          <line x1="37" y1="35" x2="31" y2="30" />
          <circle cx="39" cy="12" r="2" />
          <line x1="37" y1="13" x2="31" y2="18" />
        </svg>
      );

    case 'professional':
      // Shield / Advisory emblem
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 8L12 13v12c0 8.5 5.1 16.4 12 19 6.9-2.6 12-10.5 12-19V13L24 8z" />
          <path d="M24 14L16 17.5v9c0 6.4 3.4 12.3 8 14.5 4.6-2.2 8-8.1 8-14.5v-9L24 14z" strokeDasharray="2,2" />
        </svg>
      );

    default:
      return null;
  }
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-[#F7F3EA] py-12 sm:py-16 lg:py-20 border-t border-[#EAE3D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C99A3D]">
              WHAT WE DO
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1A2E28] tracking-tight mb-4">
            End-to-end Solutions. Real Impact.
          </h2>

          {/* Decorative Diamond Line */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-8 h-[0.5px] bg-[#C99A3D]/50"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C99A3D]"></div>
            <div className="w-8 h-[0.5px] bg-[#C99A3D]/50"></div>
          </div>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white/95 rounded-lg p-6 sm:p-5 flex flex-col items-center text-center border border-[#E9E1D2] shadow-[0_2px_8px_rgba(0,0,0,0.02)] gold-card-hover group relative overflow-hidden h-full min-h-[260px] justify-between"
            >
              {/* Top Accent Light */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C99A3D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div className="mt-2 mb-4 p-2 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                <ServiceIcon type={service.iconName} />
              </div>

              {/* Service Title */}
              <h3 className="font-serif text-base sm:text-[17px] font-semibold text-[#1A2E28] mb-2 leading-snug">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-[#596C65] text-xs sm:text-[12.5px] leading-relaxed mb-6 font-normal">
                {service.description}
              </p>

              {/* Bottom Decorative Gold Dash */}
              <div className="w-7 h-[1.5px] bg-[#C99A3D] mt-auto group-hover:w-12 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
