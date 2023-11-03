import { memo } from 'react';
import { RequestNoticeDetail } from 'types/api';
import * as S from './style';
import FormattedDate from 'components/commons/moment';

interface NoticeDetailProps {
  request: RequestNoticeDetail;
}

const NoticeDetail = ({ request }: NoticeDetailProps) => {
  return (
    <S.Container>
      <S.Title>{request?.title}</S.Title>
      <S.Detail>
        <FormattedDate date={request?.createdDate} format="YYYY-MM-DD HH:mm" />
      </S.Detail>
      <S.Content>{request?.content}</S.Content>
    </S.Container>
  );
};

export default NoticeDetail;
