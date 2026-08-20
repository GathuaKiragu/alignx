import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-[#00261F] text-white border border-[#C99A3D]/40 rounded-xl p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
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
            <h3 className="font-serif text-2xl text-white mb-2">Message Received</h3>
            <p className="text-white/70 text-sm max-w-xs mb-6">
              Thank you for reaching out. Our team will get back to you promptly.
            </p>
            <button
              onClick={resetAndClose}
              className="px-6 py-2.5 bg-[#C99A3D] text-[#00261F] font-semibold text-sm rounded hover:bg-[#DFB967]"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <span className="text-[#C99A3D] text-xs uppercase tracking-widest font-semibold block mb-1">
              Direct Inquiries
            </span>
            <h2 className="font-serif text-2xl text-white mb-1">Contact AlignX</h2>
            <p className="text-white/70 text-xs mb-6">
              Connect with our Lagos office or send a direct inquiry to our leadership.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-3 bg-[#001E18] rounded-lg border border-white/5 text-xs">
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4 text-[#C99A3D] shrink-0" />
                <span className="truncate">+234 800 123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4 text-[#C99A3D] shrink-0" />
                <span className="truncate">hello@alignx...</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-[#C99A3D] shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-[#00332A] border border-[#C99A3D]/30 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C99A3D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-[#00332A] border border-[#C99A3D]/30 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C99A3D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Inquiry regarding Site Builds & Execution"
                  className="w-full bg-[#00332A] border border-[#C99A3D]/30 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C99A3D]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Message</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can AlignX support your organization?"
                  className="w-full bg-[#00332A] border border-[#C99A3D]/30 rounded px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C99A3D] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gold-gradient text-[#00261F] font-bold text-sm rounded shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
