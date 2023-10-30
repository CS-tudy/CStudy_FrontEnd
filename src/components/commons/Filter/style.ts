import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const Filter = styled.button`
  &:hover {
    background: ${COLOR.GRAY};
  }

  &.active {
    background: #6dd93f;
    color: ${COLOR.WHITE};
  }

  padding: 1.2rem 1.4rem;
  border-radius: 5rem;
  background: ${COLOR.GRAY_50};
  margin-right: 2rem;
  text-align: center;
  font-size: ${FONT.REGULAR_14};
  border: 1px solid #dbdbdb;
  cursor: pointer;
`;
