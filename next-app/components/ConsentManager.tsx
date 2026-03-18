'use client';

import React, { useEffect, useState } from 'react';
import CookieConsentBanner from './CookieConsentBanner';
import CookieSettingsModal from './CookieSettingsModal';
import {
  COOKIE_SETTINGS_OPEN_EVENT,
  getConsentState,
  setConsentAccepted,
  setConsentRejected,
  updateConsent,
} from '@/lib/consent';

const ConsentManager: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const state = getConsentState();
    if (state.choice === 'unknown') {
      setShowBanner(true);
    }
    setAnalyticsEnabled(state.analytics);

    const onOpenSettings = () => {
      setShowBanner(false);
      setShowModal(true);
    };

    window.addEventListener(COOKIE_SETTINGS_OPEN_EVENT, onOpenSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_OPEN_EVENT, onOpenSettings);
  }, []);

  const handleAccept = () => {
    setConsentAccepted('banner');
    setShowBanner(false);
    setAnalyticsEnabled(true);
  };

  const handleReject = () => {
    setConsentRejected('banner');
    setShowBanner(false);
    setAnalyticsEnabled(false);
  };

  const handleSave = (enabled: boolean) => {
    updateConsent({ analytics: enabled }, 'settings');
    setAnalyticsEnabled(enabled);
    setShowModal(false);
  };

  return (
    <>
      <CookieConsentBanner
        isVisible={showBanner}
        onAccept={handleAccept}
        onReject={handleReject}
        onOpenSettings={() => {
          setShowBanner(false);
          setShowModal(true);
        }}
      />
      <CookieSettingsModal
        isOpen={showModal}
        initialAnalytics={analyticsEnabled}
        onClose={() => setShowModal(false)}
        onRejectAll={() => {
          handleReject();
          setShowModal(false);
        }}
        onSave={handleSave}
      />
    </>
  );
};

export default ConsentManager;
