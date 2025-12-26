
import React from 'react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: "Wie funktioniert die Online-Preisermittlung?",
      a: "Wir nutzen modernste KI-Modelle von Google Gemini, um Echtzeit-Marktdaten aus Tausenden von Transaktionen zu analysieren. Dabei berücksichtigen wir Marke, Modell, Alter, Laufleistung und den aktuellen Markttrend für präzise Ergebnisse."
    },
    {
      q: "Ist das Angebot für mich bindend?",
      a: "Nein, die Online-Bewertung ist vollkommen unverbindlich und kostenlos. Erst wenn Sie vor Ort den Kaufvertrag unterschreiben, wird der Verkauf rechtskräftig."
    },
    {
      q: "Wann und wie erhalte ich mein Geld?",
      a: "Die Auszahlung erfolgt unmittelbar nach Vertragsabschluss per sicherem Echtzeit-Banktransfer. In der Regel ist das Geld innerhalb weniger Stunden auf Ihrem Konto."
    },
    {
      q: "Welche Dokumente werden für den Verkauf benötigt?",
      a: "Sie benötigen die Zulassungsbescheinigung Teil I & II (Fahrzeugschein & Brief), alle Schlüssel, Ihren Ausweis sowie das Serviceheft und den letzten HU/AU-Bericht."
    },
    {
      q: "Übernehmen Sie die Abmeldung?",
      a: "Ja, wir übernehmen die Abmeldung Ihres Fahrzeugs bei der Zulassungsstelle komplett kostenlos. Sie erhalten die offizielle Bestätigung per E-Mail."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-black text-center text-brand-dark mb-20">Häufig gestellte Fragen</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-black text-brand-orange mb-4">{faq.q}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
