import { useQuery } from '@tanstack/react-query';
import { getContest } from 'api/contest';

const useGetContest = (contestId: string) => {
  const { data: contest } = useQuery(['contest', { contestId }], () =>
    getContest(contestId),
  );
  return contest;
};

export default useGetContest;
