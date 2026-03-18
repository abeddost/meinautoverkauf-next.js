'use client';

import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { NEUSTADT_WEINSTRASSE_FAQS } from '@/lib/faqContent';

interface Props {
  onCtaClick: () => void;
}

const AutoankaufNeustadtWeinstrassePage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-rose-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[25%] -left-40 w-[520px] h-[520px] bg-gradient-to-tr from-orange-200/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[12%] right-[8%] w-80 h-80 bg-rose-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-[12%] w-24 h-24 bg-orange-200/40 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-[18%] w-72 h-72 border-4 border-rose-200/40 rounded-full"></div>
        <div className="absolute top-24 left-20 w-4 h-4 bg-rose-300 rounded-full"></div>
        <div className="absolute top-[40%] right-[32%] w-3 h-3 bg-orange-200 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-5 h-5 bg-rose-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-rose-200/40 rounded-full blur-2xl"></div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tight relative">
            Autoankauf Neustadt an der Weinstraße –{' '}
            <span className="text-brand-orange">Schnell verkaufen & sofort auszahlen</span>{' '}
            lassen
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl">
            Sie möchten Ihr Auto in Neustadt an der Weinstraße verkaufen – ohne Stress und mit fairem Preis?
            Neustadt ist das Herz der Deutschen Weinstraße in der Pfalz: Weinbau, Tourismus und eine gute
            Anbindung per B39 und S-Bahn RheinNeckar nach Ludwigshafen und Mannheim. Viele Pendler und
            Weingut-Betreiber wechseln irgendwann ihr Fahrzeug. Wir kaufen Ihr Auto direkt an: Online bewerten,
            Termin wählen, Abholung bei Ihnen – Auszahlung noch am selben Tag. Kostenlose Abmeldung bei der
            Zulassungsstelle Neustadt (NW-Kennzeichen) inklusive.
          </p>

          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-lg font-black text-brand-dark mb-5">Warum Auto in Neustadt an der Weinstraße bei uns verkaufen?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Kostenlose Online-Bewertung in 2 Minuten',
                'Auszahlung per Banküberweisung am Tag der Übergabe',
                'Kostenlose Abholung in Neustadt, allen Ortsbezirken und an der Weinstraße',
                'Abmeldung bei der Zulassungsstelle Neustadt (NW) inklusive',
                'Ankauf aller Marken – auch Pendler- und ältere Fahrzeuge',
                'Flexible Termine, auch abends und am Wochenende',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Neustadt an der Weinstraße – Weinstadt mit starkem Automarkt
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Neustadt an der Weinstraße ist die Weinhauptstadt der Pfalz und Startpunkt der Deutschen Weinstraße.
            Die B39 verbindet die Stadt mit Ludwigshafen und Landau; die S-Bahn RheinNeckar bringt Pendler
            nach Mannheim und Ludwigshafen. Das prägt den lokalen Fahrzeugmarkt: viele Gebrauchtwagen aus
            Pendlerhand, Familienfahrzeuge aus den Ortsbezirken und ältere Modelle von Weingütern oder
            Betrieben, die verkauft werden müssen – ob wegen Umzug, Fahrzeugwechsel oder dem Wunsch nach
            einem unkomplizierten Verkauf ohne Inserate.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed mb-4">
            Wir bieten genau das: KI-gestützte Preisermittlung, verbindliches Angebot und Abholung direkt bei
            Ihnen – in der Innenstadt, in Gimmeldingen, Haardt, Hambach, Diedesfeld, Lachen-Speyerdorf oder
            in einem der anderen Ortsbezirke. Die Abmeldung bei der Zulassungsstelle Neustadt an der Weinstraße
            (NW-Kennzeichen) übernehmen wir vollständig; die Auszahlung erfolgt noch am selben Tag per
            Banküberweisung. So verkaufen Sie Ihr Auto an der Weinstraße schnell und fair – ohne Aufwand und
            ohne Wartezeit auf Privatkäufer.
          </p>
          <p className="text-slate-600 font-medium leading-relaxed">
            Der Haardtrand und die Deutsche Weinstraße sind beliebte Ausflugsziele; wer sein Fahrzeug nicht
            mehr braucht oder in eine andere Region wechselt, findet bei uns einen klaren Ablauf und einen
            datenbasierten Preis – unabhängig davon, ob Ihr Auto ein NW-Kennzeichen trägt oder aus einer
            Nachbargemeinde stammt.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf in Neustadt und allen Ortsbezirken der Weinstraße
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir holen Ihr Fahrzeug kostenlos bei Ihnen ab – in der Stadt und in der Region:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Neustadt Kernstadt</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Innenstadt', 'Haardt', 'Gimmeldingen', 'Hambach', 'Mußbach', 'Duttweiler', 'Lachen-Speyerdorf', 'Diedesfeld'].map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Deutsche Weinstraße</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Deidesheim', 'Ruppertsberg', 'Wachenheim', 'Bad Dürkheim', 'Ungstein', 'Königsbach', 'Maikammer', 'Edenkoben'].map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-brand-dark mb-3 text-sm uppercase tracking-wide">Pfalz / Rhein-Neckar</h3>
              <ul className="space-y-1.5 text-slate-600 font-medium text-sm">
                {['Speyer', 'Ludwigshafen', 'Mannheim', 'Landau', 'Kaiserslautern', 'Neustadt Umland', 'Heidelberg', 'Frankenthal'].map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-8">
            Unser Ablauf: So verkaufen Sie Ihr Auto in Neustadt an der Weinstraße
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Online bewerten', desc: 'Fahrzeugdaten eingeben, in 2 Minuten ein KI-gestütztes Angebot erhalten – kostenlos und unverbindlich.' },
              { step: '02', title: 'Termin vereinbaren', desc: 'Wir kommen zu Ihnen nach Neustadt oder in einen Ortsbezirk. Abholung auch abends oder am Samstag möglich.' },
              { step: '03', title: 'Übergabe & sofortige Zahlung', desc: 'Kurze Prüfung vor Ort, Kaufvertrag, Übergabe. Auszahlung noch am selben Tag. Abmeldung bei der Zulassungsstelle Neustadt übernehmen wir.' },
            ].map((item) => (
              <div key={item.step} className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-7 border border-slate-100 shadow-sm">
                <div className="text-5xl font-black text-brand-orange/20 mb-3">{item.step}</div>
                <h3 className="font-black text-brand-dark mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Fahrzeugtypen in Neustadt an der Weinstraße – was wir annehmen
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Wir kaufen alle Fahrzeuge an – unabhängig von Marke, Baujahr oder Zustand. An der Weinstraße
            bewerten wir besonders oft:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Pendlerfahrzeuge & Alltagsautos', desc: 'Viele Neustadter pendeln per B39 oder S-Bahn nach Ludwigshafen und Mannheim. Gebrauchte Mittelklasse, Kombis und Diesel – wir kaufen sie alle an.' },
              { title: 'Familienfahrzeuge & Weinstadt-Alltag', desc: 'Familien in den Ortsbezirken und Weingut-Mitarbeitende wechseln oft das Auto. Wir bewerten transparent nach aktuellem Marktwert.' },
              { title: 'Ältere Fahrzeuge & hohe Laufleistung', desc: 'Pendlerwagen mit vielen Kilometern oder ältere Modelle – kein Problem. Wir bewerten fair, auch ohne gültige HU.' },
              { title: 'Defekte Fahrzeuge & ohne TÜV', desc: 'Auch beschädigte Fahrzeuge, Unfallwagen oder Autos ohne gültige HU kaufen wir an. Vollständige Papiere und Eigentumsnachweis vorausgesetzt.' },
            ].map((cat) => (
              <div key={cat.title} className="flex gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-black text-brand-dark mb-1 text-sm">{cat.title}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-lg lg:text-xl font-black mb-4">
              Deutsche Weinstraße & Metropolregion Rhein-Neckar
            </h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-5">
              Neustadt an der Weinstraße verbindet die Pfalz mit Ludwigshafen und Mannheim. Ob Sie nach einem
              Jobwechsel Ihr Pendlerauto verkaufen, von der Weinstraße wegziehen oder einfach einen
              unkomplizierten Verkauf ohne Inserate suchen: Wir übernehmen Bewertung, Abholung, Abmeldung
              bei der Zulassungsstelle Neustadt und Auszahlung am selben Tag.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 font-medium">
              <div>
                <div className="font-black text-white mb-1.5">Pendler LU / MA</div>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Termine auch abends oder am Wochenende</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Abholung entlang B39 und in allen Ortsbezirken</li>
                </ul>
              </div>
              <div>
                <div className="font-black text-white mb-1.5">Rheinland-Pfalz</div>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>NW-Kennzeichen – Abmeldung inklusive</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>Faire Preise an der gesamten Weinstraße</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-brand-dark mb-6">
            Autoankauf Neustadt vs. Privatverkauf im Vergleich
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden">
            {[
              { label: 'Zeit bis zum Verkauf', ankauf: '1–2 Tage', privat: '3–8 Wochen' },
              { label: 'Aufwand', ankauf: 'Minimal – wir kommen zu Ihnen', privat: 'Inserate, Besichtigungen, Verhandlungen' },
              { label: 'Sicherheit', ankauf: 'Vertraglich gesichert, sofortige Zahlung', privat: 'Betrugsrisiko möglich' },
              { label: 'Haftung nach Verkauf', ankauf: 'Keine Gewährleistung', privat: 'Mängelhaftung möglich' },
              { label: 'Abmeldung', ankauf: 'Wir übernehmen (Zulassungsstelle Neustadt)', privat: 'Selbst zuständig' },
            ].map((row) => (
              <div key={row.label} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">{row.label}</div>
                <div className="flex gap-3">
                  <div className="flex-1 bg-green-50 border border-green-100 rounded-lg p-2.5">
                    <div className="text-xs text-green-700 font-black mb-0.5">Ankauf</div>
                    <div className="text-xs text-green-800 font-semibold">{row.ankauf}</div>
                  </div>
                  <div className="flex-1 bg-red-50 border border-red-100 rounded-lg p-2.5">
                    <div className="text-xs text-red-700 font-black mb-0.5">Privat</div>
                    <div className="text-xs text-red-800 font-semibold">{row.privat}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-6 py-4 font-black">Kriterium</th>
                  <th className="text-left px-6 py-4 font-black text-brand-orange">Autoankauf</th>
                  <th className="text-left px-6 py-4 font-black">Privatverkauf</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Zeit bis zum Verkauf', ankauf: '1–2 Tage', privat: '3–8 Wochen' },
                  { label: 'Aufwand', ankauf: 'Minimal – Abholung bei Ihnen', privat: 'Inserate, Besichtigungen, Verhandlungen' },
                  { label: 'Sicherheit', ankauf: 'Vertraglich, sofortige Zahlung', privat: 'Betrugsrisiko möglich' },
                  { label: 'Haftung', ankauf: 'Keine Gewährleistung', privat: 'Mängelhaftung möglich' },
                  { label: 'Abmeldung', ankauf: 'Wir übernehmen (Zulassungsstelle Neustadt)', privat: 'Selbst zuständig' },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-3.5 font-semibold text-slate-700">{row.label}</td>
                    <td className="px-6 py-3.5 font-semibold text-green-700">{row.ankauf}</td>
                    <td className="px-6 py-3.5 font-medium text-slate-500">{row.privat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <FAQSection title="Häufige Fragen zum Autoankauf in Neustadt an der Weinstraße" faqs={[...NEUSTADT_WEINSTRASSE_FAQS]} sectionId="faq-neustadt-weinstrasse" />

        <section className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
          <h2 className="text-xl font-black text-brand-dark mb-6 text-center">Weitere Standorte in der Region</h2>
          <p className="text-slate-600 font-medium leading-relaxed mb-6 text-center">
            Unser Autoankauf-Service ist an der Weinstraße und in der Metropolregion Rhein-Neckar verfügbar:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/auto-bewerten', label: '→ Jetzt Auto kostenlos bewerten' },
              { href: '/autoankauf-ludwigshafen', label: '→ Autoankauf Ludwigshafen' },
              { href: '/autoankauf-mannheim', label: '→ Autoankauf Mannheim' },
              { href: '/autoankauf-speyer', label: '→ Auch in Speyer verfügbar' },
              { href: '/autoankauf-heidelberg', label: '→ Autoankauf Heidelberg' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all text-sm shadow-sm">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden border border-slate-700/60 shadow-2xl">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-xl lg:text-2xl font-black mb-4">Jetzt Auto in Neustadt an der Weinstraße verkaufen</h2>
            <p className="text-slate-300 font-medium mb-8 max-w-xl mx-auto">
              Kostenlose Bewertung in 2 Minuten. Fairer Preis, sofortige Auszahlung. Abholung in allen
              Ortsbezirken und entlang der Deutschen Weinstraße.
            </p>
            <button onClick={onCtaClick} className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105 duration-200">
              Kostenlosen Verkaufspreis erhalten
            </button>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Deutsche Weinstraße', 'S-Bahn RheinNeckar', 'Express-Auszahlung'].map((badge) => (
                <span key={badge} className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full border border-white/20">{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoankaufNeustadtWeinstrassePage;
