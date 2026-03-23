import type { Metadata } from 'next';
import Link from 'next/link';
import RouteHero from '@/components/RouteHero';
import FAQSection from '@/components/FAQSection';
import { buildFaqPageSchema } from '@/lib/structuredData';
import { MODEL_SEO_PAGE_BY_SLUG } from '@/lib/modelSeoPages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.meinautoverkauf.de';
const MODEL = MODEL_SEO_PAGE_BY_SLUG['ford-focus-verkaufen'];

const FAQS = [
  {
    q: 'Wie schnell kann ich meinen Ford Focus verkaufen?',
    a: 'Mit kompletten Fahrzeugdaten ist ein Verkauf oft in wenigen Tagen moglich. Bei deutlichen Defekten braucht die Bewertung etwas mehr technische Einordnung.',
  },
  {
    q: 'Kaufen Sie auch Ford Focus mit EcoBoost Problemen?',
    a: 'Ja. Wir kaufen auch Focus mit EcoBoost-bezogenen Themen wie Kuhlmittelverlust, Zahnriemenproblemen oder Leistungsverlust. Der Zustand wird transparent bewertet.',
  },
  {
    q: 'Ist Ford Focus mit Motorschaden verkaufen sinnvoll?',
    a: 'In vielen Fallen ja. Wenn Reparaturkosten den Restwert stark belasten, ist ein strukturierter Ankauf oft wirtschaftlicher als weitere Werkstattschritte.',
  },
  {
    q: 'Nehmen Sie Focus Unfallwagen oder Focus ohne TUV?',
    a: 'Ja. Auch Ford Focus Unfallwagen und Fahrzeuge ohne gueltige HU/AU sind ankauffaehig. Entscheidend ist eine saubere Zustandsbeschreibung.',
  },
  {
    q: 'Was bedeutet hoher Kilometerstand beim Focus fur den Preis?',
    a: 'Hohe Laufleistung fuehrt nicht automatisch zum Ausschluss. Entscheidend sind Wartung, Gesamtzustand, Motor/Getriebe und die zu erwartenden Folgekosten.',
  },
  {
    q: 'Ist Ford Focus Export Ankauf ebenfalls moeglich?',
    a: 'Bei passenden Fahrzeugen ja. Gerade aeltere oder reparaturbeduerftige Modelle koennen ueber Exportkanaele sinnvoll verwertet werden.',
  },
];

export const metadata: Metadata = {
  title: MODEL.seoTitle,
  description: MODEL.seoDescription,
  alternates: { canonical: MODEL.canonicalPath },
};

