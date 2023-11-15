import styled from 'styled-components';
import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';

export const ProblemContentWrapper = styled.div`
  /* padding-top: 0.5rem; */
`;
export const ProblemContentTitle = styled.h4`
  /* ${FONT.H1} */
  ${FONT.BOLD_22}
  padding-top: 5px;
`;

export const ProblemContentTitleDetail = styled.div`
  padding-top: 2.5rem;
  color: #bbb;
`;
