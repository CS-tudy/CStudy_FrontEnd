import { useQuery } from '@tanstack/react-query';
import { getToggleRequestList } from 'api/board';

interface GetRequestList {
  page: number;
  query?: string;
}

const useGetToggleRequestList = ({ page }: GetRequestList) => {
  const { data: requestList } = useQuery(
    ['boardList', { page }],
    () => getToggleRequestList({ page }),
    { keepPreviousData: true },
  );
  return requestList;
};

export default useGetToggleRequestList;
