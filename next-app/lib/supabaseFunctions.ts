/**
 * Call Supabase Edge Functions (submit-estimation, book-appointment).
 * Uses NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.
 */
import { getSupabaseConfig } from './supabaseConfig';

const getEdgeFunctionConfig = () => {
  const { url, anonKey } = getSupabaseConfig();
  return { url, key: anonKey };
};

export interface SavePartialLeadBody {
  customer: { firstName: string; lastName: string; email: string; phone: string };
  car: Record<string, unknown>;
  photos?: { storagePath: string; originalFilename?: string; contentType?: string; sizeBytes?: number }[];
}

export interface SavePartialLeadResponse {
  estimationId: string;
  status: 'incomplete';
}

export interface SubmitEstimationBody {
  customer: { firstName: string; lastName: string; email: string; phone: string };
  car: Record<string, unknown>;
  valuation: {
    estimatedPrice: number;
    priceRange: { min: number; max: number };
    explanation: string;
    marketTrend: string;
    sources?: { title: string; uri: string }[];
  };
  photos?: { storagePath: string; originalFilename?: string; contentType?: string; sizeBytes?: number }[];
  /** If set, UPDATE this incomplete record instead of INSERTing a new one. */
  estimationId?: string;
}

export interface SubmitEstimationResponse {
  estimationId: string;
  status: string;
}

export interface BookAppointmentBody {
  estimationId: string;
  preferredDate: string;
  preferredTime: string;
  deliveryType: 'bring_car' | 'pickup';
  bringLocation?: 'bodenheim' | 'ruesselsheim';
}

export interface BookAppointmentResponse {
  appointmentId: string;
  estimationId: string;
  status: string;
}

export interface EdgeFunctionError {
  error: string;
  code?: string;
  details?: Record<string, unknown>;
  retryAfterSeconds?: number;
}

const isJwtLikeKey = (key: string): boolean => key.split('.').length === 3;

async function invokeEdgeFunction<T>(
  name: string,
  body: unknown,
  options?: { keepalive?: boolean }
): Promise<{ data?: T; error?: EdgeFunctionError; status: number }> {
  const { url, key } = getEdgeFunctionConfig();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    apikey: key,
  };

  // Bearer auth must be a JWT. sb_publishable_* keys are not JWTs.
  if (isJwtLikeKey(key)) {
    headers.Authorization = `Bearer ${key}`;
  }

  const res = await fetch(`${url}/functions/v1/${name}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
    keepalive: options?.keepalive ?? false,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    return {
      error: json as EdgeFunctionError,
      status: res.status,
    };
  }
  return { data: json as T, status: res.status };
}

export async function savePartialLead(
  body: SavePartialLeadBody
): Promise<{ data?: SavePartialLeadResponse; error?: EdgeFunctionError; status: number }> {
  return invokeEdgeFunction<SavePartialLeadResponse>('save-partial-lead', body, { keepalive: true });
}

export async function submitEstimation(
  body: SubmitEstimationBody
): Promise<{ data?: SubmitEstimationResponse; error?: EdgeFunctionError; status: number }> {
  return invokeEdgeFunction<SubmitEstimationResponse>('submit-estimation', body);
}

export async function bookAppointment(
  body: BookAppointmentBody
): Promise<{ data?: BookAppointmentResponse; error?: EdgeFunctionError; status: number }> {
  return invokeEdgeFunction<BookAppointmentResponse>('book-appointment', body);
}
