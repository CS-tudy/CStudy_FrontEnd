import Button from 'components/commons/Button/Button';
import * as S from './style';
import { useState } from 'react';
import { IProblem } from 'types/api';

interface ProblemDetailSubmitProps {
  isLoading?: boolean;
  Answer?: string;
  isAnswer?: boolean;
  timeCheck?: boolean;
  isAction?: boolean;
  problem?: IProblem;
}

const ProblemDetailSubmit = ({
  isAnswer,
  Answer,
  problem,
}: ProblemDetailSubmitProps) => {
  const [submitClick, setSubmitClick] = useState(false);
  console.log('status', problem?.status);
  return (
    <S.ProblemSubmitWrapper>
      {!problem?.status && (
        <Button
          type="submit"
          variant="primary"
          size="medium"
          onClick={() => {
            setSubmitClick(true);
          }}
        >
          제출
        </Button>
      )}
      {isAnswer && (
        <S.ProblemAnswerWrapper>
          <S.ProblemAnswerTitle>정답 :</S.ProblemAnswerTitle>
          <S.ProblemAnswerNumber>{Answer}</S.ProblemAnswerNumber>
        </S.ProblemAnswerWrapper>
      )}
      {!isAnswer && submitClick && (
        <S.ProblemAnswerWrapper>
          <S.ProblemAnswerTitle>오답입니다!</S.ProblemAnswerTitle>
        </S.ProblemAnswerWrapper>
      )}
    </S.ProblemSubmitWrapper>
  );
};

export default ProblemDetailSubmit;
