
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <svg width="35" height="35" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="12" fill="#1e293b"/>
                <path d="M20 65L35 45H65L80 65V75H20V65Z" fill="#f97316"/>
              </svg>
              <span className="text-white text-2xl font-black uppercase tracking-tighter">
                MeinAutoPreis<span className="text-brand-orange">24</span>
              </span>
            </div>
            <p className="max-w-md mb-10 leading-relaxed text-lg">
              Wir revolutionieren den Autoverkauf für Privatpersonen. 
              Ehrlich, emotional und immer zum besten Preis. Vertrauen Sie dem Marktführer.
            </p>
            <div className="flex gap-6">
              {['facebook', 'instagram', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-orange transition-all hover:scale-110">
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 bg-slate-400 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8">Service</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Jetzt Bewerten</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Wie es funktioniert</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Hausabholung</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Standort-Suche</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8">Kontakt</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-orange">☎</div>
                 0800 24 24 24
              </li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Hilfe-Center</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Datenschutz</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-xs font-bold text-center tracking-[0.2em] uppercase opacity-40">
          &copy; {new Date().getFullYear()} MeinAutoPreis24.de — Echte Preise, echtes Vertrauen.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
