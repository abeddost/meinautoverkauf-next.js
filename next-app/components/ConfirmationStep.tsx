'use client';

import React from 'react';

interface ConfirmationStepProps {
  onReset: () => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ onReset }) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-6 sm:py-10 lg:py-4">
      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 lg:mb-6 animate-bounce">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-black mb-3 sm:mb-4 text-brand-dark">Vielen Dank!</h2>
      <p className="text-base sm:text-lg lg:text-base text-slate-600 mb-6 sm:mb-10 lg:mb-8 leading-relaxed font-medium px-1">
        Ihre Buchung war erfolgreich. Wir haben Ihnen eine Bestätigung per E-Mail gesendet. 
        Ein Experte wird Sie innerhalb der nächsten Stunde kontaktieren.
      </p>

      <div className="bg-white rounded-3xl sm:rounded-[2.5rem] shadow-2xl p-5 sm:p-8 lg:p-7 mb-8 sm:mb-12 lg:mb-8 text-left space-y-3 sm:space-y-5 border border-gray-100">
        <h3 className="font-black text-base sm:text-lg md:text-xl lg:text-lg text-brand-dark mb-3 sm:mb-4">Checkliste für Ihren Termin:</h3>
        {[
          "Fahrzeugbrief (Zulassungsbescheinigung Teil II)",
          "Fahrzeugschein (Zulassungsbescheinigung Teil I)",
          "Alle verfügbaren Schlüssel",
          "Personalausweis oder Reisepass",
          "Serviceheft & HU/AU Berichte"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-brand-orange rounded-full"></div>
            </div>
            <span className="text-sm sm:text-base lg:text-[15px] text-slate-700 font-semibold">{item}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={onReset}
        className="text-brand-orange font-black text-base sm:text-lg lg:text-base hover:underline transition-all"
      >
        Zur Startseite zurückkehren
      </button>
    </div>
  );
};

export default ConfirmationStep;
