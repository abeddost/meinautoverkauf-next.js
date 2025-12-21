
import React from 'react';

const TrustElements: React.FC = () => {
  return (
    <section id="trust" className="py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6">Warum unsere Kunden <span className="text-brand-orange underline decoration-wavy">strahlen</span>.</h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto italic">
            "Es geht nicht nur um ein Auto, es geht um den nächsten Lebensabschnitt. Wir machen den Übergang so einfach wie möglich."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center mb-32">
          {[
            { val: "250.000+", label: "Erfolgreiche Verkäufe", color: "text-brand-orange" },
            { val: "Top 1%", label: "Kundenzufriedenheit", color: "text-brand-dark" },
            { val: "Instant", label: "Geld auf Ihrem Konto", color: "text-brand-orange" }
          ].map((stat, i) => (
            <div key={i} className="group cursor-default">
              <div className={`text-6xl font-black ${stat.color} mb-4 transform transition-transform group-hover:scale-110 tracking-tighter`}>{stat.val}</div>
              <div className="text-slate-400 font-black uppercase tracking-[0.15em] text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sebastian K.",
              comment: "Ich hatte Tränen in den Augen, als ich meinen geliebten Oldtimer verkaufte. Das Team von MeinAutoPreis24 war so einfühlsam und hat einen Wahnsinnspreis gezahlt.",
              rating: 5,
              date: "vor 2 Tagen"
            },
            {
              name: "Martina H.",
              comment: "Hausabholung war das beste Argument. Kein Warten beim Amt, keine nervigen Probefahrten. Einfach nur klasse!",
              rating: 5,
              date: "vor 1 Woche"
            },
            {
              name: "David L.",
              comment: "In 2 Minuten bewertet, in 4 Stunden war der Gutachter da. Wer sein Auto woanders verkauft, ist selbst schuld.",
              rating: 5,
              date: "vor 3 Tagen"
            }
          ].map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all border-b-4 border-b-brand-orange">
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
