import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { ToastTheme } from 'constants/ToastTheme';

interface Props {
  type: string;
  duration?: string;
}

export const ToastContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  min-width: 7rem;
  max-width: 90vw;
  min-height: 3rem;
  border-radius: 3rem;
  padding: 0.7rem 1.2rem;
  background-color: ${({ type }) => ToastTheme[type]};
  color: ${COLOR.WHITE};
  word-break: keep-all;
  animation:
    slide-in-blurred-top 0.3s cubic-bezier(0.23, 1, 0.32, 1) both 0s,
    slide-out-blurred-top 0.3s cubic-bezier(0.755, 0.05, 0.855, 0.06) both 1.9s;
  animation-fill-mode: forwards;

  @keyframes slide-in-blurred-top {
    0% {
      transform: translate3D(0, -20rem, 0) scaleY(2.5) scaleX(0.2);
      transform-origin: 50% 0%;
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
  }

  @keyframes slide-out-blurred-top {
    0% {
      transform: translate3D(0, 0, 0) scaleY(1) scaleX(1);
      transform-origin: 50% 0%;
      filter: blur(0);
      opacity: 1;
      max-height: 100%;
    }
    100% {
      transform: translate3D(0, -20rem, 0) scaleY(2) scaleX(0.2);
      transform-origin: 50% 0%;
      filter: blur(40px);
      opacity: 0;
      max-height: 0px;
    }
  }

  & + & {
    margin-top: 0.6rem;
  }
`;

export const ToastIconContainer = styled.div`
  display: flex;
`;

export const ToastMessage = styled.p`
  margin-left: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
