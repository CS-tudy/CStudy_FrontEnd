import styled from 'styled-components';
import { COLOR } from 'constants/Color';

export const ModalContainer = styled.div`
  background-color: ${COLOR.WHITE};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* padding: 2.4rem; */
  padding: 4rem;
  border-radius: 0.8rem;
  min-width: 30rem;
  z-index: 100;
`;

export const ModalTitle = styled.h4`
  margin-top: 0;
  display: flex;
  justify-content: center;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  button + button {
    margin-left: 1rem;
  }
`;
