import { Link } from 'react-router-dom';
import * as S from './style';
import ApproveStatus from 'components/commons/Status';
import { useDispatch } from 'react-redux';
import { Logintoggle } from 'hooks/@redux/loginModalSlice';
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
      e.preventDefault();
      dispatch(Logintoggle());
    }
  };

  const stripHtml = (html: any) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  };

  return (
    <S.Container>
      <Link to={`/request/${id}`} onClick={checkLogin}>
        <S.Article>
          <S.ArticleHeader>
            <ApproveStatus flag={flag} />
            <S.Title>{title}</S.Title>
          </S.ArticleHeader>
          <S.Content>{stripHtml(String(description))}</S.Content>
          <S.Detail>
            <span>{memberName}</span> · <span>{createAt}</span>
          </S.Detail>
        </S.Article>
      </Link>
    </S.Container>
  );
};

export default RequestItem;
