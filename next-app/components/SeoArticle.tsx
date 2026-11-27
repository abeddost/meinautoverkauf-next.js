import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { renderRichText } from '@/components/RichText';
import type { FAQItem } from '@/lib/faqContent';

/**
 * Data-driven version of the long-form layout used on /vw-golf-verkaufen
 * (same markup and classes). Used by model pages and city service pages.
 */
export interface SeoArticleBlock {
  title: string;
  text: string;
}

export interface SeoArticleSection {
  heading: string;
  /** plain = no box, muted = grey box, card = white bordered box, highlight = orange box */
  variant?: 'plain' | 'muted' | 'card' | 'highlight';
  paragraphs?: string[];
  subsections?: SeoArticleBlock[];
  bullets?: string[];
  checklist?: string[];
  cards?: SeoArticleBlock[];
  steps?: SeoArticleBlock[];
  closing?: string[];
}

export interface SeoArticleContent {
  h1: string;
  intro: string[];
  sections: SeoArticleSection[];
  cta: {
    heading: string;
    text: string;
    primaryLabel: string;
    secondaryHref?: string;
    secondaryLabel?: string;
  };
  faqTitle: string;
  faqId: string;
  faqs: FAQItem[];
}

const SECTION_CLASS: Record<NonNullable<SeoArticleSection['variant']>, string> = {
  plain: 'mb-12',
  muted: 'mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:p-8',
  card: 'mb-12 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8',
  highlight: 'mb-12 rounded-3xl border border-orange-200 bg-orange-50/70 p-6 lg:p-8',
};

const Paragraphs = ({ items, keyPrefix }: { items: string[]; keyPrefix: string }) => (
  <>
    {items.map((paragraph, index) => (
      <p key={`${keyPrefix}-${index}`} className="text-slate-700 font-medium leading-relaxed mb-4 last:mb-0">
        {renderRichText(paragraph)}
      </p>
    ))}
  </>
);

export default function SeoArticle({ content }: { content: SeoArticleContent }) {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
            {content.h1}
          </h1>

          {content.intro.map((paragraph, index) => (
            <p
              key={`intro-${index}`}
              className={`text-lg text-slate-700 font-medium leading-relaxed ${
                index === content.intro.length - 1 ? 'mb-10' : 'mb-5'
              }`}
            >
              {renderRichText(paragraph)}
            </p>
          ))}

          {content.sections.map((section) => (
            <section key={section.heading} className={SECTION_CLASS[section.variant ?? 'plain']}>
              <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-4">{section.heading}</h2>

              {section.paragraphs && (
                <div className="mb-4 last:mb-0">
                  <Paragraphs items={section.paragraphs} keyPrefix={`${section.heading}-p`} />
                </div>
              )}

              {section.subsections?.map((sub) => (
                <div key={sub.title} className="mb-4 last:mb-0">
                  <h3 className="text-lg font-black text-brand-dark mb-2">{sub.title}</h3>
                  <p className="text-slate-700 font-medium leading-relaxed">{renderRichText(sub.text)}</p>
                </div>
              ))}

              {section.bullets && (
                <ul className="space-y-3 text-slate-700 font-medium leading-relaxed mb-4 last:mb-0 list-disc pl-5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{renderRichText(bullet)}</li>
                  ))}
                </ul>
              )}

              {section.checklist && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-700 mb-4 last:mb-0">
                  {section.checklist.map((item) => (
                    <li key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                      {renderRichText(item)}
                    </li>
                  ))}
                </ul>
              )}

              {section.cards && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 last:mb-0">
                  {section.cards.map((card) => (
                    <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <h3 className="font-black text-brand-dark mb-2">{card.title}</h3>
                      <p className="text-slate-700 font-medium text-sm leading-relaxed">{renderRichText(card.text)}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.steps && (
                <ol className="space-y-4 text-slate-700 font-medium leading-relaxed mb-4 last:mb-0">
                  {section.steps.map((step, index) => (
                    <li key={step.title}>
                      <strong>
                        {index + 1}. {step.title}:
                      </strong>{' '}
                      {renderRichText(step.text)}
                    </li>
                  ))}
                </ol>
              )}

              {section.closing && <Paragraphs items={section.closing} keyPrefix={`${section.heading}-c`} />}
            </section>
          ))}

          <section className="mb-14 rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-orange-50 to-white p-6 lg:p-8">
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-3">{content.cta.heading}</h2>
            <p className="text-slate-700 font-medium leading-relaxed mb-5">{renderRichText(content.cta.text)}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/auto-bewerten"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-orange text-white px-5 py-2.5 font-bold hover:bg-orange-600 transition-colors"
              >
                {content.cta.primaryLabel}
              </Link>
              {content.cta.secondaryHref && content.cta.secondaryLabel && (
                <Link
                  href={content.cta.secondaryHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-2.5 font-bold text-brand-dark hover:border-brand-orange transition-colors"
                >
                  {content.cta.secondaryLabel}
                </Link>
              )}
            </div>
          </section>
        </article>

        <FAQSection
          title={content.faqTitle}
          faqs={content.faqs}
          sectionId={content.faqId}
          className="max-w-4xl mx-auto bg-transparent py-0"
        />
      </div>
    </div>
  );
}
