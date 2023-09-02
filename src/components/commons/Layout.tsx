import Footer from './Footer/footer';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
