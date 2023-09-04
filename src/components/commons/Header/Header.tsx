import { Link } from 'react-router-dom';
import * as S from './style';
import { StyleNavLink } from 'components/NavLinkStyles';

import Logo_Webp from 'assets/Logo.webp';
import Logo_Png from 'assets/Logo.png';

const Header = () => {
  return (
    <S.Wrapper>
      <S.LogoWrap>
        <Link to="/">
          <picture>
            <source srcSet={Logo_Webp} type="image/webp" />
            <source srcSet={Logo_Png} type="image/png" />
            <img src={Logo_Png} alt="CStudy 로고" />
          </picture>
        </Link>
      </S.LogoWrap>
      <S.Nav>
        <S.NavList>
          <S.NavItem>
            <StyleNavLink to="/board">게시판</StyleNavLink>
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
      <S.Sign>
        <button>로그인</button>
        <Link to="signup">회원가입</Link>
      </S.Sign>
    </S.Wrapper>
  );
};

export default Header;
