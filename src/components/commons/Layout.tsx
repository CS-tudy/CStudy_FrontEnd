import { styled } from 'styled-components';
import Container from './Container';
import Footer from './Footer/footer';
import Header from './Header/Header';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;
