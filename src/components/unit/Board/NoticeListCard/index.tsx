import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { isLogin } from 'repository/auth';
import { Logintoggle } from 'hooks/@redux/loginModalSlice';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import FormattedDate from 'components/commons/moment';

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
  const dispatch = useDispatch();
  const formattedDate = moment(createdDate).format('YYYY-MM-DD HH:mm');
  const checkLogin = (e: React.MouseEvent) => {
    if (!isLogin()) {
      // Toast.error('로그인 후 이용하실 수 있습니다.');
      e.preventDefault();
      dispatch(Logintoggle());
    }
  };

  return (
    <S.Container>
      <Link to={`${id}`} onClick={checkLogin}>
        <S.Article>
          <S.ContentWrapper>
            <S.Content>
              <S.Title>{title}</S.Title>
              <S.description>{content}</S.description>
              <S.Detail>
                <span>관리자 </span>·
                <FormattedDate date={createdDate} format="YYYY-MM-DD HH:mm" />
              </S.Detail>
            </S.Content>
          </S.ContentWrapper>
        </S.Article>
      </Link>
    </S.Container>
  );
};

export default NoticeListCard;
