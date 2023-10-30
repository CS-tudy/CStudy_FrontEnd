import * as S from './style';
import NoticeAdminOptionGroup from '../noticeAdminOption';
import { useState } from 'react';

interface AdminNoticeCardProps {
  id: number;
  title: string;
  content: string;
  createdDate: string;
}

const AdminNoticeListCard = ({
  id,
  title,
  content,
  createdDate,
}: AdminNoticeCardProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.Container>
      <S.Article>
        <S.ContentWrapper>
          <S.Content key={id}>
            <NoticeAdminOptionGroup
              key={id}
              id={id}
              title={title}
              content={content}
              createdDate={createdDate}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          </S.Content>
        </S.ContentWrapper>
      </S.Article>
    </S.Container>
  );
};

export default AdminNoticeListCard;
