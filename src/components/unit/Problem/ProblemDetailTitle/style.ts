import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const BodyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ProblemBodyTitle = styled.h3`
  ${FONT.H3}
`;
export const ProblemCategory = styled.div`
  font-size: ${FONT.REGULAR_20};
  padding-left: 2.5rem;
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
`;

export const Div2 = styled.div``;

export const Timer = styled.div`
  background-color: ${COLOR.GRAY_50};
  padding: 12px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Time = styled.span`
  display: inline-block;
  padding-left: 8px;
  font-size: ${FONT.REGULAR_18};
`;
