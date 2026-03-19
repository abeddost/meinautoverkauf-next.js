'use client';

import React, { Suspense, lazy } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import type { CarDetails, ValuationResult } from '@/types';
import { savePartialLead } from '@/lib/supabaseFunctions';
import { consumePendingPhotoPromise } from '@/lib/pendingPhotoUpload';
import { setPendingPartialSavePromise } from '@/lib/pendingPartialSave';

const FAQSection = lazy(() => import('@/components/FAQSection'));

const STEPS = [
  {
    num: '01',
    title: 'Fahrzeugdaten eingeben',
    desc: 'Gib online die wichtigsten Fahrzeugdaten ein – kostenlos und unverbindlich.',
    img: '/3-steps/fahrzeugdaten-online-eingeben.webp',
    imgSmall: '/3-steps/fahrzeugdaten-online-eingeben-288.webp',
  },
  {
    num: '02',
    title: 'Fairen Preis erhalten',
    desc: 'Du erhältst eine transparente Preiseinschätzung auf Basis aktueller Marktdaten.',
    img: '/3-steps/preis-erhalten.webp',
    imgSmall: '/3-steps/preis-erhalten-288.webp',
  },
  {
    num: '03',
    title: 'Termin wählen & Geld erhalten',
    desc: 'Wähle einen passenden Übergabetermin und erhalte die Auszahlung bequem per Banküberweisung.',
    img: '/3-steps/abgabe-termin-buchen-geld-erhalten.webp',
    imgSmall: '/3-steps/abgabe-termin-buchen-geld-erhalten-288.webp',
  },
];

const VORTEILE = [
  { label: 'Sie sparen Zeit', text: 'Keine Anzeigen schalten, keine Fotos aufnehmen, keine potenziellen Käufer empfangen' },
  { label: 'Sie sparen Nerven', text: 'Keine Preisverhandlungen oder unseriöse Interessenten' },
  { label: 'Sie erhalten faire Preise', text: 'KI-gestützte Bewertung, oft höher als Angebote lokaler Händler' },
  { label: 'Maximale Sicherheit', text: 'Keine Betrüger, sichere Banküberweisung, rechtssichere Dokumentation' },
  { label: 'Abholung', text: 'Wir kommen zu Ihnen nach Hause' },
  { label: 'Blitzschnelle Auszahlung', text: 'Geld in weniger Stunden auf Ihrem Konto' },
  { label: 'Keine Gewährleistung', text: 'Sie verkaufen "wie gesehen" ohne spätere Haftung' },
];

const VERSPRECHEN = [
  { title: 'Rechtssichere Abwicklung', desc: 'Alle Verträge entsprechen den aktuellen rechtlichen Anforderungen. Sie erhalten eine Kopie des Kaufvertrags für Ihre Unterlagen.' },
  { title: 'Kostenlose Abmeldung', desc: 'Die Abmeldung des Fahrzeugs bei der Zulassungsstelle übernehmen wir kostenfrei. Sie müssen sich um nichts kümmern.' },
  { title: 'Sichere Auszahlung', desc: 'Ihr Geld wird per Banküberweisung oder Bar transferiert – keine unsicheren Zahlungsmethoden.' },
];

const MOTORSCHADEN_TYPES = [
  'Autos mit Motorschaden',
  'Unfallfahrzeuge',
  'Fahrzeuge ohne TÜV',
  'Exportfahrzeuge',
  'Oldtimer und Liebhaberfahrzeuge',
  'Hochwertige Gebrauchtwagen aller Marken',
];

