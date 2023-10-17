import { media } from 'constants/media';
import styled from 'styled-components';

export const WorkBookCards = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 3rem;

  ${media.desktopS} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.mobildL} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.mobileM} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
