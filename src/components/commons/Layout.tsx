import Footer from './Footer/footer';
import Header from './Header/Header';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
