
import React from 'react';

interface HeaderProps {
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="bg-brand-dark border-b border-white/5 sticky top-0 z-50 shadow-sm py-4 lg:py-0">
      <div className="container mx-auto px-4 h-14 lg:h-20 flex items-center justify-between">
        <button 
          onClick={onLogoClick} 
          className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
          aria-label="Meinautoverkauf Startseite"
        >
          <div className="flex items-center">
            <svg width="35" height="35" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[45px] lg:h-[45px]">
              <rect width="100" height="100" rx="12" fill="#1e293b"/>
              <path d="M20 65L35 45H65L80 65V75H20V65Z" fill="#f97316"/>
              <circle cx="35" cy="75" r="8" fill="white"/>
              <circle cx="65" cy="75" r="8" fill="white"/>
              <path d="M40 35L50 25L60 35H40Z" fill="#f97316"/>
            </svg>
            <div className="ml-2 text-left">
              <div className="text-lg lg:text-xl font-extrabold text-white leading-none uppercase tracking-tighter">
                MeinAuto<span className="text-brand-orange">verkauf</span>.de
              </div>
            </div>
          </div>
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col items-center justify-center gap-1 group">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <span className="text-[10px] text-white font-bold uppercase mt-0.5">Menü</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#evaluate" className="text-slate-300 hover:text-brand-orange font-semibold transition-colors">Bewertung</a>
          <a href="#trust" className="text-slate-300 hover:text-brand-orange font-semibold transition-colors">Vorteile</a>
          <button 
            onClick={() => document.getElementById('evaluate')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95"
          >
            Auto verkaufen
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
