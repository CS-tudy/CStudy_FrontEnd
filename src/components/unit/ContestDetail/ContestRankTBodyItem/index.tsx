import { ContestRankContent } from 'types/api';
import * as S from './style';

interface ContestRankTBodyItemProps {
  rank: ContestRankContent;
  totalQuestion: number;
}

const ContestRankTBodyItem = ({
  rank,
  totalQuestion,
}: ContestRankTBodyItemProps) => {
  return (
    <S.StyledTr key={rank.memberId}>
      <S.StyledTd>{rank.name}</S.StyledTd>
      <S.StyledTd>
        {rank.score} / {totalQuestion}
      </S.StyledTd>
      <S.StyledTd>
        {rank.endTime ? rank.endTime : '제출한 시험지가 없습니다'}
      </S.StyledTd>
    </S.StyledTr>
  );
};

export default ContestRankTBodyItem;
