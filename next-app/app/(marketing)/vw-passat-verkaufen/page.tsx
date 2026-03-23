import type { Metadata } from 'next';
import Link from 'next/link';
import RouteHero from '@/components/RouteHero';
import FAQSection from '@/components/FAQSection';
import { buildFaqPageSchema } from '@/lib/structuredData';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const MODEL = MODEL_SEO_PAGE_BY_SLUG['vw-passat-verkaufen'];

const FAQS = [
  {
    q: 'Ist ein VW Passat mit sehr hoher Laufleistung noch gut verkäuflich?',
    a: 'Ja. Der Passat ist als Langstrecken- und Firmenfahrzeug etabliert. Hohe Kilometer sind oft akzeptiert, wenn Wartung und Nutzung plausibel dokumentiert sind.',
  },
  {
    q: 'Kaufen Sie Passat Diesel mit EGR- oder DPF-Themen an?',
    a: 'Ja. Solche Themen sind bei bestimmten Nutzungsprofilen bekannt. Wir kaufen auch Passat mit Abgas- oder Regenerationsthemen an und bewerten sie transparent.',
  },
  {
    q: 'Wie gehe ich mit anstehenden Reparaturen vor dem Verkauf um?',
    a: 'Sie sollten vorab prüfen, ob der erwartete Mehrerlös die Reparaturkosten und das Folgerisiko klar übersteigt. Gerade beim Passat ist ein Verkauf vor Kostenballung oft sinnvoll.',
  },
  {
    q: 'Ist ein VW Passat Unfallwagen für den Ankauf geeignet?',
    a: 'Ja. Auch ein Passat Unfallwagen kann angekauft werden, wenn Schadenbild und Reparaturstatus nachvollziehbar sind.',
  },
  {
    q: 'Kann ich einen Passat ohne TÜV verkaufen?',
    a: 'Ja. Auch ohne gültige HU/AU ist ein Verkauf möglich. Wir berücksichtigen den Zustand und die voraussichtlichen Investitionen in der Bewertung.',
  },
  {
    q: 'Wie schnell erfolgt die Auszahlung beim Passat Ankauf?',
    a: 'Nach erfolgreicher Übergabe erfolgt die Auszahlung zügig und dokumentiert. In vielen Fällen ist der Abschluss innerhalb weniger Tage möglich.',
  },
];

