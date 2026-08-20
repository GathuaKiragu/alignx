import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { AboutSection } from './components/sections/AboutSection';
import { ApproachSection } from './components/sections/ApproachSection';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { Footer } from './components/layout/Footer';
import { ConsultationModal } from './components/ui/ConsultationModal';
import { ContactModal } from './components/ui/ContactModal';

export const App: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#00332A] text-slate-100 font-sans selection:bg-[#C99A3D] selection:text-[#00261F]">
      {/* Top Header Navigation */}
      <Header
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Sections matching screenshot */}
      <main className="flex-grow">
        {/* 1. Hero with Diagonal Slant */}
        <HeroSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 2. Services Section (What We Do) */}
        <ServicesSection />

        {/* 3. About Section (Story + 2x2 Stats) */}
        <AboutSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 4. Approach Section (5-step Roadmap) */}
        <ApproachSection />

        {/* 5. Final CTA Banner */}
        <FinalCTASection onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      {/* 6. Deep Emerald Footer */}
      <Footer
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;
