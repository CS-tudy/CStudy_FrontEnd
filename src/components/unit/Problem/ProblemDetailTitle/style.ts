import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { media } from 'constants/media';
import styled from 'styled-components';

export const BodyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.tablet} {
    flex-direction: column-reverse;
  }
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
  ${media.tablet} {
    margin-bottom: 5px;
  }
`;

export const Div2 = styled.div`
  width: 100%;
  ${media.tablet} {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Timer = styled.div`
  background-color: #f8f8f8;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${COLOR.GRAY_80};
`;

export const Time = styled.span`
  display: inline-block;
  padding-left: 8px;
  font-size: ${FONT.REGULAR_18};
`;
