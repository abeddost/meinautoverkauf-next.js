import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { buildLocalBusinessSchema, buildWebsiteSchema } from '@/lib/structuredData';

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';

export const metadata: Metadata = {
  title: {
    default: 'Autoankauf – Fair & Schnell | Meinautoverkauf.de',
    template: '%s | Meinautoverkauf.de',
  },
  description:
    'Autoankauf in Frankfurt, Wiesbaden, Mainz und ganz Deutschland. Online bewerten, Termin buchen, Fahrzeug abgeben – sofortige Auszahlung.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: 'Meinautoverkauf.de',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Meinautoverkauf.de – Auto verkaufen online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoankauf – Fair & Schnell | Meinautoverkauf.de',
    description:
      'Autoankauf in Frankfurt, Wiesbaden, Mainz und ganz Deutschland. Online bewerten, Termin buchen, Fahrzeug abgeben – sofortige Auszahlung.',
    images: ['/og-image.webp'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = buildLocalBusinessSchema(SITE_URL);
  const websiteSchema = buildWebsiteSchema(SITE_URL);

  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${geist.className} text-slate-900 antialiased overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
