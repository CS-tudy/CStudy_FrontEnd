import { IContestRank } from 'types/api';
import ContestRankTBodyList from '../ContestRankTBodyList';
import * as S from './style';

interface ContestRankTBodyProps {
  contestRank: IContestRank;
  totalQuestion: number;
}

const ContestRankTBody = ({
  contestRank,
  totalQuestion,
}: ContestRankTBodyProps) => {
  return (
    <S.StyledTbody>
      {(contestRank?.totalElements as number) === 0 ? (
        <S.StyledTr>
          <S.StyledTd colSpan={3}>등록된 참가자가 없습니다.</S.StyledTd>
        </S.StyledTr>
      ) : (
        <ContestRankTBodyList
          contestRank={contestRank}
          totalQuestion={totalQuestion}
        />
      )}
    </S.StyledTbody>
  );
};

export default ContestRankTBody;
