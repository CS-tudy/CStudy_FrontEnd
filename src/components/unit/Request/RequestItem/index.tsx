import { Link } from 'react-router-dom';
import * as S from './style';
import ApproveStatus from 'components/commons/Status';

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

  const checkAndDisplayLoginModal = () => {
    return;
  };
  return (
    <S.Container>
      <Link to={`/request/${id}`} onClick={checkAndDisplayLoginModal}>
        <S.Article>
          <S.ArticleHeader>
            <ApproveStatus flag={flag} />
            <S.Title>{title}</S.Title>
          </S.ArticleHeader>
          <S.Content>{description}</S.Content>
          <S.Detail>
            <span>{memberName}</span>·<span>{createAt}</span>
          </S.Detail>
        </S.Article>
      </Link>
    </S.Container>
  );
};

export default RequestItem;
