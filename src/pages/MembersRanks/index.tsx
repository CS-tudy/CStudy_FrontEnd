import Container from 'components/commons/Container';
import ContentContainer from 'components/commons/ContentContainer';
import Rank from 'components/unit/Rank';
import { useSelector } from 'react-redux';

const MembersRanks = () => {
  const requestFilter = useSelector((state: any) => state.rootReducer);
  console.log(requestFilter);

  return (
    <ContentContainer>
      <Container>
        <Rank />
      </Container>
    </ContentContainer>
  );
};

export default MembersRanks;
