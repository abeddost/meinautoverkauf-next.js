import { getConsentState, type ConsentState } from './consent';

type GtagPrimitive = string | number | boolean;
type GtagParams = Record<string, GtagPrimitive | undefined>;
type ConsentModeValue = 'granted' | 'denied';

const GTM_CONTAINER_ID = 'GTM-W4MPTL8K';
const GTM_SCRIPT_SELECTOR = `script[data-gtm-id="${GTM_CONTAINER_ID}"]`;
const GA_COOKIE_PREFIX = '_ga';
const EVENT_DEDUPE_STORAGE_KEY = 'mav_analytics_sent_events_v1';
const EVENT_DEDUPE_TTL_MS = 1000 * 60 * 60 * 6;
const EVENT_DEDUPE_MAX_ENTRIES = 200;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    google_tag_manager?: Record<string, unknown>;
  }
}

let analyticsGranted = false;
let gtmScriptPromise: Promise<void> | null = null;
let dedupeRegistryLoaded = false;
const dedupeRegistry = new Map<string, number>();

type ValuationEventName =
  | 'ai_valuation_form_submitted'
  | 'ai_valuation_form_success'
  | 'ai_valuation_form_success_client'
  | 'ai_valuation_form_failed';

interface ValuationAnalyticsContext {
  requestId: string;
  brand?: string;
  fuelType?: string;
  condition?: string;
  hasImages?: boolean;
  pagePath?: string;
  source?: 'client' | 'server';
  estimatedPrice?: number;
  marketTrend?: string;
}

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

const loadGtmScriptOnce = async (): Promise<void> => {
  if (typeof window === 'undefined') return;
  if (gtmScriptPromise) return gtmScriptPromise;

  const existingScript = document.querySelector<HTMLScriptElement>(GTM_SCRIPT_SELECTOR);
  if (existingScript) {
    gtmScriptPromise = Promise.resolve();
    return gtmScriptPromise;
  }

  gtmScriptPromise = new Promise<void>((resolve, reject) => {
    window.dataLayer?.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`;
    script.dataset.gtmId = GTM_CONTAINER_ID;
    script.onload = () => resolve();
    script.onerror = () => {
      gtmScriptPromise = null;
      reject(new Error('Failed to load Google Tag Manager script.'));
    };

    document.head.appendChild(script);
  });

  return gtmScriptPromise;
};

export const createAnalyticsEventId = (eventName: string, requestId: string): string => {
  return `${eventName}_${requestId}`.slice(0, 100);
};

export const buildValuationEventParams = (
  eventName: ValuationEventName,
  context: ValuationAnalyticsContext,
): GtagParams => {
  return {
    event_id: createAnalyticsEventId(eventName, context.requestId),
    request_id: context.requestId,
    car_brand: toSafeEventValue(context.brand),
    fuel_type: toSafeEventValue(context.fuelType),
    condition: toSafeEventValue(context.condition),
    has_images: context.hasImages,
    page_path: context.pagePath,
    source: context.source,
    estimated_price: context.estimatedPrice,
    market_trend: toSafeEventValue(context.marketTrend),
  };
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
    ad_storage: 'granted' satisfies ConsentModeValue,
    ad_user_data: 'granted' satisfies ConsentModeValue,
    ad_personalization: 'denied' satisfies ConsentModeValue,
  });

  try {
    await loadGtmScriptOnce();
  } catch {
    return;
  }
};

const hasGrantedAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  const consentState = getConsentState();
  return consentState.choice === 'accepted' && consentState.analytics;
};

const hasTrackingConsent = (): boolean => {
  return analyticsGranted || hasGrantedAnalyticsConsent();
};

const loadDedupeRegistry = (): void => {
  if (dedupeRegistryLoaded) return;
  dedupeRegistryLoaded = true;
  if (typeof window === 'undefined') return;

  try {
    const raw = window.sessionStorage.getItem(EVENT_DEDUPE_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') return;
    const now = Date.now();
    for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
      if (typeof value !== 'number' || !Number.isFinite(value)) continue;
      if (now - value > EVENT_DEDUPE_TTL_MS) continue;
      dedupeRegistry.set(key, value);
    }
  } catch {
    // Ignore session-storage read/parse issues.
  }
};

const persistDedupeRegistry = (): void => {
  if (typeof window === 'undefined') return;
  try {
    const payload = Object.fromEntries(dedupeRegistry.entries());
    window.sessionStorage.setItem(EVENT_DEDUPE_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore session-storage write issues.
  }
};

const pruneDedupeRegistry = (): void => {
  const now = Date.now();
  for (const [key, timestamp] of dedupeRegistry.entries()) {
    if (now - timestamp > EVENT_DEDUPE_TTL_MS) {
      dedupeRegistry.delete(key);
    }
  }

  if (dedupeRegistry.size <= EVENT_DEDUPE_MAX_ENTRIES) return;
  const sortedByAge = [...dedupeRegistry.entries()].sort((a, b) => a[1] - b[1]);
  const overflow = dedupeRegistry.size - EVENT_DEDUPE_MAX_ENTRIES;
  for (let index = 0; index < overflow; index += 1) {
    const key = sortedByAge[index]?.[0];
    if (key) dedupeRegistry.delete(key);
  }
};

const getRequestIdFromParams = (params: Record<string, GtagPrimitive>): string | null => {
  const rawRequestId = params.request_id;
  if (rawRequestId === undefined) return null;
  const normalized = String(rawRequestId).trim();
  return normalized ? normalized : null;
};

const isDuplicateDispatch = (eventName: string, params: Record<string, GtagPrimitive>): boolean => {
  const requestId = getRequestIdFromParams(params);
  if (!requestId) return false;

  loadDedupeRegistry();
  pruneDedupeRegistry();

  const dedupeKey = `${eventName}:${requestId}`;
  if (dedupeRegistry.has(dedupeKey)) return true;

  dedupeRegistry.set(dedupeKey, Date.now());
  persistDedupeRegistry();
  return false;
};

const normalizeEventParams = (params: GtagParams): Record<string, GtagPrimitive> => {
  const cleanParams: Record<string, GtagPrimitive> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    cleanParams[key] = value;
  }
  return cleanParams;
};

export const trackGoogleEvent = (eventName: string, params: GtagParams = {}): void => {
  if (typeof window === 'undefined') return;
  if (!hasTrackingConsent()) return;
  if (!analyticsGranted) analyticsGranted = true;
  ensureGtagBootstrap();

  const cleanParams = normalizeEventParams(params);
  if (isDuplicateDispatch(eventName, cleanParams)) return;

  if (typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, cleanParams);
};

export const toSafeEventValue = (value: string | undefined): string | undefined => {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.toLowerCase().replace(/\s+/g, '_').slice(0, 100);
};
