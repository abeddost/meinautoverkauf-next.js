
import React, { useEffect, useState } from 'react';
import { AppView } from '../types';

interface HeaderProps {
  onLogoClick: () => void;
  onViewChange: (view: AppView) => void;
  onScrollToValuation: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onViewChange, onScrollToValuation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavigation = (view: AppView) => {
    onViewChange(view);
    setIsMenuOpen(false);
  };

  const handleScrollToValuation = () => {
    onScrollToValuation();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white border-b border-slate-200 shadow-sm' : 'bg-transparent border-b border-white/40 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
        <button 
          onClick={() => {
            onLogoClick();
            handleNavigation(AppView.HOME);
          }} 
          className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
          aria-label="Meinautoverkauf Startseite"
        >
          <img
            src="/logo.png"
            alt="MeinAutoVerkauf.de"
            className="h-20 lg:h-24 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </button>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center gap-1.5 group w-10 h-10 transition-all"
          aria-expanded={isMenuOpen}
          aria-label="Menü umschalten"
        >
          <div className={`w-6 h-0.5 bg-slate-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-slate-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          {!isMenuOpen && <span className="text-[8px] text-slate-700 font-bold uppercase mt-0.5">Menü</span>}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => onViewChange(AppView.AUTO_BEWERTEN)} className="text-sm text-slate-700 hover:text-brand-orange font-semibold transition-colors">Bewertung</button>
          <button onClick={() => onViewChange(AppView.AUTO_VERKAUFEN)} className="text-sm text-slate-700 hover:text-brand-orange font-semibold transition-colors">Verkaufen</button>
          <button onClick={() => onViewChange(AppView.VORTEILE)} className="text-sm text-slate-700 hover:text-brand-orange font-semibold transition-colors">Vorteile</button>
          <button onClick={() => onViewChange(AppView.RATGEBER)} className="text-sm text-slate-700 hover:text-brand-orange font-semibold transition-colors">Ratgeber</button>
          <button 
            onClick={handleScrollToValuation}
            className="bg-brand-orange text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95"
          >
            Auto verkaufen
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <div 
        className={`md:hidden absolute left-0 right-0 bg-white border-t border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] border-b border-slate-200 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="flex flex-col p-6 gap-4">
          <button 
            onClick={() => handleNavigation(AppView.AUTO_BEWERTEN)} 
            className="text-left text-slate-700 hover:text-brand-orange font-semibold text-base border-b border-slate-200 pb-2"
          >
            Fahrzeugbewertung
          </button>
          <button 
            onClick={() => handleNavigation(AppView.AUTO_VERKAUFEN)} 
            className="text-left text-slate-700 hover:text-brand-orange font-semibold text-base border-b border-slate-200 pb-2"
          >
            Auto verkaufen
          </button>
          <button 
            onClick={() => handleNavigation(AppView.VORTEILE)} 
            className="text-left text-slate-700 hover:text-brand-orange font-semibold text-base border-b border-slate-200 pb-2"
          >
            Ihre Vorteile
          </button>
          <button 
            onClick={() => handleNavigation(AppView.RATGEBER)} 
            className="text-left text-slate-700 hover:text-brand-orange font-semibold text-base border-b border-slate-200 pb-2"
          >
            Verkaufs-Ratgeber
          </button>
          <button 
            onClick={handleScrollToValuation}
            className="bg-brand-orange text-white w-full py-3 rounded-xl text-base font-bold text-center shadow-lg active:scale-95 transition-transform mt-2"
          >
            JETZT BEWERTEN
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
