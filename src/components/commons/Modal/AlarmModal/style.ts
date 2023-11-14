import { media } from 'constants/media';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  background-color: #fff;
  position: fixed;
  top: 90px;
  right: 95px;
  width: 280px;
  height: 230px;
  z-index: 100;
  border: 1px solid #ddd;
  box-shadow: 1px 1px 3px 0.5px rgba(0, 0, 0, 0.45);

  ${media.tablet} {
    top: 67px;
    right: 70px;
  }
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
