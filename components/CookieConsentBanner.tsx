import React from 'react';

interface CookieConsentBannerProps {
  isVisible: boolean;
  onAccept: () => void;
  onReject: () => void;
  onOpenSettings: () => void;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  isVisible,
  onAccept,
  onReject,
  onOpenSettings,
}) => {
  if (!isVisible) return null;

  return (
    <section
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-[90] px-3 pb-3 sm:px-4 sm:pb-4"
    >
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-[0_16px_50px_-18px_rgba(15,23,42,0.45)] backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-orange">Datenschutz</p>
            <h2 className="mt-1 text-base font-black text-slate-900 sm:text-lg">
              Ihre Privatsphäre zählt
            </h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
              Wir nutzen optionale Analytics nur mit Ihrer Einwilligung, um unseren Service verständlicher und
              benutzerfreundlicher zu machen. Sie können jederzeit über <span className="font-bold">Cookie-Einstellungen</span> ändern.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
            <button
              type="button"
              onClick={onReject}
              className="min-h-[44px] rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              Alle ablehnen
            </button>
            <button
              type="button"
              onClick={onAccept}
              className="min-h-[44px] rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              Analytics akzeptieren
            </button>
            <button
              type="button"
              onClick={onOpenSettings}
              className="min-h-[44px] rounded-xl bg-brand-orange px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              Einstellungen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookieConsentBanner;
