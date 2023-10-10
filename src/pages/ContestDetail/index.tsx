import Container from 'components/commons/Container';
import ContestInfoTable from 'components/unit/ContestDetail/ContestInfoTable';
import ContestDetailRankTable from 'components/unit/ContestDetail/ContestRankTable';

const ContestDetail = () => {
  return (
    <>
      <Container>
        <ContestInfoTable />
        <ContestDetailRankTable />
      </Container>
    </>
  );
};

export default ContestDetail;
