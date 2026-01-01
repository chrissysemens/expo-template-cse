import { useQuery } from '@tanstack/react-query';
import { api, SampleQueryParams } from '../api/sample.api';

/**
 * Some default, scaffolded query keys and hooks for react-query.
 * Adjust as needed, or remove if you are not using react-query.
 */
export const apiKeys = {
  default: ['root', 'data'] as const,
  withParams: (seasonId: number, params?: SampleQueryParams) =>
    [
      'root',
      'data',
      seasonId,
      params?.from ?? null,
      params?.to ?? null,
      params?.filter ?? null,
    ] as const,
};

export const useData = () => {
  return useQuery({
    queryKey: apiKeys.default,
    queryFn: async () => (await api.getData()).result,
  });
};

export const useDataWithParams = (id?: number, params?: SampleQueryParams) => {
  return useQuery({
    queryKey: id
      ? apiKeys.withParams(id, params ?? {})
      : ['root', 'data', 'none'],
    queryFn: async () => (await api.getDataWithParams(id!, params)).result,
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });
};
