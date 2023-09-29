import { useQuery } from '@tanstack/react-query';
import { getNoticeDetail } from 'api/board';

const useGetNoticeDetail = (id: string | undefined) => {
  const { data: request } = useQuery(['Notice', { id }], () =>
    getNoticeDetail(id),
  );
  return request;
};

export default useGetNoticeDetail;
