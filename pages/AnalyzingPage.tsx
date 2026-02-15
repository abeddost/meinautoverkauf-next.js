import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import Footer from '../components/Footer';
import { getCarValuation } from '../geminiService';
import { CarDetails, ValuationResult } from '../types';

const MATRIX_CHARS = '0123456789ABCDEF';
const MATRIX_COLUMN_COUNT = 16;
const MATRIX_ROWS_PER_COLUMN = 36;
const PROGRESS_DURATION_SECONDS = 18;
const STATUS_MESSAGES = [
  '✔ Vergleich mit regionalen Marktpreisen',
  '✔ Auswertung ähnlicher Fahrzeuge',
  'Analyse läuft – fast abgeschlossen',
];

const AnalyzingPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = (location.state as { formData?: CarDetails } | null)?.formData;
  const [error, setError] = useState<string | null>(null);
  const [valuationResult, setValuationResult] = useState<ValuationResult | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const progressDurationSeconds = PROGRESS_DURATION_SECONDS;
  const matrixColumns = useMemo(
    () =>
      Array.from({ length: MATRIX_COLUMN_COUNT }).map(() => ({
        delay: `${Math.random() * 3}s`,
        duration: `${6 + Math.random() * 4}s`,
        chars: Array.from({ length: MATRIX_ROWS_PER_COLUMN }).map(
          () => MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
        ),
      })),
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (formData) {
      return;
    }

    const timeout = window.setTimeout(() => {
      navigate('/auto-bewerten', { replace: true });
    }, 1800);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [formData, navigate]);

  useEffect(() => {
    if (!formData) {
      return;
    }

    let cancelled = false;
    getCarValuation(formData)
      .then((result: ValuationResult) => {
        if (!cancelled) {
          setValuationResult(result);
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

  useEffect(() => {
    if (error || !formData) {
      return;
    }

    if (elapsedSeconds >= progressDurationSeconds) {
      return;
    }

    const interval = window.setInterval(() => {
      setElapsedSeconds((prev) => Math.min(prev + 1, progressDurationSeconds));
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [elapsedSeconds, error, formData, progressDurationSeconds]);

  useEffect(() => {
    const progress = elapsedSeconds / progressDurationSeconds;
    if (!formData || !valuationResult || progress < 1) {
      return;
    }

    navigate('/bewertung-ergebnis', {
      state: { carDetails: formData, valuation: valuationResult },
      replace: true,
    });
  }, [elapsedSeconds, formData, navigate, progressDurationSeconds, valuationResult]);

  if (!formData) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <MetaTags
          title="Bewertung starten | Meinautoverkauf.de"
          description="Bitte starten Sie die Fahrzeugbewertung neu."
          canonicalUrl="/bewertung-laeuft"
        />
        <main className="flex-grow flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
            <h1 className="text-2xl font-black text-brand-dark mb-3">Bewertung neu starten</h1>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              Es wurden keine Fahrzeugdaten gefunden. Sie werden automatisch zur Bewertung weitergeleitet.
            </p>
            <button
              type="button"
              onClick={() => navigate('/auto-bewerten', { replace: true })}
              className="px-5 py-2.5 rounded-xl bg-brand-orange text-white font-semibold hover:bg-orange-600 transition-colors"
            >
              Jetzt zur Bewertung
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const progress = elapsedSeconds / progressDurationSeconds;
  const activeStatus = progress >= 0.8
    ? 'Letzte Prüfung…'
    : STATUS_MESSAGES[Math.floor(elapsedSeconds / 4) % STATUS_MESSAGES.length];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MetaTags
        title="Angebot wird erstellt | Meinautoverkauf.de"
        description="Wir berechnen Ihren fairen Ankaufspreis – bitte einen Moment Geduld."
        canonicalUrl="/bewertung-laeuft"
      />
      <header className="hidden sm:block flex-shrink-0 border-b border-slate-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 h-16 lg:h-[72px] flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
            aria-label="Meinautoverkauf Startseite"
          >
            <img
              src="/logo.png"
              alt="MeinAutoVerkauf.de"
              className="h-20 lg:h-20 w-auto"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-8 lg:py-5 px-4">
        <div className="w-full max-w-3xl lg:max-w-2xl">
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
            <div className="bg-gradient-to-br from-[#081224] via-[#091a34] to-[#060f21] rounded-[1.5rem] lg:rounded-[1.75rem] p-6 sm:p-8 lg:p-6 min-h-[520px] lg:min-h-[470px] flex flex-col items-center justify-center text-white shadow-2xl overflow-hidden relative border border-[#253a67]/55 transition-opacity duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(249,115,22,0.15),rgba(8,14,24,0)_42%)] pointer-events-none" />

              {/* Matrix Rain Effect */}
              <div className="absolute inset-0 opacity-[0.1] pointer-events-none select-none flex justify-around overflow-hidden">
                {matrixColumns.map((column, i) => (
                  <div key={i} className="flex flex-col animate-matrix-drop" style={{ animationDelay: column.delay, animationDuration: column.duration }}>
                    {column.chars.map((char, j) => (
                      <span key={j} className="font-mono text-xs leading-none py-1 text-[#f97316]">
                        {char}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              {/* Central Pulse Indicator */}
              <div className="relative z-10 mb-7 lg:mb-6 flex items-center justify-center">
                <div className="absolute w-44 h-44 lg:w-48 lg:h-48 rounded-full border border-[#2d4a78]/50" />
                <div className="absolute w-64 h-64 lg:w-[16.5rem] lg:h-[16.5rem] rounded-full border border-[#2d4a78]/25" />
                <div className="relative w-24 h-24 lg:w-24 lg:h-24 rounded-full bg-[#0d1f3a] border border-[#30568c]/65 flex items-center justify-center animate-core-pulse shadow-[0_0_22px_rgba(249,115,22,0.2)]">
                  <div className="absolute left-5 right-5 top-1/2 h-px bg-[#f97316]/30" />
                  <div className="w-12 lg:w-12 h-1.5 rounded-full bg-gradient-to-r from-[#fb923c] to-[#f97316] shadow-[0_0_12px_rgba(249,115,22,0.55)]" />
                </div>
              </div>

              {/* Status Text Area */}
              <div className="text-center z-10 space-y-3 lg:space-y-3 mb-7 lg:mb-6 max-w-3xl lg:max-w-2xl transition-opacity duration-500">
                <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-black tracking-tight text-[#f3f7ff] leading-tight">
                  Wir ermitteln einen fairen Marktpreis für Ihr Auto
                </h3>
                <p className="text-sm sm:text-base lg:text-base text-[#c8d7f0] font-semibold leading-relaxed">
                  Danke für Ihre Geduld.
                  <br />
                  Wir vergleichen Ihr Fahrzeug mit aktuellen Marktdaten aus Ihrer Region.
                </p>
                <p className="text-xs sm:text-sm lg:text-sm font-semibold text-[#96add5]">
                  Ihre Angaben → Marktvergleich → Marktpreis
                </p>
                <p key={activeStatus} className="text-sm sm:text-base lg:text-base font-bold text-[#f97316] animate-status-fade">
                  {activeStatus}
                </p>
              </div>

              {/* Progress Tracker */}
              <div className="w-full max-w-2xl lg:max-w-xl z-10 space-y-3">
                <div className="h-2.5 w-full bg-[#08172f] rounded-full overflow-hidden border border-[#2d4877]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#fb923c] to-[#f97316] shadow-[0_0_14px_rgba(249,115,22,0.45)] transition-[width] duration-700 ease-in-out"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <p className="text-[11px] lg:text-xs text-[#94aad0] text-center">⏱️ Noch ca. 10–20 Sekunden</p>
              </div>

              <div className="mt-4 z-10 bg-[#162847]/78 border border-[#355482]/65 rounded-2xl px-5 py-4 lg:px-6 lg:py-4 text-center backdrop-blur-sm shadow-[0_12px_40px_rgba(4,8,16,0.35)]">
                <p className="text-white text-base sm:text-lg lg:text-lg font-black mb-1">Fast geschafft.</p>
                <p className="text-[#d8e4f5] text-sm sm:text-base lg:text-base font-bold mb-1">Ihr Ergebnis erscheint automatisch.</p>
                <p className="text-[#b6c7dd] text-sm sm:text-base lg:text-base font-semibold">Kostenlos und unverbindlich.</p>
              </div>

              <style>{`
                @keyframes matrix-drop {
                  0% { transform: translateY(-105%); opacity: 0; }
                  20% { opacity: 1; }
                  100% { transform: translateY(105%); opacity: 0; }
                }

                @keyframes core-pulse {
                  0%, 100% {
                    transform: scale(1);
                    box-shadow: 0 0 20px rgba(249, 115, 22, 0.14);
                  }
                  50% {
                    transform: scale(1.03);
                    box-shadow: 0 0 30px rgba(249, 115, 22, 0.24);
                  }
                }

                @keyframes status-fade {
                  0% {
                    opacity: 0;
                    transform: translateY(4px);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                .animate-matrix-drop { animation-name: matrix-drop; animation-timing-function: linear; animation-iteration-count: infinite; }
                .animate-core-pulse { animation: core-pulse 2s ease-in-out infinite; }
                .animate-status-fade { animation: status-fade 450ms ease-out; }
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
