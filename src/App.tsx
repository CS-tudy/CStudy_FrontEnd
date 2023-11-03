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
