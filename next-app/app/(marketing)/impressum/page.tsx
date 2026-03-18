import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Meinautoverkauf.de – Angaben gemäß § 5 TMG, Kontakt und rechtliche Hinweise.',
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-24 w-[520px] h-[520px] bg-gradient-to-br from-orange-200/60 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[20%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-blue-200/60 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[12%] right-[12%] w-80 h-80 bg-orange-300/40 rounded-full blur-2xl" />
        <div className="absolute bottom-24 left-[10%] w-24 h-24 bg-blue-200/50 rounded-full blur-xl" />
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-orange-200/40 rounded-full" />
        <div className="absolute top-[55%] left-[6%] w-40 h-40 border-2 border-blue-200/40 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl relative z-10">
        <div className="bg-white/90 backdrop-blur rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-slate-100">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8">Impressum</h1>

          <div className="space-y-10 text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">Angaben gemäß § 5 TMG</h2>
              <p>Meinautoverkauf.de</p>
              <p>Autohaus HF – Inhaber: Idris Sarwari</p>
              <p>Am Kuemmerling 41a</p>
              <p>55294 Bodenheim</p>
              <p>Deutschland</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">Kontakt</h2>
              <p>
                Telefon:{' '}
                <a className="text-brand-orange font-bold hover:underline" href="tel:+4917662878366">
                  0176 62878366
                </a>
              </p>
              <p>
                E-Mail:{' '}
                <a className="text-brand-orange font-bold hover:underline" href="mailto:info@meinautoverkauf.de">
                  info@meinautoverkauf.de
                </a>
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
              <p>DE332778289</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>Idris Sarwari</p>
              <p>Am Kuemmerling 41a</p>
              <p>55294 Bodenheim</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  className="text-brand-orange font-bold hover:underline"
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
