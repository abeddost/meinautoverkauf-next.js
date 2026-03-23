import type { Metadata } from 'next';
import Link from 'next/link';
import RouteHero from '@/components/RouteHero';
import FAQSection from '@/components/FAQSection';
import { buildFaqPageSchema } from '@/lib/structuredData';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const MODEL = MODEL_SEO_PAGE_BY_SLUG['opel-corsa-verkaufen'];

const FAQS = [
  {
    q: 'Wie schnell kann ich meinen Opel Corsa verkaufen?',
    a: 'Wenn Fahrzeugdaten und Unterlagen vollstandig sind, ist ein Abschluss oft in 24 bis 72 Stunden moglich. Bei Defekten kann es etwas langer dauern, weil der Zustand genauer eingeordnet wird.',
  },
  {
    q: 'Kaufen Sie auch einen Opel Corsa mit Motorschaden?',
    a: 'Ja. Ein Opel Corsa mit Motorschaden verkaufen viele Halter uber unseren Ankauf, weil der Privatmarkt bei technischen Risiken meist stark nachverhandelt.',
  },
  {
    q: 'Lohnt sich Corsa verkaufen bei hoher Laufleistung uberhaupt?',
    a: 'Ja. Gerade beim Corsa sind hohe Kilometer im Stadt- und Pendelprofil haufig. Entscheidend fur den Preis sind Wartung, Zustand und nachvollziehbare Historie.',
  },
  {
    q: 'Nehmen Sie Corsa Unfallwagen und Fahrzeuge ohne TUV?',
    a: 'Ja. Wir kaufen auch Opel Corsa Unfallwagen und Corsa ohne gultige HU/AU. Der Zustand wird transparent bewertet und dokumentiert.',
  },
  {
    q: 'Ist Opel Corsa Export Ankauf moglich?',
    a: 'Bei geeigneten Fahrzeugen ja. Vor allem altere Fahrzeuge oder Modelle mit hohem Kilometerstand konnen fur Exportmarkte wirtschaftlich interessant sein.',
  },
  {
    q: 'Was sollte ich vor dem Verkauf bereitlegen?',
    a: 'Fahrzeugschein, Servicebelege, HU-Berichte, Rechnungen und Schluessel helfen fur eine faire Bewertung. Gerade bei alteren Corsa reduziert gute Dokumentation Preisabschlage.',
  },
];