export const metadata: Metadata = {
  title: MODEL.seoTitle,
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

export default function VwPassatVerkaufenPage() {
  const faqSchema = buildFaqPageSchema(SITE_URL, MODEL.canonicalPath, FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <RouteHero
        headline="VW Passat verkaufen: hoher Kilometerstand, klare Preislogik"
        subheadline="Praxisfokus auf Langstrecke, Familiennutzung und wirtschaftlich sinnvollen Verkaufszeitpunkt"
        accent="verkaufen"
        headlineTag="h2"
      />

      <div className="bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
              VW Passat verkaufen: Warum gerade bei Vielfahrerprofilen Timing über den Preis entscheidet
            </h1>

            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Der Passat ist in Deutschland ein Klassiker für Langstrecke, Familie und Flotteneinsatz. Genau dadurch entsteht ein spezielles Verkaufsprofil: Viele Fahrzeuge sind technisch solide,
              aber hoch genutzt. Wer einen <strong>VW Passat verkaufen</strong> möchte, muss deshalb nicht nur auf das Baujahr schauen, sondern auf das gesamte Nutzungsmuster der letzten Jahre.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Beim <strong>VW Passat Ankauf</strong> zählt besonders, wie Kilometerstand, Wartung und anstehende Investitionen zusammenwirken. Ein Passat mit 260.000 km kann wirtschaftlich attraktiver
              sein als ein niedriger gelaufenes Fahrzeug mit lückenhafter Historie und mehreren offenen Baustellen. Pauschale Marktwerte greifen bei diesem Modell oft zu kurz.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10">
              Diese Seite richtet sich an Halter, die <strong>VW Passat schnell verkaufen</strong> möchten, ohne in typische Fehler zu laufen: zu spätes Handeln, falsche Reparaturentscheidungen,
              unrealistische Privatmarkt-Erwartungen und unnötige Zeitverluste. Sie erhalten eine klar strukturierte Entscheidungsgrundlage mit Fokus auf Laufleistung, Verschleiß und Restwert.
            </p>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Passat-Nutzungsrealität: Warum dieses Modell anders bewertet werden muss</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Ein Passat ist selten ein reines Freizeitfahrzeug. In der Praxis sehen wir häufig Pendel- und Autobahnprofile, Familienurlaube, Anhängerbetrieb oder gewerbliche Nutzung.
                Das beeinflusst nicht nur den Verschleiß, sondern auch die Käuferpsychologie.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li><strong>Langstrecke:</strong> hohe Kilometer sind akzeptabler, wenn Servicehistorie sauber ist.</li>
                <li><strong>Kurzstrecken-Diesel:</strong> erhöhtes Risiko bei EGR/DPF, daher höhere Preis-Sensibilität.</li>
                <li><strong>Familiennutzung:</strong> Innenraumzustand und Karosseriedetails beeinflussen den Eindruck stark.</li>
                <li><strong>Flottenhintergrund:</strong> Dokumentation ist oft gut, aber Käufer verhandeln konsequent auf Restwertlogik.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Verkaufsgründe sind beim Passat am häufigsten?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Viele Halter verkaufen ihren Passat nicht wegen eines einzigen Defekts. Häufiger ist es eine wirtschaftliche Gesamtentscheidung: mehrere Wartungsthemen kündigen sich an,
                der Kilometerstand überschreitet eine psychologisch wichtige Schwelle, oder ein Fahrzeugwechsel steht ohnehin an.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Typische Auslöser sind steigende Unterhaltskosten im Alter, Diesel-spezifische Risiken bei ungünstigem Profil, Getriebeauffälligkeiten, auslaufende Firmennutzung oder
                der Wunsch nach einem SUV-Format. Der entscheidende Punkt ist nicht „ob“ der Passat noch fährt, sondern wie planbar die nächsten 18 bis 24 Monate bleiben.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Wer in dieser Phase früh verkauft, verhindert oft, dass Restwert und Reparaturdruck gleichzeitig gegen ihn laufen.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Problemzonen im Detail: Was Käufer beim Passat besonders prüfen</h2>

              <h3 className="text-lg font-black text-brand-dark mb-2">Dieselthemen (EGR, DPF, Regeneration)</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Gerade bei gemischter oder kurzer Fahrstrecke können Abgas-Komponenten wirtschaftlich relevant werden. Nicht jedes Warnsignal ist ein Totalschaden,
                aber im Privatmarkt führen solche Hinweise schnell zu aggressiven Abschlägen.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">TSI/TDI-Motorrisiken je nach Generation</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim Passat zählt die genaue Einordnung nach Baujahr und Motorvariante. Ölverbrauch, Nebenaggregate oder thermische Belastung sind nicht pauschal,
                sondern fahrzeugabhängig zu bewerten. Genau deshalb lohnt eine Einzelfallbewertung statt pauschaler Online-Listen.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Getriebe und Antriebsstrang</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                DSG- oder Schaltprobleme werden im Markt direkt eingepreist. Bereits leichte Auffälligkeiten senken die Abschlusswahrscheinlichkeit im Privatverkauf,
                weil Interessenten Folgekosten fürchten.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Fahrwerk, Bremsen, Achsen bei Laufleistung</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Bei Langstrecken- und Familienpassat summieren sich typische Verschleißpositionen. Einzelreparaturen sind selten das Problem,
                entscheidend ist die zeitliche Häufung mehrerer Positionen vor HU und Saisonwechsel.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Elektronik und Komfortsysteme</h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Komfortausstattung macht den Passat attraktiv, erhöht im Alter aber Diagnoseaufwand und Fehlerpotenzial. Käufer kalkulieren diese Unsicherheit konsequent in den Preis ein.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wann sollten Sie den Passat verkaufen, statt weiter zu investieren?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der beste Verkaufszeitpunkt liegt häufig vor einer Kostenballung. Beim Passat bedeutet das: nicht erst warten, bis große Inspektion, Fahrwerk, Bremse,
                Dieselthemen und HU-Prüfung gleichzeitig anstehen.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Wer den Wagen als <strong>VW Passat hoher Kilometerstand verkaufen</strong>-Fall früh positioniert, hat meist mehr Verhandlungsmacht als beim späteren Notverkauf.
                Besonders kritisch sind Situationen, in denen Sie bereits mit „erstmal weiterfahren“ statt klarer Investitionsentscheidung arbeiten.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Faustregel: Wenn die nächsten Werkstatttermine nicht mehr kalkulierbar wirken, ist ein strukturiertes Ankaufangebot oft wirtschaftlich sinnvoller als weiteres Zuwarten.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Reparieren oder verkaufen? Ein Passat-Entscheidungsraster</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Nutzen Sie diese drei Fragen als objektiven Filter:
              </p>
              <ol className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li><strong>Wie hoch ist die sichere Investition jetzt?</strong> Nicht schätzen, sondern mit belastbaren Werkstattwerten rechnen.</li>
                <li><strong>Wie hoch ist das Folgerisiko?</strong> Besonders bei kombinierten Antrieb- und Abgasthemen.</li>
                <li><strong>Welcher Mehrerlös ist realistisch?</strong> Nicht Wunschpreis, sondern Marktpreis nach Reparatur.</li>
              </ol>
              <p className="text-slate-700 font-medium leading-relaxed mt-4">
                Übersteigt der Mehrerlös Investition und Risiko nicht klar, ist der Verkauf häufig die stabilere Option.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Passat kaufen wir an?</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">VW Passat Unfallwagen verkaufen</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">VW Passat mit Motorschaden verkaufen</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">VW Passat mit Getriebeschaden</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">VW Passat hoher Kilometerstand verkaufen</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">VW Passat ohne TÜV</li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">Firmenwagen, Leasingrückläufer, Exportfälle</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Ablauf: So verkaufen Sie Ihren Passat ohne Umwege</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim professionellen Ankauf geht es um Planbarkeit. Statt wochenlangem Inseratprozess erhalten Sie einen klaren Ablauf mit dokumentierter Übergabe.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">1. Fahrzeugdaten senden</h3>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">Modell, Baujahr, Laufleistung, Motor/ Getriebe, bekannte Mängel und Unterlagen.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">2. Angebot erhalten</h3>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">Marktdaten plus technisches Risikoprofil ergeben ein transparentes Ankaufangebot.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-black text-brand-dark mb-2">3. Übergabe + Auszahlung</h3>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">Vertrag, Fahrzeugübernahme, Zahlungsnachweis und auf Wunsch Abholung bundesweit.</p>
                </div>
              </div>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Pendler-Passat oder Familien-Passat: Warum der Nutzungsstil so wichtig ist</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Zwei Passat mit identischer Laufleistung können im Ankauf deutlich unterschiedlich bewertet werden. Ein Pendlerfahrzeug mit langen Autobahnstrecken
                zeigt oft ein anderes Verschleißbild als ein Familienwagen mit häufigem Kurzstreckenbetrieb, Anhängelast und wechselnden Fahrprofilen.
                Genau diese Unterschiede erklären, warum pauschale Preislisten beim Passat häufig an der Realität vorbeigehen.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim Pendlerprofil sind besonders Wartungsintervalle, Ölservice und dokumentierte Langstreckenpflege relevant. Beim Familienprofil werden zusätzlich
                Innenraumzustand, Brems-/Fahrwerksbild und Karosseriedetails stärker gewichtet. Für beide gilt: Transparente Unterlagen sind bei hoher Laufleistung
                der stärkste Hebel, um Vertrauen und Preisstabilität aufzubauen.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Wenn Sie Ihren <strong>VW Passat gebraucht verkaufen</strong> möchten, hilft eine ehrliche Einordnung des tatsächlichen Nutzungsprofils mehr als jede
                kosmetische Aufbereitung. Käufer bewerten nachvollziehbare Historie langfristig positiver als geschönte Einzelpunkte.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Vorbereitung verbessert den Passat-Verkauf sofort?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Die Qualität der Verkaufsunterlagen entscheidet beim Passat oft über mehrere hundert bis tausend Euro Verhandlungsspielraum. Besonders wichtig sind:
                lückenarme Servicehistorie, letzte HU-Berichte, Rechnungen relevanter Arbeiten, dokumentierte Mängel und klare Fahrzeugfotos.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Bei Fällen wie <strong>VW Passat mit Motorschaden verkaufen</strong> oder <strong>VW Passat Unfallwagen verkaufen</strong> sollten Diagnosen und
                Schadendokumentation griffbereit sein. So vermeiden Sie Spekulationsabschläge und halten den Bewertungsprozess sachlich.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Wichtig ist auch eine realistische Preisstrategie: Der „zu hohe Startpreis“ kostet beim Passat häufig Zeit und führt am Ende doch zum stärkeren
                Nachlass. Wer mit klarer Marktlogik startet, erreicht meist den besseren Nettoabschluss in kürzerer Zeit.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Fehler kosten beim Passat am meisten Geld?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der häufigste Fehler ist zu spätes Handeln. Viele Halter erkennen das Kostenrisiko früh, warten aber trotzdem auf einen „besseren Zeitpunkt“.
                In dieser Wartephase steigen oft Laufleistung und Reparaturdruck gleichzeitig. Das verschlechtert den Preisrahmen deutlich schneller als erwartet.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Ein zweiter Fehler ist das Verschweigen bekannter Themen. Beim Passat führen intransparente Angaben zu harten Nachverhandlungen oder abgebrochenen Deals.
                Offene Kommunikation wirkt zunächst ungewohnt, reduziert aber am Ende Preisschwankungen und erhöht die Abschlusswahrscheinlichkeit.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Der dritte Fehler ist die falsche Reparaturreihenfolge vor dem Verkauf: Viele investieren in Positionen mit geringem Erlöshebel und übersehen größere
                Risikotreiber. Besser ist ein strukturierter Vorab-Check, der klärt, welche Maßnahmen tatsächlich verkaufsrelevant sind und welche Kosten Sie besser vermeiden.
              </p>
            </section>

            <section className="mb-14 rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-orange-50 to-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">Passat jetzt verkaufen: mit Klarheit statt Kostenkette</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-5">
                Wenn Sie zwischen weiterer Investition und Verkauf schwanken, starten Sie mit einer unverbindlichen Bewertung. Ergänzend finden Sie auf
                <Link href="/vw-verkaufen" className="text-brand-orange font-black hover:underline"> VW Ankauf</Link> den Markenüberblick und im
                <Link href="/modelle" className="text-brand-orange font-black hover:underline"> Modelle-Hub</Link> die weiteren Modellspezialseiten.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/auto-bewerten" className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors">
                  Passat bewerten
                </Link>
                <Link href="/auto-verkaufen" className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 font-bold text-brand-dark hover:border-brand-orange transition-colors">
                  Passat Verkauf starten
                </Link>
              </div>
            </section>
          </article>

          <FAQSection
            title="FAQ: VW Passat verkaufen"
            faqs={FAQS}
            sectionId="faq-vw-passat-verkaufen"
            className="max-w-4xl mx-auto bg-transparent py-0"
          />
        </div>
      </div>
    </>
  );
}
