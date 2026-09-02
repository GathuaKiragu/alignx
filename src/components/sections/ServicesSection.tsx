import React from 'react';
import { servicesData, ServiceItem } from '../../data/websiteData';

// Custom precision SVG line icons for all 7 services
const ServiceIcon: React.FC<{ type: ServiceItem['iconName'] }> = ({ type }) => {
  switch (type) {
    case 'strategy':
      // Compass / Strategic Target
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="16" />
          <polygon points="24,14 28,24 24,34 20,24" fill="#C99A3D" fillOpacity="0.2" />
          <polygon points="24,14 28,24 24,24" fill="#C99A3D" />
          <line x1="24" y1="4" x2="24" y2="8" />
          <line x1="24" y1="40" x2="24" y2="44" />
          <line x1="4" y1="24" x2="8" y2="24" />
          <line x1="40" y1="24" x2="44" y2="24" />
        </svg>
      );

    case 'pmo':
      // Roadmap / Gantt / PMO
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="32" height="28" rx="3" />
          <line x1="8" y1="18" x2="40" y2="18" />
          <line x1="14" y1="24" x2="26" y2="24" strokeWidth="2.5" />
          <line x1="20" y1="30" x2="34" y2="30" strokeWidth="2.5" />
          <circle cx="14" cy="14" r="1.5" fill="#C99A3D" />
          <circle cx="20" cy="14" r="1.5" fill="#C99A3D" />
        </svg>
      );

    case 'digital':
      // Digital Screen & Platform Web
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="10" width="34" height="24" rx="2" />
          <line x1="16" y1="34" x2="12" y2="40" />
          <line x1="32" y1="34" x2="36" y2="40" />
          <line x1="10" y1="40" x2="38" y2="40" />
          <circle cx="13" cy="15" r="1.5" fill="#C99A3D" />
          <circle cx="18" cy="15" r="1.5" fill="#C99A3D" />
          <polyline points="14,26 20,20 27,24 34,17" />
        </svg>
      );

    case 'automation':
      // Intelligent Workflow Automation & Nodes
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="6" />
          <path d="M24 12v4M24 32v4M12 24h4M32 24h4" />
          <circle cx="12" cy="12" r="2.5" />
          <line x1="14" y1="14" x2="19" y2="19" />
          <circle cx="36" cy="36" r="2.5" />
          <line x1="34" y1="34" x2="29" y2="29" />
          <circle cx="36" cy="12" r="2.5" />
          <line x1="34" y1="14" x2="29" y2="19" />
        </svg>
      );

    case 'hr':
      // Human Resources & People
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="14" r="5" />
          <path d="M16 32c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          <circle cx="11" cy="18" r="3.5" />
          <path d="M5 34c0-3 2.4-5.5 5.5-5.5 1.5 0 2.8.6 3.8 1.6" />
          <circle cx="37" cy="18" r="3.5" />
          <path d="M33.7 30.1c1-1 2.3-1.6 3.8-1.6 3.1 0 5.5 2.5 5.5 5.5" />
        </svg>
      );

    case 'operations':
      // Managed Operations & Process Control
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 8L12 13v12c0 8.5 5.1 16.4 12 19 6.9-2.6 12-10.5 12-19V13L24 8z" />
          <polyline points="18,24 22,28 30,19" strokeWidth="2" />
        </svg>
      );

    case 'proptech':
      // Property Tech & Site Builds / Padel Courts
      return (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Building & Court Grid */}
          <rect x="8" y="14" width="14" height="26" rx="1" />
          <line x1="12" y1="20" x2="18" y2="20" />
          <line x1="12" y1="26" x2="18" y2="26" />
          <line x1="12" y1="32" x2="18" y2="32" />
          {/* Modern Pavilion / Court Structure */}
          <polygon points="26,18 40,12 40,40 26,40" />
          <line x1="26" y1="26" x2="40" y2="22" />
          <line x1="33" y1="15" x2="33" y2="40" />
        </svg>
      );

    default:
      return null;
  }
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-[#F7F3EA] py-14 sm:py-18 lg:py-20 border-t border-[#EAE3D2]">
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
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1A2E28] tracking-tight mb-3">
            Integrated Capability. One Accountable Partner.
          </h2>
          
          <p className="text-[#596C65] text-xs sm:text-sm font-normal max-w-xl mx-auto">
            Our services can be engaged independently or combined into an end-to-end transformation programme.
          </p>

          {/* Decorative Diamond Line */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-8 h-[0.5px] bg-[#C99A3D]/50"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C99A3D]"></div>
            <div className="w-8 h-[0.5px] bg-[#C99A3D]/50"></div>
          </div>
        </div>

        {/* 7 Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className={`bg-white/95 rounded-xl p-6 flex flex-col border border-[#E9E1D2] shadow-[0_2px_8px_rgba(0,0,0,0.03)] gold-card-hover group relative overflow-hidden h-full justify-between transition-all duration-300 ${
                idx === 6 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1' : ''
              }`}
            >
              {/* Top Accent Light */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C99A3D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-[#C99A3D] bg-[#00332A]/5 px-2.5 py-1 rounded">
                    {service.id}
                  </span>
                  <div className="p-1.5 transition-transform duration-300 group-hover:scale-110">
                    <ServiceIcon type={service.iconName} />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-lg font-semibold text-[#1A2E28] mb-2.5 leading-snug">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-[#596C65] text-xs leading-relaxed mb-4 font-normal">
                  {service.description}
                </p>

                {/* Subfeature Bullets */}
                <ul className="space-y-1.5 mb-6 pt-2 border-t border-slate-100">
                  {service.subfeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="text-[11.5px] text-[#2C3E38] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3D] shrink-0"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Decorative Gold Dash */}
              <div className="w-8 h-[2px] bg-[#C99A3D] mt-auto group-hover:w-14 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
