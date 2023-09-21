import { PropsWithChildren, memo } from 'react';
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { Problem } from 'types/api';
// import ProblemRenderTitle from '../ProblemRenderTitle';
// import ResultImage from 'components/@shared/ResultImage';
import * as S from './style';
import ProblemDetailContent from '../ProblemDetailContent';
import ProblemDetailSubmit from '../ProblemDetailSubmit';
import ProblemDetailTitle from '../ProblemDetailTitle';

// interface ProblemRenderProps {
//   problem: Problem;
//   Answer: string;
//   isAnswer: boolean;
//   isAction: boolean;
//   timeCheck: boolean;
//   register: UseFormRegister<FieldValues>;
//   handleSubmit: UseFormHandleSubmit<FieldValues>;
//   onSubmit: SubmitHandler<FieldValues>;
//   isLoading: boolean;
// }

const ProblemDetail = () =>
  //   {
  //   isLoading,
  //   problem,
  //   isAnswer,
  //   isAction,
  //   timeCheck,
  //   Answer,
  //   register,
  //   handleSubmit,
  //   onSubmit,
  //   children,
  // }: PropsWithChildren<ProblemDetailProps>
  {
    return (
      <S.Form
      // onSubmit={handleSubmit(onSubmit)}
      >
        <ProblemDetailTitle
        // problem={problem}
        />
        {/* {children} */}
        {/* <ResultImage
        isAnswer={isAnswer}
        isAction={isAction}
        timeCheck={timeCheck}
      /> */}
        <ProblemDetailContent
        // problem={problem} register={register}
        />
        <ProblemDetailSubmit
        // timeCheck={timeCheck}
        // isAnswer={isAnswer}
        // Answer={Answer}
        // isLoading={isLoading}
        />
      </S.Form>
    );
  };

export default ProblemDetail;
