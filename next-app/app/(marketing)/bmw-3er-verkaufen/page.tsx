import type { Metadata } from 'next';
import Link from 'next/link';
import RouteHero from '@/components/RouteHero';
import FAQSection from '@/components/FAQSection';
import { buildFaqPageSchema } from '@/lib/structuredData';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const MODEL = MODEL_SEO_PAGE_BY_SLUG['bmw-3er-verkaufen'];

const FAQS = [
  {
    q: 'Ist der BMW 3er trotz höherer Unterhaltskosten gefragt?',
    a: 'Ja. Der 3er bleibt sehr gefragt, aber Käufer prüfen technische Risiken genau. Eine ehrliche Zustandsdarstellung ist entscheidend für einen stabilen Abschluss.',
  },
  {
    q: 'Kaufen Sie BMW 3er mit Motorschaden an?',
    a: 'Ja. Auch ein BMW 3er mit Motorschaden ist ankauffähig. Wir bewerten den Zustand differenziert nach Baureihe, Motor und Schadensbild.',
  },
  {
    q: 'Wie relevant sind Getriebe- und Fahrwerksthemen beim 3er-Verkauf?',
    a: 'Sehr relevant. Gerade bei sportlich genutzten Fahrzeugen werden Schalt-/Automatikverhalten und Fahrwerkszustand stark in den Ankaufpreis eingerechnet.',
  },
  {
    q: 'Sollte ich vor dem Verkauf noch in größere Reparaturen investieren?',
    a: 'Nur bei klarer Mehrerlösrechnung. Beim BMW 3er können Investitionen schnell steigen, ohne den Verkaufspreis im gleichen Maß zu erhöhen.',
  },
  {
    q: 'Kann ich einen 3er Unfallwagen oder einen 3er ohne TÜV verkaufen?',
    a: 'Ja. Unfallfahrzeuge und 3er ohne gültige HU/AU kaufen wir ebenfalls an, wenn Zustand und Unterlagen transparent sind.',
  },
  {
    q: 'Ist auch BMW 3er Export Ankauf möglich?',
    a: 'Ja, je nach Fahrzeugprofil und Zustand kann ein Exportweg sinnvoll sein und in die Ankaufstrategie einfließen.',
  },
];

