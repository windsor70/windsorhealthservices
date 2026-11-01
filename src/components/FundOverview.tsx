import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ViewMode } from '../types';

interface FundOverviewProps {
  onNavigate: (view: ViewMode) => void;
}

export const FundOverview: React.FC<FundOverviewProps> = ({ onNavigate }) => {
  const pillars = [
    {
      index: '01',
      title: 'Investment Fund Vehicles',
      role: 'Capital Deployment',
      description:
        'We structure asset-backed credit and growth equity vehicles for family offices and institutional investors. Every allocation is backed by revenue-generating medical hardware in premier Asian hospitals.',
    },
    {
      index: '02',
      title: 'Medical Device Provisioning',
      role: 'Cross-Border Supply',
      description:
        'We procure, import, and install advanced diagnostic imaging, oncology radiation systems, and surgical robotics into public and private healthcare networks across 14 Asian countries.',
    },
    {
      index: '03',
      title: 'Institutional Co-Investment',
      role: 'Family Office Syndicates',
      description:
        'Family offices can co-invest directly alongside our flagship fund in specialized device fleets and regional hospital expansion tranches under Singapore trust governance.',
    },
  ];

  return (
    <section id="fund-pillars" className="py-24 bg-[#080E1C] border-b border-white/8 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-3">
            <div className="text-xs uppercase tracking-[0.24em] text-[#C5A880] font-sans">
              Our Model
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-100 font-normal leading-tight">
              A Fund Designed for Medical Infrastructure.
            </h2>
          </div>
          <div className="text-xs text-slate-400 font-sans tracking-wider uppercase">
            Capital Security · Real Assets · Asia-Wide Reach
          </div>
        </div>

        {/* 3 Clean Minimalist Cards without bottom bullet list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="p-8 rounded-lg bg-[#0A1224]/80 border border-white/8 hover:border-[#C5A880]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/6">
                  <span className="font-serif text-[#C5A880] text-sm font-semibold tracking-wider">
                    {pillar.index}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-sans">
                    {pillar.role}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-slate-100 font-normal">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Banner */}
        <div className="mt-14 p-6 rounded bg-[#0A1224] border border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-300 font-light">
            Are you a family office or institution seeking asset-backed medical device allocation?
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="text-xs text-[#C5A880] hover:text-white uppercase tracking-wider flex items-center gap-1 font-medium whitespace-nowrap"
          >
            <span>Request Fund Information</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
