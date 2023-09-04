import Layout from 'components/commons/Layout';
import Banner from 'components/main/Banner';
import Contents from 'components/main/Contents';

const Main = () => {
  return (
    <>
      <Layout>
        <Banner />
        <Contents />
      </Layout>
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  display: block;
  display: flex;
  justify-content: center;
  margin: 2rem;
`;
