'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import EditEstimationModal from '@/components/admin/EditEstimationModal';
import DeleteConfirmDialog from '@/components/admin/DeleteConfirmDialog';
import PhotoUploadModal from '@/components/admin/PhotoUploadModal';
import FilterBar, { FilterState } from '@/components/admin/FilterBar';
import { generateEstimationPDF } from '@/components/admin/PDFGenerator';
import NotizModal from '@/components/admin/NotizModal';
import CalendarTab from '@/components/admin/CalendarTab';
import EditAppointmentModal from '@/components/admin/EditAppointmentModal';

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
  provision_euro: number | null;
  commission_paid: boolean;
  rejection_reason: string | null;
  known_damages: string | null;
  deleted_at: string | null;
  assigned_to: string | null;
  call_status: string;
  follow_up: boolean;
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
  created_by_admin: boolean;
}

interface LeadNote {
  id: string;
  estimation_id: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const PAGE_SIZE = 100;

const AdminDashboardContent: React.FC = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const router = useRouter();
  const [estimations, setEstimations] = useState<Estimation[]>([]);
  /** Accurate totals from count queries (full table), not derived from the max-rows estimations fetch */
  const [estimationAggregates, setEstimationAggregates] = useState<{
    active: number;
    archived: number;
    deleted: number;
    accepted: number;
    pending: number;
    rejected: number;
    acceptedThisMonth: number;
    provisionAccepted: number;
  } | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'estimations' | 'appointments' | 'provision' | 'kalender'>(() => {
    try { return (sessionStorage.getItem('admin_activeTab') as any) ?? 'estimations'; } catch { return 'estimations'; }
  });
  const [estimationSubTab, setEstimationSubTab] = useState<'active' | 'archived' | 'deleted'>(() => {
    try { return (sessionStorage.getItem('admin_estimationSubTab') as any) ?? 'active'; } catch { return 'active'; }
  });
  const [appointmentSubTab, setAppointmentSubTab] = useState<'all' | 'pickup' | 'bodenheim' | 'ruesselsheim'>(() => {
    try { return (sessionStorage.getItem('admin_appointmentSubTab') as any) ?? 'all'; } catch { return 'all'; }
  });
  const [appointmentListTab, setAppointmentListTab] = useState<'active' | 'archived' | 'deleted'>(() => {
    try { return (sessionStorage.getItem('admin_appointmentListTab') as any) ?? 'active'; } catch { return 'active'; }
  });
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
  const [estimationPage, setEstimationPage] = useState(() => {
    try { const v = sessionStorage.getItem('admin_estimationPage'); return v ? parseInt(v, 10) : 0; } catch { return 0; }
  });
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkLoading, setBulkLoading] = useState(false);
  const [deletePasswordModal, setDeletePasswordModal] = useState<{ action: () => void; label: string } | null>(null);
  const [deletePasswordInput, setDeletePasswordInput] = useState('');
  const [deletePasswordError, setDeletePasswordError] = useState(false);
  const [notizModalForEstimation, setNotizModalForEstimation] = useState<Estimation | null>(null);
  const [estimationsWithNotes, setEstimationsWithNotes] = useState<Set<string>>(new Set());
  const [appointmentEstimations, setAppointmentEstimations] = useState<Record<string, Estimation>>({});
  const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);
  const estimationSubTabMounted = React.useRef(false);

  const ASSIGNEES = [
    'Nicht zugewiesen',
    'Akin Yasar',
    'Idris Sarwari',
    'Hamza Sarwari',
    'Bilal Sarwari',
    'Other',
  ] as const;

  const ASSIGNEE_COLORS: Record<string, string> = {
    'Nicht zugewiesen': 'bg-slate-200 text-slate-700',
    'Akin Yasar':       'bg-blue-100 text-blue-700',
    'Idris Sarwari':    'bg-green-100 text-green-700',
    'Hamza Sarwari':    'bg-purple-100 text-purple-700',
    'Bilal Sarwari':    'bg-orange-100 text-orange-700',
    'Other':            'bg-slate-100 text-slate-700',
  };

  const EMAIL_TO_WORKER: Record<string, string> = {
    'info@meinautoverkauf.de':  'Akin Yasar',
    'akin@meinautoverkauf.de':  'Akin Yasar',
    'idris@meinautoverkauf.de': 'Idris Sarwari',
    'hamza@meinautoverkauf.de': 'Hamza Sarwari',
    'bilal@meinautoverkauf.de': 'Bilal Sarwari',
  };

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

  const requireDeletePassword = (label: string, action: () => void) => {
    setDeletePasswordInput('');
    setDeletePasswordError(false);
    setDeletePasswordModal({ action, label });
  };

  const confirmDeletePassword = () => {
    if (deletePasswordInput === 'abdulqaderabeddost') {
      deletePasswordModal?.action();
      setDeletePasswordModal(null);
      setDeletePasswordInput('');
      setDeletePasswordError(false);
    } else {
      setDeletePasswordError(true);
    }
  };

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      router.replace('/admin/login');
    }
  }, [user, isAdmin, authLoading, router]);

  useEffect(() => {
    if (user && isAdmin) {
      loadData(estimationPage);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isAdmin]);

  // Reset page and selection when sub-tab changes, and reload for the new sub-tab
  useEffect(() => {
    if (!estimationSubTabMounted.current) {
      estimationSubTabMounted.current = true;
      return;
    }
    setEstimationPage(0);
    setSelectedIds(new Set());
    if (user && isAdmin) {
      loadData(0, estimationSubTab, false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estimationSubTab]);

  // Persist navigation state to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem('admin_activeTab', activeTab);
      sessionStorage.setItem('admin_estimationSubTab', estimationSubTab);
      sessionStorage.setItem('admin_appointmentListTab', appointmentListTab);
      sessionStorage.setItem('admin_appointmentSubTab', appointmentSubTab);
      sessionStorage.setItem('admin_estimationPage', String(estimationPage));
    } catch {}
  }, [activeTab, estimationSubTab, appointmentListTab, appointmentSubTab, estimationPage]);

  // Reload when filters change (server-side filtering)
  const prevFiltersRef = React.useRef(filters);
  useEffect(() => {
    if (!isAdmin || authLoading) return;
    const prev = prevFiltersRef.current;
    prevFiltersRef.current = filters;
    if (prev === filters) return;
    setEstimationPage(0);
    setSelectedIds(new Set());
    const searchChanged = prev.searchQuery !== filters.searchQuery;
    if (searchChanged) {
      const timer = setTimeout(() => loadData(0, estimationSubTab, false), 350);
      return () => clearTimeout(timer);
    }
    loadData(0, estimationSubTab, false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const hasEstimationFilters = (f: FilterState) =>
    !!(f.searchQuery?.trim() || f.dateFrom || f.dateTo ||
       (f.status && f.status.length > 0) ||
       f.assignedTo || f.callStatus || f.followUp);

  const loadData = async (
    page = 0,
    subTab: 'active' | 'archived' | 'deleted' = estimationSubTab,
    showLoading = true,
  ) => {
    if (showLoading) setLoading(true);
    try {
      const currentMonth = new Date().toISOString().slice(0, 7);
      const [yStr, mStr] = currentMonth.split('-');
      const y = Number(yStr);
      const m = Number(mStr);
      const monthStart = new Date(Date.UTC(y, m - 1, 1)).toISOString();
      const monthEnd = new Date(Date.UTC(y, m, 1)).toISOString();
      const from = page * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const headCount = { count: 'exact' as const, head: true as const };
      const estimationCount = () =>
        supabase.from('estimations').select('id', headCount);

      const filtersActive = hasEstimationFilters(filters);

      let estQuery = supabase
        .from('estimations')
        .select('*')
        .order('created_at', { ascending: false });

      // Sub-tab scope
      if (subTab === 'active') {
        if (!(filters.status && filters.status.length > 0)) {
          estQuery = estQuery.not('status', 'eq', 'archived').not('status', 'eq', 'deleted');
        }
      } else if (subTab === 'archived') {
        estQuery = estQuery.eq('status', 'archived');
      } else {
        estQuery = estQuery.eq('status', 'deleted');
      }

      if (filtersActive) {
        // Server-side filters — no pagination limit
        if (filters.status?.length) estQuery = estQuery.in('status', filters.status);
        if (filters.searchQuery?.trim()) {
          const q = filters.searchQuery.trim();
          estQuery = estQuery.or(
            `first_name.ilike.%${q}%,last_name.ilike.%${q}%,email.ilike.%${q}%,` +
            `phone.ilike.%${q}%,brand.ilike.%${q}%,model.ilike.%${q}%,variant.ilike.%${q}%,vin.ilike.%${q}%`
          );
        }
        if (filters.dateFrom) estQuery = estQuery.gte('created_at', filters.dateFrom);
        if (filters.dateTo)   estQuery = estQuery.lte('created_at', filters.dateTo + 'T23:59:59.999Z');
        if (filters.assignedTo) {
          if (filters.assignedTo === 'Nicht zugewiesen') estQuery = estQuery.is('assigned_to', null);
          else estQuery = estQuery.eq('assigned_to', filters.assignedTo);
        }
        if (filters.callStatus) estQuery = estQuery.eq('call_status', filters.callStatus);
        if (filters.followUp)   estQuery = estQuery.eq('follow_up', true);
      } else {
        estQuery = estQuery.range(from, to);
      }

      const [
        estResponse,
        apptResponse,
        countActive,
        countArchived,
        countDeleted,
        countAccepted,
        countPending,
        countRejected,
        countAcceptedThisMonth,
        countProvisionAccepted,
        notesResponse,
      ] = await Promise.all([
        estQuery,
        supabase
          .from('appointments')
          .select('*')
          .order('created_at', { ascending: false }),
        estimationCount().not('status', 'eq', 'archived').not('status', 'eq', 'deleted'),
        estimationCount().eq('status', 'archived'),
        estimationCount().eq('status', 'deleted'),
        estimationCount()
          .not('status', 'eq', 'archived')
          .not('status', 'eq', 'deleted')
          .eq('verkaufsstatus', 'Accepted'),
        estimationCount()
          .not('status', 'eq', 'archived')
          .not('status', 'eq', 'deleted')
          .eq('verkaufsstatus', 'Pending'),
        estimationCount()
          .not('status', 'eq', 'archived')
          .not('status', 'eq', 'deleted')
          .eq('verkaufsstatus', 'Rejected'),
        estimationCount()
          .not('status', 'eq', 'archived')
          .not('status', 'eq', 'deleted')
          .eq('verkaufsstatus', 'Accepted')
          .gte('created_at', monthStart)
          .lt('created_at', monthEnd),
        estimationCount().eq('verkaufsstatus', 'Accepted').not('status', 'eq', 'deleted'),
        supabase.from('lead_notes').select('estimation_id'),
      ]);

      if (estResponse.data) setEstimations(estResponse.data);
      if (apptResponse.data) {
        setAppointments(apptResponse.data);
        const ids = [...new Set(apptResponse.data.map((a: Appointment) => a.estimation_id))];
        if (ids.length > 0) {
          const { data: linkedData } = await supabase
            .from('estimations')
            .select('*')
            .in('id', ids);
          if (linkedData) {
            const map: Record<string, Estimation> = {};
            (linkedData as Estimation[]).forEach((e) => { map[e.id] = e; });
            setAppointmentEstimations(map);
          }
        }
      }
      if (notesResponse.data) {
        setEstimationsWithNotes(
          new Set((notesResponse.data as { estimation_id: string }[]).map((n) => n.estimation_id))
        );
      }

      const countResponses = [
        countActive,
        countArchived,
        countDeleted,
        countAccepted,
        countPending,
        countRejected,
        countAcceptedThisMonth,
        countProvisionAccepted,
      ];
      countResponses.forEach((r) => { if (r.error) console.error('Count query error:', r.error); });
      setEstimationAggregates({
        active: countActive.count ?? 0,
        archived: countArchived.count ?? 0,
        deleted: countDeleted.count ?? 0,
        accepted: countAccepted.count ?? 0,
        pending: countPending.count ?? 0,
        rejected: countRejected.count ?? 0,
        acceptedThisMonth: countAcceptedThisMonth.count ?? 0,
        provisionAccepted: countProvisionAccepted.count ?? 0,
      });
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
    router.replace('/admin/login');
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

    // Update local state
    setEstimations((prev) => prev.map((e) => e.id === selectedEstimation.id ? { ...e, ...updated } : e));
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

    setEstimations((prev) => prev.filter((e) => e.id !== selectedEstimation.id));
    setEstimationAggregates((prev) => prev ? { ...prev, active: Math.max(0, prev.active - 1) } : prev);
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

    setEstimations((prev) => prev.map((e) => e.id === selectedEstimation.id ? { ...e, ...updateData } : e));
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

  const handleCallStatusChange = async (estimationId: string, newStatus: string) => {
    if (!estimationId) return;
    setEstimations((prev) =>
      prev.map((e) => (e.id === estimationId ? { ...e, call_status: newStatus } : e))
    );
    const { error } = await supabase
      .from('estimations')
      .update({ call_status: newStatus })
      .eq('id', estimationId);
    if (error) {
      showError(error.message, 'Anrufstatus');
      return;
    }
    if (selectedEstimation?.id === estimationId) {
      setSelectedEstimation({ ...selectedEstimation, call_status: newStatus });
    }
  };

  const handleFollowUpToggle = async (estimationId: string, currentValue: boolean) => {
    const newValue = !currentValue;
    setEstimations((prev) =>
      prev.map((e) => e.id === estimationId ? { ...e, follow_up: newValue } : e)
    );
    const { error } = await supabase.from('estimations').update({ follow_up: newValue }).eq('id', estimationId);
    if (error) {
      setEstimations((prev) =>
        prev.map((e) => e.id === estimationId ? { ...e, follow_up: currentValue } : e)
      );
      showError(error.message, 'Follow Up');
    }
  };

  const handleAssignedToChange = async (estimationId: string, newAssignee: string) => {
    if (!estimationId) return;
    const value = newAssignee === 'Nicht zugewiesen' ? null : newAssignee;
    setEstimations((prev) =>
      prev.map((e) => (e.id === estimationId ? { ...e, assigned_to: value } : e))
    );
    const { error } = await supabase
      .from('estimations')
      .update({ assigned_to: value })
      .eq('id', estimationId);
    if (error) {
      showError(error.message, 'Zugewiesen an');
    }
    if (selectedEstimation?.id === estimationId) {
      setSelectedEstimation({ ...selectedEstimation, assigned_to: value });
    }
  };

  const handleClaimLead = async (estimationId: string) => {
    if (!estimationId || !user?.email) return;
    const workerName = EMAIL_TO_WORKER[user.email] ?? user.email;
    const { data, error } = await supabase
      .from('estimations')
      .update({ assigned_to: workerName, call_status: 'Zugewiesen' })
      .eq('id', estimationId)
      .is('assigned_to', null)
      .select('id, assigned_to, call_status');
    if (error) {
      showError(error.message, 'Lead übernehmen');
      return;
    }
    const row = Array.isArray(data) ? data[0] : data;
    if (!row) {
      setNotification({ type: 'error', message: 'Lead wurde bereits von jemand anderem übernommen.' });
      setTimeout(() => setNotification(null), 4000);
      return;
    }
    setEstimations((prev) =>
      prev.map((e) =>
        e.id === estimationId
          ? { ...e, assigned_to: row.assigned_to, call_status: row.call_status }
          : e
      )
    );
    if (selectedEstimation?.id === estimationId) {
      setSelectedEstimation({ ...selectedEstimation, assigned_to: row.assigned_to, call_status: row.call_status });
    }
  };

  const handleMoveEstimationToDeleted = (estimationId: string) => {
    if (!estimationId) return;
    requireDeletePassword('In Gelöscht verschieben', async () => {
      setArchivingEstimationId(estimationId);
      try {
        const { error } = await supabase
          .from('estimations')
          .update({ status: 'deleted' })
          .eq('id', estimationId);
        if (error) { showError(error.message, 'Löschen'); return; }
        setEstimations((prev) => prev.filter((e) => e.id !== estimationId));
        setEstimationAggregates((prev) => prev ? { ...prev, active: Math.max(0, prev.active - 1), deleted: prev.deleted + 1 } : prev);
        if (selectedEstimation?.id === estimationId) handleCloseDetails();
        showSuccess('Bewertung in Gelöscht verschoben. Nach 30 Tagen wird sie endgültig entfernt.');
      } finally {
        setArchivingEstimationId(null);
      }
    });
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
      setEstimations((prev) => prev.filter((e) => e.id !== estimationId));
      setEstimationAggregates((prev) => prev ? { ...prev, active: Math.max(0, prev.active - 1), archived: prev.archived + 1 } : prev);
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
      setEstimations((prev) => prev.filter((e) => e.id !== estimationId));
      setEstimationAggregates((prev) => {
        if (!prev) return prev;
        const fromArchived = estimationSubTab === 'archived';
        return { ...prev, active: prev.active + 1, archived: fromArchived ? Math.max(0, prev.archived - 1) : prev.archived, deleted: !fromArchived ? Math.max(0, prev.deleted - 1) : prev.deleted };
      });
      showSuccess('Bewertung wiederhergestellt.');
    } finally {
      setArchivingEstimationId(null);
    }
  };

  const handleHardDeleteEstimationById = (estimationId: string) => {
    if (!estimationId) return;
    requireDeletePassword('Endgültig löschen', async () => {
      try {
        const { error } = await supabase.from('estimations').delete().eq('id', estimationId);
        if (error) { showError(error.message, 'Löschen'); return; }
        setEstimations((prev) => prev.filter((e) => e.id !== estimationId));
        setEstimationAggregates((prev) => {
          if (!prev) return prev;
          return estimationSubTab === 'deleted' ? { ...prev, deleted: Math.max(0, prev.deleted - 1) } : { ...prev, active: Math.max(0, prev.active - 1) };
        });
        if (selectedEstimation?.id === estimationId) handleCloseDetails();
        showSuccess('Bewertung endgültig gelöscht.');
      } catch (e) {
        console.error(e);
        showError('Beim Löschen ist ein Fehler aufgetreten.');
      }
    });
  };

  const handleBulkMoveToDeleted = () => {
    if (selectedIds.size === 0) return;
    const count = selectedIds.size;
    requireDeletePassword(`${count} Bewertung(en) in Gelöscht verschieben`, async () => {
      setBulkLoading(true);
      try {
        const { error } = await supabase
          .from('estimations')
          .update({ status: 'deleted' })
          .in('id', [...selectedIds]);
        if (error) { showError(error.message, 'Sammel-Löschen'); return; }
        const ids = new Set(selectedIds);
        setEstimations((prev) => prev.filter((e) => !ids.has(e.id)));
        setEstimationAggregates((prev) => prev ? { ...prev, active: Math.max(0, prev.active - ids.size), deleted: prev.deleted + ids.size } : prev);
        setSelectedIds(new Set());
        showSuccess(`${count} Bewertung(en) in Gelöscht verschoben.`);
      } finally {
        setBulkLoading(false);
      }
    });
  };

  const handleBulkHardDelete = () => {
    if (selectedIds.size === 0) return;
    const count = selectedIds.size;
    requireDeletePassword(`${count} Bewertung(en) endgültig löschen`, async () => {
      setBulkLoading(true);
      try {
        const { error } = await supabase
          .from('estimations')
          .delete()
          .in('id', [...selectedIds]);
        if (error) { showError(error.message, 'Sammel-Löschen'); return; }
        const ids = new Set(selectedIds);
        setEstimations((prev) => prev.filter((e) => !ids.has(e.id)));
        setEstimationAggregates((prev) => {
          if (!prev) return prev;
          return estimationSubTab === 'deleted' ? { ...prev, deleted: Math.max(0, prev.deleted - ids.size) } : { ...prev, active: Math.max(0, prev.active - ids.size) };
        });
        setSelectedIds(new Set());
        showSuccess(`${count} Bewertung(en) endgültig gelöscht.`);
      } finally {
        setBulkLoading(false);
      }
    });
  };

  const handleBulkArchive = async () => {
    if (selectedIds.size === 0) return;
    const count = selectedIds.size;
    setBulkLoading(true);
    try {
      const { error } = await supabase
        .from('estimations')
        .update({ status: 'archived' })
        .in('id', [...selectedIds]);
      if (error) { showError(error.message, 'Sammel-Archivieren'); return; }
      const ids = new Set(selectedIds);
      setEstimations((prev) => prev.filter((e) => !ids.has(e.id)));
      setEstimationAggregates((prev) => prev ? { ...prev, active: Math.max(0, prev.active - ids.size), archived: prev.archived + ids.size } : prev);
      setSelectedIds(new Set());
      showSuccess(`${count} Bewertung(en) archiviert.`);
    } finally {
      setBulkLoading(false);
    }
  };

  const handleBulkRestore = async () => {
    if (selectedIds.size === 0) return;
    const count = selectedIds.size;
    setBulkLoading(true);
    try {
      const { error } = await supabase
        .from('estimations')
        .update({ status: 'estimated' })
        .in('id', [...selectedIds]);
      if (error) { showError(error.message, 'Sammel-Wiederherstellen'); return; }
      const ids = new Set(selectedIds);
      setEstimations((prev) => prev.filter((e) => !ids.has(e.id)));
      setEstimationAggregates((prev) => {
        if (!prev) return prev;
        const fromArchived = estimationSubTab === 'archived';
        return { ...prev, active: prev.active + ids.size, archived: fromArchived ? Math.max(0, prev.archived - ids.size) : prev.archived, deleted: !fromArchived ? Math.max(0, prev.deleted - ids.size) : prev.deleted };
      });
      setSelectedIds(new Set());
      showSuccess(`${count} Bewertung(en) wiederhergestellt.`);
    } finally {
      setBulkLoading(false);
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
      setAppointments((prev) => prev.map((a) => a.id === appointmentId ? { ...a, archived_at: new Date().toISOString() } : a));
      showSuccess('Termin archiviert.');
    } finally { setDeletingAppointmentId(null); }
  };

  const handleMoveAppointmentToDeleted = async (appointmentId: string) => {
    if (!appointmentId) return;
    setDeletingAppointmentId(appointmentId);
    try {
      const { error } = await supabase.from('appointments').update({ deleted_at: new Date().toISOString() }).eq('id', appointmentId);
      if (error) { showError(error.message, 'Löschen'); return; }
      setAppointments((prev) => prev.map((a) => a.id === appointmentId ? { ...a, deleted_at: new Date().toISOString() } : a));
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
      setAppointments((prev) => prev.map((a) => a.id === appointmentId ? { ...a, ...update } : a));
      showSuccess('Termin wiederhergestellt.');
    } finally { setDeletingAppointmentId(null); }
  };

  const handleUpdateAppointment = (updated: Appointment) => {
    setAppointments((prev) => prev.map((a) => (a.id === updated.id ? updated : a)));
  };

  const handleAppointmentDeletedFromCalendar = (deletedId: string) => {
    setAppointments((prev) =>
      prev.map((a) => a.id === deletedId ? { ...a, deleted_at: new Date().toISOString() } : a)
    );
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
      setAppointments((prev) => prev.filter((a) => a.id !== appointmentId));
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

  // All filtering is now server-side in loadData. This alias keeps all JSX references intact.
  const filteredEstimations = estimations;

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

  const estimationListTabCounts = useMemo(() => {
    if (estimationAggregates) {
      return {
        active: estimationAggregates.active,
        archived: estimationAggregates.archived,
        deleted: estimationAggregates.deleted,
        provisionAccepted: estimationAggregates.provisionAccepted,
      };
    }
    return {
      active: estimations.filter((e) => e.status !== 'archived' && e.status !== 'deleted').length,
      archived: estimations.filter((e) => e.status === 'archived').length,
      deleted: estimations.filter((e) => e.status === 'deleted').length,
      provisionAccepted: estimations.filter((e) => e.verkaufsstatus === 'Accepted' && e.status !== 'deleted').length,
    };
  }, [estimations, estimationAggregates]);

  // Dashboard stats (active only: not archived, not deleted)
  const stats = useMemo(() => {
    if (estimationAggregates) {
      return {
        totalEstimations: estimationAggregates.active,
        acceptedCount: estimationAggregates.accepted,
        pendingCount: estimationAggregates.pending,
        rejectedCount: estimationAggregates.rejected,
        acceptedThisMonth: estimationAggregates.acceptedThisMonth,
      };
    }
    const activeEstimations = estimations.filter((e) => e.status !== 'archived' && e.status !== 'deleted');
    const totalEstimations = activeEstimations.length;
    const acceptedCount = activeEstimations.filter((e) => e.verkaufsstatus === 'Accepted').length;
    const pendingCount = activeEstimations.filter((e) => e.verkaufsstatus === 'Pending').length;
    const rejectedCount = activeEstimations.filter((e) => e.verkaufsstatus === 'Rejected').length;
    const currentMonth = new Date().toISOString().slice(0, 7);
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
  }, [estimations, estimationAggregates]);

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
      {/* Delete password modal */}
      {deletePasswordModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v2m0-2h2m-2 0H10m2-5a7 7 0 100-14 7 7 0 000 14z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base">Passwort erforderlich</h3>
                <p className="text-xs text-slate-500 mt-0.5">{deletePasswordModal.label}</p>
              </div>
            </div>
            <input
              type="password"
              autoFocus
              value={deletePasswordInput}
              onChange={(e) => { setDeletePasswordInput(e.target.value); setDeletePasswordError(false); }}
              onKeyDown={(e) => { if (e.key === 'Enter') confirmDeletePassword(); if (e.key === 'Escape') setDeletePasswordModal(null); }}
              placeholder="Passwort eingeben"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                deletePasswordError ? 'border-red-400 bg-red-50 focus:border-red-500' : 'border-gray-300 focus:border-brand-orange'
              }`}
            />
            {deletePasswordError && (
              <p className="text-xs text-red-600 mt-1.5">Falsches Passwort. Bitte erneut versuchen.</p>
            )}
            <div className="flex gap-2 mt-4">
              <button
                type="button"
                onClick={() => setDeletePasswordModal(null)}
                className="flex-1 px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={confirmDeletePassword}
                className="flex-1 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold transition-colors"
              >
                Bestätigen
              </button>
            </div>
          </div>
        </div>
      )}

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
            <Link href="/">
              <img
                src="/logo.webp"
                srcSet="/logo-295.webp 295w, /logo.webp 700w"
                sizes="220px"
                alt="MeinAutoVerkauf.de"
                className="h-16 w-auto"
                width={1260}
                height={410}
                loading="eager"
                decoding="async"
              />
              <span className="sr-only">Zur Startseite</span>
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
            Bewertungen ({estimationListTabCounts.active})
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
            onClick={() => setActiveTab('kalender')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'kalender'
                ? 'bg-brand-orange text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            Kalender
          </button>
        </div>

        {/* Bewertungen sub-tabs: Aktiv | Archiv | Gelöscht */}
        {activeTab === 'estimations' && (
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setEstimationSubTab('active')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm ${estimationSubTab === 'active' ? 'bg-brand-orange text-white' : 'bg-white text-slate-600 border border-gray-200'}`}
            >
              Aktiv ({estimationListTabCounts.active})
            </button>
            <button
              onClick={() => setEstimationSubTab('archived')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm ${estimationSubTab === 'archived' ? 'bg-brand-orange text-white' : 'bg-white text-slate-600 border border-gray-200'}`}
            >
              Archiv ({estimationListTabCounts.archived})
            </button>
            <button
              onClick={() => setEstimationSubTab('deleted')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm ${estimationSubTab === 'deleted' ? 'bg-brand-orange text-white' : 'bg-white text-slate-600 border border-gray-200'}`}
            >
              Gelöscht ({estimationListTabCounts.deleted})
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

                {/* Bulk action bar */}
                {selectedIds.size > 0 && (
                  <div className="mb-3 flex items-center gap-3 flex-wrap bg-slate-800 text-white rounded-xl px-4 py-3">
                    <span className="font-semibold text-sm">{selectedIds.size} ausgewählt</span>
                    {estimationSubTab === 'active' && (
                      <button
                        type="button"
                        onClick={handleBulkArchive}
                        disabled={bulkLoading}
                        className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        {bulkLoading ? '…' : 'In Archiv verschieben'}
                      </button>
                    )}
                    {estimationSubTab !== 'deleted' && (
                      <button
                        type="button"
                        onClick={handleBulkMoveToDeleted}
                        disabled={bulkLoading}
                        className="px-3 py-1.5 bg-slate-500 hover:bg-slate-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        {bulkLoading ? '…' : 'In Gelöscht verschieben'}
                      </button>
                    )}
                    {estimationSubTab !== 'active' && (
                      <button
                        type="button"
                        onClick={handleBulkRestore}
                        disabled={bulkLoading}
                        className="px-3 py-1.5 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        {bulkLoading ? '…' : 'Wiederherstellen'}
                      </button>
                    )}
                    {estimationSubTab === 'deleted' && (
                      <button
                        type="button"
                        onClick={handleBulkHardDelete}
                        disabled={bulkLoading}
                        className="px-3 py-1.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        {bulkLoading ? '…' : 'Endgültig löschen'}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedIds(new Set())}
                      className="ml-auto px-3 py-1.5 bg-slate-600 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      Auswahl aufheben
                    </button>
                  </div>
                )}

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-gray-200">
                        <tr>
                          <th className="px-3 py-3 w-10">
                            <input
                              type="checkbox"
                              className="w-4 h-4 rounded border-gray-400 cursor-pointer accent-orange-500"
                              checked={filteredEstimations.length > 0 && filteredEstimations.every((e) => selectedIds.has(e.id))}
                              ref={(el) => {
                                if (el) {
                                  el.indeterminate = filteredEstimations.some((e) => selectedIds.has(e.id)) && !filteredEstimations.every((e) => selectedIds.has(e.id));
                                }
                              }}
                              onChange={(ev) => {
                                if (ev.target.checked) {
                                  setSelectedIds((prev) => new Set([...prev, ...filteredEstimations.map((e) => e.id)]));
                                } else {
                                  setSelectedIds((prev) => {
                                    const next = new Set(prev);
                                    filteredEstimations.forEach((e) => next.delete(e.id));
                                    return next;
                                  });
                                }
                              }}
                              title="Alle auf dieser Seite auswählen"
                            />
                          </th>
                          <th className="px-2 py-3 text-left text-xs font-bold text-slate-700 uppercase w-20">Datum</th>
                          <th className="px-2 py-3 text-left text-xs font-bold text-slate-700 uppercase w-24">Status</th>
                          <th className="px-2 py-3 text-left text-xs font-bold text-slate-700 uppercase w-36">Kunde</th>
                          <th className="px-2 py-3 text-left text-xs font-bold text-slate-700 uppercase w-14">PLZ</th>
                          <th className="px-2 py-3 text-left text-xs font-bold text-slate-700 uppercase w-36">Fahrzeug</th>
                          <th className="px-2 py-3 text-left text-xs font-bold text-slate-700 uppercase w-24">Preis</th>
                          <th className="px-2 py-3 text-left text-xs font-bold text-slate-700 uppercase w-24">Wunschpreis</th>
                          <th className="px-2 py-3 text-left text-xs font-bold text-slate-700 uppercase w-32">Zugewiesen an</th>
                          {estimationSubTab === 'active' && (
                            <>
                              <th className="px-2 py-3 text-left text-xs font-bold text-slate-700 uppercase w-28">Anrufstatus</th>
                            </>
                          )}
                          <th className="px-2 py-3 text-left text-xs font-bold text-slate-700 uppercase w-16">Aktion</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {filteredEstimations.length === 0 ? (
                          <tr>
                            <td colSpan={estimationSubTab === 'active' ? 11 : 10} className="px-4 py-8 text-center text-slate-500">
                              {estimationSubTab === 'active' ? 'Keine Bewertungen gefunden' : estimationSubTab === 'archived' ? 'Keine archivierten Bewertungen' : 'Keine gelöschten Bewertungen'}
                            </td>
                          </tr>
                        ) : (
                          filteredEstimations.map((est) => (
                            <tr key={est.id} className={`hover:bg-slate-50 transition-colors ${selectedIds.has(est.id) ? 'bg-orange-50' : est.follow_up ? 'bg-green-100' : estimationsWithNotes.has(est.id) ? 'bg-blue-100' : ''}`}>
                              <td className="px-3 py-3 w-10">
                                <input
                                  type="checkbox"
                                  className="w-4 h-4 rounded border-gray-400 cursor-pointer accent-orange-500"
                                  checked={selectedIds.has(est.id)}
                                  onChange={(ev) => {
                                    setSelectedIds((prev) => {
                                      const next = new Set(prev);
                                      if (ev.target.checked) next.add(est.id);
                                      else next.delete(est.id);
                                      return next;
                                    });
                                  }}
                                />
                              </td>
                              <td className="px-2 py-3 text-sm text-slate-600">
                                <div>{new Date(est.created_at).toLocaleDateString('de-DE')}</div>
                                <div className="text-xs text-slate-400">
                                  {new Date(est.created_at).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
                                </div>
                              </td>
                              <td className="px-2 py-3">
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
                                      est.status === 'incomplete'
                                        ? 'bg-slate-100 text-slate-500'
                                        : est.status === 'estimated'
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
                                    {est.status === 'incomplete' ? 'Unvollständig' : est.status === 'archived' ? 'Archiv' : est.status === 'deleted' ? 'Gelöscht' : est.status}
                                  </span>
                                )}
                              </td>
                              <td className="px-2 py-3 text-sm max-w-[144px]">
                                <div className="font-semibold text-slate-800 truncate">{est.first_name} {est.last_name}</div>
                                <div className="text-slate-500 text-xs truncate">{est.email}</div>
                              </td>
                              <td className="px-2 py-3 text-sm font-bold text-green-600 whitespace-nowrap">
                                {est.postal_code ?? <span className="text-slate-300 font-normal">—</span>}
                              </td>
                              <td className="px-2 py-3 text-sm max-w-[144px]">
                                <div className="font-semibold text-slate-800 truncate">{est.brand} {est.model}</div>
                                <div className="text-slate-500 text-xs">
                                  {est.year} • {est.mileage} km
                                </div>
                              </td>
                              <td className="px-2 py-3 text-sm font-bold text-brand-orange">
                                {est.status === 'incomplete'
                                  ? <span className="text-slate-400 font-semibold">Ausstehend</span>
                                  : formatPrice(est.estimated_price)}
                              </td>
                              <td className="px-2 py-3 text-sm font-bold text-red-500 whitespace-nowrap">
                                {est.desired_price
                                  ? `${est.desired_price} €`
                                  : <span className="text-slate-300 font-normal">—</span>}
                              </td>
                              <td className="px-2 py-3">
                                <select
                                  value={est.assigned_to ?? 'Nicht zugewiesen'}
                                  onChange={(e) => handleAssignedToChange(est.id, e.target.value)}
                                  className={`min-w-[110px] px-2 py-1 rounded-full text-xs font-bold border-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange ${ASSIGNEE_COLORS[est.assigned_to ?? 'Nicht zugewiesen'] ?? ASSIGNEE_COLORS['Other']} border-current`}
                                >
                                  {ASSIGNEES.map((name) => (
                                    <option key={name} value={name}>{name}</option>
                                  ))}
                                </select>
                              </td>
                              {estimationSubTab === 'active' && (
                                <>
                                  <td className="px-2 py-3">
                                    <select
                                      value={est.call_status ?? 'Neu'}
                                      onChange={(e) => handleCallStatusChange(est.id, e.target.value)}
                                      className={`min-w-[100px] px-2 py-1 rounded-full text-xs font-bold border-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                                        (est.call_status ?? 'Neu') === 'Neu'
                                          ? 'bg-slate-100 text-slate-700 border-slate-300'
                                          : est.call_status === 'Zugewiesen'
                                          ? 'bg-blue-100 text-blue-800 border-blue-300'
                                          : est.call_status === 'Angerufen'
                                          ? 'bg-sky-100 text-sky-800 border-sky-300'
                                          : est.call_status === 'Keine Antwort'
                                          ? 'bg-amber-100 text-amber-800 border-amber-300'
                                          : est.call_status === 'Interessiert'
                                          ? 'bg-green-100 text-green-800 border-green-300'
                                          : est.call_status === 'Nicht interessiert'
                                          ? 'bg-red-100 text-red-800 border-red-300'
                                          : est.call_status === 'Gekauft'
                                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                          : 'bg-slate-100 text-slate-700 border-slate-300'
                                      }`}
                                    >
                                      <option value="Neu">Neu</option>
                                      <option value="Zugewiesen">Zugewiesen</option>
                                      <option value="Angerufen">Angerufen</option>
                                      <option value="Keine Antwort">Keine Antwort</option>
                                      <option value="Interessiert">Interessiert</option>
                                      <option value="Nicht interessiert">Nicht interessiert</option>
                                      <option value="Gekauft">Gekauft</option>
                                    </select>
                                  </td>
                                </>
                              )}
                              <td className="px-2 py-3">
                                <div className="flex items-center gap-1 flex-wrap">
                                  <button
                                    type="button"
                                    onClick={() => handleViewDetails(est)}
                                    className="px-2 py-1 bg-brand-orange hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition-colors"
                                  >
                                    Details
                                  </button>
                                  {estimationSubTab === 'active' && (
                                    <>
                                      <button
                                        type="button"
                                        onClick={() => handleArchiveEstimation(est.id)}
                                        disabled={archivingEstimationId === est.id}
                                        className="px-2 py-1 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                                        title="Archivieren"
                                      >
                                        {archivingEstimationId === est.id ? '…' : 'Archiv'}
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleMoveEstimationToDeleted(est.id)}
                                        disabled={archivingEstimationId === est.id}
                                        className="px-2 py-1 bg-slate-500 hover:bg-slate-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                                        title="In Gelöscht verschieben"
                                      >
                                        {archivingEstimationId === est.id ? '…' : 'Löschen'}
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => setNotizModalForEstimation(est)}
                                        className="px-2 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-xs font-bold transition-colors"
                                        title="Notiz bearbeiten"
                                      >
                                        Notiz
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleFollowUpToggle(est.id, est.follow_up)}
                                        className={`px-2 py-1 rounded-lg text-xs font-bold transition-colors ${
                                          est.follow_up
                                            ? 'bg-green-500 text-white hover:bg-green-600'
                                            : 'bg-slate-200 text-slate-600 hover:bg-green-100'
                                        }`}
                                        title={est.follow_up ? 'Follow Up entfernen' : 'Als Follow Up markieren'}
                                      >
                                        Follow Up
                                      </button>
                                    </>
                                  )}
                                  {(estimationSubTab === 'archived' || estimationSubTab === 'deleted') && (
                                    <button
                                      type="button"
                                      onClick={() => handleRestoreEstimation(est.id)}
                                      disabled={archivingEstimationId === est.id}
                                      className="px-2 py-1 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors"
                                      title="Wiederherstellen"
                                    >
                                      {archivingEstimationId === est.id ? '…' : 'Wiederherstellen'}
                                    </button>
                                  )}
                                  {estimationSubTab === 'deleted' && (
                                    <button
                                      type="button"
                                      onClick={() => handleHardDeleteEstimationById(est.id)}
                                      className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-bold transition-colors"
                                      title="Endgültig löschen"
                                    >
                                      Endgültig löschen
                                    </button>
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

                {/* Result count when filters active */}
                {hasEstimationFilters(filters) && (
                  <p className="mt-3 text-sm text-slate-500">
                    {estimations.length} Ergebnis{estimations.length !== 1 ? 'se' : ''} gefunden
                  </p>
                )}

                {/* Pagination bar (hidden when server-side filters are active) */}
                {!hasEstimationFilters(filters) && (() => {
                  const totalForTab =
                    estimationSubTab === 'active'
                      ? estimationListTabCounts.active
                      : estimationSubTab === 'archived'
                      ? estimationListTabCounts.archived
                      : estimationListTabCounts.deleted;
                  const totalPages = Math.max(1, Math.ceil(totalForTab / PAGE_SIZE));
                  if (totalPages <= 1) return null;
                  return (
                    <div className="flex items-center justify-between mt-4 px-1">
                      <span className="text-sm text-slate-500">
                        Seite {estimationPage + 1} von {totalPages} &middot; {totalForTab} Ergebnisse
                      </span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          disabled={estimationPage === 0}
                          onClick={() => {
                            const newPage = estimationPage - 1;
                            setEstimationPage(newPage);
                            setSelectedIds(new Set());
                            loadData(newPage);
                          }}
                          className="px-4 py-2 rounded-lg text-sm font-semibold bg-white border border-gray-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                          ← Zurück
                        </button>
                        <button
                          type="button"
                          disabled={estimationPage >= totalPages - 1}
                          onClick={() => {
                            const newPage = estimationPage + 1;
                            setEstimationPage(newPage);
                            setSelectedIds(new Set());
                            loadData(newPage);
                          }}
                          className="px-4 py-2 rounded-lg text-sm font-semibold bg-white border border-gray-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                          Weiter →
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </>
            )}

            {/* Kalender Tab */}
            {activeTab === 'kalender' && (
              <CalendarTab
                appointments={appointments}
                estimations={estimations}
                appointmentEstimations={appointmentEstimations}
                onAppointmentCreated={(newAppt) => setAppointments((prev) => [newAppt, ...prev])}
                onAppointmentUpdated={handleUpdateAppointment}
                onAppointmentDeleted={handleAppointmentDeletedFromCalendar}
                onViewEstimationDetails={async (estimation) => {
                  await handleViewDetails(estimation);
                }}
                onNoteSaved={(id) => setEstimationsWithNotes((prev) => new Set([...prev, id]))}
              />
            )}

            {/* Provision Tab (hidden — replaced by Kalender) */}
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
                                  const linked = appointmentEstimations[appt.estimation_id];
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
                                    const linked = appointmentEstimations[appt.estimation_id];
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
                                        onClick={() => setEditingAppointment(appt)}
                                        className="px-3 py-1 bg-slate-600 hover:bg-slate-700 text-white rounded-lg text-xs font-bold transition-colors"
                                        title="Bearbeiten"
                                      >
                                        Bearbeiten
                                      </button>
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
                  {selectedEstimation.known_damages && (
                    <div className="col-span-2">
                      <div className="text-xs text-slate-500 mb-1">Bekannte Schäden / Mängel</div>
                      <div className="font-semibold">{selectedEstimation.known_damages}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Valuation Info */}
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">Bewertung</h3>
                {selectedEstimation.status === 'incomplete' ? (
                  <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-xl text-center">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-sm font-semibold mb-2">Unvollständig</span>
                    <p className="text-slate-500 text-sm">Die KI-Bewertung wurde nicht abgeschlossen. Der Kunde hat die Seite verlassen, bevor das Ergebnis vorlag.</p>
                  </div>
                ) : (
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
                )}
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
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
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
        const estimation = appointmentEstimations[appointmentModalForEstimation] ?? estimations.find((e) => e.id === appointmentModalForEstimation);
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

      {/* Notiz Modal */}
      {notizModalForEstimation && (
        <NotizModal
          estimationId={notizModalForEstimation.id}
          estimationLabel={`${notizModalForEstimation.first_name} ${notizModalForEstimation.last_name} — ${notizModalForEstimation.brand} ${notizModalForEstimation.model} (${notizModalForEstimation.year})`}
          onClose={() => setNotizModalForEstimation(null)}
          onNoteSaved={(id) => setEstimationsWithNotes((prev) => new Set([...prev, id]))}
        />
      )}

      {/* Edit Appointment Modal */}
      {editingAppointment && (
        <EditAppointmentModal
          appointment={editingAppointment}
          onClose={() => setEditingAppointment(null)}
          onSaved={(updated) => { handleUpdateAppointment(updated); setEditingAppointment(null); }}
        />
      )}
    </div>
  );
};

const AdminDashboard: React.FC = () => (
  <AuthProvider>
    <AdminDashboardContent />
  </AuthProvider>
);

export default AdminDashboard;
