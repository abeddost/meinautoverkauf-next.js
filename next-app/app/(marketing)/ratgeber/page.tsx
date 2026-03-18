import type { Metadata } from 'next';
import RatgeberWrapper from '@/components/RatgeberWrapper';
import RouteHero from '@/components/RouteHero';

export const metadata: Metadata = {
  title: 'Ratgeber: Gebrauchtwagen verkaufen – Alles was Sie wissen müssen',
  description:
    'Unser Ratgeber erklärt Schritt für Schritt, wie Sie Ihr Auto sicher, rechtssicher und zum besten Preis verkaufen.',
  alternates: { canonical: '/ratgeber' },
};

export default function RatgeberRoute() {
  return (
    <>
      <RouteHero
        headline="Auto Ratgeber – Tipps, Checklisten & Wissen"
        subheadline="Alles rund um Bewertung, Verkauf und Marktpreise"
        accent="ratgeber"
        headlineTag="h2"
      />
      <RatgeberWrapper />
    </>
  );
}
