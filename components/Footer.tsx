
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/logo.png"
                alt="MeinAutoVerkauf.de"
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="max-w-md mb-10 leading-relaxed text-lg text-slate-300">
              Wir vereinfachen den Autoverkauf für Privatpersonen.
              Transparent, nachvollziehbar und mit marktgerechten Preisen. Eine der führenden Plattformen in Deutschland.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8">Service</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Jetzt Bewerten</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Wie es funktioniert</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Hausabholung</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Impressum</a></li>
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
              <li><a href="#" className="hover:text-brand-orange transition-colors">Datenschutz</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-xs font-bold text-center tracking-[0.2em] uppercase opacity-40">
          &copy; {new Date().getFullYear()} Meinautoverkauf.de — Echte Preise, echtes Vertrauen.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
