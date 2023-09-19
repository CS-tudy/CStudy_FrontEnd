import { Link } from 'react-router-dom';
import * as S from './style';
import { StyleNavLink } from 'components/NavLinkStyles';
import Logo_Png from 'assets/Logo.png';
import { Button } from 'components/commons/Button/Style';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'hooks/@redux/modalSlice';
import { useSignOut } from 'hooks/@query/useSignOut';
import { logout } from 'hooks/@redux/authSlice';
import useModal from 'hooks/useModal';
import Modal from '../../unit/Modal';
import SignInModal from 'components/unit/SignIn';
import SignModal from '../Modal/SignModal';
import SignUp from 'components/unit/SignUp';
import { useState } from 'react';
import { isAdmin } from 'repository/auth';

const Header = () => {
  const { modalIsOpen, toggleModal } = useModal();
  const [signupModal, setSignupModal] = useState(true);
  // const isAuthenticated = useSelector(
  //   (state: any) => state.auth.isAuthenticated,
  // );
  const { mutate: signOut } = useSignOut();

  const openModal = () => {
    toggleModal();
    setSignupModal(false);
  };
  const openSignupModal = () => {
    toggleModal();
    setSignupModal(true);
  };

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
        {isAdmin() && (
          <S.Admin>
            <StyleNavLink to="/admin/createProblem">관리자</StyleNavLink>
          </S.Admin>
        )}
        <S.Sign>
          {modalIsOpen && (
            <Modal toggleModal={toggleModal}>
              <SignModal toggleModal={toggleModal}>
                <SignInModal />
              </SignModal>
            </Modal>
          )}
          {modalIsOpen && signupModal && (
            <Modal toggleModal={toggleModal}>
              <SignModal toggleModal={toggleModal}>
                <SignUp />
              </SignModal>
            </Modal>
          )}
          {/* {isAuthenticated ? (
            <>
              <button onClick={() => signOut()}>로그아웃</button>
              <Link to="/">마이페이지</Link>
            </> */}
          {/* ) : ( */}
          <>
            <button onClick={openModal}>로그인</button>
            <button onClick={openSignupModal}>회원가입</button>
          </>
          {/* )} */}
        </S.Sign>
      </S.Wrapper>
    </>
  );
};

export default Header;