export default function HomePageClient() {
  const router = useRouter();

  const handleValuationSubmit = (formData: CarDetails) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('valuation_form_data', JSON.stringify(formData));
    }

    // Fire-and-forget partial lead ("Unvollständig") before navigation — mirrors App.tsx behaviour.
    // consumePendingPartialSavePromise() in AnalyzingPage will await this promise for the estimationId.
    const partialPromise = consumePendingPhotoPromise().then((photos) =>
      savePartialLead({
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        },
        car: {
          brand: formData.brand,
          model: formData.model,
          variant: formData.variant,
          year: formData.year,
          mileage: formData.mileage,
          power: formData.power,
          fuelType: formData.fuelType,
          transmission: formData.transmission,
          bodyType: formData.bodyType,
          condition: formData.condition,
          postalCode: formData.postalCode,
          desiredPrice: formData.desiredPrice || undefined,
          vin: formData.vin,
          doors: formData.doors,
          color: formData.color,
        },
        photos: photos ?? [],
      })
        .then((r) => r.data?.estimationId ?? null)
        .catch(() => null),
    );
    setPendingPartialSavePromise(partialPromise);

    router.push('/bewertung-laeuft');
  };

  const handleValuationComplete = (details: CarDetails, result: ValuationResult) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(
        'valuation_result',
        JSON.stringify({ carDetails: details, valuation: result }),
      );
    }
    router.push('/bewertung-ergebnis');
  };

  return (
    <div>
      <Hero
        onValuationComplete={handleValuationComplete}
        onValuationSubmit={handleValuationSubmit}
        headline="Auto verkaufen online – Einfach, schnell & stressfrei"
        subheadline="Autoankauf – Wir kaufen Ihr Auto zum fairen Preis"
        accent="home"
      />

      {/* 3-Step Process */}
      <section id="evaluate" className="defer-render relative py-20 bg-white border-b border-slate-100 overflow-hidden">
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/60 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 border-4 border-orange-200/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-20 right-40 w-32 h-32 bg-orange-200/30 rounded-full blur-xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xl md:text-2xl font-black text-brand-dark mb-5">
              So funktioniert der Auto Ankauf bei uns – In 3 einfachen Schritten
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Der Prozess könnte kaum einfacher sein. In nur drei Schritten von der ersten Anfrage bis zum Geld auf Ihrem Konto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="relative bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.45)] overflow-hidden"
              >
                <div className="absolute top-4 right-5 text-3xl font-black text-orange-100">{step.num}</div>
                <img
                  src={step.imgSmall}
                  srcSet={`${step.imgSmall} 288w, ${step.img} 640w`}
                  sizes="(max-width: 767px) 100vw, 288px"
                  alt={step.title}
                  width={400}
                  height={224}
                  className="w-full h-56 object-contain bg-slate-50/80 p-4"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <h3 className="text-base md:text-lg font-black text-brand-dark mb-3">{step.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section id="vorteile" className="defer-render relative py-20 bg-white border-b border-slate-100 overflow-hidden">
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/40 via-orange-100/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] border-4 border-orange-200/50 rounded-full" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-slate-200/60 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 border-2 border-blue-200/40 rounded-full" />
          <div className="absolute top-1/3 right-10 w-24 h-24 bg-orange-300/30 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-xl md:text-2xl font-black text-center text-brand-dark mb-12">
            Auto verkaufen online:{' '}
            <Link href="/vorteile" className="text-brand-orange-contrast hover:underline">
              Die Vorteile
            </Link>{' '}
            auf einen Blick
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-end pr-2 sm:pr-6 lg:pr-10 pointer-events-none">
              <img
                src="/elements/auto-verkaufen-online-vorteile-auf-einen-blick-420.webp"
                srcSet="/elements/auto-verkaufen-online-vorteile-auf-einen-blick-420.webp 420w, /elements/auto-verkaufen-online-vorteile-auf-einen-blick.webp 768w"
                sizes="420px"
                alt=""
                width={420}
                height={280}
                className="w-full max-w-[420px] opacity-[0.22]"
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="relative z-10 text-center lg:text-left">
              <ul className="space-y-3 text-slate-600 font-medium max-w-3xl mx-auto text-left">
                {VORTEILE.map((item, index) => (
                  <li key={index} className="flex items-start justify-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-orange-100 text-brand-orange-contrast flex items-center justify-center text-xs font-black">✓</span>
                    <span className="max-w-2xl">
                      <span className="font-bold text-brand-orange-contrast">{item.label}</span> – {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed font-medium pt-6 max-w-3xl mx-auto text-left">
                Ein weiterer großer Vorteil ist die Sicherheit. Beim Privatverkauf besteht immer das Risiko, an Betrüger zu geraten.
                Gefälschte Überweisungsbestätigungen, ungedeckte Schecks oder sogar Diebstahl sind leider keine Seltenheit. Bei uns
                erhalten Sie Ihr Geld per sicherer Banküberweisung, und die gesamte Transaktion wird rechtssicher dokumentiert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Versprechen */}
      <section id="versprechen" className="defer-render relative py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 border-4 border-orange-200/40 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl" />
          <div className="absolute top-10 right-1/3 w-32 h-32 border-2 border-slate-300/50 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-xl md:text-2xl font-black text-brand-dark mb-5">
              Sicher, schnell und seriös: Das Versprechen von Meinautoverkauf.de
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Seriösität ist im Autoankauf-Geschäft leider keine Selbstverständlichkeit. Bei Meinautoverkauf.de legen wir größten
              Wert auf einen sauberen und transparenten Geschäftsablauf.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VERSPRECHEN.map((item, index) => (
              <div key={index} className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-sm">
                <div className="text-brand-orange-contrast font-black text-lg mb-2">{item.title}</div>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum Meinautoverkauf */}
      <section id="warum" className="defer-render relative py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/50 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-96 h-96 border-4 border-slate-300/60 rounded-full" />
          <div className="absolute top-1/3 right-20 w-40 h-40 bg-blue-200/40 rounded-full blur-xl" />
          <div className="absolute bottom-1/4 left-10 w-56 h-56 border-2 border-orange-200/40 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-end pr-2 sm:pr-6 lg:pr-10 pointer-events-none">
              <img
                src="/elements/autoankauf-neu-gedacht.webp"
                alt=""
                width={460}
                height={307}
                className="w-full max-w-[460px] opacity-[0.16]"
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="relative z-10 text-left">
              <h2 className="text-xl md:text-2xl font-black text-brand-dark mb-6 text-center">
                Autoankauf neu gedacht: Warum Meinautoverkauf.de die beste Wahl ist
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Der Autoverkauf kann eine nervenaufreibende Angelegenheit sein. Unzählige Anrufe von unseriösen Interessenten,
                zeitraubende Besichtigungen und zähe Preisverhandlungen gehören beim Privatverkauf leider oft dazu. Genau hier setzen wir an.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Unser Autoankauf-Service kombiniert modernste Technologie mit langjähriger Branchenerfahrung, um Ihnen den bestmöglichen
                Service zu bieten. Bei uns können Sie Ihr Auto verkaufen online, ohne das Haus verlassen zu müssen.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Unsere künstliche Intelligenz analysiert in Echtzeit Tausende von Transaktionsdaten und ermittelt so einen marktgerechten
                Preis für Ihr Fahrzeug. Diese KI-gestützte Bewertung berücksichtigt nicht nur Marke, Modell und Kilometerstand, sondern
                auch regionale Markttrends und saisonale Schwankungen.
              </p>
              <div className="mt-6 rounded-2xl bg-white/80 border border-slate-100 p-5 shadow-sm">
                <p className="text-slate-600 leading-relaxed font-semibold">
                  Ihr Auto in guten Händen: Wir kaufen Fahrzeuge in ganz Deutschland – von München über Berlin bis Hamburg, von{' '}
                  <Link href="/autoankauf-frankfurt" className="text-brand-orange-contrast font-bold hover:underline">Frankfurt</Link> über{' '}
                  <Link href="/autoankauf-wiesbaden" className="text-brand-orange-contrast font-bold hover:underline">Wiesbaden</Link> und{' '}
                  <Link href="/autoankauf-mainz" className="text-brand-orange-contrast font-bold hover:underline">Mainz</Link> bis Köln und darüber hinaus. Unser Service ist überall verfügbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motorschaden / Export */}
      <section id="motorschaden" className="defer-render relative py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-slate-200/70 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 border-4 border-orange-300/40 rounded-full" />
          <div className="absolute top-1/3 right-10 w-56 h-56 bg-orange-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-40 h-40 border-2 border-blue-200/50 rounded-full" />
          <div className="absolute top-20 left-20 w-28 h-28 bg-slate-300/40 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-start pl-2 sm:pl-6 lg:pl-10 pointer-events-none">
              <img
                src="/elements/auto-verkaufen-mit-motorschaden.webp"
                alt=""
                width={460}
                height={307}
                className="w-full max-w-[460px] opacity-[0.4]"
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="relative z-10 text-left">
              <h2 className="text-xl md:text-2xl font-black text-brand-dark mb-6 text-center">
                Autoverkauf auch bei Motorschaden oder für Export möglich
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Nicht jedes Fahrzeug ist in einem perfekten Zustand. Vielleicht hat Ihr Auto einen Motorschaden, einen Unfallschaden
                oder ist einfach schon sehr alt. Kein Problem – wir kaufen auch solche Fahrzeuge an.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Während Privatpersonen bei einem Motorschaden oft abwinken, sehen wir den Wert, der in jedem Fahrzeug steckt. Selbst
                Autos, die nicht mehr fahrtüchtig sind, haben noch einen Restwert, sei es für Ersatzteile oder für den Export.
              </p>
              <div className="rounded-2xl bg-white/80 border border-slate-100 p-5 shadow-sm">
                <div className="font-bold text-brand-dark mb-3">Wir kaufen jeden PKW:</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 font-medium">
                  {MOTORSCHADEN_TYPES.map((item, index) => (
                    <li key={index} className="flex gap-2 items-start">
                      <span className="mt-1 h-4 w-4 rounded-full bg-orange-100 text-brand-orange-contrast flex items-center justify-center text-[10px] font-black">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium mt-4">
                Besonders interessant ist unser Service für Besitzer von Fahrzeugen, die sich für den Export eignen. Ältere
                Mercedes-Modelle, robuste Geländewagen oder beliebte Kleinwagen finden auf ausländischen Märkten oft dankbare Abnehmer.
              </p>
              <div className="mt-4 text-slate-600 font-semibold">
                💡 Tipp: Auch wenn Ihr Auto nicht mehr fährt – kontaktieren Sie uns trotzdem. Sie werden überrascht sein, was es noch wert ist!
              </div>
              <a
                href="#bewerten"
                className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-white bg-gradient-to-r from-[#ff9a3c] to-[#ff7a1a] px-5 py-2.5 rounded-full shadow-lg shadow-orange-200/60 hover:brightness-105 transition"
              >
                Jetzt Fahrzeugwert prüfen – kostenlos & unverbindlich
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Transparenz */}
      <section id="transparenz" className="defer-render relative py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/50 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 border-4 border-slate-300/50 rounded-full" />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-orange-200/30 rounded-full blur-2xl" />
          <div className="absolute bottom-1/3 right-10 w-32 h-32 border-2 border-blue-200/40 rounded-full" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-xl md:text-2xl font-black text-brand-dark mb-6">
            Gebrauchtwagen verkaufen: Transparenz steht an erster Stelle
          </h2>
          <p className="text-slate-600 leading-relaxed font-medium mb-4">
            Transparenz ist das Fundament unseres Geschäftsmodells. Wenn Sie Ihren Gebrauchtwagen verkaufen möchten, haben Sie ein
            Recht darauf zu wissen, wie der angebotene Preis zustande kommt. Deshalb legen wir alle Bewertungskriterien offen.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium mb-4">
            Sie erfahren genau, welchen Einfluss Faktoren wie die Laufleistung, das Alter des Fahrzeugs, die Ausstattung und der
            Zustand auf den Ankaufspreis haben.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium mb-4">
            Anders als beim Privatverkauf müssen Sie sich bei uns keine Sorgen über rechtliche Fallstricke machen. Wir übernehmen die
            vollständige Haftung und Sie verkaufen das Fahrzeug wie gesehen. Das bedeutet: keine späteren Reklamationen, keine
            Diskussionen über versteckte Mängel und keine juristischen Auseinandersetzungen.
          </p>
          <div className="mt-6 rounded-2xl bg-white/80 border border-slate-100 p-5 shadow-sm">
            <p className="text-slate-600 leading-relaxed font-semibold">
              Sobald der Kaufvertrag unterschrieben ist, sind Sie aus dem Schneider.
            </p>
          </div>
        </div>
      </section>

      {/* KI-Bewertung */}
      <section id="ki" className="defer-render relative py-20 bg-white border-b border-slate-100 overflow-hidden">
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/60 via-blue-200/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 border-4 border-orange-300/40 rounded-full" />
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-slate-200/70 rounded-full blur-2xl" />
          <div className="absolute top-20 left-1/3 w-48 h-48 border-2 border-blue-200/50 rounded-full" />
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-orange-300/30 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-end pr-2 sm:pr-6 lg:pr-10 pointer-events-none">
              <img
                src="/elements/car-valuation.webp"
                alt=""
                width={460}
                height={307}
                className="w-full max-w-[460px] opacity-[0.16]"
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="relative z-10 text-left">
              <h2 className="text-xl md:text-2xl font-black text-brand-dark mb-6 text-center">
                Faire Bewertung durch künstliche Intelligenz
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Unser größter Trumpf ist die KI-gestützte Bewertung. Während traditionelle Händler oft aus dem Bauch heraus entscheiden
                oder veraltete Preislisten verwenden, setzen wir auf Datenanalyse.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Unsere Algorithmen werten kontinuierlich Verkaufsdaten von allen großen Gebrauchtwagenportalen,
                Auktionsplattformen und Händlernetzwerken aus. Das Ergebnis ist eine Preiseinschätzung, die den aktuellen Marktwert
                präzise widerspiegelt.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium mb-6">
                Sie erhalten keinen Fantasiepreis, der sich später als unrealistisch herausstellt, sondern ein solides Angebot, das auf
                echten Verkaufszahlen basiert. Diese Transparenz schafft Vertrauen und sorgt dafür, dass beide Seiten zufrieden sind.
              </p>
              <a
                href="#bewerten"
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-[#ff9a3c] to-[#ff7a1a] px-5 py-2.5 rounded-full shadow-lg shadow-orange-200/60 hover:brightness-105 transition"
              >
                JETZT AUTO BEWERTEN – Kostenlos & unverbindlich in 2 Minuten
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — matches Vite position: after all prose sections, before Zufriedenheit */}
      <section id="faq" className="defer-render relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Suspense fallback={null}>
            <FAQSection />
          </Suspense>
        </div>
      </section>

      {/* Zufriedenheit */}
      <section id="zufriedenheit" className="defer-render relative py-20 bg-white overflow-hidden">
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-orange-200/50 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 border-4 border-orange-300/40 rounded-full" />
          <div className="absolute top-1/3 left-10 w-60 h-60 bg-blue-200/40 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 right-1/3 w-44 h-44 border-2 border-slate-300/50 rounded-full" />
          <div className="absolute top-20 right-20 w-32 h-32 bg-orange-300/30 rounded-full" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-xl md:text-2xl font-black text-brand-dark mb-6">Ihre Zufriedenheit ist unser Maßstab</h2>
          <p className="text-slate-600 leading-relaxed font-medium mb-4">
            Am Ende des Tages zählt nur eines: Ihre Zufriedenheit. Wir möchten, dass Sie den Verkauf Ihres Autos als positives
            Erlebnis in Erinnerung behalten. Deshalb legen wir Wert auf eine freundliche und kompetente Beratung, faire Preise und
            eine schnelle Abwicklung.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium mb-4">
            Viele unserer Kunden kommen über Empfehlungen zu uns oder verkaufen bei ihrem nächsten Fahrzeugwechsel wieder an uns.
            Das ist für uns der beste Beweis dafür, dass wir unsere Arbeit gut machen.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium mb-6">
            Auto verkaufen muss nicht kompliziert sein – mit Meinautoverkauf.de wird er zum Kinderspiel.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium mb-4">
            Wenn Sie Ihr Auto verkaufen möchten, zögern Sie nicht länger. Nutzen Sie unser kostenloses Online-Bewertungstool und
            erfahren Sie in wenigen Minuten, was Ihr Fahrzeug wert ist. Unverbindlich, schnell und präzise. Der erste Schritt zu
            Ihrem stressfreien Autoverkauf ist nur einen Klick entfernt.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium mb-6">
            Egal ob Sie Ihren{' '}
            <Link href="/auto-verkaufen" className="text-brand-orange-contrast font-bold hover:underline">
              Gebrauchtwagen verkaufen
            </Link>
            , ein Fahrzeug mit Motorschaden loswerden oder einen PKW für den Export anbieten möchten – wir sind Ihr zuverlässiger
            Partner für den Autoankauf in ganz Deutschland. Mehr über unsere{' '}
            <Link href="/vorteile" className="text-brand-orange-contrast font-bold hover:underline">
              Vorteile
            </Link>{' '}
            und den{' '}
            <Link href="/ratgeber" className="text-brand-orange-contrast font-bold hover:underline">
              Verkaufs-Ratgeber
            </Link>
            .
          </p>
          <a
            href="#bewerten"
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-[#ff9a3c] to-[#ff7a1a] px-5 py-2.5 rounded-full shadow-lg shadow-orange-200/60 hover:brightness-105 transition"
          >
            Jetzt Auto verkaufen – Stressfrei und fair!
          </a>
        </div>
      </section>
    </div>
  );
}
