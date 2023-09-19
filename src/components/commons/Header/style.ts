import { styled } from 'styled-components';
import { FONT } from './../../../constants/Font';
import { COLOR } from 'constants/Color';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5rem 0;
  justify-content: space-between;
  background-color: ${COLOR.WHITE};
  border-bottom: 1px solid #e9e9e9;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`;

export const LogoWrap = styled.h1`
  padding-left: 1.8rem;
`;
export const LogoImg = styled.img`
  height: 6rem;
`;
export const Nav = styled.nav`
  flex: 3;
`;
7;
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  font-size: ${FONT.REGULAR_14};
  color: #181818;
`;

export const NavItem = styled.li`
  & + & {
    margin-left: 1rem;
  }

  & > a {
    display: inline-block;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  }
  margin: 0.5rem 2rem;
  color: ${COLOR.BLACK};
`;

export const Sign = styled.div`
  display: flex;
  padding-right: 1.8rem;
  align-items: center;
  & > button {
    padding: 0.5rem;
    font-size: ${FONT.REGULAR_14};
  }

  & > button:first-child {
    margin-right: 1.4rem;
  }
`;

export const Admin = styled.div`
  padding-right: 2rem;
  a {
    color: ${COLOR.RED};
    ${FONT.BOLD_20};
    &:hover {
      color: ${COLOR.RED};
    }
  }
`;
