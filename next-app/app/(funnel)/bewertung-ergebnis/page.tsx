import type { Metadata } from 'next';
import ValuationResultPage from '@/page-components/ValuationResultPage';

export const metadata: Metadata = {
  title: 'Ihr Bewertungsergebnis',
  robots: { index: false },
};

export default function BewertungErgebnisRoute() {
  return <ValuationResultPage />;
}
