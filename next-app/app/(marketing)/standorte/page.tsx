import type { Metadata } from 'next';
import RouteHero from '@/components/RouteHero';
import StandortePage from '@/page-components/StandortePage';

export const metadata: Metadata = {
  title: 'Alle Standorte – Autoankauf in ganz Deutschland',
  description:
    'Übersicht aller Standorte: Autoankauf in Frankfurt, Wiesbaden, Mainz, Köln, Hamburg und vielen weiteren Städten.',
  alternates: { canonical: '/standorte' },
};

export default function StandorteRoute() {
  return (
    <>
      <RouteHero
        headline="Autoankauf in Ihrer Nähe – Alle Standorte im Überblick"
        subheadline="Kostenlos bewerten, Termin planen und Fahrzeug in Ihrer Region fair verkaufen"
        accent="verkaufen"
        headlineTag="h2"
      />
      <StandortePage />
    </>
  );
}
