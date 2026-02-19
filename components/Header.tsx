
import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

interface HeaderProps {
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onLogoClick();
    setIsMenuOpen(false);

    // Preserve expected browser behavior for modified clicks (new tab/window).
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    window.sessionStorage.setItem('force_home_scroll_top', '1');
    window.location.assign('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/auto-bewerten", label: "Bewertung" },
    { to: "/auto-verkaufen", label: "Verkaufen" },
    { to: "/vorteile", label: "Vorteile" },
    { to: "/ratgeber", label: "Ratgeber" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white border-b border-slate-200 shadow-sm' : 'bg-transparent border-b border-white/40 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
        <Link 
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
          aria-label="Meinautoverkauf Startseite"
        >
          <img
            src="/logo-430w.webp"
            srcSet="/logo-430w.webp 430w, /logo-860w.webp 860w"
            sizes="(max-width: 1024px) 200px, 240px"
            alt="MeinAutoVerkauf.de"
            className="h-20 lg:h-24 w-auto"
            width={430}
            height={140}
            loading="eager"
            decoding="async"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center gap-1.5 group w-11 h-11 min-w-[44px] min-h-[44px] transition-all"
          aria-expanded={isMenuOpen}
          aria-label="Menü umschalten"
        >
          <div className={`w-6 h-0.5 bg-slate-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-slate-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink 
              key={link.to}
              to={link.to} 
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors ${isActive ? 'text-brand-orange' : 'text-slate-700 hover:text-brand-orange'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link 
            to="/"
            onClick={() => {
              onLogoClick();
              setTimeout(() => {
                document.getElementById('bewerten')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-brand-orange text-white px-6 py-3 sm:py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95 min-h-[44px] sm:min-h-0 flex items-center justify-center"
          >
            Auto verkaufen
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <div 
        className={`md:hidden absolute left-0 right-0 bg-white border-t border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] border-b border-slate-200 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <NavLink 
              key={link.to}
              to={link.to} 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `text-left font-semibold text-base border-b border-slate-200 pb-2 ${isActive ? 'text-brand-orange' : 'text-slate-700'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link 
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
              onLogoClick();
              setTimeout(() => {
                document.getElementById('bewerten')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-brand-orange text-white w-full py-3 rounded-xl text-base font-bold text-center shadow-lg active:scale-95 transition-transform mt-2"
          >
            JETZT BEWERTEN
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
