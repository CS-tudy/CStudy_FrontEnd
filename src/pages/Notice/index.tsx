import ContentContainer from 'components/commons/ContentContainer';
import { FieldValues, useForm } from 'react-hook-form';
import * as S from './style';
import useGetNoticeList from 'hooks/@query/board/useGetNoticeList';
import useNoticeFilter from 'hooks/Notice/useNoticeFilter';
import Pagination from 'components/commons/Pagination';
import NoticeList from 'components/unit/Board';
import { RequestNoticeList } from 'types/api';
import NoData from 'components/commons/NoData';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';

const Notice = () => {
  const { register, handleSubmit, setValue, reset } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      content: '',
    },
  });
  const { noticeFilter, handleToggle, onSubmit, handlePage } =
    useNoticeFilter();

  const noticeList = useGetNoticeList({
    page: noticeFilter.pageNumber,
    query: noticeFilter.query,
    title: noticeFilter.SearchTitle,
    content: noticeFilter.SearchContent,
  });

  return (
    <>
      <ContentContainer>
        <ContentBodyWrapper>
          <S.SearchWrapper>
            <S.SearchInput
              type="text"
              {...register('title', {
                required: '이름을 입력해주세요.',
              })}
            />
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              // variant="primary"
              // size="medium"
            >
              검색
            </button>
          </S.SearchWrapper>
          <NoticeList noticeList={noticeList as RequestNoticeList} />
          {noticeList?.numberOfElements === 0 && (
            <NoData>게시글이 없습니다 다른 제목으로 입력해주세요.</NoData>
          )}
          <S.PaginationWrapper>
            <Pagination
              totalPages={noticeList?.totalPages as number}
              handlePage={handlePage}
              page={noticeList?.number as number}
            />
          </S.PaginationWrapper>
        </ContentBodyWrapper>
      </ContentContainer>
      ;
    </>
  );
};

export default Notice;
