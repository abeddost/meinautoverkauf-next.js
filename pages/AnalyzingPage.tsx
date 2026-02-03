import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import Footer from '../components/Footer';
import { getCarValuation } from '../geminiService';
import { CarDetails, ValuationResult } from '../types';

const MATRIX_CHARS = '010110010182736459ABCDEF';

const AnalyzingPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = (location.state as { formData?: CarDetails } | null)?.formData;
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!formData) {
      navigate('/', { replace: true });
      return;
    }
    let cancelled = false;
    getCarValuation(formData)
      .then((result: ValuationResult) => {
        if (!cancelled) {
          navigate('/bewertung-ergebnis', {
            state: { carDetails: formData, valuation: result },
            replace: true,
          });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError('Die Bewertung konnte nicht erstellt werden. Bitte versuchen Sie es später erneut.');
        }
      });
    return () => {
      cancelled = true;
    };
  }, [formData, navigate]);

  if (!formData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MetaTags
        title="Angebot wird erstellt | Meinautoverkauf.de"
        description="Wir berechnen Ihren fairen Ankaufspreis – bitte einen Moment Geduld."
        canonicalUrl="/bewertung-laeuft"
      />
      <header className="flex-shrink-0 border-b border-slate-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
            aria-label="Meinautoverkauf Startseite"
          >
            <img
              src="/logo.png"
              alt="MeinAutoVerkauf.de"
              className="h-20 lg:h-24 w-auto"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-lg">
          {error ? (
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center">
              <p className="text-slate-700 font-medium mb-6">{error}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => navigate('/', { replace: true })}
                  className="px-5 py-2.5 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
                >
                  Zur Startseite
                </button>
                <button
                  type="button"
                  onClick={() => { setError(null); navigate('/', { state: { retry: true } }); }}
                  className="px-5 py-2.5 rounded-xl bg-brand-orange text-white font-semibold hover:bg-orange-600 transition-colors"
                >
                  Erneut versuchen
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#0a0f1d] rounded-[1.5rem] lg:rounded-[2.5rem] p-6 lg:p-12 min-h-[450px] lg:min-h-[580px] flex flex-col items-center justify-center text-white shadow-2xl overflow-hidden relative border border-white/5 animate-in fade-in duration-500">
              {/* Matrix Rain Effect */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none select-none flex justify-around overflow-hidden">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="flex flex-col animate-matrix-drop" style={{ animationDelay: `${Math.random() * 4}s`, animationDuration: `${3 + Math.random() * 4}s` }}>
                    {Array.from({ length: 40 }).map((_, j) => (
                      <span key={j} className="font-mono text-xs leading-none py-1 text-brand-orange">
                        {MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              {/* Pulsing Central Node & Scanning Effect */}
              <div className="relative z-10 mb-8 lg:mb-12 flex items-center justify-center">
                <div className="absolute w-32 h-32 lg:w-40 lg:h-40 rounded-full border border-brand-orange/20 animate-ping opacity-30" />
                <div className="absolute w-48 h-48 lg:w-56 lg:h-56 rounded-full border border-brand-orange/10 animate-pulse opacity-20" />
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#0f172a] border-4 border-slate-800 flex items-center justify-center relative shadow-[0_0_40px_rgba(249,115,22,0.15)]">
                  <div className="absolute inset-2 border-t border-brand-orange animate-scan-line opacity-50 z-20" />
                  <div className="flex flex-col gap-1 items-center">
                    <div className="w-8 lg:w-10 h-1 bg-brand-orange/40 rounded-full" />
                    <div className="w-5 lg:w-6 h-1 bg-brand-orange/60 rounded-full" />
                    <div className="w-10 lg:w-12 h-1 bg-brand-orange rounded-full shadow-[0_0_10px_#f97316]" />
                    <div className="w-6 lg:w-8 h-1 bg-brand-orange/60 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Status Text Area */}
              <div className="text-center z-10 space-y-3 lg:space-y-4 mb-8 lg:mb-10">
                <h3 className="text-xl lg:text-2xl font-black tracking-tight text-white drop-shadow-md uppercase">Berechne Marktwert</h3>
                <div className="flex flex-col items-center gap-1">
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] lg:tracking-[0.4em] animate-pulse">
                    Grounding Markt-Analyse
                  </div>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="w-full max-w-xs lg:max-w-sm space-y-3 lg:space-y-4 z-10">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-[9px] lg:text-[10px] font-black text-slate-500 uppercase tracking-widest">Dauer: ca. 10-20 Sekunden</span>
                  <span className="text-[9px] lg:text-[10px] font-black text-brand-orange">ANALYSE...</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5 p-0.5">
                  <div className="h-full bg-brand-orange rounded-full shadow-[0_0_10px_#f97316] animate-complex-progress transition-all duration-300 ease-out" />
                </div>
                <div className="flex justify-center">
                  <p className="text-[10px] lg:text-[11px] text-slate-400 font-bold uppercase tracking-widest px-6 lg:px-8 py-2 bg-white/5 rounded-lg border border-white/10 text-center leading-relaxed">
                    Bitte haben Sie einen Moment Geduld. <br /> Wir ermitteln einen marktgerechten Preis.
                  </p>
                </div>
              </div>

              <style>{`
                @keyframes matrix-drop {
                  0% { transform: translateY(-100%); opacity: 0; }
                  50% { opacity: 1; }
                  100% { transform: translateY(100%); opacity: 0; }
                }
                @keyframes scan-line {
                  0% { transform: translateY(-15px); opacity: 0; }
                  50% { opacity: 1; }
                  100% { transform: translateY(15px); opacity: 0; }
                }
                @keyframes complex-progress {
                  0% { width: 0%; }
                  15% { width: 10%; }
                  30% { width: 45%; }
                  45% { width: 48%; }
                  60% { width: 75%; }
                  85% { width: 92%; }
                  100% { width: 98%; }
                }
                .animate-matrix-drop { animation-name: matrix-drop; animation-timing-function: linear; animation-iteration-count: infinite; }
                .animate-scan-line { animation-name: scan-line; animation-duration: 1.5s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
                .animate-complex-progress { animation-name: complex-progress; animation-duration: 5.5s; animation-fill-mode: forwards; animation-timing-function: cubic-bezier(0.1, 0, 0.4, 1); }
              `}</style>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnalyzingPage;
