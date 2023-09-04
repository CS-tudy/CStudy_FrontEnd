import { styled } from 'styled-components';
import { FONT } from './../../../constants/Font';
import { NavLink } from 'react-router-dom';

export const ContentSection = styled.section`
  padding-top: 3rem;
`;
export const ContentWrapper = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255);
  padding: 4rem 3rem;
  border-radius: 1.2rem;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0.2rem 0.2rem 0.5rem,
    rgba(0, 0, 0, 0.12) 0.1rem 0.1rem 0.4rem inset;
`;

export const ContentTitle = styled.h2`
    font-size:${FONT.H2}
}`;

export const ContentImg = styled.img`
  margin-top: 3rem;
  width: 55rem;
  height: 55rem;
  background-color: #e2e2e2;
`;

export const ContentTitleImg = styled.div`
  padding-right: 7.5rem;
  &:nth-of-type(2) {
    padding: 0 0 0 7.5rem;
  }
`;

export const ContentTexts = styled.div`
  padding-top: 12rem;
`;

export const TextTitle = styled.strong`
  font-size: ${FONT.BOLD_16};
`;

export const Texts = styled.span`
  display: inline-block;
  font-size: ${FONT.REGULAR_14};
  margin-top: 1rem;
`;

export const BoldText = styled.span`
  display: inline-block;
  font-size: ${FONT.BOLD_14};
`;

export const ContentLink = styled(NavLink)`
  display: inline-block;
`;
