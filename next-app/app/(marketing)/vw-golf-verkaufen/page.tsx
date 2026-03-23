import type { Metadata } from 'next';
import Link from 'next/link';
import RouteHero from '@/components/RouteHero';
import FAQSection from '@/components/FAQSection';
import { buildFaqPageSchema } from '@/lib/structuredData';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const MODEL = MODEL_SEO_PAGE_BY_SLUG['vw-golf-verkaufen'];

const FAQS = [
  {
    q: 'Wie schnell kann ich meinen VW Golf verkaufen?',
    a: 'Mit vollständigen Fahrzeugdaten ist ein Abschluss häufig innerhalb von 24 bis 72 Stunden möglich. Bei klarer Unterlagenlage und flexibler Terminwahl geht es oft noch schneller.',
  },
  {
    q: 'Kaufen Sie auch einen Golf mit Motorschaden?',
    a: 'Ja. Ein VW Golf mit Motorschaden ist weiterhin ankauffähig. Entscheidend sind Baujahr, Motorvariante, Laufleistung und der dokumentierte Schadenzustand.',
  },
  {
    q: 'Lohnt sich der Verkauf eines Golf mit hoher Laufleistung überhaupt?',
    a: 'Ja, besonders beim Golf. Das Modell bleibt als Volumenfahrzeug gefragt. Eine transparente Historie kann auch bei hohen Kilometern den Ankaufpreis stabilisieren.',
  },
  {
    q: 'Nehmen Sie auch Golf Unfallwagen oder Fahrzeuge ohne TÜV?',
    a: 'Ja. Unfallwagen und Fahrzeuge ohne gültige HU/AU kaufen wir ebenfalls an. Der Zustand wird offen bewertet und nachvollziehbar eingepreist.',
  },
  {
    q: 'Was ist besser: privat verkaufen oder professioneller Ankauf?',
    a: 'Beim Golf ist der Privatmarkt groß, aber zeitaufwändig und stark nachverhandlungsgetrieben. Professioneller Ankauf ist oft schneller, planbarer und rechtssicherer.',
  },
  {
    q: 'Ist ein Exportankauf für ältere Golf sinnvoll?',
    a: 'In vielen Fällen ja. Bei älteren Golf mit hoher Laufleistung oder Defekten kann der Exportweg wirtschaftlich sinnvoller sein als ein langer Privatverkauf.',
  },
];

