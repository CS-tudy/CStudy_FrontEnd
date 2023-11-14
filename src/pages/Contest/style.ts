import { media } from 'constants/media';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  padding-right: 15px;
`;

export const ContainerMarginTop = styled.div`
  height: 60px;
  ${media.tablet} {
    height: 80px;
  }
`;
