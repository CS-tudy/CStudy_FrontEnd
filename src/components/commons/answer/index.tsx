import * as S from './style';

interface AnswerProps {
  answer?: boolean;
  small?: boolean;
}

const Answer = ({ answer, small }: AnswerProps) => {
  return (
    <S.Answer small={small} isApproved={answer}>
      {answer ? '정답' : '오답'}
    </S.Answer>
  );
};

export default Answer;
