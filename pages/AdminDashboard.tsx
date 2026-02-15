import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import MetaTags from '../components/MetaTags';

interface Estimation {
  id: string;
  created_at: string;
  status: string;
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
  estimated_price: number;
  price_min: number;
  price_max: number;
  market_trend: string;
  explanation: string;
  postal_code: string | null;
  color: string | null;
  doors: string | null;
  vin: string | null;
  desired_price: string | null;
  final_sale_price: number | null;
  commission_percentage: number | null;
  commission_amount: number | null;
  commission_paid: boolean;
}

interface Appointment {
  id: string;
  created_at: string;
  estimation_id: string;
  preferred_date: string;
  preferred_time: string;
  delivery_type: string;
  bring_location: string | null;
}

const AdminDashboard: React.FC = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [estimations, setEstimations] = useState<Estimation[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'estimations' | 'appointments'>('estimations');
  const [selectedEstimation, setSelectedEstimation] = useState<Estimation | null>(null);
  const [photoUrls, setPhotoUrls] = useState<{ url: string; filename: string }[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/admin/login');
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      loadData();
    }
  }, [user, isAdmin]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [estResponse, apptResponse] = await Promise.all([
        supabase
          .from('estimations')
          .select('*')
          .order('created_at', { ascending: false }),
        supabase
          .from('appointments')
          .select('*')
          .order('created_at', { ascending: false }),
      ]);

      if (estResponse.data) setEstimations(estResponse.data);
      if (apptResponse.data) setAppointments(apptResponse.data);
    } catch (e) {
      console.error('Error loading data:', e);
    } finally {
      setLoading(false);
    }
  };

  const loadPhotos = async (estimationId: string) => {
    setLoadingPhotos(true);
    setPhotoUrls([]);
    try {
      // Call admin-photo-links Edge Function
      const { data, error } = await supabase.functions.invoke('admin-photo-links', {
        body: { estimationId },
      });

      if (error) throw error;

      if (data?.photos) {
        setPhotoUrls(data.photos);
      }
    } catch (e) {
      console.error('Error loading photos:', e);
      alert('Fehler beim Laden der Fotos');
    } finally {
      setLoadingPhotos(false);
    }
  };

  const handleViewDetails = async (estimation: Estimation) => {
    setSelectedEstimation(estimation);
    await loadPhotos(estimation.id);
  };

  const handleCloseDetails = () => {
    setSelectedEstimation(null);
    setPhotoUrls([]);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const formatPrice = (val: number | null) =>
    val ? new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val) : 'N/A';

  const formatDate = (dateStr: string) => new Date(dateStr).toLocaleString('de-DE');

  if (authLoading || !user || !isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-brand-orange border-t-transparent"></div>
          <p className="mt-4 text-slate-600">Wird geladen...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title="Admin Dashboard | Meinautoverkauf.de"
        description="Administrator dashboard"
        canonicalUrl="/admin"
      />
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src="/logo.png" alt="MeinAutoVerkauf.de" className="h-16 w-auto" />
            </Link>
            <h1 className="text-2xl font-black text-brand-dark">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">{user.email}</span>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold text-sm transition-colors"
            >
              Abmelden
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('estimations')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'estimations'
                ? 'bg-brand-orange text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            Bewertungen ({estimations.length})
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'appointments'
                ? 'bg-brand-orange text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            Termine ({appointments.length})
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-brand-orange border-t-transparent"></div>
            <p className="mt-4 text-slate-600">Daten werden geladen...</p>
          </div>
        ) : (
          <>
            {/* Estimations Tab */}
            {activeTab === 'estimations' && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Datum</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Kunde</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Fahrzeug</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Preis</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Aktion</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {estimations.map((est) => (
                        <tr key={est.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 text-sm text-slate-600">
                            {new Date(est.created_at).toLocaleDateString('de-DE')}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                                est.status === 'estimated'
                                  ? 'bg-blue-100 text-blue-800'
                                  : est.status === 'appointment_booked'
                                  ? 'bg-green-100 text-green-800'
                                  : est.status === 'sold'
                                  ? 'bg-purple-100 text-purple-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {est.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <div className="font-semibold text-slate-800">
                              {est.first_name} {est.last_name}
                            </div>
                            <div className="text-slate-500 text-xs">{est.email}</div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <div className="font-semibold text-slate-800">
                              {est.brand} {est.model}
                            </div>
                            <div className="text-slate-500 text-xs">
                              {est.year} • {est.mileage} km
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm font-bold text-brand-orange">
                            {formatPrice(est.estimated_price)}
                          </td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() => handleViewDetails(est)}
                              className="px-3 py-1 bg-brand-orange hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition-colors"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Erstellt</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Termin</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Übergabe</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Estimation ID</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {appointments.map((appt) => (
                        <tr key={appt.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 text-sm text-slate-600">
                            {formatDate(appt.created_at)}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <div className="font-semibold text-slate-800">
                              {new Date(appt.preferred_date).toLocaleDateString('de-DE')}
                            </div>
                            <div className="text-slate-500 text-xs">{appt.preferred_time} Uhr</div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <div className="font-semibold text-slate-800">
                              {appt.delivery_type === 'bring_car' ? 'Filial-Abgabe' : 'Abholung'}
                            </div>
                            {appt.bring_location && (
                              <div className="text-slate-500 text-xs capitalize">{appt.bring_location}</div>
                            )}
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-500 font-mono">{appt.estimation_id}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Detail Modal */}
      {selectedEstimation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={handleCloseDetails}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-2xl font-black text-brand-dark">Bewertungsdetails</h2>
              <button
                onClick={handleCloseDetails}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Customer Info */}
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">Kunde</h3>
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Name</div>
                    <div className="font-semibold">
                      {selectedEstimation.first_name} {selectedEstimation.last_name}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">E-Mail</div>
                    <div className="font-semibold">{selectedEstimation.email}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Telefon</div>
                    <div className="font-semibold">{selectedEstimation.phone}</div>
                  </div>
                  {selectedEstimation.postal_code && (
                    <div>
                      <div className="text-xs text-slate-500 mb-1">PLZ</div>
                      <div className="font-semibold">{selectedEstimation.postal_code}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Vehicle Info */}
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">Fahrzeug</h3>
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Marke & Modell</div>
                    <div className="font-semibold">
                      {selectedEstimation.brand} {selectedEstimation.model}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Variante</div>
                    <div className="font-semibold">{selectedEstimation.variant}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Baujahr</div>
                    <div className="font-semibold">{selectedEstimation.year}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Kilometerstand</div>
                    <div className="font-semibold">{selectedEstimation.mileage} km</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Kraftstoff</div>
                    <div className="font-semibold">{selectedEstimation.fuel_type}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Getriebe</div>
                    <div className="font-semibold">{selectedEstimation.transmission}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Leistung</div>
                    <div className="font-semibold">{selectedEstimation.power}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Karosserie</div>
                    <div className="font-semibold">{selectedEstimation.body_type}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Zustand</div>
                    <div className="font-semibold">{selectedEstimation.condition}</div>
                  </div>
                  {selectedEstimation.color && (
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Farbe</div>
                      <div className="font-semibold">{selectedEstimation.color}</div>
                    </div>
                  )}
                  {selectedEstimation.doors && (
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Türen</div>
                      <div className="font-semibold">{selectedEstimation.doors}</div>
                    </div>
                  )}
                  {selectedEstimation.vin && (
                    <div>
                      <div className="text-xs text-slate-500 mb-1">FIN</div>
                      <div className="font-semibold font-mono text-sm">{selectedEstimation.vin}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Valuation Info */}
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">Bewertung</h3>
                <div className="bg-orange-50 border-2 border-brand-orange p-6 rounded-xl">
                  <div className="text-center mb-4">
                    <div className="text-sm text-slate-600 mb-1">Geschätzter Preis</div>
                    <div className="text-4xl font-black text-brand-orange">
                      {formatPrice(selectedEstimation.estimated_price)}
                    </div>
                  </div>
                  <div className="flex justify-center gap-8 mb-4">
                    <div className="text-center">
                      <div className="text-xs text-slate-500 mb-1">Minimum</div>
                      <div className="font-bold text-slate-700">{formatPrice(selectedEstimation.price_min)}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-500 mb-1">Maximum</div>
                      <div className="font-bold text-slate-700">{formatPrice(selectedEstimation.price_max)}</div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-bold text-slate-700">
                      Markttrend: {selectedEstimation.market_trend}
                    </span>
                  </div>
                  <div className="text-sm text-slate-700 leading-relaxed">{selectedEstimation.explanation}</div>
                </div>
              </div>

              {/* Photos */}
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">Fotos</h3>
                {loadingPhotos ? (
                  <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-brand-orange border-t-transparent"></div>
                    <p className="mt-2 text-slate-600 text-sm">Fotos werden geladen...</p>
                  </div>
                ) : photoUrls.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {photoUrls.map((photo, idx) => (
                      <a
                        key={idx}
                        href={photo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block aspect-video bg-slate-100 rounded-xl overflow-hidden hover:ring-2 hover:ring-brand-orange transition-all"
                      >
                        <img
                          src={photo.url}
                          alt={photo.filename}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-500">Keine Fotos vorhanden</div>
                )}
              </div>

              {/* Metadata */}
              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Estimation ID</div>
                    <div className="font-mono text-xs text-slate-700">{selectedEstimation.id}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Erstellt am</div>
                    <div className="font-semibold text-slate-700">{formatDate(selectedEstimation.created_at)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
