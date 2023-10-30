import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';

export const StyleNavLink = styled(NavLink)`
  &.active {
    font-weight: bold;
  }
  display: block;
  font-size: ${FONT.REGULAR_14};
  color: ${COLOR.BLACK};
`;
