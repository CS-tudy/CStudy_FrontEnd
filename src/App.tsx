import { GlobalStyles } from 'styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Router from 'routes/Router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
