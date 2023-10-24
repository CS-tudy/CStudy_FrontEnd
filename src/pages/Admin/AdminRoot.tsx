import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from 'components/commons/Header/Header';
import Footer from 'components/commons/Footer/footer';

const AdminRoot = ({ children }: React.PropsWithChildren) => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      {/* {children} */}
      <Footer />
    </Wrapper>
  );
};

export default AdminRoot;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;
