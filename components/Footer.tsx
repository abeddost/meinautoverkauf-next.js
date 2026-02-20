
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
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0b1328] via-[#0f172a] to-[#0b1328] text-slate-300">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Link to="/" aria-label="Zur Startseite" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img
                  src="/logo-white.webp"
                  alt="MeinAutoVerkauf.de"
                  className="h-12 w-auto"
                  width={1260}
                  height={410}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="sr-only">Zur Startseite</span>
              </Link>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              Wir vereinfachen den Autoverkauf für Privatpersonen – transparent, nachvollziehbar und mit marktgerechten Preisen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
              <span>KI-Analyse</span>
              <span>Faire Preise</span>
              <span>Schnelle Auszahlung</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">Service</h3>
            <ul className="space-y-3 text-sm font-bold">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 transition-all hover:text-brand-orange hover:translate-x-1"
                  >
                    <span className="text-brand-orange">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">Standorte</h3>
            <ul className="space-y-3 text-sm font-bold">
              {locationLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 transition-all hover:text-brand-orange hover:translate-x-1"
                  >
                    <span className="text-brand-orange">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="text-xs text-slate-400 font-semibold">+ viele weitere Orte in Deutschland</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase text-sm tracking-widest mb-5">Kontakt & Rechtliches</h3>
            <div className="space-y-4 text-sm font-bold">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-brand-orange">☎</div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-400">Kostenlose Hotline</div>
                    <a href="tel:+4917662878366" className="text-base font-black text-white hover:text-brand-orange transition-colors">
                      0176 62878366
                    </a>
                  </div>
                </div>
                <div className="mt-3 text-xs text-slate-400">
                  Alternativ per E-Mail: <a href="mailto:info@meinautoverkauf.de" className="text-slate-200 hover:text-brand-orange">info@meinautoverkauf.de</a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link to="/impressum" className="hover:text-brand-orange transition-colors">Impressum</Link>
                <Link to="/datenschutz" className="hover:text-brand-orange transition-colors">Datenschutz</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-xs font-bold text-center tracking-[0.3em] uppercase text-slate-500">
          &copy; {currentYear} Meinautoverkauf.de — Echte Preise, echtes Vertrauen.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
