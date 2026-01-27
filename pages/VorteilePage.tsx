
import React from 'react';

interface Props {
  onCtaClick: () => void;
}

const VorteilePage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">Warum wir?</span>
          <h1 className="text-3xl lg:text-4xl font-black text-brand-dark leading-tight tracking-tighter">
            Ihre Vorteile bei <br/> Meinautoverkauf.de
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="p-10 bg-brand-dark text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-black mb-6 text-brand-orange">Sicherheit & Vertrauen</h3>
              <p className="text-slate-300 font-bold leading-relaxed">
                Als etablierter Marktteilnehmer bieten wir Ihnen maximale Sicherheit. Kein Verkauf an dubiose "Export-Händler" an der Straßenecke, sondern ein rechtssicherer Vertrag nach deutschem Recht.
              </p>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm font-bold"><span className="text-brand-orange">✓</span> Ausschluss jeglicher Sachmängelhaftung</li>
                <li className="flex items-center gap-3 text-sm font-bold"><span className="text-brand-orange">✓</span> Offizielle Abmeldung inklusive</li>
                <li className="flex items-center gap-3 text-sm font-bold"><span className="text-brand-orange">✓</span> Geprüfte Vertragsvorlagen</li>
              </ul>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-110 transition-transform"></div>
          </div>

          <div className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] group">
            <h3 className="text-xl font-black mb-6 text-brand-dark">Geschwindigkeit</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Zeit ist Geld. Während ein Privatverkauf im Schnitt 4-6 Wochen dauert, schließen wir den Ankauf oft noch am selben Tag ab.
            </p>
            <div className="mt-10 flex items-end gap-2">
              <div className="w-12 h-24 bg-brand-orange/20 rounded-t-xl"></div>
              <div className="w-12 h-16 bg-brand-orange/40 rounded-t-xl"></div>
              <div className="w-12 h-32 bg-brand-orange rounded-t-xl shadow-lg"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase ml-4 mb-2 tracking-widest">Schnelle Abwicklung</span>
            </div>
          </div>
        </div>

        <section className="prose prose-lg max-w-none text-slate-700 space-y-12 mb-20">
          <h2 className="text-2xl font-black text-brand-dark text-center">Ehrliche Preise durch KI-Intelligenz</h2>
          <p className="text-center max-w-2xl mx-auto">
            Unsere Algorithmen analysieren nicht nur den IST-Zustand, sondern auch die Marktdynamik. Wir erkennen Trends früher und können Ihnen so oft einen besseren Preis bieten als lokale Händler, die nur ihr eigenes Inventar im Blick haben.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Marktgerechte Preisermittlung", d: "Preis orientiert sich an Händlerangeboten." },
              { t: "Hausabholung", d: "Sparen Sie sich den Weg, wir kommen zu Ihnen." },
              { t: "Sofort-Cash", d: "Auszahlung per Echtzeit-Überweisung vor Ort." },
              { t: "Papierkrieg-Adieu", d: "Wir übernehmen die gesamte Bürokratie." },
              { t: "Keine Haftung", d: "Verkauft wie gesehen – ohne Risiko für Sie." },
              { t: "Finanzierungsservice", d: "Wir lösen Ihren Altkredit direkt ab." }
            ].map((v, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-brand-orange text-3xl mb-4 font-black">#0{i+1}</div>
                <h4 className="font-black text-brand-dark mb-2 uppercase tracking-tight">{v.t}</h4>
                <p className="text-xs text-slate-500 font-medium">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-brand-dark rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden">
          <h2 className="text-2xl lg:text-3xl font-black mb-6">Überzeugen Sie sich selbst</h2>
          <p className="text-slate-400 mb-12 max-w-lg mx-auto font-bold">Millionen ausgezahlte Euro und tausende glückliche Gesichter.</p>
          <button 
            onClick={onCtaClick}
            className="bg-brand-orange text-white px-12 py-4 rounded-2xl font-bold text-base lg:text-lg hover:bg-orange-600 transition-all shadow-2xl transform hover:scale-105"
          >
            Kostenlos starten
          </button>
        </div>

        <section className="mt-24 space-y-12">
          <h2 className="text-2xl font-black text-brand-dark text-center">Fragen zu unseren Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Ist die Hausabholung wirklich kostenlos?",
                a: "Absolut. Innerhalb unseres Einzugsgebiets berechnen wir keinen Cent für die Logistik. Der Preis, den wir vereinbaren, kommt ohne Abzüge bei Ihnen an."
              },
              {
                q: "Muss ich das Auto putzen?",
                a: "Ein sauberer Wagen macht immer einen besseren Eindruck und kann die Bewertung positiv beeinflussen, ist aber keine Pflicht."
              },
              {
                q: "Was passiert, wenn ich den Termin absagen muss?",
                a: "Kein Problem. Rufen Sie uns einfach kurz an oder nutzen Sie den Link in Ihrer Bestätigungsmail. Wir finden flexibel einen neuen Slot."
              },
              {
                q: "Gibt es versteckte Gebühren?",
                a: "Nein. Unser gesamtes Geschäftsmodell basiert auf Transparenz. Es gibt keine Servicepauschalen oder Bearbeitungsgebühren."
              }
            ].map((faq, i) => (
              <div key={i} className="border-l-4 border-brand-orange pl-8">
                <h4 className="text-base font-black text-brand-dark mb-2">{faq.q}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default VorteilePage;
