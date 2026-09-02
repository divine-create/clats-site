import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import { Menu, X } from 'lucide-react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ForSchoolsPage from './components/ForSchoolsPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import WaitlistPage from './components/WaitlistPage';
import EbookPopup from './components/EbookPopup';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const getRenderedPage = () => {
    const normalized = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
    
    switch (normalized) {
      case '/':
        return <HomePage onNavigate={handleNavigate} />;
      case '/schools':
        return <ForSchoolsPage onNavigate={handleNavigate} awardXP={() => {}} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} awardXP={() => {}} />;
      case '/faq':
        return <FAQPage onNavigate={handleNavigate} awardXP={() => {}} />;
      case '/waitlist':
      case '/get-started':
        return <WaitlistPage onNavigate={handleNavigate} awardXP={() => {}} />;
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} awardXP={() => {}} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'For Schools', path: '/schools' },
    { label: 'About', path: '/about' },
    { label: 'FAQ', path: '/faq' }
  ];

  const currentPathNormalized = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');

  // Full page layouts for waitlist
  if (currentPathNormalized === '/waitlist' || currentPathNormalized === '/get-started') {
    return (
      <div className="min-h-screen bg-white text-dark font-sans flex flex-col">
        <WaitlistPage onNavigate={handleNavigate} awardXP={() => {}} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-dark font-sans flex flex-col justify-between selection:bg-turquoise/20 selection:text-dark">

      <EbookPopup />

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-4 shadow-sm select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => handleNavigate('/')} 
            className="border-none bg-transparent outline-none cursor-pointer flex p-0 items-center gap-2"
          >
            <Logo className="scale-90 origin-left" animated={false} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-sans font-semibold text-[15px]">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`transition-colors border-none bg-transparent pb-1 cursor-pointer outline-none relative group ${
                  currentPathNormalized === item.path 
                    ? 'text-turquoise' 
                    : 'text-dark-light hover:text-dark'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavigate('/contact')}
              className="text-dark-light hover:text-dark font-semibold text-[15px] transition-colors border-none bg-transparent cursor-pointer"
            >
              School Partnership
            </button>
            <button
              onClick={() => handleNavigate('/get-started')}
              className="bg-turquoise hover:bg-turquoise/90 text-white font-semibold text-[15px] px-6 py-2.5 rounded-full shadow-sm transition-all border-none cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-dark-light hover:bg-gray-50 border-none bg-transparent outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-100 py-4 px-6 shadow-lg flex flex-col gap-4 animate-fadeIn">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`text-left py-2 text-[16px] font-semibold bg-transparent border-none outline-none ${
                  currentPathNormalized === item.path ? 'text-turquoise' : 'text-dark'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => handleNavigate('/contact')}
                className="text-center w-full py-3 text-[16px] font-semibold text-dark bg-gray-50 rounded-xl border-none cursor-pointer"
              >
                School Partnership
              </button>
              <button
                onClick={() => handleNavigate('/get-started')}
                className="text-center w-full py-3 text-[16px] font-semibold text-white bg-turquoise rounded-xl border-none cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {getRenderedPage()}
      </main>

      {/* FOOTER */}
      <footer className="bg-dark text-white pt-16 pb-8 font-sans">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1 space-y-4 flex flex-col items-start">
            <Logo className="scale-90 origin-left" animated={false} />
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-sm font-medium pt-2">
              A future-ready learning platform helping children aged 2–18 develop the knowledge, skills and confidence they need to thrive.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-[16px]">Navigation</h5>
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className="text-left text-gray-300 hover:text-white transition-colors text-[15px] bg-transparent border-none p-0 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-[16px]">Partnerships</h5>
            <div className="flex flex-col gap-3">
              <button onClick={() => handleNavigate('/schools')} className="text-left text-gray-300 hover:text-white transition-colors text-[15px] bg-transparent border-none p-0 cursor-pointer">
                For Schools
              </button>
              <button onClick={() => handleNavigate('/contact')} className="text-left text-gray-300 hover:text-white transition-colors text-[15px] bg-transparent border-none p-0 cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-gray-400">
          <span>© {new Date().getFullYear()} CLATS. All rights reserved.</span>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
