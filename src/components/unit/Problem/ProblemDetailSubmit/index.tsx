import Button from 'components/commons/Button/Button';
import * as S from './style';

interface ProblemDetailSubmitProps {
  isLoading?: boolean;
  Answer?: string;
  isAnswer?: boolean;
  timeCheck?: boolean;
}

const ProblemDetailSubmit = ({
  isLoading,
  isAnswer,
  Answer,
  timeCheck,
}: ProblemDetailSubmitProps) => {
  return (
    <S.ProblemSubmitWrapper>
      <Button
        type="submit"
        variant="primary"
        size="medium"
        // disabled={isLoading}
      >
        제출
      </Button>
      {timeCheck && isAnswer && (
        <S.ProblemAnswerWrapper>
          <S.ProblemAnswerTitle>정답:</S.ProblemAnswerTitle>
          <S.ProblemAnswerNumber>{Answer}</S.ProblemAnswerNumber>
        </S.ProblemAnswerWrapper>
      )}
    </S.ProblemSubmitWrapper>
  );
};

export default ProblemDetailSubmit;
