import { COLOR } from 'constants/Color';
import { styled } from 'styled-components';

export const List = styled.ul`
  li {
    padding: 2rem 1.5rem;
    & > a {
      display: inline-block;
      color: ${COLOR.BLACK};
    }
  }
`;
