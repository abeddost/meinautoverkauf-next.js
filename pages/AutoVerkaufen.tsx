
import React from 'react';

interface Props {
  onCtaClick: () => void;
}

const AutoVerkaufenPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight tracking-tighter">
              Auto verkaufen online – Schnell, sicher und zum fairen Preis | Meinautoverkauf.de
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
              Sie möchten Ihr Auto verkaufen und suchen nach einer stressfreien Lösung? Bei Meinautoverkauf.de profitieren Sie von einem
              innovativen Service, der den gesamten Verkaufsprozess vereinfacht.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
              Ob Gebrauchtwagen, Fahrzeug mit Motorschaden oder Exportfahrzeug – wir garantieren Ihnen eine faire Bewertung und einen
              reibungslosen Ablauf.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-semibold">
              Innerhalb weniger Stunden können Sie Ihr Fahrzeug verkaufen und erhalten Ihr Geld direkt auf Ihr Konto.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-orange-100/60 via-white to-blue-50/70 rounded-[2.5rem] blur-2xl"></div>
            <img
              src="/elements/auto%20schnell%20verkaufen.png"
              alt="Auto schnell verkaufen"
              className="relative w-full max-w-[520px] mx-auto rounded-[2rem] shadow-[0_25px_55px_-30px_rgba(15,23,42,0.45)] border border-white"
            />
          </div>
        </section>

        <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tighter">
          Auto verkaufen leicht gemacht: Der Leitfaden für einen marktgerechten Preis
        </h2>
        
        <p className="text-lg text-slate-600 leading-relaxed mb-12 font-medium">
          Der Verkauf eines Autos ist für viele eine stressige Angelegenheit. Nervige Anrufe, unzuverlässige Käufer und endlose Preisverhandlungen. Wir zeigen Ihnen, wie Sie Ihr Auto ohne Kopfschmerzen und zum fairen Preis verkaufen können.
        </p>

        <section className="prose prose-lg max-w-none text-slate-700 space-y-12">
          <div>
            <h2 className="text-2xl font-black text-brand-dark mb-6">Privatverkauf vs. Händlerverkauf: Was passt zu Ihnen?</h2>
            <p>
              Es gibt grundsätzlich zwei Wege. Der Privatverkauf verspricht theoretisch einen höheren Preis, erfordert aber viel Eigeninitiative: Inserate erstellen, Probefahrten koordinieren und das Risiko von Zahlungsausfällen oder späteren Reklamationen tragen.
            </p>
            <p>
              Der Händlerankauf, wie wir ihn bei Meinautoverkauf.de anbieten, ist auf Geschwindigkeit und Sicherheit optimiert. Sie erhalten sofort ein verbindliches Angebot, haben keine Haftungsrisiken und das Geld ist oft noch am selben Tag auf dem Konto.
            </p>
          </div>

          <div className="bg-slate-50 p-8 lg:p-12 rounded-[2.5rem] border border-slate-100">
            <h3 className="text-xl font-black text-brand-dark mb-6">Checkliste: Diese Dokumente brauchen Sie</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Zulassungsbescheinigung Teil I (Fahrzeugschein)",
                "Zulassungsbescheinigung Teil II (Fahrzeugbrief)",
                "Letzter HU/AU-Bericht (TÜV)",
                "Alle verfügbaren Fahrzeugschlüssel",
                "Scheckheft / Service-Nachweise",
                "Rechnungen über Reparaturen/Reifen",
                "Persönlicher Ausweis",
                "Bankverbindung für die Auszahlung"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-600">
                  <span className="text-brand-orange text-lg">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-brand-dark mb-6">So bereiten Sie Ihr Auto vor</h2>
            <p>
              Der erste Eindruck zählt – auch beim Autoankauf. Eine gründliche Reinigung (Innen und Außen) kann den Schätzwert signifikant beeinflussen. Entfernen Sie persönliche Gegenstände und lüften Sie den Wagen gut durch. Kleinere "Schönheitsreparaturen" wie das Polieren von blinden Scheinwerfern können sich ebenfalls lohnen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto text-2xl font-black">1</div>
              <h4 className="font-black">Online bewerten</h4>
              <p className="text-xs text-slate-500 font-medium">Daten eingeben und sofortige KI-Analyse erhalten.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto text-2xl font-black">2</div>
              <h4 className="font-black">Termin wählen</h4>
              <p className="text-xs text-slate-500 font-medium">Übergabe in der Filiale oder bequeme Abholung.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto text-2xl font-black">3</div>
              <h4 className="font-black">Geld erhalten</h4>
              <p className="text-xs text-slate-500 font-medium">Sofortige Echtzeit-Überweisung bei Übergabe.</p>
            </div>
          </div>
        </section>

        <div className="my-16 bg-brand-orange rounded-[3rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-2xl lg:text-3xl font-black mb-6">Bereit für den stressfreien Verkauf?</h2>
          <p className="text-white/90 mb-10 max-w-lg mx-auto font-bold">Erhalten Sie jetzt Ihr unverbindliches Angebot in Rekordzeit.</p>
          <button 
            onClick={onCtaClick}
            className="bg-brand-dark text-white px-10 py-4 rounded-2xl font-bold text-base lg:text-lg hover:bg-slate-800 transition-all shadow-xl"
          >
            Jetzt Auto bewerten & verkaufen
          </button>
        </div>

        <section className="space-y-8">
          <h2 className="text-2xl font-black text-brand-dark text-center">Wichtige Fragen zum Verkaufsprozess</h2>
          <div className="space-y-4">
            {[
              {
                q: "Kann ich ein finanziertes Auto verkaufen?",
                a: "Ja! Wir lösen die Finanzierung direkt bei Ihrer Bank ab und zahlen Ihnen den Differenzbetrag aus. Wir kümmern uns um den gesamten Schriftverkehr."
              },
              {
                q: "Was passiert mit meiner Versicherung?",
                a: "Wir melden Ihr Fahrzeug zeitnah nach dem Ankauf bei der Zulassungsstelle ab. Damit endet automatisch auch die Versicherungspflicht und die Steuerpflicht."
              },
              {
                q: "Muss ich das Auto vor dem Verkauf reparieren?",
                a: "In der Regel nicht. Wir kaufen Fahrzeuge in jedem Zustand. Größere Investitionen vor dem Verkauf lohnen sich meist finanziell nicht für Sie."
              },
              {
                q: "Wie lange dauert die gesamte Abwicklung?",
                a: "Vom ersten Klick bis zum Geld auf dem Konto kann es weniger als 24 Stunden dauern. Der Termin vor Ort dauert meist nur ca. 45-60 Minuten."
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 border-b border-slate-100 last:border-0">
                <h4 className="text-base font-black text-brand-dark mb-4">{faq.q}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AutoVerkaufenPage;
