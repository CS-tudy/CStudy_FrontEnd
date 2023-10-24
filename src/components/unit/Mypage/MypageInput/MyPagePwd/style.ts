import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const OldNewdPwd = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-child(2) {
    margin-left: 2.5rem;
  }
`;

export const PwdLabel = styled.label`
  ${FONT.BOLD_14}
`;
