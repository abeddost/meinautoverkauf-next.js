'use client';

import React from 'react';
import Link from 'next/link';


import FAQSection from '@/components/FAQSection';
import { buildFaqPageSchema } from '@/lib/structuredData';
import { GUIDE_CONTENT_BY_SLUG, getGuideBySlug, getGuidePath } from '@/lib/guideContent';

const SITE_URL = 'https://www.meinautoverkauf.de';

interface Props {
  slug: string;
  onCtaClick: () => void;
}

const CORE_LINK_COPY: Record<'/auto-bewerten' | '/auto-verkaufen', { label: string; hint: string }> = {
  '/auto-bewerten': {
    label: 'Jetzt Auto kostenlos bewerten',
    hint: 'In 2 Minuten zur unverbindlichen Preiseinschätzung.',
  },
  '/auto-verkaufen': {
    label: 'Direkt online Auto verkaufen',
    hint: 'Schneller Ablauf mit Vertrag, Abholung und Auszahlung.',
  },
};

const INTENT_BOUNDARY_MAP: Record<
  string,
  { title: string; description: string; otherSlug: string; otherLabel: string }
> = {
  'auto-mit-motorschaden-verkaufen': {
    title: 'Intent-Abgrenzung: Entscheidung statt Direktankauf',
    description:
      'Dieser Ratgeber beantwortet die strategische Frage Reparatur oder Verkauf. Er ist bewusst als Entscheidungsleitfaden aufgebaut. Wenn Sie bereits sicher sind, dass ein Direktankauf gewünscht ist, ist die spezialisierte Service-Seite passender.',
    otherSlug: 'autoankauf-mit-motorschaden',
    otherLabel: 'Autoankauf mit Motorschaden',
  },
  'autoankauf-mit-motorschaden': {
    title: 'Intent-Abgrenzung: Serviceprozess statt Grundsatzentscheidung',
    description:
      'Diese Seite fokussiert den operativen Ankaufprozess mit Abholung, Vertragsablauf und Auszahlung. Für die wirtschaftliche Vorentscheidung Reparatur versus Verkauf nutzen Sie den separaten Entscheidungsratgeber.',
    otherSlug: 'auto-mit-motorschaden-verkaufen',
    otherLabel: 'Auto mit Motorschaden verkaufen',
  },
  'unfallwagen-verkaufen': {
    title: 'Intent-Abgrenzung: rechtssicherer Verkauf im Mittelpunkt',
    description:
      'Hier liegt der Schwerpunkt auf Offenlegungspflichten, Vertragsklarheit und Haftungsrisiken beim Verkauf eines Unfallwagens. Für den konkreten Ankaufprozess mit schneller Übergabe nutzen Sie die dedizierte Ankaufseite.',
    otherSlug: 'unfallwagen-ankauf',
    otherLabel: 'Unfallwagen Ankauf',
  },
  'unfallwagen-ankauf': {
    title: 'Intent-Abgrenzung: Ankaufabwicklung statt Rechtsgrundlagen',
    description:
      'Diese Seite ist auf die praktische Ankaufabwicklung ausgerichtet. Wenn Sie primär die rechtlichen Pflichten und Offenlegungsgrenzen beim Unfallfahrzeug prüfen möchten, ist der Verkaufsratgeber die bessere Ergänzung.',
    otherSlug: 'unfallwagen-verkaufen',
    otherLabel: 'Unfallwagen verkaufen',
  },
  'autoexport-ankauf': {
    title: 'Intent-Abgrenzung: Exportankauf als Service',
    description:
      'Der Fokus liegt auf dem Serviceprozess für exportgeeignete Fahrzeuge inklusive Dokumenten- und Abmeldelogik. Für die Marktentscheidung, ob Exporthändler wirtschaftlich sinnvoll sind, ist die Vergleichsseite präziser.',
    otherSlug: 'autoverkauf-an-exporthaendler',
    otherLabel: 'Autoverkauf an Exporthändler',
  },
  'autoverkauf-an-exporthaendler': {
    title: 'Intent-Abgrenzung: Wirtschaftsvergleich statt Prozessseite',
    description:
      'Hier vergleichen Sie, wann Export wirklich lohnt und wann andere Vermarktungswege sinnvoller sind. Für die konkrete Exportankauf-Abwicklung mit Ablaufdetails wechseln Sie zur Service-orientierten Exportseite.',
    otherSlug: 'autoexport-ankauf',
    otherLabel: 'Autoexport Ankauf',
  },
  'auto-online-verkaufen-sofort-auszahlung': {
    title: 'Intent-Abgrenzung: Auszahlung und Zahlungslogik im Fokus',
    description:
      'Diese Seite vertieft vor allem die sichere Auszahlung, Zahlungsnachweise und den geldseitigen Abschluss. Für die komplette Prozesssicht vom Erstkontakt bis zur Abmeldung nutzen Sie den 7-Schritte-Ablauf.',
    otherSlug: 'online-autoankauf-ablauf-7-schritte',
    otherLabel: 'Online-Autoankauf Ablauf in 7 Schritten',
  },
  'online-autoankauf-ablauf-7-schritte': {
    title: 'Intent-Abgrenzung: Gesamtprozess statt Zahlungsdetail',
    description:
      'Der Leitfaden strukturiert den gesamten Ablauf in klaren Etappen. Für den vertieften Blick auf Sofort-Auszahlung, Überweisungslogik und sichere Zahlungsfreigabe lesen Sie die spezialisierte Auszahlungsseite.',
    otherSlug: 'auto-online-verkaufen-sofort-auszahlung',
    otherLabel: 'Auto online verkaufen mit Sofort-Auszahlung',
  },
};

