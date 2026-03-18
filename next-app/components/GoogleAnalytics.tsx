'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { getConsentState, subscribeConsent } from '@/lib/consent';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;

    const syncConsent = () => {
      const state = getConsentState();
      setAnalyticsAllowed(state.choice === 'accepted' && state.analytics);
    };

    syncConsent();
    return subscribeConsent(syncConsent);
  }, []);

  if (!GA_ID || !analyticsAllowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'update', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('js', Date.now());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
