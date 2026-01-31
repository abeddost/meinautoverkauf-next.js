
import React from 'react';

const TrustElements: React.FC = () => {
  return (
    <section id="trust" className="py-20 bg-white relative border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-5">Was unsere Kunden sagen</h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
            Echte Erfahrungen von Verkäufern aus ganz Deutschland – schnell, fair und unkompliziert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Michael S.",
              comment: "Ich war skeptisch, ob der Online-Autoverkauf wirklich funktioniert. Aber Meinautoverkauf.de hat mich überzeugt – faire Bewertung, schnelle Abwicklung und das Geld war nach wenigen Stunden auf meinem Konto. Absolut empfehlenswert!",
              rating: 5,
              date: "München"
            },
            {
              name: "Sandra K.",
              comment: "Mein Golf hatte einen Motorschaden und ich dachte, ich müsste ihn verschrotten. Stattdessen bekam ich ein faires Angebot und konnte das Auto unkompliziert verkaufen. Top Service!",
              rating: 5,
              date: "Hamburg"
            },
            {
              name: "Thomas R.",
              comment: "Keine nervigen Besichtigungen, keine Zeitverschwendung. Einfach online bewertet, Termin vereinbart, Auto übergeben – fertig. So muss Autoverkauf heute sein!",
              rating: 5,
              date: "Berlin"
            }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all border-b-4 border-b-brand-orange">
              <div className="flex items-center gap-1 text-brand-orange mb-6">
                {Array.from({ length: 5 }).map((_, star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 font-medium">"{t.comment}"</p>
              <div className="flex items-center justify-between">
                <div className="font-black text-brand-dark uppercase tracking-wider">— {t.name}</div>
                <div className="text-[10px] font-bold text-slate-300 uppercase">{t.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustElements;
