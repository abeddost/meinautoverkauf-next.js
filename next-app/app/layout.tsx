import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Autoankauf – Fair & Schnell | Meinautoverkauf.de',
    template: '%s | Meinautoverkauf.de',
  },
  description:
    'Autoankauf in Frankfurt, Wiesbaden, Mainz und ganz Deutschland. Online bewerten, Termin buchen, Fahrzeug abgeben – sofortige Auszahlung.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de',
  ),
  openGraph: {
    siteName: 'Meinautoverkauf.de',
    type: 'website',
    locale: 'de_DE',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${geist.className} text-slate-900 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
