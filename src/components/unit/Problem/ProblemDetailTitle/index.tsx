import { IProblem } from 'types/api';
import * as S from './style';
import { RxLapTimer } from 'react-icons/rx';

interface ProblemDetailTitleProps {
  problem: IProblem;
  time: number;
}

const ProblemDetailTitle = ({ problem, time }: ProblemDetailTitleProps) => {
  return (
    <S.BodyTitleWrapper>
      <S.Div1>
        <S.ProblemBodyTitle>{problem?.title}</S.ProblemBodyTitle>
        <S.ProblemCategory>{problem?.categoryTitle}</S.ProblemCategory>
      </S.Div1>
      <S.Div2>
        <S.Timer>
          <RxLapTimer size={20} />
          <S.Time>{time}</S.Time>
        </S.Timer>
      </S.Div2>
    </S.BodyTitleWrapper>
  );
};

export default ProblemDetailTitle;
