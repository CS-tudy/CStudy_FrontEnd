import { Problem } from 'types/api';
import * as S from './style';

interface ProblemDetailTitleProps {
  problem: Problem;
}

const ProblemDetailTitle = ({ problem }: ProblemDetailTitleProps) => {
  return (
    <S.BodyTitleWrapper>
      <S.ProblemBodyTitle>{problem?.title}</S.ProblemBodyTitle>
      <S.ProblemCategory>{problem?.categoryTitle}</S.ProblemCategory>
    </S.BodyTitleWrapper>
  );
};

export default ProblemDetailTitle;
