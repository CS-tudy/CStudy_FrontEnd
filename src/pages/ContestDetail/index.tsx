import Button from 'components/commons/Button/Button';
import Container from 'components/commons/Container';
import MiniContainer from 'components/commons/MiniContainer';
import ContestInfoTable from 'components/unit/ContestDetail/ContestInfoTable';
import ContestDetailRankTable from 'components/unit/ContestDetail/ContestRankTable';
import { useNavigate } from 'react-router-dom';

const ContestDetail = () => {
  const navigate = useNavigate();
  const handleNavigateMyResult = () => {
    navigate(`/contest/1/result`);
  };

  return (
    <MiniContainer>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h2>대회정보</h2>
        </div>
        <div>
          <Button variant="green" size="large" onClick={handleNavigateMyResult}>
            나의 대회 결과
          </Button>
          <Button variant="primary" size="medium">
            대회 참여
          </Button>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <ContestInfoTable />
        <ContestDetailRankTable />
      </div>
    </MiniContainer>
  );
};

export default ContestDetail;
