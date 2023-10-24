import { FieldValues, useForm } from 'react-hook-form';
import useWorkbookFilter from 'hooks/Workbook/useWorkbookFilter';
import useGetWorkbookList from 'hooks/@query/workbook/useGetWorkbookList';
import { WorkbookList } from 'types/api';
import { Button } from 'components/commons/Button/Style';
import { GrPowerReset } from 'react-icons/gr';
import * as S from './style';
import NoData from 'components/commons/NoData';
import ContentHeaderWrapper from 'components/commons/ContentHeaderWrapper';
import ContentContainer from 'components/commons/ContentContainer';
import Pagination from 'components/commons/Pagination';
import WorkbookCards from 'components/unit/Workbook/WorkbookCards';
import Container from 'components/commons/Container';

const Workbook = () => {
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      search: '',
    },
  });
  const { workbookFilter, handlePage, onSubmit, handleReset } =
    useWorkbookFilter();

  const workbookList = useGetWorkbookList({
    page: workbookFilter.pageNum,
    title: workbookFilter.title,
    description: workbookFilter.description,
  });

  return (
    <ContentContainer>
      <ContentHeaderWrapper
        Text="문제집생성"
        adminLink="/workbook/admin/CreateWorkbook"
      >
        <S.SearchWrapper>
          <S.SearchInput
            type="text"
            {...register('search', { required: true })}
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="primary"
            size="small"
          >
            검색
          </Button>
          <Button variant="white" size="small" onClick={handleReset}>
            <GrPowerReset size={20}></GrPowerReset>
          </Button>
        </S.SearchWrapper>
      </ContentHeaderWrapper>
      <Container>
        {workbookList?.totalElements === 0 && (
          <NoData>문제집이 없습니다.</NoData>
        )}
        <WorkbookCards workbookList={workbookList as WorkbookList} />
        {(workbookList?.totalPages as number) > 1 && (
          <S.PaginationWrapper>
            <Pagination
              totalPages={workbookList?.totalPages as number}
              handlePage={handlePage}
              page={workbookFilter.pageNum}
              white
            />
          </S.PaginationWrapper>
        )}
      </Container>
    </ContentContainer>
  );
};

export default Workbook;
