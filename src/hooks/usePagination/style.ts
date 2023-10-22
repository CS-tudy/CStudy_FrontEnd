// import styled from 'styled-components';
// import { FONT } from 'constants/Font';
// import { COLOR } from 'constants/Color';

// export const PaginationButton = styled.button`
//   ${FONT.REGULAR_20}
//   font-weight: 600;
//   position: relative;

//   &.active {
//     color: ${COLOR.WHITE};
//   }

//   &.active::before {
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     padding: 1.5rem 1.5rem;
//     background-color: ${COLOR.MAIN};
//     border-radius: 0.8rem;
//     z-index: -1;
//   }
// `;

import styled from 'styled-components';
import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';

export const PaginationButton = styled.button`
  ${FONT.BOLD_16}
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
    padding: 1.3rem 1.3rem;
    background-color: ${COLOR.MAIN};
    border-radius: 0.8rem;
    z-index: -1;
  }
`;
