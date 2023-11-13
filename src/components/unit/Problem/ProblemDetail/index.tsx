import { PropsWithChildren } from 'react';
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { IProblem } from 'types/api';
import * as S from './style';
import ProblemDetailContent from '../ProblemDetailContent';
import ProblemDetailSubmit from '../ProblemDetailSubmit';
import ProblemDetailTitle from '../ProblemDetailTitle';
import { useParams } from 'react-router-dom';
import LoadingSpinner from 'components/commons/LoadingSpinner';

interface ProblemDetailProps {
  problem: IProblem;
  Answer: string;
  isAnswer: boolean;
  isAction: boolean;
  timeCheck: boolean;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
  isLoading: boolean;
  time: number;
}

const ProblemDetail = ({
  isLoading,
  problem,
  isAnswer,
  isAction,
  timeCheck,
  time,
  Answer,
  register,
  handleSubmit,
  onSubmit,
  children,
}: PropsWithChildren<ProblemDetailProps>) => {
  if (!problem) {
    return <LoadingSpinner />;
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <ProblemDetailTitle problem={problem} time={time} />
      {children}
      <ProblemDetailContent problem={problem} register={register} />
      <ProblemDetailSubmit
        timeCheck={timeCheck}
        isAnswer={isAnswer}
        Answer={Answer}
        isLoading={isLoading}
        isAction={isAction}
      />
    </S.Form>
  );
};

export default ProblemDetail;
