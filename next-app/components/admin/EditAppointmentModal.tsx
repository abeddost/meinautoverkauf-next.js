'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Appointment {
  id: string;
  created_at: string;
  estimation_id: string;
  preferred_date: string;
  preferred_time: string;
  delivery_type: string;
  bring_location: string | null;
  archived_at: string | null;
  deleted_at: string | null;
  created_by_admin: boolean;
}

interface EditAppointmentModalProps {
  appointment: Appointment;
  onClose: () => void;
  onSaved: (updated: Appointment) => void;
}

const DELIVERY_LABELS: Record<string, string> = {
  bring_car: 'Filial-Abgabe',
  pickup: 'Abholung',
};

export default function EditAppointmentModal({ appointment, onClose, onSaved }: EditAppointmentModalProps) {
  const [date, setDate] = useState(appointment.preferred_date);
  const [time, setTime] = useState(appointment.preferred_time);
  const [deliveryType, setDeliveryType] = useState<'bring_car' | 'pickup'>(
    appointment.delivery_type as 'bring_car' | 'pickup'
  );
  const [bringLocation, setBringLocation] = useState<'bodenheim' | 'ruesselsheim'>(
    (appointment.bring_location ?? 'bodenheim') as 'bodenheim' | 'ruesselsheim'
  );
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSave() {
    if (!date) { setError('Bitte ein Datum auswählen.'); return; }
    if (!time) { setError('Bitte eine Uhrzeit eingeben.'); return; }
    setError(null);
    setIsSaving(true);

    const { data, error: dbError } = await supabase
      .from('appointments')
      .update({
        preferred_date: date,
        preferred_time: time,
        delivery_type: deliveryType,
        bring_location: deliveryType === 'bring_car' ? bringLocation : null,
      })
      .eq('id', appointment.id)
      .select()
      .single();

    if (dbError) {
      setError(dbError.message);
      setIsSaving(false);
      return;
    }

    onSaved(data as Appointment);
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h2 className="text-lg font-bold text-slate-800">Termin bearbeiten</h2>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Date */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Datum</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Uhrzeit</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>

          {/* Delivery type */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Übergabe</label>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" value="bring_car" checked={deliveryType === 'bring_car'} onChange={() => setDeliveryType('bring_car')} />
                {DELIVERY_LABELS.bring_car}
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" value="pickup" checked={deliveryType === 'pickup'} onChange={() => setDeliveryType('pickup')} />
                {DELIVERY_LABELS.pickup}
              </label>
            </div>
          </div>

          {/* Location (only for bring_car) */}
          {deliveryType === 'bring_car' && (
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Standort</label>
              <select
                value={bringLocation}
                onChange={(e) => setBringLocation(e.target.value as 'bodenheim' | 'ruesselsheim')}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
              >
                <option value="bodenheim">Bodenheim</option>
                <option value="ruesselsheim">Rüsselsheim</option>
              </select>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-3 py-2 text-sm text-red-700">{error}</div>
          )}
        </div>

        <div className="flex items-center justify-end gap-2 px-5 pb-5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-bold transition-colors"
          >
            Abbrechen
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="px-4 py-2 bg-brand-orange hover:bg-orange-600 disabled:opacity-50 text-white rounded-xl text-sm font-bold transition-colors"
          >
            {isSaving ? 'Speichere…' : 'Speichern'}
          </button>
        </div>
      </div>
    </div>
  );
}
