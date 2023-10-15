import { useQuery } from '@tanstack/react-query';
import { getContestProblem } from 'api/contest';

const useGetContestProblem = (contestId: string) => {
  const { data: contestProblem } = useQuery(
    ['contestProblem', { contestId }],
    () => getContestProblem(contestId),
  );
  return contestProblem;
};

export default useGetContestProblem;
