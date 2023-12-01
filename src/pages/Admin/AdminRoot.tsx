import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/unit/admin/List';
import { memo } from 'react';

const AdminRoot = () => {
  return (
    <Wrapper>
      <Navbar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

export default memo(AdminRoot);
