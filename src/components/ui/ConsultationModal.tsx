import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Sparkles } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Projects',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#00261F] text-white border border-[#C99A3D]/40 rounded-xl p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C99A3D]/15 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#C99A3D]/20 border border-[#C99A3D] flex items-center justify-center mb-4 text-[#C99A3D]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-white mb-2">Consultation Requested</h3>
            <p className="text-white/70 text-sm max-w-xs mb-6">
              Thank you, {formData.fullName}. An AlignX executive partner will review your project and get in touch within 24 hours.
            </p>
            <button
              onClick={resetAndClose}
              className="px-6 py-2.5 bg-[#C99A3D] text-[#00261F] font-semibold text-sm rounded-sm hover:bg-[#DFB967] transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[#C99A3D] text-xs uppercase tracking-widest font-semibold mb-1">
              <Calendar className="w-4 h-4" />
              <span>Executive Briefing</span>
            </div>
            <h2 className="font-serif text-2xl text-white mb-1">Book a Consultation</h2>
            <p className="text-white/70 text-xs mb-6">
              Discuss your transformation initiatives with our execution specialists.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Olawale Adeleke"
                  className="w-full bg-[#00332A] border border-[#C99A3D]/30 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C99A3D] focus:ring-1 focus:ring-[#C99A3D]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#00332A] border border-[#C99A3D]/30 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C99A3D] focus:ring-1 focus:ring-[#C99A3D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 7..."
                    className="w-full bg-[#00332A] border border-[#C99A3D]/30 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C99A3D] focus:ring-1 focus:ring-[#C99A3D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Zenith Holdings"
                    className="w-full bg-[#00332A] border border-[#C99A3D]/30 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C99A3D] focus:ring-1 focus:ring-[#C99A3D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Service Area</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#00332A] border border-[#C99A3D]/30 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C99A3D]"
                  >
                    <option value="Projects">01 Projects</option>
                    <option value="Human Resources">02 Human Resources</option>
                    <option value="Site Builds">03 Site Builds</option>
                    <option value="Digitisation">04 Digitisation</option>
                    <option value="Automation">05 Automation</option>
                    <option value="Professional Services">06 Professional Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Project Brief / Message</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your strategic objectives and desired outcomes..."
                  className="w-full bg-[#00332A] border border-[#C99A3D]/30 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C99A3D] focus:ring-1 focus:ring-[#C99A3D] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-gradient-to-r from-[#DFB559] via-[#C99A3D] to-[#B38327] text-[#00261F] font-bold text-sm rounded shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Consultation</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