const TOPIC_CONTEXT_MAP: Record<string, { title: string; paragraphs: string[]; bullets?: string[] }> = {
  'auto-mit-motorschaden-verkaufen': {
    title: 'Wirtschaftliche Perspektive bei Motorschaden',
    paragraphs: [
      'Bei diesem Thema geht es primär um Break-even-Logik: Reparaturkosten, Werkstatt-Risiko und erwarteter Verkaufserlös müssen in einer realistischen Gesamtrechnung zusammengeführt werden.',
      'Der größte Fehler ist eine rein emotionale Reparaturentscheidung ohne belastbare Kostenbasis. Je klarer die Kalkulation, desto stabiler wird die finale Entscheidung.',
    ],
    bullets: [
      'Kernfrage: Reparaturbudget gegen erwarteten Mehrerlös rechnen',
      'Relevante Daten: Diagnosebericht, Folgeschaden-Risiko, Standzeitkosten',
      'Ziel: belastbare Entscheidung vor jedem Verkaufsschritt',
    ],
  },
  'autoankauf-mit-motorschaden': {
    title: 'Operative Perspektive beim Motorschaden-Ankauf',
    paragraphs: [
      'Hier steht der Ablauf im Vordergrund: Abholung, Vertragsstruktur, Zahlungsnachweis und Eigentumsübergang bei nicht fahrbereiten Fahrzeugen.',
      'Ziel ist weniger die Grundsatzfrage Reparatur ja/nein, sondern ein sauberer Abschluss ohne zusätzliche Stand- und Transportkosten.',
    ],
    bullets: [
      'Kernfrage: Wie wird ein nicht fahrbereites Fahrzeug sicher übergeben?',
      'Relevante Daten: Standort, Transportfähigkeit, vollständige Fahrzeugpapiere',
      'Ziel: kurzer, dokumentierter Abschluss ohne Nachtermine',
    ],
  },
  'unfallwagen-verkaufen': {
    title: 'Rechtliche Perspektive bei Unfallhistorie',
    paragraphs: [
      'Diese Seite ist besonders relevant für Verkäufer, die Offenlegungspflichten und Haftungsgrenzen korrekt einhalten möchten. Der Fokus liegt auf belastbarer Dokumentation.',
      'Wer Schadenumfang und Reparaturstatus präzise beschreibt, reduziert Streitpotenzial und verbessert gleichzeitig die Abschlussqualität.',
    ],
    bullets: [
      'Kernfrage: Welche Vorschäden müssen wie offengelegt werden?',
      'Relevante Daten: Gutachten, Reparaturrechnungen, Unfallhistorie im Vertrag',
      'Ziel: rechtssicherer Verkauf mit klarer Haftungsgrenze',
    ],
  },
  'unfallwagen-ankauf': {
    title: 'Bewertungs- und Verwertungsperspektive beim Unfallwagen-Ankauf',
    paragraphs: [
      'Im Ankauf zählen vor allem Verwertbarkeit, struktureller Zustand und Teilelogik. Genau daraus ergibt sich der realistische Restwert trotz Schadenbild.',
      'Der Mehrwert dieser Seite liegt im Prozessverständnis: Wie aus einem beschädigten Fahrzeug ein planbarer, dokumentierter Verkauf wird.',
    ],
    bullets: [
      'Kernfrage: Welcher Restwert ist trotz Schaden technisch realistisch?',
      'Relevante Daten: Schadenzone, Reparaturqualität, Marktgängigkeit des Modells',
      'Ziel: ankaufsfähige Bewertung und schnelle Verwertung',
    ],
  },
  'autoexport-ankauf': {
    title: 'Serviceperspektive für exportgeeignete Fahrzeuge',
    paragraphs: [
      'Dieser Leitfaden adressiert den konkreten Ankaufprozess von Exportfahrzeugen inklusive Dokumentenlogik, Zahlungsfluss und sauberer Abmeldung.',
      'Relevant ist insbesondere für Fahrzeuge mit schwacher Inlandsnachfrage, bei denen Exportkanäle den wirtschaftlich stabileren Abschluss ermöglichen.',
    ],
    bullets: [
      'Kernfrage: Wie läuft Exportankauf inklusive Formalitäten praktisch ab?',
      'Relevante Daten: Exportdokumente, Abmeldeweg, Zahlungsfreigabe',
      'Ziel: operativ sauberer Exportabschluss statt Inseratprozess',
    ],
  },
  'autoverkauf-an-exporthaendler': {
    title: 'Entscheidungsperspektive: Lohnt Export wirklich?',
    paragraphs: [
      'Die Kernfrage ist hier nicht nur \"wie\", sondern \"ob\" Export sinnvoll ist. Bewertet werden Opportunitätskosten, Zeitaufwand und Nettoerlös im Vergleich zu Alternativen.',
      'Damit dient die Seite als strategischer Filter, bevor ein konkreter Exportankauf-Prozess gestartet wird.',
    ],
    bullets: [
      'Kernfrage: Bringt Export netto mehr als Inlandsverkauf oder Direktankauf?',
      'Relevante Daten: Preisabschläge, Zeitaufwand, Risiko aus Nachverhandlungen',
      'Ziel: belastbarer Kanalentscheid vor operativer Umsetzung',
    ],
  },
  'auto-online-verkaufen-sofort-auszahlung': {
    title: 'Zahlungsperspektive: Auszahlung, Nachweis und Sicherheit',
    paragraphs: [
      'Im Zentrum stehen Zahlungswege, Wertstellung und Nachvollziehbarkeit. Die Seite beantwortet vor allem die Frage, wie eine schnelle Auszahlung gleichzeitig sicher bleibt.',
      'Damit ist sie besonders für Verkäufer relevant, die finanzielle Planbarkeit unmittelbar nach der Übergabe benötigen.',
    ],
    bullets: [
      'Kernfrage: Wann ist Geld rechtssicher verfügbar und dokumentiert?',
      'Relevante Daten: Zahlungsbeleg, Verwendungszweck, Freigabezeitpunkt',
      'Ziel: liquide Mittel am Übergabetag mit nachvollziehbarer Spur',
    ],
  },
  'online-autoankauf-ablauf-7-schritte': {
    title: 'Prozessperspektive: Gesamtworkflow in klaren Stufen',
    paragraphs: [
      'Diese Seite strukturiert den Gesamtprozess vom Erstkontakt bis zur Abmeldung und schafft damit operative Orientierung über den gesamten Verkauf hinweg.',
      'Sie eignet sich besonders für Verkäufer, die nicht nur den Preis, sondern alle zeitlichen und organisatorischen Schritte vorab transparent sehen wollen.',
    ],
    bullets: [
      'Kernfrage: Welche Reihenfolge verhindert Verzögerungen im Verkaufsprozess?',
      'Relevante Daten: Terminlogik, Unterlagenstatus, Verantwortlichkeiten pro Schritt',
      'Ziel: durchgängig planbarer Ablauf vom Start bis zur Abmeldung',
    ],
  },
};

