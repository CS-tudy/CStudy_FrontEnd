import Container from 'components/commons/Container';
import Filter from 'components/commons/Filter';
import Table from 'components/commons/Table';
import ContestList from 'components/unit/Contest/ContestListTableBody';
import { useSelector } from 'react-redux';

const Contest = () => {
  const tableRate = ['45%', '15%', '40%'];
  const tableTitle = ['대회명', '최대 인원수', '기간'];

  return (
    <>
      <Filter>종료된 대회 보기</Filter>
      <Container>
        <Table colRate={tableRate} title={tableTitle}>
          <ContestList />
        </Table>
      </Container>
    </>
  );
};

export default Contest;
