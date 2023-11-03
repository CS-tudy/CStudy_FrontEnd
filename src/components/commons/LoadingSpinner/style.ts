import { COLOR } from 'constants/Color';
import styled, { css } from 'styled-components';

export const LoadingSpinner = styled.div`
  inset: 0;
  opacity: 0.9;
  z-index: 50;
`;
export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CommonBounceCSS = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${COLOR.WHITE};
  position: absolute;
  opacity: 0.6;
  animation: loading-bounce 2s infinite ease-in-out;

  @keyframes loading-bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`;

export const DoubleBounce1 = styled.div`
  ${CommonBounceCSS};
`;
export const DoubleBounce2 = styled.div`
  ${CommonBounceCSS};
  animation-delay: -1s;
`;
