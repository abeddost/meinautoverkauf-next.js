import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import MetaTags from '../components/MetaTags';
import FAQSection from '../components/FAQSection';
import { buildFaqPageSchema } from '../lib/structuredData';
import { GUIDE_CONTENT_BY_SLUG, getGuideBySlug, getGuidePath } from '../lib/guideContent';
import type { CarDetails, ValuationResult } from '../types';

const SITE_URL = 'https://www.meinautoverkauf.de';

interface Props {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
  onValuationSubmit: (formData: CarDetails) => void;
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

const RatgeberGuidePage: React.FC<Props> = ({
  onValuationComplete,
  onValuationSubmit,
  onCtaClick,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return <Navigate to="/ratgeber" replace />;
  }

  const guidePath = getGuidePath(guide.slug);
  const relatedGuides = guide.relatedSlugs
    .map((relatedSlug) => GUIDE_CONTENT_BY_SLUG[relatedSlug])
    .filter(Boolean);

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
      <MetaTags
        title={guide.title}
        description={guide.description}
        canonicalUrl={guidePath}
        extraSchemas={[
          articleSchema,
          buildFaqPageSchema(SITE_URL, guidePath, guide.faqs),
        ]}
      />

      <Hero
        onValuationComplete={onValuationComplete}
        onValuationSubmit={onValuationSubmit}
        headline={guide.h1}
        subheadline="Praxisleitfaden mit Checklisten, Preisfaktoren und klaren nächsten Schritten"
        accent="ratgeber"
        headlineTag="h2"
      />

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
                    to={getGuidePath(relatedGuide.slug)}
                    className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-4 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm"
                  >
                    → {relatedGuide.h1}
                  </Link>
                ))}
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5">
                <Link
                  to={guide.coreLink}
                  className="inline-flex items-center gap-2 text-brand-orange font-black hover:underline"
                >
                  {coreLink.label}
                </Link>
                <p className="text-sm text-slate-600 font-medium mt-1">{coreLink.hint}</p>
              </div>

              <div className="mt-4">
                <Link to="/ratgeber" className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors">
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
