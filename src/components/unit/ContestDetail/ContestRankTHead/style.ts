import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';

export const StyledThead = styled.thead`
  ${FONT.BOLD_14}
  color: ${COLOR.GRAY_100};
`;

export const StyledTr = styled.tr`
  background-color: ${COLOR.WHITE};
  border-radius: 0.8rem;
`;

export const StyledTh = styled.th`
  padding: 1.5rem;
  text-align: center;
  min-width: 10rem;
`;
