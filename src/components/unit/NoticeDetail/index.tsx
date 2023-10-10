import { memo } from 'react';
import { RequestNoticeDetail } from 'types/api';
import * as S from './style';

interface NoticeDetailProps {
  request: RequestNoticeDetail;
}

const NoticeDetail = ({ request }: NoticeDetailProps) => {
  return (
    <S.Container>
      <S.Title>{request?.title}</S.Title>
      <S.Detail>{request?.createdDate}</S.Detail>
      <S.Content>{request?.content}</S.Content>
    </S.Container>
  );
};

export default memo(NoticeDetail);
