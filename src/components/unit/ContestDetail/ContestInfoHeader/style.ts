import styled from 'styled-components';
import { FONT } from 'constants/Font';

export const Label = styled.h3`
  ${FONT.H2}
`;

export const ContestInfoHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`;

export const ButtonWrapper = styled.div`
  a + button {
    margin-left: 0.8rem;
  }

  button + button {
    margin-left: 0.8rem;
  }
`;
