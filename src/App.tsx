import { GlobalStyles } from 'styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Provider, useDispatch } from 'react-redux';
import store from 'stroe';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/Router';

import { getAlarm } from 'api/alarm';
import { useState, useEffect } from 'react';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { getUserTokens } from 'repository/auth';
import { setAlarms } from 'hooks/@redux/alarmSlice';

const queryClient = new QueryClient();

function App() {
  // const [alarms, setAlarms] = useState(null);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchAlarms = async () => {
  //     try {
  //       const alarmsData = await getAlarm();
  //       dispatch(setAlarms(alarmsData));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchAlarms();
  // }, []);

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
  //     // console.log('alarms', alarms);
  //   });

  //   eventSource.addEventListener('error', function (event) {
  //     console.log(event);

  //     eventSource.close();
  //   });
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}
      <GlobalStyles />
      {/* <Router /> */}
      <RouterProvider router={router} />
      {/* </Provider> */}
    </QueryClientProvider>
  );
}

export default App;
