import type { Metadata } from 'next';
import Link from 'next/link';
import RouteHero from '@/components/RouteHero';
import FAQSection from '@/components/FAQSection';
import { buildFaqPageSchema } from '@/lib/structuredData';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const MODEL = MODEL_SEO_PAGE_BY_SLUG['skoda-octavia-verkaufen'];

const FAQS = [
  {
    q: 'Ist Skoda Octavia verkaufen bei ueber 200.000 km noch sinnvoll?',
    a: 'Ja. Der Octavia ist als Laufleistungsmodell bekannt. Entscheidend fuer den Ankauf sind Wartungsstand, technischer Zustand und die naechsten zu erwartenden Kosten.',
  },
  {
    q: 'Kaufen Sie Octavia mit DSG oder TSI Problemen?',
    a: 'Ja. Auch bei DSG-Auffaelligkeiten oder TSI-Themen ist ein Ankauf moeglich. Wir kalkulieren den Einzelfall transparent statt pauschal abzuwerten.',
  },
  {
    q: 'Kann ich einen Skoda Octavia mit Motorschaden verkaufen?',
    a: 'Ja. Viele Halter entscheiden sich bei hohem Reparaturrisiko fuer den Direktverkauf. Ein Motorschaden schliesst den Ankauf nicht aus.',
  },
  {
    q: 'Nehmen Sie auch Octavia Unfallwagen und Fahrzeuge ohne TUV?',
    a: 'Ja. Unfallfahrzeuge und Octavia ohne gueltige HU/AU sind ebenfalls ankauffaehig, wenn der Zustand nachvollziehbar beschrieben ist.',
  },
  {
    q: 'Ist Skoda Octavia Export Ankauf moeglich?',
    a: 'Bei geeigneten Fahrzeugen ja. Besonders bei hoher Laufleistung oder aelteren Modellen kann der Exportweg wirtschaftlich sinnvoll sein.',
  },
  {
    q: 'Wie kann ich den Ankaufpreis beim Octavia verbessern?',
    a: 'Mit sauberer Historie, nachvollziehbaren Wartungsnachweisen und einer ehrlichen Mangelbeschreibung. Transparenz reduziert Risikoabschlaege deutlich.',
  },
];

