import { ContestMyRank, IContestRank } from 'types/api';
import ContestRankTBody from '../ContestRankTBody';
import ContestRankTHead from '../ContestRankTHead';
import * as S from './style';
import Pagination from 'components/commons/Pagination';

interface ContestRankProps {
  contestRank: IContestRank;
  totalQuestion: number;
  myRank: ContestMyRank;
  page: number;
  handlePage: (page: number) => void;
}

const ContestRank = ({ contestRank }: ContestRankProps) => {
  return (
    <S.Wrapper>
      <div style={{ marginLeft: '3rem' }}>
        <h2>대회랭킹</h2>
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
            // totalQuestion={totalQuestion}
          />
        </S.StyledTable>
        {/* {contestRank?.totalPages > 1 && (
        <S.PaginationWrapper>
          <Pagination
            white
            totalPages={contestRank?.totalPages as number}
            handlePage={handlePage}
            page={page}
          />
        </S.PaginationWrapper>
      )} */}
      </S.ContestRanking>
    </S.Wrapper>
  );
};

export default ContestRank;
