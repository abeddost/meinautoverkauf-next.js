import type { Metadata } from 'next';
import BookingPage from '@/page-components/BookingPage';

export const metadata: Metadata = {
  title: 'Termin zur Fahrzeugprüfung buchen',
  description:
    'Wählen Sie Ihren Wunschtermin für die Fahrzeugprüfung – Filial-Abgabe oder Haus-Abholung.',
  robots: { index: false, follow: false },
};

export default function TerminBuchenRoute() {
  return <BookingPage />;
}
