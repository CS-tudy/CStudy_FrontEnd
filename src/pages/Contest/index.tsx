import Container from 'components/commons/Container';
import Filter from 'components/commons/Filter';
import NoData from 'components/commons/NoData';
import Table from 'components/commons/Table';
import ContestList from 'components/unit/Contest/ContestListTableBody';
import useGetContestList from 'hooks/@query/contest/useGetContestList';
import { ContestInfo } from 'types/api';
import * as S from './style';
import ContainerTop from 'components/commons/ContainerTop';
import useContestFilter from 'hooks/Contest/useContestFilter';
import ContainerBottom from 'components/commons/ContainerBottom';
import Pagination from 'components/commons/Pagination';

const Contest = () => {
  const tableRate = ['45%', '15%', '40%'];
  const tableTitle = ['대회명', '최대 인원수', '기간'];

  const { contestFilter, isActive, handlePage, handleToggle } =
    useContestFilter();
  const contestList = useGetContestList({
    query: contestFilter.query,
    page: 0,
  });

  return (
    <>
      <ContainerTop>
        <S.ButtonWrapper>
          <Filter className={isActive} onClick={handleToggle}>
            종료된 대회 보기
          </Filter>
        </S.ButtonWrapper>
      </ContainerTop>
      <S.ContainerMarginTop />
      <Container>
        {contestList?.totalElements === 0 ? (
          <tr>
            <td colSpan={3}>
              <NoData>대회가 없습니다.</NoData>
            </td>
          </tr>
        ) : (
          <Table colRate={tableRate} title={tableTitle}>
            <ContestList
              contestList={contestList?.content as ContestInfo[]}
              contestFilter={contestFilter}
              isActive={isActive}
              totalPages={contestList?.totalPages as number}
              handlePage={handlePage}
            />
          </Table>
        )}
      </Container>
      <ContainerBottom>
        {(contestList?.totalPages as number) > 0 && (
          <Pagination
            totalPages={contestList?.totalPages as number}
            handlePage={handlePage}
            page={contestFilter.pageNumber}
            white
          />
        )}
      </ContainerBottom>
    </>
  );
};

export default Contest;