export const metadata: Metadata = {
  title: MODEL.seoTitle,
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

export default function VwGolfVerkaufenPage() {
  const faqSchema = buildFaqPageSchema(SITE_URL, MODEL.canonicalPath, FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <RouteHero
        headline="VW Golf verkaufen: schnell, fair und ohne Inseratstress"
        subheadline="Modellexpertise für Golf-typische Probleme, realistische Preise und sichere Auszahlung"
        accent="verkaufen"
        headlineTag="h2"
      />

      <div className="bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
              VW Golf verkaufen: Der Praxisleitfaden für ein Volumenmodell mit echten Alltagsfragen
            </h1>

            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Einen <strong>VW Golf verkaufen</strong> zu wollen klingt zuerst einfach. Das Modell ist bekannt, die Nachfrage ist breit, Werkstätten kennen das Auto in- und auswendig.
              Genau deshalb unterschätzen viele Halter den Verkauf: Der Markt ist groß, aber auch hart. Käufer vergleichen dutzende Fahrzeuge, kennen typische Schwachstellen
              und nutzen jedes Detail für Preisabschläge. Wer ohne klare Strategie startet, landet schnell in zähen Verhandlungen.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Für einen stabilen <strong>VW Golf Ankauf</strong> zählt weniger der Modellname allein, sondern wie gut Zustand, Nutzung und Kostenrisiko eingeordnet sind. Ein Golf als
              Pendlerauto mit hoher Laufleistung wird anders bewertet als ein gepflegtes Zweitfahrzeug. Ein Golf mit dokumentiertem Serviceheft bekommt in der Regel bessere
              Konditionen als ein vergleichbares Fahrzeug mit Lücken in der Historie.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10">
              Diese Seite ist bewusst praxisnah aufgebaut: Sie sehen, warum Besitzer ihren Golf verkaufen, welche Probleme den Verkaufszeitpunkt beeinflussen, wann Reparatur
              noch sinnvoll ist und wann ein Direktverkauf wirtschaftlich klarer wird. Wenn Sie <strong>VW Golf schnell verkaufen</strong> möchten, bekommen Sie hier eine belastbare
              Entscheidungsgrundlage statt pauschaler Verkaufsfloskeln.
            </p>

            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8 mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Schnellcheck: In welcher Verkaufssituation befinden Sie sich?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim Golf sehen wir immer wieder die gleichen Ausgangslagen. Wenn Sie sich hier wiederfinden, können Sie den nächsten Schritt gezielt planen statt im Blindflug zu verkaufen.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Hohe Laufleistung, aber noch fahrbereit: Preis sichern bevor mehrere Reparaturen zusammenfallen.</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Erste technische Auffälligkeiten: Reparaturkosten gegen Restwert nüchtern rechnen.</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Unfall- oder Blechschaden: Marktwert realistisch statt emotional bewerten.</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Golf ohne TÜV: Investition in HU/AU nur dann, wenn Mehrerlös die Kosten wirklich deckt.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum verkaufen viele ihren Golf, obwohl das Modell so beliebt ist?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der Golf ist ein klassisches Alltagsauto. Genau das ist sein Vorteil und gleichzeitig der Grund, warum viele Fahrzeuge irgendwann wirtschaftlich kippen: hohe Jahreskilometer,
                Kurzstrecken, wechselnde Fahrer, Stadtverkehr, Parkschäden, steigender Verschleiß. Nicht der eine große Defekt ist das Problem, sondern die Summe kleiner und mittlerer Kosten.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Viele Halter berichten über denselben Verlauf: Erst kommen einzelne Werkstattrechnungen, dann verdichten sich die Intervalle. Gleichzeitig sinkt die Bereitschaft, weiter zu investieren,
                weil der Restwert begrenzt ist. In dieser Phase wird der <strong>VW Golf gebraucht verkaufen</strong>-Gedanke konkret. Wer dann strukturiert handelt, verkauft meist besser als jemand,
                der bis zum akuten Notfall wartet.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Auch Lebenssituationen spielen eine Rolle: Umzug, Familienzuwachs, Dienstwagen, Umstieg auf ein neueres Modell. Dann ist der Golf-Verkauf keine Defektentscheidung,
                sondern eine Timing-Entscheidung. Genau hier lohnt ein professioneller Ankauf mit klarer Preislogik.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Golf-Probleme drücken den Preis am stärksten?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-5">
                Die Antwort hängt von Generation, Motorisierung und Wartung ab. Trotzdem gibt es Muster, die Käufer bei einem Golf besonders kritisch prüfen.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">1) Motor- und Ölthemen bei bestimmten TSI/TDI-Varianten</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Nicht jeder Motor ist betroffen, aber bei einzelnen Baujahren führen Ölverbrauch, Ketten- oder Nebenaggregate-Themen zu Unsicherheit. Sobald Diagnosen vorliegen,
                stellt sich oft die Frage: <strong>VW Golf mit Motorschaden verkaufen</strong> oder investieren? Die Entscheidung sollte nicht emotional fallen, sondern über Kosten, Folgerisiko und Restwert.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">2) DSG- und Getriebeauffälligkeiten</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Ruckeln, verzögertes Schalten oder unruhiges Anfahren führen im Privatmarkt sofort zu Preisdrücken. Für viele Interessenten ist das ein Absprunggrund.
                Im strukturierten Ankauf wird der Zustand technisch eingeordnet, statt nur pauschal abzuwerten.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">3) Fahrwerks- und Bremsverschleiß bei hoher Nutzung</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Gerade bei Stadtprofil oder schlechten Straßen entstehen kumulierte Kosten an Dämpfern, Lagern, Bremsen und Reifen. Einzelteile sind oft bezahlbar,
                die Summe wird jedoch schnell relevant – besonders kurz vor HU-Terminen.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">4) Elektronik- und Komfortthemen</h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Sensorik, Fensterheber, Infotainment, Klimabedienung: oft keine Totalschäden, aber typische Nervkostenthemen. Für Käufer zählt die Frage,
                wie viele kleine Baustellen noch folgen könnten. Transparente Angaben schützen hier vor späteren Streitpunkten.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Golf-Generationen sind im Verkauf besonders sensibel?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim Golf gibt es keinen pauschal „guten“ oder „schlechten“ Jahrgang. Entscheidend ist die Kombination aus Generation, Motor/Getriebe, Nutzung und Pflegezustand.
                Trotzdem sehen wir im Ankauf klare Unterschiede in der Käufererwartung:
              </p>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed mb-4">
                <li><strong>Golf V/VI:</strong> oft preisgetrieben, stark auf Zustand und HU-Status fokussiert, hohe Sensibilität bei Rost und Verschleiß.</li>
                <li><strong>Golf VII:</strong> sehr breite Nachfrage, aber viele Vergleichsangebote. Kleine Mängel führen schneller zu Abschlägen.</li>
                <li><strong>Golf VIII:</strong> jüngere Fahrzeuge mit höherem Preisniveau, dafür kritischere Prüfung von Elektronik und Wartungshistorie.</li>
              </ul>
              <p className="text-slate-700 font-medium leading-relaxed">
                Kurz gesagt: Je austauschbarer das Angebot am Markt ist, desto wichtiger sind belegte Wartung, saubere Zustandsbeschreibung und realistischer Einstiegspreis.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wann ist der beste Zeitpunkt, einen VW Golf zu verkaufen?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der beste Zeitpunkt liegt meist <strong>vor</strong> teuren Kombinationsreparaturen, nicht danach. Wer wartet, bis Motor, Getriebe, Fahrwerk und HU-Themen gleichzeitig anstehen,
                verliert häufig doppelt: durch Reparaturkosten und sinkenden Restwert.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Ein typischer Kippmoment ist erreicht, wenn die nächsten 12 Monate mehrere größere Positionen erwarten lassen. Dann lohnt es sich, den Wagen als
                <strong> VW Golf Probleme verkaufen</strong>-Fall strategisch zu platzieren, statt in eine offene Kostenkette zu geraten.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Praktischer Richtwert: Wenn Sie bei den kommenden Werkstattpunkten bereits überlegen müssen, welche Arbeiten Sie noch aufschieben können,
                ist ein Verkaufscheck jetzt sinnvoll.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Golf kaufen wir konkret an?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">Golf Unfallwagen verkaufen</h3>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">Auch bei Karosserie- oder Rahmenschäden möglich, wenn Zustand und Historie offen dokumentiert sind.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">Golf mit Motorschaden verkaufen</h3>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">Ankauf auch bei deutlichen Motorproblemen oder nicht fahrbereitem Zustand.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">Golf mit Getriebeschaden</h3>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">Schalt- und DSG-Themen schließen den Ankauf nicht aus, sie werden transparent bewertet.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">Golf hoher Kilometerstand verkaufen</h3>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">Hohe Laufleistung ist beim Golf häufig normal und kein automatischer Ausschlussgrund.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">Golf ohne TÜV</h3>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">Auch ohne aktuelle HU/AU können wir ein belastbares Angebot erstellen.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">Ältere Exportfahrzeuge</h3>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">Gerade ältere Golf-Modelle mit Laufleistung sind oft exportgeeignet.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wie läuft der Verkauf in der Praxis ab?</h2>
              <ol className="space-y-4 text-slate-700 font-medium leading-relaxed">
                <li>
                  <strong>1. Daten aufnehmen:</strong> Modell, Baujahr, Kilometerstand, Zustand, bekannte Mängel, Unterlagen.
                </li>
                <li>
                  <strong>2. Transparentes Angebot:</strong> Wir bewerten den Golf anhand Marktdaten, Schadensbild und Verwertbarkeit.
                </li>
                <li>
                  <strong>3. Übergabe und Auszahlung:</strong> Termin, Vertrag, Fahrzeugübernahme und dokumentierte Zahlung – auf Wunsch mit Abholung.
                </li>
              </ol>
              <p className="text-slate-700 font-medium leading-relaxed mt-4">
                Im Unterschied zum klassischen Privatverkauf vermeiden Sie Inserate, Probefahrtorganisation und unsichere Nachverhandlungen.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum entscheiden sich viele Golf-Besitzer für unseren Ankauf?</h2>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li>Wir bewerten den Golf als konkretes Einzelfahrzeug, nicht als Tabellenwert.</li>
                <li>Wir kaufen auch schwierige Zustände: Defekte, Unfall, hohe Laufleistung, ohne TÜV.</li>
                <li>Sie erhalten einen planbaren Ablauf mit klaren Unterlagen und sauberem Zahlungsnachweis.</li>
                <li>Sie sparen Zeit und reduzieren das Risiko aus Privatmarkt-Besichtigungen.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Was erhöht beim Golf den Ankaufpreis unmittelbar?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim Golf sind es oft keine spektakulären Punkte, sondern saubere Grundlagen. Käufer und Ankäufer honorieren vor allem nachvollziehbare Historie:
                Wartungsnachweise, HU-Berichte, Reparaturrechnungen, Schlüsselvollständigkeit und eine ehrliche Zustandsbeschreibung. Diese Transparenz reduziert
                Unsicherheit und damit Preisabschläge.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Besonders bei Fällen wie <strong>VW Golf Unfallwagen verkaufen</strong> oder <strong>VW Golf mit Motorschaden verkaufen</strong> macht Dokumentation einen
                spürbaren Unterschied. Wenn Schadenbild, Diagnose und bisherige Maßnahmen klar belegt sind, entsteht ein belastbarer Preisrahmen. Ohne Nachweise
                kalkuliert der Markt automatisch höhere Risiken ein.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Ein weiterer Hebel ist realistische Preispositionierung. Viele Golf-Verkäufe scheitern nicht am Fahrzeug, sondern an überhöhten Erwartungen beim Start.
                Wer sich marktnah positioniert, erreicht in der Regel schnellere Abschlüsse und vermeidet aggressive Nachverhandlungen. Genau deshalb ist eine frühe,
                strukturierte Bewertung vor dem öffentlichen Inserat oft der wirtschaftlich klügere Weg.
              </p>
            </section>

            <section className="mb-14 rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-orange-50 to-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">Nächster Schritt: Golf jetzt bewerten oder Verkauf direkt starten</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-5">
                Sie möchten den Prozess sofort beginnen? Dann starten Sie mit einer unverbindlichen Bewertung oder gehen direkt in den strukturierten Verkauf.
                Für den Markenvergleich finden Sie zusätzlich unsere Seiten zu <Link href="/vw-verkaufen" className="text-brand-orange font-black hover:underline">VW Ankauf</Link> und
                im <Link href="/modelle" className="text-brand-orange font-black hover:underline">Modelle-Hub</Link> weitere modellbezogene Leitfäden.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/auto-bewerten" className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors">
                  Golf jetzt bewerten
                </Link>
                <Link href="/auto-verkaufen" className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 font-bold text-brand-dark hover:border-brand-orange transition-colors">
                  Golf verkaufen starten
                </Link>
              </div>
            </section>
          </article>

          <FAQSection
            title="FAQ: VW Golf verkaufen"
            faqs={FAQS}
            sectionId="faq-vw-golf-verkaufen"
            className="max-w-4xl mx-auto bg-transparent py-0"
          />
        </div>
      </div>
    </>
  );
}
