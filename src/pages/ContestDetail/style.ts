import { media } from 'constants/media';
import styled from 'styled-components';

export const ContestDetailHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  ${media.mobildL} {
    flex-direction: column;
  }
`;
export const ContestDetailContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  ${media.tablet} {
    flex-direction: column;
  }
`;

export const Div = styled.div`
  height: 80px;
  ${media.tablet} {
    height: 500px;
  }
`;
