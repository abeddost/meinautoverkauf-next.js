import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import MetaTags from '../components/MetaTags';
import EditEstimationModal from '../components/admin/EditEstimationModal';
import DeleteConfirmDialog from '../components/admin/DeleteConfirmDialog';
import PhotoUploadModal from '../components/admin/PhotoUploadModal';
import FilterBar, { FilterState } from '../components/admin/FilterBar';
import { generateEstimationPDF } from '../components/admin/PDFGenerator';

export interface Estimation {
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
  estimated_price: number;
  price_min: number;
  price_max: number;
  market_trend: string;
  price_explanation: string;
  postal_code: string | null;
  color: string | null;
  doors: string | null;
  vin: string | null;
  desired_price: string | null;
  final_sale_price: number | null;
  commission_percentage: number | null;
  commission_amount: number | null;
  provision_euro: number | null;
  commission_paid: boolean;
  rejection_reason: string | null;
  deleted_at: string | null;
}

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
}

const AdminDashboard: React.FC = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [estimations, setEstimations] = useState<Estimation[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'estimations' | 'appointments' | 'provision'>('estimations');
  const [estimationSubTab, setEstimationSubTab] = useState<'active' | 'archived' | 'deleted'>('active');
  const [appointmentSubTab, setAppointmentSubTab] = useState<'all' | 'pickup' | 'bodenheim' | 'ruesselsheim'>('all');
  const [appointmentListTab, setAppointmentListTab] = useState<'active' | 'archived' | 'deleted'>('active');
  const [selectedEstimation, setSelectedEstimation] = useState<Estimation | null>(null);
  const [photoUrls, setPhotoUrls] = useState<{ id: string; url: string; filename: string; storagePath: string }[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);
  
  // New state for modals and actions
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showPhotoUploadModal, setShowPhotoUploadModal] = useState(false);
  const [appointmentModalForEstimation, setAppointmentModalForEstimation] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({});
  const [updatingVerkaufsstatusId, setUpdatingVerkaufsstatusId] = useState<string | null>(null);
  const [archivingEstimationId, setArchivingEstimationId] = useState<string | null>(null);
  const [deletingAppointmentId, setDeletingAppointmentId] = useState<string | null>(null);
  const [updatingProvisionId, setUpdatingProvisionId] = useState<string | null>(null);
  const [provisionDraft, setProvisionDraft] = useState<Record<string, string>>({});
  const [provisionMonthFilter, setProvisionMonthFilter] = useState<string>('all');
  const [notification, setNotification] = useState<{ type: 'error' | 'success'; message: string } | null>(null);

  const showError = (technicalMessage: string, context?: string) => {
    const friendly: Record<string, string> = {
      'column "commission_amount" can only be updated to DEFAULT': 'Die Provision wird automatisch berechnet. Bitte nutzen Sie das Feld „Provision (€)“ für eine manuelle Eingabe.',
      'Fehler beim Speichern der Provision': 'Provision konnte nicht gespeichert werden. Bitte erneut versuchen.',
      'Invalid status transition': 'Dieser Statuswechsel ist nicht erlaubt.',
      'violates foreign key constraint': 'Die Aktion konnte nicht ausgeführt werden (verknüpfte Daten).',
      'Could not find the': 'Datenbankfeld nicht gefunden. Bitte Seite neu laden.',
    };
    let msg = technicalMessage;
    for (const [key, text] of Object.entries(friendly)) {
      if (technicalMessage.includes(key) || technicalMessage === key) {
        msg = context ? `${text} (${context})` : text;
        break;
      }
    }
    setNotification({ type: 'error', message: msg });
    setTimeout(() => setNotification(null), 6000);
  };

  const showSuccess = (message: string) => {
    setNotification({ type: 'success', message });
    setTimeout(() => setNotification(null), 4000);
  };

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
      const { data: rows, error } = await supabase
        .from('estimation_photos')
        .select('id, storage_path, original_filename')
        .eq('estimation_id', estimationId)
        .order('created_at', { ascending: true });

      if (error) throw error;

      if (rows && rows.length > 0) {
        setPhotoUrls(
          rows.map((row: { id: string; storage_path: string; original_filename: string | null }) => {
            const { data: urlData } = supabase.storage.from('car-photos').getPublicUrl(row.storage_path);
            return {
              id: row.id,
              url: urlData.publicUrl,
              filename: row.original_filename || row.storage_path.split('/').pop() || row.storage_path,
              storagePath: row.storage_path,
            };
          })
        );
      }
    } catch (e) {
      console.error('Error loading photos:', e);
      showError('Fotos konnten nicht geladen werden.');
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
    setShowEditModal(false);
    setShowDeleteDialog(false);
    setShowPhotoUploadModal(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  // New handlers for CRUD operations
  const handleSaveEstimation = async (updated: Partial<Estimation>) => {
    if (!selectedEstimation) return;

    const { error } = await supabase
      .from('estimations')
      .update(updated)
      .eq('id', selectedEstimation.id);

    if (error) {
      throw new Error(error.message);
    }

    // Reload data
    await loadData();
    
    // Update selected estimation
    setSelectedEstimation({ ...selectedEstimation, ...updated } as Estimation);
  };

  const handleDeleteEstimation = async (hardDelete: boolean) => {
    if (!selectedEstimation) return;

    if (hardDelete) {
      // Hard delete - permanently remove
      const { error } = await supabase
        .from('estimations')
        .delete()
        .eq('id', selectedEstimation.id);

      if (error) {
        showError(error.message, 'Löschen');
        return;
      }
    } else {
      const { error } = await supabase
        .from('estimations')
        .update({ status: 'archived' })
        .eq('id', selectedEstimation.id);

      if (error) {
        showError(error.message, 'Archivieren');
        return;
      }
    }

    await loadData();
    handleCloseDetails();
    showSuccess(hardDelete ? 'Bewertung gelöscht.' : 'Bewertung archiviert.');
  };

  const handleStatusChange = async (newStatus: string, additionalData?: any) => {
    if (!selectedEstimation) return;

    const updateData: any = { status: newStatus };
    
    if (additionalData) {
      Object.assign(updateData, additionalData);
    }

    const { error } = await supabase
      .from('estimations')
      .update(updateData)
      .eq('id', selectedEstimation.id);

    if (error) {
      showError(error.message, 'Status');
      throw error;
    }

    await loadData();
    setSelectedEstimation({ ...selectedEstimation, ...updateData } as Estimation);
  };

  const handleVerkaufsstatusChange = async (newVerkaufsstatus: 'Pending' | 'Accepted' | 'Rejected') => {
    if (!selectedEstimation) return;

    const { data, error } = await supabase
      .from('estimations')
      .update({ verkaufsstatus: newVerkaufsstatus })
      .eq('id', selectedEstimation.id)
      .select('id, verkaufsstatus');

    if (error) {
      showError(error.message, 'Verkaufsstatus');
      return;
    }

    const row = Array.isArray(data) ? data[0] : data;
    const updatedStatus = (row?.verkaufsstatus ?? newVerkaufsstatus) as 'Pending' | 'Accepted' | 'Rejected';
    setEstimations((prev) =>
      prev.map((e) => (e.id === selectedEstimation.id ? { ...e, verkaufsstatus: updatedStatus } : e))
    );
    setSelectedEstimation({ ...selectedEstimation, verkaufsstatus: updatedStatus });
  };

  const handleVerkaufsstatusChangeFromTable = async (
    estimationId: string,
    newVerkaufsstatus: 'Pending' | 'Accepted' | 'Rejected'
  ) => {
    if (!estimationId) return;
    setUpdatingVerkaufsstatusId(estimationId);
    try {
      const { data, error } = await supabase
        .from('estimations')
        .update({ verkaufsstatus: newVerkaufsstatus })
        .eq('id', estimationId)
        .select('id, verkaufsstatus');

      if (error) {
        showError(error.message, 'Verkaufsstatus');
        return;
      }

      const row = Array.isArray(data) ? data[0] : data;
      const updatedStatus = (row?.verkaufsstatus ?? newVerkaufsstatus) as 'Pending' | 'Accepted' | 'Rejected';
      setEstimations((prev) =>
        prev.map((e) => (e.id === estimationId ? { ...e, verkaufsstatus: updatedStatus } : e))
      );
      if (selectedEstimation?.id === estimationId) {
        setSelectedEstimation({ ...selectedEstimation, verkaufsstatus: updatedStatus });
      }
    } finally {
      setUpdatingVerkaufsstatusId(null);
    }
  };

  const handleMoveEstimationToDeleted = async (estimationId: string) => {
    if (!estimationId) return;
    setArchivingEstimationId(estimationId);
    try {
      const { error } = await supabase
        .from('estimations')
        .update({ status: 'deleted' })
        .eq('id', estimationId);
      if (error) {
        showError(error.message, 'Löschen');
        return;
      }
      await loadData();
      if (selectedEstimation?.id === estimationId) handleCloseDetails();
      showSuccess('Bewertung in Gelöscht verschoben. Nach 30 Tagen wird sie endgültig entfernt.');
    } finally {
      setArchivingEstimationId(null);
    }
  };

  const handleArchiveEstimation = async (estimationId: string) => {
    if (!estimationId) return;
    setArchivingEstimationId(estimationId);
    try {
      const { error } = await supabase
        .from('estimations')
        .update({ status: 'archived' })
        .eq('id', estimationId);

      if (error) {
        showError(error.message, 'Archivieren');
        return;
      }
      await loadData();
      if (selectedEstimation?.id === estimationId) {
        handleCloseDetails();
      }
      showSuccess('Bewertung archiviert.');
    } finally {
      setArchivingEstimationId(null);
    }
  };

  const handleRestoreEstimation = async (estimationId: string) => {
    if (!estimationId) return;
    setArchivingEstimationId(estimationId);
    try {
      const { error } = await supabase
        .from('estimations')
        .update({ status: 'estimated' })
        .eq('id', estimationId);

      if (error) {
        showError(error.message, 'Wiederherstellen');
        return;
      }
      await loadData();
      showSuccess('Bewertung wiederhergestellt.');
    } finally {
      setArchivingEstimationId(null);
    }
  };

  const handleHardDeleteEstimationById = async (estimationId: string) => {
    if (!estimationId) return;
    if (!window.confirm('Bewertung endgültig löschen? Alle Fotos und verknüpften Termine werden gelöscht.')) return;
    try {
      const { error } = await supabase.from('estimations').delete().eq('id', estimationId);
      if (error) {
        showError(error.message, 'Löschen');
        return;
      }
      await loadData();
      if (selectedEstimation?.id === estimationId) handleCloseDetails();
      showSuccess('Bewertung endgültig gelöscht.');
    } catch (e) {
      console.error(e);
      showError('Beim Löschen ist ein Fehler aufgetreten.');
    }
  };

  const handleProvisionAmountChange = async (estimationId: string, value: string) => {
    if (!estimationId) return;
    const num = value === '' || value === '-' ? null : parseFloat(value.replace(',', '.'));
    if (value !== '' && (isNaN(num!) || num! < 0)) return;
    setUpdatingProvisionId(estimationId);
    try {
      const { error } = await supabase
        .from('estimations')
        .update({ provision_euro: num })
        .eq('id', estimationId);
      if (error) {
        showError(error.message, 'Provision');
        return;
      }
      setEstimations((prev) =>
        prev.map((e) => (e.id === estimationId ? { ...e, provision_euro: num } : e))
      );
      if (selectedEstimation?.id === estimationId) {
        setSelectedEstimation({ ...selectedEstimation, provision_euro: num });
      }
      showSuccess('Provision gespeichert.');
    } finally {
      setUpdatingProvisionId(null);
    }
  };

  const handleProvisionPaidChange = async (estimationId: string, paid: boolean) => {
    if (!estimationId) return;
    setUpdatingProvisionId(estimationId);
    try {
      const update: { commission_paid: boolean; commission_paid_at?: string | null } = {
        commission_paid: paid,
      };
      if (paid) update.commission_paid_at = new Date().toISOString();
      else update.commission_paid_at = null;
      const { error } = await supabase
        .from('estimations')
        .update(update)
        .eq('id', estimationId);
      if (error) {
        showError(error.message, 'Bezahlt-Status');
        return;
      }
      setEstimations((prev) =>
        prev.map((e) => (e.id === estimationId ? { ...e, ...update } : e))
      );
      if (selectedEstimation?.id === estimationId) {
        setSelectedEstimation({ ...selectedEstimation, ...update });
      }
      showSuccess(paid ? 'Als bezahlt markiert.' : 'Als unbezahlt markiert.');
    } finally {
      setUpdatingProvisionId(null);
    }
  };

  const handleArchiveAppointment = async (appointmentId: string) => {
    if (!appointmentId) return;
    setDeletingAppointmentId(appointmentId);
    try {
      const { error } = await supabase.from('appointments').update({ archived_at: new Date().toISOString() }).eq('id', appointmentId);
      if (error) { showError(error.message, 'Archiv'); return; }
      await loadData();
      showSuccess('Termin archiviert.');
    } finally { setDeletingAppointmentId(null); }
  };

  const handleMoveAppointmentToDeleted = async (appointmentId: string) => {
    if (!appointmentId) return;
    setDeletingAppointmentId(appointmentId);
    try {
      const { error } = await supabase.from('appointments').update({ deleted_at: new Date().toISOString() }).eq('id', appointmentId);
      if (error) { showError(error.message, 'Löschen'); return; }
      await loadData();
      showSuccess('Termin in Gelöscht verschoben. Nach 30 Tagen wird er endgültig entfernt.');
    } finally { setDeletingAppointmentId(null); }
  };

  const handleRestoreAppointment = async (appointmentId: string, fromArchived: boolean) => {
    if (!appointmentId) return;
    setDeletingAppointmentId(appointmentId);
    try {
      const update = fromArchived ? { archived_at: null } : { deleted_at: null };
      const { error } = await supabase.from('appointments').update(update).eq('id', appointmentId);
      if (error) { showError(error.message, 'Wiederherstellen'); return; }
      await loadData();
      showSuccess('Termin wiederhergestellt.');
    } finally { setDeletingAppointmentId(null); }
  };

  const handleDeleteAppointment = async (appointmentId: string) => {
    if (!appointmentId) return;
    if (!window.confirm('Termin endgültig löschen? Diese Aktion kann nicht rückgängig gemacht werden.')) return;
    setDeletingAppointmentId(appointmentId);
    try {
      const { error } = await supabase.from('appointments').delete().eq('id', appointmentId);
      if (error) {
        showError(error.message, 'Termin löschen');
        return;
      }
      await loadData();
      showSuccess('Termin endgültig gelöscht.');
    } finally {
      setDeletingAppointmentId(null);
    }
  };

  const handlePhotoUploadComplete = async () => {
    if (!selectedEstimation) return;
    await loadPhotos(selectedEstimation.id);
  };

  const handleRemovePhoto = async (photoId: string, storagePath: string) => {
    if (!selectedEstimation) return;
    if (!window.confirm('Dieses Foto wirklich entfernen?')) return;
    try {
      const { error: dbError } = await supabase.from('estimation_photos').delete().eq('id', photoId);
      if (dbError) throw dbError;
      const { error: storageError } = await supabase.storage.from('car-photos').remove([storagePath]);
      if (storageError) console.warn('Storage delete failed (file may already be gone):', storageError);
      setPhotoUrls((prev) => prev.filter((p) => p.id !== photoId));
      showSuccess('Foto entfernt.');
    } catch (e: unknown) {
      console.error('Error removing photo:', e);
      showError('Foto konnte nicht entfernt werden.');
    }
  };

  const handleDownloadPDF = async () => {
    if (!selectedEstimation) return;
    try {
      await generateEstimationPDF(selectedEstimation, photoUrls.map((p) => p.url));
    } catch (err) {
      console.error('PDF generation error:', err);
      showError('Das PDF konnte nicht erstellt werden.');
    }
  };

  const handleDownloadDealerPDF = async () => {
    if (!selectedEstimation) return;
    try {
      await generateEstimationPDF(selectedEstimation, photoUrls.map((p) => p.url), { hideCustomer: true });
    } catch (err) {
      console.error('PDF generation error:', err);
      showError('Das PDF konnte nicht erstellt werden.');
    }
  };

  // Filtered estimations: active / archived / deleted
  const filteredEstimations = useMemo(() => {
    let result: Estimation[];
    if (estimationSubTab === 'active') {
      result = estimations.filter((est) => est.status !== 'archived' && est.status !== 'deleted');
    } else if (estimationSubTab === 'archived') {
      result = estimations.filter((est) => est.status === 'archived');
    } else {
      result = estimations.filter((est) => est.status === 'deleted');
    }

    if (estimationSubTab === 'active' && filters.status && filters.status.length > 0) {
      result = result.filter((est) => filters.status!.includes(est.status as any));
    }

    // Date range filter
    if (filters.dateFrom) {
      const fromDate = new Date(filters.dateFrom);
      result = result.filter((est) => new Date(est.created_at) >= fromDate);
    }
    if (filters.dateTo) {
      const toDate = new Date(filters.dateTo);
      toDate.setHours(23, 59, 59, 999);
      result = result.filter((est) => new Date(est.created_at) <= toDate);
    }

    // Search filter (null-safe: match actual estimation fields)
    if (filters.searchQuery && filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase().trim();
      result = result.filter((est) => {
        const first = (est.first_name ?? '').toLowerCase();
        const last = (est.last_name ?? '').toLowerCase();
        const email = (est.email ?? '').toLowerCase();
        const phone = (est.phone ?? '').toLowerCase();
        const brand = (est.brand ?? '').toLowerCase();
        const model = (est.model ?? '').toLowerCase();
        const variant = (est.variant ?? '').toLowerCase();
        const vin = (est.vin ?? '').toLowerCase();
        const id = (est.id ?? '').toLowerCase();
        return first.includes(query) || last.includes(query) || email.includes(query) ||
          phone.includes(query) || brand.includes(query) || model.includes(query) ||
          variant.includes(query) || vin.includes(query) || id.includes(query);
      });
    }

    return result;
  }, [estimations, filters, estimationSubTab]);

  // Filtered appointments: active (by location) / archived / deleted; then apply filter bar (date + search)
  const filteredAppointments = useMemo(() => {
    let base: Appointment[];
    if (appointmentListTab === 'active') {
      base = appointments.filter((apt) => !apt.archived_at && !apt.deleted_at);
      if (appointmentSubTab === 'pickup') base = base.filter((apt) => apt.delivery_type === 'pickup');
      else if (appointmentSubTab === 'bodenheim') base = base.filter((apt) => apt.delivery_type === 'bring_car' && apt.bring_location === 'bodenheim');
      else if (appointmentSubTab === 'ruesselsheim') base = base.filter((apt) => apt.delivery_type === 'bring_car' && apt.bring_location === 'ruesselsheim');
      // 'all' — no additional filter

      if (filters.dateFrom) {
        const fromDate = new Date(filters.dateFrom);
        base = base.filter((apt) => new Date(apt.preferred_date) >= fromDate);
      }
      if (filters.dateTo) {
        const toDate = new Date(filters.dateTo);
        toDate.setHours(23, 59, 59, 999);
        base = base.filter((apt) => new Date(apt.preferred_date) <= toDate);
      }
      if (filters.searchQuery && filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        base = base.filter((apt) => (apt.estimation_id ?? '').toLowerCase().includes(query));
      }
      return base;
    }
    if (appointmentListTab === 'archived') {
      return appointments.filter((apt) => !!apt.archived_at);
    }
    return appointments.filter((apt) => !!apt.deleted_at);
  }, [appointments, appointmentSubTab, appointmentListTab, filters.dateFrom, filters.dateTo, filters.searchQuery]);

  // Dashboard stats (active only: not archived, not deleted)
  const stats = useMemo(() => {
    const activeEstimations = estimations.filter((e) => e.status !== 'archived' && e.status !== 'deleted');
    const totalEstimations = activeEstimations.length;
    const acceptedCount = activeEstimations.filter((e) => e.verkaufsstatus === 'Accepted').length;
    const pendingCount = activeEstimations.filter((e) => e.verkaufsstatus === 'Pending').length;
    const rejectedCount = activeEstimations.filter((e) => e.verkaufsstatus === 'Rejected').length;
    const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM
    const acceptedThisMonth = activeEstimations.filter(
      (e) => e.verkaufsstatus === 'Accepted' && e.created_at.startsWith(currentMonth)
    ).length;

    return {
      totalEstimations,
      acceptedCount,
      pendingCount,
      rejectedCount,
      acceptedThisMonth,
    };
  }, [estimations]);

  // Provision tab stats (Accepted, non-deleted)
  const provisionStats = useMemo(() => {
    const accepted = estimations.filter((e) => e.verkaufsstatus === 'Accepted' && e.status !== 'deleted');
    const provisionAmount = (e: Estimation) => e.provision_euro ?? e.commission_amount ?? 0;
    const totalProvision = accepted.reduce((sum, e) => sum + provisionAmount(e), 0);
    const openProvision = accepted.filter((e) => !e.commission_paid).reduce((sum, e) => sum + provisionAmount(e), 0);
    const paidProvision = accepted.filter((e) => e.commission_paid).reduce((sum, e) => sum + provisionAmount(e), 0);
    return { acceptedTotal: accepted.length, totalProvision, openProvision, paidProvision };
  }, [estimations]);

  const formatPrice = (val: number | null | undefined) =>
    typeof val === 'number' ? new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val) : 'N/A';

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
      {/* Notification toast */}
      {notification && (
        <div
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 max-w-md ${
            notification.type === 'error' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
          }`}
        >
          <span className="flex-1 text-sm font-medium">{notification.message}</span>
          <button
            type="button"
            onClick={() => setNotification(null)}
            className="p-1 hover:bg-white/20 rounded"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      )}
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src="/logo.webp"
                alt="MeinAutoVerkauf.de"
                className="h-16 w-auto"
                width={1260}
                height={410}
                loading="eager"
                decoding="async"
              />
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
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-slate-600">Gesamt Bewertungen</div>
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="text-3xl font-black text-brand-dark">{stats.totalEstimations}</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-slate-600">Angenommen</div>
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-black text-brand-dark">{stats.acceptedCount}</div>
            <div className="text-xs text-slate-500 mt-1">Diesen Monat: {stats.acceptedThisMonth}</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-slate-600">Ausstehend</div>
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-black text-brand-dark">{stats.pendingCount}</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-slate-600">Abgelehnt</div>
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-black text-brand-dark">{stats.rejectedCount}</div>
          </div>
        </div>

        {/* Main Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <button
            onClick={() => setActiveTab('estimations')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'estimations'
                ? 'bg-brand-orange text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            Bewertungen ({estimations.filter((e) => e.status !== 'archived' && e.status !== 'deleted').length})
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'appointments'
                ? 'bg-brand-orange text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            Termine ({appointments.filter((a) => !a.archived_at && !a.deleted_at).length})
          </button>
          <button
            onClick={() => setActiveTab('provision')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'provision'
                ? 'bg-brand-orange text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            Provision ({estimations.filter((e) => e.verkaufsstatus === 'Accepted' && e.status !== 'deleted').length})
          </button>
        </div>

        {/* Bewertungen sub-tabs: Aktiv | Archiv | Gelöscht */}
        {activeTab === 'estimations' && (
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setEstimationSubTab('active')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm ${estimationSubTab === 'active' ? 'bg-brand-orange text-white' : 'bg-white text-slate-600 border border-gray-200'}`}
            >
              Aktiv ({estimations.filter((e) => e.status !== 'archived' && e.status !== 'deleted').length})
            </button>
            <button
              onClick={() => setEstimationSubTab('archived')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm ${estimationSubTab === 'archived' ? 'bg-brand-orange text-white' : 'bg-white text-slate-600 border border-gray-200'}`}
            >
              Archiv ({estimations.filter((e) => e.status === 'archived').length})
            </button>
            <button
              onClick={() => setEstimationSubTab('deleted')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm ${estimationSubTab === 'deleted' ? 'bg-brand-orange text-white' : 'bg-white text-slate-600 border border-gray-200'}`}
            >
              Gelöscht ({estimations.filter((e) => e.status === 'deleted').length})
            </button>
          </div>
        )}

        {/* Termine sub-tabs: Aktiv | Archiv | Gelöscht; when Aktiv show location sub-sub-tabs */}
        {activeTab === 'appointments' && (
          <div className="space-y-3 mb-4">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setAppointmentListTab('active')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm ${appointmentListTab === 'active' ? 'bg-brand-orange text-white' : 'bg-white text-slate-600 border border-gray-200'}`}
              >
                Aktiv ({appointments.filter((a) => !a.archived_at && !a.deleted_at).length})
              </button>
              <button
                onClick={() => setAppointmentListTab('archived')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm ${appointmentListTab === 'archived' ? 'bg-brand-orange text-white' : 'bg-white text-slate-600 border border-gray-200'}`}
              >
                Archiv ({appointments.filter((a) => !!a.archived_at).length})
              </button>
              <button
                onClick={() => setAppointmentListTab('deleted')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm ${appointmentListTab === 'deleted' ? 'bg-brand-orange text-white' : 'bg-white text-slate-600 border border-gray-200'}`}
              >
                Gelöscht ({appointments.filter((a) => !!a.deleted_at).length})
              </button>
            </div>
            {appointmentListTab === 'active' && (
              <div className="flex gap-2">
                <button onClick={() => setAppointmentSubTab('all')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${appointmentSubTab === 'all' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  Alle ({appointments.filter((a) => !a.archived_at && !a.deleted_at).length})
                </button>
                <button onClick={() => setAppointmentSubTab('pickup')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${appointmentSubTab === 'pickup' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  Haus-Abholung ({appointments.filter((a) => !a.archived_at && !a.deleted_at && a.delivery_type === 'pickup').length})
                </button>
                <button onClick={() => setAppointmentSubTab('bodenheim')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${appointmentSubTab === 'bodenheim' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  Bodenheim ({appointments.filter((a) => !a.archived_at && !a.deleted_at && a.delivery_type === 'bring_car' && a.bring_location === 'bodenheim').length})
                </button>
                <button onClick={() => setAppointmentSubTab('ruesselsheim')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${appointmentSubTab === 'ruesselsheim' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  Rüsselsheim ({appointments.filter((a) => !a.archived_at && !a.deleted_at && a.delivery_type === 'bring_car' && a.bring_location === 'ruesselsheim').length})
                </button>
              </div>
            )}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-brand-orange border-t-transparent"></div>
            <p className="mt-4 text-slate-600">Daten werden geladen...</p>
          </div>
        ) : (
          <>
            {/* Estimations Tab */}
            {activeTab === 'estimations' && (
              <>
                {estimationSubTab === 'active' && (
                  <FilterBar filters={filters} onFiltersChange={setFilters} mode="estimations" />
                )}

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-gray-200">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Datum</th>
                          <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Bew.-ID</th>
                          <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Status</th>
                          <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Kunde</th>
                          <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Fahrzeug</th>
                          <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Preis</th>
                          {estimationSubTab === 'active' && (
                            <>
                              <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Verkaufsstatus</th>
                            </>
                          )}
                          <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Aktion</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {filteredEstimations.length === 0 ? (
                          <tr>
                            <td colSpan={estimationSubTab === 'active' ? 8 : 7} className="px-4 py-8 text-center text-slate-500">
                              {estimationSubTab === 'active' ? 'Keine Bewertungen gefunden' : estimationSubTab === 'archived' ? 'Keine archivierten Bewertungen' : 'Keine gelöschten Bewertungen'}
                            </td>
                          </tr>
                        ) : (
                          filteredEstimations.map((est) => (
                            <tr key={est.id} className="hover:bg-slate-50 transition-colors">
                              <td className="px-4 py-3 text-sm text-slate-600">
                                {new Date(est.created_at).toLocaleDateString('de-DE')}
                              </td>
                              <td className="px-4 py-3 text-xs font-mono text-slate-400" title={est.id}>
                                {est.id.slice(0, 8)}…
                              </td>
                              <td className="px-4 py-3">
                                {est.status === 'appointment_booked' ? (
                                  <button
                                    type="button"
                                    onClick={() => setAppointmentModalForEstimation(est.id)}
                                    className="inline-block px-2 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors cursor-pointer underline-offset-2 hover:underline"
                                    title="Termin anzeigen"
                                  >
                                    Termin gebucht
                                  </button>
                                ) : (
                                  <span
                                    className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                                      est.status === 'estimated'
                                        ? 'bg-blue-100 text-blue-800'
                                        : est.status === 'converted_to_sale'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : est.status === 'sold'
                                        ? 'bg-green-100 text-green-800'
                                        : est.status === 'rejected'
                                        ? 'bg-red-100 text-red-800'
                                        : est.status === 'archived'
                                        ? 'bg-amber-100 text-amber-800'
                                        : est.status === 'deleted'
                                        ? 'bg-slate-200 text-slate-700'
                                        : 'bg-gray-100 text-gray-800'
                                    }`}
                                  >
                                    {est.status === 'archived' ? 'Archiv' : est.status === 'deleted' ? 'Gelöscht' : est.status}
                                  </span>
                                )}
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
                              {estimationSubTab === 'active' && (
                                <>
                                  <td className="px-4 py-3">
                                    <select
                                      value={est.verkaufsstatus ?? 'Pending'}
                                      onChange={(e) =>
                                        handleVerkaufsstatusChangeFromTable(
                                          est.id,
                                          e.target.value as 'Pending' | 'Accepted' | 'Rejected'
                                        )
                                      }
                                      disabled={updatingVerkaufsstatusId === est.id}
                                      className={`min-w-[100px] px-2 py-1 rounded-full text-xs font-bold border-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                                        est.verkaufsstatus === 'Pending'
                                          ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
                                          : est.verkaufsstatus === 'Accepted'
                                          ? 'bg-green-100 text-green-800 border-green-300'
                                          : 'bg-red-100 text-red-800 border-red-300'
                                      }`}
                                    >
                                      <option value="Pending">Pending</option>
                                      <option value="Accepted">Accepted</option>
                                      <option value="Rejected">Rejected</option>
                                    </select>
                                    {updatingVerkaufsstatusId === est.id && (
                                      <span className="ml-1 inline-block w-3 h-3 border-2 border-brand-orange border-t-transparent rounded-full animate-spin" />
                                    )}
                                  </td>
                                </>
                              )}
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <button
                                    type="button"
                                    onClick={() => handleViewDetails(est)}
                                    className="px-3 py-1 bg-brand-orange hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition-colors"
                                  >
                                    Details
                                  </button>
                                  {estimationSubTab === 'active' && (
                                    <>
                                      <button
                                        type="button"
                                        onClick={() => handleArchiveEstimation(est.id)}
                                        disabled={archivingEstimationId === est.id}
                                        className="px-3 py-1 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                                        title="Archivieren"
                                      >
                                        {archivingEstimationId === est.id ? '…' : 'Archiv'}
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleMoveEstimationToDeleted(est.id)}
                                        disabled={archivingEstimationId === est.id}
                                        className="px-3 py-1 bg-slate-500 hover:bg-slate-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                                        title="In Gelöscht verschieben"
                                      >
                                        {archivingEstimationId === est.id ? '…' : 'Löschen'}
                                      </button>
                                    </>
                                  )}
                                  {(estimationSubTab === 'archived' || estimationSubTab === 'deleted') && (
                                    <>
                                      <button
                                        type="button"
                                        onClick={() => handleRestoreEstimation(est.id)}
                                        disabled={archivingEstimationId === est.id}
                                        className="px-3 py-1 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                                        title="Wiederherstellen"
                                      >
                                        {archivingEstimationId === est.id ? '…' : 'Wiederherstellen'}
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleHardDeleteEstimationById(est.id)}
                                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-bold transition-colors"
                                        title="Endgültig löschen"
                                      >
                                        Endgültig löschen
                                      </button>
                                    </>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* Provision Tab */}
            {activeTab === 'provision' && (() => {
              const acceptedEstimations = estimations.filter(
                (e) => e.verkaufsstatus === 'Accepted' && e.status !== 'deleted'
              );
              const distinctMonths = [...new Set(acceptedEstimations.map((e) => e.created_at.slice(0, 7)))]
                .sort()
                .reverse();
              const filteredProvision =
                provisionMonthFilter === 'all'
                  ? acceptedEstimations
                  : acceptedEstimations.filter((e) => e.created_at.startsWith(provisionMonthFilter));
              const formatMonth = (ym: string) =>
                new Date(ym + '-01').toLocaleDateString('de-DE', { year: 'numeric', month: 'long' });
              return (
                <>
                  {/* Provision analytics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-semibold text-slate-600">Angenommen Fahrzeuge</div>
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-3xl font-black text-brand-dark">{provisionStats.acceptedTotal}</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-semibold text-slate-600">Gesamt Provision</div>
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-black text-brand-dark">{formatPrice(provisionStats.totalProvision)}</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-semibold text-slate-600">Offene Provision</div>
                        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-black text-brand-orange">{formatPrice(provisionStats.openProvision)}</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-semibold text-slate-600">Bezahlte Provision</div>
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-black text-green-700">{formatPrice(provisionStats.paidProvision)}</div>
                    </div>
                  </div>

                  {/* Month filter */}
                  <div className="flex items-center gap-3 mb-4">
                    <label className="text-sm font-semibold text-slate-600">Monat:</label>
                    <select
                      value={provisionMonthFilter}
                      onChange={(e) => setProvisionMonthFilter(e.target.value)}
                      className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none bg-white"
                    >
                      <option value="all">Alle Monate</option>
                      {distinctMonths.map((ym) => (
                        <option key={ym} value={ym}>{formatMonth(ym)}</option>
                      ))}
                    </select>
                    {provisionMonthFilter !== 'all' && (
                      <span className="text-xs text-slate-500">{filteredProvision.length} Einträge</span>
                    )}
                  </div>

                  {/* Provision table */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-slate-50 border-b border-gray-200">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Datum</th>
                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Fahrzeug</th>
                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Baujahr</th>
                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Kunde</th>
                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Provision (€)</th>
                            <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Bezahlt</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {filteredProvision.length === 0 ? (
                            <tr>
                              <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                                {provisionMonthFilter === 'all'
                                  ? 'Keine angenommenen Fahrzeuge'
                                  : 'Keine Einträge für diesen Monat'}
                              </td>
                            </tr>
                          ) : (
                            filteredProvision.map((est) => (
                              <tr key={est.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-4 py-3 text-sm text-slate-600">
                                  {new Date(est.created_at).toLocaleDateString('de-DE')}
                                </td>
                                <td className="px-4 py-3 text-sm">
                                  <div className="font-semibold text-slate-800">{est.brand} {est.model}</div>
                                  {est.variant && est.variant !== est.model && (
                                    <div className="text-slate-500 text-xs">{est.variant}</div>
                                  )}
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-700">{est.year}</td>
                                <td className="px-4 py-3 text-sm">
                                  <div className="font-semibold text-slate-800">{est.first_name} {est.last_name}</div>
                                  <div className="text-slate-500 text-xs">{est.email}</div>
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-1">
                                    <input
                                      type="text"
                                      inputMode="decimal"
                                      value={
                                        provisionDraft[est.id] !== undefined
                                          ? provisionDraft[est.id]
                                          : est.provision_euro != null
                                          ? String(est.provision_euro)
                                          : ''
                                      }
                                      onChange={(e) => {
                                        const v = e.target.value;
                                        if (v === '' || /^\d*[,.]?\d*$/.test(v)) {
                                          setProvisionDraft((prev) => ({ ...prev, [est.id]: v }));
                                        }
                                      }}
                                      onBlur={(e) => {
                                        const v = e.target.value.trim().replace(',', '.');
                                        setProvisionDraft((prev) => {
                                          const next = { ...prev };
                                          delete next[est.id];
                                          return next;
                                        });
                                        const num = v === '' ? null : parseFloat(v);
                                        if (v !== '' && (isNaN(num!) || num! < 0)) return;
                                        const current = est.provision_euro;
                                        if (v === '' && current === null) return;
                                        if (num !== null && current !== null && Math.abs(num - current) < 0.01) return;
                                        handleProvisionAmountChange(est.id, v === '' ? '' : String(num));
                                      }}
                                      onFocus={() =>
                                        setProvisionDraft((prev) => ({
                                          ...prev,
                                          [est.id]: est.provision_euro != null ? String(est.provision_euro) : '',
                                        }))
                                      }
                                      disabled={updatingProvisionId === est.id}
                                      placeholder="—"
                                      className="w-24 px-2 py-1 text-sm rounded border border-gray-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none disabled:opacity-50"
                                    />
                                    {updatingProvisionId === est.id && (
                                      <span className="inline-block w-3 h-3 border-2 border-brand-orange border-t-transparent rounded-full animate-spin" />
                                    )}
                                  </div>
                                </td>
                                <td className="px-4 py-3">
                                  <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={est.commission_paid ?? false}
                                      onChange={(e) => handleProvisionPaidChange(est.id, e.target.checked)}
                                      disabled={updatingProvisionId === est.id}
                                      className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange"
                                    />
                                    <span className="text-xs font-medium text-slate-600">
                                      {est.commission_paid ? 'Ja' : 'Nein'}
                                    </span>
                                  </label>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              );
            })()}

            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <>
                {appointmentListTab === 'active' && (
                  <FilterBar filters={filters} onFiltersChange={setFilters} mode="appointments" />
                )}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-gray-200">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Erstellt</th>
                          <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Termin</th>
                          <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Übergabe</th>
                          <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Bewertung</th>
                          <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase">Aktion</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {filteredAppointments.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                              {appointmentListTab === 'active' ? 'Keine Termine gefunden' : appointmentListTab === 'archived' ? 'Keine archivierten Termine' : 'Keine gelöschten Termine'}
                            </td>
                          </tr>
                        ) : (
                          filteredAppointments.map((appt) => (
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
                              <td className="px-4 py-3 text-sm">
                                {(() => {
                                  const linked = estimations.find((e) => e.id === appt.estimation_id);
                                  return linked ? (
                                    <div>
                                      <div className="font-semibold text-slate-800">{linked.first_name} {linked.last_name}</div>
                                      <div className="text-slate-500 text-xs">{linked.brand} {linked.model} ({linked.year})</div>
                                      <div className="text-slate-400 text-xs font-mono" title={appt.estimation_id}>{appt.estimation_id.slice(0, 8)}…</div>
                                    </div>
                                  ) : (
                                    <span className="text-slate-400 font-mono text-xs" title={appt.estimation_id}>{appt.estimation_id.slice(0, 8)}…</span>
                                  );
                                })()}
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-2 flex-wrap">
                                  {(() => {
                                    const linked = estimations.find((e) => e.id === appt.estimation_id);
                                    return linked ? (
                                      <button
                                        type="button"
                                        onClick={() => handleViewDetails(linked)}
                                        className="px-3 py-1 bg-brand-orange hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition-colors"
                                      >
                                        Details
                                      </button>
                                    ) : null;
                                  })()}
                                  {appointmentListTab === 'active' && (
                                    <>
                                      <button
                                        type="button"
                                        onClick={() => handleArchiveAppointment(appt.id)}
                                        disabled={deletingAppointmentId === appt.id}
                                        className="px-3 py-1 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                                        title="Archivieren"
                                      >
                                        {deletingAppointmentId === appt.id ? '…' : 'Archiv'}
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleMoveAppointmentToDeleted(appt.id)}
                                        disabled={deletingAppointmentId === appt.id}
                                        className="px-3 py-1 bg-slate-500 hover:bg-slate-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                                        title="In Gelöscht verschieben"
                                      >
                                        {deletingAppointmentId === appt.id ? '…' : 'Löschen'}
                                      </button>
                                    </>
                                  )}
                                  {(appointmentListTab === 'archived' || appointmentListTab === 'deleted') && (
                                    <>
                                      <button
                                        type="button"
                                        onClick={() => handleRestoreAppointment(appt.id, appointmentListTab === 'archived')}
                                        disabled={deletingAppointmentId === appt.id}
                                        className="px-3 py-1 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                                        title="Wiederherstellen"
                                      >
                                        {deletingAppointmentId === appt.id ? '…' : 'Wiederherstellen'}
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleDeleteAppointment(appt.id)}
                                        disabled={deletingAppointmentId === appt.id}
                                        className="px-3 py-1 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                                        title="Endgültig löschen"
                                      >
                                        {deletingAppointmentId === appt.id ? '…' : 'Endgültig löschen'}
                                      </button>
                                    </>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
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
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadPDF}
                  className="px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
                  title="PDF herunterladen"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  PDF
                </button>
                <button
                  onClick={handleDownloadDealerPDF}
                  className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
                  title="PDF ohne Kundendaten herunterladen"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  PDF Händler
                </button>
                <button
                  onClick={() => setShowEditModal(true)}
                  className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors"
                  title="Bearbeiten"
                >
                  ✏️ Bearbeiten
                </button>
                <button
                  onClick={() => setShowDeleteDialog(true)}
                  className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-semibold transition-colors"
                  title="Löschen"
                >
                  🗑️ Löschen
                </button>
                <button
                  onClick={handleCloseDetails}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
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
                  {selectedEstimation.desired_price && (
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Wunschpreis</div>
                      <div className="font-semibold text-brand-orange">{selectedEstimation.desired_price} €</div>
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
                    <div className="font-semibold">{selectedEstimation.variant || 'N/A'}</div>
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
                  {selectedEstimation.price_explanation && (
                    <div className="text-sm text-slate-700 leading-relaxed">{selectedEstimation.price_explanation}</div>
                  )}
                </div>
              </div>

              {/* Commission Info (if sold) */}
              {selectedEstimation.status === 'sold' && (
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-3">Provision</h3>
                  <div className="grid grid-cols-2 gap-4 bg-green-50 border-2 border-green-200 p-4 rounded-xl">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Endgültiger Verkaufspreis</div>
                      <div className="font-bold text-green-800">{formatPrice(selectedEstimation.final_sale_price)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Provision</div>
                      <div className="font-bold text-green-800">
                        {selectedEstimation.commission_percentage}% ({formatPrice(selectedEstimation.commission_amount)})
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-xs text-slate-500 mb-1">Status</div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                        selectedEstimation.commission_paid
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {selectedEstimation.commission_paid ? '✅ Bezahlt' : '⏳ Ausstehend'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Photos */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-brand-dark">Fotos</h3>
                  <button
                    onClick={() => setShowPhotoUploadModal(true)}
                    className="px-3 py-1.5 bg-brand-orange hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Fotos hinzufügen
                  </button>
                </div>
                {loadingPhotos ? (
                  <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-brand-orange border-t-transparent"></div>
                    <p className="mt-2 text-slate-600 text-sm">Fotos werden geladen...</p>
                  </div>
                ) : photoUrls.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {photoUrls.map((photo, idx) => (
                      <div
                        key={photo.id}
                        className="relative group aspect-video bg-slate-100 rounded-xl overflow-hidden"
                      >
                        <a
                          href={photo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full hover:ring-2 hover:ring-brand-orange transition-all rounded-xl"
                        >
                          <img
                            src={photo.url}
                            alt={photo.filename}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </a>
                        <button
                          type="button"
                          onClick={() => handleRemovePhoto(photo.id, photo.storagePath)}
                          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-lg opacity-90 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none"
                          title="Foto entfernen"
                          aria-label="Foto entfernen"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-500">Keine Fotos vorhanden</div>
                )}
              </div>

              {/* Verknüpfte Termine */}
              {(() => {
                const linkedAppointments = appointments.filter((a) => a.estimation_id === selectedEstimation.id);
                if (linkedAppointments.length === 0) return null;
                return (
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-bold text-brand-dark mb-3">Verknüpfte Termine</h3>
                    <div className="space-y-2">
                      {linkedAppointments.map((appt) => (
                        <div key={appt.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl text-sm">
                          <div>
                            <div className="font-semibold text-slate-800">
                              {new Date(appt.preferred_date).toLocaleDateString('de-DE')} • {appt.preferred_time} Uhr
                            </div>
                            <div className="text-slate-500 text-xs">
                              {appt.delivery_type === 'bring_car'
                                ? `Filial-Abgabe${appt.bring_location ? ` – ${appt.bring_location}` : ''}`
                                : 'Haus-Abholung'}
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${appt.archived_at ? 'bg-amber-100 text-amber-800' : appt.deleted_at ? 'bg-slate-200 text-slate-600' : 'bg-purple-100 text-purple-800'}`}>
                            {appt.archived_at ? 'Archiviert' : appt.deleted_at ? 'Gelöscht' : 'Aktiv'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Metadata */}
              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Bewertungs-ID</div>
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

      {/* Modals */}
      {showEditModal && selectedEstimation && (
        <EditEstimationModal
          estimation={selectedEstimation}
          onSave={handleSaveEstimation}
          onClose={() => setShowEditModal(false)}
        />
      )}

      {showDeleteDialog && selectedEstimation && (
        <DeleteConfirmDialog
          estimationId={selectedEstimation.id}
          vehicleInfo={`${selectedEstimation.brand} ${selectedEstimation.model} (${selectedEstimation.year})`}
          photoCount={photoUrls.length}
          appointmentCount={appointments.filter((a) => a.estimation_id === selectedEstimation.id).length}
          onConfirm={handleDeleteEstimation}
          onCancel={() => setShowDeleteDialog(false)}
        />
      )}

      {showPhotoUploadModal && selectedEstimation && (
        <PhotoUploadModal
          estimationId={selectedEstimation.id}
          onComplete={handlePhotoUploadComplete}
          onClose={() => setShowPhotoUploadModal(false)}
        />
      )}

      {appointmentModalForEstimation && (() => {
        const appts = appointments.filter((a) => a.estimation_id === appointmentModalForEstimation);
        const estimation = estimations.find((e) => e.id === appointmentModalForEstimation);
        const hasContent = estimation || appts.length > 0;
        return (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setAppointmentModalForEstimation(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-black text-brand-dark">Termin-Details</h2>
                <button
                  type="button"
                  onClick={() => setAppointmentModalForEstimation(null)}
                  className="text-slate-400 hover:text-slate-700 text-xl font-bold leading-none"
                >
                  ✕
                </button>
              </div>
              {!hasContent ? (
                <p className="text-slate-500 text-sm">Kein Termin gefunden.</p>
              ) : (
                <div className="space-y-4 text-sm">
                  {estimation && (
                    <>
                      <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Kundendaten</h3>
                        <div className="space-y-1">
                          <div><span className="font-bold">Name:</span> {estimation.first_name} {estimation.last_name}</div>
                          <div><span className="font-bold">E-Mail:</span> {estimation.email}</div>
                          <div><span className="font-bold">Telefon:</span> {estimation.phone || '–'}</div>
                          {estimation.postal_code && (
                            <div><span className="font-bold">PLZ:</span> {estimation.postal_code}</div>
                          )}
                        </div>
                      </div>
                      <div className="border-t pt-3 mt-3">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Fahrzeug</h3>
                        <div className="space-y-1">
                          <div><span className="font-bold">Marke:</span> {estimation.brand}</div>
                          <div><span className="font-bold">Modell:</span> {estimation.model}</div>
                          {estimation.variant && estimation.variant !== estimation.model && (
                            <div><span className="font-bold">Variante:</span> {estimation.variant}</div>
                          )}
                          <div><span className="font-bold">Baujahr:</span> {estimation.year}</div>
                          <div><span className="font-bold">Laufleistung:</span> {estimation.mileage} km</div>
                          <div><span className="font-bold">Kraftstoff:</span> {estimation.fuel_type || '–'}</div>
                          <div><span className="font-bold">Getriebe:</span> {estimation.transmission || '–'}</div>
                          <div><span className="font-bold">Leistung:</span> {estimation.power || '–'}</div>
                          {estimation.body_type && (
                            <div><span className="font-bold">Karosserie:</span> {estimation.body_type}</div>
                          )}
                          {estimation.condition && (
                            <div><span className="font-bold">Zustand:</span> {estimation.condition}</div>
                          )}
                          {estimation.color && (
                            <div><span className="font-bold">Farbe:</span> {estimation.color}</div>
                          )}
                          <div>
                            <span className="font-bold">Geschätzter Preis:</span>{' '}
                            {estimation.estimated_price != null
                              ? formatPrice(estimation.estimated_price)
                              : estimation.price_min != null && estimation.price_max != null
                                ? `${formatPrice(estimation.price_min)} – ${formatPrice(estimation.price_max)}`
                                : '–'}
                          </div>
                          {estimation.desired_price && (
                            <div>
                              <span className="font-bold">Wunschpreis:</span>{' '}
                              <span className="text-brand-orange font-semibold">{estimation.desired_price} €</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  {appts.length > 0 && (
                    <div className="border-t pt-3 mt-3">
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Termin(e)</h3>
                      <div className="space-y-3">
                        {appts.map((appt) => (
                          <div key={appt.id} className="space-y-2">
                            <div><span className="font-bold">Datum:</span> {new Date(appt.preferred_date).toLocaleDateString('de-DE')}</div>
                            <div><span className="font-bold">Uhrzeit:</span> {appt.preferred_time} Uhr</div>
                            <div>
                              <span className="font-bold">Übergabe:</span>{' '}
                              {appt.delivery_type === 'bring_car'
                                ? `Filial-Abgabe${appt.bring_location ? ` – ${appt.bring_location}` : ''}`
                                : 'Haus-Abholung'}
                            </div>
                            <div>
                              <span className="font-bold">Status:</span>{' '}
                              {appt.archived_at ? 'Archiviert' : appt.deleted_at ? 'Gelöscht' : 'Aktiv'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default AdminDashboard;
