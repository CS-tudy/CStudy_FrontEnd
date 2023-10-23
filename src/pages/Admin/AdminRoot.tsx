import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from 'pages/Request/style';

const AdminRoot = ({ children }: React.PropsWithChildren) => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      {/* {children} */}
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default AdminRoot;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;
