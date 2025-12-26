
import React from 'react';

interface ConfirmationStepProps {
  onReset: () => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ onReset }) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <div className="w-24 h-24 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-5xl font-black mb-4 text-brand-dark">Vielen Dank!</h2>
      <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
        Ihre Buchung war erfolgreich. Wir haben Ihnen eine Bestätigung per E-Mail gesendet. 
        Ein Experte wird Sie innerhalb der nächsten Stunde kontaktieren.
      </p>

      <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 mb-12 text-left space-y-5 border border-gray-100">
        <h3 className="font-black text-xl text-brand-dark mb-4">Checkliste für Ihren Termin:</h3>
        {[
          "Fahrzeugbrief (Zulassungsbescheinigung Teil II)",
          "Fahrzeugschein (Zulassungsbescheinigung Teil I)",
          "Alle verfügbaren Schlüssel",
          "Personalausweis oder Reisepass",
          "Serviceheft & HU/AU Berichte"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-brand-orange rounded-full"></div>
            </div>
            <span className="text-slate-700 font-semibold">{item}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={onReset}
        className="text-brand-orange font-black text-lg hover:underline transition-all"
      >
        Zur Startseite zurückkehren
      </button>
    </div>
  );
};

export default ConfirmationStep;