export const metadata: Metadata = {
  title: MODEL.seoTitle,
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

export default function Bmw3erVerkaufenPage() {
  const faqSchema = buildFaqPageSchema(SITE_URL, MODEL.canonicalPath, FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <RouteHero
        headline="BMW 3er verkaufen: Fahrfreude endet, Kostenlogik beginnt"
        subheadline="So treffen Sie beim 3er die richtige Entscheidung zwischen Emotion und wirtschaftlicher Vernunft"
        accent="verkaufen"
        headlineTag="h2"
      />

      <div className="bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
              BMW 3er verkaufen: Wenn Fahrspaß und Unterhaltsrealität auseinanderlaufen
            </h1>

            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Für viele Fahrer ist der 3er mehr als ein Auto. Er steht für Lenkpräzision, Dynamik und das Gefühl, aktiv zu fahren statt nur zu rollen. Genau deshalb fällt
              die Entscheidung schwer, einen <strong>BMW 3er verkaufen</strong> zu wollen. In der Praxis kippt der Moment oft erst dann, wenn wiederkehrende Werkstattkosten
              den emotionalen Mehrwert überholen.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Beim <strong>BMW 3er Ankauf</strong> zählt nicht nur der Modellname, sondern vor allem die technische Gesamtlage: Motorzustand, Getriebeverhalten,
              Fahrwerksverschleiß, Elektronikbild, Laufleistung, Wartungsbelege und Nutzungshistorie. Bei sportlich gefahrenen Fahrzeugen wird jeder Punkt besonders kritisch geprüft.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10">
              Diese Seite verbindet genau diese Perspektiven: den emotionalen Wert des 3ers und die wirtschaftliche Realität im Alter. Sie hilft Ihnen,
              den richtigen Zeitpunkt zu erkennen, um <strong>BMW 3er schnell verkaufen</strong> zu können – ohne überstürzten Notverkauf und ohne unnötige Reparaturspirale.
            </p>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Typische Fahrerprofile beim 3er: Warum Nutzung den Preis so stark bestimmt</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim 3er sehen wir in der Bewertung stark unterschiedliche Nutzungsszenarien, die den Ankaufpreis direkt beeinflussen.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li><strong>Daily Driver mit hoher Laufleistung:</strong> robust im Alltag, aber mit kumuliertem Verschleiß.</li>
                <li><strong>Sportlich bewegtes Fahrzeug:</strong> oft guter Pflegezustand, aber erhöhtes Risiko bei Fahrwerk und Antriebsstrang.</li>
                <li><strong>Langstreckenprofil:</strong> kann technisch stabil sein, benötigt aber saubere Service-Nachweise.</li>
                <li><strong>Stadtnutzung:</strong> mehr Stop-and-go, häufig höherer Brems- und Kupplungsverschleiß.</li>
              </ul>
              <p className="text-slate-700 font-medium leading-relaxed mt-4">
                Der 3er ist deshalb ein klassischer Fall für differenzierte Bewertung statt Pauschalpreis.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum entscheiden sich viele 3er-Halter für den Verkauf?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Häufig ist es keine spontane Entscheidung. Der Ablauf ist oft ähnlich: Das Auto macht noch Spaß, aber die Kosten werden unplanbarer.
                Erst einzelne Reparaturen, dann engere Intervalle, danach die Frage: weiter investieren oder jetzt verkaufen?
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Weitere Gründe sind Lebensveränderungen, höherer Platzbedarf, Umstieg auf andere Fahrzeugklassen oder der Wunsch, vor einer großen Kostenrunde auszusteigen.
                Bei vielen 3er-Besitzern ist der Verkauf am Ende eine saubere Risikoentscheidung, kein Aufgeben von Fahrfreude.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Genau hier setzt ein strukturierter Ankaufprozess an: Sie behalten Kontrolle und reduzieren das Risiko, den Wagen erst nach dem teuren Kipppunkt abzugeben.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Die entscheidenden 3er-Schwachstellen aus Verkaufssicht</h2>

              <h3 className="text-lg font-black text-brand-dark mb-2">Motorseitige Risiken je nach Baureihe</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Nicht jede Baureihe zeigt dieselben Themen, doch Motorprobleme bleiben der größte Preishebel. Wenn Schäden bereits konkret sind,
                wird aus der Reparaturfrage schnell die Entscheidung <strong>BMW 3er mit Motorschaden verkaufen</strong>.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Getriebe und Antriebsstrang</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Ob Schalter oder Automatik: Ruckeln, Verzögerungen oder Geräusche werden im Markt unmittelbar eingepreist. Käufer kalkulieren beim 3er
                häufig höhere Folgekosten als bei einfachen Kompaktwagen.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Fahrwerk, Lenkung, Bremsen bei dynamischer Nutzung</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der fahraktive Charakter des 3ers bedeutet oft auch höheren Anspruch an das Fahrwerksbild. Kleinere Auffälligkeiten,
                die bei anderen Modellen toleriert werden, führen hier schneller zu Abschlägen.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Elektronik und Komforttechnik</h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Sensorik, Assistenz, Infotainment und Komfortmodule können bei alternden Fahrzeugen Kosten erzeugen,
                die in Summe wirtschaftlich relevanter sind als einzelne große Reparaturen.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wann sollten Sie den BMW 3er verkaufen?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der optimale Zeitpunkt liegt oft vor einer verketteten Kostenphase. Wenn Motor-/Getriebe-Themen, Fahrwerksarbeiten und HU-nahe Positionen
                zeitlich zusammenrücken, sinkt die Wirtschaftlichkeit schnell.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Viele Halter warten zu lange, weil das Auto noch „gut fährt“. Genau das ist beim 3er gefährlich: Fahrfreude kaschiert häufig,
                dass die nächste Investitionsrunde den Restwert bereits überholt.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Wer früh handelt, kann den <strong>BMW 3er gebraucht verkaufen</strong>-Prozess sauber steuern, statt unter Werkstatt- und Termindruck zu verkaufen.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche 3er-Varianten kaufen wir an?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4"><strong>BMW 3er Unfallwagen verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Ankauf auch bei dokumentierten Unfallschäden.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>BMW 3er mit Motorschaden verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Auch bei nicht fahrbereitem Zustand möglich.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>BMW 3er mit Getriebeschaden</strong><p className="text-sm text-slate-700 font-medium mt-2">Schalt- und Automatikprobleme werden transparent eingepreist.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>BMW 3er hoher Kilometerstand verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Laufleistung ist kein Ausschlusskriterium bei nachvollziehbarer Historie.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>BMW 3er ohne TÜV</strong><p className="text-sm text-slate-700 font-medium mt-2">Auch ohne aktuelle HU/AU ankauffähig.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>BMW 3er Export Ankauf</strong><p className="text-sm text-slate-700 font-medium mt-2">Für bestimmte Fahrzeuge prüfen wir den Exportweg als Option.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Verkaufsprozess: klar, schnell, rechtssicher</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Wenn Sie den 3er ohne Inseratstress verkaufen möchten, läuft der Prozess in drei klaren Schritten:
              </p>
              <ol className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li><strong>1. Daten + Zustand:</strong> Baureihe, Laufleistung, Ausstattung, bekannte Punkte, Unterlagen.</li>
                <li><strong>2. Marktgerechtes Angebot:</strong> Bewertung auf Basis von Nachfrage, Technik und Restwertrisiko.</li>
                <li><strong>3. Übergabe + Auszahlung:</strong> Dokumentierter Abschluss mit optionaler Abholung.</li>
              </ol>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum unser 3er-Ankauf für viele die beste Lösung ist</h2>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li>Wir betrachten den 3er technisch differenziert statt über pauschale Preislisten.</li>
                <li>Sie vermeiden unproduktive Besichtigungen und aggressive Privatmarkt-Nachverhandlungen.</li>
                <li>Auch komplexe Defektfälle bleiben verkaufbar und werden nachvollziehbar bewertet.</li>
                <li>Der Abschluss ist rechtssicher dokumentiert und finanziell planbar.</li>
              </ul>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">3er-Baureihen im Vergleich: Warum E90, F30 und G20 anders ticken</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim 3er ist die Baureihe ein zentraler Preisfaktor. E90-Fahrzeuge werden oft stark über Zustand und Reparaturhistorie verkauft,
                während F30 und G20 stärker über Technikbild, Ausstattung und digitale Service-Transparenz bewertet werden.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Für ältere 3er ist die Frage häufig: Wie belastbar ist die Substanz? Bei jüngeren Baureihen lautet sie eher: Wie sauber ist die Historie und
                welche Kostenrisiken könnten kurzfristig auftreten? Genau diese unterschiedliche Käuferlogik erklärt, warum ein einheitlicher „3er-Preis“
                selten sinnvoll ist.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Wenn Sie den passenden Verkaufszeitpunkt treffen möchten, sollte die Bewertung immer baureihen- und zustandsbezogen erfolgen –
                nicht nur über Marke und Laufleistung.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wie verkaufen Sie einen emotionalen Fahrerwagen ohne Geld liegen zu lassen?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Gerade beim 3er spielt Emotion im Verkauf eine große Rolle. Viele Halter argumentieren über Fahrgefühl, Investitionen und Markenbindung.
                Käufer dagegen rechnen nüchtern über Risiko, Wartung und Folgekosten. Diese Perspektivlücke führt oft zu zähen Preisgesprächen.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der beste Weg ist eine doppelte Strategie: emotionale Stärken klar benennen, aber technische Fakten vollständig offenlegen.
                Bei Fällen wie <strong>BMW 3er mit Motorschaden verkaufen</strong> oder <strong>BMW 3er Unfallwagen verkaufen</strong> sind transparente Nachweise
                wichtiger als jede Story. So entsteht Vertrauen statt Spekulation.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Wer diesen Spagat beherrscht, erzielt beim 3er oft den besseren Nettoabschluss: weniger Zeitverlust, weniger Nachverhandlung und mehr Abschlusssicherheit.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">3er mit hoher Laufleistung: verkaufen oder weiterfahren?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Eine hohe Laufleistung ist beim 3er kein automatischer Nachteil, aber ein klares Signal für die nächste Kostenphase. Entscheidend ist,
                ob die Wartungshistorie tragfähig ist und welche Investitionen in den kommenden 12 bis 18 Monaten realistisch anstehen.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Bei <strong>BMW 3er hoher Kilometerstand verkaufen</strong>-Fällen ist die Kernfrage: Bleibt der Wagen planbar oder häufen sich unklare Risiken?
                Wenn Motor, Fahrwerk, Bremsbild und Elektronik gleichzeitig Aufmerksamkeit verlangen, wird Weiterfahren oft teurer als erwartet.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Ein früher Verkauf kann deshalb wirtschaftlich sinnvoller sein als „noch ein Jahr halten“. Wer den Zeitpunkt aktiv steuert, verkauft aus Stärke
                und nicht unter Druck einer akuten Reparaturentscheidung.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mt-4">
                Besonders hilfreich ist ein nüchterner Vergleich zwischen zwei Szenarien: Weiterfahren mit erwarteten Kostenblöcken versus zeitnaher Verkauf mit
                gesichertem Restwert. Beim 3er zeigt sich dabei oft, dass nicht die einzelne Rechnung entscheidend ist, sondern die Kombination aus Werkstattkosten,
                Ausfallrisiko und Zeitverlust. Diese Gesamtsicht schützt vor emotionalen Entscheidungen und sorgt für einen wirtschaftlich saubereren Abschluss.
              </p>
            </section>

            <section className="mb-14 rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-orange-50 to-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">BMW 3er jetzt bewerten und Verkaufszeitpunkt aktiv steuern</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-5">
                Wenn Sie den Spagat zwischen Emotion und Vernunft sauber lösen möchten, starten Sie jetzt mit einer unverbindlichen Bewertung.
                Ergänzend finden Sie den Markenüberblick auf <Link href="/bmw-verkaufen" className="text-brand-orange font-black hover:underline">BMW verkaufen</Link>
                sowie alle Modellspezialseiten im <Link href="/modelle" className="text-brand-orange font-black hover:underline">Modelle-Hub</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/auto-bewerten" className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors">
                  BMW 3er bewerten
                </Link>
                <Link href="/auto-verkaufen" className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 font-bold text-brand-dark hover:border-brand-orange transition-colors">
                  BMW 3er Verkauf starten
                </Link>
              </div>
            </section>
          </article>

          <FAQSection
            title="FAQ: BMW 3er verkaufen"
            faqs={FAQS}
            sectionId="faq-bmw-3er-verkaufen"
            className="max-w-4xl mx-auto bg-transparent py-0"
          />
        </div>
      </div>
    </>
  );
}
