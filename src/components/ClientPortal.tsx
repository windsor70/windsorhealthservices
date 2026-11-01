import React, { useState } from 'react';
import { Lock, KeyRound, Building, ArrowRight, Download, CheckCircle2, AlertCircle, FileText, LogOut } from 'lucide-react';
import { ClientProfile, ViewMode } from '../types';

interface ClientPortalProps {
  isAuthenticated: boolean;
  onLogin: (profile: ClientProfile) => void;
  onLogout: () => void;
  clientProfile: ClientProfile | null;
  onNavigate: (view: ViewMode) => void;
}

export const FUND_DEMO_PROFILES: ClientProfile[] = [
  {
    id: 'FO-AURACREST-SG',
    entityName: 'Aura Crest Family Office',
    domicile: 'Singapore',
    fundVehicle: 'Windsor Asia Medical Infrastructure Fund III',
    committedCapital: 'US$ 45,000,000',
    distributedYield: 'US$ 4,680,000 (10.4% p.a.)',
    portfolioCompanies: [
      {
        name: 'ASEAN Diagnostic Imaging Fleet',
        deviceType: '3T MRI & High-Slice CT Scanners',
        markets: 'Singapore, Malaysia, Indonesia',
        investmentType: 'Senior Secured Equipment Debt',
        status: 'Performing · 100% Hospital Occupancy',
      },
      {
        name: 'Mekong Oncology Radiation Syndicate',
        deviceType: 'Linear Accelerators (LINAC)',
        markets: 'Thailand, Vietnam',
        investmentType: 'Asset-Backed Leasing Facility',
        status: 'Performing · Quarterly Distribution',
      },
      {
        name: 'Pan-Asian Surgical Robotics Tranche',
        deviceType: 'Endoscopic Robotic Consoles',
        markets: 'Japan, South Korea, Taiwan',
        investmentType: 'Growth Capital & Hardware Lien',
        status: 'Performing · Active Deployment',
      },
    ],
    quarterlyStatements: [
      {
        id: 'STMT-2026-Q3',
        period: 'Q3 2026 LP Distribution Statement',
        date: 'October 15, 2026',
        fileSize: '1.2 MB',
      },
      {
        id: 'AUDIT-2026-COLLATERAL',
        period: '2026 Pan-Asia Medical Hardware Lien Audit',
        date: 'September 30, 2026',
        fileSize: '3.8 MB',
      },
      {
        id: 'TAX-2026-SINGAPORE',
        period: 'Singapore Section 13O/13U Tax Exemption Pack',
        date: 'August 10, 2026',
        fileSize: '890 KB',
      },
    ],
  },
  {
    id: 'INST-KYOTO-TRUST-JP',
    entityName: 'Kyoto Healthcare Institutional Trust',
    domicile: 'Tokyo, Japan',
    fundVehicle: 'Windsor Pan-Asian Medical Credit Fund II',
    committedCapital: 'US$ 120,000,000',
    distributedYield: 'US$ 11,880,000 (9.9% p.a.)',
    portfolioCompanies: [
      {
        name: 'Japan-Korea Advanced Diagnostics Consortium',
        deviceType: 'Digital PET-CT & Radiotherapy',
        markets: 'Japan, South Korea',
        investmentType: 'Senior Secured Credit',
        status: 'Fully Deployed',
      },
      {
        name: 'Asia Critical Care Hardware Escrow',
        deviceType: 'ICU Telemetry & Dialysis Units',
        markets: 'Singapore, Philippines, Indonesia',
        investmentType: 'Direct Hardware Title Custody',
        status: 'Performing',
      },
    ],
    quarterlyStatements: [
      {
        id: 'STMT-2026-INST-Q3',
        period: 'Q3 2026 Institutional Distribution Schedule',
        date: 'October 18, 2026',
        fileSize: '2.4 MB',
      },
      {
        id: 'RISK-2026-ASSET-BACKED',
        period: 'Hardware Valuation & Equipment Deprecation Schedule',
        date: 'October 01, 2026',
        fileSize: '4.6 MB',
      },
    ],
  },
];

