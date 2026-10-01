'use client';

import React from 'react';
import { YEARS } from '@/lib/valuationOptionsData';
import {
  FUEL_OPTIONS,
  MAX_DISTANCE_OPTIONS,
  MAX_MILEAGE_OPTIONS,
  MAX_PRICE_OPTIONS,
  TRANSMISSION_OPTIONS,
  formatThousands,
  type FuelFilter,
  type TransmissionFilter,
} from '@/lib/vehicleFilters';

type EstimationStatus = 'estimated' | 'appointment_booked' | 'converted_to_sale' | 'sold' | 'rejected';
type DeliveryType = 'pickup' | 'bring_car';
type BringLocation = 'bodenheim' | 'ruesselsheim';

export interface FilterState {
  // Estimation filters (Bewertungen)
  status?: EstimationStatus[];
  dateFrom?: string;
  dateTo?: string;
  searchQuery?: string;
  assignedTo?: string;
  callStatus?: string;
  followUp?: boolean;
  // Vehicle filters (mobile.de-style)
  transmission?: TransmissionFilter;
  fuelTypes?: FuelFilter[];
  maxMileage?: number;
  maxDistanceKm?: number;
  yearFrom?: string;
  yearTo?: string;
  maxPrice?: number;
  // Appointment filters (Termine) – same date + search; search filters by estimation_id
  deliveryType?: DeliveryType;
  bringLocation?: BringLocation;
}

interface FilterBarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  mode: 'estimations' | 'appointments';
}

const ASSIGNEES_FILTER = [
  'Nicht zugewiesen', 'Akin Yasar', 'Idris Sarwari',
  'Hamza Sarwari', 'Bilal Sarwari', 'Other',
] as const;

