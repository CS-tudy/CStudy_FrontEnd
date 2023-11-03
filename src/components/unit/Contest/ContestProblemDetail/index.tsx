import useGetContestProblem from 'hooks/@query/contest/useGetContestProblem';
import * as S from './style';
import { ContestProblem } from 'types/api';
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import { useEffect, useState } from 'react';
import formatDate from 'libs/formatDate';
import Button from 'components/commons/Button/Button';
import { useSubmitContest } from 'hooks/@query/contest/useSubmitContest';
import { UseSubmitContestProps } from 'types/contest';
import ContentContainer from 'components/commons/ContentContainer';
import Container from 'components/commons/Container';

interface ContestProblemDetailProps {
  quizData: ContestProblem[];
  competitionId?: string;
}

const ContestProblemDetail = ({
  quizData,
  competitionId,
}: ContestProblemDetailProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const contestProblem = useGetContestProblem(competitionId as string);

  console.log('problem', contestProblem);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      competitionId,
      endTime: '2023-01-01 00-00',
      questions: quizData?.map(() => ({
        questionId: 0,
        choiceNumber: 0,
      })),
    },
  });

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(curIndex => curIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(curIndex => curIndex + 1);
    }
  };

  const handleIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  const { fields } = useFieldArray({ control, name: 'questions' });
  console.log('field', fields);
  const SubmitContest = useSubmitContest({
    handleIsLoading,
    competitionId,
  } as UseSubmitContestProps);

  const onSubmit: SubmitHandler<FieldValues> = data => {
    console.log(data);
    SubmitContest(data);
  };

  useEffect(() => {
    reset({
      competitionId,
      endTime: formatDate(new Date(), { second: true }),
      questions: quizData?.map(question => ({
        questionNumber: question.questionId,
        questionId: question.questionId,
      })),
    });
  }, [quizData, competitionId, reset]);

  return (
    <ContentContainer>
      <S.FormContainer>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          {fields?.map((field, index) => (
            <div
              key={field.id}
              style={{ display: currentIndex === index ? 'block' : 'none' }}
            >
              <S.ContestProblemDesc>
                {index + 1}. {quizData[index].description}
              </S.ContestProblemDesc>
              <S.ContestFieldWrapper>
                {quizData[index].choices?.map(choice => (
                  <S.ContestField key={choice.number}>
                    <S.ContestInput
                      type="radio"
                      {...register(`questions.${index}.choiceNumber`)}
                      value={choice.number}
                      errors={errors}
                      data-count={choice.number}
                    />
                    <span>{choice.content}</span>
                  </S.ContestField>
                ))}
              </S.ContestFieldWrapper>
              <input
                type="hidden"
                {...register(`questions.${index}.questionId`, {
                  required: true,
                })}
                value={quizData[index].questionId}
              />
              <S.ButtonWrapper>
                {currentIndex > 0 && (
                  <Button
                    type="button"
                    variant="gray"
                    size="medium"
                    onClick={handlePrevClick}
                  >
                    이전
                  </Button>
                )}
                {currentIndex < quizData.length - 1 ? (
                  <Button
                    type="button"
                    variant="primary"
                    size="medium"
                    disabled={isLoading}
                    onClick={handleNextClick}
                  >
                    다음
                  </Button>
                ) : (
                  <S.SubmitButton type="submit" disabled={isLoading}>
                    제출
                  </S.SubmitButton>
                )}
              </S.ButtonWrapper>
            </div>
          ))}
        </S.Form>
      </S.FormContainer>
      {/* </Container> */}
    </ContentContainer>
  );
};

export default ContestProblemDetail;
