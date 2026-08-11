/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import { 
  Star, ChevronRight, Menu, X, ShieldAlert, Sparkles, Mail, Phone, Heart, Instagram, Youtube, Facebook, Twitter 
} from 'lucide-react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PathwaysPage from './components/PathwaysPage';
import FoundingFamiliesPage from './components/FoundingFamiliesPage';
import PartnershipsPage from './components/PartnershipsPage';
import ForSchoolsPage from './components/ForSchoolsPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import PricingPage from './components/PricingPage';
import PricingSuccessPage from './components/PricingSuccessPage';

export default function App() {
  // Path routing state
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Cohort slots state for real-time tracking across home and founding pages
  const [slotsJoined, setSlotsJoined] = useState(45);

  // Gamified visitor state
  const [userXP, setUserXP] = useState(250);
  const [hasInteractedWithHero, setHasInteractedWithHero] = useState(false);
  const [hasVisitedMascots, setHasVisitedMascots] = useState(false);
  const [visitedTabs, setVisitedTabs] = useState<string[]>([]);
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  // Interactive menu states
  const [showEarlyAccessNotice, setShowEarlyAccessNotice] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLaunchPortalSuccess, setShowLaunchPortalSuccess] = useState(false);

  // Safe navigation handler
  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  // Intercept back and forward browser operations
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Award user rewards XP to display in gamified header
  const awardXP = (pts: number, actionId: string) => {
    if (visitedTabs.includes(actionId)) return;
    setVisitedTabs([...visitedTabs, actionId]);
    setUserXP(prev => prev + pts);
  };

  // Safe path routing utility
  const getRenderedPage = () => {
    // Normalise trailing slashes
    const normalized = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
    
    switch (normalized) {
      case '/':
        return (
          <HomePage 
            onNavigate={handleNavigate}
            onOpenPortal={() => setShowEarlyAccessNotice(true)}
            awardXP={awardXP}
            setUserXP={setUserXP}
            setHasInteractedWithHero={setHasInteractedWithHero}
            setHasVisitedMascots={setHasVisitedMascots}
            hasVisitedMascots={hasVisitedMascots}
            slotsJoined={slotsJoined}
          />
        );
      case '/about':
        return (
          <AboutPage 
            onNavigate={handleNavigate}
            awardXP={awardXP}
          />
        );
      case '/pathways':
        return (
          <PathwaysPage 
            onNavigate={handleNavigate}
            onOpenPortal={() => setShowEarlyAccessNotice(true)}
            awardXP={awardXP}
          />
        );
      case '/founding-families':
        return (
          <FoundingFamiliesPage 
            onNavigate={handleNavigate}
            awardXP={awardXP}
            slotsJoined={slotsJoined}
            setSlotsJoined={setSlotsJoined}
          />
        );
      case '/partnerships':
      case '/partners':
        return (
          <PartnershipsPage 
            onNavigate={handleNavigate}
            awardXP={awardXP}
          />
        );
      case '/schools':
        return (
          <ForSchoolsPage 
            onNavigate={handleNavigate}
            awardXP={awardXP}
          />
        );
      case '/pricing':
        return (
          <PricingPage 
            onNavigate={handleNavigate}
            awardXP={awardXP}
          />
        );
      case '/pricing/success':
        return (
          <PricingSuccessPage 
            onNavigate={handleNavigate}
            awardXP={awardXP}
          />
        );
      case '/faq':
        return (
          <FAQPage 
            onNavigate={handleNavigate}
            awardXP={awardXP}
          />
        );
      case '/contact':
        return (
          <ContactPage 
            onNavigate={handleNavigate}
            awardXP={awardXP}
          />
        );
      default:
        // Graceful redirecting to Home if page is not found
        return (
          <HomePage 
            onNavigate={handleNavigate}
            onOpenPortal={() => setShowEarlyAccessNotice(true)}
            awardXP={awardXP}
            setUserXP={setUserXP}
            setHasInteractedWithHero={setHasInteractedWithHero}
            setHasVisitedMascots={setHasVisitedMascots}
            hasVisitedMascots={hasVisitedMascots}
          />
        );
    }
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Learning Pathways', path: '/pathways' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Founding Families', path: '/founding-families' },
    { label: 'For Schools', path: '/schools' },
    { label: 'Partnerships', path: '/partnerships' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' }
  ];

  const currentPathNormalized = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');

  return (
    <div className="min-h-screen bg-[#fafbff] text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900 flex flex-col justify-between">
      
      {/* 1. STICKY DYNAMIC HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 px-4 md:px-6 py-3.5 shadow-sm select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => handleNavigate('/')} 
            className="border-none bg-transparent outline-none cursor-pointer flex p-0"
          >
            <Logo className="scale-95 origin-left" />
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-5 font-sans font-extrabold $10 text-slate-600 text-[11px] uppercase tracking-wider mt-1">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`transition-colors border-none bg-transparent font-black tracking-widest uppercase text-xxs pb-0.5 cursor-pointer outline-none ${
                  currentPathNormalized === item.path 
                    ? 'text-purple-650 text-purple-700 border-b-2 border-purple-600' 
                    : 'text-slate-600 hover:text-purple-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Gamified Stat + Fast Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3.5 md:gap-4 select-none">
            
            {/* Gamified XP Indicator */}
            <div 
              onClick={() => {
                awardXP(50, 'xp_badge_clicked');
              }}
              className="bg-purple-50/65 border border-purple-100 hover:border-purple-300 rounded-2xl px-3 py-1 flex sm:px-3.5 sm:py-1.5 items-center gap-2 cursor-pointer transition-all hover:bg-white active:scale-95 group shadow-sm shadow-purple-50"
              title="Your interactive platform score inside the sandbox!"
            >
              <div className="w-5.5 h-5.5 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 animate-pulse">
                <Star className="w-3.5 h-3.5 text-slate-950 fill-amber-500 stroke-[2.5]" />
              </div>
              <div className="text-left leading-none font-sans select-none">
                <span className="text-[8px] sm:text-[9px] text-slate-500 uppercase tracking-wider font-bold block">Explorer Score</span>
                <span className="text-xs font-black text-purple-700 font-mono">{userXP} XP</span>
              </div>
            </div>

            {/* App Link button */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://app.clats.org"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => awardXP(20, 'prototype_header_clicked')}
                className="bg-slate-950 hover:bg-slate-800 text-white font-black text-xs px-4 py-2.5 rounded-2xl shadow-sm cursor-pointer transition-all font-sans flex items-center gap-1.5 no-underline"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#2EC4B6] shrink-0" />
                Launch App
              </a>
            </div>

            {/* Main Header Waitlist Pill */}
            <button
              onClick={() => {
                awardXP(30, 'header_cta_clicked');
                handleNavigate('/founding-families');
              }}
              className="hidden sm:inline-flex bg-gradient-to-r from-[#2EC4B6] to-teal-500 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-black text-xs px-4 py-2.5 sm:px-4.5 sm:py-3 rounded-2xl shadow-md cursor-pointer items-center gap-1 transition-all border-none"
            >
              Join Waitlist
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            </button>

            {/* Mobile burger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-100/80 text-slate-700 border border-slate-200 outline-none transition-transform active:scale-95 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2.2]" /> : <Menu className="w-5 h-5 stroke-[2.2]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-purple-50 bg-white py-4 px-5 absolute left-0 right-0 top-full shadow-lg rounded-b-[2rem] font-sans flex flex-col gap-4 text-left z-50 select-none animate-fadeIn">
            {/* Quick links list */}
            <div className="flex flex-col gap-3 font-extrabold text-slate-700 text-xs uppercase tracking-widest">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`hover:text-purple-600 transition-colors py-2 border-b border-slate-50 text-left cursor-pointer font-black tracking-widest text-xxs block bg-transparent border-none outline-none ${
                    currentPathNormalized === item.path ? 'text-purple-600 font-extrabold pl-1' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Fast actions row */}
            <div className="flex pt-2 border-t $10">
              <a
                href="https://app.clats.org"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  awardXP(20, 'prototype_header_clicked');
                }}
                className="w-full bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 no-underline"
              >
                <Sparkles className="w-4 h-4 text-[#2EC4B6] shrink-0" />
                Launch App
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. DYNAMICALLY ROUTED MAIN COMPONENT CONTENT */}
      <main className="flex-1 bg-white">
        {getRenderedPage()}
      </main>

      {/* 11. GLOBAL FOOTER - SHOWS ON ALL PAGES */}
      <footer id="clats-corporate-footer" className="bg-white text-slate-700 border-t border-slate-200/80 pt-16 pb-12 relative overflow-hidden font-sans select-none mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-5 space-y-4 text-left">
            <button 
              onClick={() => handleNavigate('/')} 
              className="border-none bg-transparent outline-none cursor-pointer p-0"
            >
              <Logo className="scale-90 origin-left" animated={false} />
            </button>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-sm pt-2 font-medium">
              CLATS is The World's premium future-skills engine. We empower kids with advanced digital skills safely, ethically, and playfully.
            </p>
            <div className="text-[14px] text-purple-600 font-mono font-semibold tracking-wider">
              “Building Tomorrow’s Tech Minds Today!”
            </div>
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://x.com/CLATSTech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-50 hover:bg-[#2EC4B6]/10 text-slate-500 hover:text-[#2EC4B6] flex items-center justify-center transition-all border border-slate-200 hover:border-[#2EC4B6]/30 hover:scale-105 active:scale-95"
                title="Follow CLATS on Twitter / X"
              >
                <Twitter className="w-4 h-4 stroke-[2.2]" />
              </a>
              <a
                href="https://www.instagram.com/clats_technologies?igsh=MTQ1Mnphamc0NnY0eg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-50 hover:bg-purple-50 text-slate-500 hover:text-purple-600 flex items-center justify-center transition-all border border-slate-200 hover:border-purple-100 hover:scale-105 active:scale-95"
                title="Follow CLATS on Instagram"
              >
                <Instagram className="w-4 h-4 stroke-[2.2]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61563470186914"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-600 flex items-center justify-center transition-all border border-slate-200 hover:border-blue-100 hover:scale-105 active:scale-95"
                title="Follow CLATS on Facebook"
              >
                <Facebook className="w-4 h-4 stroke-[2.2]" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCLdrlpGkXt1OQmb2KQMtJWA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-50 hover:bg-rose-50 text-slate-500 hover:text-rose-600 flex items-center justify-center transition-all border border-slate-200 hover:border-rose-100 hover:scale-105 active:scale-95"
                title="Subscribe to CLATS on YouTube"
              >
                <Youtube className="w-4 h-4 stroke-[2.2]" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links Navigation Mapping */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h5 className="text-slate-900 font-bold text-sm tracking-wide font-display uppercase">Explore Sites</h5>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-650 font-semibold font-sans">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className="hover:text-teal-600 text-slate-600 transition-colors text-left bg-transparent border-none p-0 outline-none cursor-pointer flex text-[11px] uppercase tracking-wider font-semibold py-1"
                >
                  {item.label === 'Learning Pathways' ? 'Syllabus' : item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Secure Contact Desk coordinates */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h5 className="text-slate-900 font-bold text-sm tracking-wide font-display uppercase font-sans">Helpdesk Desk</h5>
            <div className="space-y-2.5 text-xs text-slate-600 font-semibold font-sans">
              <div className="relative">
                <button 
                  onClick={() => setShowEmailOptions(!showEmailOptions)}
                  className="flex items-center gap-2 hover:text-teal-600 text-slate-600 transition-colors cursor-pointer outline-none text-left bg-transparent border-none p-0 text-xs"
                >
                  <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                  clatstechnologies@gmail.com
                </button>
                {showEmailOptions && (
                  <div className="absolute left-0 bottom-full mb-2 w-52 rounded-xl bg-white shadow-lg border border-slate-200 p-2 text-slate-900 z-50 text-[11px] select-none text-left">
                    <p className="px-2 py-1 text-[9px] text-slate-400 uppercase font-black tracking-wider border-b border-slate-100 pb-1 mb-1">Open email using</p>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=clatstechnologies@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setShowEmailOptions(false)}
                      className="flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-100 text-slate-800 font-medium transition-colors"
                    >
                      <span>🌐</span> Gmail
                    </a>
                    <a 
                      href="https://outlook.live.com/default.aspx?rru=compose&to=clatstechnologies@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setShowEmailOptions(false)}
                      className="flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-100 text-slate-800 font-medium transition-colors"
                    >
                      <span>📧</span> Outlook
                    </a>
                    <a 
                      href="mailto:clatstechnologies@gmail.com"
                      onClick={() => setShowEmailOptions(false)}
                      className="flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-100 text-[#2EC4B6]/90 font-bold transition-colors border-t border-slate-100 mt-1 pt-1.5"
                    >
                      <span>💻</span> Default Mail Client
                    </a>
                  </div>
                )}
              </div>
              <a 
                href="https://wa.me/23481613567366" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-teal-600 text-slate-600 transition-colors text-xs"
              >
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                (234) 81613567366 (WhatsApp)
              </a>
            </div>
          </div>

        </div>

        {/* Corporate baseline */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 select-none font-sans">
          <span>© 2026 CLATS Global. All rights reserved.</span>
          <div className="flex items-center gap-1.5 font-semibold">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Building Global’s Future Tech Minds</span>
          </div>
          <div className="flex items-center gap-3 text-xxs font-mono uppercase tracking-wider text-slate-400">
            <span>COPPA Childproof Shield</span>
          </div>
        </div>
      </footer>

      {/* 12. CLATS EARLY ACCESS INTUITIVE NOTICE MODAL */}
      {showEarlyAccessNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none animate-fadeIn">
          {/* Backdrop trigger */}
          <div 
            onClick={() => setShowEarlyAccessNotice(false)} 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
          />
          
          {/* Modal box */}
          <div className="bg-white rounded-[2.5rem] border-2 border-purple-150 shadow-2xl p-6 md:p-10 w-full max-w-lg relative overflow-hidden z-10 font-sans text-slate-800 scale-100 transition-transform text-left">
            
            {/* Top color bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2EC4B6] via-[#B8A0FF] to-[#FFD166]" />

            {/* Close trigger */}
            <button
              onClick={() => setShowEarlyAccessNotice(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 cursor-pointer outline-none border-none p-0"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            <div className="space-y-6 pt-2">
              
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100 shrink-0">
                  <ShieldAlert className="w-5 h-5 text-[#8A67F0]" />
                </div>
                <h3 className="text-xl font-black text-slate-950 font-display">
                  CLATS Is Currently In Early Access
                </h3>
              </div>

              {/* Main Content Body */}
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold">
                CLATS is currently in active development and pilot testing. As an early participant, you are warmly invited to test our live interactive prototype dashboard, discover secure sandbox logs, and help us refine tomorrow's child protection systems!
              </p>

              {/* Interactive Info Sheet */}
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 flex gap-3 text-xxs font-bold text-amber-900">
                <span className="text-lg">💡</span>
                <p className="leading-relaxed">
                  Your platform feedback will directly influence our future block coding layouts, visual neural structures, and safe password simulations!
                </p>
              </div>

              {/* CTAs */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowEarlyAccessNotice(false);
                    setShowLaunchPortalSuccess(true);
                    awardXP(100, 'portal_opened_access');
                    window.open('https://clats-app-8zv7.vercel.app/', '_blank', 'noopener,noreferrer');
                    setTimeout(() => {
                      setShowLaunchPortalSuccess(false);
                    }, 4000);
                  }}
                  className="flex-1 bg-[#2EC4B6] hover:bg-[#25b5a7] text-slate-950 font-black text-xs md:text-sm uppercase tracking-wider py-4 rounded-xl.5 rounded-2xl shadow-md transition-colors cursor-pointer border-none"
                >
                  Proceed
                </button>
                <button
                  type="button"
                  onClick={() => setShowEarlyAccessNotice(false)}
                  className="px-6 py-4 bg-slate-100 hover:bg-slate-200 $10 text-slate-700 font-black text-xs uppercase tracking-wider rounded-xl.5 rounded-2xl transition-colors cursor-pointer border-none bg-slate-150"
                >
                  Cancel
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* SUCCESS NOTIFICATION TOAST */}
      {showLaunchPortalSuccess && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-slate-950/95 border border-purple-500/20 shadow-2xl max-w-sm font-sans flex gap-3.5 items-center text-left select-none text-white animate-slideIn">
          <div className="w-9 h-9 rounded-xl bg-[#2EC4B6]/20 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-[#2EC4B6] animate-pulse" />
          </div>
          <div className="space-y-0.5 leading-none text-left">
            <span className="text-xs font-black block text-white">Space Portal Activated! 🚀</span>
            <span className="text-[10px] text-slate-300 font-bold block mt-0.5">Explorer sandbox launching safely. (+100 XP awarded)</span>
          </div>
        </div>
      )}

    </div>
  );
}
