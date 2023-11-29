import * as S from './style';
import useGetNoticeList from 'hooks/@query/board/useGetNoticeList';
import useNoticeFilter from 'hooks/Notice/useNoticeFilter';
import Pagination from 'components/commons/Pagination';
import NoticeList from 'components/unit/Board';
import { RequestNoticeList } from 'types/api';
import NoData from 'components/commons/NoData';
import Container from 'components/commons/Container';
import ContentHeaderWrapper from 'components/commons/ContentHeaderWrapper';
import ContainerBottom from 'components/commons/ContainerBottom';
import ContentContainer from 'components/commons/ContentContainer';
import SelectOptions from 'components/unit/Board/Select';
import Searchbar from 'components/unit/Board/SearchBar';

const Notice = () => {
  const { noticeFilter, onSubmit, handlePage, handleOptionChange } =
    useNoticeFilter();

  const noticeList = useGetNoticeList({
    page: noticeFilter.pageNumber,
    query: noticeFilter.query,
    serachOption: noticeFilter.SearchOption,
    value: noticeFilter.SearchValue,
  });

  return (
    <>
      <ContentContainer>
        <ContentHeaderWrapper
          Text="공지사항 생성"
          adminLink="/admin/createnotice"
        >
          <S.SearchWrapper>
            <Searchbar onSubmit={onSubmit} />
            <SelectOptions
              OptionChange={handleOptionChange}
              OptionValue={noticeFilter.SearchOption}
              Category={noticeFilter.SearchCategory}
            />
          </S.SearchWrapper>
        </ContentHeaderWrapper>

        <Container>
          <NoticeList noticeList={noticeList as RequestNoticeList} />
          {noticeList?.numberOfElements === 0 && (
            <NoData>게시글이 없습니다 다른 제목으로 입력해주세요.</NoData>
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
