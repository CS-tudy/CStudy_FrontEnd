import * as S from './style';

const ContestDetailRankTable = () => {
  return (
    <S.Wrapper>
      <S.ContestRanking>
        <S.RankingTitle>
          대회랭킹
          {/* {!!myRanking?.['ranking'] && (
          <span>나의 랭킹 : {myRanking?.['ranking']}</span>
        )} */}
        </S.RankingTitle>
        <S.StyledTable>
          {/* <ContestDetailRankingTHead />
        <ContestDetailRankingTBody
          contestRanking={contestRanking}
          totalQuestion={totalQuestion}
        /> */}
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

export default ContestDetailRankTable;
