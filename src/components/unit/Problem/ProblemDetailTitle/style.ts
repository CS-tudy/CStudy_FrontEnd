import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const BodyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const ProblemBodyTitle = styled.h3`
  ${FONT.H3}
`;
export const ProblemCategory = styled.div`
  font-size: ${FONT.REGULAR_20};
  padding-left: 6rem;
`;
