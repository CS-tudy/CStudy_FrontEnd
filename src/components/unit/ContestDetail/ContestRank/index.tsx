import ContestRankTBody from '../ContestRankTBody';
import ContestRankTHead from '../ContestRankTHead';
import * as S from './style';

const ContestRank = () => {
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
          // contestRanking={contestRanking}
          // totalQuestion={totalQuestion}
          />
        </S.StyledTable>
        {/* {contestRanking?.totalPages > 1 && (
        <S.PaginationWrapper>
          <Pagination
            white
            totalPages={contestRanking?.totalPages as number}
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
