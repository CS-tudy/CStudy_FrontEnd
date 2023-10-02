import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const Wrapper = styled.div`
  /* border-left: 1px solid ${COLOR.GRAY_100};
  margin-left: 0.625rem;
  margin-top: 1.25rem;
  padding-left: 1.1rem; */
`;

export const Profile = styled.div`
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
`;

export const Pheader = styled.div`
  p {
    font-size: ${FONT.BOLD_20};
  }
`;
export const Pboay = styled.div`
  padding: 1.1rem;
  p {
    font-size: ${FONT.BOLD_16};
  }
`;
