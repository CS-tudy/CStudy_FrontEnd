import { media } from 'constants/media';
import styled from 'styled-components';

export const ContestDetailContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  ${media.tablet} {
    flex-direction: column;
  }
`;
