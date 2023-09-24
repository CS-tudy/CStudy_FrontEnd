import { FieldValues, UseFormRegister } from 'react-hook-form';
import * as S from './style';

interface ChoiceListProps {
  choiceList: {
    number: number;
    content: string;
  }[];
  register?: UseFormRegister<FieldValues>;
}

const ChoiceList = ({ choiceList, register }: ChoiceListProps) => {
  return (
    <S.ProblemOptionWrapper>
      {/* {choiceList?.map(({ number, content }) => ( */}
      {/* <S.ProblemOption key={number}> */}
      <S.ProblemOption>
        <S.ProblemNumber
          type="radio"
          {...(register && register('choiceNumber'))}
          required
          //   value={number}
          //   data-count={number}
        />
        <S.ProblemDesc>문제 보기1 입니다.</S.ProblemDesc>
      </S.ProblemOption>
      {/* ))} */}
    </S.ProblemOptionWrapper>
  );
};

export default ChoiceList;
