'use client';

import React, { useState } from 'react';

interface Estimation {
  id: string;
  created_at: string;
  status: string;
  verkaufsstatus: 'Pending' | 'Accepted' | 'Rejected';
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  brand: string;
  model: string;
  variant: string;
  year: string;
  mileage: string;
  fuel_type: string;
  transmission: string;
  power: string;
  body_type: string;
  condition: string;
  estimated_price: number | null;
  price_min: number | null;
  price_max: number | null;
  market_trend: string | null;
  price_explanation: string | null;
  postal_code: string | null;
  color: string | null;
  doors: string | null;
  vin: string | null;
  desired_price: string | null;
  final_sale_price: number | null;
  commission_percentage: number | null;
  commission_amount: number | null;
  commission_paid: boolean;
  rejection_reason: string | null;
}

interface EditEstimationModalProps {
  estimation: Estimation;
  onSave: (updated: Partial<Estimation>) => Promise<void>;
  onClose: () => void;
}

const EditEstimationModal: React.FC<EditEstimationModalProps> = ({
  estimation,
  onSave,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    first_name: estimation.first_name,
    last_name: estimation.last_name,
    email: estimation.email,
    phone: estimation.phone,
    postal_code: estimation.postal_code || '',
    brand: estimation.brand,
    model: estimation.model,
    variant: estimation.variant || '',
    year: estimation.year,
    mileage: estimation.mileage,
    fuel_type: estimation.fuel_type,
    transmission: estimation.transmission,
    power: estimation.power,
    body_type: estimation.body_type,
    condition: estimation.condition,
    color: estimation.color || '',
    doors: estimation.doors || '',
    vin: estimation.vin || '',
    desired_price: estimation.desired_price || '',
    estimated_price: estimation.estimated_price ?? 0,
    price_min: estimation.price_min ?? 0,
    price_max: estimation.price_max ?? 0,
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    try {
      await onSave(formData);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Fehler beim Speichern');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-black text-brand-dark">Bewertung bearbeiten</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
              {error}
            </div>
          )}

          {/* Customer Info */}
          <div>
            <h3 className="text-lg font-bold text-brand-dark mb-3">Kunde</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Vorname</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nachname</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">PLZ</label>
                <input
                  type="text"
                  name="postal_code"
                  value={formData.postal_code}
                  onChange={handleChange}
                  maxLength={5}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Vehicle Info */}
          <div>
            <h3 className="text-lg font-bold text-brand-dark mb-3">Fahrzeug</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Marke</label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Modell</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Variante</label>
                <input
                  type="text"
                  name="variant"
                  value={formData.variant}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Baujahr</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Kilometerstand</label>
                <input
                  type="text"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Kraftstoff</label>
                <input
                  type="text"
                  name="fuel_type"
                  value={formData.fuel_type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Getriebe</label>
                <input
                  type="text"
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Leistung</label>
                <input
                  type="text"
                  name="power"
                  value={formData.power}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Karosserie</label>
                <input
                  type="text"
                  name="body_type"
                  value={formData.body_type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Zustand</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Farbe</label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Türen</label>
                <input
                  type="text"
                  name="doors"
                  value={formData.doors}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">FIN/VIN</label>
                <input
                  type="text"
                  name="vin"
                  value={formData.vin}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none font-mono text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Wunschpreis</label>
                <input
                  type="text"
                  name="desired_price"
                  value={formData.desired_price}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Valuation Info */}
          <div>
            <h3 className="text-lg font-bold text-brand-dark mb-3">Bewertung</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Geschätzter Preis (€)</label>
                <input
                  type="number"
                  name="estimated_price"
                  value={formData.estimated_price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="100"
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Minimum (€)</label>
                <input
                  type="number"
                  name="price_min"
                  value={formData.price_min}
                  onChange={handleChange}
                  required
                  min="0"
                  step="100"
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Maximum (€)</label>
                <input
                  type="number"
                  name="price_max"
                  value={formData.price_max}
                  onChange={handleChange}
                  required
                  min="0"
                  step="100"
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="px-6 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 rounded-lg font-semibold transition-colors"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 bg-brand-orange hover:bg-orange-600 disabled:opacity-50 text-white rounded-lg font-semibold transition-colors"
            >
              {saving ? 'Speichern...' : 'Speichern'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEstimationModal;
