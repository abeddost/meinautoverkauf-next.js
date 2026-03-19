'use client';

import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { CarDetails, ValuationResult } from '@/types';
import { getCarValuation, getValuationErrorMessage } from '@/geminiService';
import { setPendingPhotoPromise } from '@/lib/pendingPhotoUpload';
import type { ValuationOptionsData } from '@/lib/valuationOptionsData';

interface ValuationFormProps {
  onValuationComplete: (details: CarDetails, result: ValuationResult) => void;
  /** If provided, form will navigate to analyzing page with formData instead of calling API inline. */
  onValuationSubmit?: (formData: CarDetails) => void;
}

type FormPage = 1 | 2 | 3 | 4 | 5;
const CONTACT_FIELDS = ['firstName', 'lastName', 'email', 'phone', 'desiredPrice'] as const;
type ContactField = (typeof CONTACT_FIELDS)[number];
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
const VALUATION_REQUEST_ID_STORAGE_KEY = 'valuation_request_id';

let valuationOptionsPromise: Promise<ValuationOptionsData> | null = null;

const loadValuationOptions = async (): Promise<ValuationOptionsData> => {
  if (!valuationOptionsPromise) {
    valuationOptionsPromise = import('@/lib/valuationOptionsData')
      .then((module) => module.VALUATION_OPTIONS_DATA)
      .catch((error) => {
        valuationOptionsPromise = null;
        throw error;
      });
  }
  return valuationOptionsPromise;
};

