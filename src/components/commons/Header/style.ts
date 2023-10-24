import { styled } from 'styled-components';
import { FONT } from './../../../constants/Font';
import { COLOR } from 'constants/Color';
import { Link } from 'react-router-dom';
import { media } from 'constants/media';
import { PrevToogle } from './Header';

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
  ${media.tablet} {
    position: relative;
    z-index: 99;
  }
`;
export const LogoImg = styled.img`
  height: 6rem;
`;

export const Nav = styled.nav<PrevToogle>`
  flex: 2;
  ${media.tablet} {
    display: ${props => (props.active ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  font-size: ${FONT.REGULAR_14};
  color: #181818;
  ${media.tablet} {
    position: absolute;
    top: 91px;
    left: 0;
    flex-direction: column;
    width: 100%;
  }
  }
`;

export const NavItem = styled.li`
  margin: 0 2rem;

  ${media.tablet} {
    text-align: left;
    border-bottom: 1px solid #e6e7e9;
  }
`;

export const Sign = styled.div<PrevToogle>`
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
  ${media.tablet} {
    display: ${props => (props.active ? 'block' : 'none')};
    position: absolute;
    right: 5rem;
    margin-left: 1rem;
    padding-right: 3rem;
  }
`;
export const NavLink = styled(Link)`
  &.active {
    font-weight: bold;
  }
  display: block;
  font-size: ${FONT.REGULAR_14};
  color: ${COLOR.BLACK};
  padding: 2rem 2rem 2rem 0;
  ${media.tablet} {
    ${FONT.BOLD_16}
`;

export const MypageLink = styled(Link)`
  padding: 0.5rem;
  font-size: ${FONT.REGULAR_14};
  color: ${COLOR.BLACK};
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

// 반응형
export const HamburgerBt = styled.button`
  display: none;
  ${media.tablet} {
    display: flex;
    align-items: center;
    font-size: 3rem;
    position: absolute;
    right: 32px;
    height: 97px;
    z-index: 5;
  }
`;
