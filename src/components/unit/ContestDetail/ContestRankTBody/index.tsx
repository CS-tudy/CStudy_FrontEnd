import ContestRankTBodyList from '../ContestRankTBodyList';
import * as S from './style';

// interface ContestRankTBodyProps {
//     contestRanking: ContestRanking;
//     totalQuestion: number;
// }

const ContestRankTBody = () => {
  return (
    <S.StyledTbody>
      {/* {(contestRanking?.totalElements as number) === 0 ?(
      <S.StyledTr>
        <S.StyledTd colSpan={3}>등록된 참가자가 없습니다.</S.StyledTd>
      </S.StyledTr>
      ) : ( */}
      {/* <ContestDetailRankingTBodyLists contestRanking={contestRanking} totalQuestion={totalQuestion} /> */}
      <ContestRankTBodyList />
      {/* ))} */}
    </S.StyledTbody>
  );
};

export default ContestRankTBody;
