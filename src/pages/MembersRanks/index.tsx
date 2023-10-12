import Container from 'components/commons/Container';
import Ranking from 'components/unit/Rank';
import { useSelector } from 'react-redux';

const MembersRanks = () => {
  const requestFilter = useSelector((state: any) => state.rootReducer);
  console.log(requestFilter);

  return (
    <Container>
      <Ranking />
    </Container>
  );
};

export default MembersRanks;
