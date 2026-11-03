import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { MODEL_OVERVIEW_PATH, MODEL_SEO_PAGES } from '@/lib/modelSeoPages';

const ORDERED_MODEL_LINKS = [...MODEL_SEO_PAGES].sort((a, b) => a.order - b.order);

export const metadata: Metadata = buildPageMetadata({
  title: 'Auto nach Modell verkaufen',
  description:
    'Golf, Passat, 3er, A4, C-Klasse und weitere Modelle: typische Schwachstellen, Nutzungsprofile und der richtige Verkaufszeitpunkt für Ihr Modell.',
  path: MODEL_OVERVIEW_PATH,
});

export default function ModelleRoute() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">Modelle</span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark leading-tight tracking-tight mb-6">
            Autoankauf nach Modell
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Hier finden Sie unsere Modellseiten mit typischen Schwachstellen, passendem Verkaufszeitpunkt und den wichtigsten Preisfaktoren.
          </p>
        </div>

        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum das Modell oft wichtiger ist als die Marke</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Zwei Autos derselben Marke können sich beim Verkauf völlig unterschiedlich verhalten. Generation, Motor, Getriebe und Einsatzprofil entscheiden darüber, welche Schwachstellen auftreten und wie hoch die Nachfrage ist. Ein Golf aus dem Stadtverkehr zeigt anderen Verschleiß als ein Passat von der Langstrecke.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Die Modellseiten erklären, welche Punkte beim jeweiligen Auto den Preis am stärksten beeinflussen und wann ein Verkauf vor der nächsten großen Reparatur sinnvoll sein kann. Für einen ersten Überblick über den Wertverlust nutzen Sie unseren{' '}
            <Link href="/wertverlust-auto-rechner" className="text-brand-orange font-bold hover:underline">
              Wertverlust-Rechner
            </Link>
            .
          </p>
        </section>

        <nav aria-label="Modellseiten" className="max-w-4xl mx-auto mb-10">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Alle Modellseiten</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ORDERED_MODEL_LINKS.map((model) => (
              <li key={model.href}>
                <Link
                  href={model.href}
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-bold text-slate-700 shadow-sm transition-all hover:border-brand-orange hover:text-brand-orange hover:-translate-y-0.5"
                >
                  {model.label}
                  <span className="text-brand-orange transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="max-w-4xl mx-auto mb-10">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Worauf Käufer je nach Modell achten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Motor und Getriebe', text: 'Innerhalb einer Baureihe unterscheiden sich Motoren und Getriebe oft deutlich. Bekannte Schwachstellen einer Variante wirken sich direkt auf den Preis aus.' },
              { title: 'Einsatzprofil', text: 'Viel Stadtverkehr belastet Kupplung und Bremsen, Langstrecke eher Fahrwerk und Komfortsysteme. Eine hohe Laufleistung ist deshalb nicht automatisch schlechter.' },
              { title: 'Generation und Baujahr', text: 'Nach einem Modellwechsel verschiebt sich die Nachfrage. Ältere Generationen werden preissensibler, jüngere werden genauer auf Wartung geprüft.' },
              { title: 'Belegte Historie', text: 'Scheckheft, Rechnungen und HU-Berichte machen den Zustand nachvollziehbar und verringern Abschläge, besonders bei hoher Laufleistung.' },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="font-black text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <p className="max-w-4xl mx-auto mb-10 text-slate-600 font-medium">
          Ihr Modell ist nicht dabei? Dann helfen unsere{' '}
          <Link href="/marken" className="text-brand-orange font-bold hover:underline">
            Markenseiten
          </Link>{' '}
          weiter.
        </p>

        <div className="max-w-4xl mx-auto rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
          <h2 className="text-xl font-black text-brand-dark mb-3">Sie möchten direkt starten?</h2>
          <p className="text-slate-700 font-medium mb-4">
            Wenn Sie bereits verkaufen möchten, lassen Sie Ihr Auto kostenlos und unverbindlich bewerten oder informieren Sie sich über den Ablauf.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/auto-bewerten"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors"
            >
              Auto jetzt bewerten
            </Link>
            <Link
              href="/auto-verkaufen"
              className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 font-bold text-brand-dark hover:border-brand-orange transition-colors"
            >
              Auto verkaufen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
