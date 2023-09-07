import { styled } from 'styled-components';

export const Modal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalTest = styled.div`
  position: fixed;
  top: 25vh;
  left: 25%;
  width: 50%;
  height: 30%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`;