const RatgeberGuidePage: React.FC<Props> = ({
  slug,
  onCtaClick,
}) => {
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <div className="bg-white rounded-3xl border border-slate-100 p-10 text-center shadow-sm">
          <h1 className="text-2xl font-black text-brand-dark mb-4">Ratgeber-Seite nicht gefunden</h1>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Die URL ist nicht mehr verfügbar oder wurde falsch aufgerufen. In der Ratgeber-Übersicht finden Sie alle aktuellen Leitfäden zum Autoverkauf.
          </p>
          <Link
            href="/ratgeber"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors"
          >
            Zur Ratgeber-Übersicht
          </Link>
        </div>
      </div>
    );
  }

  const guidePath = getGuidePath(guide.slug);
  const relatedGuides = guide.relatedSlugs
    .map((relatedSlug) => GUIDE_CONTENT_BY_SLUG[relatedSlug])
    .filter(Boolean);
  const intentBoundary = INTENT_BOUNDARY_MAP[guide.slug];
  const intentBoundaryGuide = intentBoundary
    ? GUIDE_CONTENT_BY_SLUG[intentBoundary.otherSlug]
    : undefined;
  const topicContext = TOPIC_CONTEXT_MAP[guide.slug];

  const checklistItems = guide.quickFacts.map((fact, index) => ({
    title: guide.sections[index % guide.sections.length]?.heading ?? `Prüfpunkt ${index + 1}`,
    text: fact,
  }));

  const mistakeItems = guide.sections.slice(0, 4).map((section, index) => {
    const source = section.paragraphs[0] ?? '';
    const normalizedSource = source.endsWith('.') ? source : `${source}.`;
    return {
      title: `Risiko ${index + 1}: ${section.heading}`,
      text: normalizedSource,
    };
  });

  const checklistHeading = `Checkliste: ${guide.sections[0]?.heading ?? 'Vorgehen'}`;
  const checklistIntro = `Diese Punkte sind auf den Fokus "${guide.h1}" ausgerichtet und helfen bei einer sauberen Vorbereitung.`;
  const riskHeading = `Stolperfallen bei ${guide.sections[1]?.heading ?? 'der Umsetzung'}`;
  const riskIntro = `Diese Risikofelder tauchen in diesem Themenfeld am häufigsten auf und sollten vor dem Abschluss geklärt sein.`;

  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}${guidePath}#article`,
    headline: guide.h1,
    description: guide.description,
    mainEntityOfPage: `${SITE_URL}${guidePath}`,
    inLanguage: 'de-DE',
    author: {
      '@type': 'Organization',
      name: 'Meinautoverkauf.de',
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  const coreLink = CORE_LINK_COPY[guide.coreLink];

  return (
    <div className="animate-in fade-in duration-1000">

      <div className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-32 -right-24 w-[460px] h-[460px] bg-gradient-to-br from-orange-200/50 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-[25%] -left-36 w-[460px] h-[460px] bg-gradient-to-tr from-blue-200/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-[14%] w-64 h-64 bg-orange-300/20 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
          <div className="max-w-4xl mx-auto mb-14">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
              {guide.h1}
            </h1>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">{guide.intro}</p>

            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h2 className="text-lg font-black text-brand-dark mb-5">Kurzüberblick</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {guide.quickFacts.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-700 font-medium">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {guide.sections.map((section) => (
              <section key={section.heading} className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
                <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${section.heading}-${paragraphIndex}`} className="text-slate-600 font-medium leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={`${section.heading}-bullet-${bulletIndex}`} className="text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {topicContext && (
              <section className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
                <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">{topicContext.title}</h2>
                {topicContext.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${topicContext.title}-${paragraphIndex}`} className="text-slate-600 font-medium leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {topicContext.bullets && topicContext.bullets.length > 0 && (
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {topicContext.bullets.map((bullet, bulletIndex) => (
                      <li key={`${topicContext.title}-bullet-${bulletIndex}`} className="text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {intentBoundary && intentBoundaryGuide && (
              <section className="bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100 p-8">
                <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">{intentBoundary.title}</h2>
                <p className="text-slate-600 font-medium leading-relaxed mb-4">{intentBoundary.description}</p>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Verwandter Fokus:
                  {' '}
                  <Link href={getGuidePath(intentBoundaryGuide.slug)} className="text-brand-orange font-bold hover:underline">
                    {intentBoundary.otherLabel}
                  </Link>
                  . So bleiben Informations- und Conversion-Intent klar getrennt und Sie landen schneller auf der passenden Seite.
                </p>
              </section>
            )}

            <section className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">{checklistHeading}</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                {checklistIntro}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {checklistItems.map((item, i) => (
                  <article key={`${i}-${item.title}`} className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                    <h3 className="font-black text-brand-dark mb-2 text-base">{item.title}</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">{riskHeading}</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                {riskIntro}
              </p>
              <ul className="space-y-4">
                {mistakeItems.map((item, i) => (
                  <li key={`${i}-${item.title}`} className="rounded-2xl border border-slate-100 bg-white p-5">
                    <h3 className="font-black text-brand-dark mb-2 text-base">{item.title}</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            </section>

            <FAQSection
              title={`Häufige Fragen: ${guide.h1}`}
              sectionId={`faq-${guide.slug}`}
              faqs={guide.faqs}
            />

            <section className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100">
              <h2 className="text-xl font-black text-brand-dark mb-4">Weiterführende Inhalte</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Diese Seiten vertiefen angrenzende Themen und helfen bei der konkreten Vorbereitung Ihres Verkaufs.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {relatedGuides.map((relatedGuide) => (
                  <Link
                    key={relatedGuide.slug}
                    href={getGuidePath(relatedGuide.slug)}
                    className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-4 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm"
                  >
                    → {relatedGuide.h1}
                  </Link>
                ))}
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5">
                <Link
                  href={guide.coreLink}
                  className="inline-flex items-center gap-2 text-brand-orange font-black hover:underline"
                >
                  {coreLink.label}
                </Link>
                <p className="text-sm text-slate-600 font-medium mt-1">{coreLink.hint}</p>
              </div>

              <div className="mt-4">
                <Link href="/ratgeber" className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors">
                  Zurück zur Ratgeber-Übersicht
                </Link>
              </div>
            </section>

            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white relative overflow-hidden border border-slate-700/60 shadow-2xl">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-xl lg:text-2xl font-black mb-3">Nächster Schritt: Fahrzeugwert in 2 Minuten prüfen</h2>
                <p className="text-slate-300 font-medium mb-7 max-w-2xl mx-auto">
                  Starten Sie mit einer unverbindlichen Bewertung und entscheiden Sie danach in Ruhe über den Verkauf.
                </p>
                <button
                  onClick={onCtaClick}
                  className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
                >
                  Jetzt Auto bewerten
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatgeberGuidePage;
