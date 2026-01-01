const BASE_URL = '[Your base Apu url here]';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

if (API_KEY) {
  console.warn('⚠️ Missing EXPO_PUBLIC_API_KEY environment variable');
}

// Types
export type Data = {
  id: number;
  name: string;
};

export type SampleQueryParams = {
  from?: number;
  to?: number;
  filter?: string;
};

type ApiResponse<T> = {
  result: T;
};

// -----------------------------
// Internal fetch helper
// -----------------------------
const request = async <T>(path: string): Promise<ApiResponse<T>> => {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'GET',
    headers: {
      // Match your API's required headers here:
      'x-api-key': API_KEY ?? '',
      'x-api-host': '[Your Api host here]',
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API Error: ${res.status}: ${text}`);
  }

  return res.json();
};

// -----------------------------
// API surface examples:
// -----------------------------
export const api = {
  getData(): Promise<ApiResponse<Data[]>> {
    return request('/data');
  },

  getDataWithParams(
    id: number,
    params?: SampleQueryParams,
  ): Promise<ApiResponse<Data[]>> {
    const sp = new URLSearchParams();

    // Use != null so 0 doesn't get dropped
    if (params?.from != null) sp.set('from', String(params.from));
    if (params?.to != null) sp.set('to', String(params.to));
    if (params?.filter) sp.set('filter', params.filter);

    const qs = sp.toString();
    const path = `/data/${id}/fixtures/${qs ? `?${qs}` : ''}`;

    return request(path);
  },
};
