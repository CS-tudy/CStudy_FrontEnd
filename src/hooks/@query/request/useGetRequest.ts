import { useQuery } from '@tanstack/react-query';
import { getRequest } from 'api/request';

const useGetRequest = (id: string | undefined) => {
  const { data: request } = useQuery(['request', { id }], () => getRequest(id));
  return request;
};

export default useGetRequest;
