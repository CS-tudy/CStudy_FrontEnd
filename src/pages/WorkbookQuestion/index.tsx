import { useNavigate, useParams } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { WorkbookQuestionContent } from 'types/api';
import * as S from './style';
import ContentContainer from 'components/commons/ContentContainer';
import ContentHeaderWrapper from 'components/commons/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import Table from 'components/commons/Table';
import Pagination from 'components/commons/Pagination';
import WorkbookQuestionTableLists from 'components/unit/WorkbookQuestion/WorkbookQuestionTableLists';
import { isAdmin } from 'repository/auth';
import WorkbookQuestionAdminOptionGroup from 'components/unit/WorkbookQuestion/WorkbookQuestionAdminOption';
import { useMixWorkbookWorkbookQuestion } from 'hooks/@query/workbook/useMixWorkbookWorkbookQuestion';
import { Button } from 'components/commons/Button/Style';

const WorkbookQuestion = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      questionIds: [],
    },
  });

  const { workbook, workbookQuestion } = useMixWorkbookWorkbookQuestion({
    questionId,
    page,
  } as {
    questionId: string;
    page: number;
  });

  console.log(workbookQuestion);

  const handlePage = useCallback((page: number) => {
    setPage(page);
  }, []);

  return (
    <ContentContainer>
      <ContentHeaderWrapper admin desc={workbook?.description}>
        <S.CreateInfo>
          출시일: {workbook?.createdAt}
          <Button
            type="button"
            onClick={() => navigate(-1)}
            variant="gray"
            size="mideum"
          >
            돌아가기
          </Button>
        </S.CreateInfo>
      </ContentHeaderWrapper>
      <ContentBodyWrapper>
        <S.AdminWrapper>
          <WorkbookQuestionAdminOptionGroup
            handleSubmit={handleSubmit}
            reset={reset}
            questionId={questionId as string}
          />
        </S.AdminWrapper>

        <Table
          colRate={isAdmin() ? ['20%', '60%', '20%'] : ['30%', '70%']}
          title={
            isAdmin()
              ? ['문제번호', '문제이름', '문제삭제']
              : ['문제번호', '문제이름']
          }
        >
          <WorkbookQuestionTableLists
            workbookContent={
              workbookQuestion?.content as WorkbookQuestionContent[]
            }
            register={register}
            errors={errors}
          />
        </Table>
        <S.PaginationWrapper>
          <Pagination
            totalPages={workbookQuestion?.totalPages as number}
            handlePage={handlePage}
            page={page}
          />
        </S.PaginationWrapper>
      </ContentBodyWrapper>
    </ContentContainer>
  );
};

export default WorkbookQuestion;
