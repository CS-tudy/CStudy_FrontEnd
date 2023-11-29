import { FieldValues, useForm } from 'react-hook-form';
import * as S from './style';
import useGetNoticeList from 'hooks/@query/board/useGetNoticeList';
import useNoticeFilter from 'hooks/Notice/useNoticeFilter';
import Pagination from 'components/commons/Pagination';
import NoticeList from 'components/unit/Board';
import { RequestNoticeList } from 'types/api';
import NoData from 'components/commons/NoData';
import { useState } from 'react';
import Container from 'components/commons/Container';
import { GoSearch } from 'react-icons/go';
import ContentHeaderWrapper from 'components/commons/ContentHeaderWrapper';
import ContainerBottom from 'components/commons/ContainerBottom';
import ContainerTop from 'components/commons/ContainerTop';
import { RxTriangleDown } from 'react-icons/rx';
import ContentContainer from 'components/commons/ContentContainer';

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

  const handleNoticeEnterKey = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <>
      <ContentContainer>
        {/* <S.FilterWrapper> */}
        <ContentHeaderWrapper
          Text="공지사항 생성"
          adminLink="/admin/createnotice"
        >
          <S.SearchWrapper>
            <S.Searchbar>
              <S.SearchInput
                type="text"
                {...register(selectedSearchOption, {
                  required: '검색어를 입력해주세요.',
                })}
                onKeyDown={handleNoticeEnterKey}
              />
              <S.SearchIcon>
                <button type="submit" onClick={handleSubmit(onSubmit)}>
                  <GoSearch size="18" />
                </button>
              </S.SearchIcon>
            </S.Searchbar>
            {/* <label> */}
            <S.Select>
              <S.OptionList
                className="optionList"
                {...register('searchOption')}
                onChange={e => {
                  setSelectedSearchOption(e.target.value);
                }}
              >
                {options.map(option => (
                  <S.OptionItem key={option.value} value={option.value}>
                    {option.label}
                  </S.OptionItem>
                ))}
              </S.OptionList>
              <S.Button>
                <span className="arrow">
                  <RxTriangleDown size={20} />
                </span>
              </S.Button>
            </S.Select>
            {/* </label> */}
          </S.SearchWrapper>
        </ContentHeaderWrapper>
        {/* </S.FilterWrapper> */}

        <Container padding={true}>
          <NoticeList noticeList={noticeList as RequestNoticeList} />
          {noticeList?.numberOfElements === 0 ? (
            <NoData>게시글이 없습니다 다른 제목으로 입력해주세요.</NoData>
          ) : (
            <></>
          )}
        </Container>
        {(noticeList?.totalPages as number) > 0 && (
          <ContainerBottom>
            <Pagination
              totalPages={noticeList?.totalPages as number}
              handlePage={handlePage}
              page={noticeFilter.pageNumber as number}
            />{' '}
          </ContainerBottom>
        )}
      </ContentContainer>
    </>
  );
};

export default Notice;
