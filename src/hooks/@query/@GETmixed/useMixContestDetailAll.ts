import { useQueries } from '@tanstack/react-query';
import { getProblem } from 'api/problem';
import {
  getContest,
  getContestMyRanking,
  getContestProblem,
  getContestRanking,
} from 'api/contest';
// import { isLogin } from 'utils/auth';

interface MixQueryProps {
  categoryTitle?: string;
  status?: number;
  page?: number;
  query?: string;
  contestId: string;
}

export const useMixContestDetailAll = ({
  categoryTitle,
  status,
  page,
  query,
  contestId,
}: MixQueryProps) => {
  const [
    problemListResult,
    contestProblemListResult,
    contestMyRankingListResult,
    contestListResult,
    contestRankingListResult,
  ] = useQueries({
    queries: [
      {
        queryKey: ['getProblem', { categoryTitle, status, query }],
        queryFn: () => getProblem({ categoryTitle, status, query }),
      },
      {
        queryKey: ['contestProblem', { contestId }],
        queryFn: () => getContestProblem(contestId),
      },
      {
        queryKey: ['contestMyRanking', { contestId }],
        queryFn: () => getContestMyRanking(contestId),
        // enabled: isLogin(),
      },
      {
        queryKey: ['contest', { contestId }],
        queryFn: () => getContest(contestId),
      },
      {
        queryKey: ['contestRanking', { contestId, page }],
        queryFn: () => getContestRanking({ contestId, page }),
      },
    ],
  });

  const problem = problemListResult?.data;
  const contestQuestion = contestProblemListResult?.data;
  const myRanking = contestMyRankingListResult?.data;
  const contest = contestListResult?.data;
  const contestRanking = contestRankingListResult?.data;

  return { problem, contestQuestion, myRanking, contest, contestRanking };
};
