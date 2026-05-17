'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, dateFnsLocalizer, Views, type View } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { de } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './CalendarTab.module.css';
import { supabase } from '@/lib/supabase';
import type { Estimation } from '@/page-components/AdminDashboard';
import NotizModal from '@/components/admin/NotizModal';
import EditAppointmentModal from '@/components/admin/EditAppointmentModal';

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

interface CalendarTabProps {
  appointments: Appointment[];
  estimations: Estimation[];
  appointmentEstimations: Record<string, Estimation>;
  onAppointmentCreated: (appt: Appointment) => void;
  onAppointmentUpdated: (appt: Appointment) => void;
  onAppointmentDeleted: (id: string) => void;
  onViewEstimationDetails: (estimation: Estimation) => void;
  onNoteSaved?: (estimationId: string) => void;
}

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resource: Appointment;
  isAdminCreated: boolean;
}

const locales = { de };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

const DELIVERY_LABELS: Record<string, string> = {
  bring_car: 'Filial-Abgabe',
  pickup: 'Abholung',
};

const LOCATION_LABELS: Record<string, string> = {
  bodenheim: 'Bodenheim',
  ruesselsheim: 'Rüsselsheim',
};

export default function CalendarTab({
  appointments,
  estimations,
  appointmentEstimations,
  onAppointmentCreated,
  onAppointmentUpdated,
  onAppointmentDeleted,
  onViewEstimationDetails,
  onNoteSaved,
}: CalendarTabProps) {
  const [showNewModal, setShowNewModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [notizEstimationId, setNotizEstimationId] = useState<string | null>(null);
  const [notizEstimationLabel, setNotizEstimationLabel] = useState('');
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [calendarView, setCalendarView] = useState<View>(Views.MONTH);
  const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);
  const [isDeletingFromCalendar, setIsDeletingFromCalendar] = useState(false);

  async function handleCalendarDelete(apptId: string) {
    setIsDeletingFromCalendar(true);
    const { error } = await supabase
      .from('appointments')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', apptId);
    setIsDeletingFromCalendar(false);
    if (error) return;
    setSelectedEvent(null);
    onAppointmentDeleted(apptId);
  }

  const events = useMemo<CalendarEvent[]>(() => {
    return appointments
      .filter((a) => !a.archived_at && !a.deleted_at)
      .map((appt) => {
        const linked = appointmentEstimations[appt.estimation_id] ?? estimations.find((e) => e.id === appt.estimation_id);
        const start = new Date(`${appt.preferred_date}T${appt.preferred_time}`);
        const end = new Date(start.getTime() + 60 * 60 * 1000);
        return {
          id: appt.id,
          title: linked
            ? `${linked.first_name} ${linked.last_name} — ${linked.brand} ${linked.model}`
            : `Termin (${appt.id.slice(0, 6)}…)`,
          start,
          end,
          resource: appt,
          isAdminCreated: appt.created_by_admin,
        };
      });
  }, [appointments, estimations, appointmentEstimations]);

  const visibleEvents = useMemo(() => {
    if (calendarView === Views.AGENDA) {
      const now = new Date();
      return events.filter((e) => e.start >= now);
    }
    return events;
  }, [events, calendarView]);

  function eventPropGetter(event: CalendarEvent) {
    return {
      style: {
        backgroundColor: event.isAdminCreated ? '#7c3aed' : '#f97316',
        borderRadius: '6px',
        border: 'none',
        color: 'white',
        fontSize: '12px',
        fontWeight: 600,
        padding: '2px 6px',
      },
    };
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-bold text-slate-800">Kalender</h2>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: '#f97316' }} />
              Kundentermin
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: '#7c3aed' }} />
              Admin-Termin
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setShowNewModal(true)}
          className="px-4 py-2 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-sm font-bold transition-colors"
        >
          + Neuer Termin
        </button>
      </div>

      {/* Calendar */}
      <div className={`bg-white rounded-2xl shadow-lg p-4 ${styles.wrapper}`}>
        <Calendar
          localizer={localizer}
          events={visibleEvents}
          view={calendarView}
          date={calendarDate}
          onNavigate={(newDate) => setCalendarDate(newDate)}
          onView={(newView) => setCalendarView(newView)}
          views={[Views.MONTH, Views.WEEK, Views.AGENDA]}
          length={365}
          style={{ height: 650 }}
          culture="de"
          popup
          eventPropGetter={eventPropGetter}
          onSelectEvent={(event) => setSelectedEvent(event as CalendarEvent)}
          messages={{
            next: 'Weiter',
            previous: 'Zurück',
            today: 'Heute',
            month: 'Monat',
            week: 'Woche',
            agenda: 'Agenda',
            date: 'Datum',
            time: 'Zeit',
            event: 'Termin',
            noEventsInRange: 'Keine Termine in diesem Zeitraum.',
            showMore: (total) => `+${total} mehr`,
          }}
        />
      </div>

      {/* New Appointment Modal */}
      {showNewModal && (
        <NewAppointmentModal
          onClose={() => setShowNewModal(false)}
          onCreated={(appt) => {
            onAppointmentCreated(appt);
            setShowNewModal(false);
          }}
        />
      )}

      {/* Event Detail Overlay */}
      {selectedEvent && (
        <EventDetailOverlay
          event={selectedEvent}
          estimations={estimations}
          appointmentEstimations={appointmentEstimations}
          onClose={() => setSelectedEvent(null)}
          onViewDetails={(est) => {
            setSelectedEvent(null);
            onViewEstimationDetails(est);
          }}
          onOpenNotiz={(estimationId, label) => {
            setSelectedEvent(null);
            setNotizEstimationId(estimationId);
            setNotizEstimationLabel(label);
          }}
          onEdit={(appt) => {
            setSelectedEvent(null);
            setEditingAppointment(appt);
          }}
          onDelete={(id) => handleCalendarDelete(id)}
          isDeleting={isDeletingFromCalendar}
        />
      )}

      {/* Notiz Modal */}
      {notizEstimationId && (
        <NotizModal
          estimationId={notizEstimationId}
          estimationLabel={notizEstimationLabel}
          onClose={() => { setNotizEstimationId(null); setNotizEstimationLabel(''); }}
          onNoteSaved={onNoteSaved}
        />
      )}

      {/* Edit Appointment Modal */}
      {editingAppointment && (
        <EditAppointmentModal
          appointment={editingAppointment}
          onClose={() => setEditingAppointment(null)}
          onSaved={(updated) => { onAppointmentUpdated(updated); setEditingAppointment(null); }}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  New Appointment Modal                                       */
/* ─────────────────────────────────────────────────────────── */

interface NewAppointmentModalProps {
  onClose: () => void;
  onCreated: (appt: Appointment) => void;
}

function NewAppointmentModal({ onClose, onCreated }: NewAppointmentModalProps) {
  const [allLeads, setAllLeads] = useState<Estimation[]>([]);
  const [leadsLoading, setLeadsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedEstimationId, setSelectedEstimationId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00');
  const [deliveryType, setDeliveryType] = useState<'bring_car' | 'pickup'>('bring_car');
  const [bringLocation, setBringLocation] = useState<'bodenheim' | 'ruesselsheim'>('bodenheim');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from('estimations')
      .select('*')
      .is('deleted_at', null)
      .order('created_at', { ascending: false })
      .limit(200)
      .then(({ data }) => {
        if (data) setAllLeads(data as Estimation[]);
        setLeadsLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allLeads.filter(
      (e) =>
        !q ||
        `${e.first_name} ${e.last_name}`.toLowerCase().includes(q) ||
        e.brand.toLowerCase().includes(q) ||
        e.model.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q)
    );
  }, [allLeads, search]);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  async function handleSave() {
    if (!selectedEstimationId) { setError('Bitte eine Bewertung auswählen.'); return; }
    if (!date) { setError('Bitte ein Datum auswählen.'); return; }
    if (!time) { setError('Bitte eine Uhrzeit eingeben.'); return; }
    setError(null);
    setIsSaving(true);

    const { data, error: dbError } = await supabase
      .from('appointments')
      .insert({
        estimation_id: selectedEstimationId,
        preferred_date: date,
        preferred_time: time,
        delivery_type: deliveryType,
        bring_location: deliveryType === 'bring_car' ? bringLocation : null,
        created_by_admin: true,
      })
      .select()
      .single();

    if (dbError) {
      setError(dbError.message);
      setIsSaving(false);
      return;
    }

    onCreated(data as Appointment);
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h2 className="text-lg font-bold text-slate-800">Neuer Termin</h2>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Estimation picker */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Lead / Bewertung</label>
            <input
              type="text"
              placeholder="Name, Fahrzeug oder E-Mail suchen…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setSelectedEstimationId(''); }}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange mb-1"
            />
            <select
              value={selectedEstimationId}
              onChange={(e) => setSelectedEstimationId(e.target.value)}
              size={5}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              <option value="">— Bitte wählen —</option>
              {leadsLoading ? (
                <option disabled>Lade Leads…</option>
              ) : (
                filtered.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.first_name} {e.last_name} — {e.brand} {e.model} ({e.year})
                  </option>
                ))
              )}
            </select>
            {!leadsLoading && (
              <p className="text-xs text-slate-400 mt-1">{filtered.length} Lead{filtered.length !== 1 ? 's' : ''} gefunden</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Datum</label>
            <input
              type="date"
              value={date}
              min={minDate}
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
                Filial-Abgabe
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" value="pickup" checked={deliveryType === 'pickup'} onChange={() => setDeliveryType('pickup')} />
                Abholung
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
            {isSaving ? 'Speichere…' : 'Termin erstellen'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Event Detail Overlay                                        */
/* ─────────────────────────────────────────────────────────── */

interface EventDetailOverlayProps {
  event: CalendarEvent;
  estimations: Estimation[];
  appointmentEstimations: Record<string, Estimation>;
  onClose: () => void;
  onViewDetails?: (estimation: Estimation) => void;
  onOpenNotiz?: (estimationId: string, label: string) => void;
  onEdit?: (appt: Appointment) => void;
  onDelete?: (apptId: string) => void;
  isDeleting?: boolean;
}

function EventDetailOverlay({ event, estimations, appointmentEstimations, onClose, onViewDetails, onOpenNotiz, onEdit, onDelete, isDeleting }: EventDetailOverlayProps) {
  const appt = event.resource;
  const linked = appointmentEstimations[appt.estimation_id] ?? estimations.find((e) => e.id === appt.estimation_id);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-800">Termin</h2>
            {appt.created_by_admin && (
              <span className="px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full text-xs font-bold">Admin</span>
            )}
          </div>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 space-y-3">
          {/* Date / time */}
          <div className="bg-orange-50 rounded-xl p-3 flex items-center gap-3">
            <div className="text-2xl">📅</div>
            <div>
              <div className="text-sm font-bold text-slate-800">
                {new Date(`${appt.preferred_date}T${appt.preferred_time}`).toLocaleDateString('de-DE', {
                  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                })}
              </div>
              <div className="text-sm text-slate-600">{appt.preferred_time} Uhr</div>
            </div>
          </div>

          {/* Customer */}
          {linked && (
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-500 uppercase">Kunde</div>
              <div className="text-sm font-semibold text-slate-800">{linked.first_name} {linked.last_name}</div>
              <div className="text-sm text-slate-600">{linked.email}</div>
              <div className="text-sm text-slate-600">{linked.phone}</div>
            </div>
          )}

          {/* Vehicle */}
          {linked && (
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-500 uppercase">Fahrzeug</div>
              <div className="text-sm font-semibold text-slate-800">
                {linked.brand} {linked.model} {linked.variant} ({linked.year})
              </div>
            </div>
          )}

          {/* Delivery */}
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-500 uppercase">Übergabe</div>
            <div className="text-sm text-slate-700">
              {DELIVERY_LABELS[appt.delivery_type] ?? appt.delivery_type}
              {appt.bring_location && ` – ${LOCATION_LABELS[appt.bring_location] ?? appt.bring_location}`}
            </div>
          </div>

          {/* Open lead details */}
          {linked && onViewDetails && (
            <button
              type="button"
              onClick={() => onViewDetails(linked)}
              className="w-full mt-1 px-4 py-2 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-sm font-bold transition-colors"
            >
              Lead-Details öffnen
            </button>
          )}

          {/* Notiz button */}
          {appt.estimation_id && onOpenNotiz && (
            <button
              type="button"
              onClick={() => {
                const label = linked
                  ? `${linked.first_name} ${linked.last_name} — ${linked.brand} ${linked.model} (${linked.year})`
                  : `Lead ${appt.estimation_id.slice(0, 8)}…`;
                onOpenNotiz(appt.estimation_id, label);
              }}
              className="w-full mt-1 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-sm font-bold transition-colors"
            >
              Notiz
            </button>
          )}

          {/* Edit button */}
          {onEdit && (
            <button
              type="button"
              onClick={() => onEdit(appt)}
              className="w-full mt-1 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-xl text-sm font-bold transition-colors"
            >
              Bearbeiten
            </button>
          )}

          {/* Delete (soft) button */}
          {onDelete && (
            <button
              type="button"
              onClick={() => onDelete(appt.id)}
              disabled={isDeleting}
              className="w-full mt-1 px-4 py-2 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white rounded-xl text-sm font-bold transition-colors"
            >
              {isDeleting ? 'Wird gelöscht…' : 'Löschen'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
