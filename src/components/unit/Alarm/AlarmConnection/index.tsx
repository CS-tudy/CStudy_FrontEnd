import { getAlarm } from 'api/alarm';
import { useState, useEffect } from 'react';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { getUserTokens } from 'repository/auth';
import { setAlarms } from 'hooks/@redux/alarmSlice';
import { useDispatch } from 'react-redux';

const AlarmConnection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAlarms = async () => {
      try {
        const alarmsData = await getAlarm();
        dispatch(setAlarms(alarmsData));
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlarms();
  }, []);

  const tokens = getUserTokens();
  const url = 'http://localhost:8080/api/alarm/subscribe';

  useEffect(() => {
    const EventSource = EventSourcePolyfill;

    const eventSource = new EventSource(url, {
      headers: {
        Authorization: `Bearer ${tokens?.accessToken}`,
      },
    });

    eventSource.onopen = () => {
      console.log('connection opened');
    };

    eventSource.addEventListener('alarm', function (event) {
      console.log('alarm:', event);
      // console.log('alarms', alarms);
    });

    eventSource.addEventListener('error', function (event) {
      console.log(event);
      if (event.target.readyState === EventSource.CLOSED) {
        console.log('eventsource closed (' + event.target.readyState + ')');
      }

      eventSource.close();
    });
  }, []);

  return <div></div>;
};

export default AlarmConnection;
