import { media } from 'constants/media';
import styled from 'styled-components';

export const ContestDetailContent = styled.div`
  width: 100%;
  display: flex;

  ${media.tablet} {
    flex-direction: column;
    margin-bottom: 200px;
  }
`;
