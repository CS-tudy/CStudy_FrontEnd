import { Link } from 'react-router-dom';
import * as S from './style';
import ApproveStatus from 'components/commons/Status';
import { useDispatch, useSelector } from 'react-redux';
import { Logintoggle } from 'hooks/@redux/loginModalSlice';
import Modal from 'components/unit/Modal';
import SignModal from 'components/commons/Modal/SignModal';
import SignInModal from 'components/unit/SignIn';
import { isLogin } from 'repository/auth';

interface RequestListProps {
  id: number;
  flag: boolean;
  title: string;
  description: string;
  memberName: string;
  createAt: string;
}

const RequestItem = (props: RequestListProps) => {
  const { id, flag, title, description, memberName, createAt } = props;

  const dispatch = useDispatch();

  const checkLogin = (e: React.MouseEvent) => {
    if (!isLogin()) {
      // Toast.error('로그인 후 이용하실 수 있습니다.');
      e.preventDefault();
      dispatch(Logintoggle());
    }
  };

  return (
    <S.Container>
      <Link to={`/request/${id}`} onClick={checkLogin}>
        <S.Article>
          <S.ArticleHeader>
            <ApproveStatus flag={flag} />
            <S.Title>{title}</S.Title>
          </S.ArticleHeader>
          <S.Content>{description}</S.Content>
          <S.Detail>
            <span>{memberName}</span> · <span>{createAt}</span>
          </S.Detail>
        </S.Article>
      </Link>
    </S.Container>
  );
};

export default RequestItem;
