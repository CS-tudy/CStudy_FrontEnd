import * as S from './style';
import { StyleNavLink } from 'components/NavLinkStyles';
import { LuClipboardList } from 'react-icons/lu';
import { MdOutlineContentPaste } from 'react-icons/md';
import Logo_Png from 'assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
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
              <S.Icon>
                <LuClipboardList size={30} />
              </S.Icon>
              <StyleNavLink to="/admin/list">
                <p>공지 사항</p>
              </StyleNavLink>
            </S.Item>
            <S.Item>
              <S.Icon>
                <MdOutlineContentPaste size={30} />
              </S.Icon>
              <StyleNavLink to="/admin/CreateProblem">
                <p>문제 생성</p>
              </StyleNavLink>
            </S.Item>
            <S.Item>
              <S.Icon>
                <LuClipboardList size={30} />
              </S.Icon>
              <StyleNavLink to="/admin/CreateContest">
                <p>대회 생성</p>
              </StyleNavLink>
            </S.Item>
            <S.Item>
              <S.Icon>
                <LuClipboardList size={30} />
              </S.Icon>
              <StyleNavLink to="/admin/RequestQuestion">
                <p>요청 문제</p>
              </StyleNavLink>
            </S.Item>
          </S.ItemWrapper>
        </S.Sidebar>
      </S.Nav>
    </>
  );
};

export default Navbar;
