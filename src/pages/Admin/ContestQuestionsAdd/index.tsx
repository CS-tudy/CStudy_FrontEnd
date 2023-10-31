import { FormBody } from 'components/commons/Admin/FormBody/style';
import Button from 'components/commons/Button/Button';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import ContentHeaderWrapper from 'components/commons/ContentHeaderWrapper';
import Table from 'components/commons/Table';
import AdminContestTablelists from 'components/unit/ContestQuestion/AdminContestTablelists';
import { useMixContestDetailAll } from 'hooks/@query/@GETmixed/useMixContestDetailAll';
import { useAddContestProblem } from 'hooks/@query/contest/useAddContestProblem';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { ProblemContent } from 'types/api';
import AdminContainer from '../AdminContainer';
import { useGetProblemList } from 'hooks/@query/problem/useGetProblemList';
import { AdminBtn } from 'components/commons/Admin/AdminInput/style';

const ContestQuestionsAdd = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { contestId } = useParams();
  const navigate = useNavigate();

  const problemList = useGetProblemList({
    questionTitle: '',
    categoryTitle: '',
  });
  const page = 0;
  const { contestQuestion } = useMixContestDetailAll({
    contestId,
    page,
  } as {
    contestId: string;
    page: number;
  });

  const filterQuestion = problemList?.content?.filter(
    ({ questionId: problemQuestionId }) => {
      return !contestQuestion?.some(
        ({ questionId: contestQuestionId }: { questionId: number }) =>
          problemQuestionId === contestQuestionId,
      );
    },
  );
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      competitionId: contestId,
      questionIds: [],
    },
  });

  const handleIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  const AddContestQuestion = useAddContestProblem({ handleIsLoading });

  const onSubmit: SubmitHandler<FieldValues> = () => {
    const form = getValues();
    console.log(form);
    AddContestQuestion(form);
    reset();
  };

  return (
    <AdminContainer>
      <ContentHeaderWrapper />
      <ContentBodyWrapper>
        <FormBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Table
              white
              colRate={['15%', '65%', '20%']}
              title={['문제번호', '문제제목', '문제선택']}
            >
              <AdminContestTablelists
                filterQuestion={filterQuestion as ProblemContent[]}
                register={register}
                errors={errors}
              />
            </Table>
            <AdminBtn>
              <Button
                type="submit"
                variant="primary"
                size="large"
                disabled={isLoading}
              >
                문제등록하기
              </Button>
              <Button
                type="button"
                onClick={() => navigate(-1)}
                variant="gray"
                size="large"
                disabled={isLoading}
              >
                돌아가기
              </Button>
            </AdminBtn>
          </form>
        </FormBody>
      </ContentBodyWrapper>
    </AdminContainer>
  );
};

export default ContestQuestionsAdd;
