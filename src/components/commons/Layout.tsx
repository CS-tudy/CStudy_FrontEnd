import Container from './Container';
import Footer from './Footer/footer';
import Header from './Header/Header';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
