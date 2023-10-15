import Container from 'components/commons/Container';
import Filter from 'components/commons/Filter';
import NoData from 'components/commons/NoData';
import Table from 'components/commons/Table';
import ContestList from 'components/unit/Contest/ContestListTableBody';
import useGetContestList from 'hooks/@query/contest/useGetContestList';
import { ContestInfo } from 'types/api';

const Contest = () => {
  const tableRate = ['45%', '15%', '40%'];
  const tableTitle = ['대회명', '최대 인원수', '기간'];

  const contestList = useGetContestList({ query: 'active', page: 0 });
  console.log('list', contestList);

  return (
    <>
      <Filter>종료된 대회 보기</Filter>
      <Container>
        <Table colRate={tableRate} title={tableTitle}>
          {contestList?.totalElements === 0 && (
            <tr>
              <td colSpan={3}>
                <NoData>대회가 없습니다.</NoData>
              </td>
            </tr>
          )}
          <ContestList contestList={contestList?.content as ContestInfo[]} />
        </Table>
      </Container>
    </>
  );
};

export default Contest;
