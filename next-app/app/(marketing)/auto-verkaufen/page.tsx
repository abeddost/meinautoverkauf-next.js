import type { Metadata } from 'next';
import AutoVerkaufenWrapper from '@/components/AutoVerkaufenWrapper';
import RouteHero from '@/components/RouteHero';

export const metadata: Metadata = {
  title: {
    absolute:
      'Gebrauchtwagen in Deutschland sicher online verkaufen | Meinautoverkauf.de',
  },
  description:
    'Auto sicher und stressfrei online verkaufen mit kostenloser Bewertung fairen Preisen schneller Auszahlung und einfacher Abwicklung in ganz Deutschland',
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
