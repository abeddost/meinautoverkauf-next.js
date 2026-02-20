import type { ConsentState } from './consent';

type GtagPrimitive = string | number | boolean;
type GtagParams = Record<string, GtagPrimitive | undefined>;
type ConsentModeValue = 'granted' | 'denied';

const GA_MEASUREMENT_ID = 'G-GX8B3LF4KZ';
const GA_SCRIPT_SELECTOR = `script[data-ga4-id="${GA_MEASUREMENT_ID}"]`;
const GA_COOKIE_PREFIX = '_ga';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let analyticsGranted = false;
let gaScriptPromise: Promise<void> | null = null;
let gaConfigured = false;

const getRootDomain = (hostname: string): string | null => {
  const normalized = hostname.trim().toLowerCase();
  if (!normalized || normalized === 'localhost' || normalized.includes(':')) return null;
  const parts = normalized.split('.').filter(Boolean);
  if (parts.length < 2) return null;
  return parts.slice(-2).join('.');
};

const clearCookie = (name: string, domain?: string): void => {
  const domainPart = domain ? `;domain=${domain}` : '';
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/${domainPart};SameSite=Lax`;
};

const clearGaCookies = (): void => {
  if (typeof document === 'undefined') return;
  const host = window.location.hostname;
  const rootDomain = getRootDomain(host);
  const domains = [undefined, host, `.${host}`, rootDomain ? `.${rootDomain}` : undefined].filter(Boolean) as string[];
  const seen = new Set<string>();
  const gaCookieNames = document.cookie
    .split(';')
    .map((entry) => entry.trim().split('=')[0])
    .filter((name) => name === GA_COOKIE_PREFIX || name.startsWith(`${GA_COOKIE_PREFIX}_`));

  for (const name of gaCookieNames) {
    if (seen.has(name)) continue;
    seen.add(name);
    clearCookie(name);
    for (const domain of domains) clearCookie(name, domain);
  }
};

const ensureGtagBootstrap = (): void => {
  if (typeof window === 'undefined') return;
  if (!Array.isArray(window.dataLayer)) {
    window.dataLayer = [];
  }
  if (typeof window.gtag !== 'function') {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }
};

const loadGaScript = async (): Promise<void> => {
  if (typeof window === 'undefined') return;
  if (gaScriptPromise) return gaScriptPromise;

  const existingScript = document.querySelector<HTMLScriptElement>(GA_SCRIPT_SELECTOR);
  if (existingScript) {
    gaScriptPromise = Promise.resolve();
    return gaScriptPromise;
  }

  gaScriptPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.dataset.ga4Id = GA_MEASUREMENT_ID;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Analytics script.'));
    document.head.appendChild(script);
  });

  return gaScriptPromise;
};

export const applyConsentDefaults = (): void => {
  if (typeof window === 'undefined') return;
  ensureGtagBootstrap();
  window.gtag?.('consent', 'default', {
    analytics_storage: 'denied' satisfies ConsentModeValue,
    ad_storage: 'denied' satisfies ConsentModeValue,
    ad_user_data: 'denied' satisfies ConsentModeValue,
    ad_personalization: 'denied' satisfies ConsentModeValue,
  });
};

export const applyConsentUpdate = async (consentState: ConsentState): Promise<void> => {
  if (typeof window === 'undefined') return;

  ensureGtagBootstrap();
  analyticsGranted = consentState.choice === 'accepted' && consentState.analytics;

  if (!analyticsGranted) {
    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied' satisfies ConsentModeValue,
      ad_storage: 'denied' satisfies ConsentModeValue,
      ad_user_data: 'denied' satisfies ConsentModeValue,
      ad_personalization: 'denied' satisfies ConsentModeValue,
    });
    clearGaCookies();
    return;
  }

  window.gtag?.('consent', 'update', {
    analytics_storage: 'granted' satisfies ConsentModeValue,
    ad_storage: 'denied' satisfies ConsentModeValue,
    ad_user_data: 'denied' satisfies ConsentModeValue,
    ad_personalization: 'denied' satisfies ConsentModeValue,
  });

  try {
    await loadGaScript();
  } catch {
    return;
  }

  if (!gaConfigured) {
    window.gtag?.('config', GA_MEASUREMENT_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    gaConfigured = true;
  }
};

export const trackGoogleEvent = (eventName: string, params: GtagParams = {}): void => {
  if (typeof window === 'undefined') return;
  if (!analyticsGranted) return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
};

export const toSafeEventValue = (value: string | undefined): string | undefined => {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.toLowerCase().replace(/\s+/g, '_').slice(0, 100);
};
