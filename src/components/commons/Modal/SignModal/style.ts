import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  width: 48rem;
  /* height: 57rem; */
  padding: 7rem 0;
  border-radius: 3.2rem;
  background-color: ${COLOR.WHITE};
  transform: translate(-50%, -50%);
  animation: showModal 0.25s ease-in-out;

  @keyframes showModal {
    0% {
      transform: translate(-50%, -50%) scale(0.8);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;

export const XButton = styled.span`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  cursor: pointer;
`;

export const Title = styled.div`
  text-align: center;
  /* font-size: 20px; */
  margin-bottom: 1.4rem;
  font-size: ${FONT.BOLD_20};
  font-weight: 500;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
`;

export const TextSocialLogin = styled.span`
  margin: 0 2.8rem;
  color: #949494;
`;

export const Hr = styled.span`
  width: 14.5rem;
  height: 1px;
  background: #949494;
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  padding-top: 3rem;
  & a {
    &:last-child {
      background-color: #fae100;
    }
  }
`;

export const SocialLogo = styled.img`
  width: 7rem;
  height: 7rem;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: ${SHADOW.CONTENTBOX_MD};
`;
