import { GlobalStyles } from 'styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Router from 'routes/Router';
import { Provider } from 'react-redux';
import store, { persistor } from 'stroe';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyles />
          <Router />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
