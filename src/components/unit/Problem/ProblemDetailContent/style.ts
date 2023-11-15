import styled from 'styled-components';
import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';

export const ProblemContentWrapper = styled.div``;
export const ProblemContentTitle = styled.h4`
  ${FONT.BOLD_20}
  padding-top: 5px;
`;

export const ProblemContentTitleDetail = styled.div`
  padding-top: 2.5rem;
  color: ${COLOR.GRAY_100};
`;
