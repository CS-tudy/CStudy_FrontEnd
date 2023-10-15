import Button from 'components/commons/Button/Button';
import Container from 'components/commons/Container';
import MiniContainer from 'components/commons/MiniContainer';
import ContestInfo from 'components/unit/ContestDetail/ContestInfo';
import ContestRank from 'components/unit/ContestDetail/ContestRank';
import useGetContest from 'hooks/@query/contest/useGetContest';
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
          <h2></h2>
        </div>
        <div
          style={{
            marginBottom: '3rem',
          }}
        >
          <Button variant="green" size="large" onClick={handleNavigateMyResult}>
            나의 대회 결과
          </Button>
          <Button variant="primary" size="medium">
            대회 참여
          </Button>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <ContestInfo />
        <ContestRank />
      </div>
    </MiniContainer>
  );
};

export default ContestDetail;
