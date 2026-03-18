'use client';


import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { RATGEBER_FAQS } from '@/lib/faqContent';
import { GUIDE_CONTENT, getGuidePath } from '@/lib/guideContent';

interface Props {
  onCtaClick: () => void;
}

const TOC_LINKS = [
  { href: '#werterhalt', label: 'Werterhalt und Pflege' },
  { href: '#rechtliche-anforderungen', label: 'Rechtssicher verkaufen' },
  { href: '#motorschaden-optionen', label: 'Motorschaden und Defekte' },
  { href: '#dokumente', label: 'Dokumente und Checkliste' },
  { href: '#abmeldung-ummeldung', label: 'Abmeldung und Ummeldung' },
];

const RatgeberPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-28 w-[520px] h-[520px] bg-gradient-to-br from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[18%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-blue-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[12%] right-[12%] w-80 h-80 bg-orange-300/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[10%] w-24 h-24 bg-blue-200/50 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-[18%] w-72 h-72 border-4 border-orange-200/40 rounded-full"></div>
        <div className="absolute top-[55%] left-[6%] w-40 h-40 border-2 border-blue-200/40 rounded-full"></div>
        <div className="absolute top-24 left-20 w-4 h-4 bg-orange-300 rounded-full"></div>
        <div className="absolute top-[40%] right-[32%] w-3 h-3 bg-blue-200 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-5 h-5 bg-orange-200 rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight">
            Ratgeber: Verkauf Gebrauchtwagen – Alles was Sie wissen müssen
        </h1>
        
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            In diesem Ratgeber erhalten Sie die wichtigsten Tipps für den <strong>Verkauf Gebrauchtwagen</strong>: von Werterhalt und Unterlagen bis zu rechtlichen Pflichten bei <strong>motorschaden auto verkaufen</strong> oder <strong>defektes auto verkaufen</strong>.
          </p>
        </div>

        <section className="max-w-4xl mx-auto mb-12 rounded-3xl border border-slate-200 bg-white/90 p-6 sm:p-8">
          <h2 className="text-lg md:text-xl font-black text-brand-dark mb-4">Kurzfassung in 5 Punkten</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 font-medium">
            <li>Pflege, Wartung und Dokumentation erhöhen den Verkaufspreis deutlich.</li>
            <li>Ein sauberer Kaufvertrag und vollständige Mängelangaben schützen rechtlich.</li>
            <li>Auch Fahrzeuge mit Motorschaden oder Defekten haben oft relevanten Restwert.</li>
            <li>Vollständige Unterlagen beschleunigen die Abwicklung und schaffen Vertrauen.</li>
            <li>Abmeldung und Übergabe sollten vorab klar geregelt werden.</li>
          </ul>
        </section>

        <nav
          aria-label="Inhaltsverzeichnis Ratgeber"
          className="max-w-4xl mx-auto mb-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
        >
          <h2 className="text-lg md:text-xl font-black text-brand-dark mb-4">Inhaltsverzeichnis</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TOC_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-[44px] items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:border-brand-orange hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="max-w-4xl mx-auto mb-16 rounded-3xl border border-slate-200 bg-white/90 p-6 sm:p-8">
          <h2 className="text-lg md:text-xl font-black text-brand-dark mb-3">Ratgeber-Übersicht nach Thema</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-5">
            Alle vertiefenden Leitfäden mit Checklisten, Preisfaktoren und rechtssicheren Ablaufhinweisen:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GUIDE_CONTENT.map((guide) => (
              <Link
                key={guide.slug}
                href={getGuidePath(guide.slug)}
                className="inline-flex min-h-[44px] items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                {guide.h1}
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Tips Grid */}
        <section id="ratgeber-content" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            {
              title: "Werterhalt durch richtige Pflege",
              content: "Regelmäßige Wartung, professionelle Lackpflege und der konsequente Verzicht auf Rauchen im Auto sind entscheidend für einen hohen Wiederverkaufswert. Ein gepflegtes Fahrzeug erzielt bis zu 20% höhere Preise.",
              tag: "Wartung",
              icon: "🔧"
            },
            {
              title: "Rechtssicherer Verkauf",
              content: "Ein wasserdichter Kaufvertrag schützt Sie vor späteren Haftungsansprüchen. Erfahren Sie, welche Klauseln unverzichtbar sind und wie Sie sich beim Verkauf Gebrauchtwagen optimal absichern.",
              tag: "Recht",
              icon: "⚖️"
            },
            {
              title: "Defekte Fahrzeuge verkaufen",
              content: "Auch ein motorschaden auto verkaufen oder defektes auto verkaufen ist möglich und oft lukrativer als gedacht. Der Restwert durch Ersatzteile, Export oder Recycling kann erheblich sein.",
              tag: "Motorschaden",
              icon: "🔩"
            },
            {
              title: "TÜV & Hauptuntersuchung",
              content: "Ein frischer TÜV wirkt wie ein Qualitätssiegel und kann den Verkaufspreis um 5-10% steigern. Wir klären auf, wann sich die HU vor dem Verkauf lohnt und wann nicht.",
              tag: "Service",
              icon: "✓"
            }
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] p-10 border-2 border-slate-100 hover:border-brand-orange/30 hover:shadow-xl transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-[10px] font-black text-brand-orange uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">{item.tag}</span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-brand-dark mb-4 group-hover:text-brand-orange transition-colors">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{item.content}</p>
            </div>
          ))}
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <section className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <h2 id="werterhalt" className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Werterhalt: So maximieren Sie den Preis beim Verkauf Gebrauchtwagen</h2>
            <p className="font-medium leading-relaxed">
              Der Wert eines Gebrauchtwagens hängt maßgeblich davon ab, wie gut er gepflegt wurde. Wenn Sie in ein paar Jahren Ihren <strong>Verkauf Gebrauchtwagen</strong> planen, sollten Sie schon heute auf diese Faktoren achten. Mit unserer <Link href="/auto-bewerten" className="text-brand-orange font-bold hover:underline">kostenlosen Bewertung</Link> erfahren Sie den aktuellen Marktwert.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">1. Regelmäßige Wartung und lückenloses Scheckheft</h3>
            <p className="font-medium leading-relaxed">
              Ein lückenloses Scheckheft ist Gold wert. Lassen Sie alle vom Hersteller vorgeschriebenen Inspektionen fristgerecht durchführen und dokumentieren. Fahrzeuge mit vollständiger Service-Historie erzielen 15-20% höhere Preise als solche ohne Nachweis. Die Wartungskosten amortisieren sich beim Verkauf mehrfach.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">2. Professionelle Lack- und Innenraumpflege</h3>
            <p className="font-medium leading-relaxed">
              Kleine Kratzer und Steinschläge sollten zeitnah ausgebessert werden, bevor sie rosten. Eine regelmäßige Politur schützt den Lack und erhält den Glanz. Der Innenraum sollte sauber gehalten werden – Flecken auf Sitzen oder Teppichen mindern den Wert erheblich. Investieren Sie in Fußmatten und Sitzbezüge, um das Original zu schonen.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">3. Rauchfreies Auto – ein entscheidender Faktor</h3>
            <p className="font-medium leading-relaxed">
              Rauchen im Auto ist einer der größten Wertvernichter. Nikotingeruch lässt sich kaum vollständig entfernen und schreckt die meisten Käufer ab. Der Wertverlust kann bis zu 10% betragen. Wenn Sie rauchen, tun Sie es außerhalb des Fahrzeugs.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">4. Vorsichtiger Fahrstil</h3>
            <p className="font-medium leading-relaxed">
              Aggressives Fahren mit hohen Drehzahlen, abruptem Bremsen und harten Gangwechseln verschleißt Motor, Getriebe und Bremsen unnötig schnell. Ein schonender Fahrstil verlängert die Lebensdauer aller Komponenten und zahlt sich beim Verkauf aus.
            </p>

            <h2 id="rechtliche-anforderungen" className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Rechtliche Anforderungen für einen sicheren Autoverkauf</h2>
            <p className="font-medium leading-relaxed">
              Beim <strong>Verkauf Gebrauchtwagen</strong> gibt es wichtige rechtliche Aspekte zu beachten, um sich vor Haftungsansprüchen zu schützen:
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Der Kaufvertrag</h3>
            <p className="font-medium leading-relaxed">
              Ein schriftlicher Kaufvertrag ist Pflicht – auch beim Privatverkauf. Er sollte folgende Punkte enthalten:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Fahrzeugdaten:</strong> Marke, Modell, Fahrgestellnummer, Kilometerstand, Erstzulassung</li>
              <li><strong>Verkäufer und Käufer:</strong> Vollständige Namen, Adressen, Ausweisnummern</li>
              <li><strong>Kaufpreis:</strong> Betrag in Ziffern und Worten</li>
              <li><strong>Gewährleistungsausschluss:</strong> "Gekauft wie gesehen" – schützt vor späteren Reklamationen</li>
              <li><strong>Bekannte Mängel:</strong> Alle Ihnen bekannten Defekte müssen aufgeführt werden</li>
              <li><strong>Unterschriften:</strong> Beide Parteien mit Datum</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Offenlegungspflichten</h3>
            <p className="font-medium leading-relaxed">
              Sie sind verpflichtet, alle Ihnen bekannten Mängel wahrheitsgemäß anzugeben. Verschweigen Sie Schäden, können Sie auch nach dem Verkauf noch haftbar gemacht werden. Ehrlichkeit ist die beste Strategie und schützt Sie rechtlich.
            </p>

            <h2 id="tuev-hauptuntersuchung" className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">TÜV und Hauptuntersuchung – Wichtig für den Verkauf?</h2>
            <p className="font-medium leading-relaxed">
              Ein gültiger TÜV ist kein Muss für den Verkauf, erhöht aber den Wert und die Verkaufschancen erheblich:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Frischer TÜV (bis 6 Monate alt):</strong> Wirkt wie ein Qualitätssiegel, kann Preis um 5-10% steigern</li>
              <li><strong>TÜV kurz vor Ablauf:</strong> Neutrale Wirkung, Käufer planen neue HU ein</li>
              <li><strong>Abgelaufener TÜV:</strong> Preisabschlag von 200-500€, da Käufer die HU selbst durchführen muss</li>
            </ul>
            <p className="font-medium leading-relaxed mt-4">
              <strong>Unser Tipp:</strong> Lohnt sich eine neue HU vor dem Verkauf? Nur wenn Sie sicher sind, dass das Fahrzeug ohne teure Reparaturen durch die Prüfung kommt. Ansonsten verkaufen Sie besser ohne TÜV und senken den Preis entsprechend.
            </p>

            <h2 id="unfallfahrzeuge" className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Unfallfahrzeuge verkaufen – Was Sie wissen müssen</h2>
            <p className="font-medium leading-relaxed">
              Nicht jeder Unfall macht ein Auto zum "Unfallwagen" im rechtlichen Sinne, aber Transparenz ist entscheidend:
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Bagatellschäden vs. strukturelle Unfallschäden</h3>
            <p className="font-medium leading-relaxed">
              <strong>Bagatellschäden</strong> (z.B. kleine Parkrempler unter 500€ Schadenshöhe ohne strukturelle Beeinträchtigung) müssen erwähnt werden, machen das Fahrzeug aber nicht zum Unfallwagen. <strong>Strukturelle Unfallschäden</strong> (Karosserieschäden, Rahmenverbiegungen, Airbag-Auslösungen) müssen zwingend angegeben werden und mindern den Wert um 20-40%.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Offenlegung ist Pflicht</h3>
            <p className="font-medium leading-relaxed">
              Verschweigen Sie niemals Unfallschäden. Das kann als Betrug gewertet werden und zu Schadensersatzforderungen führen. Seien Sie ehrlich – es gibt genug Käufer, die auch Unfallfahrzeuge zu angemessenen Preisen kaufen.
            </p>

            <h2 id="motorschaden-optionen" className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Motorschaden Auto verkaufen – Ihre Optionen</h2>
            <p className="font-medium leading-relaxed">
              Viele Autobesitzer glauben, ein <strong>motorschaden auto verkaufen</strong> sei unmöglich oder nicht lohnenswert. Das stimmt nicht! Auch Fahrzeuge mit schweren Defekten haben einen Restwert. Erfahren Sie mehr über den <Link href="/auto-verkaufen" className="text-brand-orange font-bold hover:underline">Verkaufsprozess</Link> und unsere faire Bewertung.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Wert trotz Motorschaden</h3>
            <p className="font-medium leading-relaxed">
              Selbst wenn der Motor defekt ist, haben folgende Komponenten noch Wert:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Karosserie und Fahrwerk:</strong> Wenn unbeschädigt, für Ersatzteile wertvoll</li>
              <li><strong>Innenraum und Elektronik:</strong> Sitze, Lenkrad, Navigationssystem, Bordcomputer</li>
              <li><strong>Getriebe:</strong> Oft noch funktionsfähig und wertvoll</li>
              <li><strong>Reifen und Felgen:</strong> Bei gutem Zustand separat verkaufbar</li>
              <li><strong>Katalysator:</strong> Enthält wertvolle Edelmetalle</li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Abnehmer für defekte Fahrzeuge</h3>
            <p className="font-medium leading-relaxed">
              Wenn Sie ein <strong>defektes auto verkaufen</strong> möchten, gibt es mehrere Optionen:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Händler für Ersatzteile:</strong> Zerlegen das Fahrzeug und verkaufen Komponenten einzeln</li>
              <li><strong>Export:</strong> In vielen Ländern werden defekte Autos günstig repariert und weiterverkauft</li>
              <li><strong>Werkstätten:</strong> Kaufen Fahrzeuge zur Reparatur und Weiterverkauf</li>
              <li><strong>Privatpersonen:</strong> Bastler oder Hobbymechaniker suchen Projekte</li>
            </ul>

            <h2 id="defektes-auto" className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Defektes Auto verkaufen – Getriebeschaden, Elektronikprobleme & Co.</h2>
            <p className="font-medium leading-relaxed">
              Nicht nur Motorschäden, auch andere schwere Defekte müssen kein Verkaufshindernis sein:
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Getriebeschaden</h3>
            <p className="font-medium leading-relaxed">
              Ein Getriebeschaden ist nach dem Motorschaden der zweitteuerste Defekt. Trotzdem können Sie das Fahrzeug verkaufen – der Restwert liegt oft noch bei 30-50% des normalen Marktwertes.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Elektronikprobleme</h3>
            <p className="font-medium leading-relaxed">
              Moderne Fahrzeuge haben komplexe Elektronik. Defekte Steuergeräte oder Verkabelungsprobleme können teuer sein, machen den Verkauf aber nicht unmöglich. Seien Sie ehrlich über die Probleme und senken Sie den Preis entsprechend.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Rostschäden</h3>
            <p className="font-medium leading-relaxed">
              Oberflächlicher Flugrost ist weniger problematisch als durchgerostete Karosserieteile. Struktureller Rost (Schweller, Rahmen) mindert den Wert erheblich und kann das Fahrzeug bei der HU durchfallen lassen.
            </p>

            <h2 id="saisonale-markttrends" className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Saisonale Markttrends beim Autoverkauf</h2>
            <p className="font-medium leading-relaxed">
              Der richtige Verkaufszeitpunkt kann den Preis um 10-20% beeinflussen. Beachten Sie diese saisonalen Trends:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Cabrios:</strong> Im Frühling (März-Mai) bis zu 20% teurer als im Herbst</li>
              <li><strong>Geländewagen und Allradfahrzeuge:</strong> Im Herbst (September-November) am gefragtesten</li>
              <li><strong>Kleinwagen:</strong> Ganzjährig stabile Nachfrage, leichte Peaks im Frühjahr</li>
              <li><strong>Familien-SUVs:</strong> Vor den Sommerferien (Mai-Juni) besonders gefragt</li>
              <li><strong>Sportwagen:</strong> Im Frühjahr höhere Preise durch Saisonstart</li>
            </ul>

            <h2 id="elektro-hybrid" className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Elektro- und Hybridfahrzeuge – Besonderheiten</h2>
            <p className="font-medium leading-relaxed">
              Der Verkauf von Elektro- und Hybridfahrzeugen hat spezifische Aspekte:
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Batteriezustand</h3>
            <p className="font-medium leading-relaxed">
              Der Zustand der Hochvoltbatterie ist entscheidend. Die meisten Hersteller bieten eine Batteriegarantie von 8 Jahren oder 160.000 km. Lassen Sie den State of Health (SOH) der Batterie überprüfen – Werte über 90% sind gut, unter 80% problematisch.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Reichweite und Ladeinfrastruktur</h3>
            <p className="font-medium leading-relaxed">
              Die reale Reichweite ist kaufentscheidend. Ältere E-Autos mit unter 200 km Reichweite sind schwer verkäuflich. Moderne Fahrzeuge mit 400+ km Reichweite halten ihren Wert besser.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Förderprämien und Umweltbonus</h3>
            <p className="font-medium leading-relaxed">
              Staatliche Förderungen beeinflussen den Gebrauchtwagenmarkt. Wenn neue E-Autos stark gefördert werden, sinkt die Nachfrage nach Gebrauchten. Beobachten Sie die Förderpolitik.
            </p>

            <h2 id="maengel-offenlegung" className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Ehrliche Offenlegung von Mängeln – Ihre Pflicht</h2>
            <p className="font-medium leading-relaxed">
              Beim <strong>Verkauf Gebrauchtwagen</strong> müssen Sie alle Ihnen bekannten Mängel wahrheitsgemäß angeben:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium">
              <li><strong>Technische Defekte:</strong> Auch kleinere Probleme wie defekte Glühbirnen oder quietschende Bremsen</li>
              <li><strong>Optische Mängel:</strong> Kratzer, Dellen, Steinschläge, Rost</li>
              <li><strong>Unfallhistorie:</strong> Alle Unfälle, auch reparierte</li>
              <li><strong>Vorschäden:</strong> Hagelschäden, Wasserschäden, etc.</li>
              <li><strong>Manipulationen:</strong> Getunter Motor, Tachostand, etc.</li>
            </ul>
            <p className="font-medium leading-relaxed mt-4">
              <strong>Wichtig:</strong> Ein "Gekauft wie gesehen"-Klausel schützt Sie nur vor unbekannten Mängeln. Bekannte Mängel, die Sie verschweigen, können trotzdem zu Haftung führen.
            </p>

            <h2 id="dokumente" className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Erforderliche Dokumente für den Autoverkauf</h2>
            <p className="font-medium leading-relaxed">
              Für einen reibungslosen <strong>Verkauf Gebrauchtwagen</strong> benötigen Sie folgende Unterlagen:
            </p>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-8">
              <h3 className="text-base md:text-lg font-black text-brand-dark mb-6">Checkliste: Wichtige Dokumente</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
                {[
                  "Zulassungsbescheinigung Teil I (Fahrzeugschein)",
                  "Zulassungsbescheinigung Teil II (Fahrzeugbrief)",
                  "Letzter HU/AU-Bericht (TÜV-Prüfbericht)",
                  "Alle Fahrzeugschlüssel inkl. Ersatzschlüssel",
                  "Scheckheft mit vollständiger Service-Historie",
                  "Reparaturrechnungen und Werkstattnachweise",
                  "Bedienungsanleitung und Bordmappe",
                  "COC-Papiere (bei Importen)",
                  "Personalausweis oder Reisepass",
                  "Bankverbindung für Auszahlung"
                ].map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700 bg-white p-3 rounded-xl">
                    <span className="text-brand-orange text-lg flex-shrink-0">✓</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 id="abmeldung-ummeldung" className="text-xl lg:text-2xl font-black text-brand-dark mt-16 mb-6">Abmeldung und Ummeldung – Der Prozess</h2>
            <p className="font-medium leading-relaxed">
              Die Abmeldung Ihres Fahrzeugs nach dem Verkauf ist wichtig, um Haftung und weitere Kosten zu vermeiden:
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Option 1: Abmeldung vor dem Verkauf (Privatverkauf)</h3>
            <p className="font-medium leading-relaxed">
              Beim Privatverkauf empfehlen wir dringend, das Fahrzeug VOR Übergabe abzumelden. So vermeiden Sie Haftungsrisiken und stellen sicher, dass der Käufer es nicht mit Ihren Kennzeichen nutzt. Der Käufer meldet es dann selbst wieder an.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Option 2: Ummeldung auf den Käufer</h3>
            <p className="font-medium leading-relaxed">
              Alternativ können Sie und der Käufer gemeinsam zur Zulassungsstelle gehen und das Fahrzeug direkt ummelden. Das erfordert aber Koordination und ist zeitaufwendiger.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-dark mt-8 mb-4">Option 3: Händler übernimmt Abmeldung</h3>
            <p className="font-medium leading-relaxed">
              Beim Verkauf an einen Händler (wie uns) übernimmt dieser die komplette Abmeldung. Sie müssen sich um nichts kümmern – sicher und bequem.
            </p>

            <p className="font-medium leading-relaxed mt-6">
              <strong>Wichtig:</strong> Nach der Abmeldung endet automatisch Ihre Versicherungs- und Steuerpflicht. Informieren Sie trotzdem Ihre Versicherung über den Verkauf.
          </p>
        </section>

          {/* CTA Section */}
          <div className="my-20 bg-gradient-to-br from-[#0f172a] via-slate-800 to-[#0f172a] rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-xl lg:text-2xl font-black mb-6">Bereit für den Verkauf Ihres Gebrauchtwagens?</h2>
              <p className="text-slate-300 mb-12 max-w-2xl mx-auto font-semibold text-lg">
                Nutzen Sie unser Wissen für Ihren Verkaufserfolg. Ob perfekter Zustand oder <strong>motorschaden auto verkaufen</strong> – wir machen Ihnen ein faires Angebot.
              </p>
          <button 
            onClick={onCtaClick}
                className="bg-brand-orange text-white px-12 py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200"
          >
                Jetzt kostenlos Auto bewerten
          </button>
        </div>
          </div>

          {/* FAQ Section */}
          <section id="faq">
            <FAQSection faqs={RATGEBER_FAQS} />
          </section>

          {/* Conclusion */}
          <section id="fazit" className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
            <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6 text-center">Fazit: Gut vorbereitet zum erfolgreichen Verkauf</h2>
            <p className="text-slate-700 font-medium leading-relaxed mb-4">
              Der <strong>Verkauf Gebrauchtwagen</strong> wird deutlich einfacher, wenn Sie Wartung, Unterlagen und Offenlegung frühzeitig vorbereiten. So reduzieren Sie Rückfragen, sparen Zeit und vermeiden rechtliche Risiken.
            </p>
            <p className="text-slate-700 font-medium leading-relaxed mb-6">
              Wenn Sie Unterstützung beim Verkauf benötigen, starten Sie direkt mit der <Link href="/auto-bewerten" className="text-brand-orange font-bold hover:underline">kostenlosen Bewertung</Link> oder informieren Sie sich über unsere <Link href="/vorteile" className="text-brand-orange font-bold hover:underline">Vorteile beim Autoankauf</Link>.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-6 border-t border-slate-200">
              <Link href="/auto-bewerten" className="text-sm px-4 py-3 sm:py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">Kostenlos bewerten</Link>
              <Link href="/auto-verkaufen" className="text-sm px-4 py-3 sm:py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">Auto verkaufen</Link>
              <Link href="/vorteile" className="text-sm px-4 py-3 sm:py-2 bg-orange-50 text-brand-orange rounded-xl font-bold hover:bg-orange-100 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">Ihre Vorteile</Link>
              <span className="text-slate-600 text-sm font-medium py-2">Standorte:</span>
              <Link href="/autoankauf-frankfurt" className="text-sm px-4 py-3 sm:py-2 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">Frankfurt</Link>
              <Link href="/autoankauf-wiesbaden" className="text-sm px-4 py-3 sm:py-2 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">Wiesbaden</Link>
              <Link href="/autoankauf-mainz" className="text-sm px-4 py-3 sm:py-2 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">Mainz</Link>
              <Link href="/autoankauf-koeln" className="text-sm px-4 py-3 sm:py-2 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">Köln</Link>
              <Link href="/autoankauf-hamburg" className="text-sm px-4 py-3 sm:py-2 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors inline-block min-h-[44px] sm:min-h-0 flex items-center justify-center">Hamburg</Link>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default RatgeberPage;
