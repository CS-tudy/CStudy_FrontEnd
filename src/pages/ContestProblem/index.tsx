import ContestProblemDetail from 'components/unit/Contest/ContestProblemDetail';
import useGetContestProblem from 'hooks/@query/contest/useGetContestProblem';
import { useParams } from 'react-router-dom';
import { ContestProblem as TContestProblem } from 'types/api';

const ContestProblem = () => {
  const { contestId: TContestId } = useParams();
  const contestId: string = TContestId ?? '';

  const contestProblem = useGetContestProblem(contestId as string);
  return (
    <ContestProblemDetail
      quizData={contestProblem as TContestProblem[]}
      competitionId={contestId as string}
    />
  );
};

export default ContestProblem;
