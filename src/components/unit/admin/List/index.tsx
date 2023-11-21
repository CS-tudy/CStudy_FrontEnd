import * as S from './style';
import { StyleNavLink } from 'components/NavLinkStyles';
import Logo_Png from 'assets/Logo.png';
import { Link, Navigate } from 'react-router-dom';
import { isAdmin } from 'repository/auth';

const Navbar = () => {
  return (
    <>
      {isAdmin() ? (
        <S.Nav>
          <S.LogoWrap>
            <Link to="/">
              <picture>
                <S.LogoImg src={Logo_Png} alt="CStudy logo" />
              </picture>
            </Link>
          </S.LogoWrap>

          <S.Sidebar>
            <S.ItemWrapper>
              <S.Item>
                <StyleNavLink to="/admin/createnotice">공지 사항</StyleNavLink>
              </S.Item>
              <S.Item>
                <StyleNavLink to="/admin/createproblem">문제 생성</StyleNavLink>
              </S.Item>
              <S.Item>
                <StyleNavLink to="/admin/createcontest">대회 생성</StyleNavLink>
              </S.Item>
              <S.Item>
                <StyleNavLink to="/admin/createworkbook">
                  요청 문제
                </StyleNavLink>
              </S.Item>
            </S.ItemWrapper>
          </S.Sidebar>
        </S.Nav>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Navbar;
