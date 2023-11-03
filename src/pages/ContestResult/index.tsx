import Container from 'components/commons/Container';
import ContentContainer from 'components/commons/ContentContainer';
import ContestResult from 'components/unit/Contest/ContestResult';
import useGetContestResult from 'hooks/@query/contest/useGetContestResult';
import { useParams } from 'react-router-dom';
import { IContestResult } from 'types/api';
import * as S from './style';

const ContestResultPage = () => {
  const { contestId } = useParams();

  const contestResult = useGetContestResult(contestId as string);
  console.log('result', contestResult);

  return (
    <>
      <ContentContainer>
        <Container>
          <ContestResult contestResult={contestResult as IContestResult} />
        </Container>
      </ContentContainer>
      <S.MarginBottom />
    </>
  );
};

export default ContestResultPage;