export const ClientPortal: React.FC<ClientPortalProps> = ({
  isAuthenticated,
  onLogin,
  onLogout,
  clientProfile,
  onNavigate,
}) => {
  const [entityInput, setEntityInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    setTimeout(() => {
      setLoading(false);
      const match = FUND_DEMO_PROFILES.find(
        (p) => p.id.toLowerCase() === entityInput.trim().toLowerCase()
      );
      if (match) {
        onLogin(match);
      } else if (entityInput.trim().length > 3) {
        const custom: ClientProfile = {
          id: entityInput.trim().toUpperCase(),
          entityName: `${entityInput.trim().toUpperCase()} Allocations`,
          domicile: 'Singapore',
          fundVehicle: 'Windsor Asia Medical Infrastructure Fund III',
          committedCapital: 'US$ 25,000,000',
          distributedYield: 'US$ 2,550,000 (10.2% p.a.)',
          portfolioCompanies: FUND_DEMO_PROFILES[0].portfolioCompanies,
          quarterlyStatements: FUND_DEMO_PROFILES[0].quarterlyStatements,
        };
        onLogin(custom);
      } else {
        setErrorMsg('Invalid LP entity identifier. Use a demo profile below to test.');
      }
    }, 350);
  };

  const handleDemoSelect = (p: ClientProfile) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin(p);
    }, 250);
  };

  const showNotification = (msg: string) => {
    setActionNotice(msg);
    setTimeout(() => setActionNotice(null), 3500);
  };

  return (
    <div className="min-h-[80vh] bg-[#060B17] py-16 px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        {!isAuthenticated || !clientProfile ? (
          /* Login Card */
          <div className="max-w-md mx-auto space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded border border-[#C5A880]/40 bg-[#0B132B] mb-2">
                <Lock className="w-4 h-4 text-[#C5A880]" />
              </div>
              <div className="text-xs uppercase tracking-[0.24em] text-[#C5A880] font-sans">
                Fund Portal
              </div>
              <h1 className="font-serif text-3xl text-slate-100 font-normal">
                LP & Family Office Access
              </h1>
              <p className="text-xs text-slate-400 font-light">
                Encrypted portal for accredited investors in Windsor medical device fund vehicles.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-[#0A1224]/90 border border-white/10 shadow-2xl">
              {errorMsg && (
                <div className="mb-5 p-3 rounded bg-red-950/40 border border-red-500/30 text-xs text-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleManualLogin} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-sans mb-1.5">
                    LP / Entity Identifier
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. FO-AURACREST-SG"
                      value={entityInput}
                      onChange={(e) => setEntityInput(e.target.value)}
                      className="w-full bg-[#060B17] border border-white/15 focus:border-[#C5A880] rounded px-3.5 py-2.5 pl-9 text-xs text-slate-100 font-mono transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-sans mb-1.5">
                    Security Passkey
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={passInput}
                      onChange={(e) => setPassInput(e.target.value)}
                      className="w-full bg-[#060B17] border border-white/15 focus:border-[#C5A880] rounded px-3.5 py-2.5 pl-9 text-xs text-slate-100 font-mono transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#C5A880] hover:bg-[#D4BD9E] text-[#060B17] transition-all text-xs uppercase tracking-widest font-semibold rounded mt-2 flex items-center justify-center gap-2"
                >
                  {loading ? 'Authenticating...' : 'Access LP Portal'}
                </button>
              </form>

              {/* Instant Demo Accounts */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5">
                <div className="text-[11px] uppercase tracking-wider text-[#C5A880] font-sans">
                  Demo Allocator Accounts
                </div>
                {FUND_DEMO_PROFILES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleDemoSelect(p)}
                    className="w-full p-3 text-left rounded bg-[#060B17] hover:bg-[#0B152B] border border-white/8 hover:border-[#C5A880]/30 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-serif text-slate-200 group-hover:text-white">
                        {p.entityName}
                      </div>
                      <div className="text-[10px] text-slate-400 font-sans">
                        {p.domicile} · {p.committedCapital}
                      </div>
                    </div>
                    <span className="text-xs text-[#C5A880] flex items-center gap-1">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center text-xs text-slate-500">
              Need assistance? Reach <a href="#contact" onClick={() => onNavigate('contact')} className="text-[#C5A880] underline">Investor Inquiries</a>.
            </div>
          </div>
        ) : (
          /* Authenticated LP Dashboard */
          <div className="space-y-8">
            {actionNotice && (
              <div className="p-3 rounded bg-[#0B152B] border border-[#C5A880]/50 text-xs text-[#E0CEB7] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <span>{actionNotice}</span>
                </div>
                <button onClick={() => setActionNotice(null)} className="text-slate-400 hover:text-white text-xs">
                  Close
                </button>
              </div>
            )}

            {/* Portal LP Header */}
            <div className="p-8 rounded-lg bg-[#0B132B]/90 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-widest text-[#C5A880] font-sans">
                  {clientProfile.domicile} · LP ID: {clientProfile.id}
                </div>
                <h1 className="font-serif text-3xl text-slate-100 font-normal">
                  {clientProfile.entityName}
                </h1>
                <p className="text-xs text-slate-400 font-light">
                  Fund Vehicle: <strong className="text-slate-200 font-normal">{clientProfile.fundVehicle}</strong>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => showNotification('Fund performance report download started.')}
                  className="px-4 py-2 bg-[#C5A880] text-[#060B17] hover:bg-[#D4BD9E] transition-colors text-xs uppercase tracking-wider font-semibold rounded whitespace-nowrap"
                >
                  Download Summary
                </button>
                <button
                  onClick={onLogout}
                  className="px-3 py-2 bg-[#060B17] text-slate-300 hover:text-white border border-white/15 text-xs uppercase tracking-wider font-medium rounded flex items-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Lock</span>
                </button>
              </div>
            </div>

            {/* Fund Financial Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded bg-[#0A1224] border border-white/8">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-sans">Committed Capital</div>
                <div className="font-serif text-2xl text-slate-100 mt-2 tabular-nums">{clientProfile.committedCapital}</div>
              </div>
              <div className="p-6 rounded bg-[#0A1224] border border-white/8">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-sans">Net Distributed Yield</div>
                <div className="font-serif text-2xl text-[#C5A880] mt-2 tabular-nums">{clientProfile.distributedYield}</div>
              </div>
              <div className="p-6 rounded bg-[#0A1224] border border-white/8">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-sans">Collateral Status</div>
                <div className="font-serif text-2xl text-slate-100 mt-2">100% Lien Secured</div>
              </div>
              <div className="p-6 rounded bg-[#0A1224] border border-white/8">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-sans">Reporting Period</div>
                <div className="font-serif text-2xl text-slate-100 mt-2">Q3 2026 Current</div>
              </div>
            </div>

            {/* Deployed Medical Devices Table */}
            <div className="p-8 rounded-lg bg-[#0A1224]/80 border border-white/8 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/6">
                <h3 className="font-serif text-xl text-slate-100 font-normal">Active Medical Device Allocations</h3>
                <span className="text-xs text-slate-400">Hospital Placements in Asia</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider text-[11px]">
                      <th className="py-2.5 px-3 font-normal">Tranche / Fleet</th>
                      <th className="py-2.5 px-3 font-normal">Device Hardware</th>
                      <th className="py-2.5 px-3 font-normal">Markets</th>
                      <th className="py-2.5 px-3 font-normal">Structure</th>
                      <th className="py-2.5 px-3 font-normal">Operational Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/6 text-slate-300">
                    {clientProfile.portfolioCompanies.map((item) => (
                      <tr key={item.name} className="hover:bg-white/[0.02]">
                        <td className="py-3 px-3 font-medium text-slate-100">{item.name}</td>
                        <td className="py-3 px-3 text-[#E0CEB7]">{item.deviceType}</td>
                        <td className="py-3 px-3 text-slate-400">{item.markets}</td>
                        <td className="py-3 px-3 font-mono text-[11px]">{item.investmentType}</td>
                        <td className="py-3 px-3 text-emerald-400/90">{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quarterly Statements */}
            <div className="p-8 rounded-lg bg-[#0A1224]/80 border border-white/8 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/6">
                <h3 className="font-serif text-xl text-slate-100 font-normal">Fiduciary & Tax Statements</h3>
                <span className="text-xs text-slate-400">Singapore Fiduciary Repository</span>
              </div>

              <div className="divide-y divide-white/6">
                {clientProfile.quarterlyStatements.map((stmt) => (
                  <div key={stmt.id} className="py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-[#C5A880]" />
                      <div>
                        <div className="text-xs font-medium text-slate-200">{stmt.period}</div>
                        <div className="text-[10px] text-slate-400">{stmt.id} · {stmt.date} · {stmt.fileSize}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => showNotification(`Downloaded ${stmt.period}`)}
                      className="px-3 py-1.5 bg-[#060B17] hover:bg-[#0B152B] border border-white/10 text-xs text-slate-200 hover:text-white rounded flex items-center gap-1.5"
                    >
                      <Download className="w-3 h-3 text-[#C5A880]" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
