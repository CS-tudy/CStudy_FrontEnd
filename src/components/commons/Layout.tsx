import { styled } from 'styled-components';
import Container from './Container';
import Footer from './Footer/footer';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      {/* {children} */}
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  position: relative;
  max-width: 120rem;
  min-height: 100vh;
  margin: 0 auto;
`;
