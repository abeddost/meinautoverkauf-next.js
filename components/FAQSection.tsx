
import React from 'react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: "Wie funktioniert die Online-Preisermittlung?",
      a: "Wir nutzen modernste Algorithmen und KI-Modelle, um Echtzeit-Marktdaten aus Tausenden von Transaktionen zu analysieren. Dabei berücksichtigen wir Marke, Modell, Alter, Laufleistung und den aktuellen Markttrend."
    },
    {
      q: "Ist das Angebot für mich bindend?",
      a: "Nein, die Online-Bewertung ist vollkommen unverbindlich und kostenlos. Erst wenn Sie vor Ort den Kaufvertrag unterschreiben, wird der Verkauf rechtskräftig."
    },
    {
      q: "Wann und wie erhalte ich mein Geld?",
      a: "Die Auszahlung erfolgt unmittelbar nach Vertragsabschluss per sicherem Echtzeit-Banktransfer. In der Regel ist das Geld innerhalb weniger Stunden, spätestens jedoch am nächsten Werktag auf Ihrem Konto."
    },
    {
      q: "Welche Dokumente werden für den Verkauf benötigt?",
      a: "Sie benötigen die Zulassungsbescheinigung Teil I & II (Fahrzeugschein & Brief), alle Schlüssel, Ihren Ausweis sowie (falls vorhanden) das Serviceheft und den letzten HU/AU-Bericht."
    },
    {
      q: "Übernehmen Sie die Abmeldung?",
      a: "Ja, wir übernehmen die Abmeldung Ihres Fahrzeugs bei der zuständigen Zulassungsstelle komplett kostenlos für Sie. Sie erhalten die offizielle Abmeldebestätigung per E-Mail."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">Häufig gestellte Fragen</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-600 mb-4">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
