// import { keyframes } from '@emotion/react';
import { COLOR } from 'constants/Color';
import { SHADOW } from 'constants/Shadow';
import { media } from 'constants/media';
import styled from 'styled-components';

// const move = keyframes`
//   from {
//     left: -50%;
//   }
//   to {
//     left: 0%;
//   }`;

export const ModalContainer = styled.div`
  background-color: #fff;
  position: fixed;
  top: 90px;
  right: 95px;
  /* padding: 25px 0; */
  width: 280px;
  height: 230px;
  z-index: 100;
  border: 1px solid #ddd;
  /* box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.45); */
  box-shadow: 1px 1px 3px 0.5px rgba(0, 0, 0, 0.45);

  ${media.tablet} {
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
