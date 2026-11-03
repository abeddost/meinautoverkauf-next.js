import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import RouteHero from '@/components/RouteHero';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { buildPageMetadata, SITE_URL } from '@/lib/seo';
import { buildBreadcrumbSchema } from '@/lib/structuredData';

const PATH = '/defektes-auto-verkaufen';

export const metadata: Metadata = buildPageMetadata({
  title: 'Defektes Auto verkaufen: So gehen Sie richtig vor',
  description:
    'Defektes Auto verkaufen: Motorschaden, Getriebeschaden, Unfall oder ohne TÜV. So entscheiden Sie zwischen Reparatur und Verkauf und vermeiden typische Fehler.',
  path: PATH,
});

const DAMAGE_TYPES = [
  {
    title: 'Motorschaden',
    text: 'Reparaturen werden schnell teuer, und weitere Schäden zeigen sich oft erst danach. Der Restwert hängt stark vom Zustand des übrigen Autos ab.',
    href: '/ratgeber/auto-mit-motorschaden-verkaufen',
    label: 'Zum Ratgeber Motorschaden',
  },
  {
    title: 'Getriebeschaden',
    text: 'Erst die Diagnose zeigt, ob wirklich das Getriebe defekt ist. Bei jüngeren Autos fragen Sie zuerst nach Garantie oder Kulanz.',
    href: '/ratgeber/auto-mit-getriebeschaden-verkaufen',
    label: 'Zum Ratgeber Getriebeschaden',
  },
  {
    title: 'Unfallschaden',
    text: 'Entscheidend sind Art und Umfang des Schadens sowie die Qualität einer Reparatur. Auch reparierte Unfallschäden müssen Sie angeben.',
    href: '/ratgeber/unfallwagen-verkaufen',
    label: 'Zum Ratgeber Unfallwagen',
  },
  {
    title: 'Ohne gültige HU',
    text: 'Eine abgelaufene HU ist ein Preisfaktor, aber kein Verkaufsverbot. Eine neue HU lohnt sich nur, wenn die Reparaturen überschaubar sind.',
    href: '/ratgeber/autoankauf-ohne-tuev',
    label: 'Zum Ratgeber ohne TÜV',
  },
  {
    title: 'Sehr altes Auto oder Wrack',
    text: 'Nicht jedes alte Auto gehört auf den Schrottplatz. Echte Altfahrzeuge dürfen aber nur über anerkannte Demontagebetriebe entsorgt werden.',
    href: '/ratgeber/auto-verschrotten-oder-verkaufen',
    label: 'Verschrotten oder verkaufen?',
  },
  {
    title: 'Elektronik und Steuergeräte',
    text: 'Elektronikfehler sind oft schwer einzugrenzen. Ein ausgelesener Fehlerspeicher hilft, bevor Sie über Reparatur oder Verkauf entscheiden.',
    href: '/ratgeber/kilometerstand-scheckheft-vorbesitzer-preis',
    label: 'Was den Preis bestimmt',
  },
];

const BUYERS = [
  { title: 'Händler und Ankäufer', text: 'Sie kaufen im aktuellen Zustand und übernehmen meist auch die Abmeldung. Der Preis liegt unter dem Wert eines intakten Autos, dafür ist der Ablauf einfach.' },
  { title: 'Exporthändler', text: 'Für manche ältere oder reparaturbedürftige Fahrzeuge gibt es im Ausland Nachfrage. Achten Sie auf Vertrag, Zahlung und Abmeldenachweis.' },
  { title: 'Privatkäufer und Bastler', text: 'Sie zahlen manchmal mehr, doch der Kreis ist klein und die Verhandlungen sind zäh. Mängel müssen Sie vollständig angeben.' },
  { title: 'Demontagebetriebe', text: 'Sie sind die richtige Adresse für echte Altfahrzeuge und stellen den Verwertungsnachweis für die Abmeldung aus.' },
];

const FAQS = [
  { q: 'Kann ich ein defektes Auto überhaupt verkaufen?', a: 'Ja, in vielen Fällen. Sie müssen den Zustand und bekannte Mängel offen angeben. Echte Wracks sollten Sie aber nicht als Gebrauchtwagen verkaufen, sondern über einen anerkannten Demontagebetrieb entsorgen.' },
  { q: 'Lohnt sich die Reparatur vor dem Verkauf?', a: 'Nur wenn der erwartete Mehrerlös die Reparaturkosten sicher übersteigt. Bei älteren Autos mit hoher Laufleistung ist das oft nicht der Fall.' },
  { q: 'Muss ich Mängel beim Verkauf angeben?', a: 'Ja. Bekannte Mängel und Unfallschäden müssen Sie angeben. Ein Haftungsausschluss schützt nicht, wenn Sie etwas arglistig verschweigen.' },
  { q: 'Was mache ich, wenn das Auto nicht mehr fährt?', a: 'Die Übergabe findet in unserer Filiale in Bodenheim oder Rüsselsheim statt. Rufen Sie uns vor dem Termin an, dann besprechen wir die Übergabe.' },
  { q: 'Welche Unterlagen brauche ich für ein defektes Auto?', a: 'Fahrzeugschein, Fahrzeugbrief, Ihren Ausweis und alle Schlüssel. Hilfreich sind außerdem Diagnose, Kostenvoranschlag und Rechnungen.' },
  { q: 'Bleibt die Bewertung bei einem Schaden kostenlos?', a: 'Ja. Die Online-Bewertung ist auch bei Schäden kostenlos und unverbindlich. Beschreiben Sie den Zustand möglichst genau.' },
];

