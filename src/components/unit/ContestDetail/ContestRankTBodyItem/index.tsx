import * as S from './style';

const ContestRankTBodyItem = () => {
  return (
    <S.StyledTr
    // key={ranking.memberId}
    >
      <S.StyledTd>{/* {ranking.name} */}test</S.StyledTd>
      <S.StyledTd>{/* {ranking.score} / {totalQuestion} */}2 / 3</S.StyledTd>
      <S.StyledTd>
        {/* {ranking.endTime ? ranking.endTime : '제출한 시험지가 없습니다'} */}
        2024-07-18 21:08
      </S.StyledTd>
    </S.StyledTr>
  );
};

export default ContestRankTBodyItem;
