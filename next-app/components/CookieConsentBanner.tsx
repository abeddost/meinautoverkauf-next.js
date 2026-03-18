'use client';

import React from 'react';
import Link from 'next/link';

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
    <div
      aria-label="Cookie-Hinweis"
      className="fixed inset-0 z-[90] flex items-end justify-center bg-slate-900/50 p-3 backdrop-blur-[2px] sm:items-center sm:p-6"
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl">
        <div className="h-1 w-full bg-gradient-to-r from-brand-orange via-orange-400 to-orange-300" />

        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-brand-orange">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm-3-3a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm7-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-orange">Datenschutz</p>
              <h2 className="mt-0.5 text-lg font-black text-slate-900">Ihre Privatsphäre zählt</h2>
            </div>
          </div>

          <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">
            Wir nutzen optionale Analytics sowie Google Ads Conversion- und Ereignis-Tracking nur mit Ihrer
            Einwilligung, um unseren Service zu verbessern. Sie können Ihre Wahl jederzeit ändern.{' '}
            <Link
              href="/datenschutz"
              className="font-bold text-brand-orange underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Datenschutzerklärung lesen
            </Link>
          </p>

          <div className="my-5 h-px bg-slate-100" />

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={onReject}
              className="min-h-[44px] rounded-xl px-4 py-2.5 text-sm font-bold text-slate-500 transition hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              Alle ablehnen
            </button>
            <button
              type="button"
              onClick={onOpenSettings}
              className="min-h-[44px] rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              Einstellungen
            </button>
            <button
              type="button"
              onClick={onAccept}
              className="min-h-[44px] rounded-full bg-brand-orange px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-200/60 transition hover:brightness-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            >
              Analytics & Ads akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
