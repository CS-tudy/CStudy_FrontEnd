import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { media } from 'constants/media';
import styled from 'styled-components';

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const MyId = styled.span`
  ${FONT.BOLD_18}
`;

export const MyRank = styled.div`
  padding: 3px 4px;
  background-color: ${COLOR.GRAY_50};
  border: 0.1rem solid #cdcdcd;
  border-radius: 0.6rem;
  margin-left: 1rem;
  font-size: 1.35rem;
`;

export const MyEmail = styled.span`
  font-size: ${FONT.REGULAR_16};
`;
