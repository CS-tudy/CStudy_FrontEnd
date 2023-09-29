import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import ContentContainer from 'components/commons/ContentContainer';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import * as S from './style';
import useGetNoticeList from 'hooks/@query/board/useGetNoticeList';
import useNoticeFilter from 'hooks/Notice/useNoticeFilter';
import Pagination from 'components/commons/Pagination';
import NoticeList from 'components/unit/Board';
import { RequestNoticeList } from 'types/api';
import NoData from 'components/commons/NoData';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import { useState } from 'react';

const Notice = () => {
  const { register, control, handleSubmit, setValue, reset } =
    useForm<FieldValues>({
      defaultValues: {
        title: '',
        content: '',
        searchOption: 'title',
      },
    });
  const { noticeFilter, onSubmit, handlePage } = useNoticeFilter();
  const [selectedSearchOption, setSelectedSearchOption] = useState('title');
  const options = [
    { label: '제목', value: 'title' },
    { label: '내용', value: 'content' },
  ];

  const noticeList = useGetNoticeList({
    page: noticeFilter.pageNumber,
    query: noticeFilter.query,
    title: noticeFilter.SearchTitle,
    content: noticeFilter.SearchContent,
  });
  console.log(noticeFilter);

  return (
    <>
      <ContentContainer>
        <ContentBodyWrapper>
          <S.SearchWrapper>
            <S.SearchInput
              type="text"
              {...register(selectedSearchOption, {
                required: '검색어를 입력해주세요.',
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
            <label>
              Search Option:
              <select
                {...register('searchOption')}
                onChange={e => {
                  setSelectedSearchOption(e.target.value);
                }}
              >
                {options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
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
