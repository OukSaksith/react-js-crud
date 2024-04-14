import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

const useHookSamples = (id) => {
  const apiClient = new APIClient(`/hooks/${id}/samples`);

  return useQuery(['hooks', id], () => apiClient.getAll());
};

export default useHookSamples;
