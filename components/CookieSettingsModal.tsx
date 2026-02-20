import React, { useEffect, useRef, useState } from 'react';

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
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/55 p-3 sm:items-center sm:p-4">
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Cookie-Einstellungen"
        className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white shadow-2xl"
      >
        <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-orange">Cookie-Einstellungen</p>
          <h2 className="mt-1 text-xl font-black text-slate-900">Datenschutz nach Ihrer Wahl</h2>
          <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
            Notwendige Speicherungen sind für den Betrieb erforderlich. Analytics helfen uns, Inhalte und Bedienung zu verbessern.
          </p>
        </div>

        <div className="space-y-4 px-5 py-5 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-black text-slate-900">Notwendig</h3>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  Erforderlich für Grundfunktionen, Sicherheit und Speicherung Ihrer Datenschutzeinstellungen.
                </p>
              </div>
              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-700">Immer aktiv</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <label htmlFor="analytics-consent" className="text-sm font-black text-slate-900">
                  Analytics (Google Analytics 4)
                </label>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  Hilft uns zu verstehen, welche Inhalte genutzt werden, damit wir die Website benutzerfreundlich weiterentwickeln können.
                </p>
              </div>
              <button
                id="analytics-consent"
                type="button"
                role="switch"
                aria-checked={analyticsEnabled}
                onClick={() => setAnalyticsEnabled((prev) => !prev)}
                className={`relative mt-0.5 inline-flex h-8 w-14 items-center rounded-full border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
                  analyticsEnabled ? 'border-brand-orange bg-orange-500' : 'border-slate-300 bg-slate-200'
                }`}
              >
                <span className="sr-only">Analytics aktivieren</span>
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition ${
                    analyticsEnabled ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-2 border-t border-slate-200 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          >
            Schließen
          </button>
          <button
            type="button"
            onClick={onRejectAll}
            className="min-h-[44px] rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          >
            Alle ablehnen
          </button>
          <button
            type="button"
            onClick={() => onSave(analyticsEnabled)}
            className="min-h-[44px] rounded-xl bg-brand-orange px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          >
            Auswahl speichern
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsModal;
