/**
 * Call Supabase Edge Functions (submit-estimation, book-appointment).
 * Uses VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY.
 */

const getSupabaseConfig = () => {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
  if (!url || !key) {
    throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY');
  }
  return { url, key };
};

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

async function invokeEdgeFunction<T>(
  name: string,
  body: unknown
): Promise<{ data?: T; error?: EdgeFunctionError; status: number }> {
  const { url, key } = getSupabaseConfig();
  const res = await fetch(`${url}/functions/v1/${name}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(body),
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
