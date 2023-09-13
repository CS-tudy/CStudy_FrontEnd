import { styled } from 'styled-components';
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
  max-width: 1200px;
  margin: 0 auto;
`;
