import type { Metadata } from 'next';
import Link from 'next/link';
import RouteHero from '@/components/RouteHero';
import FAQSection from '@/components/FAQSection';
import { buildFaqPageSchema } from '@/lib/structuredData';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const MODEL = MODEL_SEO_PAGE_BY_SLUG['audi-a4-verkaufen'];

const FAQS = [
  {
    q: 'Ist der Audi A4 trotz Premium-Image noch schnell verkäuflich?',
    a: 'Ja, aber die Käufer erwarten beim A4 eine klare Historie und technische Transparenz. Mit sauberer Dokumentation ist ein schneller Verkauf gut möglich.',
  },
  {
    q: 'Kaufen Sie Audi A4 mit Motorschaden oder Ölverbrauch?',
    a: 'Ja. Auch ein Audi A4 mit Motorschaden oder deutlichem Ölthema ist ankauffähig. Der Zustand wird modell- und baujahrspezifisch bewertet.',
  },
  {
    q: 'Wie wirkt sich S tronic oder Multitronic-Problematik auf den Ankauf aus?',
    a: 'Getriebeauffälligkeiten beeinflussen den Preis, schließen den Ankauf aber nicht aus. Entscheidend sind Symptomatik, Diagnose und Gesamtzustand.',
  },
  {
    q: 'Lohnt sich Reparatur vor dem Verkauf eines A4?',
    a: 'Nur wenn der erwartete Mehrerlös die Investition und das Folgerisiko klar übersteigt. Bei Premiumfahrzeugen ist diese Rechnung besonders wichtig.',
  },
  {
    q: 'Kann ich einen A4 Unfallwagen oder A4 ohne TÜV verkaufen?',
    a: 'Ja. Unfallfahrzeuge und A4 ohne TÜV kaufen wir ebenfalls an, sofern Zustand und Unterlagen offen beschrieben sind.',
  },
  {
    q: 'Ist Audi A4 Export Ankauf möglich?',
    a: 'Ja, bei geeigneten Fahrzeugen. Vor allem ältere A4 oder Fahrzeuge mit Defekten können für Exportmärkte relevant sein.',
  },
];

