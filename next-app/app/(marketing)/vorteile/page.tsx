import type { Metadata } from 'next';
import VorteileWrapper from '@/components/VorteileWrapper';
import RouteHero from '@/components/RouteHero';

export const metadata: Metadata = {
  title: 'Ihre Vorteile – Warum Meinautoverkauf.de?',
  description:
    'Entdecken Sie die Vorteile: Faire KI-Bewertung, keine versteckten Kosten, schnelle Auszahlung und ein persönlicher Ansprechpartner beim Autoankauf.',
  alternates: { canonical: '/vorteile' },
};

export default function VorteileRoute() {
  return (
    <>
      <RouteHero
        headline="Ihre Vorteile beim Autoankauf – Transparent & zuverlässig"
        subheadline="So einfach war Auto verkaufen noch nie"
        accent="vorteile"
        headlineTag="h2"
      />
      <VorteileWrapper />
    </>
  );
}
