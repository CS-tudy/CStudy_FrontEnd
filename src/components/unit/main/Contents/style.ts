import { styled } from 'styled-components';
import { FONT } from './../../../../constants/Font';
import { media } from 'constants/media';

export const Wrapper = styled.div``;

export const Title = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${FONT.H4};
  text-align: center;
  background-color: #f5f5f5;
  line-height: 160%;
  padding: 1rem;
  ${media.mobildL} {
    font-size: ${FONT.H3};
  }
  ${media.mobileM} {
    font-size: 2.4rem;
  }
  ${media.custom(520)} {
    height: 280px;
  }
`;

export const BoldTitle = styled.div`
  font-weight: 550;
`;

export const DispalyNoneTitle = styled.div`
  ${media.custom(520)} {
    display: none;
  }
`;

export const SubTitle = styled.p`
  font-size: 2.5rem;
  ${media.mobildL} {
    font-size: 2rem;
  }
  ${media.mobileM} {
    font-size: 1.6rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 730px;
  font-size: 2.2rem;
  background-color: #fff;
  line-height: 160%;
  padding: 2rem 3rem;

  ${media.mobildL} {
    font-size: ${FONT.REGULAR_18};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.mobildL} {
    flex-direction: column-reverse;
  }
`;

export const ContentWrapper2 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  ${media.mobildL} {
    flex-direction: column-reverse;
  }
`;

export const Image = styled.div``;

export const Image1 = styled.div`
  &.animation {
    animation-name: opacity;
    animation-duration: 2300ms;

    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const Image2 = styled.div`
  &.animation {
    animation-name: opacity;
    animation-duration: 2300ms;

    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const Image3 = styled.div`
  &.animation {
    animation-name: opacity;
    animation-duration: 2300ms;

    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const ShadowedImg = styled.img`
  box-shadow: 0px 0px 13px 5px rgba(0, 0, 0, 0.25);
  width: 480px;
  ${media.tablet} {
    width: 45vw;
  }
  ${media.mobildL} {
    width: 75vw;
  }
`;

export const Img = styled.img`
  width: 650px;
  ${media.tablet} {
    width: 50vw;
  }
  ${media.mobildL} {
    width: 80vw;
  }
`;

export const RightBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5rem;
  margin-bottom: 5rem;
  ${media.mobildL} {
    margin-left: 0;
    margin-bottom: 0;
  }
`;

export const Text = styled.div`
  ${media.mobildL} {
    display: none;
  }
`;

export const BoldText = styled.div`
  font-size: ${FONT.H4};
  padding-bottom: 3.5rem;
  line-height: 160%;
  text-align: left;
  width: 100%;
  font-weight: 550;

  ${media.mobildL} {
    font-size: 2.4rem;
  }
  ${media.custom(520)} {
    display: none;
  }
`;

export const MobileText = styled.div`
  font-size: 2.4rem;
  padding-bottom: 3.5rem;
  line-height: 160%;
  display: none;
  font-weight: 550;
  ${media.custom(520)} {
    display: block;
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div``;

export const Word = styled.span`
  color: #0078ff;
  display: inline-block;
  padding-bottom: 8px;
  ${media.mobildL} {
    padding-bottom: 7px;
  }
`;
