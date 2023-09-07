import { Link } from 'react-router-dom';
import * as S from './style';
import { StyleNavLink } from 'components/NavLinkStyles';
import Logo_Png from 'assets/Logo.png';
import React from 'react';

const Header = () => {
  return (
    <>
      <S.Wrapper>
        <S.LogoWrap>
          <Link to="/">
            <picture>
              <S.LogoImg src={Logo_Png} alt="CStudy logo" />
            </picture>
          </Link>
        </S.LogoWrap>
        <S.Sign>
          <button>로그인</button>
          <Link to="signup">회원가입</Link>
        </S.Sign>
      </S.Wrapper>
      <S.NavHeader>
        <S.Nav>
          <S.NavList>
            <S.NavItem>
              <StyleNavLink to="/board">공지사항</StyleNavLink>
            </S.NavItem>
            <S.NavItem>
              <StyleNavLink to="/request">문제요청</StyleNavLink>
            </S.NavItem>
            <S.NavItem>
              <StyleNavLink to="/problemset">문제풀이</StyleNavLink>
            </S.NavItem>
            <S.NavItem>
              <StyleNavLink to="/contest">대회</StyleNavLink>
            </S.NavItem>
            <S.NavItem>
              <StyleNavLink to="/workbook">문제집</StyleNavLink>
            </S.NavItem>
            <S.NavItem>
              <StyleNavLink to="/membersranks">전체랭킹</StyleNavLink>
            </S.NavItem>
          </S.NavList>
        </S.Nav>
      </S.NavHeader>
    </>
  );
};

export default Header;
