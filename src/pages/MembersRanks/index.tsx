import { getAlarm } from 'api/alarm';
import Container from 'components/commons/Container';
import ContentContainer from 'components/commons/ContentContainer';
import Rank from 'components/unit/Rank';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { getUserTokens } from 'repository/auth';
import { useGetAlarms } from 'hooks/@query/alarm/useGetAlarms';
import AlarmConnection from 'components/unit/Alarm/AlarmConnection';

const MembersRanks = () => {
  return (
    <ContentContainer>
      <Container>
        <Rank />
      </Container>
    </ContentContainer>
  );
};

export default MembersRanks;
