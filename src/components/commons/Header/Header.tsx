import { Link } from 'react-router-dom';
import * as S from './style';
import { StyleNavLink } from 'components/NavLinkStyles';
import Logo_Png from 'assets/Logo.png';
import { Button } from 'components/commons/Button/Style';
import React from 'react';
import { useSignOut } from 'hooks/@query/useSignOut';
import useModal from 'hooks/useModal';
import Modal from '../../unit/Modal';
import SignInModal from 'components/unit/SignIn';
import SignModal from '../Modal/SignModal';
import SignUp from 'components/unit/SignUp';
import { useState } from 'react';
import { isAdmin, isLogin } from 'repository/auth';
import { GiHamburgerMenu } from 'react-icons/gi';

export interface PrevToogle {
  active: boolean;
}

const Header = () => {
  const { modalIsOpen, toggleModal } = useModal();
  const [signupModal, setSignupModal] = useState(true);
  const [active, setActive] = useState(false);

  const { mutate: signOut } = useSignOut();

  const openModal = () => {
    toggleModal();
    setSignupModal(false);
  };
  const openSignupModal = () => {
    toggleModal();
    setSignupModal(true);
  };
  const HandleClickToogle = () => {
    setActive(active => !active);
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
          {isAuthenticated ? (
            <>
              <button onClick={() => signOut()}>로그아웃</button>
              <Link to="/">마이페이지</Link>
            </>
          ) : (
            <>
              <button onClick={openModal}>로그인</button>
              <button onClick={openSignupModal}>회원가입</button>
            </>
          )}
        </S.Sign>
        <S.Nav>
          <S.NavList active={active}>
            <S.NavItem>
              <StyleNavLink to="/notice">공지사항</StyleNavLink>
            </S.NavItem>
            <S.NavItem>
              <StyleNavLink to="/request">문제요청</StyleNavLink>
            </S.NavItem>
            <S.NavItem>
              <StyleNavLink to="/problem">문제풀이</StyleNavLink>
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
        <S.HamburgerBt onClick={HandleClickToogle}>
          <GiHamburgerMenu />
        </S.HamburgerBt>
        {isAdmin() && (
          <S.Admin>
            <StyleNavLink to="/admin/createProblem">관리자</StyleNavLink>
          </S.Admin>
        )}
        <S.Sign active={active}>
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
          {isLogin() ? (
            <>
              <button onClick={() => signOut()}>로그아웃</button>
              <S.MypageLink to="/mypage">마이페이지</S.MypageLink>
            </>
          ) : (
            <>
              <button onClick={openModal}>로그인</button>
              <button onClick={openSignupModal}>회원가입</button>
            </>
          )}
        </S.Sign>
      </S.Wrapper>
    </>
  );
};

export default Header;
