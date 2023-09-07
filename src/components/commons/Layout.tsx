import Container from './Container';
import Footer from './Footer/footer';
import Header from './Header/Header';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
