import type { Metadata } from 'next';
import AnalyzingPage from '@/page-components/AnalyzingPage';

export const metadata: Metadata = {
  title: 'Bewertung läuft – Einen Moment bitte',
  robots: { index: false },
};

export default function BewertungLaeuftRoute() {
  return <AnalyzingPage />;
}
