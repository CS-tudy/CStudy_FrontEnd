import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { media } from 'constants/media';
import { styled } from 'styled-components';

export const BannerImg = styled.img`
  width: 100%;
  height: 35rem;
  background-color: #e2e2e2;
`;
export const BannerWrapper = styled.div`
  position: relative;
`;
export const Texts = styled.p`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: ${COLOR.WHITE};
`;
export const Bold = styled.span`
  font-size: 6rem;
  font-weight: bold;
  background: linear-gradient(to right top, #51c2dc, #c2d4f7);
  color: transparent;
  -webkit-background-clip: text;
  ${media.tablet} {
    font-size: 5rem;
  }
  ${media.mobildL} {
    font-size: 3.5rem;
  }
`;

export const Text = styled.span`
  font-size: 2.5rem;
  letter-spacing: 2px;
  color: #c2e6f0;
  ${media.tablet} {
    font-size: 2rem;
  }
  ${media.mobildL} {
    font-size: 1.5rem;
  }
`;

export const SpanText = styled.span`
  color: #c9e7f3;
  ${media.tablet} {
    font-size: 1.5rem;
  }
  ${media.mobildL} {
    font-size: 1rem;
  }
`;
