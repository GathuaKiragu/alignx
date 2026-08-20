import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks, servicesData } from '../../data/websiteData';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="relative w-full z-40 bg-transparent pt-6 pb-4">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <a href="#hero" className="flex items-center">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-[13.5px] tracking-wide font-normal">
          {navLinks.map((item) => (
            <div key={item.label} className="relative group">
              {item.hasDropdown ? (
                <div 
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button 
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className="flex items-center gap-1.5 text-white/90 hover:text-[#C99A3D] transition-colors py-2 cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#C99A3D]' : 'text-white/70'}`} />
                  </button>

                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 ${
                    servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}>
                    <div className="bg-[#00261F] border border-[#C99A3D]/30 rounded-lg p-2.5 shadow-2xl backdrop-blur-lg">
                      {servicesData.map((svc) => (
                        <a
                          key={svc.id}
                          href="#services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 text-xs text-white/80 hover:text-[#C99A3D] hover:bg-white/5 rounded transition-all"
                        >
                          <span className="text-[10px] text-[#C99A3D] font-mono">{svc.id}</span>
                          <span>{svc.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className={`transition-colors py-2 relative block ${
                    item.active 
                      ? 'text-[#C99A3D] font-medium' 
                      : 'text-white/90 hover:text-[#C99A3D]'
                  }`}
                >
                  {item.label}
                  {item.active && (
                    <span className="absolute bottom-0.5 left-0 right-0 h-[1.5px] bg-[#C99A3D] rounded-full"></span>
                  )}
                </a>
              )}
            </div>
          ))}

          {/* Contact Us CTA Button */}
          <button
            onClick={onOpenContact}
            className="ml-4 px-6 py-2 rounded-full border border-[#C99A3D] text-[#C99A3D] hover:bg-[#C99A3D] hover:text-[#00261F] text-[13px] font-medium transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(201,154,61,0.1)]"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="px-3.5 py-1.5 text-xs border border-[#C99A3D] text-[#C99A3D] rounded-full"
          >
            Contact Us
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#C99A3D] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[85px] bg-[#00261F]/98 border-b border-[#C99A3D]/30 p-6 backdrop-blur-xl shadow-2xl animate-fade-in z-50">
          <div className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base py-2 border-b border-white/5 flex items-center justify-between ${
                  item.active ? 'text-[#C99A3D] font-medium' : 'text-white/90'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#C99A3D] text-[#00261F] font-semibold text-center rounded text-sm shadow-md"
              >
                Book a Consultation →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
