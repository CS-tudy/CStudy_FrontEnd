import ContestProblemDetail from 'components/unit/Contest/ContestProblemDetail';
import useGetContestProblem from 'hooks/@query/contest/useGetContestProblem';
import Toast from 'libs/Toast';
import { useParams } from 'react-router-dom';
import { ContestProblem as TContestProblem } from 'types/api';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ContestProblem = () => {
  const { contestId: TContestId } = useParams();
  const contestId: string = TContestId ?? '';
  const navigate = useNavigate();

  const contestProblem = useGetContestProblem(contestId as string);

  useEffect(() => {
    if (contestProblem?.length === 0) {
      navigate(`/contest/${contestId}`);
      Toast.error('대회 문제를 생성해주세요.');
    }
  }, [contestProblem, contestId, navigate]);
  return (
    <>
      {contestProblem?.length !== 0 && (
        <ContestProblemDetail
          quizData={contestProblem as TContestProblem[]}
          competitionId={contestId as string}
        />
      )}
    </>
  );
};

export default ContestProblem;
