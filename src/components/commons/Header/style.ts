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
`;
export const LogoImg = styled.img`
  height: 6rem;
`;
export const Nav = styled.nav`
  flex: 3;
`;
export const NavList = styled.ul<PrevToogle>`
  display: flex;
  justify-content: center;
  font-size: ${FONT.REGULAR_14};
  color: #181818;
  ${media.tablet} {
    display: ${props => (props.active ? 'block' : 'none')};
    position: absolute;
    right: 0;
    top: 91px;
    flex-direction: column;
    background-color: #fff;
    justify-content: flex-start;
    width: 30rem;
    height: calc(100vh - 91px);
  }
`;

export const NavItem = styled.li`
  margin-left: 1rem;

  & > a {
    display: inline-block;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  }
  ${media.tablet} {
    margin: 2rem 2rem 2rem 0;
    text-align: right;
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
    right: 0;
    bottom: -50rem;
    margin-left: 1rem;
    padding-right: 3rem;
  }
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
    font-size: 30px;
    position: absolute;
    right: 32px;
    height: 97px;
  }
`;
