import { COLOR } from 'constants/Color';
import { SHADOW } from 'constants/Shadow';
import { media } from 'constants/media';
import { styled } from 'styled-components';

export const Nav = styled.nav`
  width: 250px;
  min-height: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: ${SHADOW.CONTENTBOX_REVERSE};
`;

export const LogoWrap = styled.h1`
  padding-left: 1.8rem;
  padding-top: 2rem;
  ${media.tablet} {
    position: relative;
    z-index: 99;
  }
`;
export const LogoImg = styled.img`
  height: 6rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 3rem 1rem;
  border-radius: 0.5rem;
  height: 50px;
  cursor: pointer;
  border-bottom: 1px solid #dbdbdb;
  &:first-child {
    border-top: 1px solid #dbdbdb;
  }
  &:hover {
    background-color: ${COLOR.MAIN};
  }
  &:hover > a {
    color: ${COLOR.WHITE};
  }
  &:hover svg {
    color: ${COLOR.WHITE};
  }
  & > a {
    width: calc(100% - 45px);
    padding: 3rem 1rem;
  }
`;

export const Icon = styled.span`
  width: 45px;
  min-width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

export const Sidebar = styled.div`
  box-shadow: 0x5x1 rgba(0, 0, 01);

  transition: all 0.4s ease;
`;

export const ItemWrapper = styled.ul`
  margin-top: 1.2rem;
`;

export const SidebarContent = styled.div`
  display: flex;
  height: auto;
  flex-direction: 'column';
  justify-content: 'space-between';
  padding: '30' '16';

  .list {
    list-style: none;
  }
  .nav-link {
  }

  .icon {
    margin-right: '14';
    font-size: '20';
    color: '#707070';
  }

  .link {
    font-size: '16';
    color: '#707070';
    font-weight: '400';
  }

  .lists:hover {
    background-color: '#407OF4';
  }
  .nav-link:hover .icon,
  .nav-link:hover.link {
    color: '#fff';
  }
`;