export default function FordFocusVerkaufenPage() {
  const faqSchema = buildFaqPageSchema(SITE_URL, MODEL.canonicalPath, FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <RouteHero
        headline="Ford Focus verkaufen: starke Alltagstugenden, versteckte Kostenfenster"
        subheadline="So erkennen Sie die Mid-Life-Phase, bevor Reparaturen den Verkaufspreis deutlich druecken"
        accent="verkaufen"
        headlineTag="h2"
      />

      <div className="bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
              Ford Focus verkaufen: Der ausgewogene Kompaktwagen mit einer oft unterschaetzten Mid-Life-Phase
            </h1>

            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Der Focus gilt als vernuenftiger Allrounder: genug Platz, solide Fahrdynamik, alltagstaugliche Kosten. Genau deshalb halten viele Besitzer ihr
              Fahrzeug laenger als geplant. Wer <strong>Ford Focus verkaufen</strong> moechte, startet oft erst dann aktiv, wenn mehrere Reparaturpunkte gleichzeitig
              sichtbar werden. Dann wird aus einem vermeintlich einfachen Verkauf schnell eine Zeit- und Preisfrage.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-5">
              Im <strong>Ford Focus Ankauf</strong> spielt nicht nur die Laufleistung eine Rolle, sondern vor allem der technische Verlauf der letzten Jahre:
              Motorverhalten, Getriebebild, Elektrik, Fahrwerk, Servicehistorie. Das gilt besonders fuer Fahrzeuge in der "Mid-Life-Phase" zwischen hohem Alltagseinsatz
              und steigenden Instandhaltungskosten. Wer diesen Punkt frueh erkennt, kann den Restwert deutlich besser sichern.
            </p>
            <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10">
              Diese Seite zeigt Ihnen, warum Focus-Besitzer verkaufen, welche versteckten Schwachstellen aus Verkaufssicht wirklich relevant sind und wie Sie den
              richtigen Zeitpunkt fuer einen wirtschaftlich sauberen Abschluss finden.
            </p>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Schnelle Mid-Life-Diagnose: Ist Ihr Focus noch planbar oder schon in der Kostenzone?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Bevor Sie ein Inserat starten, lohnt eine kurze Standortbestimmung. Beim Focus entscheidet oft nicht der eine Defekt, sondern die Kombination
                aus mehreren mittelgrossen Baustellen.
              </p>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li><strong>Signal 1:</strong> Wiederholte Werkstatttermine in kurzen Abstaenden.</li>
                <li><strong>Signal 2:</strong> Unsicherheit bei Motorlauf, Kuehlmittel, Leistungsverhalten oder Startverhalten.</li>
                <li><strong>Signal 3:</strong> Getriebe-/Kupplungsauffaelligkeiten bei Anfahren oder Lastwechseln.</li>
                <li><strong>Signal 4:</strong> HU-nahe Positionen plus Fahrwerk/Bremsen stehen gleichzeitig an.</li>
                <li><strong>Signal 5:</strong> Die naechsten 12 Monate sind kostenmaessig nicht mehr klar kalkulierbar.</li>
              </ul>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-5">Welche Focus-Probleme sind im Ankauf besonders preisrelevant?</h2>

              <h3 className="text-lg font-black text-brand-dark mb-2">EcoBoost-Themen: Kuehlung und Zahnriemenlogik</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Bei bestimmten Motorisierungen werden Kuehlmittelverlust, thermische Belastung oder Riemenfragen diskutiert. Nicht jedes Fahrzeug ist betroffen,
                aber unklare Motorbilder fuehren im Privatmarkt schnell zu pauschalem Misstrauen. Genau deshalb fragen viele nach
                <strong> Ford Focus mit Motorschaden verkaufen</strong>, sobald erste Warnzeichen auftreten.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Getriebe und Kupplung im Pendelalltag</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der Focus wird haeufig als Pendlerauto genutzt. Viele Lastwechsel, Stadtverkehr und gelegentliche Langstrecke erzeugen ein gemischtes Profil,
                bei dem Schalt- oder Automatikauffaelligkeiten frueh in die Preisverhandlung einfliessen.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Elektrik und Komfortmodule</h3>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Sensoren, Bordelektronik, Fensterheber oder Assistenzfunktionen erzeugen oft keine Totalausfaelle, aber sie verschlechtern das Risikoempfinden
                von Kaeufern. Das senkt die Abschlusswahrscheinlichkeit im Privatmarkt deutlich.
              </p>

              <h3 className="text-lg font-black text-brand-dark mb-2">Dieselprofile mit EGR/DPF-Belastung</h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Vor allem bei unguenstigem Fahrprofil koennen Abgasnachbehandlungsthemen entstehen. Im Verkauf zaehlt dann nicht nur der aktuelle Zustand,
                sondern die Frage, ob Folgekosten bereits absehbar sind.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum Focus-Besitzer verkaufen: nicht wegen Image, sondern wegen Timing</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Viele Fahrer schaetzen den Focus als ausgewogene Mischung aus Komfort und Wirtschaftlichkeit. Verkauft wird deshalb selten impulsiv. Meist geht es
                um einen Punkt, an dem Aufwand und Nutzen nicht mehr zusammenpassen: steigende Reparaturkosten, geaendertes Fahrprofil, neuer Dienstwagen oder
                Umstieg auf ein anderes Segment.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der haeufigste Fehler ist "noch ein Jahr weiterfahren", obwohl bereits klar ist, dass mehrere Kostenblocke anstehen. Genau in dieser Phase
                wird <strong>Ford Focus gebraucht verkaufen</strong> oft zur besseren Entscheidung, weil Sie noch aus einer aktiven Position verkaufen und nicht unter Druck.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Wer die Mid-Life-Phase erkennt und nicht verdrangt, sichert in der Regel einen stabileren Nettoerloes.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wann sollten Sie einen Ford Focus verkaufen?</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Der beste Zeitpunkt liegt oft vor der zweiten grossen Reparaturwelle. Nach vielen Jahren Nutzung steigt die Wahrscheinlichkeit, dass Motor,
                Getriebe, Fahrwerk und HU-relevante Punkte innerhalb kurzer Zeit zusammenkommen.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed mb-4">
                Sobald Sie mehrere ungeklaerte Technikpunkte plus hohen Kilometerstand haben, ist <strong>Ford Focus hoher Kilometerstand verkaufen</strong>
                meist klueger als weiteres Hinausschieben. Hohe Laufleistung ist kein Ausschlusskriterium, aber sie macht die Zeitkomponente wichtiger.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                Kurz: Verkaufen, solange das Fahrzeug noch als "planbar" gilt, nicht erst bei akuter Werkstattabhaengigkeit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Generationenblick: Focus II, III und IV unterschiedlich bewerten</h2>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed mb-4">
                <li><strong>Focus II:</strong> stark preisgetrieben, Zustand und HU sind kaufentscheidend.</li>
                <li><strong>Focus III:</strong> breite Marktstreuung, technische Nachweise wirken stark auf den Preis.</li>
                <li><strong>Focus IV:</strong> juengere Fahrzeuge mit hoeherem Niveau, dafuer kritischere Pruefung von Historie und Elektronikbild.</li>
              </ul>
              <p className="text-slate-700 font-medium leading-relaxed">
                Deshalb ist ein pauschaler "Focus Preis" selten belastbar. Relevanter ist die konkrete Kombination aus Motor, Laufleistung, Wartung und Nutzungsprofil.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Welche Ford Focus kaufen wir an?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Ford Focus Unfallwagen verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Ankauf auch bei dokumentierten Unfallschaeden.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Ford Focus mit Motorschaden verkaufen</strong><p className="text-sm text-slate-700 font-medium mt-2">Auch nicht fahrbereite Fahrzeuge sind ankauffaehig.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Focus mit Getriebeschaden</strong><p className="text-sm text-slate-700 font-medium mt-2">Schalt- oder Automatikthemen werden transparent eingepreist.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Ford Focus gebraucht verkaufen bei hoher Laufleistung</strong><p className="text-sm text-slate-700 font-medium mt-2">Hohe Kilometer werden mit Wartung und Zustand zusammen bewertet.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Focus ohne TUV</strong><p className="text-sm text-slate-700 font-medium mt-2">Auch ohne aktuelle HU/AU erhalten Sie ein belastbares Angebot.</p></div>
                <div className="rounded-2xl border border-slate-200 p-4"><strong>Ford Focus Export Ankauf</strong><p className="text-sm text-slate-700 font-medium mt-2">Bei passenden Fahrzeugen pruefen wir den Exportweg.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Wie laeuft der Focus-Verkauf bei uns ab?</h2>
              <div className="space-y-4 text-slate-700 font-medium leading-relaxed">
                <p><strong>Schritt 1:</strong> Sie uebermitteln Fahrzeugdaten, bekannte Maengel und vorhandene Unterlagen.</p>
                <p><strong>Schritt 2:</strong> Wir erstellen ein transparentes Angebot mit nachvollziehbarer Preislogik.</p>
                <p><strong>Schritt 3:</strong> Nach Terminabstimmung erfolgt Uebergabe, Vertrag und dokumentierte Auszahlung.</p>
              </div>
              <p className="text-slate-700 font-medium leading-relaxed mt-4">
                Der Vorteil gegenueber privatem Inserieren: weniger Leerlauf, weniger Nachverhandlung, klarer Abschluss.
              </p>
            </section>

            <section className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">Warum unser Ford Focus Ankauf fuer viele wirtschaftlich sinnvoller ist</h2>
              <ul className="space-y-3 text-slate-700 font-medium leading-relaxed">
                <li>Technische Einordnung statt pauschaler Preisabschlaege.</li>
                <li>Ankauf auch bei Defekten, Unfall, hoher Laufleistung oder ohne TUV.</li>
                <li>Planbarer Prozess mit rechtssicherer Dokumentation.</li>
                <li>Schnelle Auszahlung und auf Wunsch Abholung in vielen Regionen.</li>
              </ul>
            </section>

            <section className="mb-14 rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-orange-50 to-white p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">Ford Focus jetzt bewerten und Mid-Life-Risiken aktiv steuern</h2>
              <p className="text-slate-700 font-medium leading-relaxed mb-5">
                Wenn Sie nicht warten wollen, bis die naechste Kostenrunde startet, beginnen Sie jetzt mit einer unverbindlichen Bewertung.
                Weiterfuehrend finden Sie <Link href="/ford-verkaufen" className="text-brand-orange font-black hover:underline">Ford verkaufen</Link>
                sowie weitere Modellseiten im <Link href="/modelle" className="text-brand-orange font-black hover:underline">Modelle-Hub</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/auto-bewerten" className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors">
                  Focus jetzt bewerten
                </Link>
                <Link href="/auto-verkaufen" className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 font-bold text-brand-dark hover:border-brand-orange transition-colors">
                  Focus Verkauf starten
                </Link>
              </div>
            </section>
          </article>

          <FAQSection
            title="FAQ: Ford Focus verkaufen"
            faqs={FAQS}
            sectionId="faq-ford-focus-verkaufen"
            className="max-w-4xl mx-auto bg-transparent py-0"
          />
        </div>
      </div>
    </>
  );
}
