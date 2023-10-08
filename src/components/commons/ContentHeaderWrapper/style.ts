import styled from 'styled-components';
import { FONT } from 'constants/Font';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AdminWrapper = styled.div`
  display: flex;

  Button + Button {
    margin-left: 1rem;
  }
`;

export const Desc = styled.div`
  font-size: ${FONT.REGULAR_18};
`;
