'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Mirrors the Vite App.tsx behaviour: navigate to home then scroll to #bewerten.
  // Using a callback + setTimeout ensures the element exists in the DOM before we scroll.
  const handleBewertenClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsMenuOpen(false);
      const scrollToBewerten = () => {
        const el = document.getElementById('bewerten');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      if (pathname === '/') {
        scrollToBewerten();
      } else {
        router.push('/');
        setTimeout(scrollToBewerten, 150);
      }
    },
    [pathname, router],
  );

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMenuOpen(false);
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    window.sessionStorage.setItem('force_home_scroll_top', '1');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/auto-bewerten', label: 'Bewertung' },
    { href: '/auto-verkaufen', label: 'Verkaufen' },
    { href: '/vorteile', label: 'Vorteile' },
    { href: '/ratgeber', label: 'Ratgeber' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-white border-b border-slate-200 shadow-sm'
          : 'bg-transparent border-b border-white/40 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
          aria-label="Meinautoverkauf Startseite"
        >
          <img
            src="/logo.webp"
            srcSet="/logo-295.webp 295w, /logo.webp 700w"
            sizes="(max-width: 1023px) 220px, 295px"
            alt="MeinAutoVerkauf.de"
            className="h-20 lg:h-24 w-auto"
            width={1260}
            height={410}
            loading="eager"
            decoding="async"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="sr-only">Zur Startseite</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center gap-1.5 group w-11 h-11 min-w-[44px] min-h-[44px] transition-all"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Menü umschalten"
        >
          <div className={`w-6 h-0.5 bg-slate-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-slate-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <div className={`w-6 h-0.5 bg-slate-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                isActive(link.href) ? 'text-brand-orange' : 'text-slate-700 hover:text-brand-orange'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleBewertenClick}
            className="bg-brand-orange text-white px-6 py-3 sm:py-2.5 rounded-full text-sm font-bold hover:brightness-105 transition-all shadow-lg active:scale-95 min-h-[44px] sm:min-h-0 flex items-center justify-center"
          >
            Auto verkaufen
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        id="mobile-nav"
        className={`md:hidden absolute left-0 right-0 bg-white border-t border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] border-b border-slate-200 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-left font-semibold text-base border-b border-slate-200 pb-2 ${
                isActive(link.href) ? 'text-brand-orange' : 'text-slate-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleBewertenClick}
            className="bg-brand-orange text-slate-900 w-full py-3 rounded-xl text-base font-bold text-center shadow-lg hover:brightness-105 active:scale-95 transition-transform mt-2"
          >
            JETZT BEWERTEN
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
