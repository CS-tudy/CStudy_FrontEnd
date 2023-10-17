import Container from 'components/commons/Container';
import ContestResult from 'components/unit/Contest/ContestResult';
import useGetContestResult from 'hooks/@query/contest/useGetContestResult';
import { useLocation, useParams } from 'react-router-dom';

const ContestResultPage = () => {
  const { contestId } = useParams();
  // const { state: hasParticipatedInContest } = useLocation();
  // console.log(hasParticipatedInContest);

  const contestResult = useGetContestResult(contestId as string);
  console.log('result', contestResult);

  return (
    <Container>
      <ContestResult />
    </Container>
  );
};

export default ContestResultPage;
