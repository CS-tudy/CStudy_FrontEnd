import Button from 'components/commons/Button/Button';
import Container from 'components/commons/Container';
import ProblemDetail from 'components/unit/Problem/ProblemDetail';
import { useNavigate } from 'react-router-dom';

const ProblemDetailPage = () => {
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <div>
        {/* <Button variant="gray" size="medium" onClick={handleNavigateBack}>
          돌아가기
        </Button> */}
      </div>
      <ProblemDetail />
    </Container>
  );
};

export default ProblemDetailPage;
