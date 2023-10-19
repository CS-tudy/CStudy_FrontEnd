import Container from 'components/commons/Container';
import Rank from 'components/unit/Rank';
import { useSelector } from 'react-redux';

const MembersRanks = () => {
  const requestFilter = useSelector((state: any) => state.rootReducer);
  console.log(requestFilter);

  return (
    <Container>
      <Rank />
    </Container>
  );
};

export default MembersRanks;
