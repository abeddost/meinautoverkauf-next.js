'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Mirrors the Vite ScrollToTop behaviour:
 * - Home (/): scroll to top so the hero + valuation form are visible.
 * - All other marketing pages that have a full-screen hero (#bewerten):
 *   scroll past it by window.innerHeight so content is immediately visible.
 * - Pages without a hero (e.g. /datenschutz): scroll to top.
 */
export default function ScrollToContent() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    // setTimeout(0) defers until after React has committed the render to the DOM.
    const timer = setTimeout(() => {
      const heroEl = document.getElementById('bewerten');
      if (heroEl) {
        window.scrollTo({ top: window.innerHeight, behavior: 'auto' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
