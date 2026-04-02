import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Script from 'next/script';
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
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W4MPTL8K" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }} />
        {children}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W4MPTL8K');`,
          }}
        />
      </body>
    </html>
  );
}
