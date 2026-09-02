import React from 'react';
import { processStepsData, ProcessStepItem } from '../../data/websiteData';
import { Layers, ShieldCheck, Zap, Users, BarChart3, Clock } from 'lucide-react';

const ProcessIcon: React.FC<{ type: ProcessStepItem['iconName'] }> = ({ type }) => {
  switch (type) {
    case 'discover':
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
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 15a5 5 0 1110 0c0 2-1 3.5-2 4.5v2.5h-6V19.5c-1-1-2-2.5-2-4.5z" />
          <line x1="13" y1="25" x2="19" y2="25" />
          <line x1="16" y1="3" x2="16" y2="6" />
          <line x1="6" y1="13" x2="3" y2="13" />
          <line x1="29" y1="13" x2="26" y2="13" />
        </svg>
      );

    case 'build':
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="14" width="20" height="14" rx="2" />
          <polyline points="6,18 16,8 26,18" />
          <line x1="16" y1="14" x2="16" y2="28" />
        </svg>
      );

    case 'implement':
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="11" />
          <polyline points="11,16 15,20 22,12" />
        </svg>
      );

    case 'optimise':
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5 stroke-current text-[#C99A3D]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4c4 4 6 9 6 15l-3 3-3-2-3 2-3-3c0-6 2-11 6-15z" />
          <circle cx="16" cy="12" r="2" />
          <line x1="16" y1="24" x2="16" y2="28" />
        </svg>
      );

    default:
      return null;
  }
};

const differences = [
  {
    title: 'Advisory + Execution',
    desc: 'One partner to define the strategy and carry it right through implementation.',
    icon: Layers
  },
  {
    title: 'Business + Technology',
    desc: 'We design around commercial and operational outcomes, not technology for its own sake.',
    icon: Zap
  },
  {
    title: 'Phased Delivery',
    desc: 'High-value capabilities prioritised first, reducing risk and accelerating real results.',
    icon: Clock
  },
  {
    title: 'Flexible Resourcing',
    desc: 'We coordinate internal teams, specialists, vendors and resources around your objective.',
    icon: Users
  },
  {
    title: 'Performance Visibility',
    desc: 'Clear KPIs, milestones, dashboards and governance that guarantee accountability.',
    icon: BarChart3
  },
  {
    title: 'Long-term Partnership',
    desc: 'We remain involved beyond launch to operate, support and continuously optimise.',
    icon: ShieldCheck
  }
];

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="bg-[#00332A] py-16 sm:py-20 lg:py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#002720] via-[#00332A] to-[#00261F] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-20">
        
        {/* Top: 5-Step Delivery Model */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C99A3D] block mb-3">
              OUR DELIVERY MODEL
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight mb-3">
              From Ambition to Operating Reality.
            </h2>
            
            <p className="text-white/75 text-xs sm:text-sm font-normal max-w-xl mx-auto">
              AlignX uses a disciplined five-stage model designed to keep transformation practical, visible, and outcome-led.
            </p>

            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-8 h-[0.5px] bg-[#C99A3D]/60"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C99A3D]"></div>
              <div className="w-8 h-[0.5px] bg-[#C99A3D]/60"></div>
            </div>
          </div>

          {/* 5-Step Process Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[1px] border-t border-dashed border-[#C99A3D]/40 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {processStepsData.map((item) => (
                <div 
                  key={item.step} 
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#002720] border border-[#C99A3D] flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(201,154,61,0.15)] group-hover:border-[#DFB559] group-hover:scale-110 transition-all duration-300 relative">
                    <ProcessIcon type={item.iconName} />
                    <div className="absolute inset-0 rounded-full bg-[#C99A3D]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <span className="text-xs font-mono font-medium text-[#C99A3D] mb-1 tracking-widest">
                    {item.step}
                  </span>

                  <h3 className="font-serif text-lg font-medium text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-white/75 text-xs leading-relaxed max-w-[210px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: The AlignX Difference */}
        <div className="pt-12 border-t border-[#C99A3D]/20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C99A3D] block mb-2">
              THE ALIGNX DIFFERENCE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Built for Clients Who Need Outcomes — Not More Slides.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differences.map((diff, dIdx) => {
              const IconComp = diff.icon;
              return (
                <div 
                  key={dIdx}
                  className="p-6 rounded-xl bg-[#00261F]/80 border border-[#C99A3D]/25 hover:border-[#C99A3D] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#00332A] border border-[#C99A3D]/40 flex items-center justify-center text-[#C99A3D] shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-white mb-1">
                        {diff.title}
                      </h4>
                      <p className="text-white/70 text-xs leading-relaxed">
                        {diff.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
