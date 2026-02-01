import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ValuationResults from './components/ValuationResults';
import BookingStep from './components/BookingStep';
import ConfirmationStep from './components/ConfirmationStep';
import TrustElements from './components/TrustElements';
import FAQSection from './components/FAQSection';
import MetaTags from './components/MetaTags';
import AutoBewertenPage from './pages/AutoBewerten';
import AutoVerkaufenPage from './pages/AutoVerkaufen';
import VorteilePage from './pages/VorteilePage';
import RatgeberPage from './pages/Ratgeber';
import AutoankaufFrankfurtPage from './pages/AutoankaufFrankfurt';
import AutoankaufWiesbadenPage from './pages/AutoankaufWiesbaden';
import AutoankaufMainzPage from './pages/AutoankaufMainz';
import ImpressumPage from './pages/Impressum';
import DatenschutzPage from './pages/Datenschutz';
import { AppStep, CarDetails, ValuationResult } from './types';

// Scroll: home → hero (top); other pages → main content (below hero)
const ScrollToTop: React.FC<{ onHomeEnter?: () => void }> = ({ onHomeEnter }) => {
  const { pathname, hash } = useLocation();
  const prevPathRef = React.useRef<string | null>(null);
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (pathname === '/' && prevPathRef.current && prevPathRef.current !== '/') {
      onHomeEnter?.();
    }
    prevPathRef.current = pathname;
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      const timer = setTimeout(() => {
        if (hash) {
          const hashedEl = document.querySelector(hash);
          if (hashedEl) {
            hashedEl.scrollIntoView({ behavior: 'auto', block: 'start' });
            return;
          }
        }

        const el = document.getElementById('content');
        if (el) {
          const headerOffset = 88;
          const target = (el.previousElementSibling as HTMLElement | null) ?? el;
          const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top, behavior: 'auto' });
        } else {
          window.scrollTo({ top: window.innerHeight, behavior: 'auto' });
        }
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash, onHomeEnter]);
  return null;
};

