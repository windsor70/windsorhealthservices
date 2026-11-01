import React from 'react';
import { ViewMode } from '../types';

interface FooterProps {
  onNavigate: (view: ViewMode) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#040812] border-t border-white/8 text-slate-400 py-12 px-6 lg:px-12 font-sans text-xs">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/6">
          <div className="space-y-1">
            <div>
              <span className="font-serif tracking-[0.2em] uppercase text-sm text-slate-100 font-medium">
                Windsor Health Services
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light">
              Private fund investing in and providing advanced medical devices across Asia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Overview
            </button>
            <button
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('fund-pillars')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="hover:text-white transition-colors"
            >
              Fund & Devices
            </button>
            <button onClick={() => onNavigate('portal')} className="text-[#C5A880] hover:text-white transition-colors">
              Client Portal
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Inquiries
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-slate-500 font-light">
          <div>
            Singapore (HQ) · Tokyo · Hong Kong · Seoul
          </div>
          <div>
            For Accredited Investors & Institutional Entities Only · © 2026 Windsor Health Services.
          </div>
        </div>
      </div>
    </footer>
  );
};
