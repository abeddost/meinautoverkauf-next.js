
import React from 'react';

interface ConfirmationStepProps {
  onReset: () => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ onReset }) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-4xl font-black mb-4">Vielen Dank!</h2>
      <p className="text-xl text-gray-600 mb-10 leading-relaxed">
        Ihre Buchung war erfolgreich. Wir haben Ihnen eine Bestätigung per E-Mail gesendet. 
        Ein Experte wird Sie innerhalb der nächsten Stunde kontaktieren.
      </p>

      <div className="bg-white rounded-3xl shadow-lg p-8 mb-12 text-left space-y-4">
        <h3 className="font-bold text-lg mb-2">Checkliste für Ihren Termin:</h3>
        {[
          "Fahrzeugbrief (Zulassungsbescheinigung Teil II)",
          "Fahrzeugschein (Zulassungsbescheinigung Teil I)",
          "Alle verfügbaren Schlüssel",
          "Personalausweis oder Reisepass",
          "Serviceheft & HU/AU Berichte"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={onReset}
        className="text-blue-600 font-bold hover:underline"
      >
        Zur Startseite zurückkehren
      </button>
    </div>
  );
};

export default ConfirmationStep;
