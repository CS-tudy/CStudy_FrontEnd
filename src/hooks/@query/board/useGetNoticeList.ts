import { useQuery } from '@tanstack/react-query';
import { getToggleRequestList } from 'api/board';

interface GetRequestList {
  page: number;
  query: string;
  serachOption?: string;
  value?: string;
}

const useGetNoticeList = ({
  page,
  query,
  serachOption,
  value,
}: GetRequestList) => {
  const { data: requestList } = useQuery(
    ['noticeList', { page, query, serachOption, value }],
    () => getToggleRequestList({ page, query, serachOption, value }),
    { keepPreviousData: true },
  );
  return requestList;
};

export default useGetNoticeList;
