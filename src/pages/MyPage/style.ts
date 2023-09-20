import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const MyInfoTitle = styled.h3`
  ${FONT.H2}
`;
export const MyPageTitle = styled.h2`
  ${FONT.H4}
`;

export const myInfoWrapper = styled.div`
  display: flex;
`;

export const MyPageInfoWrapper = styled.div`
  padding: 3rem 5rem;
  margin-top: 3rem;
  background-color: rgb(219, 236, 244);
  box-shadow:
    rgba(0, 0, 0, 0.1) 0.2rem 0.2rem 0.5rem,
    rgba(0, 0, 0, 0.12) 0.1rem 0.1rem 0.4rem inset;
  border-radius: 1.2rem;
`;

export const MyPageWrapper = styled.div`
  padding: 8rem 0 12rem;
  max-width: 1200px;
  margin: 0 auto;
`;
