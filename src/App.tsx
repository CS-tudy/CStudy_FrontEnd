import { GlobalStyles } from 'styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Router from 'routes/Router';
import { Provider } from 'react-redux';
import store from 'stroe';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyles />
        <Router />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
