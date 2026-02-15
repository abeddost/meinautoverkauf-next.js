import React, { useState } from 'react';
import { bookAppointment } from '../lib/supabaseFunctions';

interface BookingStepProps {
  estimationId: string | null;
  onComplete: () => void;
  onBack: () => void;
}

const dropOffLocations = [
  {
    id: 'bodenheim',
    name: 'Bodenheim',
    address: 'Am Kümmerling 41a, 55294 Bodenheim',
  },
  {
    id: 'ruesselsheim',
    name: 'Rüsselsheim',
    address: 'Wormser Str. 8b, 65428 Rüsselsheim am Main',
  },
] as const;

type TransferMethod = 'DROP_OFF' | 'PICKUP';

const timeSlots = Array.from({ length: 17 }, (_, index) => {
  const totalMinutes = 10 * 60 + index * 30;
  const hours = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
  const minutes = String(totalMinutes % 60).padStart(2, '0');
  return `${hours}:${minutes}`;
});

const BookingStep: React.FC<BookingStepProps> = ({ estimationId, onComplete, onBack }) => {
  const [method, setMethod] = useState<TransferMethod | null>(null);
  const [dropOffLocation, setDropOffLocation] = useState<(typeof dropOffLocations)[number]['id'] | null>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [bookingLoading, setBookingLoading] = useState(false);
  const minDate = new Date().toISOString().split('T')[0];

  const selectedLocation = dropOffLocations.find((location) => location.id === dropOffLocation) ?? null;
  const isSubmitDisabled =
    !method ||
    !date ||
    !time ||
    (method === 'DROP_OFF' && !dropOffLocation) ||
    bookingLoading;

  const handleMethodSelect = (selectedMethod: TransferMethod) => {
    setMethod(selectedMethod);
    if (selectedMethod === 'PICKUP') {
      setDropOffLocation(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitDisabled) return;
    setBookingError(null);

    if (estimationId) {
      setBookingLoading(true);
      const { data, error, status } = await bookAppointment({
        estimationId,
        preferredDate: date,
        preferredTime: time,
        deliveryType: method === 'DROP_OFF' ? 'bring_car' : 'pickup',
        ...(method === 'DROP_OFF' && dropOffLocation
          ? { bringLocation: dropOffLocation as 'bodenheim' | 'ruesselsheim' }
          : {}),
      });
      setBookingLoading(false);
      if (error || !data) {
        setBookingError(
          status === 429
            ? 'Zu viele Anfragen. Bitte kurz warten und erneut versuchen.'
            : (error?.error ?? 'Buchung fehlgeschlagen. Bitte erneut versuchen.')
        );
        return;
      }
    }
    onComplete();
  };

  return (
    <div className="max-w-4xl lg:max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="text-slate-500 mb-3 sm:mb-5 hover:text-brand-orange transition-all flex items-center gap-2 font-bold group text-sm"
      >
        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Zurück zur Bewertung
      </button>

      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-7 border border-gray-100 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-20 w-56 h-56 bg-orange-200/35 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 w-60 h-60 bg-sky-100/55 rounded-full blur-3xl" />

        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-4 sm:p-5 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 text-white/90 text-[11px] font-bold uppercase tracking-wider mb-2.5">
            Schritt 3 von 3
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white leading-tight">
            Wählen Sie Ihren Übergabe-Termin
          </h2>
          <p className="text-slate-200 mt-2 text-sm leading-relaxed max-w-xl">
            Wählen Sie zuerst die Übergabeart. Danach erfassen Sie Datum und Uhrzeit für Ihren Termin.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative space-y-5 sm:space-y-6">
          {bookingError && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900 font-semibold">
              {bookingError}
            </div>
          )}
          <div className="space-y-3">
            <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider ml-1">
              Übergabeart
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => handleMethodSelect('DROP_OFF')}
                className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${
                  method === 'DROP_OFF'
                    ? 'border-brand-orange bg-orange-50 ring-2 ring-orange-100'
                    : 'border-gray-200 hover:border-brand-orange/40 bg-white'
                }`}
                aria-pressed={method === 'DROP_OFF'}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-black text-base sm:text-lg mb-1 text-brand-dark">Filial-Abgabe</div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Sie bringen uns das Auto zur Filiale Ihrer Wahl.
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === 'DROP_OFF' ? 'border-brand-orange bg-brand-orange text-white' : 'border-slate-300'}`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleMethodSelect('PICKUP')}
                className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${
                  method === 'PICKUP'
                    ? 'border-brand-orange bg-orange-50 ring-2 ring-orange-100'
                    : 'border-gray-200 hover:border-brand-orange/40 bg-white'
                }`}
                aria-pressed={method === 'PICKUP'}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-black text-base sm:text-lg mb-1 text-brand-dark">Haus-Abholung</div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Wir holen das Auto bequem bei Ihnen zu Hause ab.
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === 'PICKUP' ? 'border-brand-orange bg-brand-orange text-white' : 'border-slate-300'}`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {!method && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 font-semibold">
              Bitte wählen Sie zuerst eine Übergabeart.
            </div>
          )}

          {method === 'DROP_OFF' && (
            <div className="space-y-3">
              <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider ml-1">
                Filiale auswählen
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dropOffLocations.map((location) => (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => setDropOffLocation(location.id)}
                    className={`p-4 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${
                      dropOffLocation === location.id
                        ? 'border-brand-orange bg-orange-50 ring-2 ring-orange-100'
                        : 'border-gray-200 hover:border-brand-orange/40 bg-white'
                    }`}
                    aria-pressed={dropOffLocation === location.id}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 text-brand-orange">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 21s7-5.686 7-11a7 7 0 10-14 0c0 5.314 7 11 7 11z" />
                          <circle cx="12" cy="10" r="2.5" strokeWidth="2.5" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-black text-brand-dark leading-tight">{location.name}</div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 leading-relaxed">{location.address}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {selectedLocation && (
                <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1">Ausgewählte Filiale</div>
                  <div className="text-sm sm:text-base font-bold text-brand-dark">{selectedLocation.name}</div>
                  <div className="text-xs sm:text-sm text-slate-600">{selectedLocation.address}</div>
                </div>
              )}
            </div>
          )}

          {method && (
            <div className="rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200 p-4 sm:p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider ml-1">Wunschdatum</label>
                  <input
                    required={Boolean(method)}
                    type="date"
                    value={date}
                    min={minDate}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none transition-all bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider ml-1">Uhrzeit</label>
                  <select
                    required={Boolean(method)}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="">Bitte Zeit auswählen</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot} Uhr</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="pt-5 sm:pt-6 border-t border-gray-100 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-600 max-w-md text-center lg:text-left font-medium">
              Nach Ihrer Buchung melden wir uns kurz telefonisch zur finalen Bestätigung.
            </div>
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className={`w-full lg:w-auto px-6 sm:px-8 py-3.5 rounded-xl font-black text-sm sm:text-base transition-all ${
                isSubmitDisabled
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-brand-orange text-white shadow-lg hover:bg-orange-600 active:scale-95'
              }`}
            >
              {bookingLoading ? 'Wird gebucht…' : 'Termin verbindlich buchen'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingStep;
