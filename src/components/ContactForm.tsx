import React, { useState } from 'react';
import { Send, FileCheck, Lock, Building, Mail } from 'lucide-react';
import { ContactSubmission, ViewMode } from '../types';

interface ContactFormProps {
  onNavigate?: (view: ViewMode) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactSubmission>({
    fullName: '',
    entityName: '',
    email: '',
    investorType: 'Single Family Office',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      const code = `WHS-${Math.floor(1000 + Math.random() * 9000)}-FUND`;
      setReceipt(code);
    }, 450);
  };

  const resetForm = () => {
    setReceipt(null);
    setFormData({
      fullName: '',
      entityName: '',
      email: '',
      investorType: 'Single Family Office',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#060B17] relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.24em] text-[#C5A880] font-sans">
                Fund Inquiries
              </div>
              <h2 className="font-serif text-3xl text-slate-100 font-normal leading-tight">
                Private Consultation.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                Connect with our partnership team regarding fund allocations, co-investments, or medical device provisioning across Asia.
              </p>
            </div>

            <div className="space-y-3 text-xs text-slate-400 font-sans pt-2">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A880]" />
                <a href="mailto:services@windsorhealthservices.com" className="text-slate-200 hover:text-white underline">
                  services@windsorhealthservices.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean 4-Field Form */}
          <div className="lg:col-span-7">
            {receipt ? (
              <div className="p-8 rounded-lg bg-[#0B152B] border border-[#C5A880]/40 text-center space-y-5 shadow-2xl">
                <div className="w-12 h-12 rounded-full border border-[#C5A880]/50 bg-[#060B17] flex items-center justify-center mx-auto text-[#C5A880]">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#C5A880] font-sans">
                    Inquiry Transmitted
                  </div>
                  <h3 className="font-serif text-2xl text-slate-100 mt-1">
                    Reference: <span className="font-mono text-[#E0CEB7]">{receipt}</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 max-w-sm mx-auto font-light leading-relaxed">
                    Thank you. A partner from our Asia fund team will follow up directly with {formData.fullName} ({formData.entityName}) within 24 hours.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="px-5 py-2 bg-[#060B17] text-slate-300 hover:text-white border border-white/15 text-xs uppercase tracking-wider rounded"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-lg bg-[#0A1224]/90 border border-white/10 space-y-4 shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-sans mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alistair Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#060B17] border border-white/15 focus:border-[#C5A880] rounded px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-sans mb-1.5">
                      Entity / Family Office *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vance Family Office"
                      value={formData.entityName}
                      onChange={(e) => setFormData({ ...formData, entityName: e.target.value })}
                      className="w-full bg-[#060B17] border border-white/15 focus:border-[#C5A880] rounded px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-sans mb-1.5">
                      Confidential Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="principal@familyoffice.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#060B17] border border-white/15 focus:border-[#C5A880] rounded px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-sans mb-1.5">
                      Investor Classification
                    </label>
                    <select
                      value={formData.investorType}
                      onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                      className="w-full bg-[#060B17] border border-white/15 focus:border-[#C5A880] rounded px-3.5 py-2.5 text-xs text-slate-100 transition-colors"
                    >
                      <option value="Single Family Office">Single Family Office</option>
                      <option value="Multi-Family Office">Multi-Family Office</option>
                      <option value="Institutional Investor">Institutional Investor</option>
                      <option value="Hospital / Healthcare Group">Hospital / Healthcare Group</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-sans mb-1.5">
                    Brief Inquiry / Allocation Scope
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Inquire about fund tranche, device deployment, or co-investment..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#060B17] border border-white/15 focus:border-[#C5A880] rounded px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-[#C5A880] hover:bg-[#D4BD9E] text-[#060B17] transition-all text-xs uppercase tracking-widest font-semibold rounded flex items-center justify-center gap-2 mt-2"
                >
                  {submitting ? 'Transmitting...' : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
