import styled from 'styled-components';
import { FONT } from 'constants/Font';
import { media } from 'constants/media';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  ${media.mobildL} {
    display: block;

    div > a {
      margin-bottom: 3rem;
    }
  }
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
