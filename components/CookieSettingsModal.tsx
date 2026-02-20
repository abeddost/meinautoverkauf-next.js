import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface CookieSettingsModalProps {
  isOpen: boolean;
  initialAnalytics: boolean;
  onClose: () => void;
  onRejectAll: () => void;
  onSave: (analyticsEnabled: boolean) => void;
}

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const CookieSettingsModal: React.FC<CookieSettingsModalProps> = ({
  isOpen,
  initialAnalytics,
  onClose,
  onRejectAll,
  onSave,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(initialAnalytics);

  useEffect(() => {
    if (!isOpen) return;
    setAnalyticsEnabled(initialAnalytics);
  }, [isOpen, initialAnalytics]);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusables = containerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? null;
    focusables?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !focusables || focusables.length === 0) {
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/60 p-3 backdrop-blur-sm sm:items-center sm:p-4">
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Cookie-Einstellungen"
        className="w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl"
      >
        {/* Orange accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-brand-orange via-orange-400 to-orange-300" />

        {/* Header */}
        <div className="px-5 py-5 sm:px-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-brand-orange">
              {/* Shield icon */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V13H5V8.65l7-3.89v8.23z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-orange">
                Cookie-Einstellungen
              </p>
              <h2 className="mt-0.5 text-xl font-black text-slate-900">
                Datenschutz nach Ihrer Wahl
              </h2>
              <p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-600">
                Notwendige Speicherungen sind für den Betrieb erforderlich. Analytics helfen uns, Inhalte und
                Bedienung zu verbessern.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Cookie categories */}
        <div className="space-y-3 px-5 py-5 sm:px-6">

          {/* Necessary cookies */}
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-slate-600">
              {/* Lock icon */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-black text-slate-900">Notwendig</h3>
                <span className="shrink-0 rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-bold text-slate-600">
                  Immer aktiv
                </span>
              </div>
              <p className="mt-1 text-sm font-medium leading-relaxed text-slate-600">
                Erforderlich für Grundfunktionen, Sicherheit und Speicherung Ihrer Datenschutzeinstellungen.
              </p>
            </div>
          </div>

          {/* Analytics cookies */}
          <div className={`flex items-start gap-3 rounded-2xl border p-4 transition-colors ${
            analyticsEnabled ? 'border-orange-200 bg-orange-50/50' : 'border-slate-200 bg-white'
          }`}>
            <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
              analyticsEnabled ? 'bg-orange-100 text-brand-orange' : 'bg-slate-100 text-slate-500'
            }`}>
              {/* Chart/analytics icon */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <label htmlFor="analytics-consent" className="cursor-pointer text-sm font-black text-slate-900">
                  Analytics (Google Analytics 4)
                </label>
                {/* Toggle switch */}
                <button
                  id="analytics-consent"
                  type="button"
                  role="switch"
                  aria-checked={analyticsEnabled}
                  onClick={() => setAnalyticsEnabled((prev) => !prev)}
                  className={`relative mt-0.5 inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 ${
                    analyticsEnabled
                      ? 'border-brand-orange bg-brand-orange'
                      : 'border-slate-300 bg-slate-200'
                  }`}
                >
                  <span className="sr-only">Analytics aktivieren</span>
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
                      analyticsEnabled ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
              <p className="mt-1 text-sm font-medium leading-relaxed text-slate-600">
                Hilft uns zu verstehen, welche Inhalte genutzt werden, damit wir die Website benutzerfreundlich
                weiterentwickeln können.
              </p>
            </div>
          </div>

          {/* Datenschutz link */}
          <div className="pt-1">
            <Link
              to="/datenschutz"
              className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
              Datenschutzerklärung lesen
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Footer buttons */}
        <div className="flex flex-col-reverse gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] rounded-xl px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          >
            Schließen
          </button>
          <div className="flex flex-col-reverse gap-2 sm:flex-row">
            <button
              type="button"
              onClick={onRejectAll}
              className="min-h-[44px] rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              Alle ablehnen
            </button>
            <button
              type="button"
              onClick={() => onSave(analyticsEnabled)}
              className="min-h-[44px] rounded-full bg-brand-orange px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-200/60 transition hover:brightness-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            >
              Auswahl speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsModal;
