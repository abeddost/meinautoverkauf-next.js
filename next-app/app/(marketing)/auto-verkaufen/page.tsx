import type { Metadata } from 'next';
import AutoVerkaufenWrapper from '@/components/AutoVerkaufenWrapper';
import RouteHero from '@/components/RouteHero';

export const metadata: Metadata = {
  title: 'Auto verkaufen – Schnell & Sicher | Schritt für Schritt',
  description:
    'Auto sicher und schnell verkaufen: Bewertung, Termin vereinbaren, Fahrzeug übergeben, Geld erhalten. Einfacher Ablauf ohne Risiko.',
  alternates: { canonical: '/auto-verkaufen' },
};

export default function AutoVerkaufenRoute() {
  return (
    <>
      <RouteHero
        headline="Auto verkaufen online – Schnell, fair & sicher"
        subheadline="Kostenlose Bewertung und stressfreier Verkauf in ganz Deutschland"
        accent="verkaufen"
        headlineTag="h2"
      />
      <AutoVerkaufenWrapper />
    </>
  );
}
