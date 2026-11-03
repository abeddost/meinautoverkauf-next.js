import type { Metadata } from 'next';
import BookingPage from '@/page-components/BookingPage';

export const metadata: Metadata = {
  title: 'Termin zur Übergabe buchen',
  description:
    'Wählen Sie Ihren Wunschtermin für die Fahrzeugübergabe in unserer Filiale in Bodenheim oder Rüsselsheim.',
  robots: { index: false, follow: false },
};

export default function TerminBuchenRoute() {
  return <BookingPage />;
}
