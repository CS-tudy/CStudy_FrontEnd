import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from 'components/commons/Header/Header';
import Footer from 'components/commons/Footer/footer';
import Navbar from 'components/unit/admin/List';

const AdminRoot = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
      {/* {children} */}
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default AdminRoot;

const Wrapper = styled.div`
  display: flex;
`;
