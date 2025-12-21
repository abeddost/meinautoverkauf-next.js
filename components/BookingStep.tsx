
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
      <button onClick={onBack} className="text-gray-500 mb-8 hover:text-blue-600 transition-colors flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
        Zurück zur Bewertung
      </button>

      <div className="bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-3xl font-bold mb-8">Wählen Sie Ihren Termin</h2>
        
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setMethod('DROP_OFF')}
              className={`p-6 rounded-2xl border-2 text-left transition-all ${
                method === 'DROP_OFF' ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-50' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="font-bold text-lg mb-1">Local Drop-off</div>
              <p className="text-sm text-gray-600">Sie bringen uns das Auto zur nächsten Filiale.</p>
            </button>
            <button
              type="button"
              onClick={() => setMethod('PICKUP')}
              className={`p-6 rounded-2xl border-2 text-left transition-all ${
                method === 'PICKUP' ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-50' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="font-bold text-lg mb-1">Haus-Abholung</div>
              <p className="text-sm text-gray-600">Wir holen das Auto bequem bei Ihnen zu Hause ab.</p>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700">Datum</label>
              <input 
                required
                type="date" 
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700">Uhrzeit</label>
              <select 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map(t => (
                  <option key={t} value={t}>{t} Uhr</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <div className="text-sm text-gray-500 max-w-xs">
              Ein Mitarbeiter wird sich in Kürze telefonisch zur Bestätigung melden.
            </div>
            <button 
              type="submit"
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all transform active:scale-95"
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
