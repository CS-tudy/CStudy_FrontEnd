import { ContestMyRank, IContestRank } from 'types/api';
import ContestRankTBody from '../ContestRankTBody';
import ContestRankTHead from '../ContestRankTHead';
import * as S from './style';
import Pagination from 'components/commons/Pagination';

interface ContestRankProps {
  contestRank: IContestRank;
  totalQuestion: number;
  myRank?: ContestMyRank;
  page: number;
  handlePage: (page: number) => void;
}

const ContestRank = ({
  contestRank,
  totalQuestion,
  page,
  handlePage,
}: ContestRankProps) => {
  return (
    <S.Wrapper>
      <div style={{ marginLeft: '3rem' }}>
        <S.Title>랭킹</S.Title>
      </div>
      <S.ContestRanking>
        <S.RankingTitle>
          {/* 랭킹 */}
          {/* {!!myRanking?.['ranking'] && (
          <span>나의 랭킹 : {myRanking?.['ranking']}</span>
        )} */}
        </S.RankingTitle>
        <S.StyledTable>
          <ContestRankTHead />
          <ContestRankTBody
            contestRank={contestRank}
            totalQuestion={totalQuestion}
          />
        </S.StyledTable>
      </S.ContestRanking>
      {contestRank?.totalPages > 0 && (
        <S.PaginationWrapper>
          <Pagination
            white
            totalPages={contestRank?.totalPages as number}
            handlePage={handlePage}
            page={page}
          />
        </S.PaginationWrapper>
      )}
    </S.Wrapper>
  );
};

export default ContestRank;
