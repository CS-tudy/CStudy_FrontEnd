import styled from 'styled-components';
import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';

export const PaginationButton = styled.button`
  ${FONT.BOLD_20}
  position: relative;

  &.active {
    color: ${COLOR.WHITE};
  }

  &.active::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.7rem 1.5rem;
    background-color: ${COLOR.MAIN};
    border: 0.2rem solid ${COLOR.GRAY_100};
    border-radius: 0.8rem;
    z-index: -1;
  }
`;
