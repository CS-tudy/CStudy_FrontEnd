import { Link } from 'react-router-dom';
import * as S from './style';
import { StyleNavLink } from 'components/NavLinkStyles';
import Logo_Png from 'assets/Logo.png';
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
import { AiOutlineClose } from 'react-icons/ai';

export interface PrevToogle {
  active: boolean;
}

const Header = () => {
  const { modalIsOpen, toggleModal } = useModal();
  const [signupModal, setSignupModal] = useState(true);
  const [active, setActive] = useState(false);
  const [moblie, setmoblie] = useState(false);

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
    if (window.innerWidth < 1024) {
      if (moblie === false) {
        document.body.style.overflowY = 'hidden';
        setmoblie(!moblie);
      } else {
        document.body.style.overflowY = 'auto';
        setmoblie(!moblie);
      }
    }
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
        <S.Nav active={active}>
          <S.NavList>
            <S.NavItem>
              <S.NavLink onClick={HandleClickToogle} to="/notice">
                공지사항
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink onClick={HandleClickToogle} to="/request">
                문제요청
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink onClick={HandleClickToogle} to="/problem">
                문제풀이
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink onClick={HandleClickToogle} to="/contest">
                대회
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink onClick={HandleClickToogle} to="/workbook">
                문제집
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink onClick={HandleClickToogle} to="/membersranks">
                전체랭킹
              </S.NavLink>
            </S.NavItem>
          </S.NavList>
        </S.Nav>
        <S.HamburgerBt onClick={HandleClickToogle}>
          {active ? <AiOutlineClose /> : <GiHamburgerMenu />}
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
