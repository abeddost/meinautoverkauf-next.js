
import React from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  faqs?: FAQItem[];
  sectionId?: string;
  className?: string;
}

const DEFAULT_FAQS: FAQItem[] = [
    {
      q: "Wie kann ich mein Auto online verkaufen?",
      a: "Geben Sie die Fahrzeugdaten in unser Online-Bewertungstool ein. Sie erhalten sofort ein unverbindliches Angebot. Wenn Ihnen der Preis zusagt, vereinbaren Sie einen Abholtermin. Wir holen das Auto bei Ihnen ab, prüfen den Zustand und überweisen Ihnen das Geld direkt."
    },
    {
      q: "Wie schnell bekomme ich mein Geld?",
      a: "In der Regel ist das Geld innerhalb weniger Stunden nach Fahrzeugübergabe auf Ihrem Konto. Bei Übergabe am Vormittag oft noch am selben Tag."
    },
    {
      q: "Kauft ihr auch Autos mit Motorschaden?",
      a: "Ja, wir kaufen Fahrzeuge in jedem Zustand – auch mit Motorschaden, Unfallschaden oder ohne TÜV. Selbst nicht fahrbereite Autos haben noch einen Wert für uns."
    },
    {
      q: "Ist die Bewertung wirklich kostenlos und unverbindlich?",
      a: "Absolut! Die Online-Bewertung ist 100% kostenlos und verpflichtet Sie zu nichts. Sie können das Angebot annehmen oder ablehnen – ganz wie Sie möchten."
    },
    {
      q: "Was passiert, wenn das Auto bei der Abholung anders aussieht als beschrieben?",
      a: "Sollte der tatsächliche Zustand von Ihren Angaben abweichen, passen wir den Preis fair an. Sie entscheiden dann, ob Sie zum angepassten Preis verkaufen möchten oder nicht. Völlig ohne Druck."
    },
    {
      q: "Muss ich das Auto selbst abmelden?",
      a: "Nein, wir übernehmen die Abmeldung bei der Zulassungsstelle kostenlos für Sie. Sie müssen sich um nichts kümmern."
    },
    {
      q: "Welche Marken und Modelle kauft ihr an?",
      a: "Wir kaufen alle gängigen Marken: VW, Audi, BMW, Mercedes, Opel, Ford, Toyota, Renault, Peugeot, Skoda, Seat und viele mehr. Auch Premiummarken, Sportwagen und Oldtimer."
    },
    {
      q: "Ist der Service in meiner Stadt verfügbar?",
      a: "Wir sind deutschlandweit aktiv – von Großstädten wie Berlin, München, Hamburg, Köln, Frankfurt, Stuttgart bis zu kleineren Städten wie Wiesbaden, Mannheim, Karlsruhe, Nürnberg oder Dresden."
    },
    {
      q: "Was muss ich zur Fahrzeugübergabe mitbringen?",
      a: "Sie benötigen: Fahrzeugbrief (Zulassungsbescheinigung Teil II), Fahrzeugschein (Zulassungsbescheinigung Teil I), alle Fahrzeugschlüssel, sowie Ihren Personalausweis. Falls vorhanden: Serviceheft und TÜV-Berichte."
    },
    {
      q: "Kann ich mein Fahrzeug auch ohne Inserat verkaufen?",
      a: "Ja, genau dafür sind wir da! Sie müssen keine Inserate auf Portalen schalten, keine Fotos machen und keine Interessenten empfangen. Wir übernehmen den kompletten Verkaufsprozess für Sie."
    }
  ];

const FAQSection: React.FC<FAQSectionProps> = ({ title, faqs, sectionId, className }) => {
  const resolvedFaqs = faqs ?? DEFAULT_FAQS;
  const resolvedTitle = title ?? "Häufig gestellte Fragen";
  const resolvedSectionId = sectionId ?? "faq";

  return (
    <section id={resolvedSectionId} className={`py-20 bg-gray-50 ${className ?? ''}`.trim()}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-black text-center text-brand-dark mb-12">{resolvedTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resolvedFaqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="text-base md:text-lg font-black text-brand-dark">{faq.q}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-brand-orange font-black transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-4 text-slate-600 leading-relaxed font-medium">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
      <style>{`
        summary::-webkit-details-marker { display: none; }
      `}</style>
    </section>
  );
};

export default FAQSection;
