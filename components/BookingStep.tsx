
import React, { useState } from 'react';

interface BookingStepProps {
  onComplete: () => void;
  onBack: () => void;
}

const BookingStep: React.FC<BookingStepProps> = ({ onComplete, onBack }) => {
  const [method, setMethod] = useState<'DROP_OFF' | 'PICKUP'>('DROP_OFF');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={onBack} 
        className="text-slate-500 mb-4 sm:mb-8 hover:text-brand-orange transition-all flex items-center gap-2 font-bold group text-sm sm:text-base"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Zurück zur Bewertung
      </button>

      <div className="bg-white rounded-3xl sm:rounded-[2.5rem] shadow-2xl p-5 sm:p-8 lg:p-10 border border-gray-100">
        <h2 className="text-lg sm:text-xl md:text-2xl font-black mb-5 sm:mb-8 text-brand-dark">Wählen Sie Ihren Termin</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => setMethod('DROP_OFF')}
              className={`p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border-2 text-left transition-all ${
                method === 'DROP_OFF' ? 'border-brand-orange bg-orange-50 ring-4 ring-orange-100' : 'border-gray-100 hover:border-brand-orange/30'
              }`}
            >
              <div className="font-black text-lg sm:text-xl mb-1.5 sm:mb-2 text-brand-dark">Filial-Abgabe</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Sie bringen uns das Auto zur nächsten Filiale. (Sicher & Schnell)</p>
            </button>
            <button
              type="button"
              onClick={() => setMethod('PICKUP')}
              className={`p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border-2 text-left transition-all ${
                method === 'PICKUP' ? 'border-brand-orange bg-orange-50 ring-4 ring-orange-100' : 'border-gray-100 hover:border-brand-orange/30'
              }`}
            >
              <div className="font-black text-lg sm:text-xl mb-1.5 sm:mb-2 text-brand-dark">Haus-Abholung</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Wir holen das Auto bequem bei Ihnen zu Hause ab. (Maximaler Komfort)</p>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider ml-1">Wunschdatum</label>
              <input 
                required
                type="date" 
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider ml-1">Uhrzeit</label>
              <select 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-gray-100 focus:border-brand-orange focus:ring-0 outline-none transition-all appearance-none bg-white"
              >
                {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map(t => (
                  <option key={t} value={t}>{t} Uhr</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-xs sm:text-sm text-slate-500 max-w-xs text-center md:text-left font-medium italic">
              Ein Experte wird sich in Kürze telefonisch zur finalen Bestätigung melden.
            </div>
            <button 
              type="submit"
              className="w-full md:w-auto bg-brand-orange text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg shadow-xl hover:bg-orange-600 transition-all transform hover:scale-[1.02] active:scale-95 shadow-orange-100"
            >
              Termin verbindlich buchen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingStep;