export const metadata: Metadata = {
  title: MODEL.seoTitle,
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

export default function SkodaOctaviaVerkaufenPage() {
  const faqSchema = buildFaqPageSchema(SITE_URL, MODEL.canonicalPath, FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <RouteHero
        headline="Skoda Octavia verkaufen: stark auf Laufleistung, klar im Timing"
        subheadline="Familien- und Vielfahrerprofil richtig bewerten, bevor Kostenpakete den Restwert druecken"
        accent="verkaufen"
        headlineTag="h2"
      />

      <div className="bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
              Skoda Octavia verkaufen: Der High-Mileage-Champion braucht einen Verkauf mit Kilometer-Logik
            </h1>

            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Der Octavia ist fuer viele in Deutschland das pragmatische Gesamtpaket: viel Platz, wirtschaftlicher Verbrauch, solide Alltagstauglichkeit.
              Genau diese Staerken fuehren dazu, dass Fahrzeuge sehr lange gefahren werden. Wer <strong>Skoda Octavia verkaufen</strong> moechte,
              steht deshalb selten am Anfang des Lebenszyklus, sondern meist in einer Phase mit hoher Laufleistung, intensiver Nutzung und steigender
              Kostenkomplexitaet.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Im <strong>Skoda Octavia Ankauf</strong> wirkt Laufleistung nicht automatisch negativ. Entscheidend ist, ob die Historie das Kilometerbild
              traegt und ob die naechsten Investitionen kalkulierbar bleiben. Ein Octavia mit 230.000 km und sauberer Wartung kann stabiler bewertet werden
              als ein Fahrzeug mit weniger Kilometern, aber unklarer Technikgeschichte.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10">
              Diese Seite zeigt Ihnen, wann beim Octavia ein Verkauf wirtschaftlich sinnvoll wird, welche Schwachstellen wirklich preistreibend sind und
              wie Sie auch bei hoher Laufleistung einen belastbaren Abschluss erzielen.
            </p>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Kilometerkonto statt Bauchgefuehl: So denken Octavia-Verkaeufer wirtschaftlich</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim Octavia lautet die Kernfrage selten "faehrt er noch?", sondern "wie teuer wird das naechste Nutzungsjahr?".
                Wer diese Frage frueh stellt, verkauft kontrolliert statt unter Druck.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li><strong>Mehr als 25.000 km pro Jahr:</strong> Verschleisszyklen laufen sichtbar schneller.</li>
                <li><strong>Flotten- oder Pendelprofil:</strong> Technikzustand ist oft besser als Optik, aber nur mit Nachweisen.</li>
                <li><strong>Familiennutzung:</strong> Innenraum- und Fahrwerksverschleiss addieren sich im Wiederverkauf.</li>
                <li><strong>Anstehende HU + groessere Reparaturen:</strong> klassischer Kipppunkt fuer den Verkaufszeitpunkt.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum Octavia-Besitzer verkaufen: hohe Nutzung ist Staerke und Risiko zugleich</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der Octavia wird haeufig als Familienfahrzeug, Vertreterfahrzeug oder Langstreckenauto eingesetzt. Dadurch entstehen hohe Laufleistungen,
                die bei guter Pflege lange kein Problem sind. Irgendwann kippt die Rechnung jedoch: Fahrwerk, Bremsen, Kupplung/DSG, Abgas- oder Motorthemen
                treten nicht einzeln, sondern kombiniert auf.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Viele Halter verkaufen dann nicht wegen eines Images, sondern wegen Planbarkeit. Wer frueh handelt, kann den
                <strong> Skoda Octavia gebraucht verkaufen</strong>-Prozess ruhig steuern. Wer zu lange wartet, verkauft oft erst bei akutem Handlungsdruck.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Besonders bei Firmen- oder Pendelfahrzeugen lohnt der fruehe Vergleich zwischen Restwert heute und erwarteten Kosten der naechsten 12 Monate.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Welche Octavia-Probleme beeinflussen den Preis besonders stark?</h2>

              <h3 className="text-lg font-black text-brand-dark mb-2">DSG-Verhalten unter Lastwechsel</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Ruckeln, Schaltverzoegerung oder unruhiges Anfahren sind im Markt sofort verhandlungsrelevant. Der Octavia ist weit verbreitet,
                Interessenten vergleichen streng und springen bei unklaren Symptomen schnell ab.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">TSI-/TDI-Themen je nach Baujahr und Profil</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Steuerketten-, Oelverbrauchs- oder Abgasthemen betreffen nicht jedes Fahrzeug, wirken aber stark auf die Risikoeinschaetzung.
                Sobald groessere Motorfragen im Raum stehen, wird <strong>Skoda Octavia mit Motorschaden verkaufen</strong> fuer viele zur realistischen Option.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Fahrwerk, Bremsen, Achskomponenten bei hoher Kilometerlast</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Lange Laufleistung bedeutet nicht automatisch schlechte Substanz. Aber verschlissene Lager, Daempfer und Bremsen koennen als Paket teuer werden.
                Genau diese Paketkosten bestimmen den wirtschaftlichen Verkaufszeitpunkt.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Elektrik und Komfortmodule</h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Kleine Elektrikmaengel wirken fuer sich oft harmlos. In Summe erzeugen sie jedoch Unsicherheit und damit Preisabschlaege,
                vor allem bei ohnehin hoher Laufleistung.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wann ist der beste Zeitpunkt, einen Skoda Octavia zu verkaufen?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der beste Zeitpunkt liegt oft vor der naechsten grossen Laufleistungsstufe. Viele Octavia erreichen 200.000 km und mehr, aber genau danach
                steigt die Wahrscheinlichkeit fuer mehrere parallele Investitionen.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Wenn Sie bereits mit Suchbegriffen wie <strong>Skoda Octavia hoher Kilometerstand verkaufen</strong> oder
                <strong> Skoda Octavia Probleme verkaufen</strong> unterwegs sind, ist das meist ein deutliches Signal: Der Marktwert sollte jetzt aktiv gesichert werden,
                bevor neue Reparaturen den Spielraum einengen.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Faustregel: Stehen in den naechsten 6 bis 12 Monaten mindestens zwei groessere Positionen an, ist ein frueher Verkauf meist wirtschaftlich stabiler.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Generationen-Insights: Octavia II, III, IV unterschiedlich lesen</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der Octavia-Markt ist generationenscharf. Deshalb sollten Sie nicht nur auf allgemeine Preisportale schauen, sondern auf konkrete Baujahreslogik.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li><strong>Octavia II:</strong> stark kostengetrieben, HU- und Substanzthemen entscheidend.</li>
                <li><strong>Octavia III:</strong> sehr breite Marktmasse, starke Vergleichbarkeit und damit hohe Preissensitivitaet.</li>
                <li><strong>Octavia IV:</strong> juengeres Preisniveau, aber kritische Pruefung von Service und Elektronikstatus.</li>
              </ul>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Skoda Octavia kaufen wir an?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Skoda Octavia Unfallwagen verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Ankauf auch bei dokumentierten Unfallschaeden.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Skoda Octavia mit Motorschaden verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Auch bei deutlichen Motorthemen oder Ausfall moeglich.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Octavia mit DSG/Getriebeschaden</strong><p className="text-sm text-slate-700 font-medium mt-2">Getriebeprobleme werden transparent im Angebot beruecksichtigt.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Skoda Octavia gebraucht verkaufen bei hoher Laufleistung</strong><p className="text-sm text-slate-700 font-medium mt-2">Laufleistung wird mit Historie und Zustand gemeinsam bewertet.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Octavia ohne TUV</strong><p className="text-sm text-slate-700 font-medium mt-2">Auch ohne aktuelle HU/AU ankauffaehig.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Skoda Octavia Export Ankauf</strong><p className="text-sm text-slate-700 font-medium mt-2">Bei passenden Profilen pruefen wir den Exportweg.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Preis sichern: Diese Unterlagen zahlen sich beim Octavia besonders aus</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Beim Octavia bringt Dokumentation messbar Geld: Serviceheft, Rechnungen, HU-Berichte, Schluesselvollstaendigkeit und eine ehrliche Auflistung
                bekannter Maengel. Gerade bei hoher Laufleistung reduziert das Risikoaufschlaege und beschleunigt den Abschluss.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Fuer Anfragen wie <strong>Skoda Octavia schnell verkaufen</strong> gilt: Nicht der theoretische Inseratshoestpreis ist entscheidend,
                sondern der sichere Nettoabschluss nach Zeit-, Risiko- und Nachverhandlungskosten.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Eine fruehe, strukturierte Bewertung schafft genau diese Klarheit.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wie laeuft der Verkauf ab?</h2>
              <ol className="space-y-4 text-slate-700 font-medium leading-relaxed">
                <li><strong>1. Fahrzeugprofil melden:</strong> Baujahr, Kilometerstand, Motor/Getriebe, Zustand und Unterlagen.</li>
                <li><strong>2. Markt- und Technikbewertung:</strong> Transparentes Angebot auf Basis echter Nachfrage und Risiken.</li>
                <li><strong>3. Uebergabe mit Auszahlung:</strong> Vertrag, Termin und dokumentierte Zahlung inklusive optionaler Abholung.</li>
              </ol>
            </section>

            <section className="mb-14 rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-orange-50 to-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">Skoda Octavia jetzt bewerten und Kilometer-Timing nutzen</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-5">
                Wenn Sie den Restwert Ihres Octavia vor der naechsten Kostenwelle sichern wollen, starten Sie jetzt mit einer unverbindlichen Bewertung.
                Mehr Kontext finden Sie auf <Link href="/skoda-verkaufen" className="text-brand-orange font-black hover:underline">Skoda verkaufen</Link>
                und im <Link href="/modelle" className="text-brand-orange font-black hover:underline">Modelle-Hub</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/auto-bewerten" className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors">
                  Octavia jetzt bewerten
                </Link>
                <Link href="/auto-verkaufen" className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 font-bold text-brand-dark hover:border-brand-orange transition-colors">
                  Octavia Verkauf starten
                </Link>
              </div>
            </section>
          </article>

          <FAQSection
            title="FAQ: Skoda Octavia verkaufen"
            faqs={FAQS}
            sectionId="faq-skoda-octavia-verkaufen"
            className="max-w-4xl mx-auto bg-transparent py-0"
          />
        </div>
      </div>
    </>
  );
}