const AppContent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.VALUATION_FORM);
  const [carDetails, setCarDetails] = useState<CarDetails | null>(null);
  const [valuation, setValuation] = useState<ValuationResult | null>(null);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    let raf: number | null = null;
    const updateCtaVisibility = () => {
      if (raf !== null) return;
      raf = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const viewport = window.innerHeight;
        const maxScroll = Math.max(1, scrollHeight - viewport);
        const progress = scrollTop / maxScroll;
        setShowMobileCta(progress >= 0.2);
        raf = null;
      });
    };
    window.addEventListener('scroll', updateCtaVisibility, { passive: true });
    window.addEventListener('resize', updateCtaVisibility);
    return () => {
      if (raf !== null) window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', updateCtaVisibility);
      window.removeEventListener('resize', updateCtaVisibility);
    };
  }, []);

  const handleStartValuation = (details: CarDetails, result: ValuationResult) => {
    setCarDetails(details);
    setValuation(result);
    setCurrentStep(AppStep.RESULTS);
  };

  const resetApp = useCallback(() => {
    setCurrentStep(AppStep.VALUATION_FORM);
    setCarDetails(null);
    setValuation(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-orange selection:text-white">
      <ScrollToTop onHomeEnter={resetApp} />
      <Header onLogoClick={resetApp} />
      
      <main className="flex-grow pb-20 md:pb-0 bg-gray-50 relative">
        {/* Global background pattern */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(148 163 184) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        <Routes>
          <Route path="/" element={
            <div className="animate-in fade-in duration-1000">
              <MetaTags 
                title="Auto verkaufen online | Faire Preise & Abholung | Meinautoverkauf.de" 
                description="Auto verkaufen online in 24h ✓ Kostenlose KI-Bewertung ✓ Sicherer Autoankauf ✓ Sofortige Auszahlung ✓ Kostenlose Abholung vor Ort."
                canonicalUrl="/"
              />
              <Hero 
                onValuationComplete={handleStartValuation} 
                headline="Auto verkaufen online – Einfach, schnell & stressfrei"
                subheadline="Autoankauf – Wir kaufen Ihr Auto zum fairen Preis"
                accent="home"
              />
              
              {currentStep === AppStep.VALUATION_FORM && (
                <>
                  <section id="evaluate" className="relative py-20 bg-white border-b border-slate-100 overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/60 to-transparent rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl"></div>
                      <div className="absolute top-1/2 left-1/2 w-80 h-80 border-4 border-orange-200/40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute top-20 right-40 w-32 h-32 bg-orange-200/30 rounded-full blur-xl"></div>
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
                        {[
                          { num: "01", title: "Fahrzeugdaten eingeben", desc: "Gib online die wichtigsten Fahrzeugdaten ein – kostenlos und unverbindlich.", img: "/3-steps/fahrzeugdaten-online-eingeben.png" },
                          { num: "02", title: "Fairen Preis erhalten", desc: "Du erhältst eine transparente Preiseinschätzung auf Basis aktueller Marktdaten.", img: "/3-steps/preis-erhalten.png" },
                          { num: "03", title: "Termin wählen & Geld erhalten", desc: "Wähle einen passenden Übergabetermin und erhalte die Auszahlung bequem per Banküberweisung.", img: "/3-steps/abgabe-termin-buchen-geld-erhalten.png" }
                        ].map((step, i) => (
                          <div key={i} className="relative bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.45)] overflow-hidden">
                            <div className="absolute top-4 right-5 text-3xl font-black text-orange-100">{step.num}</div>
                            <img src={step.img} alt={step.title} className="w-full h-56 object-contain bg-slate-50/80 p-4" />
                            <div className="p-6">
                              <h3 className="text-base md:text-lg font-black text-brand-dark mb-3">{step.title}</h3>
                              <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section id="vorteile" className="relative py-20 bg-white border-b border-slate-100 overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/40 via-orange-100/30 to-transparent rounded-full blur-3xl"></div>
                      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] border-4 border-orange-200/50 rounded-full"></div>
                      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-slate-200/60 to-transparent rounded-full blur-2xl"></div>
                      <div className="absolute bottom-20 left-20 w-48 h-48 border-2 border-blue-200/40 rounded-full"></div>
                      <div className="absolute top-1/3 right-10 w-24 h-24 bg-orange-300/30 rounded-full"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                      <h2 className="text-xl md:text-2xl font-black text-center text-brand-dark mb-12">
                        Auto verkaufen online: <Link to="/vorteile" className="text-brand-orange hover:underline">Die Vorteile</Link> auf einen Blick
                      </h2>
                      <div className="relative max-w-4xl mx-auto">
                        <div className="absolute inset-0 flex items-center justify-end pr-2 sm:pr-6 lg:pr-10 pointer-events-none">
                          <img
                            src="/elements/auto-verkaufen-online-vorteile-auf-einen-blick.png"
                            alt=""
                            className="w-full max-w-[420px] opacity-[0.22]"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>
                        <div className="relative z-10 text-center lg:text-left">
                          <ul className="space-y-3 text-slate-600 font-medium max-w-3xl mx-auto text-left">
                            {[
                              { label: "Sie sparen Zeit", text: "Keine Anzeigen schalten, keine Fotos aufnehmen, keine potenziellen Käufer empfangen" },
                              { label: "Sie sparen Nerven", text: "Keine Preisverhandlungen oder unseriöse Interessenten" },
                              { label: "Sie erhalten faire Preise", text: "KI-gestützte Bewertung, oft höher als Angebote lokaler Händler" },
                              { label: "Maximale Sicherheit", text: "Keine Betrüger, sichere Banküberweisung, rechtssichere Dokumentation" },
                              { label: "Abholung", text: "Wir kommen zu Ihnen nach Hause" },
                              { label: "Blitzschnelle Auszahlung", text: "Geld in weniger Stunden auf Ihrem Konto" },
                              { label: "Keine Gewährleistung", text: "Sie verkaufen \"wie gesehen\" ohne spätere Haftung" }
                            ].map((item, index) => (
                              <li key={index} className="flex items-start justify-start gap-3">
                                <span className="mt-1 h-5 w-5 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center text-xs font-black">✓</span>
                                <span className="max-w-2xl"><span className="font-bold text-brand-orange">{item.label}</span> – {item.text}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-slate-600 leading-relaxed font-medium pt-6 max-w-3xl mx-auto text-left">
                            Ein weiterer großer Vorteil ist die Sicherheit. Beim Privatverkauf besteht immer das Risiko, an Betrüger zu geraten. Gefälschte
                            Überweisungsbestätigungen, ungedeckte Schecks oder sogar Diebstahl sind leider keine Seltenheit. Bei uns erhalten Sie Ihr Geld per
                            sicherer Banküberweisung, und die gesamte Transaktion wird rechtssicher dokumentiert.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="versprechen" className="relative py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-300/30 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-10 left-10 w-64 h-64 border-4 border-orange-200/40 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl"></div>
                      <div className="absolute top-10 right-1/3 w-32 h-32 border-2 border-slate-300/50 rounded-full"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                      <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-xl md:text-2xl font-black text-brand-dark mb-5">
                          Sicher, schnell und seriös: Das Versprechen von Meinautoverkauf.de
                        </h2>
                        <p className="text-slate-600 font-medium leading-relaxed">
                          Seriösität ist im Autoankauf-Geschäft leider keine Selbstverständlichkeit. Bei Meinautoverkauf.de legen wir größten Wert auf einen
                          sauberen und transparenten Geschäftsablauf.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { title: "Rechtssichere Abwicklung", desc: "Alle Verträge entsprechen den aktuellen rechtlichen Anforderungen. Sie erhalten eine Kopie des Kaufvertrags für Ihre Unterlagen." },
                          { title: "Kostenlose Abmeldung", desc: "Die Abmeldung des Fahrzeugs bei der Zulassungsstelle übernehmen wir kostenfrei. Sie müssen sich um nichts kümmern." },
                          { title: "Sichere Auszahlung", desc: "Ihr Geld wird per Banküberweisung oder Bar transferiert – keine unsicheren Zahlungsmethoden." }
                        ].map((item, index) => (
                          <div key={index} className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-sm">
                            <div className="text-brand-orange font-black text-lg mb-2">{item.title}</div>
                            <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section id="warum" className="relative py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-orange-200/50 to-transparent rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-10 -right-10 w-96 h-96 border-4 border-slate-300/60 rounded-full"></div>
                      <div className="absolute top-1/3 right-20 w-40 h-40 bg-blue-200/40 rounded-full blur-xl"></div>
                      <div className="absolute bottom-1/4 left-10 w-56 h-56 border-2 border-orange-200/40 rounded-full"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                      <div className="relative max-w-4xl mx-auto">
                        <div className="absolute inset-0 flex items-center justify-end pr-2 sm:pr-6 lg:pr-10 pointer-events-none">
                          <img src="/elements/autoankauf-neu-gedacht.png" alt="" className="w-full max-w-[460px] opacity-[0.16]" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
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
                            Unsere künstliche Intelligenz analysiert in Echtzeit Tausende von Transaktionsdaten und ermittelt so einen marktgerechten Preis
                            für Ihr Fahrzeug. Diese KI-gestützte Bewertung berücksichtigt nicht nur Marke, Modell und Kilometerstand, sondern auch regionale
                            Markttrends und saisonale Schwankungen.
                          </p>
                          <div className="mt-6 rounded-2xl bg-white/80 border border-slate-100 p-5 shadow-sm">
                            <p className="text-slate-600 leading-relaxed font-semibold">
                              Ihr Auto in guten Händen: Wir kaufen Fahrzeuge in ganz Deutschland – von München über Berlin bis Hamburg, von <Link to="/autoankauf-frankfurt" className="text-brand-orange font-bold hover:underline">Frankfurt</Link> über <Link to="/autoankauf-wiesbaden" className="text-brand-orange font-bold hover:underline">Wiesbaden</Link> und <Link to="/autoankauf-mainz" className="text-brand-orange font-bold hover:underline">Mainz</Link> bis Köln und darüber hinaus. Unser Service ist überall verfügbar.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="motorschaden" className="relative py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-slate-200/70 to-transparent rounded-full blur-3xl"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 border-4 border-orange-300/40 rounded-full"></div>
                      <div className="absolute top-1/3 right-10 w-56 h-56 bg-orange-200/40 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-10 left-1/3 w-40 h-40 border-2 border-blue-200/50 rounded-full"></div>
                      <div className="absolute top-20 left-20 w-28 h-28 bg-slate-300/40 rounded-full"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                      <div className="relative max-w-4xl mx-auto">
                        <div className="absolute inset-0 flex items-center justify-start pl-2 sm:pl-6 lg:pl-10 pointer-events-none">
                          <img src="/elements/auto-verkaufen-mit-motorschaden.png" alt="" className="w-full max-w-[460px] opacity-[0.4]" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </div>
                        <div className="relative z-10 text-left">
                          <h2 className="text-xl md:text-2xl font-black text-brand-dark mb-6 text-center">
                            Autoverkauf auch bei Motorschaden oder für Export möglich
                          </h2>
                          <p className="text-slate-600 leading-relaxed font-medium mb-4">
                            Nicht jedes Fahrzeug ist in einem perfekten Zustand. Vielleicht hat Ihr Auto einen Motorschaden, einen Unfallschaden oder ist einfach
                            schon sehr alt. Kein Problem – wir kaufen auch solche Fahrzeuge an.
                          </p>
                          <p className="text-slate-600 leading-relaxed font-medium mb-4">
                            Während Privatpersonen bei einem Motorschaden oft abwinken, sehen wir den Wert, der in jedem Fahrzeug steckt. Selbst Autos, die nicht
                            mehr fahrtüchtig sind, haben noch einen Restwert, sei es für Ersatzteile oder für den Export.
                          </p>
                          <div className="rounded-2xl bg-white/80 border border-slate-100 p-5 shadow-sm">
                            <div className="font-bold text-brand-dark mb-3">Wir kaufen jeden PKW:</div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 font-medium">
                              {["Autos mit Motorschaden", "Unfallfahrzeuge", "Fahrzeuge ohne TÜV", "Exportfahrzeuge", "Oldtimer und Liebhaberfahrzeuge", "Hochwertige Gebrauchtwagen aller Marken"].map((item, index) => (
                                <li key={index} className="flex gap-2 items-start">
                                  <span className="mt-1 h-4 w-4 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center text-[10px] font-black">✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <p className="text-slate-600 leading-relaxed font-medium mt-4">
                            Besonders interessant ist unser Service für Besitzer von Fahrzeugen, die sich für den Export eignen. Ältere Mercedes-Modelle, robuste
                            Geländewagen oder beliebte Kleinwagen finden auf ausländischen Märkten oft dankbare Abnehmer.
                          </p>
                          <div className="mt-4 text-slate-600 font-semibold">
                            💡 Tipp: Auch wenn Ihr Auto nicht mehr fährt – kontaktieren Sie uns trotzdem. Sie werden überrascht sein, was es noch wert ist!
                          </div>
                          <a href="#bewerten" className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-white bg-gradient-to-r from-[#ff9a3c] to-[#ff7a1a] px-5 py-2.5 rounded-full shadow-lg shadow-orange-200/60 hover:brightness-105 transition">
                            Jetzt Fahrzeugwert prüfen – kostenlos & unverbindlich
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="transparenz" className="relative py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/50 to-transparent rounded-full blur-3xl"></div>
                      <div className="absolute bottom-10 left-20 w-80 h-80 border-4 border-slate-300/50 rounded-full"></div>
                      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-orange-200/30 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-1/3 right-10 w-32 h-32 border-2 border-blue-200/40 rounded-full"></div>
                    </div>
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                      <h2 className="text-xl md:text-2xl font-black text-brand-dark mb-6">
                        Gebrauchtwagen verkaufen: Transparenz steht an erster Stelle
                      </h2>
                      <p className="text-slate-600 leading-relaxed font-medium mb-4">
                        Transparenz ist das Fundament unseres Geschäftsmodells. Wenn Sie Ihren Gebrauchtwagen verkaufen möchten, haben Sie ein Recht darauf
                        zu wissen, wie der angebotene Preis zustande kommt. Deshalb legen wir alle Bewertungskriterien offen.
                      </p>
                      <p className="text-slate-600 leading-relaxed font-medium mb-4">
                        Sie erfahren genau, welchen Einfluss Faktoren wie die Laufleistung, das Alter des Fahrzeugs, die Ausstattung und der Zustand auf den
                        Ankaufspreis haben.
                      </p>
                      <p className="text-slate-600 leading-relaxed font-medium mb-4">
                        Anders als beim Privatverkauf müssen Sie sich bei uns keine Sorgen über rechtliche Fallstricke machen. Wir übernehmen die vollständige
                        Haftung und Sie verkaufen das Fahrzeug wie gesehen. Das bedeutet: keine späteren Reklamationen, keine Diskussionen über versteckte Mängel
                        und keine juristischen Auseinandersetzungen.
                      </p>
                      <div className="mt-6 rounded-2xl bg-white/80 border border-slate-100 p-5 shadow-sm">
                        <p className="text-slate-600 leading-relaxed font-semibold">
                          Sobald der Kaufvertrag unterschrieben ist, sind Sie aus dem Schneider.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="ki" className="relative py-20 bg-white border-b border-slate-100 overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/60 via-blue-200/40 to-transparent rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 right-1/4 w-96 h-96 border-4 border-orange-300/40 rounded-full"></div>
                      <div className="absolute top-1/2 right-10 w-64 h-64 bg-slate-200/70 rounded-full blur-2xl"></div>
                      <div className="absolute top-20 left-1/3 w-48 h-48 border-2 border-blue-200/50 rounded-full"></div>
                      <div className="absolute bottom-20 left-20 w-36 h-36 bg-orange-300/30 rounded-full"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                      <div className="relative max-w-4xl mx-auto">
                        <div className="absolute inset-0 flex items-center justify-end pr-2 sm:pr-6 lg:pr-10 pointer-events-none">
                          <img src="/elements/car-valuation.png" alt="" className="w-full max-w-[460px] opacity-[0.16]" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        </div>
                        <div className="relative z-10 text-left">
                          <h2 className="text-xl md:text-2xl font-black text-brand-dark mb-6 text-center">
                            Faire Bewertung durch künstliche Intelligenz
                          </h2>
                          <p className="text-slate-600 leading-relaxed font-medium mb-4">
                            Unser größter Trumpf ist die KI-gestützte Bewertung. Während traditionelle Händler oft aus dem Bauch heraus entscheiden oder veraltete
                            Preislisten verwenden, setzen wir auf Datenanalyse.
                          </p>
                          <p className="text-slate-600 leading-relaxed font-medium mb-4">
                            Unsere Algorithmen werten kontinuierlich Verkaufsdaten von allen großen Gebrauchtwagenportalen, Auktionsplattformen und Händlernetzwerken
                            aus. Das Ergebnis ist eine Preiseinschätzung, die den aktuellen Marktwert präzise widerspiegelt.
                          </p>
                          <p className="text-slate-600 leading-relaxed font-medium mb-6">
                            Sie erhalten keinen Fantasiepreis, der sich später als unrealistisch herausstellt, sondern ein solides Angebot, das auf echten
                            Verkaufszahlen basiert. Diese Transparenz schafft Vertrauen und sorgt dafür, dass beide Seiten zufrieden sind.
                          </p>
                          <a href="#bewerten" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-[#ff9a3c] to-[#ff7a1a] px-5 py-2.5 rounded-full shadow-lg shadow-orange-200/60 hover:brightness-105 transition">
                            JETZT AUTO BEWERTEN – Kostenlos & unverbindlich in 2 Minuten
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>

                  <TrustElements />
                  <FAQSection />

                  <section id="zufriedenheit" className="relative py-20 bg-white overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-orange-200/50 to-transparent rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 right-0 w-80 h-80 border-4 border-orange-300/40 rounded-full"></div>
                      <div className="absolute top-1/3 left-10 w-60 h-60 bg-blue-200/40 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-1/4 right-1/3 w-44 h-44 border-2 border-slate-300/50 rounded-full"></div>
                      <div className="absolute top-20 right-20 w-32 h-32 bg-orange-300/30 rounded-full"></div>
                    </div>
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                      <h2 className="text-xl md:text-2xl font-black text-brand-dark mb-6">
                        Ihre Zufriedenheit ist unser Maßstab
                      </h2>
                      <p className="text-slate-600 leading-relaxed font-medium mb-4">
                        Am Ende des Tages zählt nur eines: Ihre Zufriedenheit. Wir möchten, dass Sie den Verkauf Ihres Autos als positives Erlebnis in Erinnerung
                        behalten. Deshalb legen wir Wert auf eine freundliche und kompetente Beratung, faire Preise und eine schnelle Abwicklung.
                      </p>
                      <p className="text-slate-600 leading-relaxed font-medium mb-4">
                        Viele unserer Kunden kommen über Empfehlungen zu uns oder verkaufen bei ihrem nächsten Fahrzeugwechsel wieder an uns. Das ist für uns der
                        beste Beweis dafür, dass wir unsere Arbeit gut machen.
                      </p>
                      <p className="text-slate-600 leading-relaxed font-medium mb-6">
                        Auto verkaufen muss nicht kompliziert sein – mit Meinautoverkauf.de wird er zum Kinderspiel.
                      </p>
                      <p className="text-slate-600 leading-relaxed font-medium mb-4">
                        Wenn Sie Ihr Auto verkaufen möchten, zögern Sie nicht länger. Nutzen Sie unser kostenloses Online-Bewertungstool und erfahren Sie in wenigen
                        Minuten, was Ihr Fahrzeug wert ist. Unverbindlich, schnell und präzise. Der erste Schritt zu Ihrem stressfreien Autoverkauf ist nur einen Klick entfernt.
                      </p>
                      <p className="text-slate-600 leading-relaxed font-medium mb-6">
                        Egal ob Sie Ihren <Link to="/auto-verkaufen" className="text-brand-orange font-bold hover:underline">Gebrauchtwagen verkaufen</Link>, ein Fahrzeug mit Motorschaden loswerden oder einen PKW für den Export anbieten möchten –
                        wir sind Ihr zuverlässiger Partner für den Autoankauf in ganz Deutschland. Mehr über unsere <Link to="/vorteile" className="text-brand-orange font-bold hover:underline">Vorteile</Link> und den <Link to="/ratgeber" className="text-brand-orange font-bold hover:underline">Verkaufs-Ratgeber</Link>.
                      </p>
                      <a href="#bewerten" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-[#ff9a3c] to-[#ff7a1a] px-5 py-2.5 rounded-full shadow-lg shadow-orange-200/60 hover:brightness-105 transition">
                        Jetzt Auto verkaufen – Stressfrei und fair!
                      </a>
                    </div>
                  </section>
                </>
              )}

              {currentStep === AppStep.RESULTS && valuation && carDetails && (
                <div className="container mx-auto px-4 py-16">
                  <ValuationResults 
                    valuation={valuation} 
                    carDetails={carDetails} 
                    onNext={() => setCurrentStep(AppStep.BOOKING)}
                    onBack={() => setCurrentStep(AppStep.VALUATION_FORM)}
                  />
                </div>
              )}

              {currentStep === AppStep.BOOKING && carDetails && (
                <div className="container mx-auto px-4 py-16">
                  <BookingStep 
                    onComplete={() => setCurrentStep(AppStep.CONFIRMATION)} 
                    onBack={() => setCurrentStep(AppStep.RESULTS)}
                  />
                </div>
              )}

              {currentStep === AppStep.CONFIRMATION && (
                <div className="container mx-auto px-4 py-16">
                  <ConfirmationStep onReset={resetApp} />
                </div>
              )}
            </div>
          } />

          <Route path="/auto-bewerten" element={
            <div className="animate-in fade-in duration-1000">
              <MetaTags 
                title="Auto bewerten online | Kostenlose Wertermittlung | Meinautoverkauf.de" 
                description="Was ist mein Auto wert? Erhalten Sie eine präzise Fahrzeugbewertung online ✓ Kostenlos ✓ In 2 Minuten ✓ Basis für den Autoankauf."
                canonicalUrl="/auto-bewerten"
              />
              <Hero 
                onValuationComplete={handleStartValuation} 
                headline="Auto bewerten online – Kostenlos & präzise Wertermittlung"
                subheadline="In 2 Minuten den realistischen Marktwert Ihres Fahrzeugs erhalten"
                accent="bewerten"
                headlineTag="h2"
              />
              <AutoBewertenPage onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            </div>
          } />

          <Route path="/auto-verkaufen" element={
            <div className="animate-in fade-in duration-1000">
              <MetaTags 
                title="Auto verkaufen online | Sicherer Autoankauf | Meinautoverkauf.de" 
                description="Auto online verkaufen zum Bestpreis ✓ Wir kaufen Ihren Gebrauchtwagen ✓ Sofortige Auszahlung ✓ Kostenlose Abmeldung ✓ Alle Marken."
                canonicalUrl="/auto-verkaufen"
              />
              <Hero 
                onValuationComplete={handleStartValuation} 
                headline="Auto verkaufen online – Schnell, fair & sicher"
                subheadline="Kostenlose Bewertung und stressfreier Verkauf in ganz Deutschland"
                accent="verkaufen"
              />
              <AutoVerkaufenPage onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            </div>
          } />

          <Route path="/vorteile" element={
            <div className="animate-in fade-in duration-1000">
              <MetaTags 
                title="Vorteile beim Autoankauf | Warum Meinautoverkauf.de?" 
                description="Entdecken Sie Ihre Vorteile beim Autoverkauf ✓ Sicherer Vertrag ✓ Keine Haftung ✓ Bestpreis-Garantie ✓ Home-Pickup Service."
                canonicalUrl="/vorteile"
              />
              <Hero 
                onValuationComplete={handleStartValuation} 
                headline="Ihre Vorteile beim Autoankauf – Transparent & zuverlässig"
                subheadline="So einfach war Auto verkaufen noch nie"
                accent="vorteile"
              />
              <VorteilePage onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            </div>
          } />

          <Route path="/ratgeber" element={
            <div className="animate-in fade-in duration-1000">
              <MetaTags 
                title="Auto-Ratgeber | Tipps zum Autoverkauf & Werterhalt" 
                description="Profi-Tipps für den Autoverkauf ✓ Werterhalt maximieren ✓ Rechtssichere Verträge ✓ Motorschaden verkaufen ✓ Alles rund um PKW."
                canonicalUrl="/ratgeber"
              />
              <Hero 
                onValuationComplete={handleStartValuation} 
                headline="Auto Ratgeber – Tipps, Checklisten & Wissen"
                subheadline="Alles rund um Bewertung, Verkauf und Marktpreise"
                accent="ratgeber"
              />
              <RatgeberPage onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            </div>
          } />

          <Route path="/autoankauf-frankfurt" element={
            <div className="animate-in fade-in duration-1000">
              <MetaTags 
                title="Autoankauf Frankfurt | Alle Stadtteile | Sofort-Auszahlung | Fair" 
                description="Autoankauf Frankfurt ✓ Kostenlose Abholung in allen Stadtteilen ✓ Sofortige Zahlung ✓ Auch Diesel & Umweltzone ✓ Business-Service für Frankfurter."
                canonicalUrl="/autoankauf-frankfurt"
              />
              <Hero 
                onValuationComplete={handleStartValuation} 
                headline="Autoankauf Frankfurt – Ihr lokaler Partner"
                subheadline="Faire Preise, schnelle Abwicklung in Frankfurt am Main"
                accent="verkaufen"
              />
              <AutoankaufFrankfurtPage 
                onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>
          } />

          <Route path="/autoankauf-wiesbaden" element={
            <div className="animate-in fade-in duration-1000">
              <MetaTags 
                title="Autoankauf Wiesbaden | Auto verkaufen sofort | Kostenlose Abholung" 
                description="Autoankauf Wiesbaden ✓ Kostenlose Abholung in allen Stadtteilen ✓ Sofortige Zahlung ✓ Motorschaden & Unfallwagen ✓ Faire Preise in der Kurstadt."
                canonicalUrl="/autoankauf-wiesbaden"
              />
              <Hero 
                onValuationComplete={handleStartValuation} 
                headline="Autoankauf Wiesbaden – Seriös & transparent"
                subheadline="Auto verkaufen in der Landeshauptstadt Hessen"
                accent="verkaufen"
              />
              <AutoankaufWiesbadenPage 
                onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>
          } />

          <Route path="/autoankauf-mainz" element={
            <div className="animate-in fade-in duration-1000">
              <MetaTags 
                title="Autoankauf Mainz | Alle Stadtteile | Kastel & Kostheim | Fair" 
                description="Autoankauf Mainz ✓ Kostenlose Abholung in allen Stadtteilen ✓ Auch Mainz-Kastel & Kostheim ✓ Sofortige Zahlung ✓ Persönlich & vertrauensvoll."
                canonicalUrl="/autoankauf-mainz"
              />
              <Hero 
                onValuationComplete={handleStartValuation} 
                headline="Autoankauf Mainz – Zuverlässiger Service"
                subheadline="Ihr Auto-Partner in der Gutenberg-Stadt"
                accent="verkaufen"
              />
              <AutoankaufMainzPage 
                onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>
          } />

          <Route path="/impressum" element={
            <div className="animate-in fade-in duration-1000">
              <MetaTags
                title="Impressum | Meinautoverkauf.de"
                description="Impressum von Meinautoverkauf.de – Anbieterkennzeichnung, Kontakt und rechtliche Hinweise."
                canonicalUrl="/impressum"
              />
              <ImpressumPage />
            </div>
          } />

          <Route path="/datenschutz" element={
            <div className="animate-in fade-in duration-1000">
              <MetaTags
                title="Datenschutzerklärung | Meinautoverkauf.de"
                description="Datenschutzerklärung von Meinautoverkauf.de – Informationen zur Verarbeitung personenbezogener Daten."
                canonicalUrl="/datenschutz"
              />
              <DatenschutzPage />
            </div>
          } />
        </Routes>
      </main>

      <div
        className={`md:hidden fixed left-0 right-0 bottom-0 px-4 pb-4 z-40 transition-transform duration-300 ease-in-out ${
          showMobileCta ? 'translate-y-0' : 'translate-y-full'
        }`}
        aria-hidden={!showMobileCta}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mx-auto w-full max-w-[280px] rounded-full bg-brand-orange text-white text-sm font-bold py-3 shadow-[0_10px_20px_rgba(15,23,42,0.22)] active:scale-[0.99] transition-transform"
        >
          Jetzt Auto bewerten
        </button>
      </div>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
};

export default App;
