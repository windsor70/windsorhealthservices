import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { ViewMode } from '../types';

interface HeroProps {
  onNavigate: (view: ViewMode) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#060B17] pt-20 pb-20 md:pt-32 md:pb-28 border-b border-white/8">
      {/* Subtle deep blue atmospheric glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 25%, rgba(14, 26, 51, 0.9) 0%, rgba(6, 11, 23, 1) 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-8">
        {/* Minimal Unboxed Metadata Kicker */}
        <div className="inline-flex items-center gap-3 text-xs tracking-[0.24em] uppercase text-[#C5A880] font-sans">
          <span>Private Fund</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>Family Offices & Institutions</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>Pan-Asia</span>
        </div>

        {/* Minimalist, Powerful Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-100 font-normal leading-[1.12] tracking-tight max-w-4xl mx-auto [text-wrap:balance]">
          Financing and Providing Medical Devices Across Asia.
        </h1>

        {/* Short, Direct Subtitle (Zero fluff) */}
        <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          Windsor Health Services acts as a specialized investment fund for family offices and institutional investors, acquiring and deploying critical healthcare technology throughout the Asia-Pacific region.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3.5 bg-[#C5A880] text-[#060B17] hover:bg-[#D4BD9E] transition-all text-xs tracking-[0.16em] uppercase font-semibold rounded flex items-center gap-2.5 shadow-lg whitespace-nowrap"
          >
            <span>Inquire About Fund Allocations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onNavigate('portal')}
            className="px-6 py-3.5 bg-[#0B132B] hover:bg-[#0E1A36] text-slate-200 border border-white/15 hover:border-[#C5A880]/50 transition-all text-xs tracking-[0.16em] uppercase font-medium rounded flex items-center gap-2 whitespace-nowrap"
          >
            <Lock className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Client Portal</span>
          </button>
        </div>
      </div>
    </section>
  );
};
