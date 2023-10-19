import ContestProblemDetail from 'components/unit/Contest/ContestProblemDetail';
import useGetContestProblem from 'hooks/@query/contest/useGetContestProblem';
import { useNavigate, useParams } from 'react-router-dom';
import { ContestProblem as TContestProblem } from 'types/api';

const ContestProblem = () => {
  const { contestId } = useParams();
  const navigate = useNavigate();

  const contestProblem = useGetContestProblem(contestId as string);
  console.log('problem', contestProblem);

  return (
    <ContestProblemDetail
      quizData={contestProblem as TContestProblem[]}
      competitionId={contestId as string}
    />
  );
};

export default ContestProblem;
