import { getAlarm } from 'api/alarm';
import Container from 'components/commons/Container';
import ContentContainer from 'components/commons/ContentContainer';
import Rank from 'components/unit/Rank';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { EventSourcePolyfill } from 'event-source-polyfill';
import { getUserTokens } from 'repository/auth';
import { useGetAlarms } from 'hooks/@query/alarm/useGetAlarms';

const MembersRanks = () => {
  // const tokens = getUserTokens();

  // const url = 'http://localhost:8080/api/alarm/subscribe';

  // useEffect(() => {
  //   const EventSource = EventSourcePolyfill;

  //   const eventSource = new EventSource(url, {
  //     headers: {
  //       Authorization: `Bearer ${tokens?.accessToken}`,
  //     },
  //   });

  //   eventSource.onopen = () => {
  //     console.log('connection opened');
  //   };

  //   eventSource.addEventListener('alarm', function (event) {
  //     console.log('alarm:', event);
  //     const alarms = useGetAlarms();
  //     console.log('alarms', alarms);
  //   });

  //   eventSource.addEventListener('error', function (event) {
  //     console.log(event);

  //     eventSource.close();
  //   });
  // }, []);

  return (
    <ContentContainer>
      <Container>
        <Rank />
      </Container>
    </ContentContainer>
  );
};

export default MembersRanks;
