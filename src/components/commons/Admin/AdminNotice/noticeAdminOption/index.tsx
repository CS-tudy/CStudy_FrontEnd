import { useDeleteNoticeList } from 'hooks/@query/board/useNoticeDelete';
import { useUpdateNoticeList } from 'hooks/@query/board/useNoticeUpdate';
import { useState, useCallback } from 'react';
import * as S from './style';

import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormReset,
  useForm,
} from 'react-hook-form';
import { Link } from 'react-router-dom';
import { isAdmin } from 'repository/auth';
import Input from 'components/commons/Input';

interface AdminNoticeCardProps {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  isActive: boolean;
  setIsActive: any;
}

const NoticeAdminOptionGroup = ({
  id,
  title,
  content,
  createdDate,
  //   handleSubmit,
  isActive,
  setIsActive,
}: AdminNoticeCardProps) => {
  const {
    register,
    handleSubmit: handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: title,
    },
  });
  const handleIsActive = useCallback((isActive: boolean) => {
    setIsActive(isActive);
  }, []);
  const { mutate: deleteComment } = useDeleteNoticeList();
  const UpdateNotice = useUpdateNoticeList({ id, handleIsActive });

  const handleDelete = () => {
    deleteComment(id);
  };

  const onSubmit: SubmitHandler<FieldValues> = data => {
    const formData = {
      content: data.content,
      title: data.title,
    };

    UpdateNotice({ id, formData });
  };
  return (
    <>
      {isActive ? (
        <>
          <Input
            id="title"
            defaultValue={title}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="content"
            defaultValue={content}
            type="textarea"
            register={register}
            errors={errors}
            required
          />
        </>
      ) : (
        <>
          <S.Title>{title}</S.Title>
        </>
      )}
      {isActive ? (
        <>
          <button onClick={handleSubmit(onSubmit)}>수정하기</button>
          <button onClick={() => setIsActive(false)}>취소</button>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setIsActive((active: boolean) => !active)}
          >
            수정
          </button>
          <button onClick={handleDelete}>삭제</button>
          <S.Detail>
            <p>{content}</p>·<span>{createdDate}</span>
          </S.Detail>
        </>
      )}
    </>
  );
};

export default NoticeAdminOptionGroup;
