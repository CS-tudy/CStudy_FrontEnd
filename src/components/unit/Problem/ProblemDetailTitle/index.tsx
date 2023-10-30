import { IProblem } from 'types/api';
import * as S from './style';

interface ProblemDetailTitleProps {
  problem: IProblem;
  time: number;
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
