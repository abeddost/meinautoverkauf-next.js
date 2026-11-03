import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { VORTEILE_FAQS } from '@/lib/faqContent';

const BENEFITS = [
  { title: 'Kostenlose Online-Bewertung', text: 'In etwa 2 Minuten erhalten Sie eine KI-gestützte, unverbindliche Preiseinschätzung auf Basis aktueller Online-Angebote.' },
  { title: 'Fester Termin statt Inserat', text: 'Sie buchen Datum und Uhrzeit selbst. Es gibt keine Anrufe von Interessenten, keine Besichtigungen und keine Probefahrten mit Fremden.' },
  { title: 'Zwei Filialen', text: 'Die Übergabe findet in Bodenheim oder Rüsselsheim statt, gut erreichbar aus Mainz, Wiesbaden, Frankfurt und Darmstadt.' },
  { title: 'Auszahlung bei Übergabe', text: 'Nach Prüfung und Vertrag veranlassen wir die Banküberweisung am Tag der Übergabe.' },
  { title: 'Abmeldung inklusive', text: 'Die Abmeldung bei der Zulassungsstelle übernehmen wir kostenfrei für Sie.' },
  { title: 'Auch mit Schäden', text: 'Wir kaufen auch Fahrzeuge mit Motorschaden, Unfallschaden, Getriebeschaden oder abgelaufener HU an.' },
  { title: 'Finanzierte Autos', text: 'Die Restschuld wird aus dem Kaufpreis bei Ihrer Bank abgelöst, und Sie erhalten den Differenzbetrag.' },
  { title: 'Keine Gebühren', text: 'Bewertung und Abmeldung sind kostenlos, und wir berechnen keine Bearbeitungsgebühren.' },
];

const PROCESS = [
  { title: 'Online bewerten', text: 'Sie geben Marke, Modell, Baujahr, Kilometerstand und Zustand ein und erhalten eine Preiseinschätzung mit Spanne.' },
  { title: 'Termin buchen', text: 'Sie wählen Filiale, Datum und Uhrzeit. Die Uhrzeiten liegen zwischen 10 und 18 Uhr.' },
  { title: 'Prüfung und Angebot', text: 'Wir prüfen das Fahrzeug und vergleichen es mit Ihren Angaben. Danach nennen wir unser verbindliches Angebot.' },
  { title: 'Vertrag und Auszahlung', text: 'Sind Sie einverstanden, unterschreiben wir den Kaufvertrag. Sie erhalten eine Kopie, und wir veranlassen die Überweisung.' },
];

export default function VorteilePage() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-24 w-[520px] h-[520px] bg-gradient-to-br from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-blue-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-orange-300/40 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark leading-tight tracking-tight mb-6">
            Was Sie beim Verkauf an Meinautoverkauf.de erwarten können
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Wir kaufen Ihr Auto ohne Inserat und ohne Verhandlungen mit Fremden. Dafür zahlen Sie mit einem niedrigeren Preis als beim Privatverkauf. Hier sehen Sie, was Sie bekommen und wann sich ein anderer Weg mehr lohnt.
          </p>
        </div>

        <section id="vorteile-content" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {BENEFITS.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="font-black text-brand-dark mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">{benefit.text}</p>
            </article>
          ))}
        </section>

        <div className="max-w-4xl mx-auto space-y-6 text-slate-700">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark">So läuft der Verkauf ab</h2>
          <ol className="space-y-4">
            {PROCESS.map((step, index) => (
              <li key={step.title} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center font-black">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-black text-brand-dark">{step.title}</h3>
                  <p className="font-medium leading-relaxed text-slate-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Wie unsere Preisschätzung entsteht</h2>
          <p className="font-medium leading-relaxed">
            Unsere KI recherchiert aktuelle Online-Angebote vergleichbarer Fahrzeuge und berücksichtigt Ihre Angaben zu Modell, Baujahr, Kilometerstand, Motorisierung, Getriebe und Zustand. Davon zieht sie einen Abschlag für Händlermarge und Risiko ab. Das Ergebnis ist eine Einschätzung mit Preisspanne.
          </p>
          <p className="font-medium leading-relaxed">
            Verbindlich ist erst unser Angebot nach der Fahrzeugprüfung. Weicht der Zustand von Ihren Angaben ab, passen wir den Preis an, und Sie entscheiden, ob Sie zu diesem Preis verkaufen. Der im Kaufvertrag genannte Betrag ist der Betrag, den Sie erhalten.
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Ist Ihr Auto nicht fahrbereit?</h2>
          <p className="font-medium leading-relaxed">
            Die Übergabe findet in unserer Filiale statt. Fährt Ihr Auto nicht mehr, rufen Sie uns vor dem Termin unter{' '}
            <a href="tel:+491782415897" className="text-brand-orange font-bold hover:underline">
              0178 2415897
            </a>{' '}
            an, dann besprechen wir die Übergabe. Mehr dazu unter{' '}
            <Link href="/defektes-auto-verkaufen" className="text-brand-orange font-bold hover:underline">
              defektes Auto verkaufen
            </Link>
            .
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Haftung nach dem Verkauf</h2>
          <p className="font-medium leading-relaxed">
            Im Kaufvertrag wird die Sachmängelhaftung ausgeschlossen. Das gilt nicht für Mängel, die Sie kennen und verschweigen. Geben Sie bekannte Mängel und Unfallschäden deshalb immer an. Dann ist klar geregelt, in welchem Zustand das Fahrzeug übergeben wurde.
          </p>

          <h2 className="text-xl lg:text-2xl font-black text-brand-dark pt-8">Wann sich ein anderer Weg mehr lohnt</h2>
          <p className="font-medium leading-relaxed">
            Ist Ihr Auto gefragt und in gutem Zustand, und haben Sie Zeit für Inserat und Besichtigungen, bringt ein Privatverkauf oft mehr Geld. Auch ein Vergleich mehrerer Händlerangebote kann sich lohnen. Unser{' '}
            <Link href="/ratgeber/auto-privat-oder-haendler-verkaufen" className="text-brand-orange font-bold hover:underline">
              Vergleich Privatverkauf oder Händler
            </Link>{' '}
            zeigt das an einem Rechenbeispiel.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-10 lg:p-16 text-center text-white relative overflow-hidden my-20 border border-slate-700/60 shadow-2xl max-w-4xl mx-auto">
          <div className="relative z-10">
            <h2 className="text-xl lg:text-2xl font-black mb-6">Prüfen Sie, was Ihr Auto wert ist</h2>
            <p className="text-slate-100 mb-10 max-w-2xl mx-auto font-semibold text-lg">
              Die Bewertung ist kostenlos und unverbindlich und dauert etwa 2 Minuten.
            </p>
            <ScrollToTopButton className="bg-brand-orange text-white px-12 py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200">
              Jetzt kostenlos Auto bewerten
            </ScrollToTopButton>
          </div>
        </div>

        <FAQSection title="Häufige Fragen zu unserem Ankauf" sectionId="faq-vorteile" className="mt-12" faqs={VORTEILE_FAQS} />

        <section className="max-w-4xl mx-auto mt-16 flex flex-wrap gap-3 justify-center">
          {[
            { href: '/auto-bewerten', label: 'Auto bewerten' },
            { href: '/auto-verkaufen', label: 'Auto verkaufen' },
            { href: '/standorte', label: 'Standorte' },
            { href: '/ratgeber', label: 'Ratgeber' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-sm px-4 py-3 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors">
              {link.label}
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
