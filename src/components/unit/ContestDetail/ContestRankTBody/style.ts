import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const StyledTbody = styled.tbody`
  font-size: ${FONT.REGULAR_14};
  font-weight: 400;
  color: ${COLOR.BLACK};
`;

export const StyledTr = styled.tr`
  background-color: ${COLOR.WHITE};
  border-radius: 0.8rem;
`;

export const StyledTd = styled.td`
  padding: 1.5rem;
  text-align: center;
  min-width: 10rem;
`;
