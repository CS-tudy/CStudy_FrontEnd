import { media } from 'constants/media';
import styled from 'styled-components';

export const ContainerMarginTop = styled.div`
  height: 60px;
  ${media.tablet} {
    height: 80px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 100px;
  margin-top: 7rem;
  width: 100%;
  padding-right: 5vw;
`;
