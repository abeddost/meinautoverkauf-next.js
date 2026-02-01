
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { to: "/auto-bewerten", label: "Auto bewerten" },
    { to: "/auto-verkaufen", label: "Auto verkaufen" },
    { to: "/vorteile", label: "Ihre Vorteile" },
    { to: "/ratgeber", label: "Verkaufs-Ratgeber" },
  ];

  const locationLinks = [
    { to: "/autoankauf-frankfurt", label: "Autoankauf Frankfurt" },
    { to: "/autoankauf-wiesbaden", label: "Autoankauf Wiesbaden" },
    { to: "/autoankauf-mainz", label: "Autoankauf Mainz" },
  ];

  return (
    <footer className="bg-brand-dark text-slate-400 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/logo-white.png"
                alt="MeinAutoVerkauf.de"
                className="h-14 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="max-w-md mb-10 leading-relaxed text-sm text-slate-300">
              Wir vereinfachen den Autoverkauf für Privatpersonen.
              Transparent, nachvollziehbar und mit marktgerechten Preisen.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8">Service</h4>
            <ul className="space-y-4 text-sm font-bold">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-brand-orange transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8">Standorte</h4>
            <ul className="space-y-4 text-sm font-bold">
              {locationLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-brand-orange transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-8">Kontakt & Rechtliches</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-center gap-3 text-slate-300">
                 <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-orange">☎</div>
                 0800 24 24 24
              </li>
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Impressum</Link></li>
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-xs font-bold text-center tracking-[0.2em] uppercase opacity-40">
          &copy; {currentYear} Meinautoverkauf.de — Echte Preise, echtes Vertrauen.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
