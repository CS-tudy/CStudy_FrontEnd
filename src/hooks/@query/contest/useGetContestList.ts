import { useQuery } from '@tanstack/react-query';
import { getContestList } from 'api/contest';

interface GetContestListProps {
  page: number;
  query: string;
}

const useGetContestList = ({ page, query }: GetContestListProps) => {
  const { data: contestList } = useQuery(
    ['contestList', { page, query }],
    () => getContestList({ page, query }),
    {
      keepPreviousData: true,
    },
  );
  return contestList;
};

export default useGetContestList;