const CALL_STATUSES = [
  'Neu', 'Zugewiesen', 'Angerufen', 'Keine Antwort',
  'Interessiert', 'Nicht interessiert', 'Gekauft',
] as const;

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFiltersChange, mode }) => {
  const [expanded, setExpanded] = React.useState(false);

  const statusOptions: { value: EstimationStatus; label: string; color: string }[] = [
    { value: 'estimated', label: 'Bewertet', color: 'bg-blue-100 text-blue-800' },
    { value: 'appointment_booked', label: 'Termin gebucht', color: 'bg-purple-100 text-purple-800' },
    { value: 'converted_to_sale', label: 'Verkauf in Bearbeitung', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'sold', label: 'Verkauft', color: 'bg-green-100 text-green-800' },
    { value: 'rejected', label: 'Abgelehnt', color: 'bg-red-100 text-red-800' },
  ];

  const handleStatusToggle = (status: EstimationStatus) => {
    const currentStatuses = filters.status || [];
    const newStatuses = currentStatuses.includes(status)
      ? currentStatuses.filter((s) => s !== status)
      : [...currentStatuses, status];
    onFiltersChange({ ...filters, status: newStatuses.length > 0 ? newStatuses : undefined });
  };

  const handleDateChange = (field: 'dateFrom' | 'dateTo', value: string) => {
    onFiltersChange({ ...filters, [field]: value || undefined });
  };

  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, searchQuery: value || undefined });
  };

  const handleFuelToggle = (fuel: FuelFilter) => {
    const current = filters.fuelTypes || [];
    const next = current.includes(fuel) ? current.filter((f) => f !== fuel) : [...current, fuel];
    onFiltersChange({ ...filters, fuelTypes: next.length > 0 ? next : undefined });
  };

  const handleNumberChange = (field: 'maxMileage' | 'maxDistanceKm' | 'maxPrice', value: string) => {
    onFiltersChange({ ...filters, [field]: value ? Number(value) : undefined });
  };

  // Keep the year range valid: picking a "von" after "bis" (or vice versa) moves the other end along.
  const handleYearChange = (field: 'yearFrom' | 'yearTo', value: string) => {
    const next = { ...filters, [field]: value || undefined };
    if (next.yearFrom && next.yearTo && next.yearFrom > next.yearTo) {
      if (field === 'yearFrom') next.yearTo = next.yearFrom;
      else next.yearFrom = next.yearTo;
    }
    onFiltersChange(next);
  };

  const resetFilters = () => {
    onFiltersChange({});
  };

  const vehicleFilterCount =
    (filters.transmission ? 1 : 0) + (filters.fuelTypes?.length ? 1 : 0)
    + (filters.maxMileage ? 1 : 0) + (filters.maxDistanceKm ? 1 : 0)
    + (filters.yearFrom ? 1 : 0) + (filters.yearTo ? 1 : 0) + (filters.maxPrice ? 1 : 0);

  const activeFilterCount = mode === 'appointments'
    ? (filters.dateFrom ? 1 : 0) + (filters.dateTo ? 1 : 0) + (filters.searchQuery ? 1 : 0)
    : (filters.status?.length || 0) + (filters.dateFrom ? 1 : 0) + (filters.dateTo ? 1 : 0)
      + (filters.searchQuery ? 1 : 0) + (filters.assignedTo ? 1 : 0)
      + (filters.callStatus ? 1 : 0) + (filters.followUp ? 1 : 0) + vehicleFilterCount;

  const selectClass =
    'w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none bg-white text-sm';

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6">
      {/* Filter Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl"
      >
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span className="font-bold text-slate-800">Filter</span>
          {activeFilterCount > 0 && (
            <span className="px-2 py-0.5 bg-brand-orange text-white text-xs font-bold rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-slate-600 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Filter Content */}
      {expanded && (
        <div className="px-6 pb-6 border-t border-gray-200 pt-4">
          {/* Search */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Suche</label>
            <input
              type="text"
              value={filters.searchQuery || ''}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={mode === 'estimations' ? 'Name, E-Mail, Telefon, Marke, Modell, VIN...' : 'Estimation ID...'}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
            />
          </div>

          {mode === 'estimations' && (
            <>
              {/* Status multi-select */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Status</label>
                <div className="flex flex-wrap gap-2">
                  {statusOptions.map((option) => {
                    const isSelected = filters.status?.includes(option.value) ?? false;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleStatusToggle(option.value)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                          isSelected
                            ? option.color + ' ring-2 ring-offset-2 ring-brand-orange'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Zugewiesen an */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Zugewiesen an</label>
                <select
                  value={filters.assignedTo ?? ''}
                  onChange={(e) => onFiltersChange({ ...filters, assignedTo: e.target.value || undefined })}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none bg-white text-sm"
                >
                  <option value="">Alle</option>
                  {ASSIGNEES_FILTER.map((name) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </div>

              {/* Anrufstatus */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Anrufstatus</label>
                <select
                  value={filters.callStatus ?? ''}
                  onChange={(e) => onFiltersChange({ ...filters, callStatus: e.target.value || undefined })}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none bg-white text-sm"
                >
                  <option value="">Alle</option>
                  {CALL_STATUSES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Follow Up toggle */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Follow Up</label>
                <button
                  type="button"
                  onClick={() => onFiltersChange({ ...filters, followUp: filters.followUp ? undefined : true })}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filters.followUp
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-green-100'
                  }`}
                >
                  Nur Follow Up anzeigen
                </button>
              </div>

              {/* Fahrzeug (mobile.de-style vehicle filters) */}
              <div className="mb-4 pt-4 border-t border-gray-200">
                <div className="text-sm font-bold text-slate-800 mb-3">Fahrzeug</div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Kraftstoff</label>
                  <div className="flex flex-wrap gap-2">
                    {FUEL_OPTIONS.map((fuel) => {
                      const isSelected = filters.fuelTypes?.includes(fuel) ?? false;
                      return (
                        <button
                          key={fuel}
                          type="button"
                          onClick={() => handleFuelToggle(fuel)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                            isSelected
                              ? 'bg-orange-100 text-orange-800 ring-2 ring-offset-2 ring-brand-orange'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {fuel}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Getriebe</label>
                    <select
                      value={filters.transmission ?? ''}
                      onChange={(e) =>
                        onFiltersChange({ ...filters, transmission: (e.target.value || undefined) as TransmissionFilter | undefined })
                      }
                      className={selectClass}
                    >
                      <option value="">Alle</option>
                      {TRANSMISSION_OPTIONS.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Kilometerstand bis</label>
                    <select
                      value={filters.maxMileage ?? ''}
                      onChange={(e) => handleNumberChange('maxMileage', e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Beliebig</option>
                      {MAX_MILEAGE_OPTIONS.map((km) => (
                        <option key={km} value={km}>{formatThousands(km)} km</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Umkreis Bodenheim</label>
                    <select
                      value={filters.maxDistanceKm ?? ''}
                      onChange={(e) => handleNumberChange('maxDistanceKm', e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Beliebig</option>
                      {MAX_DISTANCE_OPTIONS.map((km) => (
                        <option key={km} value={km}>bis {km} km</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Erstzulassung von</label>
                    <select
                      value={filters.yearFrom ?? ''}
                      onChange={(e) => handleYearChange('yearFrom', e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Beliebig</option>
                      {YEARS.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Erstzulassung bis</label>
                    <select
                      value={filters.yearTo ?? ''}
                      onChange={(e) => handleYearChange('yearTo', e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Beliebig</option>
                      {YEARS.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Preis bis</label>
                    <select
                      value={filters.maxPrice ?? ''}
                      onChange={(e) => handleNumberChange('maxPrice', e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Beliebig</option>
                      {MAX_PRICE_OPTIONS.map((price) => (
                        <option key={price} value={price}>{formatThousands(price)} €</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Date Range */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Von</label>
              <input
                type="date"
                value={filters.dateFrom || ''}
                onChange={(e) => handleDateChange('dateFrom', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Bis</label>
              <input
                type="date"
                value={filters.dateTo || ''}
                onChange={(e) => handleDateChange('dateTo', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
              />
            </div>
          </div>

          {/* Reset Button */}
          {activeFilterCount > 0 && (
            <button
              onClick={resetFilters}
              className="w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold transition-colors"
            >
              Filter zurücksetzen
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