export const metadata: Metadata = {
  title: MODEL.seoTitle,
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

export default function OpelCorsaVerkaufenPage() {
  const faqSchema = buildFaqPageSchema(SITE_URL, MODEL.canonicalPath, FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <RouteHero
        headline="Opel Corsa verkaufen: urban genutzt, fair bewertet"
        subheadline="Stadtverschleiss richtig einordnen und den besten Verkaufszeitpunkt nicht verpassen"
        accent="verkaufen"
        headlineTag="h2"
      />

      <div className="bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
              Opel Corsa verkaufen: Warum gerade Stadtfahrzeuge eine klare Verkaufsstrategie brauchen
            </h1>

            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Wer einen <strong>Opel Corsa verkaufen</strong> mochte, hat oft ein typisches Nutzungsprofil: viel Stadt, kurze Wege, enge Parklucken,
              Stop-and-go im Berufsverkehr. Genau dieses Profil macht den Corsa beliebt, sorgt aber langfristig fur ein anderes Verschleissbild als bei
              reinen Langstreckenfahrzeugen. Das Fahrzeug wirkt von aussen kompakt und unkompliziert, im Hintergrund summieren sich jedoch Kupplung,
              Bremsen, Fahrwerk und kleine Elektrikthemen schneller als viele Halter erwarten.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Im Markt fur <strong>Opel Corsa Ankauf</strong> zahlen daher nicht nur Baujahr und Kilometerstand, sondern vor allem Nutzungsrealitat und
              Dokumentation. Ein Corsa mit hoher Laufleistung kann attraktiv sein, wenn Wartung und Zustand nachvollziehbar sind. Umgekehrt kann ein
              scheinbar passendes Fahrzeug durch ausstehende Arbeiten deutlich an Wert verlieren. Genau an dieser Stelle entscheidet sich, ob Sie den Corsa
              entspannt und fair verkaufen oder in eine Reparaturspirale geraten.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10">
              Diese Seite ist bewusst praxisnah aufgebaut: Sie sehen, warum viele Besitzer den Corsa verkaufen, welche modellspezifischen Themen wirklich
              preisrelevant sind, wann sich Reparatur noch lohnt und wann <strong>Opel Corsa schnell verkaufen</strong> die wirtschaftlich klarere Option ist.
            </p>

            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8 mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Urbanes Nutzungsprofil: Warum der Corsa anders altert</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Bei kaum einem Modell sehen wir so haufig den gleichen Alltag wie beim Corsa: kurze Kaltstarts, haufiges Anfahren, dichtes Parken,
                Bordsteinbelastung und viele kleine Rangiermanover. Das bedeutet nicht automatisch schlechte Substanz. Es bedeutet aber, dass Verschleiss
                anders verteilt ist als bei einem reinen Autobahnfahrzeug.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Kupplung und Getriebe reagieren empfindlicher bei viel Stop-and-go.</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Bremsen nutzen schneller ab als bei gleichmassigen Fahrprofilen.</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Parkschaden und kleine Karosseriemangel drucken den Privatmarktpreis.</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Elektrikthemen wirken klein, summieren sich aber uber die Jahre spurbare Kosten.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum viele Corsa-Besitzer verkaufen, obwohl der Wagen alltagstauglich ist</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der Corsa wird selten wegen eines einzigen Grossschadens abgegeben. Haufiger ist es eine Kostenkette aus mehreren mittleren Positionen:
                neue Kupplung, Bremsen rundum, Reifen, HU-relevante Punkte, plus Kleinteile. Jede einzelne Rechnung wirkt machbar, die Summe innerhalb von
                12 bis 18 Monaten wird dann jedoch unverhaltnismassig hoch.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Dazu kommen Lebensphasen: erster Jobwechsel, Umzug, Familienplanung oder Umstieg auf ein grosseres Fahrzeug. Gerade in diesen Phasen wollen
                Halter Zeit sparen und nicht monatelang inserieren. Deshalb steigt die Nachfrage nach professionellem <strong>Opel Corsa Autoankauf</strong>,
                bei dem Preis und Prozess klar strukturiert sind.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Wer fruh entscheidet, verkauft den Corsa oft deutlich besser als jemand, der bis zum akuten Defekt wartet. Denn ab diesem Punkt sinkt nicht
                nur der Restwert, sondern auch Ihre Verhandlungsmacht.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Welche Corsa-Probleme beeinflussen den Ankaufpreis am starksten?</h2>

              <h3 className="text-lg font-black text-brand-dark mb-2">Kupplung und Schaltverhalten im Stadtverkehr</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Gerade bei intensiv genutzten Fahrzeugen sind fruher Kupplungsverschleiss oder unsauberes Schaltverhalten haufig. Im Privatmarkt wird das
                sofort als Risiko bewertet. Im strukturierten Ankauf wird technisch differenziert statt pauschal abgewertet.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Motorthemen bei hoher Laufleistung</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Bei einzelnen Motorvarianten konnen Ketten-, Dichtungs- oder thermische Themen auftreten. Wenn die Reparaturrechnung unklar ist,
                entscheiden sich viele Besitzer fur <strong>Opel Corsa mit Motorschaden verkaufen</strong>, statt blind in Folgekosten zu investieren.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Fahrwerk und Bremsen als Kostenpaket</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Domlager, Stoßdampfer, Bremskomponenten und Reifen werden oft nicht zusammen geplant. Treffen diese Punkte zeitlich aufeinander,
                entsteht der wirtschaftliche Kipppunkt schneller als erwartet.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Kleine Elektrikmangel mit grosser Wirkung</h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Fensterheber, Sensorik, Beleuchtung oder Komfortfunktionen sind selten Totalausfalle, wirken im Verkauf jedoch als Unsicherheitsfaktor.
                Mehrere kleine Punkte zusammen fuhren oft zu spurbarem Preisabschlag.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Corsa-Generationen kurz eingeordnet: Wo der Markt besonders sensibel reagiert</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der Begriff "Corsa" umfasst unterschiedliche Generationen mit eigener Marktlogik. Genau deshalb lohnt keine Pauschalaussage, sondern die
                Einordnung nach Baujahr, Motorisierung und Nutzung.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed mb-4">
                <li><strong>Corsa C und D:</strong> stark preisgetrieben, hohe Sensibilitat bei Rost, Kupplung und HU-Themen.</li>
                <li><strong>Corsa E:</strong> breite Nachfrage im Gebrauchtmarkt, aber harter Vergleich uber Zustand und Historie.</li>
                <li><strong>Corsa F:</strong> juengeres Preisniveau, dafur kritische Prufung von Wartung und Nutzungsprofil.</li>
              </ul>
              <p className="text-slate-700 font-medium leading-relaxed">
                Entscheidend ist nicht der Name auf der Heckklappe, sondern wie plausibel Ihr konkretes Fahrzeug dokumentiert ist.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wann ist der beste Zeitpunkt, einen Opel Corsa zu verkaufen?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der optimale Zeitpunkt liegt meist vor einer dichten Reparaturphase. Wenn Kupplung, HU, Bremsen und erste Motorthemen gleichzeitig
                naher rucken, verlieren Sie bei jedem weiteren Monat sowohl Geld als auch Flexibilitat.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Besonders wichtig ist dieser Punkt, wenn Sie <strong>Opel Corsa hoher Kilometerstand verkaufen</strong> wollen. Hohe Laufleistung ist beim
                Corsa kein Ausschlusskriterium, aber sie verlangt klare Nachweise. Wer wartet, bis der Wagen nicht mehr planbar ist, bekommt meist schlechtere
                Konditionen als bei einem fruhen, transparenten Verkauf.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Praktischer Richtwert: Wenn Sie fur das nachste Jahr mehr als zwei groessere Werkstattpositionen erwarten, ist ein Verkaufscheck jetzt sinnvoll.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Opel Corsa kaufen wir an?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">Opel Corsa Unfallwagen verkaufen</h3>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">Ankauf auch bei dokumentierten Karosserie- und Unfallschaden.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">Opel Corsa mit Motorschaden verkaufen</h3>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">Auch bei nicht fahrbereitem Zustand ist ein Ankauf moglich.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">Corsa mit Getriebeschaden</h3>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">Schaltprobleme und auffalliges Fahrverhalten schliessen den Ankauf nicht aus.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">Opel Corsa gebraucht verkaufen bei hohen Kilometern</h3>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">Gerade bei Pendel- und Stadtprofilen werden hohe Laufleistungen fair eingeordnet.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">Corsa ohne TUV</h3>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">Auch ohne aktuelle HU/AU konnen wir ein belastbares Angebot erstellen.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">Altere Corsa fur Export</h3>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">Fur geeignete Fahrzeuge prufen wir den wirtschaftlichen Exportweg.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">So lauft der Verkauf ab: klar, kurz und planbar</h2>
              <ol className="space-y-4 text-slate-700 font-medium leading-relaxed">
                <li><strong>1. Daten und Zustand melden:</strong> Baujahr, Kilometerstand, Motor, bekannte Mangel und Unterlagen.</li>
                <li><strong>2. Transparente Bewertung:</strong> Wir kalkulieren Markt, Technikrisiko und Verwertbarkeit nachvollziehbar.</li>
                <li><strong>3. Ubergabe und Auszahlung:</strong> Vertrag, Termin, Fahrzeugubergabe und dokumentierte Zahlung aus einer Hand.</li>
              </ol>
              <p className="text-slate-700 font-medium leading-relaxed mt-4">
                Damit vermeiden Sie typische Privatmarktprobleme wie No-Show-Besichtigungen, Nachverhandlungen und unsichere Zahlungssituationen.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum unser Opel Corsa Ankauf fur viele die bessere Option ist</h2>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li>Wir bewerten den Corsa als Einzelfahrzeug mit realem Stadt- oder Pendelprofil.</li>
                <li>Auch schwierige Zustande bleiben verkaufbar: Defekte, Unfall, hohe Laufleistung, ohne TUV.</li>
                <li>Sie erhalten einen dokumentierten, rechtssicheren Ablauf mit klaren Schritten.</li>
                <li>Keine versteckten Kosten und auf Wunsch Abholung in vielen Regionen.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wie holen Sie beim Corsa den bestmoglichen Verkaufspreis heraus?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim Corsa entscheidet selten ein Einzelmerkmal uber den Preis. Es ist die Summe aus plausibler Historie, ehrlicher Zustandsbeschreibung und
                realistischer Preispositionierung. Wer vorhandene Mangel sauber dokumentiert, wirkt nicht schwach, sondern professionell. Das reduziert Risikoaufschlage.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Besonders bei Suchanfragen wie <strong>Opel Corsa Probleme verkaufen</strong> oder <strong>Opel Corsa mit Motorschaden verkaufen</strong>
                zahlt Transparenz doppelt. Unklare Aussagen fuhren fast immer zu pauschalen Abschlagen. Klare Nachweise schaffen dagegen eine belastbare Preisbasis.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Nutzen Sie den Verkauf als Timingentscheidung, nicht als Notfallreaktion. Genau dadurch sichern Sie Restwert und vermeiden eine teure letzte
                Reparaturrunde kurz vor dem Abschied.
              </p>
            </section>

            <section className="mb-14 rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-orange-50 to-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">Opel Corsa jetzt bewerten und Verkaufsfenster nutzen</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-5">
                Wenn Sie Ihren Corsa strukturiert und ohne Zeitverlust verkaufen moechten, starten Sie jetzt mit einer unverbindlichen Bewertung.
                Weitere Markeninfos finden Sie auf <Link href="/opel-verkaufen" className="text-brand-orange font-black hover:underline">Opel verkaufen</Link>
                und im <Link href="/modelle" className="text-brand-orange font-black hover:underline">Modelle-Hub</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/auto-bewerten" className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors">
                  Corsa jetzt bewerten
                </Link>
                <Link href="/auto-verkaufen" className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 font-bold text-brand-dark hover:border-brand-orange transition-colors">
                  Corsa Verkauf starten
                </Link>
              </div>
            </section>
          </article>

          <FAQSection
            title="FAQ: Opel Corsa verkaufen"
            faqs={FAQS}
            sectionId="faq-opel-corsa-verkaufen"
            className="max-w-4xl mx-auto bg-transparent py-0"
          />
        </div>
      </div>
    </>
  );
}
