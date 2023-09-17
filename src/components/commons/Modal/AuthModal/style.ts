import { COLOR } from 'constants/Color';
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
  width: 58rem;
  height: 57rem;
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
  font-size: 20px;
  margin-bottom: 1.4rem;
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
  margin: 3rem auto 0;
`;

export const GoogleLogo = styled.img`
  width: 7rem;
  height: 7rem;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
`;