export default function DefektesAutoVerkaufenRoute() {
  const breadcrumbSchema = buildBreadcrumbSchema(SITE_URL, [
    { name: 'Home', path: '/' },
    { name: 'Auto verkaufen', path: '/auto-verkaufen' },
    { name: 'Defektes Auto verkaufen', path: PATH },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Auto verkaufen', href: '/auto-verkaufen' },
          { name: 'Defektes Auto verkaufen', href: PATH },
        ]}
      />
      <RouteHero
        headline="Defektes Auto verkaufen: So gehen Sie richtig vor"
        subheadline="Motorschaden, Getriebeschaden, Unfall oder ohne TÜV: kostenlos bewerten und in Ruhe entscheiden"
        accent="verkaufen"
      />

      <div className="bg-white">
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark leading-tight tracking-tight mb-4">
              Reparieren oder verkaufen? Erst rechnen, dann entscheiden
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-4">
              Ein teurer Defekt muss nicht das Ende sein, und eine Reparatur ist nicht automatisch die beste Lösung. Oft fehlt nur eine ehrliche Rechnung: Was kostet die Reparatur, was wäre das Auto danach wert, und was bringt es heute?
            </p>
            <p className="text-slate-600 font-medium leading-relaxed">
              Diese Seite führt Sie durch die wichtigsten Fälle. Der richtige Weg hängt von Schaden, Fahrzeugwert und Ihrer Zeit ab.
            </p>
          </div>

          <section>
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Was ist an Ihrem Auto defekt?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DAMAGE_TYPES.map((damage) => (
                <article key={damage.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-black text-brand-dark mb-2">{damage.title}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-3">{damage.text}</p>
                  <Link href={damage.href} className="text-sm font-bold text-brand-orange hover:underline">
                    {damage.label} →
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">So rechnen Sie die Entscheidung durch</h2>
            <ol className="space-y-3 text-slate-700 font-medium leading-relaxed list-decimal pl-5">
              <li>Lassen Sie den Schaden diagnostizieren und holen Sie einen schriftlichen Kostenvoranschlag ein.</li>
              <li>Schätzen Sie, was das Auto repariert noch wert wäre, zum Beispiel mit vergleichbaren Inseraten.</li>
              <li>Ziehen Sie die Reparaturkosten und einen Puffer für weitere Schäden davon ab.</li>
              <li>Vergleichen Sie das Ergebnis mit einem Angebot für das Auto im aktuellen Zustand.</li>
            </ol>
            <p className="text-slate-600 font-medium leading-relaxed mt-4">
              Liegen beide Werte nah beieinander, ist der Verkauf meist die ruhigere Entscheidung, weil Sie kein weiteres Risiko tragen. Zum Vergleich hilft unsere{' '}
              <Link href="/auto-bewerten" className="text-brand-orange font-bold hover:underline">
                kostenlose Bewertung
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Wer defekte Autos kauft</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BUYERS.map((buyer) => (
                <article key={buyer.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <h3 className="font-black text-brand-dark mb-2">{buyer.title}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{buyer.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wichtig: Mängel angeben und Grenzen kennen</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-4">
              Geben Sie alle bekannten Mängel an und nennen Sie sie auch im Kaufvertrag. Ein Haftungsausschluss schützt Sie nicht, wenn Sie einen bekannten Schaden arglistig verschweigen. Offene Angaben vermeiden außerdem Preisdiskussionen beim Termin.
            </p>
            <p className="text-slate-600 font-medium leading-relaxed">
              Das Umweltbundesamt weist darauf hin, dass der Verkauf eines Wracks als Gebrauchtwagen eine Ordnungswidrigkeit sein kann. Totalschäden und Fahrzeuge, aus denen Betriebsflüssigkeiten austreten, gelten eher als Altfahrzeug und gehören zu einem anerkannten Demontagebetrieb.
            </p>
          </section>

          <section className="rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">So läuft der Verkauf an uns ab</h2>
            <p className="text-slate-700 font-medium leading-relaxed mb-3">
              Sie beschreiben Ihr Auto und den Schaden im Bewertungsformular und erhalten eine kostenlose Einschätzung. Danach buchen Sie einen Termin in unserer Filiale in Bodenheim oder Rüsselsheim. Dort prüfen wir das Fahrzeug und nennen unser verbindliches Angebot.
            </p>
            <p className="text-slate-700 font-medium leading-relaxed mb-6">
              Fährt Ihr Auto nicht mehr, rufen Sie uns vor dem Termin unter{' '}
              <a href="tel:+491782415897" className="text-brand-orange font-bold hover:underline">
                0178 2415897
              </a>{' '}
              an, dann besprechen wir die Übergabe.
            </p>
            <ScrollToTopButton className="rounded-xl bg-brand-orange text-white px-6 py-3 font-bold hover:bg-orange-600 transition-colors">
              Jetzt kostenlos bewerten
            </ScrollToTopButton>
          </section>

          <FAQSection title="Häufige Fragen zum Verkauf defekter Autos" faqs={FAQS} sectionId="faq-defektes-auto" className="bg-transparent py-0" />

          <section>
            <h2 className="text-lg font-black text-brand-dark mb-3">Das könnte Sie auch interessieren</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/ratgeber/auto-privat-oder-haendler-verkaufen', label: 'Privat oder an den Händler?' },
                { href: '/ratgeber/unterlagen-autoverkauf-checkliste', label: 'Unterlagen-Checkliste' },
                { href: '/ratgeber/rechtssicherer-kaufvertrag-auto', label: 'Kaufvertrag richtig gestalten' },
                { href: '/ratgeber/autoexport-ankauf', label: 'Auto für den Export verkaufen' },
                { href: '/marken', label: 'Nach Marke' },
                { href: '/standorte', label: 'Unsere Standorte' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-brand-orange hover:text-brand-orange transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
