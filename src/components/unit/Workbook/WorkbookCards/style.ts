import styled from 'styled-components';

export const WorkBookCards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 3rem;

  @media all and (max-device-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (max-device-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
