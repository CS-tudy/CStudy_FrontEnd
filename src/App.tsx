import { GlobalStyles } from 'styles/GlobalStyles';
import './App.css';
import Router from 'routes/Router';
import Layout from 'components/commons/Layout';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
