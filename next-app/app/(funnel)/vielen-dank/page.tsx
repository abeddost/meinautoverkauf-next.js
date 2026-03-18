import type { Metadata } from 'next';
import ConfirmationPage from '@/page-components/ConfirmationPage';

export const metadata: Metadata = {
  title: 'Vielen Dank!',
  description: 'Ihre Buchung war erfolgreich. Wir haben Ihnen eine Bestätigung per E-Mail gesendet.',
  robots: { index: false, follow: false },
};

export default function VielenDankRoute() {
  return <ConfirmationPage />;
}
