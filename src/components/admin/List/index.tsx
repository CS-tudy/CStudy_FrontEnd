import { StyleNavLink } from 'components/NavLinkStyles';
import * as S from './style';
const List = () => {
  return (
    <>
      <S.List>
        <li>
          <StyleNavLink to="/notice/admin/list">공지 사항</StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="/problem/admin/CreateProblem">
            문제 생성
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="/contest/admin/CreateContest">
            대회 생성
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="/request/admin/RequestQuestion">
            요청 문제
          </StyleNavLink>
        </li>
      </S.List>
    </>
  );
};

export default List;