const ValuationForm: React.FC<ValuationFormProps> = ({ onValuationComplete, onValuationSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Berechnung läuft …');
  const [currentPage, setCurrentPage] = useState<FormPage>(1);
  const [formData, setFormData] = useState<CarDetails>({
    brand: '',
    model: '',
    variant: '',
    year: '',
    mileage: '',
    fuelType: '',
    transmission: '',
    power: '',
    bodyType: '',
    condition: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    desiredPrice: '',
    vin: '',
    doors: '',
    postalCode: '',
    color: '',
    knownDamages: '',
    images: []
  });
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [photoPreviewUrls, setPhotoPreviewUrls] = useState<string[]>([]);
  const [fileError, setFileError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [dirtyFields, setDirtyFields] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [contactValidationEnabled, setContactValidationEnabled] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState('');
  const [optionsData, setOptionsData] = useState<ValuationOptionsData | null>(null);
  const [optionsLoading, setOptionsLoading] = useState(false);
  const brandTypeaheadRef = useRef('');
  const brandTypeaheadTimeRef = useRef(0);
  const brandTypeaheadTimerRef = useRef<number | null>(null);
  const submitInFlightRef = useRef(false);
  const journeyRequestIdRef = useRef<string | null>(null);

  const createSafeId = () =>
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}_${Math.random().toString(16).slice(2)}`;

  const clearJourneyRequestId = () => {
    journeyRequestIdRef.current = null;
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem(VALUATION_REQUEST_ID_STORAGE_KEY);
    }
  };

  const getOrCreateJourneyRequestId = () => {
    if (journeyRequestIdRef.current) return journeyRequestIdRef.current;

    if (typeof window !== 'undefined') {
      const fromSession = window.sessionStorage.getItem(VALUATION_REQUEST_ID_STORAGE_KEY);
      if (fromSession?.trim()) {
        journeyRequestIdRef.current = fromSession.trim();
        return journeyRequestIdRef.current;
      }
    }

    const nextId = createSafeId();
    journeyRequestIdRef.current = nextId;
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(VALUATION_REQUEST_ID_STORAGE_KEY, nextId);
    }
    return nextId;
  };

  const ensureOptionsLoaded = useCallback(async (): Promise<ValuationOptionsData> => {
    if (optionsData) return optionsData;
    setOptionsLoading(true);
    try {
      const loaded = await loadValuationOptions();
      setOptionsData(loaded);
      return loaded;
    } finally {
      setOptionsLoading(false);
    }
  }, [optionsData]);

  const handleOptionsIntent = useCallback(() => {
    if (optionsData || optionsLoading) return;
    void ensureOptionsLoaded();
  }, [ensureOptionsLoaded, optionsData, optionsLoading]);

  // Object URLs for photo preview thumbnails (revoke on cleanup)
  useEffect(() => {
    const urls = selectedFiles.map((f) => URL.createObjectURL(f));
    setPhotoPreviewUrls(urls);
    return () => urls.forEach((u) => URL.revokeObjectURL(u));
  }, [selectedFiles]);

  useIsomorphicLayoutEffect(() => {
    if (currentPage !== 5) {
      return;
    }
    setSubmitAttempted(false);
    setContactValidationEnabled(false);
    setActiveTooltip(null);
    setTouchedFields((prev) => {
      const next = { ...prev };
      CONTACT_FIELDS.forEach((field) => {
        delete next[field];
      });
      return next;
    });
    setDirtyFields((prev) => {
      const next = { ...prev };
      CONTACT_FIELDS.forEach((field) => {
        delete next[field];
      });
      return next;
    });
    setFieldErrors((prev) => {
      const next = { ...prev };
      CONTACT_FIELDS.forEach((field) => {
        delete next[field];
      });
      return next;
    });
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 5) return;
    submitInFlightRef.current = false;
    clearJourneyRequestId();
  }, [currentPage]);

  useEffect(() => {
    if (optionsData) return;

    let timeoutId: number | null = null;
    let idleId: number | null = null;
    const w = window as Window & {
      requestIdleCallback?: (
        callback: (deadline: { didTimeout: boolean; timeRemaining: () => number }) => void,
        options?: { timeout: number }
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof w.requestIdleCallback === 'function') {
      idleId = w.requestIdleCallback(() => {
        void ensureOptionsLoaded();
      }, { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(() => {
        void ensureOptionsLoaded();
      }, 600);
    }

    return () => {
      if (idleId !== null && typeof w.cancelIdleCallback === 'function') {
        w.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [ensureOptionsLoaded, optionsData]);

  const isContactField = (field: string): field is ContactField =>
    CONTACT_FIELDS.includes(field as ContactField);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'brand' ? { model: '' } : {})
    }));
    setDirtyFields(prev => ({ ...prev, [name]: true }));
    const shouldValidateLive = submitAttempted || touchedFields[name] || dirtyFields[name];
    if (shouldValidateLive || fieldErrors[name]) {
      setFieldError(name, validateField(name, value));
    }
  };

  const isFieldValid = (field: string, value?: string) => {
    const fieldValue = value ?? ((formData as any)[field] as string | undefined) ?? '';
    switch (field) {
      case 'postalCode':
        return !!fieldValue && fieldValue.length === 5;
      case 'condition':
        return !!fieldValue;
      case 'images':
        return !fileError;
      case 'brand':
      case 'model':
      case 'year':
      case 'power':
      case 'bodyType':
      case 'transmission':
      case 'doors':
      case 'mileage':
      case 'fuelType':
      case 'firstName':
      case 'lastName':
      case 'email':
      case 'phone':
      case 'desiredPrice':
        return Boolean(fieldValue);
      default:
        return true;
    }
  };

  const validateField = (field: string, value?: string) => {
    if (isFieldValid(field, value)) return '';
    switch (field) {
      case 'brand':
        return 'Bitte Marke wählen.';
      case 'model':
        return 'Bitte Modell wählen.';
      case 'year':
        return 'Bitte Erstzulassung wählen.';
      case 'power':
        return 'Bitte Motorleistung wählen.';
      case 'bodyType':
        return 'Bitte Karosserieform wählen.';
      case 'doors':
        return 'Bitte Türenanzahl wählen.';
      case 'transmission':
        return 'Bitte Getriebeart wählen.';
      case 'mileage':
        return 'Bitte Laufleistung wählen.';
      case 'fuelType':
        return 'Bitte Kraftstoff wählen.';
      case 'condition':
        return 'Bitte Zustand auswählen.';
      case 'postalCode':
        return 'Bitte 5-stellige PLZ eingeben.';
      case 'firstName':
        return 'Bitte Vorname eingeben.';
      case 'lastName':
        return 'Bitte Nachname eingeben.';
      case 'email':
        return 'Bitte E-Mail eingeben.';
      case 'phone':
        return 'Bitte Handynummer eingeben.';
      case 'desiredPrice':
        return 'Bitte Wunschpreis eingeben.';
      case 'images':
        return 'Maximal 5 Bilder erlaubt.';
      default:
        return 'Bitte Feld ausfüllen.';
    }
  };

  const setFieldError = (field: string, message: string) => {
    setFieldErrors(prev => {
      const next = { ...prev };
      if (message) {
        next[field] = message;
      } else {
        delete next[field];
      }
      return next;
    });
    if (!message && activeTooltip === field) {
      setActiveTooltip(null);
    }
  };

  const handleBlur = (field: string) => {
    setTouchedFields(prev => ({ ...prev, [field]: true }));
    setDirtyFields(prev => ({ ...prev, [field]: true }));
    if (isContactField(field)) {
      setContactValidationEnabled(true);
    }
    setFieldError(field, validateField(field));
  };

  const resetBrandTypeahead = () => {
    brandTypeaheadRef.current = '';
    brandTypeaheadTimeRef.current = 0;
    if (brandTypeaheadTimerRef.current) {
      window.clearTimeout(brandTypeaheadTimerRef.current);
      brandTypeaheadTimerRef.current = null;
    }
  };

  const handleBrandKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    if (!optionsData) {
      handleOptionsIntent();
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const { key } = e;
    if (key.length !== 1) return;
    if (!/[a-z0-9]/i.test(key)) return;

    const now = Date.now();
    const isSequential = now - brandTypeaheadTimeRef.current < 650;
    const nextQuery = `${isSequential ? brandTypeaheadRef.current : ''}${key}`.toLowerCase();
    brandTypeaheadRef.current = nextQuery;
    brandTypeaheadTimeRef.current = now;

    if (brandTypeaheadTimerRef.current) {
      window.clearTimeout(brandTypeaheadTimerRef.current);
    }
    brandTypeaheadTimerRef.current = window.setTimeout(() => {
      brandTypeaheadRef.current = '';
    }, 700);

    const match = optionsData.sortedBrands.find((brand) => brand.toLowerCase().startsWith(nextQuery));
    if (match) {
      e.preventDefault();
      setFormData(prev => ({
        ...prev,
        brand: match,
        model: ''
      }));
      if (fieldErrors.brand) {
        setFieldError('brand', '');
      }
    }
  };

  const requiredByPage: Record<number, string[]> = {
    1: ['brand', 'model', 'year'],
    2: ['power', 'bodyType', 'transmission', 'doors'],
    3: ['mileage', 'condition', 'fuelType'],
    4: ['postalCode'],
    5: [...CONTACT_FIELDS],
  };

  const nextPage = () => {
    const required = requiredByPage[currentPage] ?? [];
    const movingToPage5 = currentPage === 4;
    setSubmitAttempted(false);
    if (movingToPage5) {
      setContactValidationEnabled(false);
    }
    if (movingToPage5) {
      setActiveTooltip(null);
    }
    setTouchedFields(prev => {
      const next = { ...prev };
      required.forEach((field) => {
        next[field] = true;
      });
      if (movingToPage5) {
        CONTACT_FIELDS.forEach((field) => {
          delete next[field];
        });
      }
      return next;
    });
    setDirtyFields(prev => {
      const next = { ...prev };
      if (movingToPage5) {
        CONTACT_FIELDS.forEach((field) => {
          delete next[field];
        });
      }
      return next;
    });
    const errors: Record<string, string> = {};
    required.forEach((field) => {
      const message = validateField(field);
      if (message) errors[field] = message;
    });
    setFieldErrors(prev => {
      const next = { ...prev };
      required.forEach((field) => {
        if (errors[field]) {
          next[field] = errors[field];
        } else {
          delete next[field];
        }
      });
      if (movingToPage5) {
        CONTACT_FIELDS.forEach((field) => {
          delete next[field];
        });
      }
      return next;
    });
    if (Object.keys(errors).length > 0) {
      return;
    }
    setSubmitError('');
    setActiveTooltip(null);
    setCurrentPage(prev => (prev < 5 ? (prev + 1) as FormPage : prev));
  };

  const prevPage = () => {
    setActiveTooltip(null);
    setSubmitError('');
    setSubmitAttempted(false);
    setContactValidationEnabled(false);
    setCurrentPage(prev => (prev > 1 ? (prev - 1) as FormPage : prev));
  };

  const submitFinalStep = async () => {
    setSubmitError('');

    // Validate contact details and postal code before submission
    const required = [...requiredByPage[5], 'postalCode'];
    setSubmitAttempted(true);
    setContactValidationEnabled(true);
    setTouchedFields(prev => {
      const next = { ...prev };
      required.forEach((field) => {
        next[field] = true;
      });
      return next;
    });
    const errors: Record<string, string> = {};
    required.forEach((field) => {
      const message = validateField(field);
      if (message) errors[field] = message;
    });
    setFieldErrors(prev => {
      const next = { ...prev };
      required.forEach((field) => {
        if (errors[field]) {
          next[field] = errors[field];
        } else {
          delete next[field];
        }
      });
      return next;
    });
    if (Object.keys(errors).length > 0) {
      return;
    }

    if (submitInFlightRef.current) return;
    submitInFlightRef.current = true;
    const analyticsRequestId = getOrCreateJourneyRequestId();

    if (onValuationSubmit) {
      if (selectedFiles.length > 0) {
        const uuid = createSafeId();
        const bucket = 'car-photos';
        const filesSnapshot = [...selectedFiles];
        const uploadPromise: Promise<{ storagePath: string; originalFilename?: string; contentType?: string; sizeBytes?: number }[]> = (async () => {
          const [{ supabase }, { optimizeImageFile }] = await Promise.all([
            import('@/lib/supabase'),
            import('@/lib/imageOptimization'),
          ]);
          const optimizedFiles = await Promise.all(filesSnapshot.map((f) => optimizeImageFile(f)));
          const results = await Promise.all(
            optimizedFiles.map((optimized, i) => {
              const safeName = `${Date.now()}_${i}_${filesSnapshot[i].name.replace(/[^a-zA-Z0-9.-]/g, '_')}`.slice(0, 120);
              const storagePath = `pending/${uuid}/${safeName}`;
              return supabase.storage.from(bucket).upload(storagePath, optimized, { contentType: optimized.type, upsert: false })
                .then(({ error: uploadError }) => {
                  if (uploadError) throw new Error(`Upload fehlgeschlagen: ${uploadError.message}`);
                  return { storagePath, originalFilename: filesSnapshot[i].name, contentType: optimized.type, sizeBytes: optimized.size };
                });
            })
          );
          return results;
        })().catch((err) => {
          console.error('Background photo upload failed:', err);
          return [];
        });
        setPendingPhotoPromise(uploadPromise);
      }
      try {
        onValuationSubmit(formData);
      } catch (error) {
        submitInFlightRef.current = false;
        throw error;
      }
      return;
    }
    setLoading(true);
    setLoadingMessage('Berechnung läuft …');
    try {
      const result = await getCarValuation(formData, analyticsRequestId);
      onValuationComplete(formData, result);
    } catch (error: unknown) {
      setSubmitError(getValuationErrorMessage(error));
      setLoading(false);
      submitInFlightRef.current = false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPage < 5) {
      nextPage();
      return;
    }
    await submitFinalStep();
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 lg:p-12 min-h-[280px] flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-brand-orange rounded-full animate-spin mb-4" aria-hidden="true" />
        <p className="text-slate-600 font-medium">{loadingMessage}</p>
      </div>
    );
  }

  const StepLabel = ({ label, required, optional, htmlFor }: { label: string; required?: boolean; optional?: boolean; htmlFor?: string }) => (
    <label htmlFor={htmlFor} className="text-xs lg:text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1 lg:mb-1.5 block ml-1">
      {label}
      {required && <span className="text-brand-orange ml-1 align-middle">*</span>}
      {optional && <span className="ml-2 text-xs lg:text-[11px] font-semibold text-slate-500 normal-case tracking-normal">(optional)</span>}
    </label>
  );

  const formElementsBase = '/form-elements';
  const steps = [
    { label: 'Fahrzeugwahl', iconSrc: `${formElementsBase}/fahrzeug.webp` },
    { label: 'Technik', iconSrc: `${formElementsBase}/technik.webp` },
    { label: 'Zustand', iconSrc: `${formElementsBase}/zustand.webp` },
    { label: 'Details', iconSrc: `${formElementsBase}/details.webp` },
    { label: 'Kontakt', iconSrc: `${formElementsBase}/details.webp` }
  ];

  const baseFieldClass = "w-full bg-white/90 border border-slate-200/80 rounded-xl px-3.5 py-2.5 lg:py-3 font-semibold text-[#004d7c] outline-none focus:border-brand-orange focus:ring-2 focus:ring-orange-200/70 focus:bg-white transition-all shadow-[0_6px_16px_-12px_rgba(15,23,42,0.35)] text-[15px] lg:text-sm placeholder:text-slate-400 placeholder:font-normal placeholder:text-[13px] disabled:opacity-50 disabled:cursor-not-allowed";
  const selectClass = `${baseFieldClass} appearance-none cursor-pointer`;
  const inputClass = `${baseFieldClass} cursor-text`;
  const fileInputClass = "w-full bg-white/80 border border-slate-200/80 rounded-xl px-4 py-2.5 lg:py-3 text-[#004d7c] outline-none focus:border-brand-orange focus:ring-2 focus:ring-orange-200/70 transition-all text-[15px] lg:text-base placeholder:text-slate-400 placeholder:font-normal placeholder:text-[13px] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-gradient-to-r file:from-[#ffb347] file:to-[#ff7a1a] file:text-white hover:file:brightness-105";
  const invalidFieldClass = "ring-1 ring-amber-300/60";
  const shouldShowError = (field: string) => {
    const base = Boolean(fieldErrors[field] && (submitAttempted || touchedFields[field]));
    if (!base) return false;
    if (!isContactField(field)) return true;
    return contactValidationEnabled;
  };

  const renderErrorIcon = (field: string, message: string, positionClass = "right-3 top-1/2 -translate-y-1/2 mt-1") => {
    if (!shouldShowError(field)) return null;
    const errorMessage = fieldErrors[field] || message;
    const tooltipId = `err-${field}`;
    const isOpen = activeTooltip === field;
    return (
      <span className={`absolute ${positionClass} z-20`}>
        <button
          type="button"
          aria-label={errorMessage}
          aria-describedby={isOpen ? tooltipId : undefined}
          onMouseEnter={() => setActiveTooltip(field)}
          onMouseLeave={() => setActiveTooltip(null)}
          onFocus={() => setActiveTooltip(field)}
          onBlur={() => setActiveTooltip(null)}
          onClick={() => setActiveTooltip(isOpen ? null : field)}
          className="h-12 w-12 rounded-full text-red-500 flex items-center justify-center bg-white/80 shadow-sm"
        >
          <svg className="h-8 w-8" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 3l9.5 16.5a1 1 0 0 1-.86 1.5H3.36a1 1 0 0 1-.86-1.5L12 3z"
              fill="currentColor"
            />
            <path d="M11 9h2v6h-2z" fill="#fff" />
            <path d="M11 17h2v2h-2z" fill="#fff" />
          </svg>
        </button>
        {isOpen && (
          <div
            id={tooltipId}
            role="tooltip"
            className="absolute right-0 mt-2 w-max max-w-[220px] rounded-xl bg-slate-900 text-white text-xs px-3 py-2 shadow-lg"
          >
            {errorMessage}
          </div>
        )}
      </span>
    );
  };

  const renderSubmitErrorIcon = () => {
    if (!submitError) return null;
    const tooltipId = 'err-submit';
    const isOpen = activeTooltip === 'submit';
    return (
      <span className="relative">
        <button
          type="button"
          aria-label={submitError}
          aria-describedby={isOpen ? tooltipId : undefined}
          onMouseEnter={() => setActiveTooltip('submit')}
          onMouseLeave={() => setActiveTooltip(null)}
          onFocus={() => setActiveTooltip('submit')}
          onBlur={() => setActiveTooltip(null)}
          onClick={() => setActiveTooltip(isOpen ? null : 'submit')}
          className="h-12 w-12 rounded-full text-red-500 flex items-center justify-center bg-white/80 shadow-sm"
        >
          <svg className="h-8 w-8" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 3l9.5 16.5a1 1 0 0 1-.86 1.5H3.36a1 1 0 0 1-.86-1.5L12 3z"
              fill="currentColor"
            />
            <path d="M11 9h2v6h-2z" fill="#fff" />
            <path d="M11 17h2v2h-2z" fill="#fff" />
          </svg>
        </button>
        {isOpen && (
          <div
            id={tooltipId}
            role="tooltip"
            className="absolute right-0 mt-2 w-max max-w-[240px] rounded-xl bg-slate-900 text-white text-xs px-3 py-2 shadow-lg"
          >
            {submitError}
          </div>
        )}
      </span>
    );
  };

  const optionsReady = optionsData !== null;
  const sortedBrands = optionsData?.sortedBrands ?? [];
  const availableModels = formData.brand ? optionsData?.brandData[formData.brand] ?? [] : [];
  const years = optionsData?.years ?? [];
  const powerRanges = optionsData?.powerRanges ?? [];
  const bodyTypes = optionsData?.bodyTypes ?? [];
  const transmissions = optionsData?.transmissions ?? [];
  const mileageRanges = optionsData?.mileageRanges ?? [];
  const fuels = optionsData?.fuels ?? [];
  const conditions = optionsData?.conditions ?? [];

  return (
    <div className="relative bg-white/70 backdrop-blur-xl rounded-[1.5rem] lg:rounded-[2rem] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.45)] overflow-hidden text-brand-dark flex flex-col w-full border border-white/60">
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-orange-50/50 pointer-events-none"></div>
      <div className="relative z-10 flex flex-col h-full">
        {/* Form Header - Step indicator */}
        <div className="px-4 py-4 lg:px-6 lg:py-5 border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white/60">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-600">
                Schritt <span className="text-brand-orange">{currentPage}</span> von 5
              </span>
              <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                {steps[currentPage - 1].label}
              </span>
            </div>
            {/* Progress bar */}
            <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#ffb347] to-[#ff7a1a] transition-all duration-500 ease-out"
                style={{ width: `${(currentPage / 5) * 100}%` }}
              />
            </div>
            {/* Step circles with labels */}
            <div className="grid grid-cols-5 gap-2 lg:gap-3">
              {steps.map((step, index) => {
                const stepNumber = index + 1;
                const isCompleted = currentPage > stepNumber;
                const isCurrent = currentPage === stepNumber;
                return (
                  <div key={step.label} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`
                        w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center overflow-hidden
                        transition-all duration-300 ease-out
                        ${isCurrent
                          ? 'bg-white shadow-lg shadow-orange-200/60 ring-2 ring-[#ff7a1a] scale-105'
                          : isCompleted
                            ? 'bg-emerald-500'
                            : 'bg-slate-100'
                        }
                      `}
                    >
                      {isCompleted ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <img
                          src={step.iconSrc}
                          alt={step.label}
                          width={32}
                          height={32}
                          className={`w-full h-full object-contain ${isCurrent ? '' : 'opacity-80 saturate-75'}`}
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                    </div>
                    <span className={`text-xs lg:text-[11px] font-semibold text-center leading-tight max-w-[72px] sm:max-w-[80px] ${isCurrent ? 'text-slate-800' : isCompleted ? 'text-emerald-600' : 'text-slate-500'}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="p-5 lg:p-7 space-y-5 lg:space-y-6 flex-grow flex flex-col justify-between">
        <div className="space-y-4 lg:space-y-5">
          {currentPage === 1 && (
            <div className="grid grid-cols-1 gap-3 lg:gap-4 animate-in fade-in slide-in-from-right-2 duration-300">
              <div className="relative">
                <StepLabel label="Automarke" required htmlFor="form-brand" />
                <select
                  id="form-brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleSelectChange}
                  onBlur={() => {
                    handleBlur('brand');
                    resetBrandTypeahead();
                  }}
                  onFocus={() => {
                    resetBrandTypeahead();
                    handleOptionsIntent();
                  }}
                  onClick={() => {
                    resetBrandTypeahead();
                    handleOptionsIntent();
                  }}
                  onTouchStart={handleOptionsIntent}
                  onKeyDown={handleBrandKeyDown}
                  required
                  aria-busy={!optionsReady}
                  className={`${selectClass} ${shouldShowError('brand') ? `${invalidFieldClass} pr-14` : ''}`}
                >
                  <option value="">{optionsReady ? 'Bitte wählen...' : 'Optionen werden geladen...'}</option>
                  {sortedBrands.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
                {renderErrorIcon('brand', 'Bitte Marke wählen.')}
              </div>
              <div className="relative">
                <StepLabel label="Modellreihe" required htmlFor="form-model" />
                <select
                  id="form-model"
                  name="model"
                  value={formData.model}
                  onChange={handleSelectChange}
                  onBlur={() => handleBlur('model')}
                  onFocus={handleOptionsIntent}
                  onTouchStart={handleOptionsIntent}
                  disabled={!formData.brand || !optionsReady}
                  required
                  className={`${selectClass} ${shouldShowError('model') ? `${invalidFieldClass} pr-14` : ''}`}
                >
                  <option value="">{!optionsReady ? 'Optionen werden geladen...' : formData.brand ? 'Modell wählen...' : 'Wähle zuerst die Marke'}</option>
                  {formData.brand && availableModels.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
                {renderErrorIcon('model', 'Bitte Modell wählen.')}
              </div>
              <div className="relative">
                <StepLabel label="Erstzulassung" required htmlFor="form-year" />
                <select
                  id="form-year"
                  name="year"
                  value={formData.year}
                  onChange={handleSelectChange}
                  onBlur={() => handleBlur('year')}
                  onFocus={handleOptionsIntent}
                  onTouchStart={handleOptionsIntent}
                  required
                  className={`${selectClass} ${shouldShowError('year') ? `${invalidFieldClass} pr-14` : ''}`}
                >
                  <option value="">{optionsReady ? 'Jahr wählen...' : 'Optionen werden geladen...'}</option>
                  {years.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
                {renderErrorIcon('year', 'Bitte Erstzulassung wählen.')}
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div className="grid grid-cols-1 gap-3 lg:gap-4 animate-in fade-in slide-in-from-right-2 duration-300">
              <div className="relative">
                <StepLabel label="Motorleistung" required htmlFor="form-power" />
                <select
                  id="form-power"
                  name="power"
                  value={formData.power}
                  onChange={handleSelectChange}
                  onBlur={() => handleBlur('power')}
                  onFocus={handleOptionsIntent}
                  onTouchStart={handleOptionsIntent}
                  required
                  className={`${selectClass} ${shouldShowError('power') ? `${invalidFieldClass} pr-14` : ''}`}
                >
                  <option value="">{optionsReady ? 'Leistung wählen...' : 'Optionen werden geladen...'}</option>
                  {powerRanges.map((p) => <option key={p.val} value={p.val}>{p.label}</option>)}
                </select>
                {renderErrorIcon('power', 'Bitte Motorleistung wählen.')}
              </div>
              <div className="relative">
                <StepLabel label="Karosserieform" required htmlFor="form-bodyType" />
                <select
                  id="form-bodyType"
                  name="bodyType"
                  value={formData.bodyType}
                  onChange={handleSelectChange}
                  onBlur={() => handleBlur('bodyType')}
                  onFocus={handleOptionsIntent}
                  onTouchStart={handleOptionsIntent}
                  required
                  className={`${selectClass} ${shouldShowError('bodyType') ? `${invalidFieldClass} pr-14` : ''}`}
                >
                  <option value="">{optionsReady ? 'Karosserieform wählen...' : 'Optionen werden geladen...'}</option>
                  {bodyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {renderErrorIcon('bodyType', 'Bitte Karosserieform wählen.')}
              </div>
              <div className="relative">
                <StepLabel label="Anzahl der Türen" required htmlFor="form-doors" />
                <select
                  id="form-doors"
                  name="doors"
                  value={formData.doors || ''}
                  onChange={handleSelectChange}
                  onBlur={() => handleBlur('doors')}
                  required
                  className={`${selectClass} ${shouldShowError('doors') ? `${invalidFieldClass} pr-14` : ''}`}
                >
                  <option value="">Anzahl wählen...</option>
                  <option value="2/3">2/3 Türen</option>
                  <option value="4/5">4/5 Türen</option>
                  <option value="6/7">6/7 Türen (Van/Bus)</option>
                </select>
                {renderErrorIcon('doors', 'Bitte Türenanzahl wählen.')}
              </div>
              <div className="relative">
                <StepLabel label="Getriebeart" required htmlFor="form-transmission" />
                <select
                  id="form-transmission"
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleSelectChange}
                  onBlur={() => handleBlur('transmission')}
                  onFocus={handleOptionsIntent}
                  onTouchStart={handleOptionsIntent}
                  required
                  className={`${selectClass} ${shouldShowError('transmission') ? `${invalidFieldClass} pr-14` : ''}`}
                >
                  <option value="">{optionsReady ? 'Getriebeart wählen...' : 'Optionen werden geladen...'}</option>
                  {transmissions.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {renderErrorIcon('transmission', 'Bitte Getriebeart wählen.')}
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div className="grid grid-cols-1 gap-3 lg:gap-4 animate-in fade-in slide-in-from-right-2 duration-300">
              <div className="relative">
                <StepLabel label="Laufleistung" required htmlFor="form-mileage" />
                <select
                  id="form-mileage"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleSelectChange}
                  onBlur={() => handleBlur('mileage')}
                  onFocus={handleOptionsIntent}
                  onTouchStart={handleOptionsIntent}
                  className={`${selectClass} ${shouldShowError('mileage') ? `${invalidFieldClass} pr-14` : ''}`}
                  required
                >
                  <option value="">{optionsReady ? 'Laufleistung wählen...' : 'Optionen werden geladen...'}</option>
                  {mileageRanges.map((range) => (
                    <option key={range.val} value={range.val}>
                      {range.label}
                    </option>
                  ))}
                </select>
                {renderErrorIcon('mileage', 'Bitte Laufleistung wählen.')}
              </div>
              <div className="relative">
                <StepLabel label="Antrieb / Kraftstoff" required htmlFor="form-fuelType" />
                <select
                  id="form-fuelType"
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleSelectChange}
                  onBlur={() => handleBlur('fuelType')}
                  onFocus={handleOptionsIntent}
                  onTouchStart={handleOptionsIntent}
                  required
                  className={`${selectClass} ${shouldShowError('fuelType') ? `${invalidFieldClass} pr-14` : ''}`}
                >
                  <option value="">{optionsReady ? 'Kraftstoff wählen...' : 'Optionen werden geladen...'}</option>
                  {fuels.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
                {renderErrorIcon('fuelType', 'Bitte Kraftstoff wählen.')}
              </div>
              <div className="relative">
                <StepLabel label="Fahrzeugzustand" required />
                {!optionsReady && (
                  <p className="text-xs text-slate-500 ml-1">Optionen werden geladen...</p>
                )}
                <div className="grid grid-cols-2 gap-2.5 lg:gap-3">
                  {conditions.map((c) => (
                    <button
                      key={c.val}
                      type="button"
                      onClick={() => {
                        setDirtyFields(prev => ({ ...prev, condition: true }));
                        const shouldValidateLive = submitAttempted || touchedFields.condition || dirtyFields.condition;
                        if (shouldValidateLive || fieldErrors.condition) {
                          setFieldError('condition', validateField('condition', c.val));
                        } else {
                          setFieldError('condition', '');
                        }
                        setFormData(p => ({ ...p, condition: c.val as any }));
                      }}
                      className={`py-2.5 lg:py-3.5 rounded-xl font-bold text-xs lg:text-sm transition-all border-2 ${formData.condition === c.val ? 'bg-white border-brand-orange text-brand-orange shadow-[0_10px_20px_-14px_rgba(255,122,26,0.7)]' : 'bg-white/60 border-white/70 text-slate-500 hover:border-orange-200/70'}`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
                {renderErrorIcon('condition', 'Bitte Zustand auswählen.', 'right-2 top-2')}
              </div>
              <div>
                <StepLabel label="Bekannte Schäden oder Mängel" optional />
                <textarea
                  name="knownDamages"
                  value={formData.knownDamages || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, knownDamages: e.target.value }))}
                  placeholder="z.B. Kratzer, Delle, Klimaanlage defekt …"
                  rows={3}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>
          )}

          {currentPage === 4 && (
            <div className="grid grid-cols-1 gap-3 lg:gap-4 animate-in fade-in slide-in-from-right-2 duration-300">
              <div className="relative">
                <StepLabel label="Postleitzahl (Standort)" required />
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode || ''}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                    setFormData(prev => ({ ...prev, postalCode: value }));
                    setDirtyFields(prev => ({ ...prev, postalCode: true }));
                    const shouldValidateLive = submitAttempted || touchedFields.postalCode || dirtyFields.postalCode;
                    if (shouldValidateLive || fieldErrors.postalCode) {
                      setFieldError('postalCode', validateField('postalCode', value));
                    }
                  }}
                  onBlur={() => handleBlur('postalCode')}
                  placeholder="5-stellige PLZ"
                  maxLength={5}
                  className={`${inputClass} ${shouldShowError('postalCode') ? `${invalidFieldClass} pr-14` : ''}`}
                  required
                />
                {renderErrorIcon('postalCode', 'Bitte 5-stellige PLZ eingeben.')}
              </div>
              <div>
                <StepLabel label="Fahrzeug-Identifizierungsnummer (FIN/VIN)" optional />
                <input
                  type="text"
                  name="vin"
                  value={formData.vin || ''}
                  onChange={handleSelectChange}
                  placeholder="17-stellige FIN / VIN"
                  maxLength={17}
                  className={`${inputClass} uppercase`}
                />
              </div>
              <div>
                <StepLabel label="Farbe" optional />
                <input
                  type="text"
                  name="color"
                  value={formData.color || ''}
                  onChange={handleSelectChange}
                  placeholder="z.B. Schwarz, Silber"
                  className={inputClass}
                />
              </div>
              <div className="relative">
                <StepLabel label="Fotos hochladen" optional />
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => {
                        const newFiles = Array.from(e.target.files || []);
                        e.target.value = '';
                        setDirtyFields((prev) => ({ ...prev, images: true }));
                        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
                        const invalid = newFiles.filter((f) => !validTypes.includes(f.type));
                        if (invalid.length > 0) {
                          setFileError(true);
                          setTouchedFields((prev) => ({ ...prev, images: true }));
                          setFieldError('images', 'Nur JPEG, PNG oder WebP erlaubt.');
                          return;
                        }
                        const oversized = newFiles.filter((f) => f.size > 5 * 1024 * 1024);
                        if (oversized.length > 0) {
                          setFileError(true);
                          setTouchedFields((prev) => ({ ...prev, images: true }));
                          setFieldError('images', 'Max. 5 MB pro Foto.');
                          return;
                        }
                        setSelectedFiles((prev) => {
                          const combined = [...prev, ...newFiles];
                          const seen = new Set<string>();
                          const deduped = combined.filter((f) => {
                            const key = `${f.name}_${f.size}`;
                            if (seen.has(key)) return false;
                            seen.add(key);
                            return true;
                          });
                          const merged = deduped.slice(0, 5);
                          if (deduped.length > 5) {
                            setFileError(true);
                            setTouchedFields((prevTouched) => ({ ...prevTouched, images: true }));
                            setFieldError('images', 'Maximal 5 Bilder erlaubt. Es wurden nur die ersten 5 übernommen.');
                          } else {
                            setFileError(false);
                            setFieldError('images', '');
                          }
                          const fileNames = merged.map((f) => f.name);
                          setUploadedImages(fileNames);
                          setFormData((fd) => ({ ...fd, images: fileNames }));
                          return merged;
                        });
                      }}
                    className={`${fileInputClass} ${shouldShowError('images') ? `${invalidFieldClass} pr-14` : ''}`}
                    />
                    {renderErrorIcon('images', 'Maximal 5 Bilder erlaubt.')}
                  </div>
                  {shouldShowError('images') && fieldErrors.images && (
                    <p className="text-sm text-amber-600 font-medium mt-1 ml-1" role="alert">
                      {fieldErrors.images}
                    </p>
                  )}
                  {selectedFiles.length > 0 && (
                    <div className="mt-2">
                      <p className="text-xs text-slate-500 font-medium mb-2">
                        {selectedFiles.length} Bild(er) ausgewählt
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {photoPreviewUrls.map((url, idx) => (
                          <div
                            key={`preview-${idx}`}
                            className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 flex-shrink-0"
                            title={selectedFiles[idx]?.name}
                          >
                            <img
                              src={url}
                              alt=""
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <p className="text-xs text-slate-500 mt-1 ml-1">Optional - max. 5 Bilder</p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 5 && (
            <div className="grid grid-cols-1 gap-3 lg:gap-4 animate-in fade-in slide-in-from-right-2 duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                <div className="relative">
                  <StepLabel label="Vorname" required />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleSelectChange}
                    onBlur={() => handleBlur('firstName')}
                    placeholder="Vorname"
                    className={`${inputClass} ${shouldShowError('firstName') ? `${invalidFieldClass} pr-14` : ''}`}
                    required
                  />
                  {renderErrorIcon('firstName', 'Bitte Vorname eingeben.')}
                </div>
                <div className="relative">
                  <StepLabel label="Nachname" required />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleSelectChange}
                    onBlur={() => handleBlur('lastName')}
                    placeholder="Nachname"
                    className={`${inputClass} ${shouldShowError('lastName') ? `${invalidFieldClass} pr-14` : ''}`}
                    required
                  />
                  {renderErrorIcon('lastName', 'Bitte Nachname eingeben.')}
                </div>
              </div>
              <div className="relative">
                <StepLabel label="Deine E-Mail-Adresse" required />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleSelectChange}
                  onBlur={() => handleBlur('email')}
                  placeholder="E-Mail-Adresse"
                  className={`${inputClass} ${shouldShowError('email') ? `${invalidFieldClass} pr-14` : ''}`}
                  required
                />
                {renderErrorIcon('email', 'Bitte E-Mail eingeben.')}
              </div>
              <div className="relative">
                <StepLabel label="Deine Handynummer" required />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleSelectChange}
                  onBlur={() => handleBlur('phone')}
                  placeholder="Handynummer"
                  className={`${inputClass} ${shouldShowError('phone') ? `${invalidFieldClass} pr-14` : ''}`}
                  required
                />
                {renderErrorIcon('phone', 'Bitte Handynummer eingeben.')}
              </div>
              <div className="relative">
                <StepLabel label="Dein Wunschpreis (€)" required />
                <input
                  type="number"
                  name="desiredPrice"
                  value={formData.desiredPrice}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^\d]/g, '');
                    setFormData(prev => ({ ...prev, desiredPrice: value }));
                    setDirtyFields(prev => ({ ...prev, desiredPrice: true }));
                    const shouldValidateLive = submitAttempted || touchedFields.desiredPrice || dirtyFields.desiredPrice;
                    if (shouldValidateLive || fieldErrors.desiredPrice) {
                      setFieldError('desiredPrice', validateField('desiredPrice', value));
                    }
                  }}
                  onBlur={() => handleBlur('desiredPrice')}
                  placeholder="Betrag in €"
                  min={0}
                  className={`${inputClass} ${shouldShowError('desiredPrice') ? `${invalidFieldClass} pr-14` : ''}`}
                />
                {renderErrorIcon('desiredPrice', 'Bitte Wunschpreis eingeben.')}
              </div>
            </div>
          )}
        </div>

        <div className="pt-3 lg:pt-4 flex flex-col gap-2 lg:gap-3">
          <button
            type="button"
            onClick={() => {
              if (currentPage === 5) {
                void submitFinalStep();
                return;
              }
              nextPage();
            }}
            disabled={currentPage === 1 && (!formData.brand || !formData.model || !formData.year)}
            className="group w-full bg-gradient-to-r from-[#ffb347] via-[#ff8f2d] to-[#ff7a1a] text-white py-3.5 lg:py-4 rounded-2xl font-black text-sm lg:text-base shadow-[0_14px_30px_-14px_rgba(255,130,50,0.7)] hover:shadow-[0_20px_40px_-16px_rgba(255,130,50,0.9)] hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center justify-center gap-3">
              <span>{currentPage === 5 ? "Kostenlosen Verkaufspreis erhalten" : "Kostenlos bewerten"}</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </span>
          </button>
          {submitError && (
            <div className="flex justify-end pr-1">
              {renderSubmitErrorIcon()}
            </div>
          )}
          
          {currentPage > 1 && (
            <button 
              type="button" 
              onClick={prevPage}
              className="w-full text-slate-500 font-bold text-xs lg:text-sm hover:text-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
              Zurück
            </button>
          )}
        </div>
      </form>
      </div>
    </div>
  );
};

export default ValuationForm;
