import { styled } from 'styled-components';
import { FONT } from './../../../constants/Font';
import { COLOR } from 'constants/Color';
import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { media } from 'constants/media';
import { PrevToogle } from './Header';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5rem 0;
  justify-content: space-between;
  background-color: ${COLOR.WHITE};
  border-bottom: 1px solid #dbdbdb;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.8rem;
  ${media.tablet} {
    position: relative;
    z-index: 99;
  }
`;
export const LogoImg = styled.img`
  width: 16.5rem;
  ${media.tablet} {
    width: 15.5rem;
  }
`;

export const Nav = styled.nav<PrevToogle>`
  flex: 2;
  ${media.tablet} {
    display: ${props => (props.$active ? 'block' : 'none')};
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
`;

export const NavItem = styled.li`
  margin: 0 2rem;
  ${media.custom(1166)} {
    margin: 0 0.8rem;
  }
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

  ${media.tablet} {
    display: ${props => (props.$active ? 'block' : 'none')};
    position: absolute;
    right: 5rem;
    top: 3rem;
    margin-left: 1rem;
    padding-right: 3rem;
  }
`;
export const NavLinkStyle = styled(NavLink)`
  &.active {
    font-weight: bold;
  }
  display: block;
  font-size: ${FONT.REGULAR_16};
  color: ${COLOR.BLACK};
  padding: 2rem 2rem 2rem 0rem;
  ${media.tablet} {
    ${FONT.BOLD_16}
    padding-left: 1.5rem;
  }
`;

export const MypageLink = styled(Link)`
  padding: 0.5rem;
  font-size: ${FONT.REGULAR_14};
  color: ${COLOR.BLACK};
  ${media.tablet} {
    position: absolute;
    top: -1.5rem;
    right: 7rem;
  }
`;

export const LogoutLink = styled.button`
  ${media.tablet} {
    position: absolute;
    top: -1.5rem;
    right: 3rem;
  }
`;

export const SigninButton = styled.button`
  ${media.tablet} {
    position: absolute;
    top: -1rem;
    right: 8.5rem;
    width: 50px;
  }
`;

export const SignupButton = styled.button`
  ${media.tablet} {
    position: absolute;
    top: -1rem;
    right: 2rem;
    width: 70px;
  }
`;

export const Admin = styled.div<PrevToogle>`
  padding-right: 2rem;
  a {
    color: ${COLOR.RED};
    ${FONT.BOLD_20};
    &:hover {
      color: ${COLOR.RED};
    }
  }
  ${media.tablet} {
    display: ${props => (props.$active ? 'block' : 'none')};
    position: absolute;
    right: 15rem;
    top: 1.65rem;
  }
`;

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

export const AlarmButton = styled.button<PrevToogle>`
  margin: 0.5rem;
  ${media.tablet} {
    position: absolute;
    right: 70px;
    display: ${props => (props.$active ? 'none' : 'block')};
  }
`;

export const AlarmMark = styled.div<PrevToogle>`
  position: absolute;
  right: 243px;
  top: 25px;
  ${media.tablet} {
    right: ${props => (props.$active ? '280px' : '72px')};
    top: ${props => (props.$active ? '10px' : '25px')};
    display: ${props => (props.$active ? 'none' : 'block')};
  }
`;
