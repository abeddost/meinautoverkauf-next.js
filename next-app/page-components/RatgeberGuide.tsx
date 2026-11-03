import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { BRAND_SEO_CONTENT } from '@/lib/brandSeoContent';
import { formatGermanDate, getLastModified } from '@/lib/contentDates';
import { BRAND_PAGE_LINKS, pickLinks, type ContextLink } from '@/lib/contextualLinks';
import { CITY_PAGES } from '@/lib/cityPages';
import { GUIDE_CONTENT_BY_SLUG, getGuidePath, type GuidePageContent } from '@/lib/guideContent';
import { MODEL_SEO_PAGES } from '@/lib/modelSeoPages';

interface Props {
  guide: GuidePageContent;
}

const CORE_LINK_COPY: Record<'/auto-bewerten' | '/auto-verkaufen', { label: string; hint: string }> = {
  '/auto-bewerten': {
    label: 'Jetzt Auto kostenlos bewerten',
    hint: 'In etwa 2 Minuten zur unverbindlichen Preiseinschätzung.',
  },
  '/auto-verkaufen': {
    label: 'Alle Wege zum Autoverkauf',
    hint: 'Privatverkauf oder Händler, Unterlagen und Ablauf im Überblick.',
  },
};

/** Brand guides link to their brand and model pages, all others to brands and cities. */
const getContextLinks = (guide: GuidePageContent): { heading: string; links: ContextLink[] } => {
  const brand = Object.values(BRAND_SEO_CONTENT).find((item) => item.guide.slug === guide.slug);

  if (brand) {
    const models = MODEL_SEO_PAGES.filter((model) => model.brandSlug === brand.slug).map((model) => ({
      href: model.href,
      label: model.label,
    }));
    return {
      heading: `Mehr zu ${brand.displayName}`,
      links: [{ href: brand.landing.canonicalPath, label: `${brand.displayName} verkaufen` }, ...models],
    };
  }

  const cities = pickLinks(
    CITY_PAGES.slice(0, 20).map((city) => ({ href: city.path as `/${string}`, label: city.label })),
    guide.slug,
    2,
  );
  return {
    heading: 'Nach Marke oder Region',
    links: [...pickLinks(BRAND_PAGE_LINKS, guide.slug, 3), ...cities, { href: '/standorte', label: 'Alle Standorte' }],
  };
};

export default function RatgeberGuidePage({ guide }: Props) {
  const relatedGuides = guide.relatedSlugs.map((slug) => GUIDE_CONTENT_BY_SLUG[slug]).filter(Boolean);
  const coreLink = CORE_LINK_COPY[guide.coreLink];
  const context = getContextLinks(guide);
  const updatedAt = getLastModified(getGuidePath(guide.slug));

  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-24 w-[460px] h-[460px] bg-gradient-to-br from-orange-200/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[25%] -left-36 w-[460px] h-[460px] bg-gradient-to-tr from-blue-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[14%] w-64 h-64 bg-orange-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-14">
          {/* The page's H1 sits in the hero above. This repeats it for readers who land scrolled past the hero. */}
          <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-4 leading-tight tracking-tight">
            {guide.h1}
          </p>
          <p className="text-sm font-semibold text-slate-500 mb-6">
            Redaktion Meinautoverkauf.de
            {updatedAt ? ` · Aktualisiert am ${formatGermanDate(updatedAt)}` : ''}
          </p>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">{guide.intro}</p>

          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-lg font-black text-brand-dark mb-5">Kurzüberblick</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {guide.quickFacts.map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-700 font-medium">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-slate-600 font-medium leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {guide.checklist && (
            <section className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">{guide.checklist.heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guide.checklist.items.map((item) => (
                  <article key={item.title} className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                    <h3 className="font-black text-brand-dark mb-2 text-base">{item.title}</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.text}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {guide.pitfalls && (
            <section className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">{guide.pitfalls.heading}</h2>
              <ul className="space-y-4">
                {guide.pitfalls.items.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-slate-100 bg-white p-5">
                    <h3 className="font-black text-brand-dark mb-2 text-base">{item.title}</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <FAQSection title="Häufige Fragen" sectionId={`faq-${guide.slug}`} faqs={guide.faqs} />

          <section className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100">
            <h2 className="text-xl font-black text-brand-dark mb-4">Das könnte Sie auch interessieren</h2>
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

            <h3 className="text-base font-black text-brand-dark mb-3">{context.heading}</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {context.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-brand-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5">
              <Link href={guide.coreLink} className="inline-flex items-center gap-2 text-brand-orange font-black hover:underline">
                {coreLink.label}
              </Link>
              <p className="text-sm text-slate-600 font-medium mt-1">{coreLink.hint}</p>
            </div>

            {guide.ctaBridge && (
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-black text-brand-dark mb-2">{guide.ctaBridge.heading}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-3">{guide.ctaBridge.text}</p>
                <Link href={guide.ctaBridge.href} className="inline-flex items-center gap-2 text-brand-orange font-black hover:underline">
                  {guide.ctaBridge.label}
                </Link>
              </div>
            )}

            <div className="mt-4">
              <Link href="/ratgeber" className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors">
                Zurück zur Ratgeber-Übersicht
              </Link>
            </div>
          </section>

          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-center text-white relative overflow-hidden border border-slate-700/60 shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-xl lg:text-2xl font-black mb-3">Was ist Ihr Auto wert?</h2>
              <p className="text-slate-300 font-medium mb-7 max-w-2xl mx-auto">
                Starten Sie mit einer kostenlosen, unverbindlichen Bewertung und entscheiden Sie danach in Ruhe über den Verkauf.
              </p>
              <ScrollToTopButton className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200">
                Jetzt Auto bewerten
              </ScrollToTopButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
