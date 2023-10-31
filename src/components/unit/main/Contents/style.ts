import { styled } from 'styled-components';
import { FONT } from './../../../../constants/Font';
import { NavLink } from 'react-router-dom';
import { COLOR } from 'constants/Color';
import { media } from 'constants/media';

export const ContentSection = styled.section`
  padding-top: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;
export const ContentWrapper = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255);
  padding: 5rem 3rem;
  border-radius: 1.2rem;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0.2rem 0.2rem 0.5rem,
    rgba(0, 0, 0, 0.12) 0.1rem 0.1rem 0.4rem inset;
  ${media.mobileM} {
    flex-direction: column;
  }
`;
export const ContentWrapperReverse = styled(ContentWrapper)`
  ${media.mobileM} {
    flex-direction: column-reverse;
  }
`;

export const ContentTitle = styled.h2`
    font-size:${FONT.H2}
    padding-left:2rem;
    ${media.tablet} {
      font-size:${FONT.H1}
    }
    
}`;

export const ContentImg = styled.img`
  margin-top: 3rem;
  width: 50rem;
  height: 42rem;
  background-color: #e2e2e2;
  ${media.tablet} {
    width: 40rem;
    height: 32rem;
  }
  ${media.mobildL} {
    width: 30rem;
    height: 22rem;
  }
`;

export const ContentTitleImg = styled.div`
  padding-right: 10rem;
  &:nth-of-type(2) {
    padding: 0 0 0 10rem;
  }
  ${media.tablet} {
    padding-right: 7rem;
    &:nth-of-type(2) {
      padding: 0 0 0 7rem;
    }
  }
  ${media.mobildL} {
    padding-right: 5rem;
    &:nth-of-type(2) {
      padding: 0 0 0 5rem;
    }
  }
  ${media.mobileM} {
    padding-right: 0;
    padding-bottom: 5rem;
    text-align: center;
    &:nth-of-type(2) {
      padding: 0 0 5rem 0;
    }
  }
`;

export const ContentTexts = styled.div`
  padding-top: 15rem;
  ${media.tablet} {
    padding-top: 12rem;
  }
  ${media.mobildL} {
    padding-top: 10rem;
  }
  ${media.mobileM} {
    padding-top: 0;
    text-align: center;
  }
`;

export const TextTitle = styled.strong`
  ${FONT.BOLD_16};
  ${media.tablet} {
    ${FONT.BOLD_14};
  }
  ${media.mobildL} {
    ${FONT.BOLD_12};
  }
  ${media.mobileM} {
    display: none;
  }
`;

export const Texts = styled.span`
  display: inline-block;
  font-size: ${FONT.REGULAR_14};
  line-height: 2.5rem;
  margin: 1rem 3rem;
  ${media.tablet} {
    font-size: ${FONT.REGULAR_12};
  }
  ${media.mobileM} {
    display: none;
  }
`;

export const BoldText = styled.span`
  display: inline-block;
  ${FONT.BOLD_14};
  ${media.mobildL} {
    ${FONT.BOLD_12};
  }
`;
