import type { Metadata } from 'next';
import AutoBewertenWrapper from '@/components/AutoBewertenWrapper';
import RouteHero from '@/components/RouteHero';

export const metadata: Metadata = {
  title: 'Auto bewerten – Kostenlose KI-Sofortbewertung',
  description:
    'Auto online bewerten und sofort einen fairen Ankaufspreis erhalten. Unsere KI analysiert aktuelle Marktdaten – kostenlos, unverbindlich und in 2 Minuten.',
  alternates: { canonical: '/auto-bewerten' },
};

export default function AutoBewertenRoute() {
  return (
    <>
      <RouteHero
        headline="Auto bewerten online – Kostenlos & präzise Wertermittlung"
        subheadline="In 2 Minuten den realistischen Marktwert Ihres Fahrzeugs erhalten"
        accent="bewerten"
        headlineTag="h2"
      />
      <AutoBewertenWrapper />
    </>
  );
}
