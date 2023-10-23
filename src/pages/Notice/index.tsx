import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import ContentContainer from 'components/commons/ContentContainer';
import { FieldValues, useForm } from 'react-hook-form';
import * as S from './style';
import useGetNoticeList from 'hooks/@query/board/useGetNoticeList';
import useNoticeFilter from 'hooks/Notice/useNoticeFilter';
import Pagination from 'components/commons/Pagination';
import NoticeList from 'components/unit/Board';
import { RequestNoticeList } from 'types/api';
import NoData from 'components/commons/NoData';
import { useState } from 'react';
import { Button } from 'components/commons/Button/Style';
import Container from 'components/commons/Container';
import { GoSearch } from 'react-icons/go';
import useCategoryFilterSlice from 'hooks/@redux/Problem/useCategoryFilterSlice';
import Select from 'components/commons/Select';

const Notice = () => {
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      content: '',
      searchOption: 'title',
    },
  });
  const { noticeFilter, onSubmit, handlePage } = useNoticeFilter();
  const [selectedSearchOption, setSelectedSearchOption] = useState('title');
  const { category, categoryValue, categoryActive, handleCategoryClick } =
    useCategoryFilterSlice();

  // const options = [
  //   { label: '제목', value: 'title' },
  //   { label: '내용', value: 'content' },
  // ];
  const options = [
    { label: '제목', value: 'title' },
    { label: '내용', value: 'content' },
  ];

  const catagorys = ['제목', '내용'];

  const filterSelectIndex = [0, 1, 2];

  const noticeList = useGetNoticeList({
    page: noticeFilter.pageNumber,
    query: noticeFilter.query,
    title: noticeFilter.SearchTitle,
    content: noticeFilter.SearchContent,
  });

  return (
    <>
      <S.SearchWrapper>
        <S.Searchbar>
          <S.SearchInput
            type="text"
            {...register(selectedSearchOption, {
              required: '검색어를 입력해주세요.',
            })}
          />
          <S.SearchIcon>
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              // variant="primary"
              // size="medium"
            >
              <GoSearch size="18" />
            </button>
          </S.SearchIcon>
        </S.Searchbar>
        {/* <Select
          name={'제목'}
          handleActive={handleCategoryClick}
          isActive={categoryActive}
          options={catagorys}
          optionsValue={category}
          selectedIndex={filterSelectIndex}
        /> */}
        <label>
          <S.Select
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
          </S.Select>
        </label>
      </S.SearchWrapper>
      <Container>
        <NoticeList noticeList={noticeList as RequestNoticeList} />
        {noticeList?.numberOfElements === 0 && (
          <NoData>게시글이 없습니다 다른 제목으로 입력해주세요.</NoData>
        )}
        {(noticeList?.totalPages as number) > 0 && (
          <S.PaginationWrapper>
            <Pagination
              totalPages={noticeList?.totalPages as number}
              handlePage={handlePage}
              page={noticeFilter.pageNumber as number}
            />{' '}
          </S.PaginationWrapper>
        )}
      </Container>
    </>
  );
};

export default Notice;
