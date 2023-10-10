import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IProblem } from 'types/api';
import ChoiceList from '../ChoiceList';
import * as S from './style';

interface ProblemFormProps {
  problem: IProblem;
  register?: UseFormRegister<FieldValues>;
}

const ProblemDetailContent = ({ problem, register }: ProblemFormProps) => {
  // console.log(problem);
  return (
    <S.ProblemContentWrapper>
      <S.ProblemContentTitle>
        정답을 맞추면 답과 해설이 나오지만, 틀렸을 땐 인터렉션만 동작합니다.
      </S.ProblemContentTitle>
      <ChoiceList choiceList={problem?.choices} register={register} />
    </S.ProblemContentWrapper>
  );
};

export default ProblemDetailContent;
