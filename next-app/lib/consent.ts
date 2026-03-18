export type ConsentChoice = 'unknown' | 'accepted' | 'rejected';
export type ConsentSource = 'banner' | 'settings';

export interface ConsentState {
  version: 'v1';
  choice: ConsentChoice;
  analytics: boolean;
  updatedAt: string;
  source: ConsentSource;
}

const CONSENT_VERSION: ConsentState['version'] = 'v1';
const CONSENT_STORAGE_KEY = `mav_cookie_consent_${CONSENT_VERSION}`;
const CONSENT_CHANGE_EVENT = 'mav:consent-change';
export const COOKIE_SETTINGS_OPEN_EVENT = 'mav:open-cookie-settings';

const DEFAULT_CONSENT_STATE: ConsentState = {
  version: CONSENT_VERSION,
  choice: 'unknown',
  analytics: false,
  updatedAt: '',
  source: 'banner',
};

const isConsentState = (value: unknown): value is ConsentState => {
  if (!value || typeof value !== 'object') return false;
  const state = value as Partial<ConsentState>;
  return (
    state.version === CONSENT_VERSION &&
    (state.choice === 'unknown' || state.choice === 'accepted' || state.choice === 'rejected') &&
    typeof state.analytics === 'boolean' &&
    typeof state.updatedAt === 'string' &&
    (state.source === 'banner' || state.source === 'settings')
  );
};

const persistConsentState = (state: ConsentState): void => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
};

const emitConsentChange = (state: ConsentState): void => {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_CHANGE_EVENT, { detail: state }));
};

export const getConsentState = (): ConsentState => {
  if (typeof window === 'undefined') return DEFAULT_CONSENT_STATE;
  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!raw) return DEFAULT_CONSENT_STATE;

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!isConsentState(parsed)) return DEFAULT_CONSENT_STATE;
    return parsed;
  } catch {
    return DEFAULT_CONSENT_STATE;
  }
};

export const updateConsent = (
  update: { analytics: boolean },
  source: ConsentSource = 'settings',
): ConsentState => {
  const nextState: ConsentState = {
    version: CONSENT_VERSION,
    choice: update.analytics ? 'accepted' : 'rejected',
    analytics: update.analytics,
    updatedAt: new Date().toISOString(),
    source,
  };

  persistConsentState(nextState);
  emitConsentChange(nextState);
  return nextState;
};

export const setConsentAccepted = (source: ConsentSource = 'banner'): ConsentState =>
  updateConsent({ analytics: true }, source);

export const setConsentRejected = (source: ConsentSource = 'banner'): ConsentState =>
  updateConsent({ analytics: false }, source);

export const subscribeConsent = (listener: (state: ConsentState) => void): (() => void) => {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<ConsentState>;
    if (!isConsentState(customEvent.detail)) return;
    listener(customEvent.detail);
  };

  window.addEventListener(CONSENT_CHANGE_EVENT, handler);
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handler);
};
