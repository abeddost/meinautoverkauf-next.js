import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';
import { HOME_FAQS } from '@/lib/faqContent';
import { buildFaqPageSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';

export const metadata: Metadata = {
  title: {
    absolute:
      'Autoankauf Deutschland | Auto online verkaufen | Einfach, schnell & stressfrei | Meinautoverkauf.de',
  },
  description:
    'Autoankauf in Frankfurt, Wiesbaden, Mainz und ganz Deutschland: KI-Bewertung, fairer Preis, schnelle Auszahlung. Jetzt kostenlos bewerten.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Meinautoverkauf.de – Auto schnell und fair verkaufen',
    description: 'KI-gestützte Fahrzeugbewertung & Sofortankauf in ganz Deutschland. Keine Inseratkosten, keine Haftung.',
    type: 'website',
  },
};

export default function HomePage() {
  const faqSchema = buildFaqPageSchema(SITE_URL, '/', HOME_FAQS);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageClient />
    </>
  );
}
