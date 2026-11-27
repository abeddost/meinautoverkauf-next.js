'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { renderRichText } from '@/components/RichText';
import type { FAQItem } from '@/lib/faqContent';

/**
 * Layout of the existing city pages (see AutoankaufRuesselsheim.tsx), driven by data so that
 * new city pages share markup and styles while every text block stays city-specific.
 */
export interface CityPageContent {
  cityName: string;
  h1Lead: string;
  h1Accent: string;
  intro: string[];
  advantagesHeading: string;
  advantages: string[];
  localSection: { heading: string; paragraphs: string[] };
  areaSection: { heading: string; intro: string; groups: { title: string; items: string[] }[] };
  processHeading: string;
  steps: { title: string; text: string }[];
  vehiclesHeading: string;
  vehiclesIntro: string;
  vehicles: { title: string; text: string }[];
  faqTitle: string;
  faqId: string;
  faqs: FAQItem[];
  relatedHeading: string;
  relatedIntro: string;
  related: { href: string; label: string }[];
  cta: { heading: string; text: string; badges: string[] };
}

const CheckIcon = () => (
  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center">
    <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

export default function CitySeoTemplate({ content, onCtaClick }: { content: CityPageContent; onCtaClick: () => void }) {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-green-200/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[25%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[12%] right-[8%] w-80 h-80 bg-orange-300/30 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-16 relative">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight relative">
            {content.h1Lead} <span className="text-brand-orange">{content.h1Accent}</span>
          </h1>
          {content.intro.map((paragraph, index) => (
            <p key={index} className="text-lg text-slate-600 font-medium leading-relaxed mb-6 max-w-3xl">
              {renderRichText(paragraph)}
            </p>
          ))}

          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 shadow-sm mt-8">
            <h2 className="text-lg font-black text-brand-dark mb-5">{content.advantagesHeading}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.advantages.map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-700 font-medium">
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">{content.localSection.heading}</h2>
          {content.localSection.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-slate-600 font-medium leading-relaxed mb-4 last:mb-0">
              {renderRichText(paragraph)}
            </p>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">{content.areaSection.heading}</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">{renderRichText(content.areaSection.intro)}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.areaSection.groups.map((group) => (
              <div key={group.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">{group.title}</h3>
                <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-8">{content.processHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.steps.map((step, index) => (
              <div key={step.title} className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-7 border border-slate-100 shadow-sm">
                <div className="text-5xl font-black text-brand-orange/20 mb-3">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="font-black text-brand-dark mb-2 text-base">{step.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{renderRichText(step.text)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">{content.vehiclesHeading}</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">{renderRichText(content.vehiclesIntro)}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {content.vehicles.map((vehicle) => (
              <div key={vehicle.title} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <h3 className="font-black text-brand-dark mb-1 text-sm">{vehicle.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{renderRichText(vehicle.text)}</p>
              </div>
            ))}
          </div>
        </section>

        <FAQSection title={content.faqTitle} faqs={content.faqs} sectionId={content.faqId} />

        <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-6 text-center">{content.relatedHeading}</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">{content.relatedIntro}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {content.related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden border border-slate-700/60 shadow-2xl">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-xl lg:text-2xl font-black mb-4">{content.cta.heading}</h2>
            <p className="text-slate-300 font-medium mb-8 max-w-xl mx-auto">{content.cta.text}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={onCtaClick}
                className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
              >
                Kostenlosen Verkaufspreis erhalten
              </button>
              <Link
                href="/auto-bewerten"
                className="inline-flex items-center px-8 py-4 rounded-2xl font-bold text-base border border-white/30 text-white hover:border-brand-orange hover:text-brand-orange transition-all"
              >
                Zur Online-Bewertung
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {content.cta.badges.map((badge) => (
                <span key={badge} className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
