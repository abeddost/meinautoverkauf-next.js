
import React, { useState } from 'react';
import { AppView } from '../types';

interface HeaderProps {
  onLogoClick: () => void;
  onViewChange: (view: AppView) => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onViewChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (view: AppView) => {
    onViewChange(view);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-brand-dark border-b border-white/5 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
        <button 
          onClick={() => {
            onLogoClick();
            handleNavigation(AppView.HOME);
          }} 
          className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
          aria-label="Meinautoverkauf Startseite"
        >
          <div className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[45px] lg:h-[45px]">
              <rect width="100" height="100" rx="12" fill="#1e293b"/>
              <path d="M20 65L35 45H65L80 65V75H20V65Z" fill="#f97316"/>
              <circle cx="35" cy="75" r="8" fill="white"/>
              <circle cx="65" cy="75" r="8" fill="white"/>
              <path d="M40 35L50 25L60 35H40Z" fill="#f97316"/>
            </svg>
            <div className="ml-2 text-left">
              <div className="text-base lg:text-xl font-extrabold text-white leading-none uppercase tracking-tighter">
                MeinAuto<span className="text-brand-orange">verkauf</span>.de
              </div>
            </div>
          </div>
        </button>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center gap-1.5 group w-10 h-10 transition-all"
          aria-expanded={isMenuOpen}
          aria-label="Menü umschalten"
        >
          <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          {!isMenuOpen && <span className="text-[8px] text-white font-bold uppercase mt-0.5">Menü</span>}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => onViewChange(AppView.AUTO_BEWERTEN)} className="text-slate-300 hover:text-brand-orange font-semibold transition-colors">Bewertung</button>
          <button onClick={() => onViewChange(AppView.AUTO_VERKAUFEN)} className="text-slate-300 hover:text-brand-orange font-semibold transition-colors">Verkaufen</button>
          <button onClick={() => onViewChange(AppView.VORTEILE)} className="text-slate-300 hover:text-brand-orange font-semibold transition-colors">Vorteile</button>
          <button onClick={() => onViewChange(AppView.RATGEBER)} className="text-slate-300 hover:text-brand-orange font-semibold transition-colors">Ratgeber</button>
          <button 
            onClick={() => {
              onViewChange(AppView.HOME);
              setTimeout(() => document.getElementById('evaluate')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}
            className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95"
          >
            Auto verkaufen
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <div 
        className={`md:hidden absolute left-0 right-0 bg-brand-dark border-t border-white/5 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] border-b border-white/5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="flex flex-col p-6 gap-5">
          <button 
            onClick={() => handleNavigation(AppView.AUTO_BEWERTEN)} 
            className="text-left text-slate-100 hover:text-brand-orange font-bold text-lg border-b border-white/5 pb-2"
          >
            Fahrzeugbewertung
          </button>
          <button 
            onClick={() => handleNavigation(AppView.AUTO_VERKAUFEN)} 
            className="text-left text-slate-100 hover:text-brand-orange font-bold text-lg border-b border-white/5 pb-2"
          >
            Auto verkaufen
          </button>
          <button 
            onClick={() => handleNavigation(AppView.VORTEILE)} 
            className="text-left text-slate-100 hover:text-brand-orange font-bold text-lg border-b border-white/5 pb-2"
          >
            Ihre Vorteile
          </button>
          <button 
            onClick={() => handleNavigation(AppView.RATGEBER)} 
            className="text-left text-slate-100 hover:text-brand-orange font-bold text-lg border-b border-white/5 pb-2"
          >
            Verkaufs-Ratgeber
          </button>
          <button 
            onClick={() => {
              handleNavigation(AppView.HOME);
              setTimeout(() => document.getElementById('evaluate')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}
            className="bg-brand-orange text-white w-full py-4 rounded-xl font-black text-center shadow-lg active:scale-95 transition-transform mt-2"
          >
            JETZT BEWERTEN
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
