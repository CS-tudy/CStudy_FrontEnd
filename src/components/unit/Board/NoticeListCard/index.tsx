import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

interface NoticeCardProps {
  id: number;
  title: string;
  content: string;
  createdDate: string;
}
const NoticeListCard = ({
  id,
  title,
  content,
  createdDate,
}: NoticeCardProps) => {
  return (
    <S.Container>
      <Link to={`${id}`}>
        <S.Article>
          <S.ContentWrapper>
            <S.Content>
              <S.Title>{title}</S.Title>
              <S.Detail>
                <p>{content}</p>·<span>{createdDate}</span>
              </S.Detail>
            </S.Content>
          </S.ContentWrapper>
        </S.Article>
      </Link>
    </S.Container>
  );
};

export default NoticeListCard;
