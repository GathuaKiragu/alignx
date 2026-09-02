import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Sparkles, Loader2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Strategy Execution & Transformation',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to submit request. Please try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Consultation submission error:', err);
      setErrorMsg(err.message || 'Error communicating with server.');
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setErrorMsg(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: 'Strategy Execution & Transformation',
      message: ''
    });
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
            <p className="text-white/80 text-sm max-w-sm mb-2">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. An acknowledgment email has been sent to <span className="text-[#C99A3D]">{formData.email}</span>.
            </p>
            <p className="text-white/60 text-xs max-w-xs mb-6">
              An AlignX executive partner will review your project brief and get in touch within 24 hours.
            </p>
            <button
              onClick={resetAndClose}
              className="px-7 py-2.5 bg-gradient-to-r from-[#DFB559] via-[#C99A3D] to-[#B38327] text-[#00261F] font-semibold text-sm rounded-sm hover:brightness-105 cursor-pointer"
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

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-950/60 border border-red-500/40 rounded text-xs text-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. David Mwangi"
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
                    placeholder="e.g. Acacia Holdings"
                    className="w-full bg-[#00332A] border border-[#C99A3D]/30 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C99A3D] focus:ring-1 focus:ring-[#C99A3D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Service Focus Area</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#00332A] border border-[#C99A3D]/30 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#C99A3D]"
                  >
                    <option value="Strategy Execution & Transformation">01 Strategy Execution & Transformation</option>
                    <option value="Project, Programme & PMO Services">02 Project, Programme & PMO Services</option>
                    <option value="Digital Transformation & Platforms">03 Digital Transformation & Platforms</option>
                    <option value="Process Digitisation & Automation">04 Process Digitisation & Automation</option>
                    <option value="Human Resources & Resource Solutions">05 Human Resources & Resource Solutions</option>
                    <option value="Managed Operations & Business Support">06 Managed Operations & Business Support</option>
                    <option value="Property Technology & Site Solutions">07 Property Technology & Site Solutions</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Project Brief / Objectives</label>
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
                disabled={loading}
                className="w-full mt-2 py-3 bg-gradient-to-r from-[#DFB559] via-[#C99A3D] to-[#B38327] text-[#00261F] font-bold text-sm rounded shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Request...</span>
                  </>
                ) : (
                  <>
                    <span>Request Consultation</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
