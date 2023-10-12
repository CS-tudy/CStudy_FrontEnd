import { COLOR } from 'constants/Color';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
`;

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
export const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const FileInput = styled.input`
  /* display: none; */
`;
