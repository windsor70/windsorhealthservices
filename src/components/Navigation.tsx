import React, { useState } from 'react';
import { Lock, Menu, X } from 'lucide-react';
import { ViewMode } from '../types';

interface NavigationProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onNavigate,
  isAuthenticated,
  onLogout,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (view: ViewMode, elementId?: string) => {
    onNavigate(view);
    setMobileOpen(false);
    if (elementId && view === 'home') {
      setTimeout(() => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#060B17]/95 backdrop-blur-md border-b border-white/8 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNav('home')}
          className="text-left group flex flex-col whitespace-nowrap shrink-0 focus-visible:outline-none"
        >
          <span className="font-serif tracking-[0.22em] uppercase text-sm md:text-base text-slate-100 font-medium">
            Windsor Health Services
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A880]/70 font-sans">
            Asia Medical Device Fund
          </span>
        </button>

        {/* Zone 2: Concise navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase font-medium">
          <button
            onClick={() => handleNav('home')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              currentView === 'home' ? 'text-[#C5A880]' : 'text-slate-400'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => handleNav('home', 'fund-pillars')}
            className="text-slate-400 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Fund & Devices
          </button>
          <button
            onClick={() => handleNav('contact')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              currentView === 'contact' ? 'text-[#C5A880]' : 'text-slate-400'
            }`}
          >
            Inquiries
          </button>
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNav('portal')}
                className={`px-4 py-2 text-xs tracking-wider uppercase font-medium rounded border whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  currentView === 'portal'
                    ? 'bg-[#C5A880] text-[#060B17] border-[#C5A880]'
                    : 'bg-[#0B132B] text-slate-200 border-white/15 hover:border-[#C5A880]/50'
                }`}
              >
                <Lock className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>LP Portal</span>
              </button>
              <button
                onClick={onLogout}
                className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4 tracking-wider uppercase"
              >
                Exit
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleNav('portal')}
              className={`px-4 py-2 text-xs tracking-widest uppercase font-medium rounded border whitespace-nowrap shrink-0 flex items-center gap-2 ${
                currentView === 'portal'
                  ? 'bg-[#C5A880] text-[#060B17] border-[#C5A880]'
                  : 'bg-[#0B132B]/80 text-[#C5A880] border-[#C5A880]/40 hover:bg-[#0E1A36] hover:border-[#C5A880]'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Client Portal</span>
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#060B17] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col gap-3 text-sm tracking-widest uppercase">
            <button
              onClick={() => handleNav('home')}
              className={`text-left py-2 ${currentView === 'home' ? 'text-[#C5A880]' : 'text-slate-300'}`}
            >
              Overview
            </button>
            <button
              onClick={() => handleNav('home', 'fund-pillars')}
              className="text-left py-2 text-slate-300 hover:text-white"
            >
              Fund & Devices
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`text-left py-2 ${currentView === 'contact' ? 'text-[#C5A880]' : 'text-slate-300'}`}
            >
              Inquiries
            </button>
          </div>
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => handleNav('portal')}
              className="w-full py-2.5 bg-[#0B132B] border border-[#C5A880]/50 text-[#C5A880] text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Client Portal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
