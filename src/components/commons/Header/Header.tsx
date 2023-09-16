import { Link } from 'react-router-dom';
import * as S from './style';
import { StyleNavLink } from 'components/NavLinkStyles';
import Logo_Png from 'assets/Logo.png';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'hooks/@redux/modalSlice';
import useModal from 'hooks/useModal';
import Modal from 'components/unit/Modal';
import SignModal from '../Modal/SignModal';
import SignInModal from 'components/unit/SignIn';

const Header = () => {
  const { modalIsOpen, toggleModal } = useModal();
  const openModal = () => {
    toggleModal();
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
        <S.Sign>
          {modalIsOpen && (
            <Modal toggleModal={toggleModal}>
              <SignModal toggleModal={toggleModal}>
                <SignInModal />
              </SignModal>
            </Modal>
          )}
          <button onClick={openModal}>로그인</button>
          <StyleNavLink to="signup">회원가입</StyleNavLink>
        </S.Sign>
      </S.Wrapper>
    </>
  );
};

export default Header;
