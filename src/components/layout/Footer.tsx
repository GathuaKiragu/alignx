import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { servicesData } from '../../data/websiteData';

// Custom precision SVG icons for LinkedIn, WhatsApp & Socials
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

interface FooterProps {
  onOpenConsultation?: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer id="contact" className="bg-[#00221B] text-white pt-14 pb-8 border-t border-[#C99A3D]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">
          
          {/* Col 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-5">
              <Logo size="md" />
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm mb-4">
              Execution-led transformation partner converting ambitious ideas into sustainable, measurable outcomes.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-1">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#C99A3D]/60 flex items-center justify-center text-[#C99A3D] hover:bg-[#C99A3D] hover:text-[#00221B] transition-colors"
              >
                <LinkedInIcon />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/254792097347"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-[#C99A3D]/60 flex items-center justify-center text-[#C99A3D] hover:bg-[#C99A3D] hover:text-[#00221B] transition-colors"
              >
                <WhatsAppIcon />
              </a>

              {/* Email */}
              <button
                onClick={onOpenContact}
                aria-label="Email Us"
                className="w-8 h-8 rounded-full border border-[#C99A3D]/60 flex items-center justify-center text-[#C99A3D] hover:bg-[#C99A3D] hover:text-[#00221B] transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 stroke-[1.8]" />
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><a href="#hero" className="hover:text-[#C99A3D] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C99A3D] transition-colors">About AlignX</a></li>
              <li><a href="#services" className="hover:text-[#C99A3D] transition-colors">Our Services</a></li>
              <li><a href="#approach" className="hover:text-[#C99A3D] transition-colors">Delivery Model</a></li>
              <li><a href="#values" className="hover:text-[#C99A3D] transition-colors">Our Values</a></li>
            </ul>
          </div>

          {/* Col 3: Our Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              {servicesData.slice(0, 6).map((svc) => (
                <li key={svc.id}>
                  <a href="#services" className="hover:text-[#C99A3D] transition-colors truncate block">
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Contact Nairobi Office
            </h4>
            <div className="space-y-3 text-xs text-white/75">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C99A3D] shrink-0" />
                <a href="tel:+254792097347" className="hover:text-[#C99A3D] transition-colors font-medium">+254 792 097 347</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C99A3D] shrink-0" />
                <a href="mailto:info@alignx.co.ke" className="hover:text-[#C99A3D] transition-colors font-medium">info@alignx.co.ke</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-[#C99A3D] shrink-0" />
                <a href="https://www.alignx.co.ke" target="_blank" rel="noreferrer" className="hover:text-[#C99A3D] transition-colors">www.alignx.co.ke</a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C99A3D] shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <span>P O Box 52682-00100</span><br />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Let's Talk Button */}
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-1.5 rounded-sm border border-[#C99A3D] text-[#C99A3D] hover:bg-[#C99A3D] hover:text-[#00221B] text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer shadow-sm"
              >
                Let's Talk
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 border-t border-[#C99A3D]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/60 gap-4">
          <div>
            © {new Date().getFullYear()} AlignX Consulting Limited. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70 font-serif italic text-xs text-[#C99A3D]">Beyond Consulting. We Execute.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