export const metadata: Metadata = {
  title: MODEL.seoTitle,
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

export default function AudiA4VerkaufenPage() {
  const faqSchema = buildFaqPageSchema(SITE_URL, MODEL.canonicalPath, FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <RouteHero
        headline="Audi A4 verkaufen: Premium-Anspruch trifft Kostenrealität"
        subheadline="So sichern Sie den Restwert Ihres A4, bevor Reparaturfenster den Verkaufspreis drücken"
        accent="verkaufen"
        headlineTag="h2"
      />

      <div className="bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
              Audi A4 verkaufen: Zwischen Premium-Wert und steigenden Instandhaltungskosten richtig entscheiden
            </h1>

            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Der A4 gilt als seriöser Premium-Allrounder: hochwertiger Innenraum, gute Langstreckenqualitäten, starke Motorpalette. Viele Halter fahren das Modell länger als geplant,
              weil es im Alltag verlässlich wirkt. Genau dadurch entsteht ein typisches Dilemma: Der <strong>Audi A4 verkaufen</strong>-Zeitpunkt wird zu lange verschoben,
              bis mehrere Kostenrisiken gleichzeitig sichtbar werden.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Beim <strong>Audi A4 Ankauf</strong> ist der Markenname allein kein Garant für Toppreise. Käufer rechnen beim A4 besonders kritisch: Laufleistung, Wartung, Getriebezustand,
              Abgas- und Elektronikthemen, Ausstattung und Reparaturhistorie. Wer diese Punkte sauber aufbereitet, verkauft meist schneller und stabiler.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10">
              Diese Seite ist für Verkäufer gedacht, die den A4 nicht „irgendwie“ abgeben wollen, sondern wirtschaftlich präzise. Sie erfahren, warum A4-Halter verkaufen,
              welche Problemcluster am stärksten in den Preis eingreifen, wann Reparatur noch sinnvoll ist und wann ein strukturierter Direktverkauf die bessere Option darstellt.
            </p>

            <section className="mb-12 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Premium-Wagen, Premium-Risiko? Der Kernkonflikt beim A4-Verkauf</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim A4 ist das größte Risiko selten ein einzelner Defekt, sondern eine teure Verdichtung mehrerer Themen. Viele Besitzer investieren schrittweise,
                ohne die Gesamtrechnung zu prüfen. Dadurch wird der Punkt verpasst, an dem Verkauf wirtschaftlich sinnvoller wäre.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Wenn Sie <strong>Audi A4 schnell verkaufen</strong> möchten, sollten Sie die Entscheidung nicht am Bauchgefühl festmachen, sondern an drei Größen:
                sichere Investition, Folgerisiko und realistischer Markterlös.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum verkaufen Audi A4-Besitzer ihr Fahrzeug?</h2>
              <div className="space-y-4 text-slate-700 font-medium leading-relaxed">
                <p>
                  Ein häufiger Grund ist Kostenklarheit: Solange der A4 gut fährt, wird weiter genutzt. Sobald aber Motor-, Getriebe- oder Elektronikthemen im Paket auftreten,
                  kippt die Wirtschaftlichkeit schnell. Dann wird aus einem Premiumgefühl eine Kostenfrage.
                </p>
                <p>
                  Viele Halter wechseln außerdem in neue Mobilitätsprofile: weniger Dienstfahrten, mehr Stadtverkehr, anderer Platzbedarf oder Umstieg auf ein jüngeres Fahrzeug.
                  In solchen Phasen wirkt ein früher Verkauf oft stabiler als spätes Reagieren unter Zeitdruck.
                </p>
                <p>
                  Typisch sind auch Leasing-/Firmenhintergründe oder der Wunsch, den Restwert vor hoher Laufleistung zu sichern. Gerade beim A4 spielt der
                  dokumentierte Pflegezustand eine größere Rolle als beim reinen Volumenmodell.
                </p>
              </div>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Welche A4-Probleme sind für den Ankauf besonders relevant?</h2>

              <h3 className="text-lg font-black text-brand-dark mb-2">Motorseite: Ölverbrauch, thermische Themen, Laufleistungsrisiken</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Je nach Generation und Motorisierung können erhöhte Ölverbräuche oder Folgethemen relevant werden. Nicht jede Auffälligkeit ist kritisch,
                aber im Verkauf wirken unklare Motorbilder sofort preissenkend. Wer einen <strong>Audi A4 mit Motorschaden verkaufen</strong> muss,
                sollte den Zustand offen dokumentieren statt zu beschönigen.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Getriebe: S tronic/Multitronic-Unsicherheit bei Symptomen</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Schaltverhalten, Ruckeln oder Notlauf-Szenarien werden im Privatmarkt hart verhandelt. Ein professioneller Ankauf kann das Risiko differenziert einpreisen,
                statt das Fahrzeug pauschal als „unverkäuflich“ einzustufen.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Elektronik und Komfortsysteme</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim A4 erhöhen Assistenz- und Komfortsysteme den Nutzwert, im Alter aber auch Diagnosekomplexität. Mehrere kleinere Elektronikpunkte
                können wirtschaftlich so relevant werden wie ein mittlerer mechanischer Defekt.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Dieselprofile: EGR/DPF bei ungeeigneter Nutzung</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Besonders bei Kurzstrecken-Diesel entstehen Kostenrisiken in der Abgasnachbehandlung. Für Käufer ist das ein klarer Verhandlungspunkt,
                weil Folgekosten schwer planbar wirken.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Fahrwerk/Bremsen bei Premium-Laufleistung</h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Beim A4 werden Komfort und Präzision erwartet. Entsprechend fällt Verschleiß im Fahrgefühl früh auf und wird beim Verkauf stärker gewichtet
                als bei einfachen Massenmodellen.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Generationenblick: Warum ein A4 nicht gleich A4 ist</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Für die Preisbildung ist die konkrete Generation entscheidend. Käufer unterscheiden klar zwischen älteren Baujahren mit bekannten Kostenfenstern,
                jüngeren Modellen mit hohem Ausstattungswert und Fahrzeugen mit unvollständiger Historie.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li><strong>Ältere Generationen:</strong> hoher Fokus auf Techniknachweise und bereits erledigte Arbeiten.</li>
                <li><strong>Mittlere Baujahre:</strong> große Marktbreite, daher starker Wettbewerb über Zustand und Ausstattung.</li>
                <li><strong>Neuere A4:</strong> höheres Preisniveau, aber kritische Prüfung von Wartung und digitaler Systemhistorie.</li>
              </ul>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wann Audi A4 verkaufen: die entscheidende Kostenphase erkennen</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der beste Zeitpunkt liegt oft vor großen Folgekosten, nicht danach. Sobald mehrere Themen gemeinsam auftreten – etwa Antrieb, Elektronik,
                Fahrwerk und HU-relevante Punkte – sinkt der Restwert oft schneller als erwartet.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Für viele Halter ist der Kipppunkt erreicht, wenn die nächste Investitionsrunde nicht mehr mit „normaler Wartung“ erklärbar ist.
                Dann ist <strong>Audi A4 gebraucht verkaufen</strong> häufig die robustere Entscheidung.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Praktischer Ansatz: Stellen Sie die erwarteten 12-Monats-Kosten dem realistischen Ankaufpreis gegenüber. Wenn der Sicherheitspuffer klein wird,
                ist ein früher Verkauf meist wirtschaftlich sinnvoller.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Audi A4 kaufen wir an?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Audi A4 Unfallwagen verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Ankauf auch bei dokumentierten Unfallschäden.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Audi A4 mit Motorschaden verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Auch bei nicht fahrbereiten Fällen möglich.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Audi A4 mit Getriebeschaden</strong><p className="text-sm text-slate-700 font-medium mt-2">S tronic-/Multitronic-Themen werden differenziert bewertet.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Audi A4 hoher Kilometerstand verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Laufleistung ist kein Ausschluss, solange Historie transparent bleibt.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Audi A4 ohne TÜV</strong><p className="text-sm text-slate-700 font-medium mt-2">Auch ohne HU/AU ankauffähig.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Audi A4 Export Ankauf</strong><p className="text-sm text-slate-700 font-medium mt-2">Für geeignete Fahrzeuge prüfen wir den Exportweg wirtschaftlich.</p></div>
              </div>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum unser Ankauf für A4-Halter oft die bessere Option ist</h2>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li>Premium-Fahrzeuge werden bei uns nicht pauschal, sondern technisch und marktbezogen eingeordnet.</li>
                <li>Wir reduzieren das Risiko langer Privatmarkt-Verhandlungen mit unklaren Abschlusschancen.</li>
                <li>Sie erhalten einen strukturierten Prozess mit Vertrag, Übergabeprotokoll und nachvollziehbarer Auszahlung.</li>
                <li>Auch komplexe Zustände bleiben verkaufbar, ohne dass Sie vorher blind in Reparaturen investieren müssen.</li>
              </ul>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Privatmarkt beim A4: Warum Premium-Käufer härter verhandeln</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim Audi A4 ist der Privatmarkt zwar aktiv, aber anspruchsvoll. Interessenten vergleichen Ausstattung, Pflegehistorie, Laufleistung und bekannte
                Technikthemen sehr genau. Schon kleine Unsicherheiten bei Unterlagen oder Diagnoseberichten führen zu überproportionalen Preisforderungen.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Typisch sind lange Verhandlungsschleifen: erst Probefahrt, dann Werkstattprüfung, danach Nachverhandlung wegen „möglicher Folgekosten“.
                Für Verkäufer bedeutet das oft hohen Zeitaufwand bei unklarer Abschlusswahrscheinlichkeit. Gerade wenn Sie Ihren <strong>Audi A4 schnell verkaufen</strong> möchten,
                kann ein strukturierter Direktankauf die effizientere Route sein.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Entscheidend ist nicht nur der Höchstpreis auf dem Papier, sondern der sichere Nettoabschluss nach Zeit-, Risiko- und Verhandlungskosten.
                Genau hier liegt bei Premiumfahrzeugen häufig der Unterschied zwischen theoretischem und realem Verkaufserfolg.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Unterlagen erhöhen beim A4 den Verkaufserlös messbar?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim A4 haben Unterlagen besonderes Gewicht. Käufer erwarten Premium-Transparenz: Serviceeinträge, Rechnungen, HU-Dokumente, Schlüsselvollständigkeit
                und nachvollziehbare Angaben zu bekannten Mängeln. Fehlende Nachweise erzeugen sofort Risikoabschläge.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Für Fälle wie <strong>Audi A4 mit Motorschaden verkaufen</strong> oder <strong>Audi A4 Unfallwagen verkaufen</strong> sind Diagnose- und Schadendokumente
                zentral. Sie schaffen eine belastbare Preisbasis und reduzieren Spekulationsabschläge im Ankauf.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Zusätzlich sollten Sie die anstehenden 12-Monats-Kosten offen benennen. Diese Ehrlichkeit wirkt im Premiumsegment nicht preissenkend,
                sondern vertrauensbildend – und erhöht häufig die tatsächliche Abschlussqualität.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">A4 verkaufen ohne Premium-Illusionen: Wo der Preis wirklich entsteht</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Viele Verkäufer orientieren sich zu stark an Inseratspitzen. Beim A4 entsteht der reale Verkaufspreis aber aus der technischen Plausibilität:
                Wie sauber sind Wartung und Zustand belegt? Wie hoch ist das kurzfristige Folgerisiko? Wie glaubwürdig ist die Gesamtstory des Fahrzeugs?
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Premium-Image hilft nur dann, wenn Fakten mitziehen. Fehlen Unterlagen oder bleiben Mängel unklar, reagieren Käufer mit Risikoabschlägen,
                die den theoretischen Premiumvorteil schnell neutralisieren. Umgekehrt können transparent dokumentierte A4 selbst bei hoher Laufleistung
                überraschend stabil bewertet werden.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Für den Verkauf bedeutet das: nicht auf den höchsten Wunschpreis fokussieren, sondern auf den sicher erreichbaren Nettoabschluss.
                Diese Perspektive führt beim A4 in der Regel zu besseren Ergebnissen als eine rein emotionale Premium-Argumentation.
              </p>
            </section>

            <section className="mb-14 rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-orange-50 to-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">Audi A4 jetzt bewerten und Verkaufsfenster nutzen</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-5">
                Wenn Sie den idealen Zeitpunkt nicht verpassen möchten, starten Sie jetzt mit einer unverbindlichen Bewertung. Für den Markenkontext finden Sie ergänzend
                <Link href="/audi-verkaufen" className="text-brand-orange font-black hover:underline"> Audi verkaufen</Link> sowie im
                <Link href="/modelle" className="text-brand-orange font-black hover:underline"> Modelle-Hub</Link> weitere modellspezifische Seiten.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/auto-bewerten" className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors">
                  Audi A4 bewerten
                </Link>
                <Link href="/auto-verkaufen" className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 font-bold text-brand-dark hover:border-brand-orange transition-colors">
                  Audi A4 Verkauf starten
                </Link>
              </div>
            </section>
          </article>

          <FAQSection
            title="FAQ: Audi A4 verkaufen"
            faqs={FAQS}
            sectionId="faq-audi-a4-verkaufen"
            className="max-w-4xl mx-auto bg-transparent py-0"
          />
        </div>
      </div>
    </>
  );
}
