
import React from 'react';

interface HeaderProps {
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <button 
          onClick={onLogoClick} 
          className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
          aria-label="MeinAutoPreis24 Home"
        >
          <div className="flex items-center">
            <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="12" fill="#0f172a"/>
              <path d="M20 65L35 45H65L80 65V75H20V65Z" fill="#f97316"/>
              <circle cx="35" cy="75" r="8" fill="white"/>
              <circle cx="65" cy="75" r="8" fill="white"/>
              <path d="M40 35L50 25L60 35H40Z" fill="#f97316"/>
            </svg>
            <div className="ml-3 text-left">
              <div className="text-xl font-extrabold text-brand-dark leading-none uppercase tracking-tighter">
                MeinAutoPreis<span className="text-brand-orange">24</span>
              </div>
              <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Premium Ankauf</div>
            </div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#evaluate" className="text-slate-600 hover:text-brand-orange font-semibold transition-colors">Bewertung</a>
          <a href="#trust" className="text-slate-600 hover:text-brand-orange font-semibold transition-colors">Vorteile</a>
          <a href="#faq" className="text-slate-600 hover:text-brand-orange font-semibold transition-colors">Fragen</a>
          <button 
            onClick={() => document.getElementById('evaluate')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 active:scale-95"
          >
            Auto verkaufen
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
