
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-dark text-white py-24 md:py-32 overflow-hidden">
      {/* Background patterns for emotional depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block bg-brand-orange/20 text-brand-orange px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-brand-orange/30">
            Sorgenfrei & Fair: Der Marktführer für Privatanbieter
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8">
            Verabschieden Sie sich mit einem <span className="text-brand-orange italic">lächeln</span> von Ihrem Auto.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl">
            Wir schätzen den Wert Ihres Fahrzeugs nicht nur in Zahlen, sondern mit Respekt vor seiner Geschichte. Holen Sie sich jetzt den Bestpreis – einfach, transparent und ohne Stress.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={() => document.getElementById('evaluate')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-orange hover:bg-orange-600 text-white text-xl px-12 py-6 rounded-2xl font-black shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 text-center"
            >
              Gratis Online-Bewertung
            </button>
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-brand-dark bg-slate-700 flex items-center justify-center text-xs font-bold`}>
                    {i === 1 ? 'M' : i === 2 ? 'S' : 'K'}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-bold text-brand-orange">4.9/5 Sternen</div>
                <div className="text-slate-400">aus 12k+ Bewertungen</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            {[
              { label: "Auszahlung", value: "Heute noch" },
              { label: "Anreise", value: "Wir kommen zu Ihnen" },
              { label: "Abmeldung", value: "Kostenlos & Fix" },
              { label: "Zufriedenheit", value: "100% Garantiert" }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-brand-orange font-black text-xl">{item.value}</div>
                <div className="text-slate-400 text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-20 hidden lg:block pointer-events-none w-1/2">
        <svg width="600" height="400" viewBox="0 0 100 100" fill="currentColor" className="text-brand-orange">
          <path d="M10 70 L20 65 L40 65 L45 55 L75 55 L80 65 L95 65 L95 80 L5 80 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
