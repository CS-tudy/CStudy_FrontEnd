import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IProblem } from 'types/api';
import ChoiceList from '../ChoiceList';
import * as S from './style';

interface ProblemFormProps {
  problem: IProblem;
  register?: UseFormRegister<FieldValues>;
}

const ProblemDetailContent = ({ problem, register }: ProblemFormProps) => {
  return (
    <S.ProblemContentWrapper>
      <S.ProblemContentTitle>
        정답을 맞추면 답과 해설을 확인할 수 있습니다.
      </S.ProblemContentTitle>
      <ChoiceList choiceList={problem?.choices} register={register} />
    </S.ProblemContentWrapper>
  );
};

export default ProblemDetailContent;
