import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import HomePageClient from '@/components/HomePageClient';
import { HOME_FAQS } from '@/lib/faqContent';
import { buildFaqPageSchema } from '@/lib/structuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';

export const metadata: Metadata = buildPageMetadata({
  title: 'Autoankauf & Auto online verkaufen',
  description:
    'Autoankauf mit Filialen in Bodenheim und Rüsselsheim: Auto kostenlos online bewerten, Termin buchen, bei der Übergabe ausgezahlt werden. Abmeldung inklusive.',
  path: '/',
});

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
