type GtagPrimitive = string | number | boolean;
type GtagParams = Record<string, GtagPrimitive | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackGoogleEvent = (eventName: string, params: GtagParams = {}): void => {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
};

export const toSafeEventValue = (value: string | undefined): string | undefined => {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.toLowerCase().replace(/\s+/g, '_').slice(0, 100);
};

