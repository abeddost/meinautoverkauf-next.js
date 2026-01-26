
import React from 'react';

interface Props {
  onCtaClick: () => void;
}

const AutoBewertenPage: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
        <h1 className="text-3xl lg:text-4xl font-black text-brand-dark mb-8 leading-tight tracking-tighter">
          Professionelle Autobewertung: Was ist dein Fahrzeug wirklich wert?
        </h1>
        
        <p className="text-lg text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-brand-orange pl-6">
          Den exakten Marktwert eines Gebrauchtwagens zu bestimmen, ist eine Kunst für sich. Wir bei Meinautoverkauf.de kombinieren jahrelange Expertise mit modernster KI-Technologie, um Ihnen eine präzise Einschätzung zu liefern.
        </p>

        <section className="prose prose-lg max-w-none text-slate-700 space-y-8">
          <h2 className="text-2xl font-black text-brand-dark">Die Grundlagen der Fahrzeugbewertung</h2>
          <p>
            Wer sein Auto verkaufen möchte, steht meist vor der großen Frage: Welcher Preis ist realistisch? Ein zu hoher Preis schreckt potenzielle Käufer ab und lässt das Inserat zum "Ladenhüter" werden. Ein zu niedriger Preis bedeutet bares Geld, das Sie verschenken. Die Autobewertung ist daher der kritische erste Schritt in jedem Verkaufsprozess.
          </p>

          <h3 className="text-xl font-black text-brand-dark">Einflussfaktoren auf den Marktwert</h3>
          <p>
            Nicht nur Marke und Modell spielen eine Rolle. In unsere Analyse fließen hunderte Datenpunkte ein:
          </p>
          <ul className="list-disc pl-6 space-y-4 font-medium">
            <li><strong>Laufleistung:</strong> Die Kilometeranzahl ist oft der wichtigste Indikator für den Verschleiß technischer Komponenten.</li>
            <li><strong>Erstzulassung & Alter:</strong> Der Wertverlust ist in den ersten Jahren am höchsten, stabilisiert sich aber meist nach 3-5 Jahren.</li>
            <li><strong>Ausstattungslinien:</strong> Extras wie Navigationssysteme, Lederausstattung oder Assistenzsysteme können den Wiederverkaufswert erheblich steigern.</li>
            <li><strong>Wartungshistorie:</strong> Ein lückenloses Scheckheft ist die beste Versicherung für einen hohen Preis.</li>
            <li><strong>Optischer Zustand:</strong> Kratzer, Beulen oder Flecken im Innenraum mindern den Wert oft stärker, als man denkt.</li>
          </ul>

          <h2 className="text-2xl font-black text-brand-dark">Traditionelle vs. KI-basierte Bewertung</h2>
          <p>
            Früher waren Schwacke-Listen oder DAT-Werte das Maß aller Dinge. Diese basieren jedoch oft auf historischen Durchschnittswerten, die aktuelle Marktschwankungen nur verzögert abbilden.
          </p>
          <p>
            Unsere KI-Lösung hingegen scannt kontinuierlich tausende Transaktionen auf Online-Portalen, Auktionen und bei Händlern. Wir wissen nicht nur, was ein Auto theoretisch wert ist, sondern für welchen Preis vergleichbare Modelle in Ihrer Region tatsächlich verkauft werden.
          </p>

          <h2 className="text-2xl font-black text-brand-dark">Der Prozess bei Meinautoverkauf.de</h2>
          <p>
            Transparenz steht bei uns an erster Stelle. Wenn Sie unser Tool nutzen, erhalten Sie nicht nur eine Zahl, sondern einen fundierten Preiskorridor. Dieser berücksichtigt sowohl den schnellen Ankauf durch einen Händler als auch den theoretisch möglichen (aber zeitaufwendigen) Privatverkauf.
          </p>
        </section>

        <div className="my-16 bg-brand-dark rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-black mb-6">Jetzt Fahrzeugwert gratis ermitteln</h2>
            <p className="text-slate-300 mb-10 max-w-lg mx-auto font-bold">In nur 2 Minuten zur präzisen Bewertung. 100% kostenlos und unverbindlich.</p>
            <button 
              onClick={onCtaClick}
              className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-base lg:text-lg hover:bg-orange-600 transition-all shadow-xl"
            >
              Auto jetzt bewerten
            </button>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
        </div>

        <section className="space-y-12">
          <h2 className="text-2xl font-black text-brand-dark text-center">Häufige Fragen zur Bewertung</h2>
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                q: "Warum weicht mein Online-Wert vom Händlerangebot ab?",
                a: "Ein Händler muss Kosten für Aufbereitung, Garantie und Standzeit einplanen. Daher liegt der Ankaufspreis meist ca. 10-15% unter dem Inseratspreis auf Portalen."
              },
              {
                q: "Wie lange ist die Bewertung gültig?",
                a: "Der Markt ist dynamisch. Unsere Bewertungen spiegeln den aktuellen Stand wider und sind in der Regel 7 bis 10 Tage für einen Ankauf verbindlich."
              },
              {
                q: "Muss ich für die Bewertung bezahlen?",
                a: "Nein, bei Meinautoverkauf.de ist die Wertermittlung ein reiner Service für unsere Kunden und bleibt stets 100% kostenfrei."
              },
              {
                q: "Werden Unfallschäden berücksichtigt?",
                a: "Ja, im Rahmen der detaillierten Zustandsbeschreibung können Sie Schäden angeben, die wir fair in die Berechnung einfließen lassen."
              },
              {
                q: "Kann ich auch Exoten oder getunte Autos bewerten?",
                a: "Die KI ist auf Serienmodelle optimiert. Bei sehr speziellen Umbauten empfiehlt sich nach der Online-Einschätzung ein persönliches Gespräch mit unseren Experten."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="text-base font-black text-brand-dark mb-3">{faq.q}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AutoBewertenPage;
