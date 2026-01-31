
import React from 'react';

interface Props {
  onCtaClick: () => void;
}

const RatgeberPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tighter">
          Der Meinautoverkauf Ratgeber: Wissen rund um den Gebrauchtwagenmarkt
        </h2>
        
        <p className="text-base text-slate-600 leading-relaxed mb-12 font-medium">
          Wir möchten, dass Sie gut informiert sind. In unserem Ratgeber finden Sie Tipps zum Werterhalt, rechtliche Hintergründe und aktuelle Analysen zum deutschen Automobilmarkt.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            {
              title: "Tipps für den Werterhalt",
              content: "Regelmäßige Wartung, Lackpflege und der Verzicht auf das Rauchen im Auto sind die wichtigsten Faktoren für einen hohen Wiederverkaufswert. Wir zeigen Ihnen, welche Investitionen sich wirklich lohnen.",
              tag: "Wartung"
            },
            {
              title: "Rechtssicherer Verkauf",
              content: "Was gehört in einen Kaufvertrag? Welche Haftungsrisiken gibt es bei Privatverkäufen? Erfahren Sie, wie Sie sich rechtlich optimal absichern, um späteren Ärger zu vermeiden.",
              tag: "Recht"
            },
            {
              title: "Markttrend: E-Autos",
              content: "Wie entwickeln sich die Preise für gebrauchte Elektrofahrzeuge? Wir analysieren Reichweite, Batteriezustand und die Auswirkungen von Förderprämien auf den Gebrauchtwagenmarkt.",
              tag: "E-Mobilität"
            },
            {
              title: "TÜV & HU: Wichtig für den Preis?",
              content: "Ein frischer TÜV wirkt oft wie ein Qualitätssiegel. Wir klären auf, ob es sich lohnt, die Hauptuntersuchung vor dem Verkauf noch einmal neu zu machen.",
              tag: "Service"
            }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-xl transition-all">
              <span className="text-[10px] font-black text-brand-orange uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full mb-6 inline-block">{item.tag}</span>
              <h3 className="text-xl font-black text-brand-dark mb-4">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">{item.content}</p>
              <button className="text-brand-dark font-black text-sm uppercase tracking-tighter hover:text-brand-orange transition-colors">Mehr lesen →</button>
            </div>
          ))}
        </section>

        <section className="prose max-w-none text-slate-700 space-y-12">
          <h2 className="text-2xl font-black text-brand-dark">Saisonalität im Autohandel</h2>
          <p>
            Wussten Sie, dass Cabrios im Frühling deutlich teurer gehandelt werden als im Herbst? Oder dass Allradfahrzeuge im Oktober ihren preislichen Höhepunkt erreichen? Wir helfen Ihnen, den richtigen Zeitpunkt für Ihren Verkauf zu finden.
          </p>

          <h2 className="text-2xl font-black text-brand-dark">Wertminderung durch Unfallschäden</h2>
          <p>
            Ein kleiner Parkrempler macht ein Auto noch nicht zum "Unfallwagen" im rechtlichen Sinne, muss aber dennoch angegeben werden. Transparenz ist hier die beste Strategie. Wir erklären den Unterschied zwischen Bagatellschäden und strukturellen Unfallschäden.
          </p>
        </section>

        <div className="my-16 bg-brand-dark rounded-[3rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-2xl lg:text-3xl font-black mb-6">Wissen ist Macht – Handeln ist Gold</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto font-bold">Nutzen Sie unsere Expertise für Ihren Verkaufserfolg.</p>
          <button 
            onClick={onCtaClick}
            className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-base lg:text-lg hover:bg-orange-600 transition-all shadow-xl"
          >
            Auto jetzt kostenlos bewerten
          </button>
        </div>

        <section className="space-y-8">
          <h2 className="text-2xl font-black text-brand-dark text-center">Ratgeber FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "Sollte ich das Auto vor dem Verkauf abmelden?",
                a: "Beim Privatverkauf: Ja, unbedingt! Lassen Sie niemals einen Fremden mit Ihrem angemeldeten Auto davonfahren. Bei uns: Nein, wir übernehmen das sicher und kostenlos für Sie."
              },
              {
                q: "Was tun, wenn der Brief verloren gegangen ist?",
                a: "Sie müssen bei der Zulassungsstelle eine eidesstattliche Versicherung abgeben und einen neuen Brief beantragen. Das dauert ca. 2-4 Wochen."
              },
              {
                q: "Beeinflusst Rauchen im Auto den Preis?",
                a: "Ja, Nikotingeruch und Verfärbungen können den Wert um bis zu 10% mindern, da eine professionelle Ozonbehandlung und Innenreinigung nötig sind."
              },
              {
                q: "Was ist ein Scheckheft-gepflegtes Auto?",
                a: "Das bedeutet, dass alle vom Hersteller vorgeschriebenen Inspektionen lückenlos und fristgerecht durchgeführt und im Serviceheft dokumentiert wurden."
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl">
                <h4 className="text-base font-black text-brand-dark mb-4">{faq.q}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RatgeberPage;
