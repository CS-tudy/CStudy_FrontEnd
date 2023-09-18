import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const Filter = styled.button`
  &:hover {
    background: ${COLOR.GRAY_100};
  }

  &.active {
    background: ${COLOR.GREEN};
    color: ${COLOR.WHITE};
  }

  padding: 1.2rem;
  border-radius: 5rem;
  background: ${COLOR.GRAY_50};
  margin-right: 2rem;
  text-align: center;
  font-size: ${FONT.REGULAR_14};
  cursor: pointer;
`;
