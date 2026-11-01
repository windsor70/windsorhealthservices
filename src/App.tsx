/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewMode, ClientProfile } from './types';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FundOverview } from './components/FundOverview';
import { ClientPortal, FUND_DEMO_PROFILES } from './components/ClientPortal';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeProfile, setActiveProfile] = useState<ClientProfile | null>(null);

  const handleLogin = (profile: ClientProfile) => {
    setIsAuthenticated(true);
    setActiveProfile(profile);
    setCurrentView('portal');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveProfile(null);
  };

  const handleNavigate = (view: ViewMode) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#060B17] text-[#E2E8F0] flex flex-col font-sans selection:bg-[#C5A880]/30 selection:text-[#F8F9FB]">
      {/* 3-Zone Minimalist Navigation */}
      <Navigation
        currentView={currentView}
        onNavigate={handleNavigate}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />

      {/* Main View Flow */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <FundOverview onNavigate={handleNavigate} />
            <div className="border-t border-white/8">
              <ContactForm onNavigate={handleNavigate} />
            </div>
          </>
        )}

        {currentView === 'portal' && (
          <ClientPortal
            isAuthenticated={isAuthenticated}
            onLogin={handleLogin}
            onLogout={handleLogout}
            clientProfile={activeProfile}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'contact' && (
          <div className="pt-8">
            <ContactForm onNavigate={handleNavigate} />
          </div>
        )}
      </main>

      {/* Quiet Minimal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
