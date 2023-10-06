import * as S from './style';
import NoticeAdminOptionGroup from '../noticeAdminOption';
import { useDeleteNoticeList } from 'hooks/@query/board/useNoticeDelete';
import { useUpdateNoticeList } from 'hooks/@query/board/useNoticeUpdate';
import { useState, useCallback } from 'react';
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormReset,
  useForm,
} from 'react-hook-form';
import Input from 'components/commons/Input';

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
          <S.Content>
            <NoticeAdminOptionGroup
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
