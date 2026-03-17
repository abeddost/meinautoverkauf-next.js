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
  const [method, setMethod] = useState<TransferMethod | null>('DROP_OFF');
  const [dropOffLocation, setDropOffLocation] = useState<(typeof dropOffLocations)[number]['id'] | null>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [bookingLoading, setBookingLoading] = useState(false);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

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
    <div className="max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="text-slate-500 mb-3 hover:text-brand-orange transition-colors flex items-center gap-2 font-bold group text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 rounded-lg"
      >
        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Zurück zur Bewertung
      </button>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-5 lg:p-6">
        <div className="mb-4 pb-4 border-b border-slate-100">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-dark text-white text-[11px] font-bold uppercase tracking-wider">
            Schritt 3 von 3
          </div>
          <h2 className="text-lg sm:text-xl font-black text-brand-dark leading-tight mt-3">
            Wählen Sie Ihren Übergabe-Termin
          </h2>
          <p className="text-slate-600 mt-1.5 text-sm leading-relaxed">
            Erst Übergabeart wählen, dann Datum und Uhrzeit festlegen.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {bookingError && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900 font-semibold">
              {bookingError}
            </div>
          )}

          <fieldset className="space-y-2.5">
            <legend className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider ml-0.5">
              Übergabeart
            </legend>
            <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => handleMethodSelect('DROP_OFF')}
                className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 ${
                  method === 'DROP_OFF'
                    ? 'border-brand-orange bg-orange-50 shadow-sm'
                    : 'border-slate-200 hover:border-brand-orange/50 bg-white'
                }`}
                aria-pressed={method === 'DROP_OFF'}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-black text-sm sm:text-base mb-0.5 text-brand-dark">Filial-Abgabe</div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                      Sie bringen uns das Auto zur Filiale Ihrer Wahl.
                    </p>
                  </div>
                  <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${method === 'DROP_OFF' ? 'border-brand-orange bg-brand-orange text-white' : 'border-slate-300'}`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </fieldset>

          {!method && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 font-semibold">
              Bitte wählen Sie zuerst eine Übergabeart.
            </div>
          )}

          {method === 'DROP_OFF' && (
            <fieldset className="space-y-2.5">
              <legend className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider ml-0.5">
                Filiale auswählen
              </legend>
              <div className="grid grid-cols-1 gap-2">
                {dropOffLocations.map((location) => (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => setDropOffLocation(location.id)}
                    className={`p-3 rounded-xl border text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 ${
                      dropOffLocation === location.id
                        ? 'border-brand-orange bg-orange-50'
                        : 'border-slate-200 hover:border-brand-orange/50 bg-white'
                    }`}
                    aria-pressed={dropOffLocation === location.id}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm sm:text-base font-black text-brand-dark leading-tight">{location.name}</div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5 leading-relaxed">{location.address}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${dropOffLocation === location.id ? 'border-brand-orange bg-brand-orange text-white' : 'border-slate-300'}`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
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
            </fieldset>
          )}

          {method && (
            <fieldset className="rounded-xl bg-slate-50 border border-slate-200 p-3.5 sm:p-4">
              <legend className="px-1 text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider">
                Termin
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider ml-0.5">Wunschdatum</label>
                  <input
                    required={Boolean(method)}
                    type="date"
                    value={date}
                    min={minDate}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 transition-all bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider ml-0.5">Uhrzeit</label>
                  <select
                    required={Boolean(method)}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 transition-all appearance-none bg-white"
                  >
                    <option value="">Bitte Zeit auswählen</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot} Uhr</option>
                    ))}
                  </select>
                </div>
              </div>
            </fieldset>
          )}

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-xs sm:text-sm text-slate-600 max-w-md text-center sm:text-left font-medium">
              Nach Ihrer Buchung melden wir uns kurz telefonisch zur finalen Bestätigung.
            </div>
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className={`w-full sm:w-auto px-5 sm:px-7 py-3 rounded-xl font-black text-sm sm:text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 ${
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
