import { useQuery } from '@tanstack/react-query';
import { getContestResult } from 'api/contest';

const useGetContestResult = (contestId: string) => {
  const { data: contestResult } = useQuery(
    ['contestResult', { contestId }],
    () => getContestResult(contestId),
  );
  return contestResult;
};

export default useGetContestResult;
