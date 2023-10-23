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
import { RootState } from 'stroe';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from 'hooks/@redux/registerModalSlice';
import { Logintoggle } from 'hooks/@redux/loginModalSlice';

export interface PrevToogle {
  active: boolean;
}

const Header = () => {
  // const { modalIsOpen, toggleModal } = useModal();
  const [signupModal, setSignupModal] = useState(true);
  const [active, setActive] = useState(false);

  const isRegisterModalOpen = useSelector(
    (state: RootState) => state.registerModal.isOpen,
  );
  const isLoginModalOpen = useSelector(
    (state: RootState) => state.loginModal.isOpen,
  );

  const dispatch = useDispatch();
  const { mutate: signOut } = useSignOut();

  const RegistertoggleModal = () => {
    dispatch(toggle());
  };

  const LogintoggleModal = () => {
    dispatch(Logintoggle());
  };

  // const openModal = () => {
  //   toggleModal();
  //   setSignupModal(false);
  // };
  // const openSignupModal = () => {
  //   toggleModal();
  //   setSignupModal(true);
  // };
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
          {isLoginModalOpen && (
            <Modal toggleModal={LogintoggleModal}>
              <SignModal toggleModal={LogintoggleModal}>
                <SignInModal />
              </SignModal>
            </Modal>
          )}
          {isRegisterModalOpen && (
            <Modal toggleModal={RegistertoggleModal}>
              <SignModal toggleModal={RegistertoggleModal}>
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
              {/* <button onClick={openModal}>로그인</button>
              <button onClick={openSignupModal}>회원가입</button> */}
              <button onClick={LogintoggleModal}>로그인</button>
              <button onClick={RegistertoggleModal}>회원가입</button>
            </>
          )}
        </S.Sign>
      </S.Wrapper>
    </>
  );
};

export default Header;
