
import React from 'react';
import { HOME_FAQS, type FAQItem } from '@/lib/faqContent';

interface FAQSectionProps {
  title?: string;
  faqs?: FAQItem[];
  sectionId?: string;
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, faqs, sectionId, className }) => {
  const resolvedFaqs = faqs ?? HOME_FAQS;
  const resolvedTitle = title ?? "Häufig gestellte Fragen";
  const resolvedSectionId = sectionId ?? "faq";

  return (
    <section id={resolvedSectionId} className={`py-20 bg-gray-50 ${className ?? ''}`.trim()}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-xl md:text-2xl font-black text-center text-brand-dark mb-12">{resolvedTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resolvedFaqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="text-base md:text-lg font-black text-brand-dark">{faq.q}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-brand-orange font-black transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed font-medium">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
      <style>{`
        summary::-webkit-details-marker { display: none; }
      `}</style>
    </section>
  );
};

export default FAQSection;
